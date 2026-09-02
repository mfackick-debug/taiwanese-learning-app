/**
 * Manual / CI check: synthesize a short Traditional Chinese phrase via Edge TTS.
 *
 * Usage (dev machine with network):
 *   npm run verify-tts
 *
 * In the running app, press any 再生 / 発音 button, or POST:
 *   curl -X POST http://localhost:9002/api/tts \
 *     -H "Content-Type: application/json" \
 *     -d "{\"text\":\"你好，今天天氣真好。\"}" \
 *     --output tts-check.mp3
 */
import { writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { taiwanTtsService } from "../src/lib/taiwanTts/taiwanTtsService";

const SAMPLE = "你好，今天天氣真好。";

async function main() {
  const audio = await taiwanTtsService.synthesize(SAMPLE);
  if (audio.length < 500) {
    throw new Error(`Audio too small (${audio.length} bytes)`);
  }
  const out = join(tmpdir(), "formosa-wordsmith-tts-check.mp3");
  await writeFile(out, audio);
  console.log(`OK Edge TTS zh-TW-HsiaoChenNeural: ${audio.length} bytes`);
  console.log(`Wrote ${out}`);
}

main().catch((error) => {
  console.error("verify-tts failed:", error);
  process.exit(1);
});
