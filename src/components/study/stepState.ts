import type { NormalizedStudyCard } from "@/types";
import type { QuizResult, StudyStep } from "@/components/study/types";
import { shuffle } from "@/components/study/utils";
import {
  buildBlankDrillSetup,
  extractSkeletonKeywords,
  type BlankDrillKind,
} from "@/data/connectors";

export interface StepState {
  isShadowingDone: boolean;
  blankKind: BlankDrillKind;
  blankTarget: string;
  vocabChoices: string[];
  vocabSelected: string | null;
  vocabResult: QuizResult;
  shuffledChunks: string[];
  /** shuffledChunks 内のインデックス（選び直し・重複チャンク対応） */
  selectedIndices: number[];
  reorderResult: QuizResult;
  isRecallRevealed: boolean;
  skeletonKeywords: string[];
}

/** ステップ・カード切り替え時に全ステップ状態を一括初期化する */
export function initStepState(card: NormalizedStudyCard, step: StudyStep): StepState {
  const blankSetup = step === "vocab" ? buildBlankDrillSetup(card) : null;

  return {
    isShadowingDone: false,
    blankKind: blankSetup?.kind ?? "vocab",
    blankTarget: blankSetup?.blank ?? card.targetWord,
    vocabChoices: blankSetup?.choices ?? [],
    vocabSelected: null,
    vocabResult: null,
    shuffledChunks: step === "reorder" ? shuffle(card.chunks) : [],
    selectedIndices: [],
    reorderResult: null,
    isRecallRevealed: false,
    skeletonKeywords: step === "recall" ? extractSkeletonKeywords(card) : [],
  };
}
