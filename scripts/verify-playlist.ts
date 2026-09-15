import {
  buildExamplePlaylist,
  isCompleteExampleSentence,
} from "../src/data/playlist";

const playlist = buildExamplePlaylist();
const ids = playlist.map((item) => item.id);
const unique = new Set(ids);

const bySource = playlist.reduce(
  (acc, item) => {
    acc[item.source] += 1;
    return acc;
  },
  { shadowing: 0, vocab: 0 }
);

const missingTranslation = playlist.filter((item) => !item.translation.trim());
const notSentence = playlist.filter(
  (item) => !isCompleteExampleSentence(item.sentence)
);

console.log(`total=${playlist.length}`);
console.log(`uniqueIds=${unique.size}`);
console.log(`shadowing=${bySource.shadowing} vocab=${bySource.vocab}`);
console.log(`first=${playlist[0]?.id} ${playlist[0]?.sentence}`);
console.log(`sampleVocab=${playlist.find((i) => i.source === "vocab")?.id}`);

if (ids.length !== unique.size) {
  throw new Error("Duplicate playlist IDs");
}
if (missingTranslation.length > 0) {
  throw new Error(`Empty translation: ${missingTranslation.length}`);
}
if (notSentence.length > 0) {
  throw new Error(`Non-sentence items: ${notSentence.length}`);
}
if (playlist.length < 100) {
  throw new Error(`Playlist too small: ${playlist.length}`);
}

const wordChecks: Array<[string, string | undefined, boolean]> = [
  ["捷運", undefined, false],
  ["漂亮", "漂亮", false],
  ["我每天搭捷運上班。", "捷運", true],
  ["你好", undefined, true],
  ["", undefined, false],
];
for (const [text, word, expected] of wordChecks) {
  const actual = isCompleteExampleSentence(text, word);
  if (actual !== expected) {
    throw new Error(`isCompleteExampleSentence("${text}") expected ${expected} got ${actual}`);
  }
}

console.log("OK playlist checks");
