import {
  INTERVIEW_THEMES,
  type InterviewTheme,
  type InterviewThemeId,
} from "@/data/interviewThemes";
import type { PracticeCategory } from "@/types/practiceCategory";

export type QuickResponseItem = {
  id: string;
  themeId: InterviewThemeId;
  category: PracticeCategory;
  /** 日本語の場面・言いたいこと（answerZh の対訳であること） */
  promptJa: string;
  answerZh: string;
  answerPinyin: string;
};

type CuratedPair = {
  promptJa: string;
  answerZh: string;
  answerPinyin: string;
};

const CURATED: Record<Exclude<InterviewThemeId, "custom">, CuratedPair[]> = {
  shopping: [
    {
      promptJa: "店員に、少し見ていいか聞きたい",
      answerZh: "請問，我可以看一下嗎？",
      answerPinyin: "Qǐngwèn, wǒ kěyǐ kàn yíxià ma?",
    },
    {
      promptJa: "高いので、別の商品も見たいと伝えたい",
      answerZh: "這個有點貴，可以看別的嗎？",
      answerPinyin: "Zhège yǒudiǎn guì, kěyǐ kàn bié de ma?",
    },
    {
      promptJa: "レシートはいらないと伝えたい",
      answerZh: "不用發票，謝謝。",
      answerPinyin: "Búyòng fāpiào, xièxie.",
    },
    {
      promptJa: "試着していいか聞きたい",
      answerZh: "這件可以試穿嗎？",
      answerPinyin: "Zhè jiàn kěyǐ shìchuān ma?",
    },
    {
      promptJa: "袋に入れてもらいたい",
      answerZh: "請幫我裝袋，謝謝。",
      answerPinyin: "Qǐng bāng wǒ zhuāng dài, xièxie.",
    },
    {
      promptJa: "この商品を返品したい",
      answerZh: "這個我想退貨。",
      answerPinyin: "Zhège wǒ xiǎng tuìhuò.",
    },
  ],
  dining: [
    {
      promptJa: "持ち帰りにしたいと伝えたい",
      answerZh: "我要外帶，謝謝。",
      answerPinyin: "Wǒ yào wàidài, xièxie.",
    },
    {
      promptJa: "辛さ控えめをお願いしたい",
      answerZh: "請不要太辣。",
      answerPinyin: "Qǐng bú yào tài là.",
    },
    {
      promptJa: "会計をお願いしたい",
      answerZh: "麻煩結帳，謝謝。",
      answerPinyin: "Máfan jiézhàng, xièxie.",
    },
    {
      promptJa: "おすすめを聞きたい",
      answerZh: "有什麼招牌菜可以推薦嗎？",
      answerPinyin: "Yǒu shénme zhāopái cài kěyǐ tuījiàn ma?",
    },
    {
      promptJa: "水をもらえますかと聞きたい",
      answerZh: "可以給我一杯水嗎？",
      answerPinyin: "Kěyǐ gěi wǒ yì bēi shuǐ ma?",
    },
    {
      promptJa: "アレルギーがあるので確認したい",
      answerZh: "請問這道菜有花生嗎？我對花生過敏。",
      answerPinyin: "Qǐngwèn zhè dào cài yǒu huāshēng ma? Wǒ duì huāshēng guòmǐn.",
    },
  ],
  transport: [
    {
      promptJa: "次の駅で降ると伝えたい",
      answerZh: "我下一站要下車。",
      answerPinyin: "Wǒ xià yí zhàn yào xiàchē.",
    },
    {
      promptJa: "このバスは駅に行くか聞きたい",
      answerZh: "這班公車有到火車站嗎？",
      answerPinyin: "Zhè bān gōngchē yǒu dào huǒchēzhàn ma?",
    },
    {
      promptJa: "道に迷ったので助けてほしい",
      answerZh: "不好意思，我迷路了，捷運站怎麼走？",
      answerPinyin: "Bù hǎoyìsi, wǒ mílù le, jiéyùn zhàn zěnme zǒu?",
    },
    {
      promptJa: "悠遊卡にチャージしたい",
      answerZh: "請問這裡可以加值悠遊卡嗎？",
      answerPinyin: "Qǐngwèn zhèlǐ kěyǐ jiāzhí Yōuyóukǎ ma?",
    },
    {
      promptJa: "タクシーで台北駅まで行きたい",
      answerZh: "請載我到台北車站。",
      answerPinyin: "Qǐng zài wǒ dào Táiběi Chēzhàn.",
    },
  ],
  housing: [
    {
      promptJa: "家賃の振込先を確認したい",
      answerZh: "請問房租要匯到哪個帳號？",
      answerPinyin: "Qǐngwèn fángzū yào huì dào nǎge zhànghào?",
    },
    {
      promptJa: "水漏れを修理してほしい",
      answerZh: "家裡漏水，可以請人來修嗎？",
      answerPinyin: "Jiālǐ lòushuǐ, kěyǐ qǐng rén lái xiū ma?",
    },
    {
      promptJa: "退去日を相談したい",
      answerZh: "我想跟你討論退租的日期。",
      answerPinyin: "Wǒ xiǎng gēn nǐ tǎolùn tuìzū de rìqī.",
    },
    {
      promptJa: "エアコンが動かないと伝えたい",
      answerZh: "冷氣壞了，可以幫忙看一下嗎？",
      answerPinyin: "Lěngqì huài le, kěyǐ bāngmáng kàn yíxià ma?",
    },
  ],
  hospital: [
    {
      promptJa: "喉が痛いと伝えたい",
      answerZh: "我喉嚨很痛，想掛號。",
      answerPinyin: "Wǒ hóulóng hěn tòng, xiǎng guàhào.",
    },
    {
      promptJa: "薬の飲み方を確認したい",
      answerZh: "這個藥一天要吃幾次？",
      answerPinyin: "Zhège yào yì tiān yào chī jǐ cì?",
    },
    {
      promptJa: "予約を取りたい",
      answerZh: "請問可以預約明天的門診嗎？",
      answerPinyin: "Qǐngwèn kěyǐ yùyuē míngtiān de ménzhěn ma?",
    },
    {
      promptJa: "健保カードを使いたいと伝えたい",
      answerZh: "我有健保卡，可以刷卡嗎？",
      answerPinyin: "Wǒ yǒu jiànbǎo kǎ, kěyǐ shuākǎ ma?",
    },
  ],
  government: [
    {
      promptJa: "必要な書類を確認したい",
      answerZh: "請問要帶哪些資料？",
      answerPinyin: "Qǐngwèn yào dài nǎxiē zīliào?",
    },
    {
      promptJa: "申請の進捗を聞きたい",
      answerZh: "我想問一下申請進度。",
      answerPinyin: "Wǒ xiǎng wèn yíxià shēnqǐng jìndù.",
    },
    {
      promptJa: "窓口はどこか聞きたい",
      answerZh: "請問這個櫃台在哪裡？",
      answerPinyin: "Qǐngwèn zhège guìtái zài nǎlǐ?",
    },
    {
      promptJa: "番号札を取りたい",
      answerZh: "請問在哪裡抽號碼牌？",
      answerPinyin: "Qǐngwèn zài nǎlǐ chōu hàomǎ pái?",
    },
  ],
  neighbors: [
    {
      promptJa: "夜中の騒音を静かにしてもらいたい",
      answerZh: "不好意思，晚上可以小聲一點嗎？",
      answerPinyin: "Bù hǎoyìsi, wǎnshàng kěyǐ xiǎoshēng yìdiǎn ma?",
    },
    {
      promptJa: "配達物を預かってもらいたい",
      answerZh: "如果不在，可以請你幫我收包裹嗎？",
      answerPinyin: "Rúguǒ bù zài, kěyǐ qǐng nǐ bāng wǒ shōu bāoguǒ ma?",
    },
    {
      promptJa: "共用部の使い方を確認したい",
      answerZh: "請問資源回收要放在哪裡？",
      answerPinyin: "Qǐngwèn zīyuán huíshōu yào fàng zài nǎlǐ?",
    },
  ],
  meeting: [
    {
      promptJa: "進捗が遅れていると報告したい",
      answerZh: "這個案子進度有點慢，我再跟進。",
      answerPinyin: "Zhège ànzi jìndù yǒudiǎn màn, wǒ zài gēnjìn.",
    },
    {
      promptJa: "もう少し時間をもらいたい",
      answerZh: "可以再給我一點時間嗎？",
      answerPinyin: "Kěyǐ zài gěi wǒ yìdiǎn shíjiān ma?",
    },
    {
      promptJa: "要点を確認したい",
      answerZh: "我先確認一下重點。",
      answerPinyin: "Wǒ xiān quèrèn yíxià zhòngdiǎn.",
    },
    {
      promptJa: "会議を始めたい",
      answerZh: "那我們開始開會。",
      answerPinyin: "Nà wǒmen kāishǐ kāihuì.",
    },
  ],
  email: [
    {
      promptJa: "返信が遅れたことを謝りたい",
      answerZh: "抱歉回覆晚了。",
      answerPinyin: "Bàoqiàn huífù wǎn le.",
    },
    {
      promptJa: "資料を添付したと伝えたい",
      answerZh: "檔案我已經附在信件裡。",
      answerPinyin: "Dǎng'àn wǒ yǐjīng fù zài xìnjiàn lǐ.",
    },
    {
      promptJa: "会議の日程を変えたい",
      answerZh: "會議時間可以改一下嗎？",
      answerPinyin: "Huìyì shíjiān kěyǐ gǎi yíxià ma?",
    },
  ],
  colleagues: [
    {
      promptJa: "手伝ってほしいとお願いしたい",
      answerZh: "可以請你幫我一下嗎？",
      answerPinyin: "Kěyǐ qǐng nǐ bāng wǒ yíxià ma?",
    },
    {
      promptJa: "今日は早めに失礼したい",
      answerZh: "我今天想早點離開。",
      answerPinyin: "Wǒ jīntiān xiǎng zǎodiǎn líkāi.",
    },
    {
      promptJa: "相談したいことがあると切り出したい",
      answerZh: "我有一件事想跟你討論。",
      answerPinyin: "Wǒ yǒu yí jiàn shì xiǎng gēn nǐ tǎolùn.",
    },
  ],
  negotiation: [
    {
      promptJa: "条件を少し下げてほしい",
      answerZh: "價格可以再便宜一點嗎？",
      answerPinyin: "Jiàgé kěyǐ zài piányi yìdiǎn ma?",
    },
    {
      promptJa: "締め切りを延ばしてほしい",
      answerZh: "截止日期可以延後嗎？",
      answerPinyin: "Jiézhǐ rìqī kěyǐ yánhòu ma?",
    },
    {
      promptJa: "見積もりを再確認したい",
      answerZh: "我想再確認一次報價。",
      answerPinyin: "Wǒ xiǎng zài quèrèn yí cì bàojià.",
    },
  ],
  interview: [
    {
      promptJa: "短く自己紹介したい",
      answerZh: "你好，我是從日本來的，目前在學中文。",
      answerPinyin: "Nǐ hǎo, wǒ shì cóng Rìběn lái de, mùqián zài xué Zhōngwén.",
    },
    {
      promptJa: "前職の経験を一言で伝えたい",
      answerZh: "我以前在日本做過類似的工作。",
      answerPinyin: "Wǒ yǐqián zài Rìběn zuòguo lèisì de gōngzuò.",
    },
    {
      promptJa: "入社可能日を伝えたい",
      answerZh: "如果錄取，我下個月可以上班。",
      answerPinyin: "Rúguǒ lùqǔ, wǒ xià ge yuè kěyǐ shàngbān.",
    },
  ],
  friends: [
    {
      promptJa: "週末に食事に誘いたい",
      answerZh: "這週末要不要一起吃飯？",
      answerPinyin: "Zhè zhōumò yào bu yào yìqǐ chīfàn?",
    },
    {
      promptJa: "予定をキャンセルしたい",
      answerZh: "不好意思，今天沒辦法去。",
      answerPinyin: "Bù hǎoyìsi, jīntiān méi bànfǎ qù.",
    },
    {
      promptJa: "おすすめの店を聞きたい",
      answerZh: "這附近有什麼好吃的店嗎？",
      answerPinyin: "Zhè fùjìn yǒu shénme hǎochī de diàn ma?",
    },
  ],
  feelings: [
    {
      promptJa: "少し不安だと伝えたい",
      answerZh: "我有點擔心。",
      answerPinyin: "Wǒ yǒudiǎn dānxīn.",
    },
    {
      promptJa: "助けてくれてありがとうと言いたい",
      answerZh: "謝謝你幫我，我真的很感激。",
      answerPinyin: "Xièxie nǐ bāng wǒ, wǒ zhēnde hěn gǎnjī.",
    },
    {
      promptJa: "誤解があったと伝えたい",
      answerZh: "我想我們可能有誤會。",
      answerPinyin: "Wǒ xiǎng wǒmen kěnéng yǒu wùhuì.",
    },
  ],
  values: [
    {
      promptJa: "仕事と生活のバランスを大事にしたいと伝えたい",
      answerZh: "對我來說，工作和生活的平衡很重要。",
      answerPinyin: "Duì wǒ lái shuō, gōngzuò hé shēnghuó de pínghéng hěn zhòngyào.",
    },
    {
      promptJa: "家族を優先したいと伝えたい",
      answerZh: "我希望可以多陪家人。",
      answerPinyin: "Wǒ xīwàng kěyǐ duō péi jiārén.",
    },
    {
      promptJa: "将来の希望を短く言いたい",
      answerZh: "我以後想在台灣長期生活。",
      answerPinyin: "Wǒ yǐhòu xiǎng zài Táiwān chángqī shēnghuó.",
    },
  ],
  news: [
    {
      promptJa: "そのニュースについてどう思うか聞きたい",
      answerZh: "你對這個消息有什麼看法？",
      answerPinyin: "Nǐ duì zhège xiāoxi yǒu shénme kànfǎ?",
    },
    {
      promptJa: "自分の感想を短く言いたい",
      answerZh: "我覺得這件事滿重要的。",
      answerPinyin: "Wǒ juéde zhè jiàn shì mǎn zhòngyào de.",
    },
    {
      promptJa: "よく分からないと正直に伝えたい",
      answerZh: "這部分我還不太清楚。",
      answerPinyin: "Zhè bùfen wǒ hái bú tài qīngchǔ.",
    },
  ],
  products: [
    {
      promptJa: "使い方を簡単に説明してほしい",
      answerZh: "可以請你說明一下怎麼用嗎？",
      answerPinyin: "Kěyǐ qǐng nǐ shuōmíng yíxià zěnme yòng ma?",
    },
    {
      promptJa: "二つを比べておすすめを聞きたい",
      answerZh: "這兩個差在哪裡？你會建議哪一個？",
      answerPinyin: "Zhè liǎng ge chà zài nǎlǐ? Nǐ huì jiànyì nǎ yí ge?",
    },
    {
      promptJa: "保証期間を確認したい",
      answerZh: "保固是多久？",
      answerPinyin: "Bǎogù shì duō jiǔ?",
    },
  ],
  phone: [
    {
      promptJa: "予約時間を変更したい",
      answerZh: "我想改預約時間。",
      answerPinyin: "Wǒ xiǎng gǎi yùyuē shíjiān.",
    },
    {
      promptJa: "配達が遅いと伝えたい",
      answerZh: "包裹怎麼還沒送到？",
      answerPinyin: "Bāoguǒ zěnme hái méi sòng dào?",
    },
    {
      promptJa: "担当者に代わってほしい",
      answerZh: "可以請承辦人接電話嗎？",
      answerPinyin: "Kěyǐ qǐng chéngbàn rén jiē diànhuà ma?",
    },
  ],
};

