import {
  ALLOWED_VOICES,
  DEFAULT_RATE,
  FALLBACK_VOICE,
  MAX_CHUNK_CHARS,
  PRIMARY_VOICE,
  TTS_CACHE_LIMIT,
  type AllowedTaiwanVoice,
} from "./constants";
import { EdgeTtsError, synthesizeEdgeTts } from "./edgeTtsClient";

const SENTENCE_PUNCT = new Set(["。", "？", "！", "，", "、", ".", "?", "!", ",", "\n"]);

export type TaiwanTtsSpeakOptions = {
  voice?: string;
  rate?: string;
};

function isAllowedVoice(voice: string | undefined): voice is AllowedTaiwanVoice {
  return !!voice && (ALLOWED_VOICES as readonly string[]).includes(voice);
}

function resolveVoice(requested?: string): AllowedTaiwanVoice {
  return isAllowedVoice(requested) ? requested : PRIMARY_VOICE;
}

function resolveRate(requested?: string): string {
  if (requested && /^[+-]\d+%$/.test(requested)) return requested;
  return DEFAULT_RATE;
}

export function splitTextForTts(text: string, maxChars = MAX_CHUNK_CHARS): string[] {
  const source = text.trim();
  if (!source) return [];
  if (source.length <= maxChars) return [source];

  const pieces: string[] = [];
  let current = "";

  const flush = () => {
    const trimmed = current.trim();
    if (trimmed) pieces.push(trimmed);
    current = "";
  };

  for (const ch of source) {
    current += ch;
    const atBoundary = SENTENCE_PUNCT.has(ch);
    if (current.length >= maxChars && atBoundary) {
      flush();
    } else if (current.length >= maxChars) {
      flush();
    }
  }
  flush();

  return pieces.flatMap((piece) => {
    if (piece.length <= maxChars) return [piece];
    const hard: string[] = [];
    for (let i = 0; i < piece.length; i += maxChars) {
      hard.push(piece.slice(i, i + maxChars));
    }
    return hard;
  });
}

function voiceOrder(preferred: AllowedTaiwanVoice): AllowedTaiwanVoice[] {
  if (preferred === FALLBACK_VOICE) return [FALLBACK_VOICE, PRIMARY_VOICE];
  return [PRIMARY_VOICE, FALLBACK_VOICE];
}

function isRetryable(error: unknown): boolean {
  if (error instanceof EdgeTtsError) return error.retryable;
  return true;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Server-side Taiwan Mandarin TTS.
 * Primary: Edge TTS HsiaoChen. Fallback: HsiaoYu. No API key.
 */
export class TaiwanTtsService {
  private readonly cache = new Map<string, Buffer>();

  async synthesize(text: string, options: TaiwanTtsSpeakOptions = {}): Promise<Buffer> {
    const voice = resolveVoice(options.voice);
    const rate = resolveRate(options.rate);
    const key = `${voice}|${rate}|${text}`;

    const cached = this.cache.get(key);
    if (cached) {
      this.cache.delete(key);
      this.cache.set(key, cached);
      return cached;
    }

    const chunks = splitTextForTts(text);
    if (chunks.length === 0) {
      throw new EdgeTtsError("Missing text");
    }

    const parts: Buffer[] = [];
    for (const chunk of chunks) {
      parts.push(await this.synthesizeChunk(chunk, voice, rate));
    }

    const audio = Buffer.concat(parts);
    this.remember(key, audio);
    return audio;
  }

  private remember(key: string, audio: Buffer) {
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, audio);
    while (this.cache.size > TTS_CACHE_LIMIT) {
      const oldest = this.cache.keys().next().value;
      if (oldest === undefined) break;
      this.cache.delete(oldest);
    }
  }

  private async synthesizeChunk(
    text: string,
    preferred: AllowedTaiwanVoice,
    rate: string,
  ): Promise<Buffer> {
    let lastError: unknown;

    for (const voice of voiceOrder(preferred)) {
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          return await synthesizeEdgeTts(text, { voice, rate });
        } catch (error) {
          lastError = error;
          if (!isRetryable(error) && attempt === 0) break;
          await sleep(350 * (attempt + 1));
        }
      }
    }

    throw lastError instanceof Error ? lastError : new EdgeTtsError("Edge TTS failed");
  }
}

export const taiwanTtsService = new TaiwanTtsService();
