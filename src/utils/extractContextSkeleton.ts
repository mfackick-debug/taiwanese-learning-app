import type { ContextBuilderItem, ContextBuilderOverrides, SkeletonSegment } from "@/types/contextBuilder";
import type { PracticeCategory } from "@/types/practiceCategory";
import type { NormalizedStudyCard, SentenceCardInput } from "@/types";
import { isExamplesFormat } from "@/utils/normalizeCard";

const CJK_RUN = /[\u4e00-\u9fff]+/g;

/**
 * 骨組み抽出ルール（AIプロンプト相当）
 * ─ 絶対条件: 四字熟語（成語）や硬すぎる書き言葉を骨組みの主役にしない
 * ─ 優先条件: 因為…所以 / 為了…導致 / 雖然…但是 等、口語で使い回せる接続パターン
 */
const PRACTICAL_CONNECTOR_PATTERNS: readonly {
  test: (s: string) => boolean;
  template: string;
  label: string;
}[] = [
  {
    test: (s) => /因為/.test(s) && /(所以|因此)/.test(s),
    template: "因為…，所以…",
    label: "因為…所以…",
  },
  {
    test: (s) => /為了/.test(s) && /(導致|使得|造成)/.test(s),
    template: "為了…，導致…",
    label: "為了…導致…",
  },
  {
    test: (s) => /雖然/.test(s) && /(但是|但|可是|卻)/.test(s),
    template: "雖然…，但是…",
    label: "雖然…但是…",
  },
  {
    test: (s) => /既然/.test(s) && /就/.test(s),
    template: "既然…，就…",
    label: "既然…就…",
  },
  {
    test: (s) => /如果/.test(s) && /(就|便|那麼)/.test(s),
    template: "如果…，就…",
    label: "如果…就…",
  },
  {
    test: (s) => /不但/.test(s) && /而且/.test(s),
    template: "不但…，而且…",
    label: "不但…而且…",
  },
  {
    test: (s) => /除非/.test(s) && /否則/.test(s),
    template: "除非…，否則…",
    label: "除非…否則…",
  },
];

const CONNECTOR_CHARS = new Set("的了在是有和與及而但所以因為如果雖然只要就也都還又再才已經會能要");

/** 成語・四字熟語・試験向け硬語 → 骨組みのターゲットにしない */
function isFormalOrChengyuTarget(card: NormalizedStudyCard): boolean {
  const { targetWord, grammarNote } = card;
  if (/成語|四字|TOCFL頻出成語/.test(grammarNote)) return true;
  if (/^[\u4e00-\u9fff]{4}$/.test(targetWord)) return true;
  const formalMarkers = ["斡旋", "灌輸", "猖獗", "破綻", "瀕臨", "匱乏", "無遠弗屆", "鍥而不捨"];
  if (formalMarkers.some((m) => targetWord.includes(m))) return true;
  return false;
}

function detectPracticalConnectorSkeleton(sentence: string): { template: string; label: string } | null {
  for (const p of PRACTICAL_CONNECTOR_PATTERNS) {
    if (p.test(sentence)) return { template: p.template, label: p.label };
  }
  return null;
}

function templateToSegments(template: string): SkeletonSegment[] {
  const parts = template.split("…");
  const segments: SkeletonSegment[] = [];
  parts.forEach((part, i) => {
    if (part) segments.push({ text: part, kind: "fixed" });
    if (i < parts.length - 1) segments.push({ text: "…", kind: "slot" });
  });
  return segments;
}

/** チャンク内の可変部分をスロット化（接続詞・助詞は fixed） */
function abstractChunk(chunk: string, targetWord: string, skipTargetHighlight: boolean): SkeletonSegment[] {
  if (!skipTargetHighlight && chunk.includes(targetWord)) {
    const parts = chunk.split(targetWord);
    const segments: SkeletonSegment[] = [];
    parts.forEach((part, i) => {
      if (part) segments.push({ text: part, kind: "fixed" });
      if (i < parts.length - 1) segments.push({ text: targetWord, kind: "target" });
    });
    return segments;
  }

  const segments: SkeletonSegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(CJK_RUN.source, "gu");

  while ((match = re.exec(chunk)) !== null) {
    const before = chunk.slice(lastIndex, match.index);
    if (before) segments.push({ text: before, kind: "fixed" });

    const word = match[0];
    const isConnector =
      word.length <= 2 && [...word].every((ch) => CONNECTOR_CHARS.has(ch));
    segments.push({
      text: isConnector ? word : "…",
      kind: isConnector ? "fixed" : "slot",
    });
    lastIndex = match.index + word.length;
  }

  const tail = chunk.slice(lastIndex);
  if (tail) segments.push({ text: tail, kind: "fixed" });

  return segments.length > 0 ? segments : [{ text: chunk, kind: "fixed" }];
}

