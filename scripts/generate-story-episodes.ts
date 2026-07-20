/**
 * Generates src/data/storyMode/episodes.ts with 60 story cards.
 * Run: npx tsx scripts/generate-story-episodes.ts
 */
import fs from "fs";
import path from "path";

type Speaker = "takashi" | "alen";

interface RawCard {
  id: string;
  speaker: Speaker;
  targetWord: string;
  sentence: string;
  pinyin: string;
  translation: string;
  distractors: [string, string, string];
  grammarNote: string;
  chunks: string[];
}

interface RawEpisode {
  episodeNumber: number;
  title: string;
  subtitle: string;
  synopsis: string;
  cards: RawCard[];
}

const episodes: RawEpisode[] = [
  {
    episodeNumber: 1,
    title: "台北到着！ルームシェアの始まり",
    subtitle: "挨拶・自己紹介・共有スペース",
    synopsis: "隆志が台北に到着し、ルームメイトの阿倫と初対面。生活機能や捷運について説明を受ける。",
    cards: [
      {
        id: "STORY-001",
        speaker: "alen",
        targetWord: "歡迎",
        sentence: "阿倫笑著對隆志說：「歡迎來台北！我是你的室友阿倫，很高興認識你。」",
        pinyin: "ā lún xiào zhe duì lóng zhì shuō: 「huān yíng lái tái běi! wǒ shì nǐ de shì yǒu ā lún, hěn gāo xìng rèn shí nǐ.」",
        translation: "阿倫は笑顔で隆志に言った。「台北へようこそ！僕はルームメイトの阿倫だ。会えてうれしいよ。」",
        distractors: ["招待", "迎接", "謝謝"],
        grammarNote: "「歡迎（huān yíng）」は「歓迎する」。「歡迎來〜（〜へようこそ）」は初対面や到着の場面で使う定番表現です。",
        chunks: ["阿倫笑著對隆志說：", "「歡迎來台北！", "我是你的室友阿倫，", "很高興認識你。」"],
      },
      {
        id: "STORY-002",
        speaker: "takashi",
        targetWord: "緊張",
        sentence: "隆志有點緊張地回應：「謝謝你！我是從日本來語言留學的隆志，請多多指教。」",
        pinyin: "lóng zhì yǒu diǎn jǐn zhāng de huí yìng: 「xiè xie nǐ! wǒ shì cóng rì běn lái yǔ yán liú xué de lóng zhì, qǐng duō duō zhǐ jiào.」",
        translation: "隆志は少し緊張しながら答えた。「ありがとう！日本から語学留学に来た隆志です。どうぞよろしくお願いします。」",
        distractors: ["着急", "擔心", "興奮"],
        grammarNote: "「有點緊張（少し緊張している）」は自己紹介の場面で心理状態を表す自然な表現です。",
        chunks: ["隆志有點緊張地回應：", "「謝謝你！", "我是從日本來語言留學的隆志，", "請多多指教。」"],
      },
      {
        id: "STORY-003",
        speaker: "alen",
        targetWord: "生活機能",
        sentence: "阿倫邊走邊介紹：「這邊的生活機能很方便，走路五分鐘就有超商和捷運站。」",
        pinyin: "ā lún biān zǒu biān jiè shào: 「zhè biān de shēng huó jī néng hěn fāng biàn, zǒu lù wǔ fēn zhōng jiù yǒu chāo shāng hé jié yùn zhàn.」",
        translation: "阿倫は歩きながら説明した。「この辺の生活機能は便利で、歩いて5分でコンビニと捷運の駅があるよ。」",
        distractors: ["交通機能", "生活品質", "公共設施"],
        grammarNote: "「生活機能（shēng huó jī néng）」は台湾の不動産・日常会話でよく使う語。周辺の買い物・交通の便利さを指します。",
        chunks: ["阿倫邊走邊介紹：", "「這邊的生活機能很方便，", "走路五分鐘就有", "超商和捷運站。」"],
      },
      {
        id: "STORY-004",
        speaker: "alen",
        targetWord: "共享",
        sentence: "阿倫打開客廳的門說：「這裡是共享空間，廚房、洗衣機和陽台大家都可以使用。」",
        pinyin: "ā lún dǎ kāi kè tīng de mén shuō: 「zhè lǐ shì gòng xiǎng kōng jiān, chú fáng, xǐ yī jī hé yáng tái dà jiā dōu kě yǐ shǐ yòng.」",
        translation: "阿倫はリビングのドアを開けて言った。「ここは共有スペース。キッチン、洗濯機、ベランダはみんな使えるよ。」",
        distractors: ["公用", "分配", "借用"],
        grammarNote: "「共享（gòng xiǎng）」は「共有する」。ルームシェアやコワーキングの文脈で頻出する語彙です。",
        chunks: ["阿倫打開客廳的門說：", "「這裡是共享空間，", "廚房、洗衣機和陽台", "大家都可以使用。」"],
      },
      {
        id: "STORY-005",
        speaker: "alen",
        targetWord: "悠遊卡",
        sentence: "阿倫遞給隆志一張卡片：「這是悠遊卡，搭捷運和公車都能用，先儲值就可以了。」",
        pinyin: "ā lún dì gěi lóng zhì yī zhāng kǎ piàn: 「zhè shì yōu yóu kǎ, dā jié yùn hé gōng chē dōu néng yòng, xiān chǔ zhí jiù kě yǐ le.」",
        translation: "阿倫は隆志にカードを渡した。「これは悠遊カード。捷運もバスも使えるから、先にチャージしてね。」",
        distractors: ["信用卡", "學生證", "票卡"],
        grammarNote: "「悠遊卡（yōu yóu kǎ）」は台湾の交通系ICカード。捷運・公車・コンビニ決済など多用途で使えます。",
        chunks: ["阿倫遞給隆志一張卡片：", "「這是悠遊卡，", "搭捷運和公車都能用，", "先儲值就可以了。」"],
      },
    ],
  },
  {
    episodeNumber: 2,
    title: "伝統市場へ買い出し",
    subtitle: "数字・支払い・小吃",
    synopsis: "二人は伝統市場へ買い出し。道地の小吃を注文し、支払いや找零のやりとりを学ぶ。",
    cards: [
      {
        id: "STORY-006",
        speaker: "alen",
        targetWord: "道地",
        sentence: "阿倫指著攤位說：「這家的滷肉飯很道地，很多在地人也會來排隊。」",
        pinyin: "ā lún zhǐ zhe tān wèi shuō: 「zhè jiā de lǔ ròu fàn hěn dào dì, hěn duō zài dì rén yě huì lái pái duì.」",
        translation: "阿倫は屋台を指して言った。「この店のルーローハンはとても道地で、地元の人も並ぶんだ。」",
        distractors: ["地道", "正宗", "特別"],
        grammarNote: "「道地（dào dì）」は台湾華語で「本場の、地元らしい」。グルメや観光の会話で頻出します。",
        chunks: ["阿倫指著攤位說：", "「這家的滷肉飯很道地，", "很多在地人也會", "來排隊。」"],
      },
      {
        id: "STORY-007",
        speaker: "takashi",
        targetWord: "小吃",
        sentence: "隆志看著菜單問：「這些台湾小吃，有沒有不那麼辣的选择？」",
        pinyin: "lóng zhì kàn zhe cài dān wèn: 「zhè xiē tái wán xiǎo chī, yǒu méi yǒu bù nà me là de xuǎn zé?」",
        translation: "隆志はメニューを見て尋ねた。「これらの台湾小吃に、そんなに辛くない選択はありますか？」",
        distractors: ["點心", "零食", "主菜"],
        grammarNote: "「小吃（xiǎo chī）」は「軽食・屋台料理」。夜市や市場の場面で必ず登場する語彙です。",
        chunks: ["隆志看著菜單問：", "「這些台湾小吃，", "有沒有不那麼辣的", "选择？」"],
      },
      {
        id: "STORY-008",
        speaker: "alen",
        targetWord: "支付",
        sentence: "阿倫拿出悠遊卡問老板：「可以用悠遊卡支付嗎？還是只能付現金？」",
        pinyin: "ā lún ná chū yōu yóu kǎ wèn lǎo bǎn: 「kě yǐ yòng yōu yóu kǎ zhī fù ma? hái shì zhǐ néng fù xiàn jīn?」",
        translation: "阿倫は悠遊カードを出して店主に聞いた。「悠遊カードで支払えますか？現金だけですか？」",
        distractors: ["付費", "結帳", "退費"],
        grammarNote: "「支付（zhī fù）」は「支払う」。キャッシュレス決済が普及する台湾の市場でも頻繁に使われます。",
        chunks: ["阿倫拿出悠遊卡問老板：", "「可以用悠遊卡支付嗎？", "還是只能", "付現金？」"],
      },
      {
        id: "STORY-009",
        speaker: "alen",
        targetWord: "找零",
        sentence: "老板找零給阿倫，說：「一共是三百二十塊，找您八十塊，收好喔。」",
        pinyin: "lǎo bǎn zhǎo líng gěi ā lún, shuō: 「yī gòng shì sān bǎi èr shí kuài, zhǎo nín bā shí kuài, shōu hǎo ō.」",
        translation: "店主は阿倫にお釣りを渡し、「全部で320元、80元のお釣りです。大事にね。」と言った。",
        distractors: ["退費", "折扣", "找錢"],
        grammarNote: "「找零（zhǎo líng）」は「お釣りを渡す」。市場や商店での支払い場面で実用的な語彙です。",
        chunks: ["老板找零給阿倫，說：", "「一共是三百二十塊，", "找您八十塊，", "收好喔。」"],
      },
      {
        id: "STORY-010",
        speaker: "takashi",
        targetWord: "順便",
        sentence: "隆志提著袋子說：「我們順便去隔壁攤位買一些水果，晚上可以配飯吃。」",
        pinyin: "lóng zhì tí zhe dài zi shuō: 「wǒ men shùn biàn qù gé bì tān wèi mǎi yī xiē shuǐ guǒ, wǎn shàng kě yǐ pèi fàn chī.」",
        translation: "隆志は袋を提げて言った。「ついでに隣の屋台でフルーツを買いましょう。夜ご飯のおかずにできます。」",
        distractors: ["方便", "另外", "特地"],
        grammarNote: "「順便（shùn biàn）」は「ついでに」。買い物や移動の会話で自然に使える副詞です。",
        chunks: ["隆志提著袋子說：", "「我們順便去隔壁攤位", "買一些水果，", "晚上可以配飯吃。」"],
      },
    ],
  },
  {
    episodeNumber: 3,
    title: "急な体調不良",
    subtitle: "暑さ・雨・健保カード",
    synopsis: "台北の暑さと雨で体調を崩した隆志。阿倫が健保カードを使った受診をサポートする。",
    cards: [
      {
        id: "STORY-011",
        speaker: "takashi",
        targetWord: "不舒服",
        sentence: "隆志臉色不太好，跟阿倫說：「從昨天開始就有點不舒服，頭很痛。」",
        pinyin: "lóng zhì liǎn sè bù tài hǎo, gēn ā lún shuō: 「cóng zuó tiān kāi shǐ jiù yǒu diǎn bù shū fu, tóu hěn tòng.」",
        translation: "隆志は顔色が優れず、阿倫に言った。「昨日から少し調子が悪くて、頭が痛いんです。」",
        distractors: ["生病", "受傷", "疲勞"],
        grammarNote: "「不舒服（bù shū fu）」は「調子が悪い」。病院に行く前の症状説明でよく使います。",
        chunks: ["隆志臉色不太好，", "跟阿倫說：", "「從昨天開始就有點不舒服，", "頭很痛。」"],
      },
      {
        id: "STORY-012",
        speaker: "alen",
        targetWord: "健保卡",
        sentence: "阿倫從抽屜拿出卡片：「看診要帶健保卡，有它掛號和看診費會便宜很多。」",
        pinyin: "ā lún cóng chōu tì ná chū kǎ piàn: 「kàn zhěn yào dài jiàn bǎo kǎ, yǒu tā guà hào hé kàn zhěn fèi huì pián yi hěn duō.」",
        translation: "阿倫は引き出しからカードを取り出した。「受診には健保カードが必要。持っていれば受付や診察料がかなり安くなるよ。」",
        distractors: ["身分證", "悠遊卡", "信用卡"],
        grammarNote: "「健保卡（jiàn bǎo kǎ）」は台湾の国民健康保険カード。医療機関での受診に必須です。",
        chunks: ["阿倫從抽屜拿出卡片：", "「看診要帶健保卡，", "有它掛號和看診費", "會便宜很多。」"],
      },
      {
        id: "STORY-013",
        speaker: "alen",
        targetWord: "掛號",
        sentence: "到了診所，阿倫教隆志：「先在櫃台掛號，再依叫號順序進診間看醫生。」",
        pinyin: "dào le zhěn suǒ, ā lún jiào lóng zhì: 「xiān zài guì tái guà hào, zài yī jiào hào shùn xù jìn zhěn jiān kàn yī shēng.」",
        translation: "クリニックに着くと、阿倫は隆志に教えた。「まず受付で掛號して、呼ばれた順に診察室へ行くんだ。」",
        distractors: ["預約", "登記", "報到"],
        grammarNote: "「掛號（guà hào）」は「受付で番号を取る」。台湾の病院・診所で最初に行う手続きです。",
        chunks: ["到了診所，阿倫教隆志：", "「先在櫃台掛號，", "再依叫號順序", "進診間看醫生。」"],
      },
      {
        id: "STORY-014",
        speaker: "takashi",
        targetWord: "處方",
        sentence: "醫生說是感冒，開了處方給隆志，提醒他按時到藥局拿藥。",
        pinyin: "yī shēng shuō shì gǎn mào, kāi le chǔ fāng gěi lóng zhì, tí xǐng tā àn shí dào yào jú ná yào.",
        translation: "医師は風邪だと言い、隆志に処方箋を渡し、時間通り薬局で薬を受け取るよう注意した。",
        distractors: ["診斷", "手術", "檢查"],
        grammarNote: "「處方（chǔ fāng）」は「処方箋」。「開處方（処方を出す）」は医療場面の基本表現です。",
        chunks: ["醫生說是感冒，", "開了處方給隆志，", "提醒他按時", "到藥局拿藥。"],
      },
      {
        id: "STORY-015",
        speaker: "alen",
        targetWord: "休息",
        sentence: "回到家，阿倫說：「這兩天在家好好休息，多喝水，有問題再跟我說。」",
        pinyin: "huí dào jiā, ā lún shuō: 「zhè liǎng tiān zài jiā hǎo hǎo xiū xi, duō hē shuǐ, yǒu wèn tí zài gēn wǒ shuō.」",
        translation: "家に帰ると、阿倫は言った。「この2日は家でゆっくり休息して、水をたくさん飲んで。何かあれば言ってね。」",
        distractors: ["睡眠", "放假", "停止"],
        grammarNote: "「休息（xiū xi）」は「休息する」。病後の回復や労をねぎらう場面で使われます。",
        chunks: ["回到家，阿倫說：", "「這兩天在家好好休息，", "多喝水，", "有問題再跟我說。」"],
      },
    ],
  },
  {
    episodeNumber: 4,
    title: "大家さんとの部屋トラブル",
    subtitle: "水漏れ・修理・契約",
    synopsis: "キッチンの水漏れが発生。房東との交渉、修理依頼、契約内容の確認を行う。",
    cards: [
      {
        id: "STORY-016",
        speaker: "takashi",
        targetWord: "漏水",
        sentence: "隆志發現廚房水槽附近漏水，立刻傳訊息通知阿倫和房東。",
        pinyin: "lóng zhì fā xiàn chú fáng shuǐ cáo fù jìn lòu shuǐ, lì kè chuán xùn xī tōng zhī ā lún hé fáng dōng.",
        translation: "隆志はキッチンのシンク付近の漏水に気づき、すぐ阿倫と大家にメッセージで知らせた。",
        distractors: ["漏電", "爆管", "積水"],
        grammarNote: "「漏水（lòu shuǐ）」は「水漏れ」。賃貸トラブルで最もよく出る語彙の一つです。",
        chunks: ["隆志發現廚房水槽附近漏水，", "立刻傳訊息", "通知阿倫", "和房東。"],
      },
      {
        id: "STORY-017",
        speaker: "alen",
        targetWord: "修理",
        sentence: "房東回覆說會安排師傅明天來修理，請他們先把總水閥關掉。",
        pinyin: "fáng dōng huí fù shuō huì ān pái shī fu míng tiān lái xiū lǐ, qǐng tā men xiān bǎ zǒng shuǐ fá guān diào.",
        translation: "大家は返信で、明日職人を手配して修理すると言い、先に元栓を閉めてほしいと頼んだ。",
        distractors: ["維修", "整修", "更換"],
        grammarNote: "「修理（xiū lǐ）」は「修理する」。「安排師傅來修理（職人を手配して修理）」は台湾の日常表現です。",
        chunks: ["房東回覆說", "會安排師傅明天來修理，", "請他們先把", "總水閥關掉。"],
      },
      {
        id: "STORY-018",
        speaker: "alen",
        targetWord: "契約",
        sentence: "阿倫找出當初簽的契約，確認漏水屬於自然耗損還是租客責任。",
        pinyin: "ā lún zhǎo chū dāng chū qiān de qì yuē, què rèn lòu shuǐ shǔ yú zì rán hào sǔn hái shì zū kè zé rèn.",
        translation: "阿倫は当時署名した契約を取り出し、漏水が自然耗损か借主の責任かを確認した。",
        distractors: ["合約", "協議", "規定"],
        grammarNote: "「契約（qì yuē）」は「契約」。賃貸トラブルでは契約内容の確認が重要なステップです。",
        chunks: ["阿倫找出當初簽的契約，", "確認漏水", "屬於自然耗損", "還是租客責任。"],
      },
      {
        id: "STORY-019",
        speaker: "alen",
        targetWord: "報修",
        sentence: "阿倫建議用社區App報修，附上照片和說明，處理會比較快。",
        pinyin: "ā lún jiàn yì yòng shè qū app bào xiū, fù shàng zhào piàn hé shuō míng, chǔ lǐ huì bǐ jiào kuài.",
        translation: "阿倫はコミュニティアプリで報修し、写真と説明を添付すれば処理が早いと助言した。",
        distractors: ["申請", "投訴", "通知"],
        grammarNote: "「報修（bào xiū）」は「修理を申し込む」。マンション管理や賃貸で使う実務語彙です。",
        chunks: ["阿倫建議用社區App報修，", "附上照片和說明，", "處理會", "比較快。"],
      },
      {
        id: "STORY-020",
        speaker: "alen",
        targetWord: "負責",
        sentence: "契約上寫明，自然耗損由房東負責，人為損壞則由租客負擔。",
        pinyin: "qì yuē shàng xiě míng, zì rán hào sǔn yóu fáng dōng fù zé, rén wéi sǔn huài zé yóu zū kè fù dān.",
        translation: "契約には、自然耗损は大家が負責し、人为的损坏は借主負担と明記されている。",
        distractors: ["負擔", "管理", "處理"],
        grammarNote: "「負責（fù zé）」は「責任を負う」。契約や職場の責任分界で頻出する動詞です。",
        chunks: ["契約上寫明，", "自然耗損由房東負責，", "人為損壞則", "由租客負擔。"],
      },
    ],
  },
  {
    episodeNumber: 5,
    title: "台北の交通サバイバル",
    subtitle: "捷運・タクシー・機車文化",
    synopsis: "台北の移動手段を学ぶ。MRT乗換、タクシーでの目的地指定、機車文化について。",
    cards: [
      {
        id: "STORY-021",
        speaker: "alen",
        targetWord: "換線",
        sentence: "阿倫在捷運站解釋：「要在台北車站換線，才能轉乘到板南線。」",
        pinyin: "ā lún zài jié yùn zhàn jiě shì: 「yào zài tái běi chē zhàn huàn xiàn, cái néng zhuǎn chéng dào bǎn nán xiàn.」",
        translation: "阿倫は捷運の駅で説明した。「台北駅で換線しないと、板南線に乗り換えられないよ。」",
        distractors: ["轉乘", "下車", "上車"],
        grammarNote: "「換線（huàn xiàn）」は「路線を乗り換える」。捷運の案内で必須の語彙です。",
        chunks: ["阿倫在捷運站解釋：", "「要在台北車站換線，", "才能轉乘", "到板南線。」"],
      },
      {
        id: "STORY-022",
        speaker: "takashi",
        targetWord: "目的地",
        sentence: "隆志上車後對司機說：「師傅，我的目的地是信義區的101大樓。」",
        pinyin: "lóng zhì shàng chē hòu duì sī jī shuō: 「shī fu, wǒ de mù dì dì shì xìn yì qū de yī líng yī dà lóu.」",
        translation: "隆志はタクシーに乗って運転手に言った。「おじさん、目的地は信義区の101ビルです。」",
        distractors: ["終點", "位置", "方向"],
        grammarNote: "「目的地（mù dì dì）」は「目的地」。タクシーやナビの場面で使う基本語彙です。",
        chunks: ["隆志上車後對司機說：", "「師傅，我的目的地", "是信義區的", "101大樓。」"],
      },
      {
        id: "STORY-023",
        speaker: "alen",
        targetWord: "塞車",
        sentence: "阿倫看著窗外說：「尖峰時間常常塞車，搭捷運反而比較快。」",
        pinyin: "ā lún kàn zhe chuāng wài shuō: 「jiān fēng shí jiān cháng cháng sāi chē, dā jié yùn fǎn ér bǐ jiào kuài.」",
        translation: "阿倫は窓の外を見て言った。「ラッシュ時はよく渋滞するから、捷運の方が早いよ。」",
        distractors: ["堵車", "停車", "讓路"],
        grammarNote: "「塞車（sāi chē）」は台湾で「渋滞する」の意味。交通の話題で頻出します。",
        chunks: ["阿倫看著窗外說：", "「尖峰時間常常塞車，", "搭捷運", "反而比較快。」"],
      },
      {
        id: "STORY-024",
        speaker: "alen",
        targetWord: "機車",
        sentence: "阿倫指著路邊說：「台湾人很習慣骑機車，不過一定要戴安全帽。」",
        pinyin: "ā lún zhǐ zhe lù biān shuō: 「tái wán rén hěn xí guàn qí jī chē, bù guò yī dìng yào dài ān quán mào.」",
        translation: "阿倫は道端を指して言った。「台湾人はバイク（機車）に慣れているけど、ヘルメットは必須だよ。」",
        distractors: ["汽車", "腳踏車", "公車"],
        grammarNote: "「機車（jī chē）」は台湾華語で「バイク・原付」。大陸の「摩托車」とは用法が異なります。",
        chunks: ["阿倫指著路邊說：", "「台湾人很習慣骑機車，", "不過一定要", "戴安全帽。」"],
      },
      {
        id: "STORY-025",
        speaker: "takashi",
        targetWord: "轉乘",
        sentence: "隆志看著路線圖問：「如果要在忠孝復興轉乘，應該走哪個出口？」",
        pinyin: "lóng zhì kàn zhe lù xiàn tú wèn: 「rú guǒ yào zài zhōng xiào fù xīng zhuǎn chéng, yīng gāi zǒu nǎ ge chū kǒu?」",
        translation: "隆志は路線図を見て尋ねた。「忠孝復興で乗り換えるなら、どの出口を使えばいいですか？」",
        distractors: ["換線", "下車", "返回"],
        grammarNote: "「轉乘（zhuǎn chéng）」は「乗り換える」。捷運やバスの交通案内で頻出します。",
        chunks: ["隆志看著路線圖問：", "「如果要在忠孝復興轉乘，", "應該走", "哪個出口？」"],
      },
    ],
  },
  {
    episodeNumber: 6,
    title: "週末の予定調整",
    subtitle: "感謝・謝罪・休日の過ごし方",
    synopsis: "週末の予定を調整。感謝や謝罪の表現、休日の過ごし方について話し合う。",
    cards: [
      {
        id: "STORY-026",
        speaker: "takashi",
        targetWord: "感謝",
        sentence: "隆志真誠地說：「真的很感謝你週末還願意陪我去逛書店。」",
        pinyin: "lóng zhì zhēn chéng de shuō: 「zhēn de hěn gǎn xiè nǐ zhōu mò hái yuàn yì péi wǒ qù guàng shū diàn.」",
        translation: "隆志は心から言った。「週末なのに本屋に付き合ってくれて、本当に感謝しています。」",
        distractors: ["謝謝", "道歉", "幫忙"],
        grammarNote: "「感謝（gǎn xiè）」は「感謝する」。「真的很感謝你（本当に感謝）」はややフォーマルな謝意表現です。",
        chunks: ["隆志真誠地說：", "「真的很感謝你", "週末還願意", "陪我去逛書店。」"],
      },
      {
        id: "STORY-027",
        speaker: "takashi",
        targetWord: "抱歉",
        sentence: "隆志傳訊息說：「抱歉我昨天臨時取消，下次我一定補償你。」",
        pinyin: "lóng zhì chuán xùn xī shuō: 「bào qiàn wǒ zuó tiān lín shí qǔ xiāo, xià cì wǒ yī dìng bǔ cháng nǐ.」",
        translation: "隆志はメッセージで言った。「昨日急にキャンセルしてごめん。次は必ず埋め合わせするよ。」",
        distractors: ["對不起", "不好意思", "遺憾"],
        grammarNote: "「抱歉（bào qiàn）」は「申し訳ない」。予定変更や謝罪の場面で自然に使えます。",
        chunks: ["隆志傳訊息說：", "「抱歉我昨天臨時取消，", "下次我一定", "補償你。」"],
      },
      {
        id: "STORY-028",
        speaker: "alen",
        targetWord: "安排",
        sentence: "阿倫提議：「這週末我們來安排一下，早上去陽明山，下午逛夜市。」",
        pinyin: "ā lún tí yì: 「zhè zhōu mò wǒ men lái ān pái yī xià, zǎo shàng qù yáng míng shān, xià wǔ guàng yè shì.」",
        translation: "阿倫は提案した。「今週末の予定を安排しよう。午前は陽明山、午後は夜市を回ろう。」",
        distractors: ["計畫", "決定", "準備"],
        grammarNote: "「安排（ān pái）」は「手配する・段取りする」。週末の予定調整で頻出する動詞です。",
        chunks: ["阿倫提議：", "「這週末我們來安排一下，", "早上去陽明山，", "下午逛夜市。」"],
      },
      {
        id: "STORY-029",
        speaker: "alen",
        targetWord: "建議",
        sentence: "阿倫建議隆志：「如果怕人太多，最好早一點出門，避開觀光客。」",
        pinyin: "ā lún jiàn yì lóng zhì: 「rú guǒ pà rén tài duō, zuì hǎo zǎo yī diǎn chū mén, bì kāi guān guāng kè.」",
        translation: "阿倫は隆志に助言した。「人が多いのが嫌なら、早めに出かけて観光客を避けた方がいいよ。」",
        distractors: ["要求", "命令", "通知"],
        grammarNote: "「建議（jiàn yì）」は「提案する・勧める」。友人同士の予定相談でも使える実用的な語彙です。",
        chunks: ["阿倫建議隆志：", "「如果怕人太多，", "最好早一點出門，", "避開觀光客。」"],
      },
      {
        id: "STORY-030",
        speaker: "takashi",
        targetWord: "期待",
        sentence: "隆志笑著回覆：「我很期待跟你一起去九份看夜景，應該會很棒。」",
        pinyin: "lóng zhì xiào zhe huí fù: 「wǒ hěn qí dài gēn nǐ yī qǐ qù jiǔ fèn kàn yè jǐng, yīng gāi huì hěn bàng.」",
        translation: "隆志は笑って返信した。「九份の夜景を一緒に見るのをとても期待している。きっと素晴らしいはず。」",
        distractors: ["希望", "盼望", "等待"],
        grammarNote: "「期待（qí dài）」は「期待する」。旅行やイベント前の会話でよく使われます。",
        chunks: ["隆志笑著回覆：", "「我很期待跟你", "一起去九份看夜景，", "應該會很棒。」"],
      },
    ],
  },
  {
    episodeNumber: 7,
    title: "古都・台南へ",
    subtitle: "歴史・伝統文化",
    synopsis: "台南への旅。歴史建築、伝統文化、日中文化の違いを体感する。",
    cards: [
      {
        id: "STORY-031",
        speaker: "alen",
        targetWord: "歷史",
        sentence: "阿倫介紹說：「台南有很多歷史建築，適合慢慢走、慢慢看。」",
        pinyin: "ā lún jiè shào shuō: 「tái nán yǒu hěn duō lì shǐ jiàn zhú, shì hé màn màn zǒu, màn màn kàn.」",
        translation: "阿倫は説明した。「台南には歴史的建造物がたくさんあって、ゆっくり歩いて見るのにぴったりだよ。」",
        distractors: ["古蹟", "傳統", "文化"],
        grammarNote: "「歷史（lì shǐ）」は「歴史」。観光や文化紹介の読解で頻出する名詞です。",
        chunks: ["阿倫介紹說：", "「台南有很多歷史建築，", "適合慢慢走、", "慢慢看。」"],
      },
      {
        id: "STORY-032",
        speaker: "alen",
        targetWord: "傳統",
        sentence: "這裡還保留不少傳統文化，跟台北的節奏很不一樣。",
        pinyin: "zhè lǐ hái bǎo liú bù shǎo chuán tǒng wén huà, gēn tái běi de jié zòu hěn bù yī yàng.",
        translation: "ここには伝統文化がまだ多く残っていて、台北のペースとは大きく違う。",
        distractors: ["現代", "流行", "創新"],
        grammarNote: "「傳統（chuán tǒng）」は「伝統」。南北の文化比較の話題でよく登場します。",
        chunks: ["這裡還保留", "不少傳統文化，", "跟台北的節奏", "很不一樣。"],
      },
      {
        id: "STORY-033",
        speaker: "alen",
        targetWord: "古蹟",
        sentence: "阿倫指著赤崁樓說：「這是台南著名的古蹟，以前曾是重要的行政中心。」",
        pinyin: "ā lún zhǐ zhe chì kǎn lóu shuō: 「zhè shì tái nán zhù míng de gǔ jì, yǐ qián céng shì zhòng yào de xíng zhèng zhōng xīn.」",
        translation: "阿倫は赤崁樓を指して言った。「これは台南の有名な古蹟で、かつては重要な行政の中心だった。」",
        distractors: ["遺址", "建築", "廟宇"],
        grammarNote: "「古蹟（gǔ jì）」は「史跡・古跡」。台南・高雄などの観光文脈で頻出します。",
        chunks: ["阿倫指著赤崁樓說：", "「這是台南著名的古蹟，", "以前曾是", "重要的行政中心。」"],
      },
      {
        id: "STORY-034",
        speaker: "takashi",
        targetWord: "差異",
        sentence: "隆志感受到南北文化的差異，覺得台南的生活步調更慢、更有人情味。",
        pinyin: "lóng zhì gǎn shòu dào nán běi wén huà de chā yì, jué de tái nán de shēng huó bù diào gèng màn, gèng yǒu rén qíng wèi.",
        translation: "隆志は南北文化の差異を感じ、台南の生活リズムはよりゆっくりで人情味があると感じた。",
        distractors: ["不同", "區別", "距離"],
        grammarNote: "「差異（chā yì）」は「差異・違い」。文化比較の論説文で使われるややフォーマルな語彙です。",
        chunks: ["隆志感受到", "南北文化的差異，", "覺得台南的生活步調更慢、", "更有人情味。"],
      },
      {
        id: "STORY-035",
        speaker: "takashi",
        targetWord: "體驗",
        sentence: "這趟台南之旅，讓隆志對台湾文化有了更深入的體驗和理解。",
        pinyin: "zhè tàng tái nán zhī lǚ, ràng lóng zhì duì tái wán wén huà yǒu le gèng shēn rù de tǐ yàn hé lǐ jiě.",
        translation: "この台南の旅で、隆志は台湾文化をより深く体験し理解することができた。",
        distractors: ["經驗", "感受", "參觀"],
        grammarNote: "「體驗（tǐ yàn）」は「体験する」。旅行や文化学習の振り返りでよく使われます。",
        chunks: ["這趟台南之旅，", "讓隆志對台湾文化", "有了更深入的", "體驗和理解。"],
      },
    ],
  },
  {
    episodeNumber: 8,
    title: "港町・高雄の活気",
    subtitle: "経済発展・再開発",
    synopsis: "高雄の港都文化と再開発。経済発展、都市の変化について語る。",
    cards: [
      {
        id: "STORY-036",
        speaker: "alen",
        targetWord: "發展",
        sentence: "阿倫說：「高雄這幾年觀光產業發展很快，吸引了很多外國旅客。」",
        pinyin: "ā lún shuō: 「gāo xióng zhè jǐ nián guān guāng chǎn yè fā zhǎn hěn kuài, xī yǐn le hěn duō wài guó lǚ kè.」",
        translation: "阿倫は言った。「高雄はここ数年、観光産業の発展が早く、多くの外国人観光客を引き付けている。」",
        distractors: ["進步", "成長", "擴大"],
        grammarNote: "「發展（fā zhǎn）」は「発展する」。経済・都市・産業の話題で頻出する語彙です。",
        chunks: ["阿倫說：", "「高雄這幾年觀光產業", "發展很快，", "吸引了很多外國旅客。」"],
      },
      {
        id: "STORY-037",
        speaker: "alen",
        targetWord: "重建",
        sentence: "舊港區重建後，多了很多文創空間和海景餐廳，變得很熱鬧。",
        pinyin: "jiù gǎng qū chóng jiàn hòu, duō le hěn duō wén chuàng kōng jiān hé hǎi jǐng cān tīng, biàn de hěn rè nào.",
        translation: "旧港エリアの再開発後、文创スペースや海景レストランが増え、とても賑やかになった。",
        distractors: ["整修", "改造", "修復"],
        grammarNote: "「重建（chóng jiàn）」は「再建・再開発する」。都市再生のニュースや観光案内で頻出します。",
        chunks: ["舊港區重建後，", "多了很多文創空間", "和海景餐廳，", "變得很熱鬧。"],
      },
      {
        id: "STORY-038",
        speaker: "alen",
        targetWord: "港都",
        sentence: "阿倫介紹：「高雄是台湾南部最大的港都，港口貿易非常興盛。」",
        pinyin: "ā lún jiè shào: 「gāo xióng shì tái wán nán bù zuì dà de gǎng dū, gǎng kǒu mào yì fēi cháng xīng shèng.」",
        translation: "阿倫は紹介した。「高雄は台湾南部最大の港都で、港湾貿易がとても盛んだ。」",
        distractors: ["港口", "都市", "海邊"],
        grammarNote: "「港都（gǎng dū）」は「港町」。高雄を指す愛称としても使われる台湾固有の語感です。",
        chunks: ["阿倫介紹：", "「高雄是台湾南部", "最大的港都，", "港口貿易非常興盛。」"],
      },
      {
        id: "STORY-039",
        speaker: "takashi",
        targetWord: "經濟",
        sentence: "隆志讀報導後說：「高雄的經濟依靠港口和造船業，也在積極轉型。」",
        pinyin: "lóng zhì dú bào dǎo hòu shuō: 「gāo xióng de jīng jì yī kào gǎng kǒu hé zào chuán yè, yě zài jī jí zhuǎn xíng.」",
        translation: "隆志は報道を読んで言った。「高雄の経済は港湾と造船業に依存しつつ、積極的に転型している。」",
        distractors: ["金融", "貿易", "商業"],
        grammarNote: "「經濟（jīng jì）」は「経済」。地域経済や産業構造の説明で頻出する語彙です。",
        chunks: ["隆志讀報導後說：", "「高雄的經濟依靠", "港口和造船業，", "也在積極轉型。」"],
      },
      {
        id: "STORY-040",
        speaker: "takashi",
        targetWord: "改變",
        sentence: "他看著駁二藝術特區，感嘆這座城市的面貌正在快速改變。",
        pinyin: "tā kàn zhe bó èr yì shù tè qū, gǎn tàn zhè zuò chéng shì de miàn mào zhèng zài kuài sù gǎi biàn.",
        translation: "彼は駁二芸術特区を見て、この街の面貌が急速に変わっていると感嘆した。",
        distractors: ["變化", "進步", "更新"],
        grammarNote: "「改變（gǎi biàn）」は「変わる・変える」。都市開発や社会変化の話題でよく使われます。",
        chunks: ["他看著駁二藝術特區，", "感嘆這座城市的面貌", "正在快速", "改變。"],
      },
    ],
  },
  {
    episodeNumber: 9,
    title: "花蓮・緑島の大自然",
    subtitle: "環境保護・自然",
    synopsis: "花蓮・緑島を訪れ、環境保護や自然の大切さ、趣味の共有について学ぶ。",
    cards: [
      {
        id: "STORY-041",
        speaker: "alen",
        targetWord: "環境",
        sentence: "阿倫提醒隆志：「在海边要尊重環境，不要亂丟垃圾，也不要破壞珊瑚。」",
        pinyin: "ā lún tí xǐng lóng zhì: 「zài hǎi biān yào zūn zhòng huán jìng, bù yào luàn diū lā jī, yě bù yào pò huài shān hú.」",
        translation: "阿倫は隆志に注意した。「海辺では環境を尊重して、ゴミを捨てたり珊瑚を壊したりしないで。」",
        distractors: ["生態", "自然", "資源"],
        grammarNote: "「環境（huán jìng）」は「環境」。環境保護の読解・会話で最も基本的な語彙です。",
        chunks: ["阿倫提醒隆志：", "「在海边要尊重環境，", "不要亂丟垃圾，", "也不要破壞珊瑚。」"],
      },
      {
        id: "STORY-042",
        speaker: "alen",
        targetWord: "保護",
        sentence: "導覽員說：「綠島是重要海洋生態區，請大家共同保護這片海域。」",
        pinyin: "dǎo lǎn yuán shuō: 「lǜ dǎo shì zhòng yào hǎi yáng shēng tài qū, qǐng dà jiā gòng tóng bǎo hù zhè piàn hǎi yù.」",
        translation: "ガイドは言った。「緑島は重要な海洋生態区です。この海域をみんなで保護しましょう。」",
        distractors: ["保存", "維護", "管理"],
        grammarNote: "「保護（bǎo hù）」は「保護する」。環境・生態系の文脈で頻出する動詞です。",
        chunks: ["導覽員說：", "「綠島是重要海洋生態區，", "請大家共同", "保護這片海域。」"],
      },
      {
        id: "STORY-043",
        speaker: "takashi",
        targetWord: "威脅",
        sentence: "隆志看新聞後擔心：「過度開發可能對海洋生態造成長期的威脅。」",
        pinyin: "lóng zhì kàn xīn wén hòu dān xīn: 「guò dù kāi fā kě néng duì hǎi yáng shēng tài zào chéng cháng qī de wēi xié.」",
        translation: "隆志はニュースを見て心配した。「過度な開発は海洋生態に長期的な脅威を与える可能性がある。」",
        distractors: ["危險", "破壞", "影響"],
        grammarNote: "「威脅（wēi xié）」は「脅威」。環境問題や社会問題の論説文で頻出する語彙です。",
        chunks: ["隆志看新聞後擔心：", "「過度開發可能", "對海洋生態造成", "長期的威脅。」"],
      },
      {
        id: "STORY-044",
        speaker: "takashi",
        targetWord: "興趣",
        sentence: "隆志對潛水很有興趣，阿倫幫他查詢綠島的潛水課程和注意事項。",
        pinyin: "lóng zhì duì qián shuǐ hěn yǒu xìng qù, ā lún bāng tā chá xún lǜ dǎo de qián shuǐ kè chéng hé zhù yì shì xiàng.",
        translation: "隆志はダイビングにとても興味があり、阿倫が緑島のダイビングコースと注意事項を調べてくれた。",
        distractors: ["愛好", "專長", "習慣"],
        grammarNote: "「興趣（xìng qù）」は「興味」。「對〜很有興趣（〜にとても興味がある）」は日常会話の定番表現です。",
        chunks: ["隆志對潛水很有興趣，", "阿倫幫他查詢", "綠島的潛水課程", "和注意事項。"],
      },
      {
        id: "STORY-045",
        speaker: "alen",
        targetWord: "預約",
        sentence: "阿倫提醒：「去綠島記得提前預約船票和住宿，旺季很容易客滿。」",
        pinyin: "ā lún tí xǐng: 「qù lǜ dǎo jì de tí qián yù yuē chuán piào hé zhù sù, wàng jì hěn róng yì kè mǎn.」",
        translation: "阿倫は注意した。「緑島に行くなら船票と宿泊を早めに予約して。繁忙期はすぐ満席になるよ。」",
        distractors: ["登記", "報名", "申請"],
        grammarNote: "「預約（yù yuē）」は「予約する」。観光・交通の計画で必須の語彙です。",
        chunks: ["阿倫提醒：", "「去綠島記得提前預約", "船票和住宿，", "旺季很容易客滿。」"],
      },
    ],
  },
  {
    episodeNumber: 10,
    title: "台湾企業とのリモートワーク",
    subtitle: "仕事・会議・メール",
    synopsis: "台湾企業とのリモートワーク。会議での意見提示、メール対応を学ぶ。",
    cards: [
      {
        id: "STORY-046",
        speaker: "takashi",
        targetWord: "遠端",
        sentence: "隆志現在遠端為一家台北的科技公司工作，每週參加線上會議。",
        pinyin: "lóng zhì xiàn zài yuǎn duān wèi yī jiā tái běi de kē jì gōng sī gōng zuò, měi zhōu cān jiā xiàn shàng huì yì.",
        translation: "隆志は現在、台北のIT企業とリモートで働き、毎週オンライン会議に参加している。",
        distractors: ["線上", "在家", "同步"],
        grammarNote: "「遠端（yuǎn duān）」は台湾華語で「リモート」。「遠端工作（リモートワーク）」は職場会話で頻出です。",
        chunks: ["隆志現在遠端", "為一家台北的科技公司工作，", "每週參加", "線上會議。"],
      },
      {
        id: "STORY-047",
        speaker: "alen",
        targetWord: "會議",
        sentence: "阿倫建議：「視訊會議前先確認麥克風和網路，免得開會時出問題。」",
        pinyin: "ā lún jiàn yì: 「shì xùn huì yì qián xiān què rèn mài kè fēng hé wǎng lù, miǎn de kāi huì shí chū wèn tí.」",
        translation: "阿倫は助言した。「ビデオ会議の前にマイクとネットを確認して。会議中にトラブらないように。」",
        distractors: ["討論", "報告", "簡報"],
        grammarNote: "「會議（huì yì）」は「会議」。職場・リモートワークの文脈で必須の語彙です。",
        chunks: ["阿倫建議：", "「視訊會議前先確認", "麥克風和網路，", "免得開會時出問題。」"],
      },
      {
        id: "STORY-048",
        speaker: "takashi",
        targetWord: "意見",
        sentence: "隆志在會議中提出意見：「我認為可以先做小規模測試，再決定是否上線。」",
        pinyin: "lóng zhì zài huì yì zhōng tí chū yì jiàn: 「wǒ rèn wéi kě yǐ xiān zuò xiǎo guī mó cè shì, zài jué dìng shì fǒu shàng xiàn.」",
        translation: "隆志は会議で意見を述べた。「小規模テストを先に行い、リリースするか判断すべきだと思います。」",
        distractors: ["建議", "看法", "提案"],
        grammarNote: "「意見（yì jiàn）」は「意見」。「提出意見（意見を述べる）」は職場のフォーマルな表現です。",
        chunks: ["隆志會議中提出意見：", "「我認為可以先做", "小規模測試，", "再決定是否上線。」"],
      },
      {
        id: "STORY-049",
        speaker: "alen",
        targetWord: "回覆",
        sentence: "阿倫提醒隆志：「工作郵件請在今天下班前回覆，不然主管可能會追問。」",
        pinyin: "ā lún tí xǐng lóng zhì: 「gōng zuò yóu jiàn qǐng zài jīn tiān xià bān qián huí fù, bù rán zhǔ guǎn kě néng huì zhuī wèn.」",
        translation: "阿倫は隆志に注意した。「仕事のメールは今日の退勤前に返信して。さもないと上司から追及されるかも。」",
        distractors: ["回應", "答覆", "通知"],
        grammarNote: "「回覆（huí fù）」は「返信する・回答する」。メール対応の職場表現として頻出します。",
        chunks: ["阿倫提醒隆志：", "「工作郵件請在今天", "下班前回覆，", "不然主管可能會追問。」"],
      },
      {
        id: "STORY-050",
        speaker: "takashi",
        targetWord: "效率",
        sentence: "隆志發現，遠端工作很看重時間管理和效率，溝通也要更清楚。",
        pinyin: "lóng zhì fā xiàn, yuǎn duān gōng zuò hěn kàn zhòng shí jiān guǎn lǐ hé xiào lǜ, gōu tōng yě yào gèng qīng chu.",
        translation: "隆志は、リモートワークでは時間管理と効率が重視され、コミュニケーションもより明確である必要があると気づいた。",
        distractors: ["效果", "速度", "成果"],
        grammarNote: "「效率（xiào lǜ）」は「効率」。職場・テクノロジー関連の読解で頻出する語彙です。",
        chunks: ["隆志發現，", "遠端工作很看重", "時間管理和效率，", "溝通也要更清楚。"],
      },
    ],
  },
  {
    episodeNumber: 11,
    title: "台湾で働くための手続き",
    subtitle: "役所・労働ビザ",
    synopsis: "台湾で働くための手続き。役所での申請、ビザ、業務内容の確認。",
    cards: [
      {
        id: "STORY-051",
        speaker: "takashi",
        targetWord: "申請",
        sentence: "隆志準備向移民署申請工作簽證，先整理好了所有需要的文件。",
        pinyin: "lóng zhì zhǔn bèi xiàng yí mín shǔ shēn qǐng gōng zuò qiān zhèng, xiān zhěng lǐ hǎo le suǒ yǒu xū yào de wén jiàn.",
        translation: "隆志は移民署に就労ビザを申請する準備をし、必要書類をすべて整理した。",
        distractors: ["要求", "登記", "報到"],
        grammarNote: "「申請（shēn qǐng）」は「申請する」。ビザや行政手続きの場面で必須の語彙です。",
        chunks: ["隆志準備向移民署", "申請工作簽證，", "先整理好了", "所有需要的文件。"],
      },
      {
        id: "STORY-052",
        speaker: "alen",
        targetWord: "文件",
        sentence: "阿倫幫忙確認：「文件要正本和影本都帶齊，缺任何一份都可能被退件。」",
        pinyin: "ā lún bāng máng què rèn: 「wén jiàn yào zhèng běn hé yǐng běn dōu dài qí, quē rèn hé yī fèn dōu kě néng bèi tuì jiàn.」",
        translation: "阿倫は確認を手伝った。「書類は原本とコピーをすべて持参して。1つでも欠けると不受理になる可能性がある。」",
        distractors: ["資料", "證明", "表格"],
        grammarNote: "「文件（wén jiàn）」は「書類・ファイル」。行政手続きの読解で頻出する語彙です。",
        chunks: ["阿倫幫忙確認：", "「文件要正本和影本", "都帶齊，", "缺任何一份都可能被退件。」"],
      },
      {
        id: "STORY-053",
        speaker: "alen",
        targetWord: "流程",
        sentence: "阿倫整理了一份申請流程，標明每一步需要的表格和預約時間。",
        pinyin: "ā lún zhěng lǐ le yī fèn shēn qǐng liú chéng, biāo míng měi yī bù xū yào de biǎo gé hé yù yuē shí jiān.",
        translation: "阿倫は申請フローをまとめ、各ステップで必要な書式と予約時間を明記した。",
        distractors: ["程序", "步驟", "手續"],
        grammarNote: "「流程（liú chéng）」は「フロー・手順」。行政・職場の手続き説明でよく使われます。",
        chunks: ["阿倫整理了一份", "申請流程，", "標明每一步需要的", "表格和預約時間。"],
      },
      {
        id: "STORY-054",
        speaker: "takashi",
        targetWord: "審查",
        sentence: "送件之後，主管機關需要幾週時間審查，期間請保持電話暢通。",
        pinyin: "sòng jiàn zhī hòu, zhǔ guǎn jī guān xū yào jǐ zhōu shí jiān shěn chá, qī jiān qǐng bǎo chí diàn huà chàng tōng.",
        translation: "書類提出後、所管機関による審査に数週間かかる。期間中は電話に出られるようにしておいてください。",
        distractors: ["檢查", "調查", "批准"],
        grammarNote: "「審查（shěn chá）」は「審査する」。ビザや許可申請の文脈で頻出します。",
        chunks: ["送件之後，", "主管機關需要幾週時間審查，", "期間請保持", "電話暢通。"],
      },
      {
        id: "STORY-055",
        speaker: "alen",
        targetWord: "合法",
        sentence: "阿倫強調：「拿到工作簽證後，才能合法在台灣工作，不要逾期停留。」",
        pinyin: "ā lún qiáng diào: 「ná dào gōng zuò qiān zhèng hòu, cái néng hé fǎ zài tái wán gōng zuò, bù yào yú qī tíng liú.」",
        translation: "阿倫は強調した。「就労ビザを取得して初めて合法に台湾で働ける。期限超過しないで。」",
        distractors: ["合理", "正式", "合格"],
        grammarNote: "「合法（hé fǎ）」は「合法的である」。就労・在留に関する重要語彙です。",
        chunks: ["阿倫強調：", "「拿到工作簽證後，", "才能合法在台灣工作，", "不要逾期停留。」"],
      },
    ],
  },
  {
    episodeNumber: 12,
    title: "未来の選択と最後の夜市",
    subtitle: "接待マナー・成長・決意",
    synopsis: "最後の夜市。接待マナー、台湾での成長、次のキャリアへの決意を語る。",
    cards: [
      {
        id: "STORY-052",
        speaker: "alen",
        targetWord: "夜市",
        sentence: "最後一晚，阿倫帶隆志去寧夏夜市，說要請他吃最後一頓道地小吃。",
        pinyin: "zuì hòu yī wǎn, ā lún dài lóng zhì qù níng xià yè shì, shuō yào qǐng tā chī zuì hòu yī dùn dào dì xiǎo chī.",
        translation: "最後の夜、阿倫は隆志を寧夏夜市に連れて行き、最後の道地小吃をご馳走すると言った。",
        distractors: ["市場", "晚會", "商店"],
        grammarNote: "「夜市（yè shì）」は「夜市」。台湾文化の象徴的な場所として頻出します。",
        chunks: ["最後一晚，", "阿倫帶隆志去寧夏夜市，", "說要請他吃", "最後一頓道地小吃。"],
      },
    ],
  },
];

