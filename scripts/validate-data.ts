/**
 * scripts/validate-data.ts
 *
 * データバリデーションスクリプト
 * src/data/ 配下のデータファイルを読み込み、以下をチェックします。
 *   ① ID の重複チェック
 *   ② ID の昇順チェック
 *   ③ 必須プロパティの欠損・空文字チェック
 *   ④ targetWord が sentence / examples[].chinese に含まれること
 *
 * 使い方: npx tsx scripts/validate-data.ts
 * 終了コード: 問題なし = 0, 問題あり = 1
 */

/* ================================================================
 * 1. インポート（dynamic import でバンドルせずに .ts ファイルを読み込む）
 * ================================================================ */

import type {
  ExamplesSentenceCardInput,
  FlatSentenceCardInput,
  SentenceCardInput,
} from "../src/types";

/* ================================================================
 * 2. エラー集計用
 * ================================================================ */

interface ValidationError {
  file: string;
  id: string | null;
  field: string;
  message: string;
}

const errors: ValidationError[] = [];

function addError(file: string, id: string | null, field: string, message: string) {
  errors.push({ file, id, field, message });
}

function isExamplesFormat(card: SentenceCardInput): card is ExamplesSentenceCardInput {
  return (
    "examples" in card &&
    Array.isArray(card.examples) &&
    card.examples.length > 0
  );
}

/* ================================================================
 * 3. ID 重複チェック用
 * ================================================================ */

const idToSource = new Map<string, string>(); // id → 最初に見つかったファイル名

/** ID の重複をチェックする */
function checkDuplicateIds(file: string, cards: SentenceCardInput[]) {
  for (const card of cards) {
    if (idToSource.has(card.id)) {
      addError(
        file,
        card.id,
        "id",
        `ID "${card.id}" が重複しています。（最初の出現: ${idToSource.get(card.id)}）`
      );
    } else {
      idToSource.set(card.id, file);
    }
  }
}

/* ================================================================
 * 4. ID 昇順チェック
 * ================================================================ */

/**
 * ID 文字列（例: "B-261", "TW-C-026"）を数値に変換して比較するための
 * 数値ペア [prefixNumber, suffixNumber] を抽出。
 * - "B-261" → [0, 261]   （カテゴリB は 0）
 * - "A-301" → [1, 301]   （カテゴリA は 1）
 * - "TW-C-026" → [2, 26]（カテゴリTW-C は 2）
 * 数字部分のみの比較用。
 */
function extractIdNumbers(id: string): number[] {
  const parts = id.split("-");

  // STORY-02-001 形式（エピソード2以降）
  if (parts[0] === "STORY" && parts.length === 3) {
    const episode = parseInt(parts[1]!, 10);
    const card = parseInt(parts[2]!, 10);
    if (!Number.isNaN(episode) && !Number.isNaN(card)) {
      return [4, episode * 1000 + card];
    }
  }

  // STORY-001 形式（第1話）
  const alphaPart = parts.slice(0, -1).join("-");
  const numPart = parts[parts.length - 1]!;
  const num = parseInt(numPart, 10);

  const categoryOrder: Record<string, number> = {
    A: 0,
    B: 1,
    "TW-C": 2,
    C: 3,
    STORY: 4,
  };
  const catNum = categoryOrder[alphaPart] ?? 99;

  return [catNum, num];
}

/** 配列内で ID が昇順になっているかチェックする */
function checkIdOrder(file: string, cards: SentenceCardInput[]) {
  for (let i = 1; i < cards.length; i++) {
    const prev = cards[i - 1];
    const curr = cards[i];
    const prevNums = extractIdNumbers(prev.id);
    const currNums = extractIdNumbers(curr.id);

    // 前方の数値（カテゴリ）が同じ場合のみ、後方の数値を比較
    if (prevNums[0] === currNums[0] && prevNums[1] > currNums[1]) {
      addError(
        file,
        curr.id,
        "id_order",
        `ID の順序が逆転しています。"${prev.id}" (${prevNums[1]}) → "${curr.id}" (${currNums[1]})`
      );
    }
  }
}

/* ================================================================
 * 5. 必須プロパティ欠損・空文字チェック
 * ================================================================ */

/** 値が空文字または undefined/null かどうか */
function isEmpty(value: unknown): boolean {
  if (value === undefined || value === null) return true;
  if (typeof value === "string" && value.trim() === "") return true;
  if (Array.isArray(value) && value.length === 0) return true;
  return false;
}

/** 必須プロパティ（旧形式: sentence, pinyin などが直接カードにある） */
const OLD_FORMAT_REQUIRED_FIELDS = [
  "sentence",
  "pinyin",
  "translation",
  "targetWord",
  "grammarNote",
] as const;

/** 新形式（examples[] 内の各要素）の必須プロパティ */
const EXAMPLE_REQUIRED_FIELDS = [
  "chinese",
  "pinyin",
  "japanese",
  "situation",
] as const;

/** 旧形式カードの必須フィールドをチェック */
function checkRequiredFieldsOldFormat(file: string, card: FlatSentenceCardInput) {
  for (const field of OLD_FORMAT_REQUIRED_FIELDS) {
    const value = card[field];
    if (isEmpty(value)) {
      addError(
        file,
        card.id,
        field,
        `必須プロパティ "${field}" が欠損または空です。`
      );
    }
  }

  // question, options, answerIndex が一部欠けている場合に警告
  if (isEmpty(card.question) && !isEmpty(card.options)) {
    addError(file, card.id, "question", "options があるのに question が空です。");
  }
  if (!isEmpty(card.question) && isEmpty(card.options)) {
    addError(file, card.id, "options", "question があるのに options が空です。");
  }
}

