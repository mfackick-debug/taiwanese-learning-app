import type { PracticeCategory } from "@/types/practiceCategory";

export type InterviewThemeId =
  | "shopping"
  | "dining"
  | "transport"
  | "housing"
  | "hospital"
  | "government"
  | "neighbors"
  | "meeting"
  | "email"
  | "colleagues"
  | "negotiation"
  | "interview"
  | "friends"
  | "feelings"
  | "values"
  | "news"
  | "products"
  | "phone"
  | "custom";

export interface InterviewTheme {
  id: InterviewThemeId;
  group: PracticeCategory;
  labelJa: string;
  labelZh: string;
  descriptionJa: string;
}

export const INTERVIEW_THEME_GROUPS: readonly {
  id: PracticeCategory;
  labelJa: string;
}[] = [
  { id: "survival", labelJa: "生活" },
  { id: "business", labelJa: "職場" },
  { id: "deep_talk", labelJa: "会話" },
  { id: "media", labelJa: "情報" },
] as const;

export const INTERVIEW_THEMES: readonly InterviewTheme[] = [
  { id: "shopping", group: "survival", labelJa: "買い物・支払い", labelZh: "購物付款", descriptionJa: "値段、支払い、返品、市場やコンビニ" },
  { id: "dining", group: "survival", labelJa: "飲食店", labelZh: "餐廳用餐", descriptionJa: "注文、アレルギー、割り勘、予約" },
  { id: "transport", group: "survival", labelJa: "交通・移動", labelZh: "交通移動", descriptionJa: "捷運、バス、タクシー、道聞き" },
  { id: "housing", group: "survival", labelJa: "住居・契約", labelZh: "租屋合約", descriptionJa: "内見、家賃、修理、退去" },
  { id: "hospital", group: "survival", labelJa: "病院・健保", labelZh: "醫院健保", descriptionJa: "予約、症状、薬、保険" },
  { id: "government", group: "survival", labelJa: "役所・手続き", labelZh: "公家機關", descriptionJa: "ARC、戸籍、銀行、申請書類" },
  { id: "neighbors", group: "survival", labelJa: "近所・トラブル", labelZh: "鄰居糾紛", descriptionJa: "騒音、配達、共用スペース" },
  { id: "meeting", group: "business", labelJa: "会議・報告", labelZh: "會議報告", descriptionJa: "進捗、延期、確認、まとめ" },
  { id: "email", group: "business", labelJa: "メール・チャット", labelZh: "信件訊息", descriptionJa: "依頼、お礼、リマインド" },
  { id: "colleagues", group: "business", labelJa: "上司・同僚", labelZh: "上司同事", descriptionJa: "相談、断り、雑談" },
  { id: "negotiation", group: "business", labelJa: "申請・交渉", labelZh: "申請談判", descriptionJa: "条件、締め切り、値引き" },
  { id: "interview", group: "business", labelJa: "面接・転職", labelZh: "面試轉職", descriptionJa: "自己紹介、経験、希望条件" },
  { id: "friends", group: "deep_talk", labelJa: "友人・誘い", labelZh: "朋友邀約", descriptionJa: "予定、キャンセル、おすすめ" },
  { id: "feelings", group: "deep_talk", labelJa: "感情・人間関係", labelZh: "情感關係", descriptionJa: "不安、感謝、誤解、距離感" },
  { id: "values", group: "deep_talk", labelJa: "価値観・人生", labelZh: "價值觀", descriptionJa: "働き方、家族、将来" },
  { id: "news", group: "media", labelJa: "ニュース・社会", labelZh: "新聞社會", descriptionJa: "ニュースの感想、社会の話題" },
  { id: "products", group: "media", labelJa: "商品・説明書", labelZh: "商品說明", descriptionJa: "スペック、使い方、比較" },
  { id: "phone", group: "media", labelJa: "電話・問い合わせ", labelZh: "電話洽詢", descriptionJa: "予約変更、苦情、宅配" },
] as const;

export function getInterviewTheme(id: InterviewThemeId): InterviewTheme | undefined {
  return INTERVIEW_THEMES.find((theme) => theme.id === id);
}

export function getThemesByGroup(group: PracticeCategory): InterviewTheme[] {
  return INTERVIEW_THEMES.filter((theme) => theme.group === group);
}

export function resolveInterviewThemeLabel(
  themeId: InterviewThemeId,
  customTheme?: string,
): string {
  if (themeId === "custom") {
    const custom = customTheme?.trim();
    return custom ? `自由テーマ：${custom}` : "自由テーマ";
  }
  return getInterviewTheme(themeId)?.labelJa ?? themeId;
}

