import type { PracticeCategory } from '@/types/practiceCategory';

export interface SentenceExample {
  situation: string;
  chinese: string;
  pinyin: string;
  japanese: string;
  chunks: string[];
  hintText: string;
  title?: string;
  category?: string;
  /** 中国語の聴解問題（4択用） */
  question?: string;
  /** 4つの中国語選択肢（1つが正解） */
  options?: string[];
  /** options配列内の正解インデックス(0-3) */
  answerIndex?: number;
}

/** 旧形式・新形式で共通のフィールド */
export interface SentenceCardBase {
  id: string;
  band: 'A' | 'B' | 'C';
  targetWord: string;
  distractors: string[];
  grammarNote: string;
  pronunciationNote?: string;
  /** 実践シチュエーション（任意。未指定時はフロントで推定） */
  practiceCategory?: PracticeCategory;
}

/** Band B 旧形式: フラットな例文プロパティを持つカード */
export interface FlatSentenceCard extends SentenceCardBase {
  format: 'flat';
  sentence: string;
  pinyin: string;
  translation: string;
  chunks: string[];
  hintText?: string;
  question?: string;
  options?: string[];
  answerIndex?: number;
}

/** Band C 新形式: シチュエーション別 examples[] を持つカード */
export interface ExamplesSentenceCard extends SentenceCardBase {
  format: 'examples';
  examples: SentenceExample[];
}

export type SentenceCard = FlatSentenceCard | ExamplesSentenceCard;

/**
 * データファイル用の入力型（format フィールドなし）。
 * 旧形式は sentence 等、新形式は examples[] で判別する。
 */
export type FlatSentenceCardInput = Omit<FlatSentenceCard, 'format'>;
export type ExamplesSentenceCardInput = Omit<ExamplesSentenceCard, 'format'>;
export type SentenceCardInput = FlatSentenceCardInput | ExamplesSentenceCardInput;

/**
 * UI 学習フロー向けの正規化済みカード。
 * 旧形式・新形式のいずれも同一形状にフラット化される。
 */
export interface NormalizedStudyCard {
  id: string;
  band: 'A' | 'B' | 'C';
  targetWord: string;
  distractors: string[];
  grammarNote: string;
  pronunciationNote?: string;
  sentence: string;
  pinyin: string;
  translation: string;
  chunks: string[];
  hintText?: string;
  question?: string;
  options?: string[];
  answerIndex?: number;
  /** 元データのカード ID */
  sourceCardId: string;
  /** 正規化元の形式 */
  sourceFormat: 'flat' | 'examples';
  /** examples 形式の場合、使用した example のインデックス */
  exampleIndex?: number;
}
