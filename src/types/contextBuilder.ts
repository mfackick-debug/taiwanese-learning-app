import type { NormalizedStudyCard } from "@/types";
import type { PracticeCategory } from "@/types/practiceCategory";

/** 骨組み表示用の1セグメント */
export interface SkeletonSegment {
  text: string;
  /** fixed=接続詞等, target=ターゲット語彙, slot=ユーザーが埋める可変部分 */
  kind: "fixed" | "target" | "slot";
}

/**
 * Context Re-builder 用の拡張メタデータ。
 * Phase 1: 既存カードから動的生成。Phase 2+: データファイルに任意で上書き可能。
 */
export interface ContextBuilderOverrides {
  /** 例: 「為了…，導致…，陷入了惡性循環」 */
  skeletonTemplate?: string;
  /** 例: 「あなたの最近の仕事の失敗について書いてください」 */
  promptHintJa?: string;
  /** 実践カテゴリの手動上書き */
  practiceCategory?: PracticeCategory;
}

/** Read → Extract ステップで使う1枚分のコンテキスト */
export interface ContextBuilderItem {
  card: NormalizedStudyCard;
  /** 実践シチュエーション */
  category: PracticeCategory;
  /** examples 形式の situation（あれば） */
  situation?: string;
  /** 表示用の骨組み文字列 */
  skeletonText: string;
  segments: SkeletonSegment[];
  /** 検出された口語接続パターン（あれば） */
  connectorLabel?: string;
  /** 成語等をターゲットから除外したか */
  skipChengyuTarget: boolean;
  promptHintJa: string;
  /** データ側で上書き指定があったか */
  hasOverrides: boolean;
}

/** チャット1ターン（API・永続化用） */
export interface ConversationTurn {
  role: "user" | "assistant";
  text: string;
}

/** UI表示用メッセージ */
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  /** raw=ユーザー原文, polished=添削, question=深掘り質問 */
  variant: "raw" | "polished" | "question";
  text: string;
  /** polished のみ: 台湾式ピンイン */
  pinyin?: string;
  /** polished のみ: 添削理由（日本語） */
  explanation?: string;
}

/** /api/polish リクエスト */
export interface PolishRequestBody {
  userText: string;
  sourceSentence: string;
  skeletonText: string;
  targetWord: string;
  grammarNote: string;
  promptHintJa?: string;
  category?: PracticeCategory;
  connectorLabel?: string;
  /** 2ターン目以降の会話履歴 */
  conversationHistory?: ConversationTurn[];
}

/** /api/polish レスポンス（Phase 4: 厳格JSON） */
export interface PolishResponseBody {
  polishedText: string;
  /** polishedText の台湾式ピンイン（スペース区切り） */
  pinyin: string;
  /** 添削理由の日本語解説（約100字） */
  explanation: string;
  /** 会話を続ける深掘り質問（繁体字） */
  nextQuestion: string;
  /** gemini=本番API, mock=キー未設定時のフォールバック */
  mode: "gemini" | "mock";
}

/** My Phrase Book 保存エントリ */
export interface PhraseBookEntry {
  id: string;
  createdAt: string;
  sourceCardId: string;
  targetWord: string;
  skeletonText: string;
  category: PracticeCategory;
  promptHintJa?: string;
  userDraft: string;
  polishedText: string;
  pinyin?: string;
  explanation?: string;
  nextQuestion?: string;
  /** @deprecated nextQuestion を使用 */
  followUpQuestion?: string;
  /** 保存時点の会話履歴（任意） */
  conversation?: ConversationTurn[];
}
