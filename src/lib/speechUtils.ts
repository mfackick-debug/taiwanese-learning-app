import { cleanseTextForTaiwanTts } from "@/utils/taiwanTtsCleanse";

export type SpeakOptions = {
  pitch?: number;
  rate?: number;
  lang?: string;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: () => void;
};

const BLOCKED_VOICE_NAME = /xiaoxiao|xiaoyi|yunxi|yunjian|yunxia|yunyang|ting-ting|tingting|sin-ji|sinji|cantonese|hong\s*kong|yue[-_]?|粤|粵/i;

function normalize(value: string): string {
  return value.toLowerCase().replaceAll("_", "-");
}

function isZhTw(voice: SpeechSynthesisVoice): boolean {
  return normalize(voice.lang) === "zh-tw" || normalize(voice.lang).startsWith("zh-tw-");
}

function isBlockedVoice(voice: SpeechSynthesisVoice): boolean {
  const lang = normalize(voice.lang);
  if (lang.includes("zh-cn") || lang.includes("zh-hk") || lang.includes("zh-yue")) return true;
  return BLOCKED_VOICE_NAME.test(voice.name);
}

function hasFemaleName(voice: SpeechSynthesisVoice): boolean {
  const name = normalize(voice.name);
  return (
    name.includes("female") ||
    name.includes("女性") ||
    name.includes("mei-jia") ||
    name.includes("meijia") ||
    name.includes("美佳") ||
    name.includes("hsiaochen") ||
    name.includes("hsiao-chen") ||
    name.includes("曉臻") ||
    name.includes("晓臻") ||
    name.includes("hsiaoyu") ||
    name.includes("hsiao-yu") ||
    name.includes("曉雨") ||
    name.includes("晓雨")
  );
}

function findByNameIncludes(voices: SpeechSynthesisVoice[], keyword: string): SpeechSynthesisVoice | undefined {
  const k = normalize(keyword);
  return voices.find((voice) => isZhTw(voice) && !isBlockedVoice(voice) && normalize(voice.name).includes(k));
}

export function pickTaiwanZhTwVoice(allVoices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  const taiwan = allVoices.filter((voice) => isZhTw(voice) && !isBlockedVoice(voice));
  if (taiwan.length === 0) return undefined;

  return (
    findByNameIncludes(taiwan, "hsiaochen") ||
    findByNameIncludes(taiwan, "曉臻") ||
    findByNameIncludes(taiwan, "mei-jia") ||
    findByNameIncludes(taiwan, "美佳") ||
    findByNameIncludes(taiwan, "hsiaoyu") ||
    findByNameIncludes(taiwan, "曉雨") ||
    taiwan.find(hasFemaleName) ||
    taiwan[0]
  );
}

export function stopWebSpeech() {
  if (typeof window !== "undefined" && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

/**
 * Last-resort device TTS. Only zh-TW voices; never assigns zh-CN / zh-HK.
 */
export function speakTaiwaneseFemalePreferred(text: string, options: SpeakOptions = {}) {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    options.onError?.();
    return;
  }

  stopWebSpeech();

  const utterance = new SpeechSynthesisUtterance(cleanseTextForTaiwanTts(text));
  utterance.lang = options.lang ?? "zh-TW";
  utterance.rate = options.rate ?? 0.88;
  utterance.pitch = options.pitch ?? 1;
  utterance.onstart = () => options.onStart?.();
  utterance.onend = () => options.onEnd?.();
  utterance.onerror = () => options.onError?.();

  let retries = 0;
  const maxRetries = 10;

  const findAndSpeak = () => {
    const allVoices = window.speechSynthesis.getVoices();

    if (allVoices.length === 0 && retries < maxRetries) {
      retries++;
      setTimeout(findAndSpeak, 100);
      return;
    }

    const bestVoice = pickTaiwanZhTwVoice(allVoices);
    if (bestVoice) {
      utterance.voice = bestVoice;
      utterance.lang = "zh-TW";
    } else {
      utterance.lang = "zh-TW";
    }

    window.speechSynthesis.speak(utterance);
  };

  findAndSpeak();
}
