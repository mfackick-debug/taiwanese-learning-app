import { getQuickResponses } from "../src/data/quickResponses";
import { extractSkeletonKeywords } from "../src/data/connectors";
import { getDrillCards } from "../src/data/drillPool";

const items = getQuickResponses();
if (items.length === 0) throw new Error("empty quick responses");

const mismatch = items.filter((item) => {
  if (!item.promptJa.trim() || !item.answerZh.trim() || !item.answerPinyin.trim()) return true;
  // 旧バグ: 買い物なのに通勤文
  return item.themeId === "shopping" && item.answerZh.includes("捷運上班");
});
if (mismatch.length > 0) {
  throw new Error(`inconsistent items: ${JSON.stringify(mismatch[0])}`);
}

const shopping = items.filter((i) => i.themeId === "shopping");
if (shopping.length < 4) throw new Error("shopping too small");
if (!shopping[0]?.answerZh.includes("看一下")) {
  throw new Error(`unexpected shopping first: ${shopping[0]?.answerZh}`);
}

const first = getDrillCards("all", { shuffle: false })[0];
if (first) {
  const kw = extractSkeletonKeywords(first);
  if (kw.some((a, i) => kw.some((b, j) => i !== j && (a.includes(b) || b.includes(a))))) {
    throw new Error(`overlapping keywords: ${kw.join(",")}`);
  }
  console.log("skeleton", first.id, kw.join("|"));
}

console.log(`quickResponses=${items.length} shopping=${shopping.length}`);
console.log("shopping0", shopping[0]?.promptJa, "→", shopping[0]?.answerZh);
console.log("OK");
