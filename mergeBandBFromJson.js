const fs = require("fs");
const path = require("path");
const vm = require("vm");

const PROJECT_ROOT = __dirname;
const TS_PATH = path.join(PROJECT_ROOT, "src", "data", "bandB.ts");
const JSON_PATH = path.join(PROJECT_ROOT, "src", "data", "bandB_new.json");

const START_ID = "B-046";
const END_ID = "B-117";

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
    throw new Error("Failed to load bandBData from bandB.ts");
  }
  return bandBData;
}

function main() {
  if (!fs.existsSync(TS_PATH)) throw new Error(`Missing TS file: ${TS_PATH}`);
  if (!fs.existsSync(JSON_PATH)) throw new Error(`Missing JSON file: ${JSON_PATH}`);

  const jsonCards = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  if (!Array.isArray(jsonCards)) {
    throw new Error("bandB_new.json must be an array");
  }

  const tsCards = loadBandBDataFromTs(TS_PATH);

  const jsonMap = new Map();
  for (const c of jsonCards) {
    if (c && typeof c.id === "string" && isInRange(c.id)) {
      jsonMap.set(c.id, c);
    }
  }

  let replaced = 0;
  for (let i = 0; i < tsCards.length; i++) {
    const c = tsCards[i];
    if (!c || typeof c.id !== "string") continue;
    if (!isInRange(c.id)) continue;

    const fromJson = jsonMap.get(c.id);
    if (!fromJson) {
      throw new Error(`JSON missing id ${c.id} in range ${START_ID}..${END_ID}`);
    }

    // Replace whole object to reflect JSON as source of truth.
    tsCards[i] = fromJson;
    replaced++;
  }

  const expected = idToNumber(END_ID) - idToNumber(START_ID) + 1;
  if (replaced !== expected) {
    throw new Error(`Replaced ${replaced} cards, expected ${expected}. Check TS content/order.`);
  }

  const tsOutput =
    'import type { SentenceCard } from "@/types";\n\n' +
    `export const bandBData: SentenceCard[] = ${JSON.stringify(tsCards, null, 2)};\n`;

  fs.writeFileSync(TS_PATH, tsOutput, "utf8");

  console.log(`Merged ${START_ID}..${END_ID} from bandB_new.json into bandB.ts (replaced ${replaced} cards).`);
}

main();
