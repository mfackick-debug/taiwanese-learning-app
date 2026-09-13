/**
 * Calls POST /api/generate-question logic without a hanging HTTP server.
 * Usage: npx tsx scripts/verify-generate-question.ts
 */
import { POST } from "../src/app/api/generate-question/route";

async function main() {
  const req = new Request("http://localhost/api/generate-question", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      themeId: "shopping",
      themeLabelJa: "買い物・支払い",
      category: "survival",
    }),
  });

  const res = await POST(req as never);
  const text = await res.text();
  console.log("status", res.status);
  console.log(text);
  if (!res.ok) process.exit(1);
  const json = JSON.parse(text) as { question?: string };
  if (!json.question) {
    throw new Error("missing question");
  }
  console.log("OK question:", json.question);
}

main().catch((error) => {
  console.error("verify-generate-question failed:", error);
  process.exit(1);
});