/** 新形式カード（examples[] あり）の必須フィールドをチェック */
function checkRequiredFieldsNewFormat(file: string, card: ExamplesSentenceCardInput) {
  // カード自体の必須
  if (isEmpty(card.targetWord)) {
    addError(file, card.id, "targetWord", `必須プロパティ "targetWord" が欠損または空です。`);
  }
  if (isEmpty(card.grammarNote)) {
    addError(file, card.id, "grammarNote", `必須プロパティ "grammarNote" が欠損または空です。`);
  }

  // examples 配列のチェック
  if (isEmpty(card.examples)) {
    addError(file, card.id, "examples", "examples 配列が欠損または空です。");
    return;
  }

  for (let i = 0; i < (card.examples ?? []).length; i++) {
    const ex = (card.examples ?? [])[i];
    for (const field of EXAMPLE_REQUIRED_FIELDS) {
      const value = ex[field];
      if (isEmpty(value)) {
        addError(
          file,
          card.id,
          `examples[${i}].${field}`,
          `必須プロパティ "examples[${i}].${field}" が欠損または空です。`
        );
      }
    }
  }
}

/* ================================================================
 * 5b. targetWord が文に含まれるかチェック
 * ================================================================ */

function checkTargetWordInText(
  file: string,
  id: string,
  field: string,
  text: string,
  targetWord: string
) {
  if (!text.includes(targetWord)) {
    addError(
      file,
      id,
      field,
      `Target word '${targetWord}' not found in sentence`
    );
  }
}

/** 旧形式: sentence に targetWord が含まれるか */
function checkTargetWordInSentenceOldFormat(file: string, card: FlatSentenceCardInput) {
  if (isEmpty(card.targetWord) || isEmpty(card.sentence)) return;
  checkTargetWordInText(file, card.id, "sentence", card.sentence, card.targetWord);
}

/** 新形式: 各 example.chinese に targetWord が含まれるか */
function checkTargetWordInSentenceNewFormat(file: string, card: ExamplesSentenceCardInput) {
  if (isEmpty(card.targetWord) || isEmpty(card.examples)) return;

  for (let i = 0; i < card.examples.length; i++) {
    const ex = card.examples[i];
    if (isEmpty(ex.chinese)) continue;
    checkTargetWordInText(
      file,
      card.id,
      `examples[${i}].chinese`,
      ex.chinese,
      card.targetWord
    );
  }
}

/* ================================================================
 * 6. メイン処理
 * ================================================================ */

async function main() {
  const filesToCheck = [
    { path: "../src/data/bandBLevel3.ts", exportName: "bandBLevel3Data" },
    { path: "../src/data/bandBLevel4.ts", exportName: "bandBLevel4Data" },
    { path: "../src/data/bandC.ts", exportName: "bandCData" },
    { path: "../src/data/storyMode/episodes.ts", exportName: "storyModeFlatCards" },
  ];

  for (const fileInfo of filesToCheck) {
    try {
      // Dynamic import で .ts ファイルを読み込む
      const mod = await import(fileInfo.path);
      const data = mod[fileInfo.exportName] as SentenceCardInput[];

      if (!Array.isArray(data)) {
        addError(fileInfo.path, null, "export", `${fileInfo.exportName} が配列ではありません。`);
        continue;
      }

      const totalCards = data.length;
      const newFormatCards = data.filter(isExamplesFormat);

      // --- ① ID 重複チェック ---
      checkDuplicateIds(fileInfo.path, data);

      // --- ② ID 昇順チェック ---
      checkIdOrder(fileInfo.path, data);

      // --- ③ 必須プロパティチェック ---
      for (const card of data) {
        if (isExamplesFormat(card)) {
          checkRequiredFieldsNewFormat(fileInfo.path, card);
          checkTargetWordInSentenceNewFormat(fileInfo.path, card);
        } else {
          checkRequiredFieldsOldFormat(fileInfo.path, card);
          checkTargetWordInSentenceOldFormat(fileInfo.path, card);
        }
      }

      console.log(`✓ ${fileInfo.path} (${totalCards} cards, ${newFormatCards.length} new-format)`);
    } catch (err) {
      addError(
        fileInfo.path,
        null,
        "import",
        `ファイルの読み込みに失敗しました: ${err instanceof Error ? err.message : String(err)}`
      );
    }
  }

  /* ================================================================
   * 7. 結果出力
   * ================================================================ */

  console.log("\n==============================");
  console.log("バリデーション結果");
  console.log("==============================");

  if (errors.length === 0) {
    console.log("✅ すべてのチェックに合格しました。問題は見つかりませんでした。");
    process.exit(0);
  } else {
    console.log(`❌ ${errors.length} 個の問題が見つかりました:\n`);
    for (const err of errors) {
      const idPart = err.id ? ` [${err.id}]` : "";
      console.log(`  - ${err.file}${idPart} (${err.field}): ${err.message}`);
    }
    process.exit(1);
  }
}

main();