function themeCategory(themeId: Exclude<InterviewThemeId, "custom">): PracticeCategory {
  return INTERVIEW_THEMES.find((t) => t.id === themeId)?.group ?? "survival";
}

function buildCuratedPlaylist(): QuickResponseItem[] {
  const items: QuickResponseItem[] = [];
  for (const theme of INTERVIEW_THEMES) {
    if (theme.id === "custom") continue;
    const themeId = theme.id;
    const pairs = CURATED[themeId];
    pairs.forEach((pair, n) => {
      items.push({
        id: `qr-${themeId}-${n + 1}`,
        themeId,
        category: themeCategory(themeId),
        promptJa: pair.promptJa.trim(),
        answerZh: pair.answerZh.trim(),
        answerPinyin: pair.answerPinyin.trim(),
      });
    });
  }
  return items;
}

let cached: QuickResponseItem[] | null = null;

export function getQuickResponses(): QuickResponseItem[] {
  if (!cached) {
    cached = buildCuratedPlaylist();
  }
  return cached;
}

export function getQuickResponsesByTheme(themeId: InterviewThemeId): QuickResponseItem[] {
  return getQuickResponses().filter((item) => item.themeId === themeId);
}

export function getQuickResponseThemes(): InterviewTheme[] {
  return INTERVIEW_THEMES.filter((t) => t.id !== "custom");
}
