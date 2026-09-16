import type { FlatSentenceCardInput, SentenceCardInput } from "@/types";
import { bandBLevel3Data } from "@/data/bandBLevel3";
import { bandBLevel4Data } from "@/data/bandBLevel4";
import { bandBLevel5Data } from "@/data/bandBLevel5";
import { bandCData } from "@/data/bandC";
import { storyModeFlatCards } from "@/data/storyMode/episodes";
import { normalizeCards } from "@/utils/normalizeCard";
import type { NormalizedStudyCard } from "@/types";

/** ストーリーカードからドリル用フラットカードへ（speaker 等を除去） */
function toDrillFlatCards(cards: readonly FlatSentenceCardInput[]): FlatSentenceCardInput[] {
  return cards.map((card) => {
    const {
      id,
      band,
      targetWord,
      distractors,
      grammarNote,
      pronunciationNote,
      practiceCategory,
      sentence,
      pinyin,
      translation,
      chunks,
      hintText,
      question,
      options,
      answerIndex,
    } = card;
    return {
      id,
      band,
      targetWord,
      distractors,
      grammarNote,
      pronunciationNote,
      practiceCategory,
      sentence,
      pinyin,
      translation,
      chunks,
      hintText,
      question,
      options,
      answerIndex,
    };
  });
}

const storyDrillCards = toDrillFlatCards(storyModeFlatCards as FlatSentenceCardInput[]);

/** 日常寄り（L3 + 暮らし125問 + ストーリー転用） */
export const DRILL_DAILY_RAW: SentenceCardInput[] = [
  ...bandBLevel3Data,
  ...bandBLevel5Data,
  ...storyDrillCards,
];

/** 社会・職場寄り（L4 + Band C） */
export const DRILL_SOCIAL_RAW: SentenceCardInput[] = [
  ...bandBLevel4Data,
  ...bandCData,
];

/** 総合（全ソース統合） */
export const DRILL_ALL_RAW: SentenceCardInput[] = [
  ...bandBLevel3Data,
  ...bandBLevel4Data,
  ...bandBLevel5Data,
  ...bandCData,
  ...storyDrillCards,
];

export type DrillCourseId = "all" | "daily" | "social";

export function getDrillRawPool(course: DrillCourseId): SentenceCardInput[] {
  if (course === "daily") return DRILL_DAILY_RAW;
  if (course === "social") return DRILL_SOCIAL_RAW;
  return DRILL_ALL_RAW;
}

export function getDrillCards(
  course: DrillCourseId,
  options?: { shuffle?: boolean }
): NormalizedStudyCard[] {
  const expandExamples = true;
  const cards = normalizeCards(getDrillRawPool(course), { expandExamples });
  if (options?.shuffle === false) return cards;
  // Fisher–Yates
  const arr = [...cards];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j]!, arr[i]!];
  }
  return arr;
}

export function resolveDrillCardsByIds(
  course: DrillCourseId,
  ids: string[]
): NormalizedStudyCard[] {
  const byId = new Map(
    normalizeCards(getDrillRawPool(course), { expandExamples: true }).map((c) => [c.id, c])
  );
  return ids.map((id) => byId.get(id)).filter((c): c is NormalizedStudyCard => Boolean(c));
}

export function countDrillPool(course: DrillCourseId): number {
  return normalizeCards(getDrillRawPool(course), { expandExamples: true }).length;
}
