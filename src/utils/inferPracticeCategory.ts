import type { PracticeCategory } from "@/types/practiceCategory";
import type { NormalizedStudyCard, SentenceCardInput } from "@/types";

/** データファイルに明示指定がある場合（将来用） */
export type CategorySource = SentenceCardInput & { practiceCategory?: PracticeCategory };

const SCORE_KEYWORDS: Record<PracticeCategory, readonly string[]> = {
  survival: [
    "健保",
    "掛號",
    "診所",
    "退貨",
    "漏水",
    "房東",
    "契約",
    "捷運",
    "交通",
    "外帶",
    "市場",
    "修理",
    "鄰居",
    "邻居",
    "報警",
    "手續",
    "生活",
    "店員",
    "老板",
    "發票",
    "悠遊卡",
  ],
  business: [
    "公司",
    "會議",
    "同事",
    "主管",
    "客戶",
    "客户",
    "工作",
    "遠端",
    "簽證",
    "申請",
    "專案",
    "進度",
    "郵件",
    "合作",
    "談判",
    "職場",
    "面試",
    "報告",
    "效率",
  ],
  media: [
    "報導",
    "新聞",
    "輿論",
    "廣告",
    "政策",
    "經濟",
    "通膨",
    "復甦",
    "發展",
    "環境",
    "研究",
    "調查",
    "說明書",
    "數據",
    "統計",
    "媒體",
  ],
  deep_talk: [
    "感情",
    "壓抑",
    "期待",
    "選擇",
    "價值",
    "文化",
    "傳承",
    "關係",
    "糾葛",
    "領悟",
    "人生",
    "心理",
    "價值觀",
    "煩惱",
    "理解",
  ],
};

const SITUATION_MAP: Record<string, PracticeCategory> = {
  生活トラブル: "survival",
  "公的手続き・職場": "business",
  "店舗・サービス": "survival",
};

function scoreText(text: string): Record<PracticeCategory, number> {
  const scores: Record<PracticeCategory, number> = {
    survival: 0,
    business: 0,
    media: 0,
    deep_talk: 0,
  };
  for (const [cat, keywords] of Object.entries(SCORE_KEYWORDS) as [PracticeCategory, readonly string[]][]) {
    for (const kw of keywords) {
      if (text.includes(kw)) scores[cat] += 1;
    }
  }
  return scores;
}

/** カード内容から実践カテゴリを推定（明示 category があれば優先） */
export function inferPracticeCategory(
  card: NormalizedStudyCard,
  options?: { situation?: string; explicit?: PracticeCategory }
): PracticeCategory {
  if (options?.explicit) return options.explicit;

  if (options?.situation && SITUATION_MAP[options.situation]) {
    return SITUATION_MAP[options.situation]!;
  }

  const blob = [card.sentence, card.translation, card.grammarNote, card.targetWord].join("\n");
  const scores = scoreText(blob);

  // 成語・硬語は media / deep_talk に寄せやすい
  if (card.grammarNote.includes("成語") || card.grammarNote.includes("四字")) {
    scores.media += 1;
    scores.deep_talk += 1;
  }

  const ranked = (Object.entries(scores) as [PracticeCategory, number][]).sort((a, b) => b[1] - a[1]);
  const [top, second] = ranked;
  if (top && top[1] > 0) return top[0];
  if (second && second[1] > 0) return second[0];

  // フォールバック: 旧 band ヒント（内部のみ、UI非表示）
  if (card.sourceFormat === "examples") return "media";
  return "survival";
}
