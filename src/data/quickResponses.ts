import { getDrillCards } from "@/data/drillPool";
import {
  INTERVIEW_THEMES,
  type InterviewTheme,
  type InterviewThemeId,
} from "@/data/interviewThemes";
import { inferPracticeCategory } from "@/utils/inferPracticeCategory";
import type { PracticeCategory } from "@/types/practiceCategory";

export type QuickResponseItem = {
  id: string;
  themeId: InterviewThemeId;
  category: PracticeCategory;
  /** 日本語の場面・言いたいこと */
  promptJa: string;
  answerZh: string;
  answerPinyin: string;
};

const THEME_PROMPTS: Partial<Record<InterviewThemeId, string[]>> = {
  shopping: [
    "店員に『少し見ていいですか』と聞きたい",
    "高いので別の商品を見たいと言いたい",
    "レシートはいらないと伝えたい",
  ],
  dining: [
    "外帯（持ち帰り）にしたいと伝えたい",
    "辛さ控えめをお願いしたい",
    "会計をお願いしたい",
  ],
  transport: [
    "次の駅で降りますと伝えたい",
    "このバスは駅に行きますかと聞きたい",
    "道に迷ったので助けてほしい",
  ],
  housing: [
    "家賃の振込先を確認したい",
    "水漏れを修理してほしいと伝えたい",
    "退去日を相談したい",
  ],
  hospital: [
    "喉が痛いと症状を伝えたい",
    "薬の飲み方を確認したい",
    "予約を取りたい",
  ],
  government: [
    "必要な書類を確認したい",
    "申請の進捗を聞きたい",
    "窓口はどこか聞きたい",
  ],
  neighbors: [
    "夜中の騒音を静かにしてもらいたい",
    "配達物を預かってもらいたい",
    "共用部の使い方を確認したい",
  ],
  meeting: [
    "進捗が遅れていると報告したい",
    "もう少し時間をもらいたい",
    "要点を確認したい",
  ],
  email: [
    "返信が遅れたことを謝りたい",
    "資料を添付したと伝えたい",
    "会議の日程を変えたい",
  ],
  colleagues: [
    "手伝ってほしいとお願いしたい",
    "今日は早めに失礼したい",
    "相談したいことがあると切り出したい",
  ],
  negotiation: [
    "条件を少し下げてほしい",
    "締め切りを延ばしてほしい",
    "見積もりを再確認したい",
  ],
  interview: [
    "自己紹介を短くしたい",
    "前職の経験を一言で伝えたい",
    "入社可能日を伝えたい",
  ],
  friends: [
    "週末に食事に誘いたい",
    "予定をキャンセルしたい",
    "おすすめの店を聞きたい",
  ],
  feelings: [
    "少し不安だと伝えたい",
    "助けてくれてありがとうと言いたい",
    "誤解があったと伝えたい",
  ],
  values: [
    "仕事と生活のバランスを大事にしたいと伝えたい",
    "家族を優先したいと伝えたい",
    "将来の希望を短く言いたい",
  ],
  news: [
    "そのニュースについてどう思うか聞きたい",
    "自分の感想を短く言いたい",
    "よく分からないと正直に伝えたい",
  ],
  products: [
    "使い方を簡単に説明してほしい",
    "二つを比べておすすめを聞きたい",
    "保証期間を確認したい",
  ],
  phone: [
    "予約時間を変更したい",
    "配達が遅いと伝えたい",
    "担当者に代わってほしい",
  ],
};

function hanLength(text: string): number {
  return (text.match(/\p{Script=Han}/gu) ?? []).length;
}

function buildFromDrill(): QuickResponseItem[] {
  const cards = getDrillCards("all", { shuffle: false });
  const themes = INTERVIEW_THEMES.filter((t) => t.id !== "custom");
  const byCategory = new Map<PracticeCategory, typeof cards>();

  for (const card of cards) {
    const cat = inferPracticeCategory(card);
    const len = hanLength(card.sentence);
    if (len < 6 || len > 36) continue;
    if (!card.translation.trim()) continue;
    const list = byCategory.get(cat) ?? [];
    list.push(card);
    byCategory.set(cat, list);
  }

  const items: QuickResponseItem[] = [];
  let i = 0;

  for (const theme of themes) {
    const pool = byCategory.get(theme.group) ?? [];
    const prompts = THEME_PROMPTS[theme.id] ?? [theme.descriptionJa];
    const take = Math.min(6, Math.max(prompts.length, 3));

    for (let n = 0; n < take; n++) {
      const card = pool[(i + n) % Math.max(pool.length, 1)];
      if (!card) continue;
      const promptJa =
        prompts[n % prompts.length] ??
        `${theme.labelJa}の場面で、こう伝えたい：${card.translation}`;
      items.push({
        id: `qr-${theme.id}-${card.id}-${n}`,
        themeId: theme.id,
        category: theme.group,
        promptJa,
        answerZh: card.sentence,
        answerPinyin: card.pinyin,
      });
    }
    i += take;
  }

  return items;
}

let cached: QuickResponseItem[] | null = null;

export function getQuickResponses(): QuickResponseItem[] {
  if (!cached) cached = buildFromDrill();
  return cached;
}

export function getQuickResponsesByTheme(themeId: InterviewThemeId): QuickResponseItem[] {
  return getQuickResponses().filter((item) => item.themeId === themeId);
}

export function getQuickResponseThemes(): InterviewTheme[] {
  return INTERVIEW_THEMES.filter((t) => t.id !== "custom");
}
