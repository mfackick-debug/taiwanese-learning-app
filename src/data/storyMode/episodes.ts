import type { StoryEpisode } from "./types";
import { STORY_EPISODES_2_12 } from "./episodes2to12";

export const STORY_EPISODE_1: StoryEpisode = {
  episodeNumber: 1,
  title: "台北到着！ルームシェアの始まり",
  subtitle: "挨拶・自己紹介・共有スペース",
  synopsis: "隆志が台北に到着し、ルームメイトの阿倫と初対面。生活機能や捷運について説明を受ける。",
  cards: [
    {
      id: "STORY-001",
      band: "B" as const,
      speaker: "alen",
      targetWord: "歡迎",
      sentence: "阿倫笑著對隆志說：「歡迎來台北！我是你的室友阿倫，很高興認識你。」",
      pinyin:
        "ā lún xiào zhe duì lóng zhì shuō: 「huān yíng lái tái běi! wǒ shì nǐ de shì yǒu ā lún, hěn gāo xìng rèn shí nǐ.」",
      translation:
        "阿倫は笑顔で隆志に言った。「台北へようこそ！僕はルームメイトの阿倫だ。会えてうれしいよ。」",
      distractors: ["招待", "迎接", "謝謝"],
      grammarNote:
        "「歡迎（huān yíng）」は「歓迎する」。「歡迎來〜（〜へようこそ）」は初対面や到着の場面で使う定番表現です。",
      chunks: ["阿倫笑著對隆志說：", "「歡迎來台北！", "我是你的室友阿倫，", "很高興認識你。」"],
      hintText: "阿倫笑著對隆志說：",
    },
    {
      id: "STORY-002",
      band: "B" as const,
      speaker: "takashi",
      targetWord: "緊張",
      sentence: "隆志有點緊張地回應：「謝謝你！我是從日本來語言留學的隆志，請多多指教。」",
      pinyin:
        "lóng zhì yǒu diǎn jǐn zhāng de huí yìng: 「xiè xie nǐ! wǒ shì cóng rì běn lái yǔ yán liú xué de lóng zhì, qǐng duō duō zhǐ jiào.」",
      translation:
        "隆志は少し緊張しながら答えた。「ありがとう！日本から語学留学に来た隆志です。どうぞよろしくお願いします。」",
      distractors: ["着急", "擔心", "興奮"],
      grammarNote: "「有點緊張（少し緊張している）」は自己紹介の場面で心理状態を表す自然な表現です。",
      chunks: ["隆志有點緊張地回應：", "「謝謝你！", "我是從日本來語言留學的隆志，", "請多多指教。」"],
      hintText: "隆志有點緊張地回應：",
    },
    {
      id: "STORY-003",
      band: "B" as const,
      speaker: "alen",
      targetWord: "生活機能",
      sentence: "阿倫邊走邊介紹：「這邊的生活機能很方便，走路五分鐘就有超商和捷運站。」",
      pinyin:
        "ā lún biān zǒu biān jiè shào: 「zhè biān de shēng huó jī néng hěn fāng biàn, zǒu lù wǔ fēn zhōng jiù yǒu chāo shāng hàn jié yùn zhàn.」",
      translation:
        "阿倫は歩きながら説明した。「この辺の生活機能は便利で、歩いて5分でコンビニと捷運の駅があるよ。」",
      distractors: ["交通機能", "生活品質", "公共設施"],
      grammarNote:
        "「生活機能（shēng huó jī néng）」は台湾の不動産・日常会話でよく使う語。周辺の買い物・交通の便利さを指します。",
      chunks: ["阿倫邊走邊介紹：", "「這邊的生活機能很方便，", "走路五分鐘就有", "超商和捷運站。」"],
      hintText: "阿倫邊走邊介紹：",
    },
    {
      id: "STORY-004",
      band: "B" as const,
      speaker: "alen",
      targetWord: "共享",
      sentence: "阿倫打開客廳的門說：「這裡是共享空間，廚房、洗衣機和陽台大家都可以使用。」",
      pinyin:
        "ā lún dǎ kāi kè tīng de mén shuō: 「zhè lǐ shì gòng xiǎng kōng jiān, chú fáng, xǐ yī jī hàn yáng tái dà jiā dōu kě yǐ shǐ yòng.」",
      translation:
        "阿倫はリビングのドアを開けて言った。「ここは共有スペース。キッチン、洗濯機、ベランダはみんな使えるよ。」",
      distractors: ["公用", "分配", "借用"],
      grammarNote: "「共享（gòng xiǎng）」は「共有する」。ルームシェアやコワーキングの文脈で頻出する語彙です。",
      chunks: ["阿倫打開客廳的門說：", "「這裡是共享空間，", "廚房、洗衣機和陽台", "大家都可以使用。」"],
      hintText: "阿倫打開客廳的門說：",
    },
    {
      id: "STORY-005",
      band: "B" as const,
      speaker: "alen",
      targetWord: "悠遊卡",
      sentence: "阿倫遞給隆志一張卡片：「這是悠遊卡，搭捷運和公車都能用，先儲值就可以了。」",
      pinyin:
        "ā lún dì gěi lóng zhì yī zhāng kǎ piàn: 「zhè shì yōu yóu kǎ, dā jié yùn hàn gōng chē dōu néng yòng, xiān chǔ zhí jiù kě yǐ le.」",
      translation:
        "阿倫は隆志にカードを渡した。「これは悠遊カード。捷運もバスも使えるから、先にチャージしてね。」",
      distractors: ["信用卡", "學生證", "票卡"],
      grammarNote:
        "「悠遊卡（yōu yóu kǎ）」は台湾の交通系ICカード。捷運・公車・コンビニ決済など多用途で使えます。",
      chunks: ["阿倫遞給隆志一張卡片：", "「這是悠遊卡，", "搭捷運和公車都能用，", "先儲值就可以了。」"],
      hintText: "阿倫遞給隆志一張卡片：",
    },
  ],
};

export const STORY_EPISODES: StoryEpisode[] = [STORY_EPISODE_1, ...STORY_EPISODES_2_12];

/** 全60カードをフラット配列で取得（バリデーション用） */
export const storyModeFlatCards = STORY_EPISODES.flatMap((ep) => ep.cards);
