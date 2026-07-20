/** 実践シチュエーション（TOCFL Band 代替） */
export type PracticeCategory = "survival" | "business" | "media" | "deep_talk";

export interface PracticeCategoryMeta {
  id: PracticeCategory;
  labelJa: string;
  labelZh: string;
  descriptionJa: string;
  badgeClass: string;
}

export const PRACTICE_CATEGORIES: readonly PracticeCategoryMeta[] = [
  {
    id: "survival",
    labelJa: "生活トラブル・手続き",
    labelZh: "生活 Survival",
    descriptionJa: "買い物、交通、健保、契約、近所トラブルなど「台湾で暮らす」場面",
    badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  {
    id: "business",
    labelJa: "職場・交渉",
    labelZh: "職場 Business",
    descriptionJa: "会議、メール、同僚・上司とのやりとり、申請・交渉",
    badgeClass: "bg-blue-50 text-blue-800 border-blue-200",
  },
  {
    id: "media",
    labelJa: "広告・説明書・ニュース",
    labelZh: "メディア Media",
    descriptionJa: "報道、政策、商品説明、社会トピックの読解・要約",
    badgeClass: "bg-amber-50 text-amber-900 border-amber-200",
  },
  {
    id: "deep_talk",
    labelJa: "感情・価値観の対話",
    labelZh: "深い対話 Deep Talk",
    descriptionJa: "人間関係、価値観、人生の選択、心理・文化の話",
    badgeClass: "bg-violet-50 text-violet-800 border-violet-200",
  },
] as const;

export function getPracticeCategoryMeta(id: PracticeCategory): PracticeCategoryMeta {
  return PRACTICE_CATEGORIES.find((c) => c.id === id) ?? PRACTICE_CATEGORIES[0]!;
}
