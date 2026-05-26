import OpenAI from "openai";
import * as fs from "fs";
import * as path from "path";
import dotenv from "dotenv";
import pLimit from "p-limit";

// .env から環境変数を読み込む
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
dotenv.config(); // fallback to .env

const apiKey = process.env.DEEPSEEK_API_KEY;
if (!apiKey) {
  console.error("❌ エラー: DEEPSEEK_API_KEY が .env に設定されていません。");
  process.exit(1);
}

const client = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey,
});

// 並列実行数の制限
const CONCURRENCY = 5;

const CATEGORIES = [
  "人間関係・家族",
  "店舗・サービス",
  "交通・移動",
  "生活トラブル",
  "公的手続き・職場",
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateExamplesForCard(
  card: any,
  retries = 3
): Promise<any> {
  const prompt = `あなたは台湾華語のTOCFL（中級〜中上級 Band B）試験のプロフェッショナルな問題作成者です。
以下の単語（Target Word）を使った例文を、指定されたルールに従って3つ作成してください。

Target Word: ${card.targetWord}
Grammar Note: ${card.grammarNote || "なし"}
Original Sentence: ${card.sentence || "なし"}

【作成ルール】
1. 以下の5つのカテゴリからランダムに3つ選び、それぞれ1文ずつ作成すること。
   [${CATEGORIES.join(", ")}]
2. すべて台湾華語（繁体字）を使用すること。
3. 台湾特有の生活語彙（例：機車、捷運、健保卡、發票、打折など）を自然に組み込むこと。
4. 従属接続詞（雖然〜但是、因為〜所以、只要〜就など）を用いた、15〜30文字程度の「やや長めの話し言葉（会話文）」とすること。
5. 出力は以下の構造を持つJSONの配列（要素数3）のみとすること。他のテキストは一切含めない。

[
  {
    "situation": "選んだカテゴリ名",
    "chinese": "作成した台湾華語の例文",
    "pinyin": "ピンイン（例: wǒ hěn xǐ huān...）",
    "japanese": "日本語訳",
    "chunks": ["chunk1", "chunk2", "chunk3"],
    "hintText": "例文の先頭からターゲット語彙（Target Word）の直前までのテキスト（ヒント用）"
  }
]`;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await client.chat.completions.create({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content:
              "あなたは台湾華語教育の専門家です。必ずJSON配列のみを出力してください。",
          },
          { role: "user", content: prompt },
        ],
        response_format: { type: "json_object" },
        temperature: 0.7,
        max_tokens: 2000,
      });

      const responseText = response.choices?.[0]?.message?.content;
      if (!responseText) {
        throw new Error("Empty response from DeepSeek API");
      }

      // DeepSeek が response_format: json_object に対応している場合、
      // 応答は {"examples": [...]} の形式かもしれないので両対応
      let parsed;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        // JSON以外の余分なテキストが含まれている可能性
        const jsonMatch = responseText.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          parsed = JSON.parse(jsonMatch[0]);
        } else {
          throw new Error("Failed to parse JSON from response");
        }
      }

      // 応答が { examples: [...] } の形式の場合
      if (parsed.examples && Array.isArray(parsed.examples)) {
        return parsed.examples;
      }
      // 応答が直接配列の場合
      if (Array.isArray(parsed)) {
        return parsed;
      }
      // その他、いずれかのキーに配列がある場合
      const arrayKey = Object.keys(parsed).find(
        (k) => Array.isArray(parsed[k]) && parsed[k].length > 0
      );
      if (arrayKey) {
        return parsed[arrayKey];
      }

      throw new Error(`Unexpected response format: ${responseText}`);
    } catch (error: any) {
      const isRateLimit =
        error?.status === 429 ||
        error?.message?.includes("rate limit") ||
        error?.message?.includes("429");

      if (isRateLimit && attempt < retries) {
        const waitSec = attempt * 10;
        console.warn(
          `[429 Rate Limit] - ${waitSec}秒待機して再試行... (試行 ${attempt}/${retries})`
        );
        await sleep(waitSec * 1000);
        continue;
      }

      if (attempt < retries) {
        console.warn(
          `⚠️ エラー (試行 ${attempt}/${retries}): ${error.message} - 5秒後リトライ`
        );
        await sleep(5000);
        continue;
      }

      console.error(
        `❌ 生成失敗 (${card.targetWord}): ${error.message}`
      );
      return null;
    }
  }
  return null;
}

function parseTsData(
  fileContent: string
): { data: any[]; prefix: string; suffix: string } | null {
  // export const dataName: SentenceCard[] = [ ... ] の形式を探す
  let startIdx = fileContent.indexOf("= [");
  if (startIdx === -1) {
    startIdx = fileContent.indexOf("=[");
  }
  if (startIdx !== -1) {
    startIdx = fileContent.indexOf("[", startIdx);
  }
  const endIdx = fileContent.lastIndexOf("]");
  if (startIdx === -1 || endIdx === -1) {
    console.error("TSファイル内にJSON配列が見つかりませんでした。");
    return null;
  }

  const prefix = fileContent.substring(0, startIdx);
  const suffix = fileContent.substring(endIdx + 1);
  const jsString = fileContent.substring(startIdx, endIdx + 1);

  try {
    const data = new Function("return " + jsString)();
    return { data, prefix, suffix };
  } catch (e) {
    console.error("配列のパースに失敗しました", e);
    return null;
  }
}

