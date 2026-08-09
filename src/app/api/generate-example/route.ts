import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import type { GenerateExampleRequest, GeneratedExample } from "@/types/myWord";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const exampleSchema = {
  type: SchemaType.OBJECT,
  properties: {
    sentence: {
      type: SchemaType.STRING,
      description: "One natural Traditional Chinese sentence using the target word (Taiwan Mandarin).",
    },
    pinyin: {
      type: SchemaType.STRING,
      description: "Taiwan-style Hanyu Pinyin with tone marks, space-separated.",
    },
    translation: {
      type: SchemaType.STRING,
      description: "Natural Japanese translation of the sentence.",
    },
  },
  required: ["sentence", "pinyin", "translation"],
} as any;

function buildMock(targetWord: string): GeneratedExample {
  return {
    targetWord,
    sentence: `為了學會「${targetWord}」這個詞，我今天特別練習了一遍。`,
    pinyin: `wèi le xué huì 「${targetWord}」 zhè ge cí, wǒ jīn tiān tè bié liàn xí le yī biàn.`,
    translation: `「${targetWord}」という語を覚えるために、今日は特に一度練習しました。（モック例文。GEMINI_API_KEY を設定すると本番生成が有効になります。）`,
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as GenerateExampleRequest;
    const targetWord = body?.targetWord?.trim();

    if (!targetWord) {
      return NextResponse.json({ error: "Missing targetWord" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(buildMock(targetWord));
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: exampleSchema,
        temperature: 0.8,
      },
    });

    const prompt = `
You are a Taiwan Mandarin teacher creating study examples for Japanese learners.

Target word (must appear in the sentence): 「${targetWord}」

Create ONE natural spoken Taiwan Mandarin example sentence at approximately TOCFL Band B (Level 3–4) difficulty.
Rules:
1. Use Traditional Chinese (繁體字) only in "sentence".
2. The sentence MUST include the exact target word 「${targetWord}」.
3. Prefer everyday / practical situations (life, workplace, media). Avoid rare chengyu as the main focus.
4. Provide Taiwan-style pinyin with tone marks.
5. Provide a clear Japanese translation.

Output ONLY JSON matching the schema.
`;

    const result = await model.generateContent(prompt);
    const parsed = JSON.parse(result.response.text()) as {
      sentence?: string;
      pinyin?: string;
      translation?: string;
    };

    const response: GeneratedExample = {
      targetWord,
      sentence: parsed.sentence?.trim() || buildMock(targetWord).sentence,
      pinyin: parsed.pinyin?.trim() || buildMock(targetWord).pinyin,
      translation: parsed.translation?.trim() || buildMock(targetWord).translation,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error in /api/generate-example:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