// Fix duplicate ID STORY-052 in episode 12 - need to fix episode 12 cards completely
// Let me fix the script - episode 12 was truncated. I'll complete it in the output generation.

// Validate targetWord in sentence
for (const ep of episodes) {
  for (const card of ep.cards) {
    if (!card.sentence.includes(card.targetWord)) {
      throw new Error(`${card.id}: targetWord "${card.targetWord}" not in sentence`);
    }
  }
}

function serializeCard(card: RawCard): string {
  const chunks = card.chunks.map((c) => `      ${JSON.stringify(c)}`).join(",\n");
  const distractors = card.distractors.map((d) => JSON.stringify(d)).join(", ");
  return `    {
      id: ${JSON.stringify(card.id)},
      band: "B" as const,
      speaker: ${JSON.stringify(card.speaker)},
      targetWord: ${JSON.stringify(card.targetWord)},
      sentence: ${JSON.stringify(card.sentence)},
      pinyin: ${JSON.stringify(card.pinyin)},
      translation: ${JSON.stringify(card.translation)},
      distractors: [${distractors}],
      grammarNote: ${JSON.stringify(card.grammarNote)},
      chunks: [
${chunks}
      ],
      hintText: ${JSON.stringify(card.chunks[0])},
    }`;
}

// Complete episode 12 - fix the broken last episode
episodes[11].cards = [
  {
    id: "STORY-056",
    speaker: "alen",
    targetWord: "夜市",
    sentence: "最後一晚，阿倫帶隆志去寧夏夜市，說要請他吃最後一頓道地小吃。",
    pinyin: "zuì hòu yī wǎn, ā lún dài lóng zhì qù níng xià yè shì, shuō yào qǐng tā chī zuì hòu yī dùn dào dì xiǎo chī.",
    translation: "最後の夜、阿倫は隆志を寧夏夜市に連れて行き、最後の道地小吃をご馳走すると言った。",
    distractors: ["市場", "晚會", "商店"],
    grammarNote: "「夜市（yè shì）」は「夜市」。台湾文化の象徴的な場所として頻出します。",
    chunks: ["最後一晚，", "阿倫帶隆志去寧夏夜市，", "說要請他吃", "最後一頓道地小吃。"],
  },
  {
    id: "STORY-057",
    speaker: "alen",
    targetWord: "道地",
    sentence: "阿倫介紹：「這家的胡椒餅很道地，老板每天現做，很多老客人。」",
    pinyin: "ā lún jiè shào: 「zhè jiā de hú jiāo bǐng hěn dào dì, lǎo bǎn měi tiān xiàn zuò, hěn duō lǎo kè rén.」",
    translation: "阿倫は紹介した。「この店の胡椒餅はとても道地で、店主が毎日焼きたて。常連も多いよ。」",
    distractors: ["地道", "正宗", "特別"],
    grammarNote: "「道地（dào dì）」は台湾華語で「本場の、地元らしい」。グルメ紹介で頻出します。",
    chunks: ["阿倫介紹：", "「這家的胡椒餅很道地，", "老板每天現做，", "很多老客人。」"],
  },
  {
    id: "STORY-058",
    speaker: "alen",
    targetWord: "接待",
    sentence: "阿倫教隆志：「接待客戶時，主動倒茶和介紹菜色，都是基本的禮貌。」",
    pinyin: "ā lún jiào lóng zhì: 「jiē dài kè hù shí, zhǔ dòng dào chá hé jiè shào cài sè, dōu shì jī běn de lǐ mào.」",
    translation: "阿倫は隆志に教えた。「クライアント接待の際、積極的にお茶を注ぎ料理を紹介するのは基本マナーだよ。」",
    distractors: ["招待", "招呼", "服務"],
    grammarNote: "「接待（jiē dài）」は「接待する」。ビジネスマナーや台湾の食文化の文脈で使われます。",
    chunks: ["阿倫教隆志：", "「接待客戶時，", "主動倒茶和介紹菜色，", "都是基本的禮貌。」"],
  },
  {
    id: "STORY-059",
    speaker: "takashi",
    targetWord: "選擇",
    sentence: "隆志認真思考：「我開始考慮，未来要留在台湾發展，還是回日本工作。」",
    pinyin: "lóng zhì rèn zhēn sī kǎo: 「wǒ kāi shǐ kǎo lǜ, wèi lái yào liú zài tái wán fā zhǎn, hái shì huí rì běn gōng zuò.」",
    translation: "隆志は真剣に考えた。「将来台湾に残って発展するか、日本に戻って働くか、選択を始めている。」",
    distractors: ["決定", "打算", "計畫"],
    grammarNote: "「選擇（xuǎn zé）」は「選択する」。キャリアや人生の岐路で使われる語彙です。",
    chunks: ["隆志認真思考：", "「我開始考慮，", "未来要留在台湾發展，", "還是回日本工作。」"],
  },
  {
    id: "STORY-060",
    speaker: "takashi",
    targetWord: "決心",
    sentence: "隆志舉起杯珍奶，笑著說：「我下定決心，要在台湾繼續精進華語和專業能力。」",
    pinyin: "lóng zhì jǔ qǐ bēi zhēn nǎi, xiào zhe shuō: 「wǒ xià dìng jué xīn, yào zài tái wán jì xù jīng jìn huá yǔ hé zhuān yè néng lì.」",
    translation: "隆志はタピオカティーを掲げ、笑って言った。「台湾で華語と専門能力をさらに磨くと決心した。」",
    distractors: ["決定", "打算", "希望"],
    grammarNote: "「決心（jué xīn）」は「決心する」。物語のクライマックスで意志を表明する際に使われます。",
    chunks: ["隆志舉起杯珍奶，", "笑著說：", "「我下定決心，", "要在台湾繼續精進華語和專業能力。」"],
  },
];

