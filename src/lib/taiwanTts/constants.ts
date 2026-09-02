/** Taiwan Mandarin female voices only. Never use zh-CN / zh-HK. */
export const PRIMARY_VOICE = "zh-TW-HsiaoChenNeural";
export const FALLBACK_VOICE = "zh-TW-HsiaoYuNeural";

export const ALLOWED_VOICES = [PRIMARY_VOICE, FALLBACK_VOICE] as const;
export type AllowedTaiwanVoice = (typeof ALLOWED_VOICES)[number];

/** Learning default: slightly slower than conversational pace. */
export const DEFAULT_RATE = "-12%";
export const DEFAULT_PITCH = "+0Hz";
export const DEFAULT_VOLUME = "+0%";

/** Split long requests at sentence punctuation before this many characters. */
export const MAX_CHUNK_CHARS = 200;

export const TTS_CACHE_LIMIT = 200;
