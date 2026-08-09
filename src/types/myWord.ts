/** マイ単語：例文生成レスポンス */
export interface GeneratedExample {
  sentence: string;
  pinyin: string;
  translation: string;
  targetWord: string;
}

/** マイ単語：作文添削レスポンス */
export interface WritingCorrection {
  grammarCheck: string;
  naturalRewrite: string;
  feedback: string;
}

export interface GenerateExampleRequest {
  targetWord: string;
}

export interface CorrectWritingRequest {
  targetWord: string;
  userText: string;
  modelSentence?: string;
}
