const fs = require("fs");
const path = require("path");
const vm = require("vm");

require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const PROJECT_ROOT = __dirname;
const INPUT_TS_PATH = path.join(PROJECT_ROOT, "src", "data", "bandB.ts");
const OUTPUT_JSON_PATH = path.join(PROJECT_ROOT, "src", "data", "bandB_new.json");

const START_ID = "B-118";
const END_ID = "B-210";
const WAIT_MS_PER_BATCH = 10000;
const RETRY_WAIT_MS = 90000;
const RETRY_WAIT_MS_429 = 90000;
const MAX_RETRIES = 3;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const idToNumber = (id) => {
  const m = /^B-(\d{3})$/.exec(id);
  if (!m) return null;
  return Number(m[1]);
};

const isInRange = (id) => {
  const n = idToNumber(id);
  if (n == null) return false;
  return n >= idToNumber(START_ID) && n <= idToNumber(END_ID);
};

function loadBandBDataFromTs(tsPath) {
  const raw = fs.readFileSync(tsPath, "utf8");

  // Make the TS file evaluatable as CommonJS.
  // - drop the import line
  // - replace the export with a var + module.exports
  const transformed = raw
    .replace(/^import[^;]+;\s*/m, "")
    .replace(/export const bandBData\s*:\s*SentenceCard\[\]\s*=\s*/, "const bandBData = ")
    .concat("\nmodule.exports = { bandBData };\n");

  const sandbox = {
    module: { exports: {} },
    exports: {},
    require,
    __dirname: path.dirname(tsPath),
    __filename: tsPath,
  };

  vm.runInNewContext(transformed, sandbox, { filename: tsPath });

  const { bandBData } = sandbox.module.exports;
  if (!Array.isArray(bandBData)) {
    throw new Error("Failed to load bandBData from bandB.ts (bandBData is not an array)");
  }
  return bandBData;
}

function makeBatchPrompt(batchCards) {
  // We only ask Gemini to return the editable fields.
  // This makes merging safe and avoids accidental changes to targetWord/distractors/bossReading/etc.
  const locked = batchCards.map((c) => ({
    id: c.id,
    band: c.band,
    targetWord: c.targetWord,
    distractors: c.distractors,
  }));

  return [
    "You are rewriting 3 Chinese learning cards into a single coherent mini-story (Taiwan daily life/business).",
    "Level: TOCFL Band B.",
    "",
    "STRICT RULES:",
    "- Do NOT change id, band, targetWord, distractors.",
    "- Create a connected narrative across the 3 cards (conversation or episode).",
    "- Rewrite these fields to match the new context: sentence, translation (Japanese), pinyin, chunks, hintText, grammarNote (Japanese).",
    "- chunks must exactly segment the new sentence into 3-5 meaningful chunks.",
    "- hintText must equal the first element of chunks.",
    "- Return STRICT JSON only. No markdown. No extra text.",
    "",
    "OUTPUT FORMAT (STRICT):",
    "{\n  \"cards\": [\n    {\"id\":\"...\",\"sentence\":\"...\",\"pinyin\":\"...\",\"translation\":\"...\",\"chunks\":[...],\"hintText\":\"...\",\"grammarNote\":\"...\"},\n    {...},\n    {...}\n  ]\n}",
    "",
    "LOCKED FIELDS:",
    JSON.stringify(locked, null, 2),
  ].join("\n");
}

function normalizeJsonResponse(text) {
  // Gemini sometimes wraps JSON in code fences; strip them if present.
  const trimmed = text.trim();
  const fenceMatch = /^```(?:json)?\s*([\s\S]*?)\s*```$/i.exec(trimmed);
  return fenceMatch ? fenceMatch[1].trim() : trimmed;
}

function getErrorDebugString(err) {
  if (!err) return "";
  if (typeof err === "string") return err;
  if (err instanceof Error) return err.message;
  try {
    return JSON.stringify(err);
  } catch {
    return String(err);
  }
}

function isRetriableGeminiError(err) {
  const msg = getErrorDebugString(err);
  // Common transient failure codes
  if (/\b503\b/i.test(msg)) return true;
  if (/\b429\b/i.test(msg)) return true;
  if (/Service Unavailable/i.test(msg)) return true;
  if (/Too Many Requests/i.test(msg)) return true;
  if (/high demand/i.test(msg)) return true;
  return false;
}

function is429GeminiError(err) {
  const msg = getErrorDebugString(err);
  return /\b429\b/i.test(msg) || /Too Many Requests/i.test(msg);
}

