import fs from 'fs';

const vocab = fs.readFileSync('src/app/lib/vocabulary.ts','utf8');
const existing = new Set([...vocab.matchAll(/\bword:\s*'([^']+)'/g)].map(m=>m[1]));

const words = process.argv.slice(2);
const dup = words.filter(w=>existing.has(w));
if(dup.length){
  console.error('DUPLICATES:', dup.join(', '));
  process.exit(1);
}
console.log('OK, no duplicates among', words.length, 'words');
