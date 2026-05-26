import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const schema = {
  type: SchemaType.OBJECT,
  properties: {
    question: {
      type: SchemaType.STRING,
      description: "A natural, context-aware question in Traditional Chinese based on the sentence. Do NOT use generic questions like '根據音檔，原因是什麼？'. Ask specifically about the situation.",
    },
    options: {
      type: SchemaType.ARRAY,
      items: {
        type: SchemaType.STRING,
      },
      description: "An array of exactly 4 options in Traditional Chinese. Each option MUST be a short, natural phrase or sentence of 10-15 characters. NEVER use trailing dots ('...') to truncate. The options must be grammatically correct. One must be a paraphrase of the correct meaning. The other 3 must be plausible but incorrect distractors based on the context.",
    },
    answerIndex: {
      type: SchemaType.INTEGER,
      description: "The index (0 to 3) of the correct answer in the options array.",
    },
  },
  required: ["question", "options", "answerIndex"],
} as any;

export async function POST(req: NextRequest) {
  try {
    const { chinese, japanese, targetWord } = await req.json();

    if (!chinese) {
      return NextResponse.json({ error: "Missing chinese sentence" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY is not set. Falling back to static generation.");
      return NextResponse.json({ error: "API key missing" }, { status: 500 });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.7,
      },
    });

    const prompt = `
You are an expert Taiwanese Mandarin teacher creating TOCFL Band B/C listening comprehension questions.

Given the following sentence from a listening audio track:
Chinese: "${chinese}"
Japanese Translation: "${japanese}"
Target Grammar/Word: "${targetWord}"

Generate a 4-option multiple-choice question.
RULES:
1. QUESTION: Create a specific, context-aware question in Traditional Chinese (e.g. "說話的人為什麼喜歡去那家餐廳？"). Do not use lazy/generic questions like "根據音檔，原因是什麼？".
2. OPTIONS: Generate exactly 4 options. 
   - They MUST be short, natural phrases or sentences (around 10-15 characters).
   - NEVER truncate with "..." or "…". 
   - Ensure perfect Traditional Chinese grammar.
   - The correct option must be a PARAPHRASE of the original meaning, not a direct copy.
   - The 3 distractors must be plausible, context-related, but factually incorrect based on the sentence. Do NOT use generic distractors like "情況不太明顯" or "沒有特別原因".

Output ONLY the JSON conforming to the schema.
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    // The response is guaranteed to match the JSON schema
    const parsed = JSON.parse(text);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Error generating QA with Gemini:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
