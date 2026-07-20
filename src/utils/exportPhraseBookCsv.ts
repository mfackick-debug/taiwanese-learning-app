import type { PhraseBookEntry } from "@/types/contextBuilder";
import { getPracticeCategoryMeta } from "@/types/practiceCategory";

const CSV_HEADERS = [
  "Category",
  "Skeleton(骨組み)",
  "User Original(自分の初稿)",
  "AI Polished(添削された自然な表現)",
  "Pinyin(ピンイン)",
  "Explanation(添削理由)",
] as const;

function escapeCsvField(value: string): string {
  const normalized = value.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  if (/[",\n]/.test(normalized)) {
    return `"${normalized.replace(/"/g, '""')}"`;
  }
  return normalized;
}

function buildCsvContent(entries: PhraseBookEntry[]): string {
  const rows = entries.map((entry) => [
    getPracticeCategoryMeta(entry.category).labelJa,
    entry.skeletonText,
    entry.userDraft,
    entry.polishedText,
    entry.pinyin ?? "",
    entry.explanation ?? "",
  ]);

  return [CSV_HEADERS.join(","), ...rows.map((row) => row.map(escapeCsvField).join(","))].join(
    "\r\n"
  );
}

export function downloadPhraseBookCsv(entries: PhraseBookEntry[], filterLabel = "all"): void {
  if (entries.length === 0) return;

  const csv = `\uFEFF${buildCsvContent(entries)}`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);
  anchor.href = url;
  anchor.download = `formosa-phrase-book_${filterLabel}_${date}.csv`;
  anchor.click();
  URL.revokeObjectURL(url);
}
