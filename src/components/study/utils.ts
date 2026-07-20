export function shuffle<T>(array: T[]): T[] {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 文字列中の targetWord を ____（アンダーバー4つ）で置換する */
export function maskTargetWord(text: string, targetWord: string): string {
  if (!text || !targetWord) return text ?? "";
  const escaped = targetWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(escaped, "g"), "____");
}
