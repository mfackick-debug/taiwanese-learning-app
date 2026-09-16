import { shuffle } from "@/components/study/utils";
import type { NormalizedStudyCard } from "@/types";

/** 台湾華語で文をつなぐ頻出表現（長いもの優先でマッチ） */
export const CONNECTOR_LEXICON: readonly string[] = [
  "要不然",
  "不如說",
  "除此之外",
  "另一方面",
  "不但",
  "而且",
  "雖然",
  "但是",
  "可是",
  "不過",
  "因為",
  "所以",
  "因此",
  "於是",
  "結果",
  "如果",
  "的話",
  "只要",
  "不管",
  "無論",
  "還是",
  "或者",
  "然後",
  "接著",
  "此外",
  "另外",
  "其實",
  "畢竟",
  "反正",
  "乾脆",
  "否則",
  "否則的話",
  "就算",
  "即使",
  "既然",
  "與其",
  "寧可",
  "一邊",
  "一方面",
  "先",
  "再",
  "就",
  "才",
  "卻",
  "並",
  "也",
];

const DISTRACTOR_POOL = CONNECTOR_LEXICON.filter((c) => c.length >= 2);

export type ConnectorHit = {
  connector: string;
  distractors: string[];
};

export function findConnectorInSentence(sentence: string): ConnectorHit | null {
  const text = sentence.trim();
  if (!text) return null;

  const sorted = [...CONNECTOR_LEXICON].sort((a, b) => b.length - a.length);
  for (const connector of sorted) {
    if (connector.length < 2) continue;
    if (!text.includes(connector)) continue;
    // 単語そのものだけの文は除外
    if (text.replace(/[。？！，、．\s]/g, "") === connector) continue;

    const distractors = shuffle(
      DISTRACTOR_POOL.filter((c) => c !== connector && !text.includes(c))
    ).slice(0, 3);

    if (distractors.length < 2) continue;

    return { connector, distractors };
  }
  return null;
}

export type BlankDrillKind = "connector" | "vocab";

export type BlankDrillSetup = {
  kind: BlankDrillKind;
  blank: string;
  choices: string[];
};

/** Step2: つなぎ語を優先。無い文だけ従来の語彙穴埋めにフォールバック */
export function buildBlankDrillSetup(card: NormalizedStudyCard): BlankDrillSetup {
  const hit = findConnectorInSentence(card.sentence);
  if (hit) {
    return {
      kind: "connector",
      blank: hit.connector,
      choices: shuffle([hit.connector, ...hit.distractors]),
    };
  }

  return {
    kind: "vocab",
    blank: card.targetWord,
    choices: shuffle([card.targetWord, ...card.distractors]),
  };
}

const CONNECTOR_SET = new Set(CONNECTOR_LEXICON);

function stripLightPunctuation(text: string): string {
  return text.replace(/[「」『』。？！，、：；,.!?;:\s]/g, "");
}

/**
 * 骨組み発話用キーワード（内容語中心、つなぎ語は除外）
 */
export function extractSkeletonKeywords(card: NormalizedStudyCard): string[] {
  const out: string[] = [];
  const push = (raw: string) => {
    const t = stripLightPunctuation(raw);
    if (!t || t.length < 2) return;
    if (CONNECTOR_SET.has(t)) return;
    if (out.includes(t)) return;
    out.push(t);
  };

  push(card.targetWord);

  for (const chunk of card.chunks) {
    // チャンク内のつなぎ語を落として残りを候補に
    let rest = chunk;
    for (const c of [...CONNECTOR_LEXICON].sort((a, b) => b.length - a.length)) {
      rest = rest.split(c).join(" ");
    }
    for (const part of rest.split(/\s+/)) {
      push(part);
    }
    if (out.length >= 4) break;
  }

  return out.slice(0, 3);
}
