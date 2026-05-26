const fs = require('fs');
const path = require('path');

const root = process.cwd();
const srcFile = path.join(root, 'src', 'data', 'sentenceData.ts');
if (!fs.existsSync(srcFile)) {
  console.error('Missing', srcFile);
  process.exit(1);
}

const code = fs.readFileSync(srcFile, 'utf8');

function extractArrayLiteral(ts) {
  const m = ts.match(/export\s+const\s+SENTENCE_DATA[^=]*=\s*\[/);
  if (!m) throw new Error('SENTENCE_DATA export not found');
  const start = m.index + m[0].lastIndexOf('[');
  let i = start;
  let depth = 0;
  let inStr = false;
  let strCh = '';
  let esc = false;
  while (i < ts.length) {
    const ch = ts[i];
    if (inStr) {
      if (esc) {
        esc = false;
      } else if (ch === '\\') {
        esc = true;
      } else if (ch === strCh) {
        inStr = false;
        strCh = '';
      }
      i++;
      continue;
    }

    if (ch === '/' && ts[i + 1] === '/') {
      i += 2;
      while (i < ts.length && ts[i] !== '\n') i++;
      continue;
    }
    if (ch === '/' && ts[i + 1] === '*') {
      i += 2;
      while (i < ts.length && !(ts[i] === '*' && ts[i + 1] === '/')) i++;
      i += 2;
      continue;
    }

    if (ch === '"' || ch === "'") {
      inStr = true;
      strCh = ch;
      i++;
      continue;
    }

    if (ch === '[') depth++;
    if (ch === ']') {
      depth--;
      if (depth === 0) return ts.slice(start, i + 1);
    }
    i++;
  }
  throw new Error('Array literal not closed');
}

const arrText = extractArrayLiteral(code);
let data;
try {
  data = Function('"use strict"; return ' + arrText + ';')();
} catch (e) {
  console.error('Failed to evaluate array literal:', e);
  process.exit(1);
}

const bandA = data.filter((x) => x && x.band === 'A');
const bandB = data.filter((x) => x && x.band === 'B');
const bandC = data.filter((x) => x && x.band === 'C');

function writeBandFile(outPath, exportName, arr) {
  const body = JSON.stringify(arr, null, 2);
  const content =
    'import type { SentenceCard } from "@/types";\n\n' +
    `export const ${exportName}: SentenceCard[] = ${body};\n`;
  fs.writeFileSync(outPath, content, 'utf8');
}

writeBandFile(path.join(root, 'src', 'data', 'bandA.ts'), 'bandAData', bandA);
writeBandFile(path.join(root, 'src', 'data', 'bandB.ts'), 'bandBData', bandB);
writeBandFile(path.join(root, 'src', 'data', 'bandC.ts'), 'bandCData', bandC);

const indexPath = path.join(root, 'src', 'data', 'index.ts');
const indexContent =
  'import type { SentenceCard } from "@/types";\n' +
  'import { bandAData } from "@/data/bandA";\n' +
  'import { bandBData } from "@/data/bandB";\n' +
  'import { bandCData } from "@/data/bandC";\n\n' +
  'export const ALL_SENTENCES: SentenceCard[] = [...bandAData, ...bandBData, ...bandCData];\n' +
  'export const SENTENCE_DATA: SentenceCard[] = ALL_SENTENCES;\n\n' +
  'export { bandAData, bandBData, bandCData };\n';
fs.writeFileSync(indexPath, indexContent, 'utf8');

const compatPath = path.join(root, 'src', 'app', 'lib', 'sentenceData.ts');
fs.writeFileSync(compatPath, 'export { SENTENCE_DATA } from "@/data";\n', 'utf8');

fs.unlinkSync(srcFile);
console.log('OK');