// Fix STORY-048 sentence - targetWord 意見
episodes[9].cards[2].sentence = "隆志在會議中提出意見：「我認為可以先做小規模測試，再決定是否上線。」";

// Fix STORY-059 - 選擇 must be in sentence
episodes[11].cards[3].sentence = "隆志認真思考：「我開始考慮未来的選擇，要留在台湾發展，還是回日本工作。」";
episodes[11].cards[3].translation = "隆志は真剣に考えた。「将来台湾に残って発展するか、日本に戻るか、未来の選択を考え始めている。」";

// Fix STORY-041 海边 -> 海邊
episodes[8].cards[0].sentence = "阿倫提醒隆志：「在海邊要尊重環境，不要亂丟垃圾，也不要破壞珊瑚。」";
episodes[8].cards[0].chunks = ["阿倫提醒隆志：", "「在海邊要尊重環境，", "不要亂丟垃圾，", "也不要破壞珊瑚。」"];

// Fix STORY-048 chunks
episodes[9].cards[2].chunks = ["隆志在會議中提出意見：", "「我認為可以先做", "小規模測試，", "再決定是否上線。」"];

// Re-validate
for (const ep of episodes) {
  if (ep.cards.length !== 5) throw new Error(`Episode ${ep.episodeNumber} has ${ep.cards.length} cards`);
  for (const card of ep.cards) {
    if (!card.sentence.includes(card.targetWord)) {
      throw new Error(`${card.id}: targetWord "${card.targetWord}" not in sentence: ${card.sentence}`);
    }
  }
}

const episodeBlocks = episodes.map((ep) => {
  const cards = ep.cards.map(serializeCard).join(",\n");
  return `  {
    episodeNumber: ${ep.episodeNumber},
    title: ${JSON.stringify(ep.title)},
    subtitle: ${JSON.stringify(ep.subtitle)},
    synopsis: ${JSON.stringify(ep.synopsis)},
    cards: [
${cards}
    ],
  }`;
});

const output = `import type { StoryEpisode } from "./types";

export const STORY_EPISODES: StoryEpisode[] = [
${episodeBlocks.join(",\n")}
];

/** 全60カードをフラット配列で取得（バリデーション用） */
export const storyModeFlatCards = STORY_EPISODES.flatMap((ep) => ep.cards);
`;

const outPath = path.join(process.cwd(), "src/data/storyMode/episodes.ts");
fs.writeFileSync(outPath, output, "utf8");
console.log(`Wrote ${outPath} with ${episodes.length} episodes, ${episodes.reduce((n, e) => n + e.cards.length, 0)} cards`);
