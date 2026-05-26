import fs from "fs";
import https from "https";

const VOCAB_PATH = "src/app/lib/vocabulary.ts";
const TOCFL_CSV_URL = "https://raw.githubusercontent.com/tomcumming/tocfl-word-list/master/dist/tocfl.csv";

function readExistingWords() {
  const content = fs.readFileSync(VOCAB_PATH, "utf8");
  const matches = [...content.matchAll(/\bword:\s*'([^']+)'/g)];
  return new Set(matches.map((m) => m[1]));
}

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 400) {
          reject(new Error(`HTTP ${res.statusCode} fetching ${url}`));
          return;
        }
        res.setEncoding("utf8");
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

// Minimal CSV parser for the specific TOCFL csv format (quoted fields, commas inside quotes)
function parseCsvLine(line) {
  const out = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        const next = line[i + 1];
        if (next === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cur += ch;
      }
    } else {
      if (ch === ',') {
        out.push(cur);
        cur = "";
      } else if (ch === '"') {
        inQuotes = true;
      } else {
        cur += ch;
      }
    }
  }
  out.push(cur);
  return out;
}

function main() {
  const existing = readExistingWords();
  const outputPath = process.argv[2];
  const maxCandidatesArg = process.argv[3];
  const maxCandidates = maxCandidatesArg ? Number(maxCandidatesArg) : 400;
  fetchText(TOCFL_CSV_URL)
    .then((csv) => {
      const lines = csv.trim().split(/\r?\n/);
      const header = parseCsvLine(lines.shift());
      const idxWord = header.indexOf("Word");
      const idxPinyin = header.indexOf("Pinyin");
      const idxLevel = header.indexOf("Level");

      if (idxWord === -1 || idxPinyin === -1 || idxLevel === -1) {
        throw new Error(`Unexpected CSV header: ${header.join(",")}`);
      }

      const candidates = [];
      for (const line of lines) {
        const cols = parseCsvLine(line);
        const word = cols[idxWord];
        const pinyin = cols[idxPinyin];
        const levelStr = cols[idxLevel];
        const level = Number(levelStr);

        if (!word || !Number.isFinite(level)) continue;
        if (level < 1 || level > 4) continue;
        if (existing.has(word)) continue;

        candidates.push({ word, pinyin, level });
        if (candidates.length >= maxCandidates) break;
      }

      const out = {
        source: TOCFL_CSV_URL,
        existingCount: existing.size,
        candidateCount: candidates.length,
        candidates,
      };

      const json = JSON.stringify(out, null, 2);
      if (outputPath) {
        fs.writeFileSync(outputPath, json, { encoding: "utf8" });
      } else {
        console.log(json);
      }
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

main();
