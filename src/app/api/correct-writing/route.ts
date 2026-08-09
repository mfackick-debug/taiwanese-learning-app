import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import type { CorrectWritingRequest, WritingCorrection } from "@/types/myWord";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const correctionSchema = {
  type: SchemaType.OBJECT,
  properties: {
    grammarCheck: {
      type: SchemaType.STRING,
      description:
        "Japanese: brief grammar/usage check of the learner's text (what is OK / what to fix). ~80-120 chars.",
    },
    naturalRewrite: {
      type: SchemaType.STRING,
      description:
        "Natural Taiwan Mandarin rewrite in Traditional Chinese. Must keep the learner's intent and include the target word when appropriate.",
    },
    feedback: {
      type: SchemaType.STRING,
      description:
        "Japanese: concise encouraging feedback with 1–2 concrete tips for Taiwan Mandarin usage. ~80-120 chars.",
    },
  },
  required: ["grammarCheck", "naturalRewrite", "feedback"],
} as any;

function buildMock(body: CorrectWritingRequest): WritingCorrection {
  const text = body.userText.trim();
  return {
    grammarCheck: `【モック】「${body.targetWord}」の使い方はおおむね通じます。語順と助詞を少し整えるとより自然です。`,
    naturalRewrite: text
      ? `【添削モック】${text}（台湾華語として自然な表現に整える想定です。）`
      : "（入力が空です。）",
    feedback:
      "【モック】ターゲット語を文の中心に置き、因為…所以… などの口語接続を足すと Band B らしい自然さが出ます。GEMINI_API_KEY 設定後に詳細添削が有効になります。",
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as CorrectWritingRequest;
    const targetWord = body?.targetWord?.trim();
    const userText = body?.userText?.trim();

    if (!targetWord) {
      return NextResponse.json({ error: "Missing targetWord" }, { status: 400 });
    }
    if (!userText) {
      return NextResponse.json({ error: "Missing userText" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(buildMock({ ...body, targetWord, userText }));
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: correctionSchema,
        temperature: 0.6,
      },
    });

    const prompt = `
You are a friendly Taiwan Mandarin writing coach for Japanese learners (about TOCFL Band B).

Target word to practice: 「${targetWord}」
${body.modelSentence ? `Reference model sentence: "${body.modelSentence}"` : ""}

Learner's draft (may mix Japanese or awkward Chinese):
"""
${userText}
"""

Tasks:
1. grammarCheck (Japanese): Point out grammar / word-order / particle issues briefly.
2. naturalRewrite (Traditional Chinese): Rewrite as natural spoken Taiwan Mandarin. Prefer everyday collocations; do not force chengyu.
3. feedback (Japanese): Short encouraging tips (1–2 points).

Output ONLY JSON matching the schema.
`;

    const result = await model.generateContent(prompt);
    const parsed = JSON.parse(result.response.text()) as Partial<WritingCorrection>;
    const mock = buildMock({ ...body, targetWord, userText });

    const response: WritingCorrection = {
      grammarCheck: parsed.grammarCheck?.trim() || mock.grammarCheck,
      naturalRewrite: parsed.naturalRewrite?.trim() || mock.naturalRewrite,
      feedback: parsed.feedback?.trim() || mock.feedback,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error in /api/correct-writing:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
