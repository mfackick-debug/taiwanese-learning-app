import type { PolishResponseBody } from "@/types/contextBuilder";

/** API / モックレスポンスを Phase 4 厳格JSONに正規化 */
export function parsePolishResponse(
  raw: unknown,
  userTextFallback: string,
  mode: PolishResponseBody["mode"] = "gemini"
): PolishResponseBody {
  const parsed =
    typeof raw === "object" && raw !== null ? (raw as Record<string, unknown>) : {};

  const polishedText =
    (typeof parsed.polishedText === "string" ? parsed.polishedText.trim() : "") ||
    userTextFallback;

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

  const responseMode =
    parsed.mode === "mock" || parsed.mode === "gemini" ? parsed.mode : mode;

  return {
    polishedText,
    pinyin,
    explanation,
    nextQuestion,
    mode: responseMode,
  };
}
