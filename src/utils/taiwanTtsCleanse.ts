/**
 * Taiwan TTS cleansing booster.
 *
 * Rewrites text only for speech engines (Edge TTS / Web Speech API).
 * Never apply to on-screen sentences or source card data.
 */

const CJK = "\\u4e00-\\u9fff";
const WORD_CHAR = `[${CJK}\\d]`;

const PLACEHOLDER_OPEN = "\uFFF0";
const PLACEHOLDER_CLOSE = "\uFFF1";

/** 和 is hé/huó in compounds — protect before conjunction swap to hàn. */
const HE_COMPOUNDS: readonly string[] = [
  "和平",
  "和諧",
  "和尚",
  "和面",
  "和弦",
  "和約",
  "溫和",
  "緩和",
  "缓和",
  "柔和",
  "平和",
  "和解",
  "和聲",
  "和局",
  "和好",
  "和氣",
  "和風",
  "和樂",
  "和美",
  "和睦",
  "和議",
  "和談",
  "和製",
  "和文",
  "和紙",
  "和服",
  "和種",
  "和藝",
  "和合",
  "和讓",
  "和稀泥",
  "合作",
  "合同",
  "總和",
  "調和",
  "求和",
  "共和",
  "違和",
  "飽和",
  "寬和",
  "核和",
  "融和",
  "媾和",
  "議和",
  "講和",
  "隨和",
  "附和",
  "清和",
  "緩和",
];

/**
 * Phrase-level homophone overrides for Taiwan Mandarin.
 * Longest phrases are applied first.
 */
const PHRASE_REPLACEMENTS: ReadonlyArray<readonly [string, string]> = [
  ["垃圾", "勒色"],
  ["期待", "祈待"],
  ["危險", "唯險"],
];

/**
 * Lookahead-only so it works in every browser/WebView (no lookbehind `(?<=)`,
 * which is unsupported in some Safari/WebView versions and would throw at
 * module-eval time, breaking all TTS playback). The preceding word char is
 * captured ($1) and re-emitted; the following char is only looked ahead, so
 * consecutive conjunctions (e.g. 我和你和他) are handled in a single pass.
 */
const HE_CONJUNCTION_RE = new RegExp(`(${WORD_CHAR})和(?=${WORD_CHAR})`, "gu");

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function protectHeCompounds(text: string): { text: string; restore: (value: string) => string } {
  const stored: string[] = [];
  const compounds = [...new Set(HE_COMPOUNDS)].sort((a, b) => b.length - a.length);

  let out = text;
  for (const compound of compounds) {
    out = out.replace(new RegExp(escapeRegExp(compound), "g"), (match) => {
      const id = stored.length;
      stored.push(match);
      return `${PLACEHOLDER_OPEN}${id.toString(36)}${PLACEHOLDER_CLOSE}`;
    });
  }

  return {
    text: out,
    restore: (value) =>
      value.replace(
        new RegExp(`${PLACEHOLDER_OPEN}([0-9a-z]+)${PLACEHOLDER_CLOSE}`, "g"),
        (_, id) => stored[parseInt(id, 36)] ?? _,
      ),
  };
}

/**
 * Returns a TTS-only string with Taiwan-standard pronunciation hacks applied.
 * Idempotent: safe to call on already-cleansed text.
 */
export function cleanseTextForTaiwanTts(displayText: string): string {
  const original = String(displayText ?? "");
  if (!original) return original;

  // Cleansing must never break playback: on any unexpected error, fall back to
  // the original (display) text so the TTS engine still receives valid input.
  try {
    let out = original;

    const { text: protectedText, restore } = protectHeCompounds(out);
    out = protectedText;

    const phrases = [...PHRASE_REPLACEMENTS].sort((a, b) => b[0].length - a[0].length);
    for (const [from, to] of phrases) {
      out = out.split(from).join(to);
    }

    out = out.replace(HE_CONJUNCTION_RE, "$1汗");

    return restore(out);
  } catch {
    return original;
  }
}
