import fs from 'fs';
const content = fs.readFileSync('src/app/lib/vocabulary.ts','utf8');
const words = [...content.matchAll(/\bword:\s*'([^']+)'/g)].map(m=>m[1]);
console.log(words.join('\n'));
