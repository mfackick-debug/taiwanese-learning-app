export type SpeakOptions = {
  pitch?: number;
  rate?: number;
  lang?: string;
};

export function speakTaiwaneseFemalePreferred(text: string, options: SpeakOptions = {}) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  // Stop any current speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = options.lang ?? "zh-TW";
  utterance.rate = options.rate ?? 0.9;
  utterance.pitch = options.pitch ?? 1.2;

  let retries = 0;
  const maxRetries = 10;

  const normalize = (s: string) => s.toLowerCase().replaceAll("_", "-");

  const findAndSpeak = () => {
    const allVoices = window.speechSynthesis.getVoices();

    if (allVoices.length === 0 && retries < maxRetries) {
      retries++;
      setTimeout(findAndSpeak, 100);
      return;
    }

    const isZhTW = (voice: SpeechSynthesisVoice) => normalize(voice.lang).includes("zh-tw");

    const hasFemaleName = (voice: SpeechSynthesisVoice) => {
      const name = normalize(voice.name);
      return name.includes("female") || name.includes("女性");
    };

    const findByNameIncludes = (keyword: string) => {
      const k = normalize(keyword);
      return allVoices.find((v) => normalize(v.name).includes(k));
    };

    const bestVoice =
      // Priority 1: Mei-Jia (iOS Taiwan)
      findByNameIncludes("mei-jia") ||
      // Priority 2: Sin-Ji (iOS Taiwan)
      findByNameIncludes("sin-ji") ||
      // Priority 3: Google 國語 (Android Taiwan)
      findByNameIncludes("google 國語") ||
      // Priority 4: Ting-Ting (iOS China/Taiwan)
      findByNameIncludes("ting-ting") ||
      // Priority 5: zh-TW + (Female/女性 in name)
      allVoices.find((v) => isZhTW(v) && hasFemaleName(v));

    if (bestVoice) {
      utterance.voice = bestVoice;
      utterance.lang = options.lang ?? "zh-TW";
    }

    window.speechSynthesis.speak(utterance);
  };

  findAndSpeak();
}
