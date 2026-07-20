import { bandBLevel4Data } from "@/data/bandBLevel4";
import { bandCData } from "@/data/bandC";
import type { ContextBuilderItem } from "@/types/contextBuilder";
import type { PracticeCategory } from "@/types/practiceCategory";
import type { SentenceCardInput } from "@/types";
import { extractContextBuilderItem, getSituationForCard } from "@/utils/extractContextSkeleton";
import { inferPracticeCategory } from "@/utils/inferPracticeCategory";
import { normalizeCards } from "@/utils/normalizeCard";

const rawById = new Map<string, SentenceCardInput>();
for (const card of [...bandBLevel4Data, ...bandCData]) {
  rawById.set(card.id, card);
}

/** Context Re-builder 用プール（実践例文 + カテゴリ付与） */
export const CONTEXT_BUILDER_POOL: ContextBuilderItem[] = normalizeCards(
  [...bandBLevel4Data, ...bandCData],
  { expandExamples: true }
).map((normalized) => {
  const raw = rawById.get(normalized.sourceCardId);
  const situation = raw ? getSituationForCard(raw, normalized) : undefined;
  const explicit = raw?.practiceCategory;
  const category = inferPracticeCategory(normalized, { situation, explicit });
  return extractContextBuilderItem(normalized, { situation, category });
});

export function getContextItemsByCategory(category: PracticeCategory): ContextBuilderItem[] {
  return CONTEXT_BUILDER_POOL.filter((item) => item.category === category);
}

export function pickRandomContextItem(category?: PracticeCategory): ContextBuilderItem {
  const pool = category ? getContextItemsByCategory(category) : CONTEXT_BUILDER_POOL;
  const source = pool.length > 0 ? pool : CONTEXT_BUILDER_POOL;
  const index = Math.floor(Math.random() * source.length);
  return source[index]!;
}

export function getContextItemById(id: string): ContextBuilderItem | undefined {
  return CONTEXT_BUILDER_POOL.find((item) => item.card.id === id);
}

export function countByCategory(): Record<PracticeCategory, number> {
  const counts: Record<PracticeCategory, number> = {
    survival: 0,
    business: 0,
    media: 0,
    deep_talk: 0,
  };
  for (const item of CONTEXT_BUILDER_POOL) counts[item.category] += 1;
  return counts;
}
