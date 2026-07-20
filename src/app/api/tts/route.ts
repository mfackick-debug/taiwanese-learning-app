import { NextResponse } from "next/server";
import { cleanseTextForTaiwanTts } from "@/utils/taiwanTtsCleanse";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.YATING_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing YATING_API_KEY" }, { status: 500 });
    }

    const body = (await req.json()) as { text?: string };
    const rawText = body?.text?.trim();
    if (!rawText) {
      return NextResponse.json({ error: "Missing text" }, { status: 400 });
    }

    const text = cleanseTextForTaiwanTts(rawText);

    const response = await fetch("https://tts.api.yating.tw/v2/speeches/short", {
      method: "POST",
      headers: {
        key: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: { text, type: "text" },
        voice: {
          model: "zh_en_female_1",
          speed: 1.0,
          pitch: 1.0,
          energy: 1.0,
        },
        audioConfig: {
          encoding: "MP3",
          sampleRate: "16K",
        },
      }),
    });
    if (!response.ok) {
      const errText = await response.text().catch(() => "");
      console.error("Yating upstream error:", errText);
      return NextResponse.json({ error: "Upstream TTS failed", details: errText }, { status: 500 });
    }

    const data = (await response.json()) as { audioContent?: string };
    if (!data?.audioContent) {
      console.error("Yating upstream response missing audioContent");
      return NextResponse.json({ error: "Upstream TTS response invalid" }, { status: 500 });
    }

    const audioBuffer = Buffer.from(data.audioContent, "base64");

    return new Response(audioBuffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
      },
    });
  } catch (e) {
    return NextResponse.json(
      {
        error: "TTS route error",
        details: e instanceof Error ? e.message : String(e),
      },
      { status: 500 }
    );
  }
}
