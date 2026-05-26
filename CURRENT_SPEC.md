# CURRENT SPEC (As-Is)

本ドキュメントは、`formosa_wordsmith` プロジェクトの **現状実装（As-Is）** を、コードベースから読み取れる範囲でそのまま仕様としてまとめたものです。

- 対象範囲
  - `src/app`（App Router / UI本体）
  - `src/components`（UI部品）
  - `src/data`（学習データ）
  - `src/types`（型定義）
  - `src/utils`（ユーティリティ）
  - `src/app/api`（APIルート）
  - Firebase関連（`src/firebase`）

---

## 1. アプリの概要・技術スタック

### 1.1 アプリ概要
- アプリ名（UI表示）
  - `Formosan Wordsmith`
- 主目的（UI上の挙動として）
  - 台湾華語（繁体字）の例文を、4ステップの学習フローで反復しながら学習する。
  - 各例文は音声（TTS）再生が可能。
  - 学習進捗と日別スコア（過去7日）はブラウザのローカルストレージに保存され、ダッシュボードに表示される。

### 1.2 技術スタック
- フロントエンド
  - Next.js（App Router）
  - React（Client Component中心：`"use client"`）
  - TypeScript
  - Tailwind CSS（クラスユーティリティ）
  - Radix UI（`@radix-ui/*`）を利用したUIコンポーネント群
  - `lucide-react`（アイコン）
  - `recharts`（ダッシュボードの棒グラフ）
- 状態管理
  - React `useState` / `useRef` / `useMemo` / `useEffect`（`src/app/page.tsx` 内で完結）
  - グローバル状態管理ライブラリ（Redux/Zustand等）は現状使用していない
- バックエンド/サーバ機能
  - Next.js API Route（`src/app/api/tts/route.ts`）
  - 外部TTSサービス（Yating）へのプロキシ
- 永続化
  - ブラウザ `localStorage`
- Firebase
  - `src/firebase` に初期化・Providerが実装されている
  - `src/app/layout.tsx` で `FirebaseClientProvider` によりアプリ全体がラップされる

---

## 2. 主要なデータ構造

### 2.1 `SentenceCard`（`src/types/index.ts`）
学習用の例文カードを表す型です。

```ts
export interface SentenceCard {
  id: string;
  band: 'A' | 'B' | 'C';
  sentence: string;
  pinyin: string;
  translation: string;
  chunks: string[];
  hintText: string;
  targetWord: string;
  distractors: string[];
  grammarNote: string;
  pronunciationNote?: string;
  bossReading?: {
    text: string;
    targetWord: string;
    distractors: string[];
    question: string;
    grammarNote?: string;
    audioPath?: string;
  };
}
```

- `sentence`
  - 学習対象の中国語（繁体）本文
- `pinyin`
  - ピンイン
- `translation`
  - 日本語訳
- `targetWord` / `distractors`
  - Step2（穴埋め）で利用する正解語彙と誤答候補
- `chunks`
  - Step3（並べ替え）で利用するチャンク配列
- `hintText`
  - Step4（翻訳入力）の「ヒント」ボタンで表示する文頭などの短いヒント文字列
- `grammarNote`
  - Step2/Step3/Step4の正解時に表示する解説文
- `pronunciationNote`（任意）
  - Step1および正解時の補足として「発音のコツ」を表示
- `bossReading`（任意）
  - 長文読解（ボス戦）用の追加データ（ただし、現行 `page.tsx` の学習フローに統合されているかは別項）

### 2.2 学習内状態（`src/app/page.tsx`）
- 学習フェーズ（4ステップ）
  - `type StudyPhase = "learn" | "fill" | "reorder" | "translate";`
- コース（UIで選べるコース）
  - `type StudyCourse = "B3" | "B4" | "C";`
- 1セット（バッチ）
  - 常に3枚で構成（`currentBatch: SentenceCard[]`）
  - バッチ内インデックス `batchIndex` は `0..2`

---

## 3. 現在の学習フロー（4ステップ）

このプロジェクトの主要UIは `src/app/page.tsx` の `Home` コンポーネントで実装されています。

### 3.1 全体の流れ
- 画面上部でコースを選択（B3 / B4 / C）
- `Tabs` により
  - `Study` タブ（学習本体）
  - `Dashboard` タブ（過去7日スコア棒グラフ）
  を切り替え
- Studyタブでは、以下の4フェーズを **同一バッチ内の3枚**に対して順番に実行
  1. Step1: 音読（learn）
  2. Step2: 穴埋め（fill）
  3. Step3: 並べ替え（reorder）
  4. Step4: 翻訳入力（translate）
