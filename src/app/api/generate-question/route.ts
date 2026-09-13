import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import type { GenerateQuestionRequestBody, GenerateQuestionResponseBody } from "@/types/contextBuilder";
import { buildFallbackQuestion } from "@/data/interviewThemes";

export const runtime = "nodejs";
export const maxDuration = 20;

const GEMINI_TIMEOUT_MS = 12_000;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const questionSchema = {
  type: SchemaType.OBJECT,
  properties: {
    question: {
      type: SchemaType.STRING,
      description:
        "One spoken interview question in Traditional Chinese (Taiwan Mandarin). Casual, specific, answerable from personal experience. No Simplified Chinese.",
    },
    pinyin: {
      type: SchemaType.STRING,
      description: "Taiwan-style Hanyu Pinyin for the question. Space-separated syllables with tone marks.",
    },
    hintJa: {
      type: SchemaType.STRING,
      description: "Short Japanese hint (about 40 characters) telling the learner what kind of answer to give.",
    },
  },
  required: ["question", "pinyin", "hintJa"],
} as any;

function buildMockResponse(body: GenerateQuestionRequestBody): GenerateQuestionResponseBody {
  return {
    ...buildFallbackQuestion(
      body.themeId,
      body.themeLabelJa || body.customTheme?.trim() || "自由テーマ",
      body.customTheme,
    ),
    mode: "mock",
  };
}

function parseQuestion(parsed: unknown, fallback: GenerateQuestionResponseBody): GenerateQuestionResponseBody {
  if (!parsed || typeof parsed !== "object") return fallback;
  const raw = parsed as Record<string, unknown>;
  const question = typeof raw.question === "string" ? raw.question.trim() : "";
  const pinyin = typeof raw.pinyin === "string" ? raw.pinyin.trim() : "";
  const hintJa = typeof raw.hintJa === "string" ? raw.hintJa.trim() : "";
  return {
    question: question || fallback.question,
    pinyin: pinyin || fallback.pinyin,
    hintJa: hintJa || fallback.hintJa,
    mode: "gemini",
  };
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Gemini question timeout")), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}

export async function POST(req: NextRequest) {
  try {
    let body: GenerateQuestionRequestBody;
    try {
      body = (await req.json()) as GenerateQuestionRequestBody;
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }
    const themeLabelJa = body?.themeLabelJa?.trim();
    if (!themeLabelJa && !body?.customTheme?.trim()) {
      return NextResponse.json({ error: "Missing theme" }, { status: 400 });
    }

    const mock = buildMockResponse({
      ...body,
      themeLabelJa: themeLabelJa || body.customTheme?.trim() || "自由テーマ",
    });

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(mock);
    }

    const avoid = (body.avoidQuestions ?? []).filter(Boolean).slice(-5);
    const topic = body.customTheme?.trim() || themeLabelJa;
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: questionSchema,
        temperature: 0.95,
      },
    });

    try {
      const result = await withTimeout(
        model.generateContent(`
You create spoken interview questions for a Japanese learner of Taiwan Mandarin.

Theme (Japanese): ${topic}
Theme id: ${body.themeId}
${body.customTheme?.trim() ? `The learner invented this topic: 「${body.customTheme.trim()}」` : ""}

Rules:
- Ask ONE question in Traditional Chinese (繁體字), Taiwan spoken style.
- Make it concrete and personal (recent experience, how they handled it, how they felt).
- Do NOT use Simplified Chinese.
- Do NOT ask exam-style or textbook questions.
- Keep it to one or two short sentences.
- Avoid these previous questions if possible:
${avoid.length > 0 ? avoid.map((q) => `- ${q}`).join("\n") : "- (none)"}

Output ONLY JSON with question, pinyin, hintJa.
`),
        GEMINI_TIMEOUT_MS,
      );

      const parsed = JSON.parse(result.response.text()) as unknown;
      return NextResponse.json(parseQuestion(parsed, mock));
    } catch (error) {
      console.warn("generate-question falling back to mock:", error);
      return NextResponse.json(mock);
    }
  } catch (error) {
    console.error("Error in /api/generate-question:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