const PROMPT_BANK: Record<PracticeCategory, readonly string[]> = {
  survival: [
    "この骨組みを使って、最近買った家電の不具合について店員に説明してください。",
    "この骨組みを使って、近所の騒音トラブルを管理室に伝えてください。",
    "この骨組みを使って、病院の受付で症状とこれまでの経過を説明してください。",
    "この骨組みを使って、房東に部屋の修理をお願いするメッセージを書いてください。",
  ],
  business: [
    "この骨組みを使って、同僚のミスを上司にやんわり伝えてください。",
    "この骨組みを使って、会議で自分の提案を短く説明してください。",
    "この骨組みを使って、クライアントに納期変更の理由をメールで伝えてください。",
    "この骨組みを使って、リモート会議で進捗と課題を報告してください。",
  ],
  media: [
    "この骨組みを使って、ニュース記事の要点を友人に説明してください。",
    "この骨組みを使って、商品パッケージの注意書きを要約してください。",
    "この骨組みを使って、最近の社会ニュースについて自分の意見を述べてください。",
    "この骨組みを使って、説明会で聞いた政策の変更点を伝えてください。",
  ],
  deep_talk: [
    "この骨組みを使って、最近モヤモヤしていることを信頼できる友人に打ち明けてください。",
    "この骨組みを使って、価値観の違いで悩んでいる状況を説明してください。",
    "この骨組みを使って、将来のキャリアについて親友に相談してください。",
    "この骨組みを使って、文化の違いで感じた違和感を言語化してください。",
  ],
};

function pickPrompt(category: PracticeCategory, seed: string): string {
  const bank = PROMPT_BANK[category];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash + seed.charCodeAt(i)) % bank.length;
  return bank[hash]!;
}

function buildPromptHintJa(
  card: NormalizedStudyCard,
  category: PracticeCategory,
  connectorLabel: string | undefined,
  overrides?: ContextBuilderOverrides
): string {
  if (overrides?.promptHintJa) return overrides.promptHintJa;

  const base = pickPrompt(category, card.id);
  if (connectorLabel) {
    return `${base}\n（ヒント：「${connectorLabel}」の口語パターンを使ってください）`;
  }
  return base;
}

function buildSkeletonFromChunks(
  card: NormalizedStudyCard,
  skipChengyuTarget: boolean,
  overrides?: ContextBuilderOverrides
): { skeletonText: string; segments: SkeletonSegment[]; connectorLabel?: string } {
  if (overrides?.skeletonTemplate) {
    return {
      skeletonText: overrides.skeletonTemplate,
      segments: templateToSegments(overrides.skeletonTemplate.replace(/…/g, "…")),
    };
  }

  const connector = detectPracticalConnectorSkeleton(card.sentence);
  if (connector) {
    return {
      skeletonText: connector.template,
      segments: templateToSegments(connector.template),
      connectorLabel: connector.label,
    };
  }

  const segments: SkeletonSegment[] = [];
  card.chunks.forEach((chunk, index) => {
    if (index > 0) segments.push({ text: "｜", kind: "fixed" });
    segments.push(...abstractChunk(chunk, card.targetWord, skipChengyuTarget));
  });

  const skeletonText = segments
    .map((s) => (s.kind === "target" ? `【${s.text}】` : s.kind === "slot" ? "…" : s.text))
    .join("");

  return { skeletonText, segments };
}

/** 例文カード + カテゴリ → Context Re-builder 用アイテム */
export function extractContextBuilderItem(
  card: NormalizedStudyCard,
  options?: {
    situation?: string;
    category: PracticeCategory;
    overrides?: ContextBuilderOverrides;
  }
): ContextBuilderItem {
  const skipChengyuTarget = isFormalOrChengyuTarget(card);
  const { skeletonText, segments, connectorLabel } = buildSkeletonFromChunks(
    card,
    skipChengyuTarget,
    options?.overrides
  );

  return {
    card,
    category: options!.category,
    situation: options?.situation,
    skeletonText,
    segments,
    connectorLabel,
    skipChengyuTarget,
    promptHintJa: buildPromptHintJa(card, options!.category, connectorLabel, options?.overrides),
    hasOverrides: Boolean(options?.overrides?.skeletonTemplate || options?.overrides?.promptHintJa),
  };
}

/** 生データから situation を取得（examples 形式） */
export function getSituationForCard(
  raw: SentenceCardInput,
  normalized: NormalizedStudyCard
): string | undefined {
  if (!isExamplesFormat(raw) || normalized.exampleIndex == null) return undefined;
  return raw.examples[normalized.exampleIndex]?.situation;
}

/** 抽出ルールの説明（UI / ドキュメント用） */
export const SKELETON_EXTRACTION_RULES = {
  exclude: "四字熟語（成語）・試験向け硬語は骨組みの主役にしない",
  prefer: "因為…所以 / 為了…導致 / 雖然…但是 等の口語接続パターンを優先",
} as const;