- 4フェーズ × 3枚（= 12の小ステップ）を終えると、バッチ結果（スコア画面）を表示

### 3.2 Step1：音読（`currentPhase === "learn"`）
- 表示内容
  - `sentence`（中国語）
  - `pinyin`
  - `translation`（日本語）
  - `pronunciationNote` があれば「発音のコツ」枠を表示
- 操作
  - 音声ボタン（`AudioButton`）で `sentence` のTTSを再生
  - 「次へ（下一題）」ボタンで次のカードへ（同フェーズ内でバッチ内移動）
- 正誤判定
  - なし（提示・音読のみ）

### 3.3 Step2：穴埋め（`currentPhase === "fill"`）
- 表示内容
  - `sentence` から `targetWord` を `___` に置換して表示（含まれていない場合はそのまま）
  - `translation`
  - 選択肢（`choices`）
    - `choices = shuffle([targetWord, ...distractors])`
- 操作
  - 選択肢ボタンを押すと判定
  - 「諦める（答えを見る）」ボタン
    - 正解扱いとして `targetWord` を選択状態にし、結果表示へ進む
- 正誤判定
  - クリックした選択肢 `c` が `targetWord` と一致すれば正解
  - 正解時
    - `playTts(sentence)` を実行
    - `grammarNote` を「解説」として表示
    - `pronunciationNote` があれば追加表示
    - 「次へ（下一題）」で次ステップへ
  - 不正解時
    - `markMistakeOnce("fill", card.id)` によりバッチ内ミス数を加算（同一カード同一フェーズでは1回のみ加算）
    - 「もう一回」で選択をリセットし再挑戦

### 3.4 Step3：並べ替え（`currentPhase === "reorder"`）
- 表示内容
  - `translation`（日本語）
  - 解答エリア（`reorderAnswer`）
  - 選択肢プール（`reorderPool`）
    - `chunks` をトークン化した配列をシャッフルしてプールに配置
- 操作
  - プール側のボタンを押すと、解答エリアへ移動
  - 解答エリア側のボタンを押すと、プールへ戻す
  - 「諦める（答えを見る）」ボタン
    - 正解扱いとして `chunks` どおりの回答を自動セット
- 正誤判定
  - `reorderAnswer.length === chunks.length` になった時点で自動判定
  - 正解条件
    - `reorderAnswer.map(t => t.text).join("|") === chunks.join("|")`
  - 正解時
    - `playTts(sentence)`
    - `grammarNote`（解説）、`pronunciationNote`（発音のコツ）があれば表示
    - 「次へ（下一題）」で次ステップへ
  - 不正解時
    - `markMistakeOnce("reorder", card.id)`
    - 「リセット」で並べ替えをやり直し

### 3.5 Step4：翻訳入力（`currentPhase === "translate"`）
- 表示内容
  - `translation`（日本語）
  - 入力欄（中国語の入力）
  - 「ヒント」ボタン（`hintText` を表示）
  - 「諦める（答えを見る）」ボタン
- IME（入力確定）配慮
  - `onCompositionStart` / `onCompositionEnd` で IME composing 状態を `useRef` で管理
  - composing中は `onChange` で結果リセットしないように制御
- 正誤判定
  - 「判定」ボタンで比較
  - 比較方法
    - `expected = normalizeChineseText(currentCard.sentence)`
    - `actual = normalizeChineseText(translateInput)`
    - `actual === expected` で正解
  - 正解時
    - `playTts(sentence)`
    - `grammarNote`（解説）と `pronunciationNote`（あれば）を表示
    - **スコア加算**（後述）
    - 「次へ（下一題）」で次ステップへ
  - 不正解時
    - `markMistakeOnce("translate", card.id)`
    - `grammarNote` に量詞関連語が含まれる場合、追加ヒント文を表示

### 3.6 バッチ結果（3枚×4ステップ完了後）
- 1バッチあたりの問題数
  - `totalQuestionsPerBatch = 9`
  - 現行実装では「learn」を採点対象外として扱い、
    - fill/reorder/translate の 3フェーズ × 3枚 = 9 を想定
- ミスカウント
  - `markMistakeOnce` により、カード×フェーズ単位で重複加算しない
- 正答率
  - `accuracyPct = round(((9 - batchMistakeCount) / 9) * 100)`（0〜100にクランプ）
- 結果画面
  - 正答率（%）とメッセージを表示
  - 「次のトレーニングへ」
    - 次のバッチへ移行（`batchStartIndex += 3`）し、`learn` に戻る

