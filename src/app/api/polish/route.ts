import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import type { ConversationTurn, PolishRequestBody, PolishResponseBody } from "@/types/contextBuilder";
import { getPracticeCategoryMeta } from "@/types/practiceCategory";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const polishSchema = {
  type: SchemaType.OBJECT,
  properties: {
    polishedText: {
      type: SchemaType.STRING,
      description:
        "User message rewritten in natural Taiwan Mandarin (Traditional Chinese). Keep the user's meaning; fix grammar and word choice for native Taiwan usage.",
    },
    pinyin: {
      type: SchemaType.STRING,
      description:
        "Taiwan-style Hanyu Pinyin for polishedText ONLY. Space-separated syllables. Use tone marks (e.g. nǐ hǎo). Match Taiwan pronunciation habits.",
    },
    explanation: {
      type: SchemaType.STRING,
      description:
        "Japanese explanation (~100 characters) of WHY the learner's original text was corrected: vocabulary nuance, Taiwan Mandarin grammar, word choice. Be specific and encouraging.",
    },
    nextQuestion: {
      type: SchemaType.STRING,
      description:
        "One friendly follow-up question in Traditional Chinese to deepen the conversation, like a Taiwanese friend would ask.",
    },
  },
  required: ["polishedText", "pinyin", "explanation", "nextQuestion"],
} as any;

function formatHistory(history: ConversationTurn[]): string {
  if (history.length === 0) return "(none yet)";
  return history
    .map((t) => `${t.role === "user" ? "Learner" : "Coach"}: ${t.text}`)
    .join("\n");
}

function normalizePolishPayload(
  parsed: Record<string, unknown>,
  userText: string,
  mode: PolishResponseBody["mode"]
): PolishResponseBody {
  const polishedText =
    (typeof parsed.polishedText === "string" ? parsed.polishedText.trim() : "") || userText;

  const nextQuestion =
    (typeof parsed.nextQuestion === "string" ? parsed.nextQuestion.trim() : "") ||
    (typeof parsed.followUpQuestion === "string" ? parsed.followUpQuestion.trim() : "") ||
    "後來這件事有什麼新的發展嗎？";

  const pinyin =
    typeof parsed.pinyin === "string" && parsed.pinyin.trim()
      ? parsed.pinyin.trim()
      : "（ピンイン生成中）";

  const explanation =
    typeof parsed.explanation === "string" && parsed.explanation.trim()
      ? parsed.explanation.trim()
      : "表現を台湾華語として自然になるよう整えました。語順や語彙の選び方に注目してみてください。";

  return { polishedText, pinyin, explanation, nextQuestion, mode };
}

function buildMockResponse(body: PolishRequestBody): PolishResponseBody {
  const trimmed = body.userText.trim();
  const isFollowUp = Boolean(body.conversationHistory?.length);

  const polishedText = trimmed
    ? isFollowUp
      ? `【添削モック・続き】${trimmed}（会話の流れを踏まえて整える想定です。）`
      : `【添削モック】${trimmed}（台湾華語として自然な表現に整える想定です。GEMINI_API_KEY を設定すると本番添削が有効になります。）`
    : "（入力が空です。あなたのエピソードを繁体字中国語で書いてください。）";

  return normalizePolishPayload(
    {
      polishedText,
      pinyin: "tiān tiān huá yǔ tiān cè（モック）",
      explanation: isFollowUp
        ? "【モック】前の会話を踏まえ、口語の流れと接続詞の使い方を整えた想定です。本番では Gemini が具体的な修正理由を日本語で解説します。"
        : "【モック】試験向けの硬い表現を避け、台湾で実際に使われる語彙・語順に直した想定です。GEMINI_API_KEY 設定後、語彙のニュアンスまで解説されます。",
      nextQuestion: isFollowUp
        ? "了解了！那後來你有試試看其他方法嗎？"
        : "這個情況後來你是怎麼處理的？可以再多說一點嗎？",
    },
    trimmed,
    "mock"
  );
}

const OUTPUT_RULES = `
Output ONLY valid JSON with exactly these keys:
- polishedText (string): natural Taiwan Mandarin in Traditional Chinese
- pinyin (string): Taiwan-style pinyin for polishedText, space-separated syllables with tone marks
- explanation (string): Japanese, ~100 characters, explain WHY you corrected the learner's wording (vocabulary nuance, Taiwan grammar, particles)
- nextQuestion (string): one follow-up question in Traditional Chinese to continue the chat

Do NOT push chengyu (四字成語) or overly literary written Chinese unless the learner used them on purpose.
Prefer practical connectors and everyday collocations.
`;

function buildPrompt(body: PolishRequestBody, userText: string): string {
  const categoryMeta = body.category ? getPracticeCategoryMeta(body.category) : null;
  const history = body.conversationHistory ?? [];
  const isFollowUp = history.length > 0;

  const sharedContext = `
Practice situation: ${categoryMeta?.labelJa ?? "日常会話"}
${body.connectorLabel ? `Preferred spoken pattern: 「${body.connectorLabel}」` : ""}

Model sentence studied earlier:
"${body.sourceSentence}"

Skeleton pattern: "${body.skeletonText}"
Grammar note (Japanese): ${body.grammarNote}
Original writing scenario (Japanese): ${body.promptHintJa ?? "Write about your own recent experience using this pattern."}
`;

  if (isFollowUp) {
    return `
You are a friendly Taiwanese Mandarin native speaker coaching a Japanese learner through an ongoing chat — not exam essays.

${sharedContext}

Conversation so far:
${formatHistory(history)}

The learner's latest reply (may mix Japanese or awkward Chinese):
"""
${userText}
"""

Tasks:
1. Rewrite ONLY the learner's latest reply as natural spoken Taiwan Mandarin (繁體字). Preserve their story and intent; reference prior context when helpful.
2. Provide Taiwan-style pinyin for the polished text only.
3. Explain in Japanese (~100 chars) what you changed and why (specific word/grammar fixes).
4. Add ONE new follow-up question in Traditional Chinese that naturally continues the chat.

${OUTPUT_RULES}
`;
  }

  return `
You are a friendly Taiwanese Mandarin native speaker coaching a Japanese learner to write for REAL LIFE — not exam essays.

${sharedContext}

The learner's first draft (may mix Japanese or awkward Chinese):
"""
${userText}
"""

Tasks:
1. Rewrite the draft as natural spoken Taiwan Mandarin in Traditional Chinese (繁體字). Preserve the learner's personal story and intent. Use Taiwan-appropriate vocabulary and particles.
2. Provide Taiwan-style pinyin for the polished text only.
3. Explain in Japanese (~100 chars) what you changed and why — vocabulary nuance, Taiwan Mandarin grammar, natural collocations.
4. Add ONE follow-up question in Traditional Chinese to keep the conversation going (casual, encouraging, like 「那後來怎麼辦？」).

${OUTPUT_RULES}
`;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as PolishRequestBody;
    const userText = body?.userText?.trim();

    if (!userText) {
      return NextResponse.json({ error: "Missing userText" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(buildMockResponse(body));
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: polishSchema,
        temperature: 0.7,
      },
    });

    const prompt = buildPrompt(body, userText);
    const result = await model.generateContent(prompt);
    const parsed = JSON.parse(result.response.text()) as Record<string, unknown>;

    return NextResponse.json(normalizePolishPayload(parsed, userText, "gemini"));
  } catch (error) {
    console.error("Error in /api/polish:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
