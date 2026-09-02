import { NextResponse } from "next/server";
import { cleanseTextForTaiwanTts } from "@/utils/taiwanTtsCleanse";
import { ALLOWED_VOICES, DEFAULT_RATE } from "@/lib/taiwanTts/constants";
import { taiwanTtsService } from "@/lib/taiwanTts/taiwanTtsService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

type TtsRequestBody = {
  text?: string;
  voice?: string;
  rate?: string;
};

function isAllowedVoice(voice: string | undefined): voice is (typeof ALLOWED_VOICES)[number] {
  return !!voice && (ALLOWED_VOICES as readonly string[]).includes(voice);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as TtsRequestBody;
    const rawText = body?.text?.trim();
    if (!rawText) {
      return NextResponse.json({ error: "Missing text" }, { status: 400 });
    }

    const text = cleanseTextForTaiwanTts(rawText);
    const voice = isAllowedVoice(body.voice) ? body.voice : undefined;
    const rate = body.rate && /^[+-]\d+%$/.test(body.rate) ? body.rate : DEFAULT_RATE;

    const audio = await taiwanTtsService.synthesize(text, { voice, rate });

    return new Response(audio, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "private, max-age=3600",
      },
    });
  } catch (e) {
    return NextResponse.json(
      {
        error: "TTS route error",
        details: e instanceof Error ? e.message : String(e),
      },
      { status: 502 },
    );
  }
}
