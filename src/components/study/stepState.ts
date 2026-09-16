import type { NormalizedStudyCard } from "@/types";
import type { QuizResult, StudyStep } from "@/components/study/types";
import { shuffle } from "@/components/study/utils";

export interface StepState {
  isShadowingDone: boolean;
  vocabChoices: string[];
  vocabSelected: string | null;
  vocabResult: QuizResult;
  shuffledChunks: string[];
  /** shuffledChunks 内のインデックス（選び直し・重複チャンク対応） */
  selectedIndices: number[];
  reorderResult: QuizResult;
  isRecallRevealed: boolean;
}

/** ステップ・カード切り替え時に全ステップ状態を一括初期化する */
export function initStepState(card: NormalizedStudyCard, step: StudyStep): StepState {
  return {
    isShadowingDone: false,
    vocabChoices:
      step === "vocab"
        ? shuffle([card.targetWord, ...card.distractors])
        : [],
    vocabSelected: null,
    vocabResult: null,
    shuffledChunks: step === "reorder" ? shuffle(card.chunks) : [],
    selectedIndices: [],
    reorderResult: null,
    isRecallRevealed: false,
  };
}