async function processFile(filePath: string) {
  console.log(`\n📄 処理開始: ${filePath}`);
  const absolutePath = path.resolve(process.cwd(), filePath);

  if (!fs.existsSync(absolutePath)) {
    console.error(`ファイルが見つかりません: ${absolutePath}`);
    return;
  }

  const fileContent = fs.readFileSync(absolutePath, "utf-8");
  const isJsonFile = filePath.endsWith(".json");

  let data: any[] = [];
  let prefix = "";
  let suffix = "";

  if (isJsonFile) {
    data = JSON.parse(fileContent);
  } else {
    const parsed = parseTsData(fileContent);
    if (!parsed) return;
    data = parsed.data;
    prefix = parsed.prefix;
    suffix = parsed.suffix;
  }

  // 処理前の統計
  const totalCards = data.length;
  const alreadyHasExamples = data.filter(
    (c: any) => c.examples && Array.isArray(c.examples) && c.examples.length === 3
  ).length;
  const needsProcessing = data.filter(
    (c: any) => !(c.examples && Array.isArray(c.examples) && c.examples.length === 3)
  ).length;

  console.log(
    `📊 合計: ${totalCards}件 | 処理済み: ${alreadyHasExamples}件 | 未処理: ${needsProcessing}件`
  );

  if (needsProcessing === 0) {
    console.log(`⏭️ 全て処理済みのためスキップします。`);
    return;
  }

  // 未処理のカードのみ抽出
  const cardsToProcess = data
    .map((card: any, index: number) => ({ card, index }))
    .filter(
      ({ card }) =>
        !(card.examples && Array.isArray(card.examples) && card.examples.length === 3)
    );

  // 並列実行
  const limit = pLimit(CONCURRENCY);
  let completedCount = 0;
  let successCount = 0;
  let failCount = 0;
  let lastSaveCount = 0;

  console.log(`🚀 ${CONCURRENCY}並列で処理を開始します...`);

  const tasks = cardsToProcess.map(({ card, index }) =>
    limit(async () => {
      const current = completedCount + 1;
      console.log(
        `[${current}/${cardsToProcess.length}] 処理中: ${card.targetWord} (ID: ${card.id})`
      );
      const examples = await generateExamplesForCard(card);

      if (examples && Array.isArray(examples) && examples.length > 0) {
        // 新しい構造に更新
        data[index].examples = examples;
        // 古いプロパティを削除
        delete data[index].sentence;
        delete data[index].pinyin;
        delete data[index].translation;
        delete data[index].chunks;
        delete data[index].hintText;
        successCount++;
      } else {
        failCount++;
        console.warn(`⚠️ スキップ: ${card.targetWord} (ID: ${card.id}) - examples生成失敗`);
      }

      completedCount++;
      const doneCount = completedCount;
      console.log(
        `  → 進捗: ${doneCount}/${cardsToProcess.length} (成功: ${successCount}, 失敗: ${failCount})`
      );

      // 10件ごとに途中保存
      if (doneCount - lastSaveCount >= 10 || doneCount === cardsToProcess.length) {
        lastSaveCount = doneCount;
        console.log(`💾 途中保存中... (${doneCount}件完了)`);
        saveFile(absolutePath, data, isJsonFile, prefix, suffix);
      }
    })
  );

  await Promise.all(tasks);

  // 最終保存（途中保存が漏れた場合の保険）
  console.log(`✅ 最終保存...`);
  saveFile(absolutePath, data, isJsonFile, prefix, suffix);

  const finalProcessed = data.filter(
    (c: any) => c.examples && Array.isArray(c.examples) && c.examples.length === 3
  ).length;

  console.log(
    `📊 ${filePath} 完了: ${finalProcessed}/${totalCards}件が処理済み (成功: ${successCount}, 失敗: ${failCount})`
  );
}

function saveFile(
  absolutePath: string,
  data: any[],
  isJsonFile: boolean,
  prefix: string,
  suffix: string
) {
  const jsonString = JSON.stringify(data, null, 2);
  const newContent = isJsonFile
    ? jsonString
    : `${prefix}${jsonString}${suffix}`;
  fs.writeFileSync(absolutePath, newContent, "utf-8");
}

async function main() {
  const targetFiles = [
    "src/data/bandBLevel3.ts",
    "src/data/bandBLevel4.ts",
    "src/data/bandC.ts",
    "src/data/bandB_new.json",
  ];

  for (const file of targetFiles) {
    await processFile(file);
  }

  console.log("\n🎉 全てのファイルの処理が完了しました！");
}

main().catch((error) => {
  console.error("❌ 致命的エラー:", error);
  process.exit(1);
});