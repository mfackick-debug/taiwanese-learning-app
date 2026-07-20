import type { ConversationTurn, PhraseBookEntry } from "@/types/contextBuilder";
import type { PracticeCategory } from "@/types/practiceCategory";

export const PHRASE_BOOK_STORAGE_KEY = "formosa_phrase_book_v1";

function isValidCategory(value: unknown): value is PracticeCategory {
  return value === "survival" || value === "business" || value === "media" || value === "deep_talk";
}

function normalizeEntry(raw: Partial<PhraseBookEntry>): PhraseBookEntry | null {
  if (
    typeof raw.id !== "string" ||
    typeof raw.createdAt !== "string" ||
    typeof raw.sourceCardId !== "string" ||
    typeof raw.targetWord !== "string" ||
    typeof raw.skeletonText !== "string" ||
    typeof raw.userDraft !== "string" ||
    typeof raw.polishedText !== "string" ||
    !isValidCategory(raw.category)
  ) {
    return null;
  }

  return {
    id: raw.id,
    createdAt: raw.createdAt,
    sourceCardId: raw.sourceCardId,
    targetWord: raw.targetWord,
    skeletonText: raw.skeletonText,
    category: raw.category,
    promptHintJa: typeof raw.promptHintJa === "string" ? raw.promptHintJa : undefined,
    userDraft: raw.userDraft,
    polishedText: raw.polishedText,
    pinyin: typeof raw.pinyin === "string" ? raw.pinyin : undefined,
    explanation: typeof raw.explanation === "string" ? raw.explanation : undefined,
    nextQuestion:
      typeof raw.nextQuestion === "string"
        ? raw.nextQuestion
        : typeof raw.followUpQuestion === "string"
          ? raw.followUpQuestion
          : undefined,
    conversation: Array.isArray(raw.conversation)
      ? raw.conversation.filter(
          (t): t is ConversationTurn =>
            Boolean(
              t &&
                typeof t === "object" &&
                (t.role === "user" || t.role === "assistant") &&
                typeof (t as ConversationTurn).text === "string"
            )
        )
      : undefined,
  };
}

export function loadPhraseBook(): PhraseBookEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(PHRASE_BOOK_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Partial<PhraseBookEntry>[];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map(normalizeEntry)
      .filter((e): e is PhraseBookEntry => e !== null)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  } catch {
    return [];
  }
}

export function savePhraseBook(entries: PhraseBookEntry[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PHRASE_BOOK_STORAGE_KEY, JSON.stringify(entries));
  } catch {
    /* ignore quota errors */
  }
}

export function countPhraseBookByCategory(
  entries: PhraseBookEntry[]
): Record<PracticeCategory, number> {
  const counts: Record<PracticeCategory, number> = {
    survival: 0,
    business: 0,
    media: 0,
    deep_talk: 0,
  };
  for (const entry of entries) counts[entry.category] += 1;
  return counts;
}