async function generateContentWithRetry({ model, prompt, batchLabel }) {
  let lastErr = null;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
        },
      });
      return { ok: true, result };
    } catch (err) {
      lastErr = err;
      const msg = getErrorDebugString(err);
      const retriable = isRetriableGeminiError(err);

      console.warn(`WARN: Gemini API error for ${batchLabel} (attempt ${attempt}/${MAX_RETRIES}).`);
      console.warn(msg);

      if (!retriable) {
        return { ok: false, error: err, retriable: false };
      }

      if (attempt < MAX_RETRIES) {
        const waitMs = is429GeminiError(err) ? RETRY_WAIT_MS_429 : RETRY_WAIT_MS;
        console.warn(`WARN: Retrying ${batchLabel} after ${Math.round(waitMs / 1000)}s ...`);
        await sleep(waitMs);
      }
    }
  }
  return { ok: false, error: lastErr, retriable: true };
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing GEMINI_API_KEY in .env");
  }

  const allCards = loadBandBDataFromTs(INPUT_TS_PATH);

  // Collect indices for cards in range, preserving original order
  const targetIndices = [];
  for (let i = 0; i < allCards.length; i++) {
    const c = allCards[i];
    if (c && typeof c.id === "string" && isInRange(c.id)) {
      targetIndices.push(i);
    }
  }

  if (targetIndices.length === 0) {
    console.log("No cards found in range", START_ID, "..", END_ID);
    return;
  }

  if (targetIndices.length % 3 !== 0) {
    throw new Error(
      `Target range size is not divisible by 3: ${targetIndices.length}. Check ordering or missing IDs.`
    );
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

  console.log(`Loaded ${allCards.length} cards. Processing ${targetIndices.length} cards (${targetIndices.length / 3} batches) ...`);

  for (let b = 0; b < targetIndices.length; b += 3) {
    const idxs = targetIndices.slice(b, b + 3);
    const batchCards = idxs.map((i) => allCards[i]);

    const batchLabel = `${batchCards[0].id}..${batchCards[2].id}`;
    console.log(`\n[Batch ${b / 3 + 1}/${targetIndices.length / 3}] ${batchLabel}`);

    const prompt = makeBatchPrompt(batchCards);

    const gen = await generateContentWithRetry({ model, prompt, batchLabel });
    if (!gen.ok) {
      const out = path.join(PROJECT_ROOT, "src", "data", `bandB_batch_api_error_${batchCards[0].id}.txt`);
      const debug = getErrorDebugString(gen.error);
      fs.writeFileSync(out, debug, "utf8");
      console.warn(`WARN: Skipping ${batchLabel}. Error saved to ${out}`);
      await sleep(WAIT_MS_PER_BATCH);
      continue;
    }

    const responseText = gen.result.response.text();
    const jsonText = normalizeJsonResponse(responseText);

    let parsed;
    try {
      parsed = JSON.parse(jsonText);
    } catch (e) {
      const out = path.join(PROJECT_ROOT, "src", "data", `bandB_batch_error_${batchCards[0].id}.txt`);
      fs.writeFileSync(out, responseText, "utf8");
      throw new Error(`Failed to parse JSON for ${batchLabel}. Raw response saved to ${out}`);
    }

    if (!parsed || !Array.isArray(parsed.cards) || parsed.cards.length !== 3) {
      throw new Error(`Invalid JSON schema for ${batchLabel}: expected {cards:[3 items]}`);
    }

    // Merge back into original cards, keeping locked fields and any extra fields (bossReading, pronunciationNote, etc.)
    for (const updated of parsed.cards) {
      const targetIndex = idxs.find((i) => allCards[i].id === updated.id);
      if (targetIndex == null) {
        throw new Error(`Gemini returned unexpected id '${updated.id}' for ${batchLabel}`);
      }

      const original = allCards[targetIndex];

      // Locked-field verification
      if (updated.id !== original.id) throw new Error("id mismatch");
      if (original.band !== "B") throw new Error(`Unexpected band for ${original.id}: ${original.band}`);

      // Apply only editable fields
      allCards[targetIndex] = {
        ...original,
        sentence: updated.sentence,
        pinyin: updated.pinyin,
        translation: updated.translation,
        chunks: updated.chunks,
        hintText: updated.hintText,
        grammarNote: updated.grammarNote,
      };
    }

    // Persist after every batch to allow resume if interrupted
    fs.writeFileSync(OUTPUT_JSON_PATH, JSON.stringify(allCards, null, 2), "utf8");
    console.log(`Wrote ${OUTPUT_JSON_PATH}`);

    await sleep(WAIT_MS_PER_BATCH);
  }

  console.log("\nDone.");
  console.log("Next: merge bandB_new.json into bandB.ts (instructions below).\n");
}

main().catch((e) => {
  console.error("\nERROR:");
  console.error(e && e.stack ? e.stack : e);
  process.exit(1);
});
