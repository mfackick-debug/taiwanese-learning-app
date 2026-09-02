import { createHash, randomBytes, randomUUID } from "crypto";
import WebSocket from "ws";
import {
  DEFAULT_PITCH,
  DEFAULT_RATE,
  DEFAULT_VOLUME,
  PRIMARY_VOICE,
} from "./constants";

const TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
const CHROMIUM_FULL_VERSION = "143.0.3650.75";
const CHROMIUM_MAJOR_VERSION = "143";
const SEC_MS_GEC_VERSION = `1-${CHROMIUM_FULL_VERSION}`;
const WIN_EPOCH = 11644473600;
const WSS_BASE =
  "wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1";

const USER_AGENT =
  `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36` +
  ` (KHTML, like Gecko) Chrome/${CHROMIUM_MAJOR_VERSION}.0.0.0 Safari/537.36` +
  ` Edg/${CHROMIUM_MAJOR_VERSION}.0.0.0`;

const CONNECT_TIMEOUT_MS = 12_000;
const RECEIVE_TIMEOUT_MS = 45_000;

let clockSkewSeconds = 0;

export type EdgeTtsOptions = {
  voice?: string;
  rate?: string;
  pitch?: string;
  volume?: string;
};

export class EdgeTtsError extends Error {
  readonly status?: number;
  readonly retryable: boolean;

  constructor(message: string, options?: { status?: number; retryable?: boolean }) {
    super(message);
    this.name = "EdgeTtsError";
    this.status = options?.status;
    this.retryable = options?.retryable ?? false;
  }
}

function generateSecMsGec(): string {
  let ticks = Date.now() / 1000 + clockSkewSeconds + WIN_EPOCH;
  ticks -= ticks % 300;
  ticks *= 1e7;
  const payload = `${Math.round(ticks)}${TRUSTED_CLIENT_TOKEN}`;
  return createHash("sha256").update(payload, "ascii").digest("hex").toUpperCase();
}

function generateMuid(): string {
  return randomBytes(16).toString("hex").toUpperCase();
}

function connectId(): string {
  return randomUUID().replaceAll("-", "");
}

function dateToString(): string {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const d = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    `${days[d.getUTCDay()]} ${months[d.getUTCMonth()]} ${pad(d.getUTCDate())} ` +
    `${d.getUTCFullYear()} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} ` +
    `GMT+0000 (Coordinated Universal Time)`
  );
}

function escapeXml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function removeIncompatibleCharacters(text: string): string {
  return [...text]
    .map((ch) => {
      const code = ch.codePointAt(0) ?? 0;
      if ((code >= 0 && code <= 8) || (code >= 11 && code <= 12) || (code >= 14 && code <= 31)) {
        return " ";
      }
      return ch;
    })
    .join("");
}

function toEdgeVoiceName(shortName: string): string {
  const match = shortName.match(/^([a-z]{2,})-([A-Z]{2,})-(.+Neural)$/);
  if (!match) {
    throw new EdgeTtsError(`Unsupported voice: ${shortName}`);
  }
  const lang = match[1];
  let region = match[2];
  let name = match[3];
  if (!lang || !region || !name) {
    throw new EdgeTtsError(`Unsupported voice: ${shortName}`);
  }
  const hyphen = name.indexOf("-");
  if (hyphen !== -1) {
    region = `${region}-${name.slice(0, hyphen)}`;
    name = name.slice(hyphen + 1);
  }
  return `Microsoft Server Speech Text to Speech Voice (${lang}-${region}, ${name})`;
}

function normalizeRate(rate: string): string {
  if (!/^[+-]\d+%$/.test(rate)) {
    throw new EdgeTtsError(`Invalid rate: ${rate}`);
  }
  return rate;
}

function buildSsml(text: string, options: Required<Pick<EdgeTtsOptions, "voice" | "rate" | "pitch" | "volume">>): string {
  const voiceName = toEdgeVoiceName(options.voice);
  const escaped = escapeXml(removeIncompatibleCharacters(text));
  return (
    `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='zh-TW'>` +
    `<voice name='${voiceName}'>` +
    `<prosody pitch='${options.pitch}' rate='${options.rate}' volume='${options.volume}'>` +
    `${escaped}` +
    `</prosody></voice></speak>`
  );
}

function extractAudioPayload(message: Buffer): Buffer | null {
  if (message.length >= 2) {
    const headerLength = message.readUInt16BE(0);
    if (headerLength >= 2 && headerLength + 2 <= message.length) {
      const headerText = message.subarray(0, headerLength).toString("utf8");
      if (headerText.includes("Path:audio")) {
        const audio = message.subarray(headerLength + 2);
        return audio.length > 0 ? audio : null;
      }
    }
  }

  const marker = Buffer.from("Path:audio\r\n");
  const markerAt = message.indexOf(marker);
  if (markerAt === -1) return null;
  let audio = message.subarray(markerAt + marker.length);
  if (audio.length >= 2 && audio[0] === 0x0d && audio[1] === 0x0a) {
    audio = audio.subarray(2);
  }
  return audio.length > 0 ? audio : null;
}