export const THEME_FALLBACK_QUESTIONS: Record<string, { question: string; pinyin: string }> = {
  shopping: {
    question: "最近買東西的時候，有遇過什麼不方便的事嗎？你後來怎麼處理？",
    pinyin: "zuì jìn mǎi dōng xi de shí hou, yǒu yù guò shén me bù fāng biàn de shì ma",
  },
  dining: {
    question: "你上次去餐廳吃飯，點餐或結帳有沒有讓你覺得困擾的地方？",
    pinyin: "nǐ shàng cì qù cān tīng chī fàn, diǎn cān huò jié zhàng yǒu méi yǒu kùn rǎo",
  },
  transport: {
    question: "最近搭捷運、公車或計程車，有沒有迷路或趕不上的經驗？",
    pinyin: "zuì jìn dā jié yùn, gōng chē huò jì chéng chē, yǒu méi yǒu mí lù de jīng yàn",
  },
  housing: {
    question: "租屋或處理家裡的事情時，你最近有跟房東或管理員溝通過嗎？",
    pinyin: "zū wū de shí hou, nǐ zuì jìn yǒu gēn fáng dōng gōu tōngguò ma",
  },
  hospital: {
    question: "最近去醫院或藥局的時候，你是怎麼說明自己的狀況的？",
    pinyin: "zuì jìn qù yī yuàn de shí hou, nǐ shì zěn me shuō míng zì jǐ de zhuàng kuàng",
  },
  government: {
    question: "辦證件或去銀行、戶政事務所的時候，你覺得哪一步最麻煩？",
    pinyin: "bàn zhèng jiàn de shí hou, nǐ jué de nǎ yī bù zuì má fan",
  },
  neighbors: {
    question: "跟鄰居或大樓管理員之間，最近有沒有需要溝通的小事？",
    pinyin: "gēn lín jū zhī jiān, zuì jìn yǒu méi yǒu xū yào gōu tōng de xiǎo shì",
  },
  meeting: {
    question: "最近開會或報告進度的時候，你有沒有需要說明延期或確認的事情？",
    pinyin: "zuì jìn kāi huì de shí hou, nǐ yǒu méi yǒu xū yào shuō míng de shì",
  },
  email: {
    question: "你最近寫訊息或 email 給同事時，最常卡在哪一句？",
    pinyin: "nǐ zuì jìn xiě xùn xī gěi tóng shì shí, zuì cháng kǎ zài nǎ yī jù",
  },
  colleagues: {
    question: "跟上司或同事商量事情時，你最近有沒有很難說出口的請求？",
    pinyin: "gēn shàng sī huò tóng shì shāng liang shí, yǒu méi yǒu hěn nán shuō de qǐng qiú",
  },
  negotiation: {
    question: "申請或談條件的時候，你最近有沒有需要爭取時間或價格？",
    pinyin: "shēn qǐng huò tán tiáo jiàn de shí hou, nǐ yǒu méi yǒu xū yào zhēng qǔ",
  },
  interview: {
    question: "如果現在要介紹自己的工作經驗，你會先講哪一段？",
    pinyin: "rú guǒ xiàn zài yào jiè shào zì jǐ de jīng yàn, nǐ huì xiān jiǎng nǎ yī duàn",
  },
  friends: {
    question: "最近想約朋友出去，但時間對不上的時候，你通常怎麼說？",
    pinyin: "zuì jìn xiǎng yuē péng yǒu, shí jiān bù duì de shí hou, nǐ zěn me shuō",
  },
  feelings: {
    question: "最近有沒有一件讓你有點在意、又不知道怎麼開口的事？",
    pinyin: "zuì jìn yǒu méi yǒu yī jiàn ràng nǐ zài yì, yòu bù zhī dào zěn me kāi kǒu de shì",
  },
  values: {
    question: "關於工作或生活的選擇，你最近最常想到的是什麼？",
    pinyin: "guān yú gōng zuò huò shēng huó de xuǎn zé, nǐ zuì jìn zuì cháng xiǎng dào shén me",
  },
  news: {
    question: "最近看到的新聞裡，有沒有讓你想跟朋友討論的話題？",
    pinyin: "zuì jìn kàn dào de xīn wén lǐ, yǒu méi yǒu xiǎng tǎo lùn de huà tí",
  },
  products: {
    question: "你最近買東西或看說明書的時候，有沒有看不懂、想再問一次的地方？",
    pinyin: "nǐ zuì jìn kàn shuō míng shū de shí hou, yǒu méi yǒu kàn bù dǒng de dì fang",
  },
  phone: {
    question: "打電話改預約或問宅配的時候，你通常第一句會怎麼開始？",
    pinyin: "dǎ diàn huà gǎi yù yuē de shí hou, nǐ tōng cháng dì yī jù zěn me kāi shǐ",
  },
};

export function buildFallbackQuestion(
  themeId: string,
  themeLabelJa: string,
  customTheme?: string,
): { question: string; pinyin: string; hintJa: string } {
  const preset = themeId !== "custom" ? THEME_FALLBACK_QUESTIONS[themeId] : undefined;
  if (preset) {
    return {
      ...preset,
      hintJa: "自分の経験を、短くていいので繁体字で答えてください。",
    };
  }
  const topic = customTheme?.trim() || themeLabelJa;
  return {
    question: `關於「${topic}」，你最近有遇過什麼情況？可以說說當時你怎麼處理嗎？`,
    pinyin: "guān yú … nǐ zuì jìn yǒu yù guò shén me qíng kuàng",
    hintJa: "自分の経験を、短くていいので繁体字で答えてください。",
  };
}