### 3.7 任意スキップ（学習中）
- 画面右下に固定の「次のセットへ」ボタン
  - `handleSkipBatch()`
  - `batchStartIndex` を +3 し、`learn` に戻す
  - ミス数等をリセット

---

## 4. コース構成（データセットと切り替え）

### 4.1 現在用意されているコース
- `StudyCourse = "B3" | "B4" | "C"`
- UIラベル
  - B3: `Band Bレベル3`
  - B4: `Band Bレベル4`
  - C: `Band C`

### 4.2 データソース（`src/data/index.ts`）
- `bandBLevel3Data`（`src/data/bandBLevel3.ts`）
- `bandBLevel4Data`（`src/data/bandBLevel4.ts`）
- `bandCData`（`src/data/bandC.ts`）
- まとめデータ
  - `ALL_SENTENCES: SentenceCard[] = [...bandBLevel3Data, ...bandBLevel4Data, ...bandCData]`
  - `SENTENCE_DATA` は `ALL_SENTENCES` の別名

### 4.3 コース切り替えロジック（`src/app/page.tsx`）
- `filteredSentences` を `selectedCourse` に応じて切り替え
  - B3 → `bandBLevel3Data`
  - B4 → `bandBLevel4Data`
  - C → `bandCData`
- コース変更時は学習状態を初期化
  - `batchStartIndex=0`, `batchIndex=0`, `currentPhase="learn"`, など

---

## 5. 音声（TTS）の仕組み

### 5.1 クライアント側：`AudioButton`（`src/components/AudioButton.tsx`）
- 主な公開関数
  - `playTts(text: string)`
  - `prefetchTts(text: string)`
  - `stopTts()`
- キャッシュ
  - `audioCache: Record<string, string>`
  - key: 入力 `text`（そのまま文字列）
  - value: `URL.createObjectURL(blob)` で生成したBlob URL
- 多重再生
  - `globalAudio` で現在再生中の `HTMLAudioElement` を保持
  - `playTts` の冒頭で `stopTts()` を呼び、前の音声を停止してから再生する
- `prefetchTts`
  - すでに `audioCache[text]` があれば何もしない
  - `/api/tts` にPOSTし、成功した音声Blobをキャッシュ
- `playTts`
  - キャッシュがあればそのURLで再生
  - なければ `/api/tts` にPOST → 取得したBlobをキャッシュして再生

### 5.2 学習画面側のプリフェッチ（`src/app/page.tsx`）
- カレントバッチ（3文）の `sentence` を `prefetchTts` で逐次プリフェッチ

### 5.3 サーバ側：TTS APIルート（`src/app/api/tts/route.ts`）
- エンドポイント
  - `POST /api/tts`
- 入力
  - JSON `{ text: string }`
- 環境変数
  - `YATING_API_KEY`
  - 未設定の場合は `500` で `{ error: "Missing YATING_API_KEY" }`
- 外部通信（上流）
  - `https://tts.api.yating.tw/v2/speeches/short` にPOST
  - Header `key: apiKey`
  - `voice.model = "zh_en_female_1"`
  - `audioConfig.encoding = "MP3"`
- 出力
  - 成功時: MP3バイナリを `Content-Type: audio/mpeg` で返却
  - 失敗時: `NextResponse.json` でエラーを返却

---

## 6. 進捗・スコアの保存メカニズム

### 6.1 進捗保存（localStorage）
- キー
  - `formosan_wordsmith_progress`（`PROGRESS_STORAGE_KEY`）
- 保存される内容
  - `selectedCourse`
  - `currentPhase`
  - `batchStartIndex`
  - `batchIndex`
- 保存タイミング
  - 上記の値が変化するたびに `useEffect` で保存

### 6.2 進捗の復元とレガシーマイグレーション
- 初期化時に `formosan_wordsmith_progress` を読み込み、パースできれば状態へ反映
- レガシーキー
  - `selectedBand`（`A|B|C`）が存在する場合、`selectedCourse` に変換
    - legacy `B` → `B4`
    - legacy `C` → `C`
    - それ以外 → `B3`

### 6.3 学習履歴（スコア）保存（localStorage）
- キー
  - `learningHistory`（`LEARNING_HISTORY_STORAGE_KEY`）
- データ形式
  - `LearningHistoryEntry[]`
    - `{ date: string (YYYY-MM-DD), score: number }`
- 読み込み
  - 起動時にJSON配列を読み込み、型・範囲を簡易クリーニング
  - 最大365件に制限（末尾側）
- 書き込み
  - `learningHistory` が変化するたびに保存

