export interface SentenceExample {
  situation: string;
  chinese: string;
  pinyin: string;
  japanese: string;
  chunks: string[];
  hintText: string;
  /** 中国語の聴解問題（4択用） */
  question?: string;
  /** 4つの中国語選択肢（1つが正解） */
  options?: string[];
  /** options配列内の正解インデックス(0-3) */
  answerIndex?: number;
  /** データファイルに存在するその他のプロパティを許可 */
  [key: string]: unknown;
}

export interface SentenceCard {
  id: string;
  band: 'A' | 'B' | 'C';
  targetWord: string;
  distractors: string[];
  grammarNote: string;
  pronunciationNote?: string;
  
  // 新しいデータ構造：3つのシチュエーションごとの例文を保持
  examples: SentenceExample[];

  bossReading?: {
    text: string;
    targetWord: string;
    distractors: string[];
    question: string;
    grammarNote?: string;
    audioPath?: string;
  };
}