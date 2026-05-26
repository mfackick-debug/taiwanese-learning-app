export function normalizeChineseText(text: string): string {
  let out = String(text ?? "");

  const WIDTH_DIFF = 0xfee0;
  out = out
    .replace(/\u3000/g, " ")
    .replace(/[\uff01-\uff5e]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - WIDTH_DIFF));

  out = out.toLowerCase();

  out = out.replace(/[\s\u3000]/g, "");

  out = out.replace(/[\p{P}\p{S}]/gu, "");

  const VARIANT_MAP: ReadonlyArray<readonly [string, string]> = [
    ["台湾", "台灣"],
    ["台", "臺"],
    ["计划", "計畫"],
    ["裏", "裡"],
    ["着", "著"],
    ["份", "分"],
  ];

  const sortedMap = [...VARIANT_MAP].sort((a, b) => b[0].length - a[0].length);
  for (const [from, to] of sortedMap) {
    out = out.split(from).join(to);
  }

  return out;
}

export function levenshteinDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const n = a.length;
  const m = b.length;

  let prev = new Array<number>(m + 1);
  let curr = new Array<number>(m + 1);

  for (let j = 0; j <= m; j++) prev[j] = j;

  for (let i = 1; i <= n; i++) {
    curr[0] = i;
    const ai = a.charCodeAt(i - 1);
    for (let j = 1; j <= m; j++) {
      const cost = ai === b.charCodeAt(j - 1) ? 0 : 1;
      const del = prev[j] + 1;
      const ins = curr[j - 1] + 1;
      const sub = prev[j - 1] + cost;
      curr[j] = Math.min(del, ins, sub);
    }
    [prev, curr] = [curr, prev];
  }

  return prev[m];
}

export function similarityRatio(a: string, b: string): number {
  if (a === b) return 1;
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  const dist = levenshteinDistance(a, b);
  return Math.max(0, Math.min(1, 1 - dist / maxLen));
}

export function isSimilarChineseText(input: string, expected: string, threshold = 0.85): boolean {
  const a = normalizeChineseText(input);
  const b = normalizeChineseText(expected);
  return similarityRatio(a, b) >= threshold;
}