function adjustClockSkewFromDateHeader(dateHeader: string | undefined): void {
  if (!dateHeader) return;
  const serverMs = Date.parse(dateHeader);
  if (Number.isNaN(serverMs)) return;
  clockSkewSeconds += serverMs / 1000 - Date.now() / 1000;
}

function toBuffer(data: WebSocket.RawData): Buffer {
  if (Buffer.isBuffer(data)) return data;
  if (data instanceof ArrayBuffer) return Buffer.from(data);
  if (Array.isArray(data)) return Buffer.concat(data);
  return Buffer.from(data);
}

async function synthesizeOnce(text: string, options: Required<Pick<EdgeTtsOptions, "voice" | "rate" | "pitch" | "volume">>): Promise<Buffer> {
  const url =
    `${WSS_BASE}?TrustedClientToken=${TRUSTED_CLIENT_TOKEN}` +
    `&ConnectionId=${connectId()}` +
    `&Sec-MS-GEC=${generateSecMsGec()}` +
    `&Sec-MS-GEC-Version=${SEC_MS_GEC_VERSION}`;

  const chunks: Buffer[] = [];

  await new Promise<void>((resolve, reject) => {
    let settled = false;
    let receivedAudio = false;
    let receiveTimer: ReturnType<typeof setTimeout> | undefined;

    const finish = (error?: Error) => {
      if (settled) return;
      settled = true;
      if (receiveTimer) clearTimeout(receiveTimer);
      try {
        ws.close();
      } catch {
        // ignore
      }
      if (error) reject(error);
      else resolve();
    };

    const ws = new WebSocket(url, {
      handshakeTimeout: CONNECT_TIMEOUT_MS,
      headers: {
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
        Origin: "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold",
        "User-Agent": USER_AGENT,
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "en-US,en;q=0.9",
        Cookie: `muid=${generateMuid()};`,
      },
    });

    receiveTimer = setTimeout(() => {
      finish(new EdgeTtsError("Edge TTS receive timeout", { retryable: true }));
    }, RECEIVE_TIMEOUT_MS);

    ws.on("unexpected-response", (_req, res) => {
      const status = res.statusCode ?? 0;
      adjustClockSkewFromDateHeader(res.headers.date);
      finish(
        new EdgeTtsError(`Edge TTS handshake failed (${status})`, {
          status,
          retryable: status === 403 || status === 429 || status >= 500,
        }),
      );
    });

    ws.on("error", (err) => {
      finish(new EdgeTtsError(err.message || "Edge TTS WebSocket error", { retryable: true }));
    });

    ws.on("open", () => {
      const timestamp = dateToString();
      ws.send(
        `X-Timestamp:${timestamp}\r\n` +
          `Content-Type:application/json; charset=utf-8\r\n` +
          `Path:speech.config\r\n\r\n` +
          `{"context":{"synthesis":{"audio":{"metadataoptions":{` +
          `"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"false"` +
          `},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}\r\n`,
      );
      ws.send(
        `X-RequestId:${connectId()}\r\n` +
          `Content-Type:application/ssml+xml\r\n` +
          `X-Timestamp:${timestamp}Z\r\n` +
          `Path:ssml\r\n\r\n` +
          `${buildSsml(text, options)}`,
      );
    });

    ws.on("message", (data, isBinary) => {
      if (!isBinary) {
        const textMessage = data.toString();
        if (textMessage.includes("Path:turn.end")) {
          if (!receivedAudio) {
            finish(new EdgeTtsError("Edge TTS returned no audio", { retryable: true }));
            return;
          }
          finish();
        }
        return;
      }

      const audio = extractAudioPayload(toBuffer(data));
      if (audio) {
        receivedAudio = true;
        chunks.push(audio);
      }
    });

    ws.on("close", () => {
      if (!settled) {
        if (receivedAudio) finish();
        else finish(new EdgeTtsError("Edge TTS connection closed before audio", { retryable: true }));
      }
    });
  });

  const audio = Buffer.concat(chunks);
  if (audio.length === 0) {
    throw new EdgeTtsError("Edge TTS returned empty audio", { retryable: true });
  }
  return audio;
}

/**
 * Synthesize one text chunk via Microsoft Edge's free read-aloud endpoint.
 * No API key. Caller must pass a zh-TW voice.
 */
export async function synthesizeEdgeTts(text: string, options: EdgeTtsOptions = {}): Promise<Buffer> {
  const trimmed = text.trim();
  if (!trimmed) {
    throw new EdgeTtsError("Missing text");
  }

  const resolved = {
    voice: options.voice ?? PRIMARY_VOICE,
    rate: normalizeRate(options.rate ?? DEFAULT_RATE),
    pitch: options.pitch ?? DEFAULT_PITCH,
    volume: options.volume ?? DEFAULT_VOLUME,
  };

  try {
    return await synthesizeOnce(trimmed, resolved);
  } catch (error) {
    if (error instanceof EdgeTtsError && error.status === 403) {
      return synthesizeOnce(trimmed, resolved);
    }
    throw error;
  }
}