### 6.4 スコア加算の条件（`src/app/page.tsx`）
- `translate`（Step4）の判定で **正解したときのみ** スコア加算
- 二重計上防止
  - `creditedCardKeysRef`（Set）に `"${selectedCourse}:${currentCard.id}"` を記録
  - 未登録の場合のみ `addTodayScore(1)`

### 6.5 ダッシュボード（過去7日棒グラフ）
- UI
  - `Tabs` の `Dashboard` タブに表示
- グラフ
  - `recharts` の `BarChart`
  - X軸: `date`（表示は `YYYY-MM-DD` の `MM-DD` 部分）
  - Y軸: `score`
- データ生成
  - `learningHistory` から直近7日を埋めた配列を `useMemo` で生成

---

## 7. その他の付随機能（コード上に存在する機能一覧）

### 7.1 正規化ロジック（`src/utils/normalizeChineseText.ts`）
Step4（翻訳入力）の比較で利用されます。

- 小文字化
- 空白・全角スペース除去
- 句読点・記号類の除去（正規表現による置換）
- 一部の表記ゆれを置換（例）
  - `計劃 → 計畫`
  - `臺灣 → 台灣`
  - `身份 → 身分`
  - など

### 7.2 量詞ハイライト表示（`src/app/page.tsx` 内）
- `grammarNote` 内に `量詞` / `数量詞` / `項|部|張|篇` が含まれる場合
  - 該当語を強調表示する `highlightQuantifiers()` を利用

### 7.3 長文ボス戦コンポーネント（`src/components/ReadingBoss.tsx`）
- `SentenceCard["bossReading"]` を入力に取り、4択（最大）で解答するUI
- 正解時
  - `playTts(data.text)` を再生
  - 1.5秒後に `onCleared()` を呼ぶ
- 不正解時
  - 「もう一度選んでください」と表示

> 注: `ReadingBoss` はコードとして存在しますが、現行の `src/app/page.tsx` の学習フロー内で呼び出されているかは別途統合状況に依存します（`page.tsx` の現状内容では `ReadingBoss` のimportは確認されません）。

### 7.4 単語カードUI（`src/components/VocabularyCard.tsx`）
- `VocabularyItem`（`src/app/lib/vocabulary.ts`）を表示するカードUI
  - 見出し語、ピンイン、訳
  - 例文/例文ピンイン/例文訳
  - `AudioButton` で単語と例文の音声再生
  - `grammarNote` があればアコーディオン表示

> 注: 単語データ `VOCABULARY_DATA` は `src/app/lib/vocabulary.ts` に定義されています。現行 `page.tsx` の主要導線に単語帳画面が含まれるかは、`page.tsx` 側の利用状況に依存します（本ドキュメントは存在をAs-Isとして記載）。

### 7.5 文法データ（`src/app/lib/grammar.ts`）
- `GrammarItem` と `GRAMMAR_DATA` を定義
- A/Bレベルの文法項目（例文付き）を保持

### 7.6 作文セクションUI（`src/components/CompositionSection.tsx`）
- テキストエリアに文章を入力し、入力内容を「メモ」として下に表示するUI
- `mode`
  - `word | triple | grammar`
- `level`
  - `A | B`
- `onFeedback` をPropsとして受け取る定義はあるが、コンポーネント内部では現状呼び出していない

### 7.7 Firebase初期化・Provider（`src/firebase/*`）
- `initializeFirebase()`（`src/firebase/index.ts`）
  - `firebaseConfig`（環境変数）を検証してから初期化
  - APIキーが無効の場合は例外を投げる
- `FirebaseClientProvider`（`src/firebase/client-provider.tsx`）
  - クライアント側で `initializeFirebase()` を呼び、成功すると `FirebaseProvider` に渡す
  - 初期化に失敗すると全画面のエラーUIを表示
- `FirebaseProvider`（`src/firebase/provider.tsx`）
  - Contextで `firebaseApp` / `firestore` / `auth` を提供
  - 内部で `FirebaseErrorListener` をマウント
- `FirebaseErrorListener`（`src/components/FirebaseErrorListener.tsx`）
  - `permission-error` を購読し、Toastでエラー表示

---

## 付録：主要ファイル一覧（現状）
- `src/app/page.tsx`
  - 学習画面（Study/Dashboard）の主要ロジック
- `src/app/api/tts/route.ts`
  - TTSプロキシAPI
- `src/components/AudioButton.tsx`
  - TTS再生・キャッシュ
- `src/data/*`
  - コース別の `SentenceCard[]`
- `src/types/index.ts`
  - `SentenceCard` 型
- `src/utils/normalizeChineseText.ts`
  - Step4判定用の正規化

