import type { SentenceCard } from "@/types";

export const bandBLevel4Data: SentenceCard[] = [
  {
    "id": "B-001",
    "band": "B",
    "targetWord": "其實",
    "distractors": [
      "如果",
      "雖然",
      "因為"
    ],
    "grammarNote": "「其實（実は）」は、第一印象や予想と違う事実を補足する時に使います。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他看起來很嚴肅，其實只要熟悉了就會發現他超愛講冷笑話。",
        "pinyin": "suī rán tā kàn qǐ lái hěn yán sù，qí shí zhǐ yào shú xī le jiù huì fā xiàn tā chāo ài jiǎng lěng xiào huà。",
        "japanese": "彼はとても厳しそうに見えますが、実は慣れてみると超寒いジョークを言うのが大好きだとわかります。",
        "chunks": [
          "雖然他看起來很嚴肅",
          "其實只要熟悉了",
          "就會發現他超愛講冷笑話"
        ],
        "hintText": "雖然他看起來很嚴肅，"
      },
      {
        "situation": "店舗・サービス",
        "category": "店舗・サービス",
        "chinese": "因為那家店門口常常排很多人，所以我以為很貴，其實打折後超划算。",
        "pinyin": "yīn wèi nà jiā diàn mén kǒu cháng cháng pái hěn duō rén，suǒ yǐ wǒ yǐ wéi hěn guì，qí shí dǎ zhé hòu chāo huá suàn。",
        "japanese": "あの店の入り口にはいつもたくさん人が並んでいるので、高いと思っていましたが、実は割引後はすごくお得です。",
        "chunks": [
          "因為那家店門口常常排很多人",
          "所以我以為很貴",
          "其實打折後超划算"
        ],
        "hintText": "因為那家店門口常常排很多人，所以我以為很貴，"
      },
      {
        "situation": "生活トラブル",
        "category": "生活トラブル",
        "chinese": "只要看到機車被拖吊，雖然當下很生氣，其實想想是自己違規停車。",
        "pinyin": "zhǐ yào kàn dào jī chē bèi tuō diào，suī rán dāng xià hěn shēng qì，qí shí xiǎng xiǎng shì zì jǐ wéi guī tíng chē。",
        "japanese": "バイクがレッカー移動されるのを見ると、その時はとても腹が立ちますが、実は考えてみると自分が違法駐車したからです。",
        "chunks": [
          "只要看到機車被拖吊",
          "雖然當下很生氣",
          "其實想想是自己違規停車"
        ],
        "hintText": "只要看到機車被拖吊，雖然當下很生氣，"
      }
    ]
  },
  {
    "id": "B-002",
    "band": "B",
    "targetWord": "滿意",
    "distractors": [
      "生氣",
      "失望",
      "緊張"
    ],
    "grammarNote": "「對 + 名詞 + 很滿意」で「〜に満足している」を表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我對兒子的成績不是非常滿意，但只要他努力就好。",
        "pinyin": "suī rán wǒ duì ér zi de chéng jì bú shì fēi cháng mǎn yì, dàn zhǐ yào tā nǔ lì jiù hǎo.",
        "japanese": "息子の成績にはあまり満足していないけれど、彼が努力さえすればそれでいい。",
        "chunks": [
          "雖然我對兒子的成績不是非常滿意",
          "但只要他努力就好"
        ],
        "hintText": "雖然我對兒子的成績不是非常"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的服務態度讓我很滿意，所以我決定下次再來。",
        "pinyin": "yīn wèi zhè jiā cān tīng de fú wù tài dù ràng wǒ hěn mǎn yì, suǒ yǐ wǒ jué dìng xià cì zài lái.",
        "japanese": "このレストランのサービス態度に満足したので、また来ることにした。",
        "chunks": [
          "因為這家餐廳的服務態度讓我很滿意",
          "所以我決定下次再來"
        ],
        "hintText": "因為這家餐廳的服務態度讓我"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然我對機車維修的價格不是很滿意，但是因為技術很好就算了。",
        "pinyin": "suī rán wǒ duì jī chē wéi xiū de jià gé bú shì hěn mǎn yì, dàn shì yīn wèi jì shù hěn hǎo jiù suàn le.",
        "japanese": "バイクの修理代にはあまり満足していないけれど、技術が良いのでまあいいことにした。",
        "chunks": [
          "雖然我對機車維修的價格不是很滿意",
          "但是因為技術很好就算了"
        ],
        "hintText": "雖然我對機車維修的價格不是"
      }
    ]
  },
  {
    "id": "B-003",
    "band": "B",
    "targetWord": "嚴重",
    "distractors": [
      "輕鬆",
      "容易",
      "安全"
    ],
    "grammarNote": "「嚴重」は問題・影響などが「深刻だ、重大だ」という意味です。",
    "bossReading": {
      "text": "這次客戶對我們的新產品很不滿意，大家都以為這只是個小問題。但[ ? ]情況非常嚴重，如果不趕快處理，可能會影響公司的名譽。",
      "targetWord": "其實",
      "distractors": [
        "反而",
        "因此",
        "原來"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "前文の「みんな小さな問題だと思っていた」という予想に対し、後文で「非常に深刻だ（嚴重）」という事実を提示しているため、「其實（実は）」が入ります。文脈の頭で「滿意（満足する）」の否定形も効果的に使われています。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他道歉了，但這次的誤會對我們的友誼影響很嚴重。",
        "pinyin": "suī rán tā dào qiàn le, dàn zhè cì de wù huì duì wǒ men de yǒu yì yǐng xiǎng hěn yán zhòng.",
        "japanese": "彼は謝ったけど、今回の誤解は私たちの友情に与える影響がとても深刻だ。",
        "chunks": [
          "雖然他道歉了",
          "但這次的誤會",
          "對我們的友誼影響很嚴重"
        ],
        "hintText": "雖然他道歉了，但這次的誤會對我們的友誼影響"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為客人投訴服務態度，所以店長說這個問題很嚴重。",
        "pinyin": "yīn wèi kè rén tóu sù fú wù tài dù, suǒ yǐ diàn zhǎng shuō zhè gè wèn tí hěn yán zhòng.",
        "japanese": "お客様がサービス態度を苦情したので、店長はこの問題は深刻だと言った。",
        "chunks": [
          "因為客人投訴服務態度",
          "所以店長說",
          "這個問題很嚴重"
        ],
        "hintText": "因為客人投訴服務態度，所以店長說這個問題"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要健保卡遺失，補辦手續就會變得非常嚴重麻煩。",
        "pinyin": "zhǐ yào jiàn bǎo kǎ yí shī, bǔ bàn shǒu xù jiù huì biàn dé fēi cháng yán zhòng má fan.",
        "japanese": "健康保険カードをなくすと、再発行手続きがとても面倒で深刻になる。",
        "chunks": [
          "只要健保卡遺失",
          "補辦手續就會變得",
          "非常嚴重麻煩"
        ],
        "hintText": "只要健保卡遺失，補辦手續就會變得"
      }
    ]
  },
  {
    "id": "B-004",
    "band": "B",
    "targetWord": "保護",
    "distractors": [
      "破壞",
      "發現",
      "改變"
    ],
    "grammarNote": "「為了〜」は目的を表し、「〜のために」という意味になります。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然工作很忙，但是為了保護家人的健康，我還是會定期帶他們去做健康檢查。",
        "pinyin": "suī rán gōng zuò hěn máng, dàn shì wèi le bǎo hù jiā rén de jiàn kāng, wǒ hái shì huì dìng qī dài tā men qù zuò jiàn kāng jiǎn chá.",
        "japanese": "仕事はとても忙しいけれど、家族の健康を守るために、定期的に健康診断に連れて行きます。",
        "chunks": [
          "雖然工作很忙",
          "但是為了保護家人的健康",
          "我還是會定期帶他們去做健康檢查"
        ],
        "hintText": "雖然工作很忙，但是"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的牛肉麵很好吃，所以為了保護他的名聲，老闆堅持使用新鮮的食材。",
        "pinyin": "yīn wèi zhè jiā diàn de niú ròu miàn hěn hǎo chī, suǒ yǐ wèi le bǎo hù tā de míng shēng, lǎo bǎn jiān chí shǐ yòng xīn xiān de shí cái.",
        "japanese": "この店の牛肉麺がとても美味しいので、その評判を守るために、店主は新鮮な食材を使い続けています。",
        "chunks": [
          "因為這家店的牛肉麵很好吃",
          "所以為了保護他的名聲",
          "老闆堅持使用新鮮的食材"
        ],
        "hintText": "因為這家店的牛肉麵很好吃，所以"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要記得把機車停在停車格內，就能為了保護自己的荷包，避免被開罰單。",
        "pinyin": "zhǐ yào jì de bǎ jī chē tíng zài tíng chē gé nèi, jiù néng wèi le bǎo hù zì jǐ de hé bāo, bì miǎn bèi kāi fá dān.",
        "japanese": "バイクを駐車枠内に停めることを覚えておけば、自分の財布を守るために、罰金を避けられます。",
        "chunks": [
          "只要記得把機車停在停車格內",
          "就能為了保護自己的荷包",
          "避免被開罰單"
        ],
        "hintText": "只要記得把機車停在停車格內，就能"
      }
    ]
  },
  {
    "id": "B-005",
    "band": "B",
    "targetWord": "垃圾",
    "distractors": [
      "行李",
      "禮物",
      "衣服"
    ],
    "grammarNote": "「把 + 目的語 + 動詞」で、対象をどう処理するかを強調する把構文になります。",
    "pronunciationNote": "🇹🇼 台湾華語の発音メモ：\nゴミを意味する「垃圾」は、台湾では「lè sè（ルーサー）」と発音します（大陸標準では lā jī）。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為媽媽很愛乾淨，所以只要我們把垃圾分類好，她就會很開心。",
        "pinyin": "yīn wèi mā ma hěn ài gān jìng, suǒ yǐ zhǐ yào wǒ men bǎ lè sè fēn lèi hǎo, tā jiù huì hěn kāi xīn.",
        "japanese": "お母さんはとてもきれい好きなので、私たちがゴミを分別さえすれば、彼女はとても喜びます。",
        "chunks": [
          "因為媽媽很愛乾淨",
          "所以只要我們把垃圾分類好",
          "她就會很開心"
        ],
        "hintText": "因為媽媽很愛乾淨，所以只要我們"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然店員說可以打折，但是我還是先把垃圾發票對完獎再說。",
        "pinyin": "suī rán diàn yuán shuō kě yǐ dǎ zhé, dàn shì wǒ hái shì xiān bǎ lè sè fā piào duì wán jiǎng zài shuō.",
        "japanese": "店員は割引できると言ったけど、私はまずゴミのレシートの抽選を確認してからにします。",
        "chunks": [
          "雖然店員說可以打折",
          "但是我還是先把垃圾發票對完獎",
          "再說"
        ],
        "hintText": "雖然店員說可以打折，但是我還是先"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為鄰居亂丟垃圾，所以只要我們把監視器畫面調出來，就可以舉報。",
        "pinyin": "yīn wèi lín jū luàn diū lè sè, suǒ yǐ zhǐ yào wǒ men bǎ jiān shì qì huà miàn diào chū lái, jiù kě yǐ jǔ bào.",
        "japanese": "隣人がゴミを散らかすので、私たちが監視カメラの映像を引き出せば、通報できます。",
        "chunks": [
          "因為鄰居亂丟垃圾",
          "所以只要我們把監視器畫面調出來",
          "就可以舉報"
        ],
        "hintText": "因為鄰居亂丟垃圾，所以只要我們"
      }
    ]
  },
  {
    "id": "B-006",
    "band": "B",
    "targetWord": "解決",
    "distractors": [
      "發生",
      "忘記",
      "討論"
    ],
    "grammarNote": "「解決」は問題を処理して“解決する”という意味で、名詞「問題」とよく一緒に使います。",
    "bossReading": {
      "text": "為了保護我們的海洋環境，大家應該減少製造塑膠垃圾。這不只是一個國家的責任，而是全世界必須共同面對並[ ? ]的問題。",
      "targetWord": "解決",
      "distractors": [
        "發現",
        "發生",
        "討論"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "海洋環境の「保護」とプラスチック「垃圾（ゴミ）」について述べており、最後は世界が共同で直面し「解決する」問題であると結んでいます。単に「討論（議論する）」だけでなく、行動を伴う文脈のため「解決」が最適です。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他們吵架了，但是只要好好溝通就能解決問題。",
        "pinyin": "suīrán tāmen chǎojià le, dànshì zhǐyào hǎohao gōutōng jiù néng jiějué wèntí.",
        "japanese": "彼らは喧嘩したけれど、しっかりコミュニケーションを取れば問題を解決できます。",
        "chunks": [
          "雖然他們吵架了",
          "但是只要好好溝通",
          "就能解決問題"
        ],
        "hintText": "雖然他們吵架了，但是只要好好溝通"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為商品有瑕疵，所以店家願意退錢來解決問題。",
        "pinyin": "yīnwèi shāngpǐn yǒu xiácī, suǒyǐ diànjiā yuànyì tuì qián lái jiějué wèntí.",
        "japanese": "商品に欠陥があったので、店は返金して問題を解決してくれました。",
        "chunks": [
          "因為商品有瑕疵",
          "所以店家願意退錢",
          "來解決問題"
        ],
        "hintText": "因為商品有瑕疵，所以店家願意退錢"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要找到漏水的原因，就能徹底解決這個麻煩。",
        "pinyin": "zhǐyào zhǎodào lòushuǐ de yuányīn, jiù néng chèdǐ jiějué zhège máfan.",
        "japanese": "水漏れの原因さえ見つければ、この面倒を完全に解決できます。",
        "chunks": [
          "只要找到漏水的原因",
          "就能徹底解決",
          "這個麻煩"
        ],
        "hintText": "只要找到漏水的原因"
      }
    ]
  },
  {
    "id": "B-007",
    "band": "B",
    "targetWord": "雖然",
    "distractors": [
      "因為",
      "如果",
      "只有"
    ],
    "grammarNote": "「雖然〜，可是...」は逆接で、「〜だけれども、しかし...」を表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我妹妹很愛講電話，可是她每次都忘記繳手機費。",
        "pinyin": "suī rán wǒ mèi mei hěn ài jiǎng diàn huà, kě shì tā měi cì dōu wàng jì jiǎo shǒu jī fèi.",
        "japanese": "私の妹は電話をするのが大好きだけど、毎回携帯代を払うのを忘れます。",
        "chunks": [
          "雖然我妹妹很愛講電話",
          "可是她每次都忘記繳手機費"
        ],
        "hintText": "雖然"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家餐廳的價格比較高，可是他們的服務真的很好。",
        "pinyin": "suī rán zhè jiā cān tīng de jià gé bǐ jiào gāo, kě shì tā men de fú wù zhēn de hěn hǎo.",
        "japanese": "このレストランは値段が高いけど、サービスは本当に良いです。",
        "chunks": [
          "雖然這家餐廳的價格比較高",
          "可是他們的服務真的很好"
        ],
        "hintText": "雖然"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然今天下雨，可是我還是騎機車去上班。",
        "pinyin": "suī rán jīn tiān xià yǔ, kě shì wǒ hái shì qí jī chē qù shàng bān.",
        "japanese": "今日は雨だけど、それでもバイクで出勤しました。",
        "chunks": [
          "雖然今天下雨",
          "可是我還是騎機車去上班"
        ],
        "hintText": "雖然"
      }
    ]
  },
  {
    "id": "B-008",
    "band": "B",
    "targetWord": "習慣",
    "distractors": [
      "準備",
      "發現",
      "放棄"
    ],
    "grammarNote": "「習慣」は名詞としても動詞としても使え、「習慣 + V」なら“〜するのが習慣だ”になります。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我已經習慣一個人住，但是偶爾還是會想家。",
        "pinyin": "suī rán wǒ yǐ jīng xí guàn yí gè rén zhù, dàn shì ǒu ěr hái shì huì xiǎng jiā.",
        "japanese": "一人暮らしにはもう慣れているけど、たまには家が恋しくなる。",
        "chunks": [
          "雖然我已經習慣",
          "一個人住",
          "但是偶爾還是會想家"
        ],
        "hintText": "雖然我已經"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為習慣用載具存發票，所以每次結帳都會刷手機條碼。",
        "pinyin": "yīn wèi xí guàn yòng zài jù cún fā piào, suǒ yǐ měi cì jié zhàng dōu huì shuā shǒu jī tiáo mǎ.",
        "japanese": "キャリアにレシートを保存するのに慣れているので、毎回会計時にスマホのバーコードをスキャンしてもらう。",
        "chunks": [
          "因為習慣用載具存發票",
          "所以每次結帳",
          "都會刷手機條碼"
        ],
        "hintText": "因為"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要習慣搭捷運通勤，就不會覺得轉車很麻煩。",
        "pinyin": "zhǐ yào xí guàn dā jié yùn tōng qín, jiù bú huì jué de zhuǎn chē hěn má fan.",
        "japanese": "MRT通勤に慣れさえすれば、乗り換えが面倒だとは思わなくなる。",
        "chunks": [
          "只要習慣搭捷運通勤",
          "就不會覺得",
          "轉車很麻煩"
        ],
        "hintText": "只要"
      }
    ]
  },
  {
    "id": "B-009",
    "band": "B",
    "targetWord": "發展",
    "distractors": [
      "態度",
      "經驗",
      "環境"
    ],
    "grammarNote": "「對 + 名詞 + 有幫助」で「〜にとって役に立つ」を表し、「發展」は“発展・伸び”の意味です。",
    "bossReading": {
      "text": "[ ? ]這家公司的薪水不算特別高，但我已經習慣了這裡的工作環境。而且老闆很願意培養新人，這對我未來的職業發展會有很大的幫助。",
      "targetWord": "雖然",
      "distractors": [
        "既然",
        "因為",
        "不但"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「給料は高くない」というマイナス面と、「環境に『習慣（慣れている）』であり将来の『發展（発展）』に役立つ」というプラス面を逆接で繋いでいるため、「雖然（〜だけれども）」が正解です。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為我常跟家人討論，所以他們對我的職涯發展很有幫助。",
        "pinyin": "yīn wèi wǒ cháng gēn jiā rén tǎo lùn, suǒ yǐ tā men duì wǒ de zhí yá fā zhǎn hěn yǒu bāng zhù.",
        "japanese": "私はよく家族と話し合うので、彼らは私のキャリア発展に非常に役立っています。",
        "chunks": [
          "因為我常跟家人討論",
          "所以他們對我的職涯發展",
          "很有幫助"
        ],
        "hintText": "因為我常跟家人討論，所以他們對我的職涯發展"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要常去那間書店看書，老闆對我的知識發展就很有幫助。",
        "pinyin": "zhǐ yào cháng qù nà jiān shū diàn kàn shū, lǎo bǎn duì wǒ de zhī shi fā zhǎn jiù hěn yǒu bāng zhù.",
        "japanese": "あの本屋に頻繁に通って本を読めば、店主は私の知識の発展に大いに役立ちます。",
        "chunks": [
          "只要常去那間書店看書",
          "老闆對我的知識發展",
          "就很有幫助"
        ],
        "hintText": "只要常去那間書店看書，老闆對我的知識發展"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然這次的發票問題很麻煩，但處理它對我的應變發展很有幫助。",
        "pinyin": "suī rán zhè cì de fā piào wèn tí hěn má fan, dàn chǔ lǐ tā duì wǒ de yìng biàn fā zhǎn hěn yǒu bāng zhù.",
        "japanese": "今回の領収書の問題は面倒ですが、それを処理することは私の対応力の発展に非常に役立ちます。",
        "chunks": [
          "雖然這次的發票問題很麻煩",
          "但處理它對我的應變發展",
          "很有幫助"
        ],
        "hintText": "雖然這次的發票問題很麻煩，但處理它對我的應變發展"
      }
    ]
  },
  {
    "id": "B-010",
    "band": "B",
    "targetWord": "考慮",
    "distractors": [
      "放棄",
      "擔心",
      "休息"
    ],
    "grammarNote": "「考慮」は“よく考えて検討する”という意味で、「考慮是否...」の形でよく使います。",
    "pronunciationNote": "🇹🇼 台湾華語の発音メモ：\n「考慮（kǎo lǜ）」の「慮」は、台湾の日常会話では「lù（ルー）」と発音されることがよくあります。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為我還在考慮是否要跟家人一起去旅行，所以暫時沒有訂機票。",
        "pinyin": "yīn wèi wǒ hái zài kǎo lǜ shì fǒu yào gēn jiā rén yī qǐ qù lǚ xíng，suǒ yǐ zàn shí méi yǒu dìng jī piào。",
        "japanese": "まだ家族と一緒に旅行に行くかどうか検討中なので、とりあえず航空券は予約していません。",
        "chunks": [
          "因為我還在考慮是否要跟家人一起去旅行",
          "所以暫時沒有訂機票"
        ],
        "hintText": "因為我還在考慮"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家餐廳的評價很高，但我還在考慮是否要訂位。",
        "pinyin": "suī rán zhè jiā cān tīng de píng jià hěn gāo，dàn wǒ hái zài kǎo lǜ shì fǒu yào dìng wèi。",
        "japanese": "このレストランの評価は高いですが、まだ予約するかどうか検討中です。",
        "chunks": [
          "雖然這家餐廳的評價很高",
          "但我還在考慮是否要訂位"
        ],
        "hintText": "雖然這家餐廳的評價很高，但我還在考慮"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要主管考慮是否要調整專案進度，我們就會重新安排工作。",
        "pinyin": "zhǐ yào zhǔ guǎn kǎo lǜ shì fǒu yào tiáo zhěng zhuān àn jìn dù，wǒ men jiù huì chóng xīn ān pái gōng zuò。",
        "japanese": "上司がプロジェクトの進捗を調整するかどうか検討すれば、私たちは仕事を再調整します。",
        "chunks": [
          "只要主管考慮是否要調整專案進度",
          "我們就會重新安排工作"
        ],
        "hintText": "只要主管考慮"
      }
    ]
  },
  {
    "id": "B-011",
    "band": "B",
    "targetWord": "放棄",
    "distractors": [
      "繼續",
      "開始",
      "討論"
    ],
    "grammarNote": "「放棄」は“諦める/手放す”という意味で、計畫・想法などと一緒に使えます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為家人一直反對，所以我最後放棄了出國留學的計畫。",
        "pinyin": "yīn wèi jiā rén yì zhí fǎn duì, suǒ yǐ wǒ zuì hòu fàng qì le chū guó liú xué de jì huà.",
        "japanese": "家族がずっと反対していたので、私は最後に留学の計画を諦めました。",
        "chunks": [
          "因為家人一直反對",
          "所以我最後",
          "放棄了出國留學的計畫"
        ],
        "hintText": "因為家人一直反對，所以我最後"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家店的發票可以打九折，但我還是放棄了購買。",
        "pinyin": "suī rán zhè jiā diàn de fā piào kě yǐ dǎ jiǔ zhé, dàn wǒ hái shì fàng qì le gòu mǎi.",
        "japanese": "この店のレシートで10%オフになりますが、私は購入を諦めました。",
        "chunks": [
          "雖然這家店的發票可以打九折",
          "但我還是",
          "放棄了購買"
        ],
        "hintText": "雖然這家店的發票可以打九折，但我還是"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要機車修不好，我就只能放棄騎車上班了。",
        "pinyin": "zhǐ yào jī chē xiū bù hǎo, wǒ jiù zhǐ néng fàng qì qí chē shàng bān le.",
        "japanese": "バイクが直らなければ、バイクで通勤するのを諦めるしかありません。",
        "chunks": [
          "只要機車修不好",
          "我就只能",
          "放棄騎車上班了"
        ],
        "hintText": "只要機車修不好，我就只能"
      }
    ]
  },
  {
    "id": "B-012",
    "band": "B",
    "targetWord": "鼓勵",
    "distractors": [
      "要求",
      "拒絕",
      "改變"
    ],
    "grammarNote": "「鼓勵 + 人 + 動詞」で「人に〜するよう励ます/促す」を表します。",
    "bossReading": {
      "text": "遇到困難的時候，我曾經認真考慮過要[ ? ]這個計畫。幸好當時有朋友的鼓勵，我才重新找回自信，決定堅持到底。",
      "targetWord": "放棄",
      "distractors": [
        "拒絕",
        "解決",
        "忘記"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「困難に直面して〜しようと『考慮（考慮する）』した」が、友人の「鼓勵（励まし）」のおかげで最後までやり抜く決心をしたという文脈から、空欄にはマイナスの行動である「放棄（諦める）」が入ります。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然媽媽鼓勵我多交朋友，但是我還是比較喜歡待在家裡看書。",
        "pinyin": "suī rán mā ma gǔ lì wǒ duō jiāo péng yǒu，dàn shì wǒ hái shì bǐ jiào xǐ huān dāi zài jiā lǐ kàn shū。",
        "japanese": "母は私にもっと友達を作るように勧めますが、私はやっぱり家で本を読む方が好きです。",
        "chunks": [
          "雖然媽媽鼓勵我",
          "多交朋友",
          "但是我還是比較喜歡待在家裡看書"
        ],
        "hintText": "雖然媽媽"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為公司鼓勵員工使用健保卡預約疫苗，所以大家都趕快去申請。",
        "pinyin": "yīn wèi gōng sī gǔ lì yuán gōng shǐ yòng jiàn bǎo kǎ yù yuē yì miáo，suǒ yǐ dà jiā dōu gǎn kuài qù shēn qǐng。",
        "japanese": "会社が従業員に健康保険証でワクチン予約をするよう勧めているので、みんな急いで申請に行きました。",
        "chunks": [
          "因為公司鼓勵員工",
          "使用健保卡預約疫苗",
          "所以大家都趕快去申請"
        ],
        "hintText": "因為公司"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要店員鼓勵客人辦會員卡，就可以享有打折優惠。",
        "pinyin": "zhǐ yào diàn yuán gǔ lì kè rén bàn huì yuán kǎ，jiù kě yǐ xiǎng yǒu dǎ zhé yōu huì。",
        "japanese": "店員がお客様に会員カードを作るよう勧めさえすれば、割引の特典を受けることができます。",
        "chunks": [
          "只要店員鼓勵客人",
          "辦會員卡",
          "就可以享有打折優惠"
        ],
        "hintText": "只要店員"
      }
    ]
  },
  {
    "id": "B-013",
    "band": "B",
    "targetWord": "了解",
    "distractors": [
      "決定",
      "準備",
      "影響"
    ],
    "grammarNote": "「了解」は“事情を把握して理解する”という意味で、情報・文化などにも使えます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我跟他認識不久，但已經很了解他的個性了。",
        "pinyin": "suī rán wǒ gēn tā rèn shi bù jiǔ, dàn yǐ jīng hěn liǎo jiě tā de gè xìng le.",
        "japanese": "彼とは知り合って間もないけれど、もう彼の性格はよく理解している。",
        "chunks": [
          "雖然我跟他認識不久",
          "但已經很了解",
          "他的個性了"
        ],
        "hintText": "雖然我跟他認識不久，但已經很"
      },
      {
        "situation": "店舗・サービス",
        "language": "zh-TW",
        "chinese": "因為想了解這家店的優惠，所以我問店員有沒有發票兌獎活動。",
        "pinyin": "yīn wèi xiǎng liǎo jiě zhè jiā diàn de yōu huì, suǒ yǐ wǒ wèn diàn yuán yǒu méi yǒu fā piào duì jiǎng huó dòng.",
        "japanese": "この店の特典を知りたかったので、店員にレシートの抽選があるか尋ねた。",
        "chunks": [
          "因為想了解這家店的優惠",
          "所以我問店員",
          "有沒有發票兌獎活動"
        ],
        "hintText": "因為想了解這家店的優惠，所以我問店員"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要搭捷運前先了解路線，就不會迷路了。",
        "pinyin": "zhǐ yào dā jié yùn qián xiān liǎo jiě lù xiàn, jiù bú huì mí lù le.",
        "japanese": "MRTに乗る前に路線を把握しておけば、迷子にならない。",
        "chunks": [
          "只要搭捷運前先了解路線",
          "就不會迷路了"
        ],
        "hintText": "只要搭捷運前先了解路線，"
      }
    ]
  },
  {
    "id": "B-014",
    "band": "B",
    "targetWord": "機會",
    "distractors": [
      "經驗",
      "環境",
      "問題"
    ],
    "grammarNote": "「機會（チャンス）」は可算名詞で、「一個好機會」のように量詞を伴います。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他最近很忙，但只要約好時間，還是會找機會跟家人吃飯。",
        "pinyin": "suī rán tā zuì jìn hěn máng, dàn zhǐ yào yuē hǎo shí jiān, hái shì huì zhǎo jī huì gēn jiā rén chī fàn.",
        "japanese": "彼は最近とても忙しいけれど、時間を約束さえすれば、やはりチャンスを見つけて家族と食事をする。",
        "chunks": [
          "雖然他最近很忙",
          "但只要約好時間",
          "還是會找機會跟家人吃飯"
        ],
        "hintText": "雖然他最近很忙，但只要約好時間，還是會找"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的服務很好，所以我想把握機會買他們的會員卡。",
        "pinyin": "yīn wèi zhè jiā diàn de fú wù hěn hǎo, suǒ yǐ wǒ xiǎng bǎ wò jī huì mǎi tā men de huì yuán kǎ.",
        "japanese": "この店のサービスがとても良いので、チャンスを掴んで会員カードを買いたい。",
        "chunks": [
          "因為這家店的服務很好",
          "所以我想把握機會",
          "買他們的會員卡"
        ],
        "hintText": "因為這家店的服務很好，所以我想把握"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要搭捷運去機場，就不會錯過登機的機會。",
        "pinyin": "zhǐ yào dā jié yùn qù jī chǎng, jiù bù huì cuò guò dēng jī de jī huì.",
        "japanese": "MRTで空港に行きさえすれば、搭乗のチャンスを逃すことはない。",
        "chunks": [
          "只要搭捷運去機場",
          "就不會錯過",
          "登機的機會"
        ],
        "hintText": "只要搭捷運去機場，就不會錯過"
      }
    ]
  },
  {
    "id": "B-015",
    "band": "B",
    "targetWord": "態度",
    "distractors": [
      "能力",
      "興趣",
      "習慣"
    ],
    "grammarNote": "「態度」は“姿勢・態度”の意味で、「看重…的態度」のように評価対象としても使えます。",
    "bossReading": {
      "text": "想要進入這家大公司工作，你必須先了解他們的企業文化。在面試時，展現出積極學習的[ ? ]，才能為自己爭取到錄取的機會。",
      "targetWord": "態度",
      "distractors": [
        "程度",
        "習慣",
        "經驗"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "面接で採用の「機會（チャンス）」を勝ち取るためには、企業の文化を「了解（深く理解する）」し、積極的な「態度（姿勢、態度）」を示す必要があるという文脈です。「展現出（〜を示す）」と結びつく名詞が選ばれます。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他平常話不多，但是我非常欣賞他做事認真的態度。",
        "pinyin": "suī rán tā píng cháng huà bù duō, dàn shì wǒ fēi cháng xīn shǎng tā zuò shì rèn zhēn de tài dù.",
        "japanese": "彼は普段はあまり話さないけれど、私は彼の仕事に対する真剣な態度をとても評価しています。",
        "chunks": [
          "雖然他平常話不多",
          "但是我非常欣賞",
          "他做事認真的態度"
        ],
        "hintText": "雖然他平常話不多，但是我非常欣賞"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為店員的態度很差，所以我不打算再來這家餐廳消費。",
        "pinyin": "yīn wèi diàn yuán de tài dù hěn chà, suǒ yǐ wǒ bù dǎ suàn zài lái zhè jiā cān tīng xiāo fèi.",
        "japanese": "店員の態度がとても悪いので、もうこのレストランには来ないつもりです。",
        "chunks": [
          "因為店員的態度很差",
          "所以我不打算",
          "再來這家餐廳消費"
        ],
        "hintText": "因為店員的態度很差，所以"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要主管能看到我積極的態度，就有機會升遷。",
        "pinyin": "zhǐ yào zhǔ guǎn néng kàn dào wǒ jī jí de tài dù, jiù yǒu jī huì shēng qiān.",
        "japanese": "上司が私の積極的な態度を見てくれさえすれば、昇進のチャンスがあります。",
        "chunks": [
          "只要主管能看到",
          "我積極的態度",
          "就有機會升遷"
        ],
        "hintText": "只要主管能看到"
      }
    ]
  },
  {
    "id": "B-016",
    "band": "B",
    "targetWord": "討論",
    "distractors": [
      "準備",
      "放棄",
      "發現"
    ],
    "grammarNote": "「討論」は意見を出し合って話し合うことで、「開會討論」の形でよく使います。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為我們對孩子的教育方式意見不同，所以常常需要開會討論。",
        "pinyin": "yīn wèi wǒ men duì hái zi de jiào yù fāng shì yì jiàn bù tóng, suǒ yǐ cháng cháng xū yào kāi huì tǎo lùn.",
        "japanese": "因為我們對孩子的教育方式意見不同，所以常常需要開會討論。",
        "chunks": [
          "因為我們對孩子的教育方式意見不同",
          "所以常常需要",
          "開會討論"
        ],
        "hintText": "因為我們對孩子的教育方式意見不同，所以常常需要"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家餐廳的服務很好，但是我們還是要開會討論如何改善出餐速度。",
        "pinyin": "suī rán zhè jiā cān tīng de fú wù hěn hǎo, dàn shì wǒ men hái shì yào kāi huì tǎo lùn rú hé gǎi shàn chū cān sù dù.",
        "japanese": "雖然這家餐廳的服務很好，但是我們還是要開會討論如何改善出餐速度。",
        "chunks": [
          "雖然這家餐廳的服務很好",
          "但是我們還是要",
          "開會討論如何改善出餐速度"
        ],
        "hintText": "雖然這家餐廳的服務很好，但是我們還是要"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要鄰居不再製造噪音，我們就不需要跟管委會開會討論這件事。",
        "pinyin": "zhǐ yào lín jū bù zài zhì zào zào yīn, wǒ men jiù bù xū yào gēn guǎn wěi huì kāi huì tǎo lùn zhè jiàn shì.",
        "japanese": "只要鄰居不再製造噪音，我們就不需要跟管委會開會討論這件事。",
        "chunks": [
          "只要鄰居不再製造噪音",
          "我們就不需要",
          "跟管委會開會討論這件事"
        ],
        "hintText": "只要鄰居不再製造噪音，我們就不需要"
      }
    ]
  },
  {
    "id": "B-017",
    "band": "B",
    "targetWord": "經驗",
    "distractors": [
      "發現",
      "態度",
      "環境"
    ],
    "grammarNote": "「經驗」は“経験”で、「分享經驗（経験を共有する）」の形でもよく使います。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我沒有帶小孩的經驗，但只要多看書學習，就能慢慢上手。",
        "pinyin": "suī rán wǒ méi yǒu dài xiǎo hái de jīng yàn, dàn zhǐ yào duō kàn shū xué xí, jiù néng màn màn shàng shǒu.",
        "japanese": "子供を育てた経験はないけれど、本をたくさん読んで学べば、徐々に慣れていける。",
        "chunks": [
          "雖然我沒有帶小孩的",
          "經驗",
          "，但只要多看書學習，就能慢慢上手。"
        ],
        "hintText": "雖然我沒有帶小孩的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為店員服務經驗不足，所以結帳時忘記給發票，讓我覺得很困擾。",
        "pinyin": "yīn wèi diàn yuán fú wù jīng yàn bù zú, suǒ yǐ jié zhàng shí wàng jì gěi fā piào, ràng wǒ jué de hěn kùn rǎo.",
        "japanese": "店員のサービスの経験が不足していたため、会計時にレシートを渡すのを忘れて、とても困った。",
        "chunks": [
          "因為店員服務",
          "經驗",
          "不足，所以結帳時忘記給發票，讓我覺得很困擾。"
        ],
        "hintText": "因為店員服務"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要搭捷運的經驗夠多，就不會因為轉乘路線複雜而迷路。",
        "pinyin": "zhǐ yào dā jié yùn de jīng yàn gòu duō, jiù bù huì yīn wèi zhuǎn chéng lù xiàn fù zá ér mí lù.",
        "japanese": "MRTに乗る経験が十分にあれば、乗り換えルートが複雑でも迷うことはない。",
        "chunks": [
          "只要搭捷運的",
          "經驗",
          "夠多，就不會因為轉乘路線複雜而迷路。"
        ],
        "hintText": "只要搭捷運的"
      }
    ]
  },
  {
    "id": "B-018",
    "band": "B",
    "targetWord": "改變",
    "distractors": [
      "保護",
      "解決",
      "準備"
    ],
    "grammarNote": "「改變」は“変える/変わる”で、「改變流程（手順を変える）」のように使えます。",
    "bossReading": {
      "text": "在這次的會議中，大家討論了許多過去失敗的經驗。我們發現，如果想要在市場上生存，就必須[ ? ]目前的經營方式，不能再像以前一樣了。",
      "targetWord": "改變",
      "distractors": [
        "保護",
        "準備",
        "解決"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "過去の「經驗（経験）」を「討論（議論する）」した結果、「以前と同じではいけない」と気づき、経営方針を「変える」必要性に至っています。文脈から「改變（変える）」が最適です。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他已經改變了態度，但是家人還是對他不太信任。",
        "pinyin": "suī rán tā yǐ jīng gǎi biàn le tài dù，dàn shì jiā rén hái shì duì tā bù tài xìn rèn。",
        "japanese": "彼は態度を変えたけれども、家族はまだ彼をあまり信頼していない。",
        "chunks": [
          "雖然他已經",
          "改變了態度",
          "但是家人還是對他不太信任"
        ],
        "hintText": "雖然他已經"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為客人反應太慢，所以我們決定改變結帳流程。",
        "pinyin": "yīn wèi kè rén fǎn yìng tài màn，suǒ yǐ wǒ men jué dìng gǎi biàn jié zhàng liú chéng。",
        "japanese": "お客様が遅すぎると反応したので、私たちは会計手順を変更することに決めました。",
        "chunks": [
          "因為客人反應太慢",
          "所以我們決定",
          "改變結帳流程"
        ],
        "hintText": "因為客人反應太慢，所以我們決定"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要改變密碼，就不用擔心帳號被盜用了。",
        "pinyin": "zhǐ yào gǎi biàn mì mǎ，jiù bù yòng dān xīn zhàng hào bèi dào yòng le。",
        "japanese": "パスワードを変えさえすれば、アカウントが不正利用される心配はありません。",
        "chunks": [
          "只要改變密碼",
          "就不用擔心",
          "帳號被盜用了"
        ],
        "hintText": "只要"
      }
    ]
  },
  {
    "id": "B-019",
    "band": "B",
    "targetWord": "發現",
    "distractors": [
      "希望",
      "決定",
      "考慮"
    ],
    "grammarNote": "「發現 + 文」で“〜という事実に気づく/見つける”を表します。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為房東一直不處理漏水問題，所以我發現他根本不想修。",
        "pinyin": "yīn wèi fáng dōng yī zhí bù chǔ lǐ lòu shuǐ wèn tí, suǒ yǐ wǒ fā xiàn tā gēn běn bù xiǎng xiū.",
        "japanese": "大家さんがずっと水漏れの問題を処理してくれないので、彼は全然直す気がないことに気づきました。",
        "chunks": [
          "因為房東一直不處理漏水問題",
          "所以我發現",
          "他根本不想修"
        ],
        "hintText": "因為房東一直不處理漏水問題，所以我"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家餐廳的發票可以兌獎，但我發現他們服務態度很差。",
        "pinyin": "suī rán zhè jiā cān tīng de fā piào kě yǐ duì jiǎng, dàn wǒ fā xiàn tā men fú wù tài dù hěn chà.",
        "japanese": "このレストランはレシートで宝くじが引けるけど、サービス態度がとても悪いことに気づきました。",
        "chunks": [
          "雖然這家餐廳的發票可以兌獎",
          "但我發現",
          "他們服務態度很差"
        ],
        "hintText": "雖然這家餐廳的發票可以兌獎，但"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要健保卡過期，你就會發現看病變得很麻煩。",
        "pinyin": "zhǐ yào jiàn bǎo kǎ guò qī, nǐ jiù huì fā xiàn kàn bìng biàn de hěn má fan.",
        "japanese": "健康保険証が期限切れになると、受診がとても面倒になることに気づくでしょう。",
        "chunks": [
          "只要健保卡過期",
          "你就會發現",
          "看病變得很麻煩"
        ],
        "hintText": "只要健保卡過期，你就會"
      }
    ]
  },
  {
    "id": "B-020",
    "band": "B",
    "targetWord": "繼續",
    "distractors": [
      "開始",
      "放棄",
      "休息"
    ],
    "grammarNote": "「繼續 + 動詞」で“〜し続ける”という継続を表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然媽媽很忙，但她還是繼續幫我準備晚餐。",
        "pinyin": "suī rán mā ma hěn máng，dàn tā hái shì jì xù bāng wǒ zhǔn bèi wǎn cān。",
        "japanese": "母は忙しいけれど、それでも私のために夕食を準備し続けてくれます。",
        "chunks": [
          "雖然媽媽很忙",
          "但她還是",
          "繼續幫我準備晚餐"
        ],
        "hintText": "雖然媽媽很忙，但她還是"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為客人太多，所以我們必須繼續排隊等結帳。",
        "pinyin": "yīn wèi kè rén tài duō，suǒ yǐ wǒ men bì xū jì xù pái duì děng jié zhàng。",
        "japanese": "お客さんが多すぎるので、私たちは並んで会計を待ち続けなければなりません。",
        "chunks": [
          "因為客人太多",
          "所以我們必須",
          "繼續排隊等結帳"
        ],
        "hintText": "因為客人太多，所以我們必須"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要雨繼續下，明天捷運就可能會淹水。",
        "pinyin": "zhǐ yào yǔ jì xù xià，míng tiān jié yùn jiù kě néng huì yān shuǐ。",
        "japanese": "雨が降り続ければ、明日のMRTは水没するかもしれません。",
        "chunks": [
          "只要雨繼續下",
          "明天捷運",
          "就可能會淹水"
        ],
        "hintText": "只要雨繼續下，"
      }
    ]
  },
  {
    "id": "B-021",
    "band": "B",
    "targetWord": "準備",
    "distractors": [
      "發現",
      "解決",
      "改變"
    ],
    "grammarNote": "「準備」は“準備する”で、「準備 + 名詞」の形で用意する対象を言えます。",
    "bossReading": {
      "text": "我最近發現，如果開會前沒有先做好準備，討論時的效率就會非常差。因此，為了讓專案能[ ? ]順利進行，大家一定要提前看過資料。",
      "targetWord": "繼續",
      "distractors": [
        "開始",
        "發生",
        "放棄"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "事前の「準備」がないと非効率だと「發現（気づいた）」ため、プロジェクトをスムーズに進行「し続ける」ために資料の事前確認を求めています。「能繼續順利進行（順調に進行し続けられる）」という文脈になります。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我已經準備晚餐了，但是因為你臨時說要帶朋友來，所以我得再多準備一些菜。",
        "pinyin": "suī rán wǒ yǐ jīng zhǔn bèi wǎn cān le, dàn shì yīn wèi nǐ lín shí shuō yào dài péng yǒu lái, suǒ yǐ wǒ děi zài duō zhǔn bèi yī xiē cài.",
        "japanese": "もう夕食の準備はできていたけど、急に友達を連れてくると言うから、もう少し料理を追加で用意しないといけない。",
        "chunks": [
          "雖然我已經準備晚餐了",
          "但是因為你臨時說要帶朋友來",
          "所以我得再多準備一些菜"
        ],
        "hintText": "雖然我已經"
      },
      {
        "situation": "店舗・サービス",
        "category": "店舗・サービス",
        "chinese": "因為明天有買一送一的活動，所以我們今天就要開始準備特價標籤跟發票。",
        "pinyin": "yīn wèi míng tiān yǒu mǎi yī sòng yī de huó dòng, suǒ yǐ wǒ men jīn tiān jiù yào kāi shǐ zhǔn bèi tè jià biāo qiān gēn fā piào.",
        "japanese": "明日は1つ買うともう1つ無料のキャンペーンがあるので、今日中に特価ラベルとレシートの準備を始めなければならない。",
        "chunks": [
          "因為明天有買一送一的活動",
          "所以我們今天就要開始準備特價標籤跟發票"
        ],
        "hintText": "因為明天有買一送一的活動，所以我們今天就要開始"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要你先準備好健保卡跟身分證，就可以快速辦好掛號手續。",
        "pinyin": "zhǐ yào nǐ xiān zhǔn bèi hǎo jiàn bǎo kǎ gēn shēn fèn zhèng, jiù kě yǐ kuài sù bàn hǎo guà hào shǒu xù.",
        "japanese": "先に健康保険証と身分証を用意しておけば、受付手続きを早く済ませられます。",
        "chunks": [
          "只要你先準備好健保卡跟身分證",
          "就可以快速辦好掛號手續"
        ],
        "hintText": "只要你先"
      }
    ]
  },
  {
    "id": "B-022",
    "band": "B",
    "targetWord": "輕鬆",
    "distractors": [
      "嚴重",
      "緊張",
      "辛苦"
    ],
    "grammarNote": "「輕鬆」は緊張や重圧が減って“気楽だ/リラックスしている”状態を表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然媽媽一直碎碎念，但只要她心情輕鬆，我就覺得很開心。",
        "pinyin": "suī rán mā ma yī zhí suì suì niàn，dàn zhǐ yào tā xīn qíng qīng sōng，wǒ jiù jué de hěn kāi xīn。",
        "japanese": "母はいつもぶつぶつ言っているけど、彼女の気分がリラックスしていれば、私はとても嬉しい。",
        "chunks": [
          "雖然媽媽一直碎碎念",
          "但只要她心情輕鬆",
          "我就覺得很開心"
        ],
        "hintText": "雖然媽媽一直碎碎念，但只要她心情"
      },
      {
        "situation": "交通・移動",
        "problem": "因為捷運上人很少，所以我可以輕鬆找到座位坐下來滑手機。",
        "chinese": "因為捷運上人很少，所以我可以輕鬆找到座位坐下來滑手機。",
        "pinyin": "yīn wèi jié yùn shàng rén hěn shǎo，suǒ yǐ wǒ kě yǐ qīng sōng zhǎo dào zuò wèi zuò xià lái huá shǒu jī。",
        "japanese": "MRTの中がとても空いていたので、楽々と席を見つけて座ってスマホをいじることができた。",
        "chunks": [
          "因為捷運上人很少",
          "所以我可以輕鬆找到座位",
          "坐下來滑手機"
        ],
        "hintText": "因為捷運上人很少，所以我可以"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要健保卡帶著，就算突然生病也能輕鬆掛號看醫生。",
        "pinyin": "zhǐ yào jiàn bǎo kǎ dài zhe，jiù suàn tū rán shēng bìng yě néng qīng sōng guà hào kàn yī shēng。",
        "japanese": "健康保険証を持っていれば、急に病気になっても簡単に受付をして医者にかかれる。",
        "chunks": [
          "只要健保卡帶著",
          "就算突然生病",
          "也能輕鬆掛號看醫生"
        ],
        "hintText": "只要健保卡帶著，就算突然生病也能"
      }
    ]
  },
  {
    "id": "B-023",
    "band": "B",
    "targetWord": "只要",
    "distractors": [
      "雖然",
      "即使",
      "因為"
    ],
    "grammarNote": "「只要〜就...」は“〜しさえすれば…だ”という十分条件を表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "只要你先跟媽媽道歉，她就會原諒你。",
        "pinyin": "zhǐ yào nǐ xiān gēn mā ma dào qiàn，tā jiù huì yuán liàng nǐ。",
        "japanese": "あなたが先に母に謝りさえすれば、彼女はあなたを許してくれるでしょう。",
        "chunks": [
          "只要你先跟媽媽道歉，",
          "她就會",
          "原諒你。"
        ],
        "hintText": "只要"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要消費滿五百元，就可以拿到一張發票。",
        "pinyin": "zhǐ yào xiāo fèi mǎn wǔ bǎi yuán，jiù kě yǐ ná dào yī zhāng fā piào。",
        "japanese": "500元以上買い物しさえすれば、レシートを1枚もらえます。",
        "chunks": [
          "只要消費滿五百元，",
          "就可以拿到",
          "一張發票。"
        ],
        "hintText": "只要"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要搭捷運到台北車站，就可以轉高鐵。",
        "pinyin": "zhǐ yào dā jié yùn dào Tái běi chē zhàn，jiù kě yǐ zhuǎn gāo tiě。",
        "japanese": "MRTで台北駅に行きさえすれば、高速鉄道に乗り換えられます。",
        "chunks": [
          "只要搭捷運到台北車站，",
          "就可以",
          "轉高鐵。"
        ],
        "hintText": "只要"
      }
    ]
  },
  {
    "id": "B-024",
    "band": "B",
    "targetWord": "環境",
    "distractors": [
      "經驗",
      "機會",
      "態度"
    ],
    "grammarNote": "「環境」は周囲の状況・環境を指し、「工作環境」のように具体的に言えます。",
    "bossReading": {
      "text": "雖然剛來台灣的時候很不習慣，但[ ? ]你不放棄，多多去體驗這裡的社會環境，很快就會覺得生活其實很輕鬆愉快。",
      "targetWord": "只要",
      "distractors": [
        "即使",
        "雖然",
        "因為"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「諦めさえしなければ、生活が輕鬆（リラックス）だと感じるだろう」という十分条件を表すため、「只要（〜しさえすれば）」が入ります。台湾の「環境」に慣れるという文脈で3つの単語が統合されています。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然家裡的環境不大，但是只要大家互相體諒，就能住得很舒服。",
        "pinyin": "suī rán jiā lǐ de huán jìng bù dà, dàn shì zhǐ yào dà jiā hù xiāng tǐ liàng, jiù néng zhù de hěn shū fu.",
        "japanese": "家の環境は広くないけれど、みんながお互いに思いやりさえあれば、快適に住めます。",
        "chunks": [
          "雖然家裡的環境不大",
          "但是只要大家互相體諒",
          "就能住得很舒服"
        ],
        "hintText": "雖然家裡的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的用餐環境很乾淨，所以我常常帶朋友來這裡吃飯。",
        "pinyin": "yīn wèi zhè jiā cān tīng de yòng cān huán jìng hěn gān jìng, suǒ yǐ wǒ cháng cháng dài péng yǒu lái zhè lǐ chī fàn.",
        "japanese": "このレストランの食事環境がとても清潔なので、私はよく友達を連れてここで食事をします。",
        "chunks": [
          "因為這家餐廳的用餐環境很乾淨",
          "所以我常常帶朋友來這裡吃飯"
        ],
        "hintText": "因為這家餐廳的用餐"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然捷運站的環境很擁擠，但是只要避開尖峰時間，就不會那麼不舒服。",
        "pinyin": "suī rán jié yùn zhàn de huán jìng hěn yōng jǐ, dàn shì zhǐ yào bì kāi jiān fēng shí jiān, jiù bù huì nà me bù shū fu.",
        "japanese": "MRTの駅の環境はとても混雑していますが、ラッシュアワーを避ければ、それほど不快ではありません。",
        "chunks": [
          "雖然捷運站的環境很擁擠",
          "但是只要避開尖峰時間",
          "就不會那麼不舒服"
        ],
        "hintText": "雖然捷運站的"
      }
    ]
  },
  {
    "id": "B-025",
    "band": "B",
    "targetWord": "情況",
    "distractors": [
      "環境",
      "態度",
      "經驗"
    ],
    "grammarNote": "「情況」には“状況”の意味があり、「就…來看」で“〜から見れば”と言えます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們最近吵架了，但是就目前的情況來看，他還是願意幫我修機車。",
        "pinyin": "suī rán wǒ men zuì jìn chǎo jià le, dàn shì jiù mù qián de qíng kuàng lái kàn, tā hái shì yuàn yì bāng wǒ xiū jī chē.",
        "japanese": "最近喧嘩したけど、今の状況から見ると、彼はまだ私のバイクを修理してくれるつもりだ。",
        "chunks": [
          "雖然我們最近吵架了",
          "但是就目前的情況來看",
          "他還是願意幫我修機車"
        ],
        "hintText": "雖然我們最近吵架了，但是"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為今天客人很多，所以就目前的情況來看，我們沒辦法馬上幫你結帳。",
        "pinyin": "yīn wèi jīn tiān kè rén hěn duō, suǒ yǐ jiù mù qián de qíng kuàng lái kàn, wǒ men méi bàn fǎ mǎ shàng bāng nǐ jié zhàng.",
        "japanese": "今日はお客さんが多いので、今の状況から見ると、すぐに会計できません。",
        "chunks": [
          "因為今天客人很多",
          "所以就目前的情況來看",
          "我們沒辦法馬上幫你結帳"
        ],
        "hintText": "因為今天客人很多，所以"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要房東願意修水管的話，就目前的情況來看，我們就不用搬家了。",
        "pinyin": "zhǐ yào fáng dōng yuàn yì xiū shuǐ guǎn de huà, jiù mù qián de qíng kuàng lái kàn, wǒ men jiù bù yòng bān jiā le.",
        "japanese": "大家さんが水道管を修理してくれるなら、今の状況から見ると、引っ越さなくて済みます。",
        "chunks": [
          "只要房東願意修水管的話",
          "就目前的情況來看",
          "我們就不用搬家了"
        ],
        "hintText": "只要房東願意修水管的話，"
      }
    ]
  },
  {
    "id": "B-026",
    "band": "B",
    "targetWord": "發生",
    "distractors": [
      "發現",
      "解決",
      "準備"
    ],
    "grammarNote": "「發生」は事件・事故・問題などが“起きる/発生する”ことを表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為他經常遲到，所以我們之間發生了嚴重的誤會。",
        "pinyin": "yīn wèi tā jīng cháng chí dào, suǒ yǐ wǒ men zhī jiān fā shēng le yán zhòng de wù huì.",
        "japanese": "彼がよく遅刻するので、私たちの間に深刻な誤解が生じました。",
        "chunks": [
          "因為他經常遲到",
          "所以我們之間",
          "發生了嚴重的誤會"
        ],
        "hintText": "因為他經常遲到，所以我們之間"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家餐廳的服務很好，但是昨天還是發生了送錯餐的問題。",
        "pinyin": "suī rán zhè jiā cān tīng de fú wù hěn hǎo, dàn shì zuó tiān hái shì fā shēng le sòng cuò cān de wèn tí.",
        "japanese": "このレストランのサービスは良いですが、昨日は料理を間違えて提供する問題が発生しました。",
        "chunks": [
          "雖然這家餐廳的服務很好",
          "但是昨天還是",
          "發生了送錯餐的問題"
        ],
        "hintText": "雖然這家餐廳的服務很好，但是昨天還是"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要颱風一來，捷運站就常常會發生故障的情況。",
        "pinyin": "zhǐ yào tái fēng yī lái, jié yùn zhàn jiù cháng cháng huì fā shēng gù zhàng de qíng kuàng.",
        "japanese": "台風が来ると、MRTの駅ではよく故障が発生します。",
        "chunks": [
          "只要颱風一來",
          "捷運站就常常會",
          "發生故障的情況"
        ],
        "hintText": "只要颱風一來，捷運站就常常會"
      }
    ]
  },
  {
    "id": "B-027",
    "band": "B",
    "targetWord": "複雜",
    "distractors": [
      "簡單",
      "輕鬆",
      "嚴重"
    ],
    "grammarNote": "「複雜」は事情や原因が入り組んでいることを表す形容詞です。",
    "bossReading": {
      "text": "這起交通意外發生的原因非常[ ? ]，牽涉到很多人。目前的解決情況對我們來說並不利，需要花更多時間去調查。",
      "targetWord": "複雜",
      "distractors": [
        "簡單",
        "嚴重",
        "輕鬆"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "事故が「發生（発生）」した原因が、多くの人が関わっていて「複雜（複雑）」であるため、「情況（状況）」が不利になっているという論理展開です。原因の難しさを表す形容詞が入ります。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他們看起來很和諧，但家庭關係其實很複雜，因為每個人都有自己的想法。",
        "pinyin": "suī rán tā men kàn qǐ lái hěn hé xié，dàn jiā tíng guān xì qí shí hěn fù zá，yīn wèi měi gè rén dōu yǒu zì jǐ de xiǎng fǎ。",
        "japanese": "彼らはとても仲良さそうに見えるが、家庭関係は実は複雑で、なぜなら誰もが自分の考えを持っているからだ。",
        "chunks": [
          "雖然他們看起來很和諧",
          "但家庭關係其實很複雜",
          "因為每個人都有自己的想法"
        ],
        "hintText": "雖然他們看起來很和諧，但家庭關係其實"
      },
      {
        "situation": "生活トラブル",
        "region": "台湾",
        "chinese": "因為機車的引擎問題很複雜，所以車行說要等零件到才能修好。",
        "pinyin": "yīn wèi jī chē de yǐn qíng wèn tí hěn fù zá，suǒ yǐ chē háng shuō yào děng líng jiàn dào cái néng xiū hǎo。",
        "japanese": "バイクのエンジンの問題は複雑なので、修理工場は部品が届くまで修理できないと言った。",
        "chunks": [
          "因為機車的引擎問題很複雜",
          "所以車行說要等零件到才能修好"
        ],
        "hintText": "因為機車的引擎問題"
      },
      {
        "situation": "公的手続き・職場",
        "region": "台湾",
        "chinese": "只要把健保卡的資料準備好，申請流程就不會那麼複雜。",
        "pinyin": "zhǐ yào bǎ jiàn bǎo kǎ de zī liào zhǔn bèi hǎo，shēn qǐng liú chéng jiù bú huì nà me fù zá。",
        "japanese": "健康保険証の資料を準備すれば、申請手続きはそれほど複雑ではない。",
        "chunks": [
          "只要把健保卡的資料準備好",
          "申請流程就不會那麼複雜"
        ],
        "hintText": "只要把健保卡的資料準備好，申請流程就"
      }
    ]
  },
  {
    "id": "B-028",
    "band": "B",
    "targetWord": "簡單",
    "distractors": [
      "困難",
      "複雜",
      "嚴重"
    ],
    "grammarNote": "「簡單」は“簡単だ”で、手順が分かれば難しくないという文脈で使えます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為你只要照著食譜做，所以這道菜其實很簡單。",
        "pinyin": "yīn wèi nǐ zhǐ yào zhào zhe shí pǔ zuò，suǒ yǐ zhè dào cài qí shí hěn jiǎn dān。",
        "japanese": "レシピ通りに作れば、この料理は実はとても簡単です。",
        "chunks": [
          "因為",
          "你只要照著食譜做",
          "所以",
          "這道菜其實很簡單"
        ],
        "hintText": "因為你只要照著食譜做，所以這道菜其實"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家店的發票可以兌獎，但只要簡單掃一下QR code就好。",
        "pinyin": "suī rán zhè jiā diàn de fā piào kě yǐ duì jiǎng，dàn zhǐ yào jiǎn dān sǎo yī xià QR code jiù hǎo。",
        "japanese": "この店のレシートは宝くじに使えますが、QRコードをスキャンするだけで簡単です。",
        "chunks": [
          "雖然這家店的發票可以兌獎",
          "但",
          "只要簡單掃一下QR code就好"
        ],
        "hintText": "雖然這家店的發票可以兌獎，但只要"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為你只要用悠遊卡就能搭捷運，所以其實很簡單。",
        "pinyin": "yīn wèi nǐ zhǐ yào yòng yōu yóu kǎ jiù néng dā jié yùn，suǒ yǐ qí shí hěn jiǎn dān。",
        "japanese": "悠遊カードがあればMRTに乗れるので、実はとても簡単です。",
        "chunks": [
          "因為",
          "你只要用悠遊卡就能搭捷運",
          "所以",
          "其實很簡單"
        ],
        "hintText": "因為你只要用悠遊卡就能搭捷運，所以其實"
      }
    ]
  },
  {
    "id": "B-029",
    "band": "B",
    "targetWord": "壓力",
    "distractors": [
      "能力",
      "經驗",
      "環境"
    ],
    "grammarNote": "「壓力」は“プレッシャー/ストレス”で、「工作壓力」のように言えます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為爸媽給我的壓力很大，所以我決定搬出去住。",
        "pinyin": "yīn wèi bà mā gěi wǒ de yā lì hěn dà, suǒ yǐ wǒ jué dìng bān chū qù zhù.",
        "japanese": "両親からのプレッシャーが大きいので、引っ越して一人暮らしをすることにしました。",
        "chunks": [
          "因為爸媽給我的壓力很大",
          "所以我決定搬出去住"
        ],
        "hintText": "因為爸媽給我的"
      },
      {
        "situation": "職場",
        "chinese": "雖然工作壓力很大，但只要加班就有加班費。",
        "pinyin": "suī rán gōng zuò yā lì hěn dà, dàn zhǐ yào jiā bān jiù yǒu jiā bān fèi.",
        "japanese": "仕事のストレスは大きいけれど、残業すれば残業代が出ます。",
        "chunks": [
          "雖然工作壓力很大",
          "但只要加班就有加班費"
        ],
        "hintText": "雖然"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為繳房租的壓力太大，所以我只好跟銀行借錢。",
        "pinyin": "yīn wèi jiǎo fáng zū de yā lì tài dà, suǒ yǐ wǒ zhǐ hǎo gēn yín háng jiè qián.",
        "japanese": "家賃を払うプレッシャーが大きすぎるので、銀行から借金するしかありませんでした。",
        "chunks": [
          "因為繳房租的壓力太大",
          "所以我只好跟銀行借錢"
        ],
        "hintText": "因為繳房租的"
      }
    ]
  },
  {
    "id": "B-030",
    "band": "B",
    "targetWord": "甚至",
    "distractors": [
      "所以",
      "因為",
      "雖然"
    ],
    "grammarNote": "「不僅〜，甚至...」は“〜だけでなく、その上さらに…”と強調する表現です。",
    "bossReading": {
      "text": "現代人的生活壓力越來越大，許多人不僅每天要加班，[ ? ]週末也要把工作帶回家做，這絕對不是一件簡單的事。",
      "targetWord": "甚至",
      "distractors": [
        "所以",
        "雖然",
        "不過"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「壓力（ストレス）」が大きく、「簡單（簡単）」ではない現代人の生活を描写しています。「不僅（〜だけでなく）」に呼応して、さらに極端な状況（週末も働く）を強調する「甚至（〜でさえ、さらに）」が入ります。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "我奶奶不僅會做台菜，甚至連客家小炒也難不倒她。",
        "pinyin": "wǒ nǎi nai bù jǐn huì zuò tái cài, shèn zhì lián kè jiā xiǎo chǎo yě nán bù dǎo tā。",
        "japanese": "私の祖母は台湾料理だけでなく、客家風炒め物さえもお手の物です。",
        "chunks": [
          "我奶奶不僅會做台菜",
          "甚至連客家小炒也難不倒她"
        ],
        "hintText": "我奶奶不僅會做台菜，"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "這家店不僅價格合理，甚至還會主動幫客人打折。",
        "pinyin": "zhè jiā diàn bù jǐn jià gé hé lǐ, shèn zhì hái huì zhǔ dòng bāng kè rén dǎ zhé。",
        "japanese": "この店は価格がリーズナブルなだけでなく、さらに積極的に客に割引をしてくれます。",
        "chunks": [
          "這家店不僅價格合理",
          "甚至還會主動幫客人打折"
        ],
        "hintText": "這家店不僅價格合理，"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為捷運站離我家很近，所以我不僅走路就能到，甚至不用轉車。",
        "pinyin": "yīn wèi jié yùn zhàn lí wǒ jiā hěn jìn, suǒ yǐ wǒ bù jǐn zǒu lù jiù néng dào, shèn zhì bù yòng zhuǎn chē。",
        "japanese": "MRTの駅が家からとても近いので、歩いて行けるだけでなく、乗り換えも必要ありません。",
        "chunks": [
          "因為捷運站離我家很近",
          "所以我不僅走路就能到",
          "甚至不用轉車"
        ],
        "hintText": "因為捷運站離我家很近，所以我不僅走路就能到，"
      }
    ]
  },
  {
    "id": "B-031",
    "band": "B",
    "targetWord": "關於",
    "distractors": [
      "除了",
      "為了",
      "根據"
    ],
    "grammarNote": "「關於 + 名詞」で“〜について/〜に関して”と話題を提示します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "關於我媽的生日禮物，因為她喜歡實用的東西，所以我打算送她一台新的果汁機。",
        "pinyin": "guān yú wǒ mā de shēng rì lǐ wù ， yīn wèi tā xǐ huān shí yòng de dōng xi ， suǒ yǐ wǒ dǎ suàn sòng tā yī tái xīn de guǒ zhī jī 。",
        "japanese": "母の誕生日プレゼントに関しては、彼女は実用的なものが好きなので、新しいジューサーを贈るつもりです。",
        "chunks": [
          "關於",
          "我媽的生日禮物",
          "因為她喜歡實用的東西",
          "所以我打算送她一台新的果汁機"
        ],
        "hintText": "關於"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "關於那家咖啡店的發票，只要消費滿一百元，就可以參加抽獎活動。",
        "pinyin": "guān yú nà jiā kā fēi diàn de fā piào ， zhǐ yào xiāo fèi mǎn yī bǎi yuán ， jiù kě yǐ cān jiā chōu jiǎng huó dòng 。",
        "japanese": "あのコーヒーショップのレシートに関しては、100元以上の消費で抽選に参加できます。",
        "chunks": [
          "關於",
          "那家咖啡店的發票",
          "只要消費滿一百元",
          "就可以參加抽獎活動"
        ],
        "hintText": "關於"
      },
      {
        "situation": "交通・移動",
        "chinese": "關於捷運的尖峰時間，雖然人很多，但是班次很密集，所以不用等太久。",
        "pinyin": "guān yú jié yùn de jiān fēng shí jiān ， suī rán rén hěn duō ， dàn shì bān cì hěn mì jí ， suǒ yǐ bù yòng děng tài jiǔ 。",
        "japanese": "MRTのラッシュアワーに関しては、人は多いですが、本数が頻繁なのであまり待たなくて済みます。",
        "chunks": [
          "關於",
          "捷運的尖峰時間",
          "雖然人很多",
          "但是班次很密集",
          "所以不用等太久"
        ],
        "hintText": "關於"
      }
    ]
  },
  {
    "id": "B-032",
    "band": "B",
    "targetWord": "認為",
    "distractors": [
      "發現",
      "解決",
      "準備"
    ],
    "grammarNote": "「認為」は根拠を踏まえた“〜と考える”で、提案や意見を述べる時に使えます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "我認為雖然他常遲到，但是只要提前提醒他就會改進。",
        "pinyin": "wǒ rèn wéi suī rán tā cháng chí dào，dàn shì zhǐ yào tí qián tí xǐng tā jiù huì gǎi jìn。",
        "japanese": "私は、彼はよく遅刻するけれども、事前に注意すれば改善すると思います。",
        "chunks": [
          "我認為",
          "雖然他常遲到",
          "但是只要提前提醒他",
          "就會改進"
        ],
        "hintText": "我認為"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "我認為因為這家店的發票可以對獎，所以很多人會來消費。",
        "pinyin": "wǒ rèn wéi yīn wèi zhè jiā diàn de fā piào kě yǐ duì jiǎng，suǒ yǐ hěn duō rén huì lái xiāo fèi。",
        "japanese": "私は、この店のレシートは宝くじの抽選に使えるので、多くの人が買い物に来ると思います。",
        "chunks": [
          "我認為",
          "因為這家店的發票可以對獎",
          "所以很多人會來消費"
        ],
        "hintText": "我認為"
      },
      {
        "situation": "交通・移動",
        "chinese": "我認為只要搭捷運，就算遇到尖峰時段也不會塞車。",
        "pinyin": "wǒ rèn wéi zhǐ yào dā jié yùn，jiù suàn yù dào jiān fēng shí duàn yě bù huì sāi chē。",
        "japanese": "私は、地下鉄に乗れば、たとえラッシュ時に遭遇しても渋滞しないと思います。",
        "chunks": [
          "我認為",
          "只要搭捷運",
          "就算遇到尖峰時段",
          "也不會塞車"
        ],
        "hintText": "我認為"
      }
    ]
  },
  {
    "id": "B-033",
    "band": "B",
    "targetWord": "變成",
    "distractors": [
      "發生",
      "發現",
      "解決"
    ],
    "grammarNote": "「變成」=「〜になる」。人や物の状態が変化して別の状態になることを表します。",
    "bossReading": {
      "text": "關於這次的合作案，大家都認為非常有創意。如果我們能好好發揮，這個小企劃未來很有可能[ ? ]一個能賺大錢的事業。",
      "targetWord": "變成",
      "distractors": [
        "發生",
        "發現",
        "解決"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "みんなが「關於（〜について）」クリエイティブだと「認為（考えている）」小さな企画が、将来大きな事業へと「變成（〜に変わる、〜になる）」という状態の変化を表す動詞が入ります。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他原本很內向，但經過幾次團隊合作後，他慢慢變成一個很會溝通的人。",
        "pinyin": "suī rán tā yuán běn hěn nèi xiàng，dàn jīng guò jǐ cì tuán duì hé zuò hòu，tā màn màn biàn chéng yī gè hěn huì gōu tōng de rén。",
        "japanese": "彼はもともと内向的でしたが、数回のチームワークを経て、徐々にコミュニケーションが上手な人になりました。",
        "chunks": [
          "雖然他原本很內向，",
          "但經過幾次團隊合作後，",
          "他慢慢變成一個很會溝通的人。"
        ],
        "hintText": "雖然他原本很內向，但經過幾次團隊合作後，他慢慢"
      },
      {
        "situation": "生活トラブル",
        "japanese": "雨が続いたせいで、家の中の壁が徐々にカビだらけになってしまい、とても困っています。",
        "chinese": "因為連日下雨，家裡的牆壁慢慢變成都是霉斑，讓我很困擾。",
        "pinyin": "yīn wèi lián rì xià yǔ，jiā lǐ de qiáng bì màn màn biàn chéng dōu shì méi bān，ràng wǒ hěn kùn rǎo。",
        "chunks": [
          "因為連日下雨，",
          "家裡的牆壁慢慢變成都是霉斑，",
          "讓我很困擾。"
        ],
        "hintText": "因為連日下雨，家裡的牆壁慢慢"
      },
      {
        "situation": "店舗・サービス",
        "japanese": "あの店は以前はとても混んでいましたが、値段を上げたので、今ではすっかり閑散とした店になってしまいました。",
        "chinese": "那家店原本生意很好，但因為漲價，現在慢慢變成門可羅雀的店。",
        "pinyin": "nà jiā diàn yuán běn shēng yì hěn hǎo，dàn yīn wèi zhǎng jià，xiàn zài màn màn biàn chéng mén kě luó què de diàn。",
        "chunks": [
          "那家店原本生意很好，",
          "但因為漲價，",
          "現在慢慢變成門可羅雀的店。"
        ],
        "hintText": "那家店原本生意很好，但因為漲價，現在慢慢"
      }
    ]
  },
  {
    "id": "B-034",
    "band": "B",
    "targetWord": "願意",
    "distractors": [
      "忘記",
      "拒絕",
      "放棄"
    ],
    "grammarNote": "「願意 + 動詞」は「進んで〜する気がある」という意思を表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他很忙，但是仍然願意陪我去看醫生。",
        "pinyin": "suī rán tā hěn máng, dàn shì réng rán yuàn yì péi wǒ qù kàn yī shēng.",
        "japanese": "彼はとても忙しいけれど、それでも進んで私に付き添って医者に行く気がある。",
        "chunks": [
          "雖然他很忙",
          "但是仍然願意",
          "陪我去看醫生"
        ],
        "hintText": "雖然他很忙，但是仍然"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的服務很好，所以我願意多付一點錢。",
        "pinyin": "yīn wèi zhè jiā diàn de fú wù hěn hǎo, suǒ yǐ wǒ yuàn yì duō fù yī diǎn qián.",
        "japanese": "この店のサービスがとても良いので、私は進んで少し多めにお金を払う気がある。",
        "chunks": [
          "因為這家店的服務很好",
          "所以我願意",
          "多付一點錢"
        ],
        "hintText": "因為這家店的服務很好，所以我"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要房東願意修理水管，我就繼續租這裡。",
        "pinyin": "zhǐ yào fáng dōng yuàn yì xiū lǐ shuǐ guǎn, wǒ jiù jì xù zū zhè lǐ.",
        "japanese": "大家さんが進んで水道管を修理してくれるなら、私はここに引き続き住むつもりだ。",
        "chunks": [
          "只要房東願意",
          "修理水管",
          "我就繼續租這裡"
        ],
        "hintText": "只要房東"
      }
    ]
  },
  {
    "id": "B-035",
    "band": "B",
    "targetWord": "負責",
    "distractors": [
      "準備",
      "解決",
      "放棄"
    ],
    "grammarNote": "「負責 + 動詞/名詞」で「〜を担当する、責任を持つ」を表します。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的生意很好，所以老闆讓我負責接待客人。",
        "pinyin": "yīn wèi zhè jiā cān tīng de shēng yì hěn hǎo, suǒ yǐ lǎo bǎn ràng wǒ fù zé jiē dài kè rén.",
        "japanese": "このレストランはとても繁盛しているので、店主は私にお客様の接客を任せました。",
        "chunks": [
          "因為這家餐廳的生意很好",
          "所以老闆讓我",
          "負責接待客人"
        ],
        "hintText": "因為這家餐廳的生意很好，所以老闆讓我"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然捷運很方便，但是司機還是要負責檢查車票。",
        "pinyin": "suī rán jié yùn hěn fāng biàn, dàn shì sī jī hái shì yào fù zé jiǎn chá chē piào.",
        "japanese": "MRTは便利ですが、運転手はやはり切符のチェックを担当しなければなりません。",
        "chunks": [
          "雖然捷運很方便",
          "但是司機還是要",
          "負責檢查車票"
        ],
        "hintText": "雖然捷運很方便，但是司機還是要"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要拿到健保卡，就可以負責處理醫療補助申請。",
        "pinyin": "zhǐ yào ná dào jiàn bǎo kǎ, jiù kě yǐ fù zé chǔ lǐ yī liáo bǔ zhù shēn qǐng.",
        "japanese": "健康保険証を入手すれば、医療補助の申請を担当することができます。",
        "chunks": [
          "只要拿到健保卡",
          "就可以",
          "負責處理醫療補助申請"
        ],
        "hintText": "只要拿到健保卡，就可以"
      }
    ]
  },
  {
    "id": "B-036",
    "band": "B",
    "targetWord": "失敗",
    "distractors": [
      "經驗",
      "機會",
      "成功"
    ],
    "grammarNote": "「失敗」=「失敗する/失敗」。仕事のミスや結果がうまくいかない状況を表します。",
    "bossReading": {
      "text": "既然你願意負責這個專案，就大膽去試吧。記住，[ ? ]為成功之母，就算遇到困難也不用害怕，我們都會支持你。",
      "targetWord": "失敗",
      "distractors": [
        "經驗",
        "機會",
        "成功"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "プロジェクトを「負責（担当する）」と「願意（〜したいと思う）」部下に対する励ましの言葉です。「為成功之母（成功の母である）」とくれば、ことわざの「失敗」が入るのが自然な文脈です。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他這次面試失敗了，但是因為有家人的支持，所以他很快就振作起來。",
        "pinyin": "suī rán tā zhè cì miàn shì shī bài le, dàn shì yīn wèi yǒu jiā rén de zhī chí, suǒ yǐ tā hěn kuài jiù zhèn zuò qǐ lái.",
        "japanese": "彼は今回の面接に失敗したけど、家族の支えがあったのですぐに立ち直った。",
        "chunks": [
          "雖然他這次面試失敗了",
          "但是因為有家人的支持",
          "所以他很快就振作起來"
        ],
        "hintText": "雖然他這次面試"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要我們從失敗中學到教訓，下次去餐廳就不會再點錯菜了。",
        "pinyin": "zhǐ yào wǒ men cóng shī bài zhōng xué dào jiào xùn, xià cì qù cān tīng jiù bú huì zài diǎn cuò cài le.",
        "japanese": "失敗から教訓を学べば、次にレストランに行ったときにまた料理を間違えて注文することはないだろう。",
        "chunks": [
          "只要我們從失敗中學到教訓",
          "下次去餐廳就不會再點錯菜了"
        ],
        "hintText": "只要我們從"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為這次專案失敗了，所以我們必須重新申請預算，不然就無法繼續進行。",
        "pinyin": "yīn wèi zhè cì zhuān àn shī bài le, suǒ yǐ wǒ men bì xū chóng xīn shēn qǐng yù suàn, bù rán jiù wú fǎ jì xù jìn xíng.",
        "japanese": "今回のプロジェクトが失敗したので、予算を再申請しなければならず、さもなければ続行できません。",
        "chunks": [
          "因為這次專案失敗了",
          "所以我們必須重新申請預算",
          "不然就無法繼續進行"
        ],
        "hintText": "因為這次專案"
      }
    ]
  },
  {
    "id": "B-037",
    "band": "B",
    "targetWord": "增加",
    "distractors": [
      "減少",
      "發生",
      "解決"
    ],
    "grammarNote": "「增加」=「増える/増やす」。数量の変化を表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然最近工作很忙，但是因為要照顧小孩，所以家庭開銷也增加了不少。",
        "pinyin": "suī rán zuì jìn gōng zuò hěn máng, dàn shì yīn wèi yào zhào gù xiǎo hái, suǒ yǐ jiā tíng kāi xiāo yě zēng jiā le bù shǎo.",
        "japanese": "最近仕事で忙しいけれど、子供の世話をしなければならないので、家庭の出費もかなり増えました。",
        "chunks": [
          "雖然最近工作很忙",
          "但是因為要照顧小孩",
          "所以家庭開銷也增加了不少"
        ],
        "hintText": "雖然最近工作很忙，但是因為要照顧小孩，所以家庭開銷也"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要刷會員卡就可以累積點數，而且消費金額越高，回饋也會跟著增加。",
        "pinyin": "zhǐ yào shuā huì yuán kǎ jiù kě yǐ lěi jī diǎn shù, ér qiě xiāo fèi jīn é yuè gāo, huí kuì yě huì gēn zhe zēng jiā.",
        "japanese": "会員カードをタッチすればポイントが貯まり、しかも消費金額が高いほど還元も増えます。",
        "chunks": [
          "只要刷會員卡就可以累積點數",
          "而且消費金額越高",
          "回饋也會跟著增加"
        ],
        "hintText": "只要刷會員卡就可以累積點數，而且消費金額越高，回饋也會"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為這幾天一直下雨，所以家裡的濕氣增加，牆壁都開始發霉了。",
        "pinyin": "yīn wèi zhè jǐ tiān yī zhí xià yǔ, suǒ yǐ jiā lǐ de shī qì zēng jiā, qiáng bì dōu kāi shǐ fā méi le.",
        "japanese": "ここ数日ずっと雨が降っているので、家の中の湿気が増え、壁にカビが生え始めました。",
        "chunks": [
          "因為這幾天一直下雨",
          "所以家裡的濕氣增加",
          "牆壁都開始發霉了"
        ],
        "hintText": "因為這幾天一直下雨，所以家裡的濕氣"
      }
    ]
  },
  {
    "id": "B-038",
    "band": "B",
    "targetWord": "減少",
    "distractors": [
      "增加",
      "繼續",
      "放棄"
    ],
    "grammarNote": "「減少」=「減る/減らす」。数量が少なくなる変化を表します。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為最近一直下雨，所以社區的垃圾量明顯減少。",
        "pinyin": "yīn wèi zuì jìn yī zhí xià yǔ, suǒ yǐ shè qū de lè sè liàng míng xiǎn jiǎn shǎo.",
        "japanese": "最近ずっと雨が降っているので、コミュニティのゴミの量が明らかに減少しました。",
        "chunks": [
          "因為最近一直下雨",
          "所以社區的垃圾量",
          "明顯減少"
        ],
        "hintText": "因為最近一直下雨，所以社區的垃圾量"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要用會員卡結帳，價格就會減少一成。",
        "pinyin": "zhǐ yào yòng huì yuán kǎ jié zhàng, jià gé jiù huì jiǎn shǎo yī chéng.",
        "japanese": "メンバーズカードで支払えば、価格は1割減少します。",
        "chunks": [
          "只要用會員卡結帳",
          "價格就會",
          "減少一成"
        ],
        "hintText": "只要用會員卡結帳，價格就會"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然捷運班次增加，但尖峰時間的擁擠並未減少。",
        "pinyin": "suī rán jié yùn bān cì zēng jiā, dàn jiān fēng shí jiān de yōng jǐ bìng wèi jiǎn shǎo.",
        "japanese": "MRTの運行本数は増えたが、ラッシュ時の混雑は減っていない。",
        "chunks": [
          "雖然捷運班次增加",
          "但尖峰時間的擁擠",
          "並未減少"
        ],
        "hintText": "雖然捷運班次增加，但尖峰時間的擁擠"
      }
    ]
  },
  {
    "id": "B-039",
    "band": "B",
    "targetWord": "流行",
    "distractors": [
      "嚴重",
      "複雜",
      "簡單"
    ],
    "grammarNote": "「流行」=「流行している」。トレンドとして広まっていることを表します。",
    "bossReading": {
      "text": "為了減少對環境的破壞，現在年輕人之間很[ ? ]購買二手衣物。這不但增加了資源的再利用，也能省下不少錢。",
      "targetWord": "流行",
      "distractors": [
        "嚴重",
        "複雜",
        "簡單"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "環境破壊を「減少（減らす）」し、リユースを「增加（増やす）」ために、若者の間で古着を買うことが「流行（流行している）」しているという社会現象を描写しています。若者の間で起きているトレンドを指す言葉が入ります。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我覺得這首歌很流行，但是我媽媽完全聽不習慣。",
        "pinyin": "suī rán wǒ jué de zhè shǒu gē hěn liú xíng ， dàn shì wǒ mā ma wán quán tīng bù xí guàn 。",
        "japanese": "この曲は流行っていると思うけど、母は全然聞き慣れない。",
        "chunks": [
          "雖然我覺得",
          "這首歌很流行",
          "但是我媽媽",
          "完全聽不習慣"
        ],
        "hintText": "雖然我覺得"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為最近環保杯很流行，所以超商買咖啡都有折扣。",
        "pinyin": "yīn wèi zuì jìn huán bǎo bēi hěn liú xíng ， suǒ yǐ chāo shāng mǎi kā fēi dōu yǒu zhé kòu 。",
        "japanese": "最近エコカップが流行っているので、コンビニでコーヒーを買うと割引がある。",
        "chunks": [
          "因為最近",
          "環保杯很流行",
          "所以超商買咖啡",
          "都有折扣"
        ],
        "hintText": "因為最近"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要這款手機殼一流行，仿冒品就會馬上出現。",
        "pinyin": "zhǐ yào zhè kuǎn shǒu jī ké yī liú xíng ， fǎng mào pǐn jiù huì mǎ shàng chū xiàn 。",
        "japanese": "このスマホケースが流行りさえすれば、すぐに偽物が出回る。",
        "chunks": [
          "只要這款手機殼一流行",
          "仿冒品",
          "就會馬上出現"
        ],
        "hintText": "只要這款手機殼一流行"
      }
    ]
  },
  {
    "id": "B-040",
    "band": "B",
    "targetWord": "證明",
    "distractors": [
      "發現",
      "發生",
      "解決"
    ],
    "grammarNote": "「證明」=「証明する」。事実やデータが根拠になり、正しさを示す時に使います。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他平常很少說話，但是這次的表現證明他真的很用心。",
        "pinyin": "suī rán tā píng cháng hěn shǎo shuō huà, dàn shì zhè cì de biǎo xiàn zhèng míng tā zhēn de hěn yòng xīn.",
        "japanese": "彼は普段あまり話さないけれど、今回のパフォーマンスは彼が本当に熱心だったことを証明している。",
        "chunks": [
          "雖然他平常很少說話",
          "但是這次的表現",
          "證明他真的很用心"
        ],
        "hintText": "雖然他平常很少說話，但是這次的表現"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為發票上的日期很清楚，所以可以證明這件衣服是在這裡買的。",
        "pinyin": "yīn wèi fā piào shàng de rì qī hěn qīng chǔ, suǒ yǐ kě yǐ zhèng míng zhè jiàn yī fú shì zài zhè lǐ mǎi de.",
        "japanese": "領収書の日付がはっきりしているので、この服がここで買ったものだと証明できる。",
        "chunks": [
          "因為發票上的日期很清楚",
          "所以可以證明",
          "這件衣服是在這裡買的"
        ],
        "hintText": "因為發票上的日期很清楚，所以可以證明"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要附上健保卡的影本，就能證明你的身分。",
        "pinyin": "zhǐ yào fù shàng jiàn bǎo kǎ de yǐng běn, jiù néng zhèng míng nǐ de shēn fèn.",
        "japanese": "健康保険証のコピーを添付すれば、あなたの身分を証明できます。",
        "chunks": [
          "只要附上健保卡的影本",
          "就能證明",
          "你的身分"
        ],
        "hintText": "只要附上健保卡的影本，就能證明"
      }
    ]
  },
  {
    "id": "B-041",
    "band": "B",
    "targetWord": "選擇",
    "distractors": [
      "機會",
      "經驗",
      "環境"
    ],
    "grammarNote": "「做選擇」=「選択する」。複数の案からどれを取るか決めることです。",
    "pronunciationNote": "🇹🇼 台湾華語の発音メモ：\n「擇」は台湾では「zé（2声）」とはっきり発音されるのが一般的です。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為這件衣服有打折，所以我很快就做了選擇。",
        "pinyin": "yīn wèi zhè jiàn yī fu yǒu dǎ zhé, suǒ yǐ wǒ hěn kuài jiù zuò le xuǎn zé.",
        "japanese": "この服が割引だったので、すぐに選択しました。",
        "chunks": [
          "因為這件衣服有打折",
          "所以我很快就",
          "做了選擇"
        ],
        "hintText": "因為這件衣服有打折，所以我很快就"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然健保卡過期了，但是我還沒做選擇要不要換。",
        "pinyin": "suī rán jiàn bǎo kǎ guò qī le, dàn shì wǒ hái méi zuò xuǎn zé yào bù yào huàn.",
        "japanese": "健康保険証は期限切れですが、まだ交換するかどうか選択していません。",
        "chunks": [
          "雖然健保卡過期了",
          "但是我還沒",
          "做選擇要不要換"
        ],
        "hintText": "雖然健保卡過期了，但是我還沒"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要機車壞了，我就得做選擇要修還是買新的。",
        "pinyin": "zhǐ yào jī chē huài le, wǒ jiù děi zuò xuǎn zé yào xiū hái shì mǎi xīn de.",
        "japanese": "バイクが壊れたら、修理するか新しいのを買うか選択しなければなりません。",
        "chunks": [
          "只要機車壞了",
          "我就得",
          "做選擇要修還是買新的"
        ],
        "hintText": "只要機車壞了，我就得"
      }
    ]
  },
  {
    "id": "B-042",
    "band": "B",
    "targetWord": "拒絕",
    "distractors": [
      "接受",
      "準備",
      "放棄"
    ],
    "grammarNote": "「拒絕」=「断る/拒否する」。要求・提案・見積もりなどを受け入れない時に使います。",
    "bossReading": {
      "text": "事實證明，我們當初的決定是正確的。雖然在這個過程中面臨了許多困難的選擇，而且還被很多人[ ? ]過，但我們還是成功了。",
      "targetWord": "拒絕",
      "distractors": [
        "接受",
        "準備",
        "放棄"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "自分たちの選択が正しかったと「證明（証明）」されたという文脈です。「困難な『選擇（選択）』」に直面し、他人に「拒絕（拒絶・拒否）」されながらも成功した、という逆境を乗り越えるストーリーになっています（被〜過：〜されたことがある）。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為他拒絕了我的邀約，所以我只好自己去看電影。",
        "pinyin": "yīn wèi tā jù jué le wǒ de yāo yuē, suǒ yǐ wǒ zhǐ hǎo zì jǐ qù kàn diàn yǐng.",
        "japanese": "彼が私の誘いを断ったので、仕方なく一人で映画を見に行きました。",
        "chunks": [
          "因為他拒絕了我的邀約",
          "所以我只好",
          "自己去看電影"
        ],
        "hintText": "因為他"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然店員拒絕讓我退貨，但因為發票還在，所以我還是堅持要求。",
        "pinyin": "suī rán diàn yuán jù jué ràng wǒ tuì huò, dàn yīn wèi fā piào hái zài, suǒ yǐ wǒ hái shì jiān chí yāo qiú.",
        "japanese": "店員は返品を断ったが、領収書がまだあるので、私はあくまで要求し続けた。",
        "chunks": [
          "雖然店員拒絕讓我退貨",
          "但因為發票還在",
          "所以我還是堅持要求"
        ],
        "hintText": "雖然店員"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要經理拒絕這個提案，我們就得重新討論預算。",
        "pinyin": "zhǐ yào jīng lǐ jù jué zhè ge tí àn, wǒ men jiù děi chóng xīn tǎo lùn yù suàn.",
        "japanese": "マネージャーがこの提案を拒否すれば、私たちは予算を再検討しなければなりません。",
        "chunks": [
          "只要經理拒絕這個提案",
          "我們就得",
          "重新討論預算"
        ],
        "hintText": "只要經理"
      }
    ]
  },
  {
    "id": "B-043",
    "band": "B",
    "targetWord": "建議",
    "distractors": [
      "覺得",
      "希望",
      "準備"
    ],
    "grammarNote": "「建議」=「提案する/アドバイスする」。人に行動を勧める時に使います。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為媽媽最近身體不好，所以我建議她每天早點休息。",
        "pinyin": "yīn wèi mā ma zuì jìn shēn tǐ bù hǎo, suǒ yǐ wǒ jiàn yì tā měi tiān zǎo diǎn xiū xi.",
        "japanese": "お母さんが最近体調が良くないので、私は彼女に毎日早く休むことを勧めました。",
        "chunks": [
          "因為媽媽最近身體不好",
          "所以我建議她",
          "每天早點休息"
        ],
        "hintText": "因為媽媽最近身體不好，所以"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要刷會員卡就能打折，我建議你辦一張。",
        "pinyin": "zhǐ yào shuā huì yuán kǎ jiù néng dǎ zhé, wǒ jiàn yì nǐ bàn yī zhāng.",
        "japanese": "会員カードを提示すれば割引になるので、私はあなたに一枚作ることを勧めます。",
        "chunks": [
          "只要刷會員卡就能打折",
          "我建議你",
          "辦一張"
        ],
        "hintText": "只要刷會員卡就能打折，"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然機車被拖吊很麻煩，但我建議你先去繳罰單。",
        "pinyin": "suī rán jī chē bèi tuō diào hěn má fan, dàn wǒ jiàn yì nǐ xiān qù jiǎo fá dān.",
        "japanese": "バイクがレッカー移動されて面倒ですが、私はあなたに先に罰金を払いに行くことを勧めます。",
        "chunks": [
          "雖然機車被拖吊很麻煩",
          "但我建議你",
          "先去繳罰單"
        ],
        "hintText": "雖然機車被拖吊很麻煩，但"
      }
    ]
  },
  {
    "id": "B-044",
    "band": "B",
    "targetWord": "明白",
    "distractors": [
      "忘記",
      "發現",
      "準備"
    ],
    "grammarNote": "「明白」=「理解する」。話を聞いたり説明を受けたりして、分かった状態を表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然媽媽已經解釋過很多次，但我還是要再聽一次才能明白她的意思。",
        "pinyin": "suī rán mā ma yǐ jīng jiě shì guò hěn duō cì，dàn wǒ hái shì yào zài tīng yī cì cái néng míng bai tā de yì si。",
        "japanese": "雖然媽媽已經解釋過很多次，但我還是要再聽一次才能明白她的意思。",
        "chunks": [
          "雖然媽媽已經解釋過很多次",
          "但我還是要再聽一次",
          "才能明白她的意思"
        ],
        "hintText": "雖然媽媽已經解釋過很多次，但我還是要再聽一次才能"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為店員仔細說明了發票的對獎方式，所以我終於明白怎麼用了。",
        "pinyin": "yīn wèi diàn yuán zǐ xì shuō míng le fā piào de duì jiǎng fāng shì，suǒ yǐ wǒ zhōng yú míng bai zěn me yòng le。",
        "japanese": "因為店員仔細說明了發票的對獎方式，所以我終於明白怎麼用了。",
        "chunks": [
          "因為店員仔細說明了發票的對獎方式",
          "所以我終於明白",
          "怎麼用了"
        ],
        "hintText": "因為店員仔細說明了發票的對獎方式，所以我終於"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要看過捷運路線圖，你就會明白為什麼這站是轉乘站。",
        "pinyin": "zhǐ yào kàn guò jié yùn lù xiàn tú，nǐ jiù huì míng bai wèi shén me zhè zhàn shì zhuǎn chéng zhàn。",
        "japanese": "只要看過捷運路線圖，你就會明白為什麼這站是轉乘站。",
        "chunks": [
          "只要看過捷運路線圖",
          "你就會明白",
          "為什麼這站是轉乘站"
        ],
        "hintText": "只要看過捷運路線圖，你就會"
      }
    ]
  },
  {
    "id": "B-045",
    "band": "B",
    "targetWord": "觀點",
    "distractors": [
      "經驗",
      "環境",
      "態度"
    ],
    "grammarNote": "「觀點」=「視点/考え方」。議論や分析で、自分の見方を述べる時に使います。",
    "bossReading": {
      "text": "一開始我不太[ ? ]醫生的建議，覺得他的觀點太過保守。但聽了他的詳細解釋後，我終於明白，如果不改變飲食習慣，身體會出大問題。",
      "targetWord": "明白",
      "distractors": [
        "忘記",
        "發現",
        "準備"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "医者の「建議（アドバイス）」や「觀點（視点）」を最初は受け入れられなかったが、説明を聞いて「明白（理解する）」したという心境の変化を描写しています。文末の「明白」が、前文の「不太（あまり〜ない）」という否定の文脈と繋がります。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我媽媽的觀點比較傳統，但是我覺得她說的也有道理。",
        "pinyin": "suī rán wǒ mā mā de guān diǎn bǐ jiào chuán tǒng ，dàn shì wǒ jué de tā shuō de yě yǒu dào lǐ 。",
        "japanese": "母の考え方は比較的伝統的ですが、彼女の言うことにも一理あると思います。",
        "chunks": [
          "雖然我媽媽的觀點比較傳統",
          "但是我覺得她說的也有道理"
        ],
        "hintText": "雖然我媽媽的"
      },
      {
        "situation": "店舗・服務",
        "pinyin": "yīn wèi wǒ hé lǎo bǎn de guān diǎn bù tóng ，suǒ yǐ wǒ jué dìng bù mǎi zhè jiàn yī fu 。",
        "japanese": "店主と意見が合わなかったので、この服を買わないことにしました。",
        "chinese": "因為我和老闆的觀點不同，所以我決定不買這件衣服。",
        "chunks": [
          "因為我和老闆的觀點不同",
          "所以我決定不買這件衣服"
        ],
        "hintText": "因為我和老闆的"
      },
      {
        "situation": "交通・移動",
        "pinyin": "zhǐ yào nǐ cóng chéng kè de guān diǎn chū fā ，jiù néng tí gōng gèng hǎo de jiàn yì 。",
        "japanese": "乗客の視点に立てば、より良い提案ができます。",
        "chinese": "只要你從乘客的觀點出發，就能提供更好的建議。",
        "chunks": [
          "只要你從乘客的觀點出發",
          "就能提供更好的建議"
        ],
        "hintText": "只要你從乘客的"
      }
    ]
  },
  {
    "id": "B-046",
    "band": "B",
    "targetWord": "軟體",
    "distractors": [
      "硬體",
      "系統",
      "設備"
    ],
    "grammarNote": "「軟體（ruǎn tǐ）」は台湾でのソフトウェアの呼び方です（大陸では 软件 ruǎn jiàn）。",
    "pronunciationNote": "🇹🇼 台湾華語の発音メモ：\n台湾では「軟」を「ruǎn」とはっきり発音しますが、話し言葉では少し「luǎn」に近い音に聞こえることもあります。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為妹妹覺得手機的軟體不夠好用，所以我幫她換了一個新的。",
        "pinyin": "yīn wèi mèi mei jué de shǒu jī de ruǎn tǐ bù gòu hǎo yòng，suǒ yǐ wǒ bāng tā huàn le yī gè xīn de。",
        "japanese": "妹がスマホのソフトが使いにくいと言うので、新しいものに替えてあげました。",
        "chunks": [
          "因為",
          "妹妹覺得",
          "手機的軟體",
          "不夠好用",
          "所以我",
          "幫她換了",
          "一個新的"
        ],
        "hintText": "因為妹妹覺得手機的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這款軟體的價格比較高，但是功能非常齊全，而且還送發票。",
        "pinyin": "suī rán zhè kuǎn ruǎn tǐ de jià gé bǐ jiào gāo，dàn shì gōng néng fēi cháng qí quán，ér qiě hái sòng fā piào。",
        "japanese": "このソフトは値段が高いですが、機能がとても充実していて、しかも領収書も付いてきます。",
        "chunks": [
          "雖然",
          "這款軟體的價格",
          "比較高",
          "但是功能",
          "非常齊全",
          "而且還",
          "送發票"
        ],
        "hintText": "雖然這款軟體的"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要把電腦的軟體更新一下，就不會再出現當機的問題了。",
        "pinyin": "zhǐ yào bǎ diàn nǎo de ruǎn tǐ gēng xīn yī xià，jiù bù huì zài chū xiàn dàng jī de wèn tí le。",
        "japanese": "パソコンのソフトをアップデートさえすれば、もうフリーズの問題は起きません。",
        "chunks": [
          "只要",
          "把電腦的軟體",
          "更新一下",
          "就不會再",
          "出現",
          "當機的問題了"
        ],
        "hintText": "只要把電腦的"
      }
    ]
  },
  {
    "id": "B-047",
    "band": "B",
    "targetWord": "面對",
    "distractors": [
      "發現",
      "發生",
      "解決"
    ],
    "grammarNote": "「面對〜時」で「〜に直面する時、向かい合う時」を表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然面對家人時我總是比較放鬆，但是還是要注意說話的語氣。",
        "pinyin": "suī rán miàn duì jiā rén shí wǒ zǒng shì bǐ jiào fàng sōng，dàn shì hái shì yào zhù yì shuō huà de yǔ qì。",
        "japanese": "雖然面對家人時我總是比較放鬆，但是還是要注意說話的語氣。",
        "chunks": [
          "雖然",
          "面對家人時",
          "我總是比較放鬆",
          "但是還是要注意說話的語氣"
        ],
        "hintText": "雖然"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要面對店員時保持禮貌，就可以順利拿到發票和找零。",
        "pinyin": "zhǐ yào miàn duì diàn yuán shí bǎo chí lǐ mào，jiù kě yǐ shùn lì ná dào fā piào hé zhǎo líng。",
        "japanese": "只要面對店員時保持禮貌，就可以順利拿到發票和找零。",
        "chunks": [
          "只要",
          "面對店員時",
          "保持禮貌",
          "就可以順利拿到發票和找零"
        ],
        "hintText": "只要"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為面對捷運站的人潮時，我常常會迷路，所以我都先查好路線。",
        "pinyin": "yīn wèi miàn duì jié yùn zhàn de rén cháo shí，wǒ cháng cháng huì mí lù，suǒ yǐ wǒ dōu xiān chá hǎo lù xiàn。",
        "japanese": "因為面對捷運站的人潮時，我常常會迷路，所以我都先查好路線。",
        "chunks": [
          "因為",
          "面對捷運站的人潮時",
          "我常常會迷路",
          "所以我都先查好路線"
        ],
        "hintText": "因為"
      }
    ]
  },
  {
    "id": "B-048",
    "band": "B",
    "targetWord": "受歡迎",
    "distractors": [
      "受限制",
      "受影響",
      "受教育"
    ],
    "grammarNote": "「受 + 二文字の動詞」で「〜を受ける（受身的な状態）」を表します。",
    "bossReading": {
      "text": "面對激烈的市場競爭，我們不但引進了新的[ ? ]來提昇工作效率，還開發出非常受歡迎的新產品，希望能藉此擴大市場佔有率。",
      "targetWord": "軟體",
      "distractors": [
        "硬體",
        "垃圾",
        "零件"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「面對（直面する）」激しい競争の中で、効率を上げるために導入したものとして、IT関連の語彙である「軟體（ソフトウェア）」が入ります。その結果、製品が「受歡迎（人気がある）」になったというビジネス文脈です。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他脾氣不好，但是在朋友之間還是很受歡迎。",
        "pinyin": "suī rán tā pí qì bù hǎo，dàn shì zài péng yǒu zhī jiān hái shì hěn shòu huān yíng。",
        "japanese": "彼は気難しいけど、友達の間では人気がある。",
        "chunks": [
          "雖然他脾氣不好",
          "但是在朋友之間",
          "還是很受歡迎"
        ],
        "hintText": "雖然他脾氣不好，但是在朋友之間還是"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的服務態度很好，所以一直很受歡迎。",
        "pinyin": "yīn wèi zhè jiā diàn de fú wù tài dù hěn hǎo，suǒ yǐ yī zhí hěn shòu huān yíng。",
        "japanese": "この店は接客態度が良いので、ずっと人気がある。",
        "chunks": [
          "因為這家店的服務態度很好",
          "所以",
          "一直很受歡迎"
        ],
        "hintText": "因為這家店的服務態度很好，所以一直"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要把發票整理好，在退貨時就會比較受歡迎。",
        "pinyin": "zhǐ yào bǎ fā piào zhěng lǐ hǎo，zài tuì huò shí jiù huì bǐ jiào shòu huān yíng。",
        "japanese": "領収書をきちんと整理しておけば、返品の時に歓迎されやすい。",
        "chunks": [
          "只要把發票整理好",
          "在退貨時",
          "就會比較受歡迎"
        ],
        "hintText": "只要把發票整理好，在退貨時就會"
      }
    ]
  },
  {
    "id": "B-049",
    "band": "B",
    "targetWord": "取得",
    "distractors": [
      "解決",
      "放棄",
      "拒絕"
    ],
    "grammarNote": "「順利」は「順調に、滞りなく」という意味の副詞としてよく使われます。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為我順利取得了專業證照，所以公司決定幫我加薪。",
        "pinyin": "yīn wèi wǒ shùn lì qǔ dé le zhuān yè zhèng zhào，suǒ yǐ gōng sī jué dìng bāng wǒ jiā xīn。",
        "japanese": "私は順調に専門資格を取得したので、会社は私の給料を上げることに決めました。",
        "chunks": [
          "因為我",
          "順利取得了專業證照",
          "所以公司決定幫我加薪"
        ],
        "hintText": "因為我"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然申請補辦健保卡的流程很麻煩，但我最後還是順利取得了。",
        "pinyin": "suī rán shēn qǐng bǔ bàn jiàn bǎo kǎ de liú chéng hěn má fan，dàn wǒ zuì hòu hái shì shùn lì qǔ dé le。",
        "japanese": "健康保険証の再発行手続きはとても面倒でしたが、最終的には順調に取得できました。",
        "chunks": [
          "雖然申請補辦健保卡的流程很麻煩",
          "但我最後還是順利取得了"
        ],
        "hintText": "雖然申請補辦健保卡的流程很麻煩，但我最後還是"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要集滿十張發票，就可以順利取得這家店的限量贈品。",
        "pinyin": "zhǐ yào jí mǎn shí zhāng fā piào，jiù kě yǐ shùn lì qǔ dé zhè jiā diàn de xiàn liàng zèng pǐn。",
        "japanese": "レシートを10枚集めさえすれば、この店の数量限定のノベルティを順調に入手できます。",
        "chunks": [
          "只要集滿十張發票",
          "就可以順利取得這家店的限量贈品"
        ],
        "hintText": "只要集滿十張發票，就可以"
      }
    ]
  },
  {
    "id": "B-050",
    "band": "B",
    "targetWord": "違反",
    "distractors": [
      "保護",
      "發揮",
      "建立"
    ],
    "grammarNote": "「嚴重違反」のように、副詞＋動詞の組み合わせで程度を強調します。",
    "examples": [
      {
        "situation": "交通・移動",
        "chinese": "因為他嚴重違反交通規則，所以被警察開了罰單。",
        "pinyin": "yīn wèi tā yán zhòng wéi fǎn jiāo tōng guī zé, suǒ yǐ bèi jǐng chá kāi le fá dān.",
        "japanese": "彼が交通規則に著しく違反したため、警察に罰金切符を切られました。",
        "chunks": [
          "因為他",
          "嚴重違反",
          "交通規則",
          "所以被警察開了罰單"
        ],
        "hintText": "因為他"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然只是輕微違反，但是房東還是堅持要扣押金。",
        "pinyin": "suī rán zhǐ shì qīng wēi wéi fǎn, dàn shì fáng dōng hái shì jiān chí yào kòu yā jīn.",
        "japanese": "軽微な違反ではありますが、大家は敷金を差し押さえると主張しています。",
        "chunks": [
          "雖然只是",
          "輕微違反",
          "但是房東",
          "還是堅持要扣押金"
        ],
        "hintText": "雖然只是"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要沒有嚴重違反公司規定，就不會影響年終獎金。",
        "pinyin": "zhǐ yào méi yǒu yán zhòng wéi fǎn gōng sī guī dìng, jiù bù huì yǐng xiǎng nián zhōng jiǎng jīn.",
        "japanese": "会社の規定に重大な違反をしなければ、年末ボーナスに影響はありません。",
        "chunks": [
          "只要沒有",
          "嚴重違反",
          "公司規定",
          "就不會影響年終獎金"
        ],
        "hintText": "只要沒有"
      }
    ]
  },
  {
    "id": "B-051",
    "band": "B",
    "targetWord": "尊重",
    "distractors": [
      "保護",
      "放棄",
      "拒絕"
    ],
    "grammarNote": "「尊重（zūn zhòng）」は、他人の意見やプライバシーを重んじる際に使われます。",
    "bossReading": {
      "text": "為了在職場上順利[ ? ]專業執照，他不但每天嚴重違反自己的休息時間拚命讀書，還學會了如何尊重並向優秀的同事學習。",
      "targetWord": "取得",
      "distractors": [
        "解決",
        "放棄",
        "拒絕"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "資格（執照）を「取得（取得する）」するために、自分の時間を削って努力し、他人の権利を「尊重（尊重する）」しながら成長するというストーリーです。法律に「違反（違反する）」という言葉を比喩的に使って努力の凄さを表現しています。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他年紀比我小，但我還是很尊重他的決定。",
        "pinyin": "suī rán tā nián jì bǐ wǒ xiǎo，dàn wǒ hái shì hěn zūn zhòng tā de jué dìng。",
        "japanese": "彼は年下ですが、私は彼の決定を尊重しています。",
        "chunks": [
          "雖然他年紀比我小，",
          "但我還是很",
          "尊重他的決定。"
        ],
        "hintText": "雖然他年紀比我小，但我還是很"
      },
      {
        "situation": "店舗・サービス",
        "pinyin": "zhǐ yào nǐ zūn zhòng diàn jiā de guī dìng，jiù kě yǐ xiǎng shòu zhé kòu。",
        "chinese": "只要你尊重店家的規定，就可以享受折扣。",
        "japanese": "お店のルールを尊重すれば、割引を受けられます。",
        "chunks": [
          "只要你尊重店家的規定，",
          "就可以",
          "享受折扣。"
        ],
        "hintText": "只要你"
      },
      {
        "situation": "公的手続き・職場",
        "pinyin": "yīn wèi wǒ men bǐ xū zūn zhòng kè hù de yǐn sī，suǒ yǐ bù néng suí biàn xiè lòu zī liào。",
        "chinese": "因為我們必須尊重客戶的隱私，所以不能隨便洩漏資料。",
        "japanese": "私たちは顧客のプライバシーを尊重しなければならないので、簡単に情報を漏らすことはできません。",
        "chunks": [
          "因為我們必須尊重客戶的隱私，",
          "所以",
          "不能隨便洩漏資料。"
        ],
        "hintText": "因為我們必須"
      }
    ]
  },
  {
    "id": "B-052",
    "band": "B",
    "targetWord": "趨勢",
    "distractors": [
      "情況",
      "環境",
      "機會"
    ],
    "grammarNote": "「感到」は、ある状況によって内面的な感情を「感じる」ことを表します。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為最近的疫情趨勢很不穩定，所以我感到非常焦慮。",
        "pinyin": "yīn wèi zuì jìn de yì qíng qū shì hěn bù wěn dìng, suǒ yǐ wǒ gǎn dào fēi cháng jiāo lǜ.",
        "japanese": "最近の疫病の傾向がとても不安定なので、私は非常に焦りを感じています。",
        "chunks": [
          "因為最近的疫情趨勢",
          "很不穩定",
          "所以我感到非常焦慮"
        ],
        "hintText": "因為最近的疫情趨勢"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然捷運的搭乘趨勢在增加，但是還是很多人感到不方便。",
        "pinyin": "suī rán jié yùn de dā chéng qū shì zài zēng jiā, dàn shì hái shì hěn duō rén gǎn dào bù fāng biàn.",
        "japanese": "MRTの利用傾向は増加していますが、それでも多くの人が不便だと感じています。",
        "chunks": [
          "雖然捷運的搭乘趨勢",
          "在增加",
          "但是還是很多人感到不方便"
        ],
        "hintText": "雖然捷運的搭乘趨勢"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要打折的趨勢繼續，我就會感到更想買東西。",
        "pinyin": "zhǐ yào dǎ zhé de qū shì jì xù, wǒ jiù huì gǎn dào gèng xiǎng mǎi dōng xī.",
        "japanese": "割引の傾向が続けば、私はもっと買い物をしたくなると感じます。",
        "chunks": [
          "只要打折的趨勢繼續",
          "我就會感到",
          "更想買東西"
        ],
        "hintText": "只要打折的趨勢繼續"
      }
    ]
  },
  {
    "id": "B-053",
    "band": "B",
    "targetWord": "累積",
    "distractors": [
      "增加",
      "發生",
      "解決"
    ],
    "grammarNote": "「豐富（fēng fù）」は経験や知識、資源が「たっぷりある」状態を形容します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他年紀輕輕，但是因為長期累積的經驗，所以處理事情很成熟。",
        "pinyin": "suī rán tā nián jì qīng qīng，dàn shì yīn wèi cháng qī lěi jī de jīng yàn，suǒ yǐ chǔ lǐ shì qíng hěn chéng shú。",
        "japanese": "彼は若いけれど、長期間積み重ねた経験があるので、物事の処理がとても成熟しています。",
        "chunks": [
          "雖然他年紀輕輕",
          "但是因為長期累積的經驗",
          "所以處理事情很成熟"
        ],
        "hintText": "雖然他年紀輕輕，但是因為長期"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要消費滿五百元，就可以累積點數兌換發票折扣。",
        "pinyin": "zhǐ yào xiāo fèi mǎn wǔ bǎi yuán，jiù kě yǐ lěi jī diǎn shù duì huàn fā piào zhé kòu。",
        "japanese": "500元以上購入すれば、ポイントを貯めて発票割引と交換できます。",
        "chunks": [
          "只要消費滿五百元",
          "就可以累積點數",
          "兌換發票折扣"
        ],
        "hintText": "只要消費滿五百元，就可以"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為每天搭捷運累積的里程數很多，所以這個月可以換一張免費車票。",
        "pinyin": "yīn wèi měi tiān dā jié yùn lěi jī de lǐ chéng shù hěn duō，suǒ yǐ zhè ge yuè kě yǐ huàn yī zhāng miǎn fèi chē piào。",
        "japanese": "毎日MRTに乗って積み重ねた走行距離が多いので、今月は無料チケットと交換できます。",
        "chunks": [
          "因為每天搭捷運累積的里程數很多",
          "所以這個月",
          "可以換一張免費車票"
        ],
        "hintText": "因為每天搭捷運"
      }
    ]
  },
  {
    "id": "B-054",
    "band": "B",
    "targetWord": "承擔",
    "distractors": [
      "解決",
      "放棄",
      "準備"
    ],
    "grammarNote": "「承擔責任（chéng dān zé rèn）」はセットで使われることの多いコロケーションです。",
    "bossReading": {
      "text": "根據最近的經濟[ ? ]，如果你想要累積豐富的財富，就必須學會對自己的投資選擇承擔責任，而不是在賠錢時只會怪罪別人。",
      "targetWord": "趨勢",
      "distractors": [
        "情況",
        "環境",
        "機會"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "経済の「趨勢（トレンド・潮流）」に基づき、富を「累積（積み上げる）」するためには、自分の選択に「承擔（引き受ける）」責任が必要だという、自己責任の重要性を説く文脈です。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他是獨生子，但他還是願意承擔照顧父母的責任。",
        "pinyin": "suī rán tā shì dú shēng zǐ，dàn tā hái shì yuàn yì chéng dān zhào gù fù mǔ de zé rèn。",
        "japanese": "雖然他是獨生子，但他還是願意承擔照顧父母的責任。",
        "chunks": [
          "雖然他是獨生子",
          "但他還是願意",
          "承擔照顧父母的責任"
        ],
        "hintText": "雖然他是獨生子，但他還是願意"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為機車突然拋錨，所以他必須承擔所有的維修費用。",
        "pinyin": "yīn wèi jī chē tū rán pāo máo，suǒ yǐ tā bì xū chéng dān suǒ yǒu de wéi xiū fèi yòng。",
        "japanese": "因為機車突然拋錨，所以他必須承擔所有的維修費用。",
        "chunks": [
          "因為機車突然拋錨",
          "所以他必須",
          "承擔所有的維修費用"
        ],
        "hintText": "因為機車突然拋錨，所以他必須"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要專案延遲，他就得承擔全部的賠償責任。",
        "pinyin": "zhǐ yào zhuān àn yán chí，tā jiù děi chéng dān quán bù de péi cháng zé rèn。",
        "japanese": "只要專案延遲，他就得承擔全部的賠償責任。",
        "chunks": [
          "只要專案延遲",
          "他就得",
          "承擔全部的賠償責任"
        ],
        "hintText": "只要專案延遲，他就得"
      }
    ]
  },
  {
    "id": "B-055",
    "band": "B",
    "targetWord": "由於",
    "distractors": [
      "因為",
      "所以",
      "但是"
    ],
    "grammarNote": "「由於（yóu yú）」は「因為」よりフォーマルな、原因や理由を表す言葉です。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "由於發票沒對中，所以我就沒去兌獎了。",
        "pinyin": "yóu yú fā piào méi duì zhōng, suǒ yǐ wǒ jiù méi qù duì jiǎng le.",
        "japanese": "領収書が当たらなかったので、私は賞品交換に行きませんでした。",
        "chunks": [
          "由於發票沒對中",
          "所以我就沒去兌獎了"
        ],
        "hintText": "由於發票沒對中，"
      },
      {
        "situation": "交通・移動",
        "chinese": "由於捷運故障，所以我們只好改搭公車。",
        "pinyin": "yóu yú jié yùn gù zhàng, suǒ yǐ wǒ men zhǐ hǎo gǎi dā gōng chē.",
        "japanese": "地下鉄が故障したので、私たちはバスに乗り換えました。",
        "chunks": [
          "由於捷運故障",
          "所以我們只好改搭公車"
        ],
        "hintText": "由於捷運故障，"
      },
      {
        "situation": "生活トラブル",
        "chinese": "由於機車突然發不動，害我上班遲到了。",
        "pinyin": "yóu yú jī chē tū rán fā bù dòng, hài wǒ shàng bān chí dào le.",
        "japanese": "バイクが突然エンストしたので、私は仕事に遅刻しました。",
        "chunks": [
          "由於機車突然發不動",
          "害我上班遲到了"
        ],
        "hintText": "由於機車突然發不動，"
      }
    ]
  },
  {
    "id": "B-056",
    "band": "B",
    "targetWord": "理念",
    "distractors": [
      "環境",
      "機會",
      "經驗"
    ],
    "grammarNote": "「理念（lǐ niàn）」は、根底にある考え方や信念を指します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然爸爸的教養理念跟我不太一樣，但我還是很尊重他。",
        "pinyin": "suī rán bà ba de jiào yǎng lǐ niàn gēn wǒ bù tài yī yàng ， dàn wǒ hái shì hěn zūn zhòng tā 。",
        "japanese": "雖然爸爸的教育理念和我不太一樣，但我還是很尊重他。",
        "chunks": [
          "雖然爸爸的教養理念",
          "跟我不太一樣",
          "但我還是很尊重他"
        ],
        "hintText": "雖然爸爸的教養"
      },
      {
        "situation": "店舗・服務",
        "chinese": "因為這家餐廳的經營理念很環保，所以我們常常來光顧。",
        "pinyin": "yīn wèi zhè jiā cān tīng de jīng yíng lǐ niàn hěn huán bǎo ， suǒ yǐ wǒ men cháng cháng lái guāng gù 。",
        "japanese": "因為這家餐廳的經營理念很環保，所以我們常常來光顧。",
        "chunks": [
          "因為這家餐廳的經營理念",
          "很環保",
          "所以我們常常來光顧"
        ],
        "hintText": "因為這家餐廳的經營"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要房東的修繕理念能跟我們溝通，就不用鬧到法院。",
        "pinyin": "zhǐ yào fáng dōng de xiū shàn lǐ niàn néng gēn wǒ men gōu tōng ， jiù bù yòng nào dào fǎ yuàn 。",
        "japanese": "只要房東的修繕理念能和我們溝通，就不用鬧到法院。",
        "chunks": [
          "只要房東的修繕理念",
          "能跟我們溝通",
          "就不用鬧到法院"
        ],
        "hintText": "只要房東的修繕"
      }
    ]
  },
  {
    "id": "B-057",
    "band": "B",
    "targetWord": "採取",
    "distractors": [
      "解決",
      "發揮",
      "建立"
    ],
    "grammarNote": "「採取措施（cǎi qǔ cuò shī）」で「措置を講じる」という定型表現です。",
    "bossReading": {
      "text": "台北捷運臨時故障，市府立刻[ ? ]分流措施並加強宣導，因此站務人員發揮效率引導人潮；雖然下大雨，通勤族依然照常趕上班。",
      "targetWord": "採取",
      "distractors": [
        "取消",
        "依靠",
        "提供"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "[ ? ] の後ろに「分流措施」が続くため、定型の「採取（措施）＝措置を講じる」が最も自然です。「發揮」は能力や效率を“発揮する”で、文中の「發揮效率」に対応します。「依然」は天候などの条件が悪くても状態が変わらないことを表し、「依然照常趕上班」で“相変わらず”の意味になります。"
    },
    "examples": [
      {
        "situation": "交通・移動",
        "chinese": "因為捷運最近常誤點，所以公司採取措施來改善班次。",
        "pinyin": "yīn wèi jié yùn zuì jìn cháng wù diǎn, suǒ yǐ gōng sī cǎi qǔ cuò shī lái gǎi shàn bān cì.",
        "japanese": "最近メトロがよく遅延するので、会社はダイヤ改善の措置を講じています。",
        "chunks": [
          "因為捷運最近常誤點",
          "所以公司採取措施",
          "來改善班次"
        ],
        "hintText": "因為捷運最近常誤點，所以公司"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然鄰居養狗很吵，但只要管委會採取措施，就能解決問題。",
        "pinyin": "suī rán lín jū yǎng gǒu hěn chǎo, dàn zhǐ yào guǎn wěi huì cǎi qǔ cuò shī, jiù néng jiě jué wèn tí.",
        "japanese": "隣人が犬を飼っていてうるさいけれど、管理委員会が措置を講じれば問題は解決します。",
        "chunks": [
          "雖然鄰居養狗很吵",
          "但只要管委會採取措施",
          "就能解決問題"
        ],
        "hintText": "雖然鄰居養狗很吵，但只要管委會"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為健保卡遺失，所以公司採取措施幫員工補辦。",
        "pinyin": "yīn wèi jiàn bǎo kǎ yí shī, suǒ yǐ gōng sī cǎi qǔ cuò shī bāng yuán gōng bǔ bàn.",
        "japanese": "健康保険証を紛失したので、会社は従業員の再発行を支援する措置を講じています。",
        "chunks": [
          "因為健保卡遺失",
          "所以公司採取措施",
          "幫員工補辦"
        ],
        "hintText": "因為健保卡遺失，所以公司"
      }
    ]
  },
  {
    "id": "B-058",
    "band": "B",
    "targetWord": "發揮",
    "distractors": [
      "準備",
      "解決",
      "放棄"
    ],
    "grammarNote": "「發揮（fā huī）」は持っている能力や技術を「発揮する、表に出す」際に使います。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他平常很安靜，但是在家庭聚會中總能發揮幽默感，讓大家笑得很開心。",
        "pinyin": "suī rán tā píng cháng hěn ān jìng, dàn shì zài jiā tíng jù huì zhōng zǒng néng fā huī yōu mò gǎn, ràng dà jiā xiào de hěn kāi xīn.",
        "japanese": "彼は普段はとても静かですが、家族の集まりではいつもユーモアを発揮して、みんなを大笑いさせます。",
        "chunks": [
          "雖然他平常很安靜",
          "但是在家庭聚會中總能發揮幽默感",
          "讓大家笑得很開心"
        ],
        "hintText": "雖然他平常很安靜，但是在家庭聚會中總能"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家火鍋店的湯頭很棒，所以每次聚餐都能讓廚師發揮創意，調出不同風味。",
        "pinyin": "yīn wèi zhè jiā huǒ guō diàn de tāng tóu hěn bàng, suǒ yǐ měi cì jù cān dōu néng ràng chú shī fā huī chuàng yì, tiáo chū bù tóng fēng wèi.",
        "japanese": "この火鍋店のスープがとても美味しいので、毎回の食事でシェフが創意を発揮して、異なる風味を引き出せます。",
        "chunks": [
          "因為這家火鍋店的湯頭很棒",
          "所以每次聚餐都能讓廚師發揮創意",
          "調出不同風味"
        ],
        "hintText": "因為這家火鍋店的湯頭很棒，所以每次聚餐都能讓廚師"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要停電時保持冷靜，就能發揮應變能力，快速找到手電筒和備用電池。",
        "pinyin": "zhǐ yào tíng diàn shí bǎo chí lěng jìng, jiù néng fā huī yìng biàn néng lì, kuài sù zhǎo dào shǒu diàn tǒng hé bèi yòng diàn chí.",
        "japanese": "停電の時に冷静さを保てば、対応能力を発揮して、懐中電灯と予備の電池をすぐに見つけられます。",
        "chunks": [
          "只要停電時保持冷靜",
          "就能發揮應變能力",
          "快速找到手電筒和備用電池"
        ],
        "hintText": "只要停電時保持冷靜，就能"
      }
    ]
  },
  {
    "id": "B-059",
    "band": "B",
    "targetWord": "依然",
    "distractors": [
      "所以",
      "甚至",
      "既然"
    ],
    "grammarNote": "「依然（yī rán）」は「相変わらず、以前と同様に」という意味の副詞です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他已經道歉了，我依然無法原諒他的行為。",
        "pinyin": "suī rán tā yǐ jīng dào qiàn le, wǒ yī rán wú fǎ yuán liàng tā de xíng wéi.",
        "japanese": "彼は謝ったけれど、私は依然として彼の行動を許せない。",
        "chunks": [
          "雖然他已經道歉了",
          "我依然無法原諒",
          "他的行為"
        ],
        "hintText": "雖然他已經道歉了，"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為捷運施工的關係，這條路依然塞車很嚴重。",
        "pinyin": "yīn wèi jié yùn shī gōng de guān xì, zhè tiáo lù yī rán sāi chē hěn yán zhòng.",
        "japanese": "MRTの工事のため、この道は依然として渋滞がひどい。",
        "chunks": [
          "因為捷運施工的關係",
          "這條路依然塞車",
          "很嚴重"
        ],
        "hintText": "因為捷運施工的關係，"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要不換掉老舊管線，水壓依然會不穩定。",
        "pinyin": "zhǐ yào bù huàn diào lǎo jiù guǎn xiàn, shuǐ yā yī rán huì bù wěn dìng.",
        "japanese": "古い配管を取り替えない限り、水圧は依然として不安定だ。",
        "chunks": [
          "只要不換掉老舊管線",
          "水壓依然會",
          "不穩定"
        ],
        "hintText": "只要不換掉老舊管線，"
      }
    ]
  },
  {
    "id": "B-060",
    "band": "B",
    "targetWord": "維持",
    "distractors": [
      "改變",
      "放棄",
      "準備"
    ],
    "grammarNote": "「維持（wéi chí）」は現状や良好な状態を「保つ」ことを意味します。",
    "bossReading": {
      "text": "公司導入新軟體後，大家得重新[ ? ]流程；主管提醒要維持和客戶的穩定合作，並用數據說明這次轉型的價值，才不會白忙一場。",
      "targetWord": "適應",
      "distractors": [
        "拒絕",
        "放棄",
        "取消"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "新しい「軟體」導入後に必要なのは“慣れる・順応する”なので「適應（適應流程）」が正解です。「維持」は状態を保つで、「維持穩定的合作」につながります。「價值」は金額だけでなく“意義・有益さ”を表し、データで転換の価値を示す、というビジネス文脈に合います。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們常常吵架，但是為了維持感情，還是要互相包容。",
        "pinyin": "suī rán wǒ men cháng cháng chǎo jià, dàn shì wèi le wéi chí gǎn qíng, hái shì yào hù xiāng bāo róng.",
        "japanese": "私たちはよく喧嘩するけれど、関係を維持するためにはお互いを許容しなければなりません。",
        "chunks": [
          "雖然我們常常吵架",
          "但是為了維持感情",
          "還是要互相包容"
        ],
        "hintText": "雖然我們常常吵架，但是為了"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店堅持維持品質，所以即使不打折客人還是很多。",
        "pinyin": "yīn wèi zhè jiā diàn jiān chí wéi chí pǐn zhí, suǒ yǐ jí shǐ bù dǎ zhé kè rén hái shì hěn duō.",
        "japanese": "この店は品質を維持することにこだわっているので、割引しなくてもお客さんは多いです。",
        "chunks": [
          "因為這家店堅持維持品質",
          "所以即使不打折",
          "客人還是很多"
        ],
        "hintText": "因為這家店堅持"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要按時繳健保費，就能維持健保卡的效力。",
        "pinyin": "zhǐ yào àn shí jiǎo jiàn bǎo fèi, jiù néng wéi chí jiàn bǎo kǎ de xiào lì.",
        "japanese": "保険料を期限内に払えば、健康保険証の効力を維持できます。",
        "chunks": [
          "只要按時繳健保費",
          "就能維持健保卡的效力"
        ],
        "hintText": "只要按時繳健保費，就能"
      }
    ]
  },
  {
    "id": "B-061",
    "band": "B",
    "targetWord": "適應",
    "distractors": [
      "改變",
      "放棄",
      "拒絕"
    ],
    "grammarNote": "「適應（shì yìng）」は、新しい場所や状況に「慣れる、適合する」ことを指します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然剛搬來的時候很不習慣，但現在我已經慢慢適應這裡的生活了。",
        "pinyin": "suī rán gāng bān lái de shí hòu hěn bù xí guàn，dàn xiàn zài wǒ yǐ jīng màn màn shì yìng zhè lǐ de shēng huó le。",
        "japanese": "引っ越してきたばかりの頃はとても慣れなかったけれど、今はだんだんここの生活に慣れてきました。",
        "chunks": [
          "雖然剛搬來的時候很不習慣",
          "但現在我已經慢慢",
          "適應這裡的生活了"
        ],
        "hintText": "雖然剛搬來的時候很不習慣，但現在我已經慢慢"
      },
      {
        "situation": "交通・移動",
        "japanese": "因為台北的捷運很方便，所以我很快就適應了搭捷運通勤。",
        "chinese": "因為台北的捷運很方便，所以我很快就適應了搭捷運通勤。",
        "pinyin": "yīn wèi tái běi de jié yùn hěn fāng biàn，suǒ yǐ wǒ hěn kuài jiù shì yìng le dā jié yùn tōng qín。",
        "hintText": "因為台北的捷運很方便，所以我很快就",
        "chunks": [
          "因為台北的捷運很方便",
          "所以我很快就",
          "適應了搭捷運通勤"
        ]
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要拿到健保卡，就能適應台灣的醫療制度，看病很方便。",
        "pinyin": "zhǐ yào ná dào jiàn bǎo kǎ，jiù néng shì yìng tái wān de yī liáo zhì dù，kàn bìng hěn fāng biàn。",
        "japanese": "健保カードを手に入れさえすれば、台湾の医療制度に慣れて、受診がとても便利になります。",
        "chunks": [
          "只要拿到健保卡",
          "就能",
          "適應台灣的醫療制度，看病很方便"
        ],
        "hintText": "只要拿到健保卡，就能"
      }
    ]
  },
  {
    "id": "B-062",
    "band": "B",
    "targetWord": "價值",
    "distractors": [
      "價格",
      "經驗",
      "情況"
    ],
    "grammarNote": "「價值（jià zhí）」は金銭的な値段だけでなく、有益さや意義も含みます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然這條項鍊不貴，但對我有紀念價值。",
        "pinyin": "suī rán zhè tiáo xiàng liàn bù guì, dàn duì wǒ yǒu jì niàn jià zhí.",
        "japanese": "このネックレスは高くないけど、私にとっては記念の価値がある。",
        "chunks": [
          "雖然這條項鍊不貴，",
          "但對我有",
          "紀念價值。"
        ],
        "hintText": "雖然這條項鍊不貴，但對我有"
      },
      {
        "situation": "店舗・サービス",
        "category": "店舗・サービス",
        "chinese": "因為這家店的東西有價值，所以我願意多花一點錢。",
        "pinyin": "yīn wèi zhè jiā diàn de dōng xi yǒu jià zhí, suǒ yǐ wǒ yuàn yì duō huā yī diǎn qián.",
        "japanese": "この店のものは価値があるので、少し多めにお金を払ってもいい。",
        "chunks": [
          "因為這家店的東西有價值，",
          "所以我願意",
          "多花一點錢。"
        ],
        "hintText": "因為這家店的東西有價值，所以我願意"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要找到有用的發票，這次消費就有退貨價值。",
        "pinyin": "zhǐ yào zhǎo dào yǒu yòng de fā piào, zhè cì xiāo fèi jiù yǒu tuì huò jià zhí.",
        "japanese": "役に立つレシートが見つかれば、今回の買い物には返品する価値がある。",
        "chunks": [
          "只要找到有用的發票，",
          "這次消費就有",
          "退貨價值。"
        ],
        "hintText": "只要找到有用的發票，這次消費就有"
      }
    ]
  },
  {
    "id": "B-063",
    "band": "B",
    "targetWord": "既然",
    "distractors": [
      "雖然",
      "如果",
      "因為"
    ],
    "grammarNote": "「既然〜，就...」で「〜であるからには（既定事実を受けて）、...すればよい」という論理展開になります。",
    "bossReading": {
      "text": "既然你想進台北的新創公司，就把過去的專案經歷整理成作品集，因此面試時更能說明自己能提升團隊的[ ? ]，甚至願意學新工具配合節奏。",
      "targetWord": "競爭力",
      "distractors": [
        "壓力",
        "能力",
        "動力"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「提升團隊的[ ? ]」はビジネスの定番コロケーションで、競争力を高める＝「提升競爭力」が最も自然です。「既然〜，就…」は“そうなら”という既定条件からの結論を作り、「既然你想進…，就…」の流れになります。「經歷」は実際に積んだ経験・経歴で、面接で強みとして提示する内容に合います。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "既然你們已經結婚了，就應該互相體諒一下。",
        "pinyin": "jì rán nǐ men yǐ jīng jié hūn le, jiù yīng gāi hù xiāng tǐ liàng yī xià.",
        "japanese": "もう結婚したのだから、お互いに思いやりを持つべきです。",
        "chunks": [
          "既然你們已經結婚了",
          "就應該互相體諒一下"
        ],
        "hintText": "既然你們已經結婚了，"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "既然這件衣服打五折，我就買兩件吧。",
        "pinyin": "jì rán zhè jiàn yī fú dǎ wǔ zhé, wǒ jiù mǎi liǎng jiàn ba.",
        "japanese": "この服が半額になったのだから、2着買いましょう。",
        "chunks": [
          "既然這件衣服打五折",
          "我就買兩件吧"
        ],
        "hintText": "既然這件衣服打五折，"
      },
      {
        "situation": "交通・移動",
        "chinese": "既然捷運這麼方便，我們就搭捷運去吧。",
        "pinyin": "jì rán jié yùn zhè me fāng biàn, wǒ men jiù dā jié yùn qù ba.",
        "japanese": "MRTがこんなに便利なのだから、MRTで行きましょう。",
        "chunks": [
          "既然捷運這麼方便",
          "我們就搭捷運去吧"
        ],
        "hintText": "既然捷運這麼方便，"
      }
    ]
  },
  {
    "id": "B-064",
    "band": "B",
    "targetWord": "經歷",
    "distractors": [
      "經驗",
      "環境",
      "態度"
    ],
    "grammarNote": "「經歷（jīng lì）」は、実際に通り過ぎてきた出来事や時間の経過に重きを置いた「経験」です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他年紀輕輕，但已經有過很多不同的經歷，所以說話很成熟。",
        "pinyin": "suī rán tā nián jì qīng qīng, dàn yǐ jīng yǒu guò hěn duō bù tóng de jīng lì, suǒ yǐ shuō huà hěn chéng shú.",
        "japanese": "彼は若いですが、すでに多くの異なる経験をしているので、話し方がとても大人びています。",
        "chunks": [
          "雖然他年紀輕輕",
          "但已經有過很多不同的經歷",
          "所以說話很成熟"
        ],
        "hintText": "雖然他年紀輕輕，但已經有過很多不同的"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為我騎機車的經歷不多，所以下雨天我寧願搭捷運。",
        "pinyin": "yīn wèi wǒ qí jī chē de jīng lì bù duō, suǒ yǐ xià yǔ tiān wǒ nìng yuàn dā jié yùn.",
        "japanese": "私はバイクに乗った経験が少ないので、雨の日はむしろMRTに乗ります。",
        "chunks": [
          "因為我騎機車的經歷不多",
          "所以下雨天我寧願搭捷運"
        ],
        "hintText": "因為我騎機車的"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要你有過被詐騙的經歷，就會更小心保管自己的個資。",
        "pinyin": "zhǐ yào nǐ yǒu guò bèi zhà piàn de jīng lì, jiù huì gèng xiǎo xīn bǎo guǎn zì jǐ de gè zī.",
        "japanese": "詐欺に遭った経験があれば、自分の個人情報をより慎重に管理するようになります。",
        "chunks": [
          "只要你有過被詐騙的經歷",
          "就會更小心保管自己的個資"
        ],
        "hintText": "只要你有過被詐騙的"
      }
    ]
  },
  {
    "id": "B-065",
    "band": "B",
    "targetWord": "競爭力",
    "distractors": [
      "壓力",
      "能力",
      "動力"
    ],
    "grammarNote": "「競爭力（jìng zhēng lì）」は、ビジネスシーンで頻出の中級語彙です。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的服務態度很好，所以它的競爭力比其他店強很多。",
        "pinyin": "yīn wèi zhè jiā diàn de fú wù tài dù hěn hǎo, suǒ yǐ tā de jìng zhēng lì bǐ qí tā diàn qiáng hěn duō.",
        "japanese": "この店はサービスの態度がとても良いので、競争力は他の店よりずっと強いです。",
        "chunks": [
          "因為這家店的服務態度很好",
          "所以它的競爭力",
          "比其他店強很多"
        ],
        "hintText": "因為這家店的服務態度很好，所以它的"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然公司最近在裁員，但只要努力提升競爭力，就不用擔心被解雇。",
        "pinyin": "suī rán gōng sī zuì jìn zài cái yuán, dàn zhǐ yào nǔ lì tí shēng jìng zhēng lì, jiù bù yòng dān xīn bèi jiě gù.",
        "japanese": "会社は最近人員削減をしていますが、競争力を高める努力をすれば、解雇を心配する必要はありません。",
        "chunks": [
          "雖然公司最近在裁員",
          "但只要努力提升競爭力",
          "就不用擔心被解雇"
        ],
        "hintText": "雖然公司最近在裁員，但只要努力提升"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為捷運的票價比機車便宜，所以它的競爭力在通勤族中越來越高。",
        "pinyin": "yīn wèi jié yùn de piào jià bǐ jī chē pián yí, suǒ yǐ tā de jìng zhēng lì zài tōng qín zú zhōng yuè lái yuè gāo.",
        "japanese": "MRTの運賃はバイクより安いので、通勤者の間で競争力がますます高まっています。",
        "chunks": [
          "因為捷運的票價比機車便宜",
          "所以它的競爭力",
          "在通勤族中越來越高"
        ],
        "hintText": "因為捷運的票價比機車便宜，所以它的"
      }
    ]
  },
  {
    "id": "B-066",
    "band": "B",
    "targetWord": "關鍵",
    "distractors": [
      "條件",
      "機會",
      "經驗"
    ],
    "grammarNote": "「關鍵（guān jiàn）」は「最も重要なポイント、鍵」を指します。",
    "bossReading": {
      "text": "在環保講座裡，老師說減塑是改變未來的關鍵，但外送的塑膠垃圾依然存在；因此他建議大家自備杯餐具，才能[ ? ]社區的乾淨與健康。",
      "targetWord": "保持",
      "distractors": [
        "放棄",
        "破壞",
        "結束"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「才能[ ? ]社區的乾淨與健康」は“良い状態をキープする”意味が必要なので「保持」が正解です。「關鍵」は最重要ポイントで、「減塑是…的關鍵」と原因・核心を示します。「存在」は“存在している”で、問題（塑膠垃圾）がまだ残っている現状を表します。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他平常很忙，但是只要家人需要幫助，他就會放下一切，因為家庭是他生活的關鍵。",
        "pinyin": "suī rán tā píng cháng hěn máng, dàn shì zhǐ yào jiā rén xū yào bāng zhù, tā jiù huì fàng xià yī qiè, yīn wèi jiā tíng shì tā shēng huó de guān jiàn.",
        "japanese": "彼は普段とても忙しいけれど、家族が助けを必要とすればすべてを投げ出す。なぜなら家族が彼の生活の鍵だから。",
        "chunks": [
          "雖然他平常很忙",
          "但是只要家人需要幫助",
          "他就會放下一切",
          "因為家庭是他生活的關鍵"
        ],
        "hintText": "雖然他平常很忙，但是只要家人需要幫助，他就會放下一切，因為家庭是他生活的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的服務品質很好，所以即使價格高一點，只要顧客滿意，他們就覺得這是經營的關鍵。",
        "pinyin": "yīn wèi zhè jiā diàn de fú wù pǐn zhí hěn hǎo, suǒ yǐ jí shǐ jià gé gāo yī diǎn, zhǐ yào gù kè mǎn yì, tā men jiù jué de zhè shì jīng yíng de guān jiàn.",
        "japanese": "この店はサービス品質が良いので、たとえ価格が少々高くても、客が満足すればそれが経営の鍵だと考えている。",
        "chunks": [
          "因為這家店的服務品質很好",
          "所以即使價格高一點",
          "只要顧客滿意",
          "他們就覺得這是經營的關鍵"
        ],
        "hintText": "因為這家店的服務品質很好，所以即使價格高一點，只要顧客滿意，他們就覺得這是經營的"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然捷運很方便，但是只要遇到尖峰時段，人潮就會很擁擠，所以避開人潮是搭乘捷運的關鍵。",
        "pinyin": "suī rán jié yùn hěn fāng biàn, dàn shì zhǐ yào yù dào jiān fēng shí duàn, rén cháo jiù huì hěn yōng jǐ, suǒ yǐ bì kāi rén cháo shì dā chéng jié yùn de guān jiàn.",
        "japanese": "MRTはとても便利だが、ラッシュ時に当たると人がとても混雑するので、混雑を避けることがMRTに乗る鍵だ。",
        "chunks": [
          "雖然捷運很方便",
          "但是只要遇到尖峰時段",
          "人潮就會很擁擠",
          "所以避開人潮是搭乘捷運的關鍵"
        ],
        "hintText": "雖然捷運很方便，但是只要遇到尖峰時段，人潮就會很擁擠，所以避開人潮是搭乘捷運的"
      }
    ]
  },
  {
    "id": "B-067",
    "band": "B",
    "targetWord": "存在",
    "distractors": [
      "發生",
      "發現",
      "解決"
    ],
    "grammarNote": "「存在（cún zài）」＋「著（zhe）」で「存在し続けている（持続）」状態を表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他們已經分手了，但兩人之間仍然存在著深厚的感情。",
        "pinyin": "suī rán tā men yǐ jīng fēn shǒu le, dàn liǎng rén zhī jiān réng rán cún zài zhe shēn hòu de gǎn qíng.",
        "japanese": "彼らはもう別れたけれど、二人の間にはまだ深い感情が存在している。",
        "chunks": [
          "雖然他們已經分手了",
          "但兩人之間",
          "仍然存在著深厚的感情"
        ],
        "hintText": "雖然他們已經分手了，但兩人之間仍然"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的發票可以兌獎，所以存在著不少客人特地來消費。",
        "pinyin": "yīn wèi zhè jiā cān tīng de fā piào kě yǐ duì jiǎng, suǒ yǐ cún zài zhe bù shǎo kè rén tè dì lái xiāo fèi.",
        "japanese": "このレストランの領収書が宝くじになるので、わざわざ来る客が少なからず存在している。",
        "chunks": [
          "因為這家餐廳的發票可以兌獎",
          "所以存在著",
          "不少客人特地來消費"
        ],
        "hintText": "因為這家餐廳的發票可以兌獎，所以"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要捷運站附近有停車格，就存在著機車違規停車的問題。",
        "pinyin": "zhǐ yào jié yùn zhàn fù jìn yǒu tíng chē gé, jiù cún zài zhe jī chē wéi guī tíng chē de wèn tí.",
        "japanese": "MRT駅の近くに駐車スペースがあれば、バイクの違法駐車問題が存在する。",
        "chunks": [
          "只要捷運站附近有停車格",
          "就存在著",
          "機車違規停車的問題"
        ],
        "hintText": "只要捷運站附近有停車格，就"
      }
    ]
  },
  {
    "id": "B-068",
    "band": "B",
    "targetWord": "保持",
    "distractors": [
      "維持",
      "改變",
      "放棄"
    ],
    "grammarNote": "「保持（bǎo chí）」は特に健康や状態、静寂などを「そのままキープする」際に使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他最近工作很忙，但還是保持每天跟家人通電話的習慣。",
        "pinyin": "suī rán tā zuì jìn gōng zuò hěn máng, dàn hái shì bǎo chí měi tiān gēn jiā rén tōng diàn huà de xí guàn。",
        "japanese": "彼は最近仕事がとても忙しいけれど、毎日家族と電話する習慣を保っている。",
        "chunks": [
          "雖然他最近工作很忙",
          "但還是保持",
          "每天跟家人通電話的習慣"
        ],
        "hintText": "雖然他最近工作很忙，但還是"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的服務態度很好，所以他們一直保持很多忠實顧客。",
        "pinyin": "yīn wèi zhè jiā diàn de fú wù tài dù hěn hǎo, suǒ yǐ tā men yī zhí bǎo chí hěn duō zhōng shí gù kè。",
        "japanese": "この店のサービス態度がとても良いので、ずっと多くの常連客を保っている。",
        "chunks": [
          "因為這家店的服務態度很好",
          "所以他們一直保持",
          "很多忠實顧客"
        ],
        "hintText": "因為這家店的服務態度很好，所以他們一直"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要定期保養機車，就能保持車況良好，減少故障的機率。",
        "pinyin": "zhǐ yào dìng qī bǎo yǎng jī chē, jiù néng bǎo chí chē kuàng liáng hǎo, jiǎn shǎo gù zhàng de jī lǜ。",
        "japanese": "定期的にバイクをメンテナンスすれば、車の状態を良好に保ち、故障の確率を減らせる。",
        "chunks": [
          "只要定期保養機車",
          "就能保持車況良好",
          "減少故障的機率"
        ],
        "hintText": "只要定期保養機車，就能"
      }
    ]
  },
  {
    "id": "B-069",
    "band": "B",
    "targetWord": "保障",
    "distractors": [
      "解決",
      "準備",
      "發現"
    ],
    "grammarNote": "「權益（quán yì）」は法律的に認められた「権利と利益」を指します。",
    "bossReading": {
      "text": "為了讓行動支付更普及，政府推出新規定，要求業者提供具體的退款流程與客服窗口，以[ ? ]消費者的權益，甚至定期公布稽核結果。",
      "targetWord": "保障",
      "distractors": [
        "破壞",
        "忽視",
        "犧牲"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「以[ ? ]消費者的權益」は“守る・保護する”意味が必要なので「保障」が正解です。「普及」は物事が広く行き渡ることで、行動支付が一般化する流れを表します。「具體」は抽象ではなく具体的で、「具體的退款流程」のように実務で求められる明確さを示します。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為父母很重視我們的權益，所以他們總是保障我們有公平的待遇。",
        "pinyin": "yīn wèi fù mǔ hěn zhòng shì wǒ men de quán yì, suǒ yǐ tā men zǒng shì bǎo zhàng wǒ men yǒu gōng píng de dài yù.",
        "japanese": "両親は私たちの権利をとても重視しているので、常に公平な待遇を保障してくれます。",
        "chunks": [
          "因為父母很重視我們的權益",
          "所以他們總是保障",
          "我們有公平的待遇"
        ],
        "hintText": "因為父母很重視我們的權益，所以他們總是"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家店打折很多，但他們不保障商品的品質，所以我不太放心。",
        "pinyin": "suī rán zhè jiā diàn dǎ zhé hěn duō, dàn tā men bù bǎo zhàng shāng pǐn de pǐn zhì, suǒ yǐ wǒ bù tài fàng xīn.",
        "japanese": "この店は割引が多いけれど、商品の品質を保障していないのであまり安心できません。",
        "chunks": [
          "雖然這家店打折很多",
          "但他們不保障商品的品質",
          "所以我不太放心"
        ],
        "hintText": "雖然這家店打折很多，但他們不"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要公司有完善的勞工保障，員工的權益就能受到保護。",
        "pinyin": "zhǐ yào gōng sī yǒu wán shàn de láo gōng bǎo zhàng, yuán gōng de quán yì jiù néng shòu dào bǎo hù.",
        "japanese": "会社に完全な労働保障があれば、従業員の権益は守られます。",
        "chunks": [
          "只要公司有完善的勞工保障",
          "員工的權益就能",
          "受到保護"
        ],
        "hintText": "只要公司有完善的"
      }
    ]
  },
  {
    "id": "B-070",
    "band": "B",
    "targetWord": "具體",
    "distractors": [
      "抽象",
      "簡單",
      "嚴重"
    ],
    "grammarNote": "「具體（jù tǐ）」は反対に曖昧でない、はっきりした詳細な様子を表します。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為主管要求我們提出具體的計畫，所以大家這幾天都在加班。",
        "pinyin": "yīn wèi zhǔ guǎn yāo qiú wǒ men tí chū jù tǐ de jì huà, suǒ yǐ dà jiā zhè jǐ tiān dōu zài jiā bān.",
        "japanese": "上司が私たちに具体的な計画を提出するよう要求したので、みんなここ数日残業しています。",
        "chunks": [
          "因為主管要求",
          "我們提出具體的計畫",
          "所以大家這幾天都在加班"
        ],
        "hintText": "因為主管要求我們提出"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要你能告訴我具體的地址，我就用機車幫你送過去。",
        "pinyin": "zhǐ yào nǐ néng gào sù wǒ jù tǐ de dì zhǐ, wǒ jiù yòng jī chē bāng nǐ sòng guò qù.",
        "japanese": "具体的な住所を教えてくれれば、バイクで届けてあげますよ。",
        "chunks": [
          "只要你能告訴我",
          "具體的地址",
          "我就用機車幫你送過去"
        ],
        "hintText": "只要你能告訴我"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然房東說會處理漏水問題，但是沒有給具體的時間，讓我很擔心。",
        "pinyin": "suī rán fáng dōng shuō huì chǔ lǐ lòu shuǐ wèn tí, dàn shì méi yǒu gěi jù tǐ de shí jiān, ràng wǒ hěn dān xīn.",
        "japanese": "大家さんは漏水を処理すると言ったけど、具体的な時間をくれなくて、とても心配です。",
        "chunks": [
          "雖然房東說會處理漏水問題",
          "但是沒有給具體的時間",
          "讓我很擔心"
        ],
        "hintText": "雖然房東說會處理漏水問題，但是沒有給"
      }
    ]
  },
  {
    "id": "B-071",
    "band": "B",
    "targetWord": "普及",
    "distractors": [
      "嚴重",
      "複雜",
      "簡單"
    ],
    "grammarNote": "「隨著（suí zhe）」は「〜に従って、〜に伴って」と並行する変化を表します。",
    "examples": [
      {
        "situation": "交通・移動",
        "chinese": "雖然現在騎機車的人很多，但是隨著環保意識的普及，越來越多人改搭捷運。",
        "pinyin": "suī rán xiàn zài qí jī chē de rén hěn duō，dàn shì suí zhe huán bǎo yì shì de pǔ jí，yuè lái yuè duō rén gǎi dā jié yùn。",
        "japanese": "雖然現在騎機車的人很多，但是隨著環保意識的普及，越來越多人改搭捷運。",
        "chunks": [
          "雖然現在騎機車的人很多",
          "但是隨著環保意識的普及",
          "越來越多人改搭捷運"
        ],
        "hintText": "雖然現在騎機車的人很多，但是隨著環保意識的"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為最近電子發票越來越普及，所以只要用手機就能對獎，不用再收集紙本了。",
        "pinyin": "yīn wèi zuì jìn diàn zǐ fā piào yuè lái yuè pǔ jí，suǒ yǐ zhǐ yào yòng shǒu jī jiù néng duì jiǎng，bù yòng zài shōu jí zhǐ běn le。",
        "japanese": "因為最近電子發票越來越普及，所以只要用手機就能對獎，不用再收集紙本了。",
        "chunks": [
          "因為最近電子發票越來越普及",
          "所以只要用手機就能對獎",
          "不用再收集紙本了"
        ],
        "hintText": "因為最近電子發票越來越普及，所以"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然行動支付在台灣越來越普及，但是有些小吃攤還是只收現金。",
        "pinyin": "suī rán xíng dòng zhī fù zài tái wān yuè lái yuè pǔ jí，dàn shì yǒu xiē xiǎo chī tān hái shì zhǐ shōu xiàn jīn。",
        "japanese": "雖然行動支付在台灣越來越普及，但是有些小吃攤還是只收現金。",
        "chunks": [
          "雖然行動支付在台灣越來越普及",
          "但是有些小吃攤還是只收現金"
        ],
        "hintText": "雖然行動支付在台灣越來越普及，但是"
      }
    ]
  },
  {
    "id": "B-072",
    "band": "B",
    "targetWord": "克服",
    "distractors": [
      "解決",
      "放棄",
      "拒絕"
    ],
    "grammarNote": "「克服（kè fú）」は困難や欠点、感情的な障害を乗り越える際に使います。",
    "bossReading": {
      "text": "雖然第一次上台北市政府的宣導活動很緊張，他還是投入準備並練習講稿，因此上台時終於[ ? ]恐懼，順利把政策說清楚。",
      "targetWord": "克服",
      "distractors": [
        "逃避",
        "拖延",
        "忽視"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「[ ? ]恐懼」は目的語に“恐懼”を取り、困難を乗り越える意味の動詞が必要なので「克服」が最適です。「宣導」は台湾でよく使う“周知・啓発”で、政府の告知活動の文脈に自然です。「投入」は時間や心力を注ぐことで、「投入準備」＝本気で準備するニュアンスになります。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他小時候怕黑，但是現在已經克服了這個恐懼。",
        "pinyin": "suī rán tā xiǎo shí hòu pà hēi, dàn shì xiàn zài yǐ jīng kè fú le zhè ge kǒng jù.",
        "japanese": "彼は子供の頃暗いのが怖かったけれど、今ではその恐怖を克服しました。",
        "chunks": [
          "雖然他小時候怕黑，",
          "但是現在已經",
          "克服了這個恐懼。"
        ],
        "hintText": "雖然他小時候怕黑，但是現在已經"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要克服語言障礙，就能在夜市輕鬆用台語殺價。",
        "pinyin": "zhǐ yào kè fú yǔ yán zhàng ài, jiù néng zài yè shì qīng sōng yòng tái yǔ shā jià.",
        "japanese": "言葉の壁を克服さえすれば、夜市で気軽に台湾語で値切れます。",
        "chunks": [
          "只要克服語言障礙，",
          "就能在夜市",
          "輕鬆用台語殺價。"
        ],
        "hintText": "只要"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為捷運故障，所以我們必須克服通勤的不便。",
        "pinyin": "yīn wèi jié yùn gù zhàng, suǒ yǐ wǒ men bì xū kè fú tōng qín de bù biàn.",
        "japanese": "地下鉄の故障のため、通勤の不便さを克服しなければなりません。",
        "chunks": [
          "因為捷運故障，",
          "所以我們必須",
          "克服通勤的不便。"
        ],
        "hintText": "因為捷運故障，所以我們必須"
      }
    ]
  },
  {
    "id": "B-073",
    "band": "B",
    "targetWord": "宣導",
    "distractors": [
      "準備",
      "解決",
      "發現"
    ],
    "grammarNote": "「宣導（xuān dǎo）」は台湾で非常によく使われる言葉で、情報を広く告知し指導することを指します。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為最近詐騙案件很多，所以政府加強宣導如何防範。",
        "pinyin": "yīn wèi zuì jìn zhà piàn àn jiàn hěn duō，suǒ yǐ zhèng fǔ jiā qiáng xuān dǎo rú hé fáng fàn。",
        "japanese": "最近詐欺事件が多いので、政府は防止方法の宣伝指導を強化しています。",
        "chunks": [
          "因為最近詐騙案件很多，所以",
          "政府加強",
          "宣導如何防範。"
        ],
        "hintText": "因為最近詐騙案件很多，所以政府加強"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然捷運站有宣導禁止飲食，但還是有旅客偷偷吃東西。",
        "pinyin": "suī rán jié yùn zhàn yǒu xuān dǎo jìn zhǐ yǐn shí，dàn hái shì yǒu lǚ kè tōu tōu chī dōng xī。",
        "japanese": "MRTの駅では飲食禁止の宣伝指導をしているが、それでも旅行者がこっそり食べている。",
        "chunks": [
          "雖然捷運站有",
          "宣導禁止飲食，",
          "但還是有旅客偷偷吃東西。"
        ],
        "hintText": "雖然捷運站有"
      },
      {
        "situation": "人間関係・家族",
        "chinese": "只要學校有宣導環保觀念，孩子回家就會提醒爸媽做回收。",
        "pinyin": "zhǐ yào xué xiào yǒu xuān dǎo huán bǎo guān niàn，hái zi huí jiā jiù huì tí xǐng bà mā zuò huí shōu。",
        "japanese": "学校が環境保護の概念を宣伝指導すれば、子供は家に帰って親にリサイクルを促します。",
        "chunks": [
          "只要學校有",
          "宣導環保觀念，",
          "孩子回家就會提醒爸媽做回收。"
        ],
        "hintText": "只要學校有"
      }
    ]
  },
  {
    "id": "B-074",
    "band": "B",
    "targetWord": "投入",
    "distractors": [
      "緊張",
      "失望",
      "擔心"
    ],
    "grammarNote": "「投入（tóu rù）」はリソースを注ぐ、あるいは「没頭する」という意味で使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他工作很忙，但是他對家庭的投入從未減少。",
        "pinyin": "suī rán tā gōng zuò hěn máng, dàn shì tā duì jiā tíng de tóu rù cóng wèi jiǎn shǎo.",
        "japanese": "彼は仕事で忙しいけれど、家族への注力は決して減らしていません。",
        "chunks": [
          "雖然他工作很忙",
          "但是他對家庭的投入",
          "從未減少"
        ],
        "hintText": "雖然他工作很忙，但是他對家庭的"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為公司投入大量資金升級系統，所以員工效率提升很多。",
        "pinyin": "yīn wèi gōng sī tóu rù dà liàng zī jīn shēng jí xì tǒng, suǒ yǐ yuán gōng xiào lǜ tí shēng hěn duō.",
        "japanese": "会社が多額の資金を投入してシステムをアップグレードしたので、従業員の効率が大きく向上しました。",
        "chunks": [
          "因為公司投入大量資金升級系統",
          "所以員工效率",
          "提升很多"
        ],
        "hintText": "因為公司"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要投入更多時間處理漏水問題，就能避免更大的損失。",
        "pinyin": "zhǐ yào tóu rù gèng duō shí jiān chǔ lǐ lòu shuǐ wèn tí, jiù néng bì miǎn gèng dà de sǔn shī.",
        "japanese": "漏水問題に対処するためにより多くの時間を投入すれば、より大きな損失を避けられます。",
        "chunks": [
          "只要投入更多時間處理漏水問題",
          "就能避免",
          "更大的損失"
        ],
        "hintText": "只要"
      }
    ]
  },
  {
    "id": "B-075",
    "band": "B",
    "targetWord": "繁瑣",
    "distractors": [
      "簡單",
      "輕鬆",
      "嚴格"
    ],
    "grammarNote": "「繁瑣（fán suǒ）」は手続きや過程が複雑で手間がかかる様子を表します。",
    "bossReading": {
      "text": "在台南小店訂做伴手禮時，老闆說流程很繁瑣；我卻珍惜每一步手作，因此成品特別有溫度，甚至[ ? ]了來店的客人。",
      "targetWord": "打動",
      "distractors": [
        "打擾",
        "打擊",
        "打斷"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "文末は“感動させる”意味が必要なので「打動（心を打つ）」が正解です。「繁瑣」は手間が多く複雑なこと、ここでは手作りの工程の大変さを表します。「珍惜」は時間や過程を大切にすることで、「珍惜每一步」＝一つ一つの工程を大事にする、という流れになります。"
    },
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為申請補助的流程非常繁瑣，所以我跑了三趟公所。",
        "pinyin": "yīn wèi shēn qǐng bǔ zhù de liú chéng fēi cháng fán suǒ ，suǒ yǐ wǒ pǎo le sān tàng gōng suǒ 。",
        "japanese": "補助金の申請手続きが非常に煩雑だったので、私は役所に3回も行きました。",
        "chunks": [
          "因為申請補助的流程",
          "非常繁瑣",
          "所以我跑了三趟公所"
        ],
        "hintText": "因為申請補助的流程"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然只是換健保卡，但手續卻很繁瑣，讓我有點不耐煩。",
        "pinyin": "suī rán zhǐ shì huàn jiàn bǎo kǎ ，dàn shǒu xù què hěn fán suǒ ，ràng wǒ yǒu diǎn bù nài fán 。",
        "japanese": "健康保険証を替えるだけなのに、手続きがとても煩雑で、ちょっとイライラしました。",
        "chunks": [
          "雖然只是換健保卡",
          "但手續卻很繁瑣",
          "讓我有點不耐煩"
        ],
        "hintText": "雖然只是換健保卡，但手續"
      },
      {
        "situation": "店舗・服務",
        "chinese": "只要退貨程序不那麼繁瑣，我就願意常常來這家店消費。",
        "pinyin": "zhǐ yào tuì huò chéng xù bù nà me fán suǒ ，wǒ jiù yuàn yì cháng cháng lái zhè jiā diàn xiāo fèi 。",
        "japanese": "返品手続きがあんなに煩雑でなければ、私はこの店に頻繁に来てもいいと思います。",
        "chunks": [
          "只要退貨程序不那麼繁瑣",
          "我就願意常常來這家店消費"
        ],
        "hintText": "只要退貨程序"
      }
    ]
  },
  {
    "id": "B-076",
    "band": "B",
    "targetWord": "珍惜",
    "distractors": [
      "放棄",
      "浪費",
      "拒絕"
    ],
    "grammarNote": "「珍惜（zhēn xī）」はかけがえのないもの（時間、愛、機会など）を「大切にする」際に使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為時間過得很快，所以我們要珍惜和家人相處的每一刻。",
        "pinyin": "yīn wèi shí jiān guò dé hěn kuài, suǒ yǐ wǒ men yào zhēn xī hé jiā rén xiāng chǔ de měi yī kè.",
        "japanese": "時間が経つのは早いので、家族と過ごす一瞬一瞬を大切にしなければなりません。",
        "chunks": [
          "因為時間過得很快",
          "所以我們要珍惜",
          "和家人相處的每一刻"
        ],
        "hintText": "因為時間過得很快，所以我們要"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要用悠遊卡結帳，就能累積發票，但是還是要珍惜每一筆消費。",
        "pinyin": "zhǐ yào yòng yōu yóu kǎ jié zhàng, jiù néng lěi jī fā piào, dàn shì hái shì yào zhēn xī měi yī bǐ xiāo fèi.",
        "japanese": "悠遊卡で支払えばレシートが貯まりますが、それでも一つ一つの支出を大切にしなければなりません。",
        "chunks": [
          "只要用悠遊卡結帳",
          "就能累積發票",
          "但是還是要珍惜每一筆消費"
        ],
        "hintText": "只要用悠遊卡結帳，就能累積發票，但是還是要"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然捷運很方便，但是我們還是要珍惜每一次搭乘的機會。",
        "pinyin": "suī rán jié yùn hěn fāng biàn, dàn shì wǒ men hái shì yào zhēn xī měi yī cì dā chéng de jī huì.",
        "japanese": "MRTは便利ですが、それでも毎回の乗車機会を大切にしなければなりません。",
        "chunks": [
          "雖然捷運很方便",
          "但是我們還是要珍惜",
          "每一次搭乘的機會"
        ],
        "hintText": "雖然捷運很方便，但是我們還是要"
      }
    ]
  },
  {
    "id": "B-077",
    "band": "B",
    "targetWord": "打動",
    "distractors": [
      "改變",
      "放棄",
      "發現"
    ],
    "grammarNote": "「打動（dǎ dòng）」は「心に響く、感動させる」ことを表す動詞です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然媽媽平常不愛看電影，但這部感人片卻深深打動了她。",
        "pinyin": "suī rán mā ma píng cháng bù ài kàn diàn yǐng，dàn zhè bù gǎn rén piàn què shēn shēn dǎ dòng le tā。",
        "japanese": "母は普段映画を見るのが好きではないが、この感動的な作品は彼女の心を深く打った。",
        "chunks": [
          "雖然媽媽平常不愛看電影",
          "但這部感人片",
          "卻深深打動了她"
        ],
        "hintText": "雖然媽媽平常不愛看電影，但這部感人片卻深深"
      },
      {
        "situation": "店舗・服務",
        "chinese": "因為店員的服務態度非常好，所以顧客都被打動了。",
        "pinyin": "yīn wèi diàn yuán de fú wù tài dù fēi cháng hǎo，suǒ yǐ gù kè dōu bèi dǎ dòng le。",
        "japanese": "店員のサービス態度がとても良かったので、客は皆感動した。",
        "chunks": [
          "因為店員的服務態度非常好",
          "所以顧客",
          "都被打動了"
        ],
        "hintText": "因為店員的服務態度非常好，所以顧客都"
      },
      {
        "situation": "生活麻煩",
        "chinese": "只要鄰居願意道歉，我就會被他的誠意打動。",
        "pinyin": "zhǐ yào lín jū yuàn yì dào qiàn，wǒ jiù huì bèi tā de chéng yì dǎ dòng。",
        "japanese": "隣人が謝罪してくれさえすれば、私は彼の誠意に心を打たれるだろう。",
        "chunks": [
          "只要鄰居願意道歉",
          "我就會",
          "被他的誠意打動"
        ],
        "hintText": "只要鄰居願意道歉，我就會"
      }
    ]
  },
  {
    "id": "B-078",
    "band": "B",
    "targetWord": "指示",
    "distractors": [
      "建議",
      "環境",
      "態度"
    ],
    "grammarNote": "「按照（àn zhào）」は「〜に従って、〜に基づいて」という基準を示します。",
    "bossReading": {
      "text": "新咖啡機剛送到，我先照著說明書的指示設定；雖然步驟多，我仍主動請教同事，因此第一次試煮就超出大家的[ ? ]。",
      "targetWord": "預期",
      "distractors": [
        "規劃",
        "想像",
        "回憶"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「超出…」の後ろには“予想・期待”が来るのが自然で、定番の「超出預期」なので「預期」が正解です。「指示」は手順や指導で、「按照…的指示」＝指示通りに、という意味になります。「主動」は自分から動くことで、「主動請教」＝積極的に質問する、という職場の場面に合います。"
    },
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為店員沒有按照我的指示處理退貨，所以我就直接找店長了。",
        "pinyin": "yīn wèi diàn yuán méi yǒu àn zhào wǒ de zhǐ shì chǔ lǐ tuì huò，suǒ yǐ wǒ jiù zhí jiē zhǎo diàn zhǎng le。",
        "japanese": "店員が私の指示通りに返品処理をしなかったので、直接店長に話しました。",
        "chunks": [
          "因為店員沒有",
          "按照我的指示",
          "處理退貨",
          "所以我就直接找店長了"
        ],
        "hintText": "因為店員沒有"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要按照捷運站的指示走，就可以順利找到出口。",
        "pinyin": "zhǐ yào àn zhào jié yùn zhàn de zhǐ shì zǒu，jiù kě yǐ shùn lì zhǎo dào chū kǒu。",
        "japanese": "MRTの駅の指示に従って歩けば、スムーズに出口を見つけられます。",
        "chunks": [
          "只要按照捷運站的指示走",
          "就可以順利找到出口"
        ],
        "hintText": "只要按照"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然主管給的指示很清楚，但是我還是有點不太明白。",
        "pinyin": "suī rán zhǔ guǎn gěi de zhǐ shì hěn qīng chǔ，dàn shì wǒ hái shì yǒu diǎn bú tài míng bái。",
        "japanese": "上司の指示はとても明確ですが、私はまだ少し理解できていません。",
        "chunks": [
          "雖然主管給的指示很清楚",
          "但是我還是有點不太明白"
        ],
        "hintText": "雖然主管給的指示很清楚"
      }
    ]
  },
  {
    "id": "B-079",
    "band": "B",
    "targetWord": "預期",
    "distractors": [
      "想像",
      "計畫",
      "控制"
    ],
    "grammarNote": "「超出預期（chāo chū yù qī）」で「予想を超える」という頻出フレーズです。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我對兒子的成績本來沒有太多期待，但他的進步真的超出我的預期。",
        "pinyin": "suī rán wǒ duì ér zi de chéng jì běn lái méi yǒu tài duō qī dài, dàn tā de jìn bù zhēn de chāo chū wǒ de yù qī。",
        "japanese": "息子の成績に元々あまり期待していなかったけれど、彼の進歩は本当に私の予想を超えました。",
        "chunks": [
          "雖然",
          "我對兒子的成績本來沒有太多期待",
          "但他的進步",
          "真的",
          "超出我的預期"
        ],
        "hintText": "雖然我對兒子的成績本來沒有太多期待，但他的進步真的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的服務品質超出我的預期，所以我決定以後常來。",
        "pinyin": "yīn wèi zhè jiā cān tīng de fú wù pǐn zhí chāo chū wǒ de yù qī, suǒ yǐ wǒ jué dìng yǐ hòu cháng lái。",
        "japanese": "このレストランのサービス品質が私の予想を超えたので、今後頻繁に来ることにしました。",
        "chunks": [
          "因為",
          "這家餐廳的服務品質",
          "超出我的預期",
          "所以我決定",
          "以後常來"
        ],
        "hintText": "因為這家餐廳的服務品質"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要搭捷運去機場，時間就完全超出我的預期，比開車快很多。",
        "pinyin": "zhǐ yào dā jié yùn qù jī chǎng, shí jiān jiù wán quán chāo chū wǒ de yù qī, bǐ kāi chē kuài hěn duō。",
        "japanese": "MRTで空港に行けば、時間は完全に私の予想を超え、車よりずっと速いです。",
        "chunks": [
          "只要",
          "搭捷運去機場",
          "時間就完全超出我的預期",
          "比開車快很多"
        ],
        "hintText": "只要搭捷運去機場，時間就完全"
      }
    ]
  },
  {
    "id": "B-080",
    "band": "B",
    "targetWord": "主動",
    "distractors": [
      "被動",
      "自動",
      "感動"
    ],
    "grammarNote": "「主動（zhǔ dòng）」は相手からの働きかけを待たず、自分から動く様子を表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他個性內向，但只要遇到朋友有困難，他就會主動幫忙。",
        "pinyin": "suī rán tā gè xìng nèi xiàng, dàn zhǐ yào yù dào péng yǒu yǒu kùn nán, tā jiù huì zhǔ dòng bāng máng.",
        "japanese": "彼は内向的な性格ですが、友達が困っていると自ら進んで助けます。",
        "chunks": [
          "雖然他個性內向",
          "但只要遇到朋友有困難",
          "他就會主動幫忙"
        ],
        "hintText": "雖然他個性內向，但只要遇到朋友有困難，他就會"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的服務生很主動，所以即使沒有打折我們還是很滿意。",
        "pinyin": "yīn wèi zhè jiā cān tīng de fú wù shēng hěn zhǔ dòng, suǒ yǐ jí shǐ méi yǒu dǎ zhé wǒ men hái shì hěn mǎn yì.",
        "japanese": "このレストランの店員が積極的だったので、割引がなくても満足しました。",
        "chunks": [
          "因為這家餐廳的服務生很主動",
          "所以即使沒有打折",
          "我們還是很滿意"
        ],
        "hintText": "因為這家餐廳的服務生很主動，所以即使沒有打折"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要發現健保卡遺失，就應該主動去區公所辦理補發。",
        "pinyin": "zhǐ yào fā xiàn jiàn bǎo kǎ yí shī, jiù yīng gāi zhǔ dòng qù qū gōng suǒ bàn lǐ bǔ fā.",
        "japanese": "健康保険証をなくしたら、自ら区役所に行って再発行の手続きをすべきです。",
        "chunks": [
          "只要發現健保卡遺失",
          "就應該主動去區公所",
          "辦理補發"
        ],
        "hintText": "只要發現健保卡遺失，就應該主動去區公所"
      }
    ]
  },
  {
    "id": "B-081",
    "band": "B",
    "targetWord": "領導",
    "distractors": [
      "學習",
      "準備",
      "發現"
    ],
    "grammarNote": "「展現（zhǎn xiàn）」は能力や魅力を「はっきりと示す、披露する」際に使われます。",
    "bossReading": {
      "text": "雖然專案時程被壓縮，他仍堅持品質並安排每週回顧，因此團隊在他的[ ? ]下更有效率；他也帶大家探討問題根源。",
      "targetWord": "領導",
      "distractors": [
        "指揮",
        "管理",
        "帶領"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「在他的[ ? ]下」は“指導・リードする”名詞が入り、「領導（リーダーシップ）」が最も自然です。「堅持」は困難があっても方針や理想を貫くことで、「堅持品質」で品質を守るニュアンスになります。「探討」は表面的に話すのではなく深く掘り下げることで、会議で原因を探る場面に合います。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他年紀輕輕，但在家庭聚會中展現了很強的領導能力。",
        "pinyin": "suī rán tā nián jì qīng qīng, dàn zài jiā tíng jù huì zhōng zhǎn xiàn le hěn qiáng de lǐng dǎo néng lì.",
        "japanese": "彼は若いけれど、家族の集まりで強いリーダーシップを発揮した。",
        "chunks": [
          "雖然他年紀輕輕",
          "但在家庭聚會中",
          "展現了很強的領導能力"
        ],
        "hintText": "雖然他年紀輕輕，但在家庭聚會中"
      },
      {
        "situation": "店舗・サービス",
        "japanese": "店長はいつも素晴らしいリーダーシップを発揮するので、スタッフはみんな彼を尊敬している。",
        "chinese": "因為店長總是展現出色的領導能力，所以員工都很尊敬他。",
        "pinyin": "yīn wèi diàn zhǎng zǒng shì zhǎn xiàn chū sè de lǐng dǎo néng lì, suǒ yǐ yuán gōng dōu hěn zūn jìng tā.",
        "chunks": [
          "因為店長總是",
          "展現出色的領導能力",
          "所以員工都很尊敬他"
        ],
        "hintText": "因為店長總是"
      },
      {
        "situation": "公的手続き・職場",
        "japanese": "只要他在會議中展現領導能力，團隊就能順利解決問題。",
        "chinese": "只要他在會議中展現領導能力，團隊就能順利解決問題。",
        "pinyin": "zhǐ yào tā zài huì yì zhōng zhǎn xiàn lǐng dǎo néng lì, tuán duì jiù néng shùn lì jiě jué wèn tí.",
        "chunks": [
          "只要他在會議中",
          "展現領導能力",
          "團隊就能順利解決問題"
        ],
        "hintText": "只要他在會議中"
      }
    ]
  },
  {
    "id": "B-082",
    "band": "B",
    "targetWord": "堅持",
    "distractors": [
      "放棄",
      "改變",
      "考慮"
    ],
    "grammarNote": "「堅持（jiān chí）」は反対や困難があっても、自らの考えや行動を「固持する」ことを指します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然爸媽都反對，但他還是堅持要跟那個女生結婚。",
        "pinyin": "suī rán bà mā dōu fǎn duì ， dàn tā hái shì jiān chí yào gēn nà ge nǚ shēng jié hūn 。",
        "japanese": "両親が反対しているが、彼はそれでもその女性と結婚すると固執している。",
        "chunks": [
          "雖然爸媽都反對",
          "但他還是堅持",
          "要跟那個女生結婚"
        ],
        "hintText": "雖然爸媽都反對，但他還是"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為機車一直發不動，所以我堅持要叫拖吊車來處理。",
        "pinyin": "yīn wèi jī chē yī zhí fā bù dòng ， suǒ yǐ wǒ jiān chí yào jiào tuō diào chē lái chǔ lǐ 。",
        "japanese": "バイクがどうしてもエンジンがかからないので、レッカー車を呼んで処理すると固執した。",
        "chunks": [
          "因為機車一直發不動",
          "所以我堅持",
          "要叫拖吊車來處理"
        ],
        "hintText": "因為機車一直發不動，所以我"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要健保卡沒問題，我就堅持不額外付費。",
        "pinyin": "zhǐ yào jiàn bǎo kǎ méi wèn tí ， wǒ jiù jiān chí bù é wài fù fèi 。",
        "japanese": "健康保険証に問題がなければ、追加料金は払わないと固執する。",
        "chunks": [
          "只要健保卡沒問題",
          "我就堅持",
          "不額外付費"
        ],
        "hintText": "只要健保卡沒問題，我就"
      }
    ]
  },
  {
    "id": "B-083",
    "band": "B",
    "targetWord": "探討",
    "distractors": [
      "討論",
      "準備",
      "解決"
    ],
    "grammarNote": "「探討（tàn tǎo）」は深いテーマや学術的な内容について「深く掘り下げる」際に使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們探討了很多次，但還是無法解決家庭溝通的問題。",
        "pinyin": "suī rán wǒ men tàn tǎo le hěn duō cì, dàn hái shì wú fǎ jiě jué jiā tíng gōu tōng de wèn tí.",
        "japanese": "雖然我們探討了很多次，但還是無法解決家庭溝通的問題。",
        "chunks": [
          "雖然我們探討了很多次",
          "但還是無法解決",
          "家庭溝通的問題"
        ],
        "hintText": "雖然我們"
      },
      {
        "situation": "生活トラブル",
        "pinyin": "yīn wèi zhè cì de lòu shuǐ shì gù tài fù zá, suǒ yǐ wǒ men bì xū zǐ xì tàn tǎo yuán yīn.",
        "japanese": "因為這次的漏水事故太複雜，所以我們必須仔細探討原因。",
        "chinese": "因為這次的漏水事故太複雜，所以我們必須仔細探討原因。",
        "chunks": [
          "因為這次的漏水事故太複雜",
          "所以我們必須仔細探討",
          "原因"
        ],
        "hintText": "因為這次的漏水事故太複雜，所以我們"
      },
      {
        "situation": "公的手続き・職場",
        "pinyin": "zhǐ yào wǒ men xiān tàn tǎo qīng chu cè lüè, jiù néng shùn lì shēn qǐng dào bǔ zhù.",
        "japanese": "只要我們先探討清楚策略，就能順利申請到補助。",
        "chinese": "只要我們先探討清楚策略，就能順利申請到補助。",
        "chunks": [
          "只要我們先探討清楚策略",
          "就能順利申請到",
          "補助"
        ],
        "hintText": "只要我們先"
      }
    ]
  },
  {
    "id": "B-084",
    "band": "B",
    "targetWord": "差距",
    "distractors": [
      "距離",
      "差別",
      "差異"
    ],
    "grammarNote": "「縮短差距（suō duǎn chā jù）」で「差を縮める」という表現になります。",
    "bossReading": {
      "text": "社區推動友善店家，要求提升服務品質並提供無障礙協助，因此弱勢族群外出更安心；若想縮短貧富[ ? ]，政府也要配套補助。",
      "targetWord": "差距",
      "distractors": [
        "差別",
        "差異",
        "距離"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「縮短貧富[ ? ]」は定番コロケーションの「縮短差距」なので「差距」が正解です。「服務」は店や企業の提供するサービス全般で、「提升服務品質」と結びつきます。「弱勢（弱勢族群）」は社会的に不利な立場の人々で、無障礙などの支援対象として自然です。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我和哥哥的收入有差距，但只要我們一起努力，就能縮短這個差距。",
        "pinyin": "suī rán wǒ hé gē ge de shōu rù yǒu chā jù，dàn zhǐ yào wǒ men yì qǐ nǔ lì，jiù néng suō duǎn zhè ge chā jù。",
        "japanese": "雖然我和哥哥的收入有差距，但只要我們一起努力，就能縮短這個差距。",
        "chunks": [
          "雖然我和哥哥的收入有差距，",
          "但只要我們一起努力，",
          "就能縮短這個差距。"
        ],
        "hintText": "雖然我和哥哥的收入有差距，但只要我們一起努力，就能"
      },
      {
        "situation": "店舗・服務",
        "pinyin": "yīn wèi zhè jiā cān tīng de fú wù pǐn zhì hé jià gé de chā jù tài dà，suǒ yǐ wǒ jué dìng yǐ hòu bù zài lái。",
        "japanese": "因為這家餐廳的服務品質和價格的差距太大，所以我決定以後不再來。",
        "chinese": "因為這家餐廳的服務品質和價格的差距太大，所以我決定以後不再來。",
        "chunks": [
          "因為這家餐廳的服務品質和價格的差距太大，",
          "所以我決定以後不再來。"
        ],
        "hintText": "因為這家餐廳的服務品質和價格的差距太大，所以"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然這款手機的價格和功能有差距，但我覺得只要夠用就好，不需要追求最新款。",
        "pinyin": "suī rán zhè kuǎn shǒu jī de jià gé hé gōng néng yǒu chā jù，dàn wǒ jué de zhǐ yào gòu yòng jiù hǎo，bù xū yào zhuī qiú zuì xīn kuǎn。",
        "japanese": "雖然這款手機的價格和功能有差距，但我覺得只要夠用就好，不需要追求最新款。",
        "chunks": [
          "雖然這款手機的價格和功能有差距，",
          "但我覺得只要夠用就好，",
          "不需要追求最新款。"
        ],
        "hintText": "雖然這款手機的價格和功能有差距，但我覺得只要夠用就好，"
      }
    ]
  },
  {
    "id": "B-085",
    "band": "B",
    "targetWord": "服務",
    "distractors": [
      "產品",
      "技術",
      "環境"
    ],
    "grammarNote": "「服務」は顧客対応やサービス全般を指します。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家餐廳的服務很好，但是價格有點貴。",
        "pinyin": "suī rán zhè jiā cān tīng de fú wù hěn hǎo, dàn shì jià gé yǒu diǎn guì.",
        "japanese": "このレストランはサービスは良いですが、値段が少し高いです。",
        "chunks": [
          "雖然這家餐廳的服務很好",
          "但是價格有點貴"
        ],
        "hintText": "雖然這家餐廳的"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為客服的服務很差，所以我決定投訴他們。",
        "pinyin": "yīn wèi kè fú de fú wù hěn chà, suǒ yǐ wǒ jué dìng tóu sù tā men.",
        "japanese": "カスタマーサービスの対応がとても悪かったので、彼らをクレームすることにしました。",
        "chunks": [
          "因為客服的服務很差",
          "所以我決定投訴他們"
        ],
        "hintText": "因為客服的"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要我們提升服務品質，就能得到更多客戶。",
        "pinyin": "zhǐ yào wǒ men tí shēng fú wù pǐn zhí, jiù néng dé dào gèng duō kè hù.",
        "japanese": "サービス品質を向上させさえすれば、より多くの顧客を得ることができます。",
        "chunks": [
          "只要我們提升服務品質",
          "就能得到更多客戶"
        ],
        "hintText": "只要我們提升"
      }
    ]
  },
  {
    "id": "B-086",
    "band": "B",
    "targetWord": "弱勢",
    "distractors": [
      "強勢",
      "優勢",
      "趨勢"
    ],
    "grammarNote": "「弱勢（ruò shì）」は、社会的・経済的に不利な立場にある人々や団体を指す際によく使われる重要な語彙です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我家不是什麼弱勢家庭，但我還是覺得社會應該多關心他們。",
        "pinyin": "suī rán wǒ jiā bù shì shén me ruò shì jiā tíng, dàn wǒ hái shì jué de shè huì yīng gāi duō guān xīn tā men.",
        "japanese": "私の家は特に恵まれない家庭ではありませんが、それでも社会はもっと彼らを気にかけるべきだと思います。",
        "chunks": [
          "雖然我家不是什麼",
          "弱勢",
          "家庭，但我還是覺得社會應該多關心他們。"
        ],
        "hintText": "雖然我家不是什麼"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為他最近失業，所以被列為弱勢族群，可以申請補助。",
        "pinyin": "yīn wèi tā zuì jìn shī yè, suǒ yǐ bèi liè wéi ruò shì zú qún, kě yǐ shēn qǐng bǔ zhù.",
        "japanese": "彼は最近失業したため、恵まれない層に分類され、補助金を申請できます。",
        "chunks": [
          "因為他最近失業，所以被列為",
          "弱勢",
          "族群，可以申請補助。"
        ],
        "hintText": "因為他最近失業，所以被列為"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要持有弱勢身分證明，就可以免費辦理健保卡。",
        "pinyin": "zhǐ yào chí yǒu ruò shì shēn fèn zhèng míng, jiù kě yǐ miǎn fèi bàn lǐ jiàn bǎo kǎ.",
        "japanese": "恵まれない身分の証明書を持っていれば、無料で健康保険証を発行できます。",
        "chunks": [
          "只要持有",
          "弱勢",
          "身分證明，就可以免費辦理健保卡。"
        ],
        "hintText": "只要持有"
      }
    ]
  },
  {
    "id": "B-087",
    "band": "B",
    "targetWord": "明顯",
    "distractors": [
      "嚴重",
      "複雜",
      "簡單"
    ],
    "grammarNote": "「明顯」は目に見えてはっきりしている様子を表します。",
    "bossReading": {
      "text": "診所改用數位叫號後，流程更清楚，病人也更容易掌握等候時間；因此護士一眼就能看出誰的症狀最[ ? ]，甚至先安排檢查。",
      "targetWord": "明顯",
      "distractors": [
        "模糊",
        "普通",
        "隱藏"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「症狀最[ ? ]」は“はっきり目立つ”の意味が必要なので「明顯」が正解です。「數位」は台湾で“デジタル”を指す語で、「數位叫號」のように病院の受付システム文脈に合います。「掌握」は状況をしっかり把握することで、「掌握等候時間」＝待ち時間を把握する、という自然な用法です。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他平時話不多，但這次明顯很生氣，因為妹妹弄丟了他的手機。",
        "pinyin": "suī rán tā píng shí huà bù duō, dàn zhè cì míng xiǎn hěn shēng qì, yīn wèi mèi mei nòng diū le tā de shǒu jī.",
        "japanese": "彼は普段は口数が少ないが、今回は妹が彼の携帯をなくしたので明らかに怒っている。",
        "chunks": [
          "雖然他平時話不多",
          "但這次明顯很生氣",
          "因為妹妹弄丟了他的手機"
        ],
        "hintText": "雖然他平時話不多，但這次"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要刷悠遊卡結帳，就可以明顯打折，所以很多人都用這張卡。",
        "pinyin": "zhǐ yào shuā yōu yóu kǎ jié zhàng, jiù kě yǐ míng xiǎn dǎ zhé, suǒ yǐ hěn duō rén dōu yòng zhè zhāng kǎ.",
        "japanese": "悠遊卡で支払えば、明らかに割引になるので、多くの人がこのカードを使っている。",
        "chunks": [
          "只要刷悠遊卡結帳",
          "就可以明顯打折",
          "所以很多人都用這張卡"
        ],
        "hintText": "只要刷悠遊卡結帳，就可以"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為捷運站出口的標示不明顯，所以外國遊客常常走錯方向。",
        "pinyin": "yīn wèi jié yùn zhàn chū kǒu de biāo shì bù míng xiǎn, suǒ yǐ wài guó yóu kè cháng cháng zǒu cuò fāng xiàng.",
        "japanese": "MRTの駅出口の表示がはっきりしていないので、外国人観光客はよく方向を間違える。",
        "chunks": [
          "因為捷運站出口的標示不明顯",
          "所以外國遊客常常走錯方向"
        ],
        "hintText": "因為捷運站出口的標示"
      }
    ]
  },
  {
    "id": "B-088",
    "band": "B",
    "targetWord": "數位",
    "distractors": [
      "數字",
      "數量",
      "數據"
    ],
    "grammarNote": "「數位（shù wèi）」は台湾で「デジタル」を指す言葉です（大陸では 數字 shù zì）。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為現在很多人使用數位支付，所以這家店也開始接受行動支付了。",
        "pinyin": "yīn wèi xiàn zài hěn duō rén shǐ yòng shù wèi zhī fù, suǒ yǐ zhè jiā diàn yě kāi shǐ jiē shòu xíng dòng zhī fù le.",
        "japanese": "今は多くの人がデジタル決済を使っているので、このお店もモバイル決済を受け入れ始めました。",
        "chunks": [
          "因為現在很多人使用",
          "數位支付",
          "所以這家店也開始接受行動支付了"
        ],
        "hintText": "因為現在很多人使用"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要申請數位身分證，就不用帶紙本證件去辦事了。",
        "pinyin": "zhǐ yào shēn qǐng shù wèi shēn fèn zhèng, jiù bù yòng dài zhǐ běn zhèng jiàn qù bàn shì le.",
        "japanese": "デジタル身分証を申請すれば、紙の証明書を持って手続きに行く必要がありません。",
        "chunks": [
          "只要申請",
          "數位身分證",
          "就不用帶紙本證件去辦事了"
        ],
        "hintText": "只要申請"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然我已經把發票存進數位載具，但還是找不到消費記錄。",
        "pinyin": "suī rán wǒ yǐ jīng bǎ fā piào cún jìn shù wèi zài jù, dàn hái shì zhǎo bù dào xiāo fèi jì lù.",
        "japanese": "すでに領収書をデジタルツールに保存したのに、それでも購入記録が見つかりません。",
        "chunks": [
          "雖然我已經把發票存進",
          "數位載具",
          "但還是找不到消費記錄"
        ],
        "hintText": "雖然我已經把發票存進"
      }
    ]
  },
  {
    "id": "B-089",
    "band": "B",
    "targetWord": "掌握",
    "distractors": [
      "解決",
      "發現",
      "準備"
    ],
    "grammarNote": "「掌握」は知識や状況をしっかりと「把握する、自分のものにする」ことを表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他平時很少說話，但只要掌握他的個性，就能跟他好好相處。",
        "pinyin": "suīrán tā píngshí hěn shǎo shuōhuà, dàn zhǐyào zhǎngwò tā de gèxìng, jiù néng gēn tā hǎohǎo xiāngchǔ.",
        "japanese": "彼は普段あまり話さないけれど、彼の性格をしっかり把握さえすれば、うまく付き合える。",
        "chunks": [
          "雖然他平時很少說話",
          "但只要掌握他的個性",
          "就能跟他好好相處"
        ],
        "hintText": "雖然他平時很少說話，但只要"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的店員很會掌握客人的需求，所以每次去都感覺很貼心。",
        "pinyin": "yīnwèi zhè jiā diàn de diànyuán hěn huì zhǎngwò kèrén de xūqiú, suǒyǐ měi cì qù dōu gǎnjué hěn tiēxīn.",
        "japanese": "この店の店員はお客様のニーズをしっかり把握しているので、行くたびにとても気が利くと感じる。",
        "chunks": [
          "因為這家店的店員很會掌握客人的需求",
          "所以每次去都感覺很貼心",
          ""
        ],
        "hintText": "因為這家店的店員很會"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要掌握捷運的尖峰時間，就能避開人潮，順利到達目的地。",
        "pinyin": "zhǐyào zhǎngwò jiéyùn de jiānfēng shíjiān, jiù néng bìkāi réncháo, shùnlì dàodá mùdìdì.",
        "japanese": "MRTのラッシュ時間をしっかり把握さえすれば、人混みを避けて目的地にスムーズに到着できる。",
        "chunks": [
          "只要掌握捷運的尖峰時間",
          "就能避開人潮",
          "順利到達目的地"
        ],
        "hintText": "只要"
      }
    ]
  },
  {
    "id": "B-090",
    "band": "B",
    "targetWord": "罕見",
    "distractors": [
      "常見",
      "流行",
      "重要"
    ],
    "grammarNote": "「並（bìng）+ 不」で「決して〜ではない」という強い否定を表します。",
    "bossReading": {
      "text": "公司做年度預算時，主管要求先看報表結構；雖然大家覺得很麻煩，但因此能避開[ ? ]的錯誤，甚至更快找到超支原因。",
      "targetWord": "罕見",
      "distractors": [
        "稀少",
        "少量",
        "罕有"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "ここは「…的錯誤」を修飾する形容詞が必要で、“めったにない”意味の「罕見」が最も自然です（「罕見的錯誤」＝レアなミス）。「預算」は予算で、「做年度預算」のビジネス文脈に合います。「結構」は文章や資料の構造を指し、「報表結構」＝レポートの構成を意味します。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他們常常吵架，但其實感情並不罕見地深厚。",
        "pinyin": "suī rán tā men cháng cháng chǎo jià, dàn qí shí gǎn qíng bìng bù hǎn jiàn dì shēn hòu.",
        "japanese": "彼らはよく喧嘩するが、実は感情が決して珍しくなく深い。",
        "chunks": [
          "雖然他們常常吵架",
          "但其實感情",
          "並不罕見地深厚"
        ],
        "hintText": "雖然他們常常吵架，但其實感情"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的發票中獎率很高，所以退貨並不罕見。",
        "pinyin": "yīn wèi zhè jiā diàn de fā piào zhòng jiǎng lǜ hěn gāo, suǒ yǐ tuì huò bìng bù hǎn jiàn.",
        "japanese": "この店のレシートの当選率が高いので、返品は決して珍しくない。",
        "chunks": [
          "因為這家店的發票中獎率很高",
          "所以退貨",
          "並不罕見"
        ],
        "hintText": "因為這家店的發票中獎率很高，所以退貨"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要機車停在紅線，被拖吊的情況並不罕見。",
        "pinyin": "zhǐ yào jī chē tíng zài hóng xiàn, bèi tuō diào de qíng kuàng bìng bù hǎn jiàn.",
        "japanese": "バイクを赤線に停めさえすれば、レッカー移動されることは決して珍しくない。",
        "chunks": [
          "只要機車停在紅線",
          "被拖吊的情況",
          "並不罕見"
        ],
        "hintText": "只要機車停在紅線，被拖吊的情況"
      }
    ]
  },
  {
    "id": "B-091",
    "band": "B",
    "targetWord": "預算",
    "distractors": [
      "時間",
      "經驗",
      "環境"
    ],
    "grammarNote": "「預算（yù suàn）」はビジネスシーンでの必須語彙です。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為這個月的預算有限，所以我們只能買打折的發票商品。",
        "pinyin": "yīn wèi zhè ge yuè de yù suàn yǒu xiàn, suǒ yǐ wǒ men zhǐ néng mǎi dǎ zhé de fā piào shāng pǐn.",
        "japanese": "今月の予算が限られているので、割引されたレシート商品しか買えません。",
        "chunks": [
          "因為這個月的預算有限",
          "所以我們只能買",
          "打折的發票商品"
        ],
        "hintText": "因為這個月的"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要我們按照預算執行專案，就不會被主管罵。",
        "pinyin": "zhǐ yào wǒ men àn zhào yù suàn zhí xíng zhuān àn, jiù bù huì bèi zhǔ guǎn mà.",
        "japanese": "私たちが予算に従ってプロジェクトを実行すれば、上司に怒られません。",
        "chunks": [
          "只要我們按照預算執行專案",
          "就不會被主管罵"
        ],
        "hintText": "只要我們按照"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然我已經編列預算，但是機車突然壞掉讓我多花很多錢。",
        "pinyin": "suī rán wǒ yǐ jīng biān liè yù suàn, dàn shì jī chē tū rán huài diào ràng wǒ duō huā hěn duō qián.",
        "japanese": "予算を組んでいたのに、バイクが突然壊れて余計にお金がかかりました。",
        "chunks": [
          "雖然我已經編列預算",
          "但是機車突然壞掉",
          "讓我多花很多錢"
        ],
        "hintText": "雖然我已經"
      }
    ]
  },
  {
    "id": "B-092",
    "band": "B",
    "targetWord": "結構",
    "distractors": [
      "內容",
      "態度",
      "機會"
    ],
    "grammarNote": "「結構（jié gòu）」は文章や建物の組み立てを指します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們家的結構很簡單，但是因為爸媽都很忙，所以每個人都有自己的責任。",
        "pinyin": "suī rán wǒ men jiā de jié gòu hěn jiǎn dān, dàn shì yīn wèi bà mā dōu hěn máng, suǒ yǐ měi gè rén dōu yǒu zì jǐ de zé rèn.",
        "japanese": "雖然我們家的結構很簡單，但是因為爸媽都很忙，所以每個人都有自己的責任。",
        "chunks": [
          "雖然",
          "我們家的結構",
          "很簡單",
          "但是",
          "因為爸媽都很忙",
          "所以",
          "每個人",
          "都有自己的責任"
        ],
        "hintText": "雖然我們家的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要這家餐廳的結構夠穩固，就算客人再多也不用擔心安全問題。",
        "pinyin": "zhǐ yào zhè jiā cān tīng de jié gòu gòu wěn gù, jiù suàn kè rén zài duō yě bù yòng dān xīn ān quán wèn tí.",
        "japanese": "只要這家餐廳的結構夠穩固，就算客人再多也不用擔心安全問題。",
        "chunks": [
          "只要",
          "這家餐廳的結構",
          "夠穩固",
          "就算",
          "客人再多",
          "也不用擔心安全問題"
        ],
        "hintText": "只要這家餐廳的"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為這份報告的結構不太清楚，所以主管要求我們重新整理一次。",
        "pinyin": "yīn wèi zhè fèn bào gào de jié gòu bù tài qīng chǔ, suǒ yǐ zhǔ guǎn yāo qiú wǒ men chóng xīn zhěng lǐ yī cì.",
        "japanese": "因為這份報告的結構不太清楚，所以主管要求我們重新整理一次。",
        "chunks": [
          "因為",
          "這份報告的結構",
          "不太清楚",
          "所以",
          "主管要求我們",
          "重新整理一次"
        ],
        "hintText": "因為這份報告的"
      }
    ]
  },
  {
    "id": "B-093",
    "band": "B",
    "targetWord": "支持",
    "distractors": [
      "拒絕",
      "放棄",
      "準備"
    ],
    "grammarNote": "「無論〜都」で条件を問わず結果が同じであることを表します。",
    "bossReading": {
      "text": "新品發表會上他展示功能，並針對客戶疑問一一回覆；雖然有人質疑，但我依然[ ? ]他的方向，因此團隊更有信心往前衝。",
      "targetWord": "支持",
      "distractors": [
        "反對",
        "懷疑",
        "否定"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "文脈は“方向性を後押しする”なので「支持」が正解です。「展示」はデモ・提示することで、「展示功能」は発表会の場面に自然です。「針對」は対象を絞って対応する意味で、「針對客戶疑問回覆」＝顧客の疑問に的を絞って答える、という用法になります。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "無論爸媽同不同意，我都會支持你的決定。",
        "pinyin": "wúlùn bà mā tóng bù tóngyì, wǒ dōu huì zhīchí nǐ de juédìng.",
        "japanese": "両親が賛成しようがしまいが、私はあなたの決断を支持します。",
        "chunks": [
          "無論爸媽同不同意",
          "我都會支持",
          "你的決定"
        ],
        "hintText": "無論爸媽同不同意，我都會"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "無論這家店有沒有打折，我都支持他們用環保包裝。",
        "pinyin": "wúlùn zhè jiā diàn yǒu méiyǒu dǎzhé, wǒ dōu zhīchí tāmen yòng huánbǎo bāozhuāng.",
        "japanese": "この店が割引をしていようがいまいが、私は彼らの環境に優しい包装を支持します。",
        "chunks": [
          "無論這家店有沒有打折",
          "我都支持",
          "他們用環保包裝"
        ],
        "hintText": "無論這家店有沒有打折，我都支持"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為鄰居太吵，所以無論房東漲不漲房租，我都要搬家。",
        "pinyin": "yīnwèi línjū tài chǎo, suǒyǐ wúlùn fángdōng zhǎng bù zhǎng fángzū, wǒ dōu yào bānjiā.",
        "japanese": "隣人がうるさいので、大家が家賃を上げようと上げまいと、私は引っ越します。",
        "chunks": [
          "因為鄰居太吵",
          "所以無論房東漲不漲房租",
          "我都要搬家"
        ],
        "hintText": "因為鄰居太吵，所以無論房東漲不漲房租，我都"
      }
    ]
  },
  {
    "id": "B-094",
    "band": "B",
    "targetWord": "展示",
    "distractors": [
      "解決",
      "發現",
      "準備"
    ],
    "grammarNote": "「展示（zhǎn shì）」は見せる、披露することを指します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他平常很低調，但在家庭聚會時還是會展示他的廚藝。",
        "pinyin": "suī rán tā píng cháng hěn dī diào, dàn zài jiā tíng jù huì shí hái shì huì zhǎn shì tā de chú yì.",
        "japanese": "彼は普段はとても控えめですが、家族の集まりでは料理の腕前を披露します。",
        "chunks": [
          "雖然他平常很低調",
          "但在家庭聚會時",
          "還是會展示他的廚藝"
        ],
        "hintText": "雖然他平常很低調，但在家庭聚會時還是會"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為百貨公司正在打折，所以他們在櫥窗展示最新的包包。",
        "pinyin": "yīn wèi bǎi huò gōng sī zhèng zài dǎ zhé, suǒ yǐ tā men zài chú chuāng zhǎn shì zuì xīn de bāo bāo.",
        "japanese": "デパートがセール中なので、彼らはショーウィンドウに最新のバッグを展示しています。",
        "chunks": [
          "因為百貨公司正在打折",
          "所以他們在櫥窗",
          "展示最新的包包"
        ],
        "hintText": "因為百貨公司正在打折，所以他們在櫥窗"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要捷運站有故障，他們就會展示緊急公告提醒乘客。",
        "pinyin": "zhǐ yào jié yùn zhàn yǒu gù zhàng, tā men jiù huì zhǎn shì jǐn jí gōng gào tí xǐng chéng kè.",
        "japanese": "地下鉄の駅に故障があれば、彼らは緊急のお知らせを表示して乗客に注意を促します。",
        "chunks": [
          "只要捷運站有故障",
          "他們就會展示",
          "緊急公告提醒乘客"
        ],
        "hintText": "只要捷運站有故障，他們就會"
      }
    ]
  },
  {
    "id": "B-095",
    "band": "B",
    "targetWord": "針對",
    "distractors": [
      "關於",
      "除了",
      "為了"
    ],
    "grammarNote": "「針對（zhēn duì）」は対象をピンポイントで「〜に向けて、〜をターゲットにして」という意味です。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為鄰居太吵，所以我針對這個問題向管理員投訴。",
        "pinyin": "yīn wèi lín jū tài chǎo, suǒ yǐ wǒ zhēn duì zhè ge wèn tí xiàng guǎn lǐ yuán tóu sù.",
        "japanese": "隣人がうるさいので、私はこの問題について管理人に苦情を言いました。",
        "chunks": [
          "因為鄰居太吵，",
          "所以我針對這個問題",
          "向管理員投訴。"
        ],
        "hintText": "因為鄰居太吵，所以我"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然健保卡掉了，但只要針對補發流程去辦就沒問題。",
        "pinyin": "suī rán jiàn bǎo kǎ diào le, dàn zhǐ yào zhēn duì bǔ fā liú chéng qù bàn jiù méi wèn tí.",
        "japanese": "健康保険証をなくしましたが、再発行の手続きに従って手続きすれば問題ありません。",
        "chunks": [
          "雖然健保卡掉了，",
          "但只要針對補發流程",
          "去辦就沒問題。"
        ],
        "hintText": "雖然健保卡掉了，但"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要針對這件衣服的瑕疵要求打折，店家就會同意。",
        "pinyin": "zhǐ yào zhēn duì zhè jiàn yī fu de xiá cī yāo qiú dǎ zhé, diàn jiā jiù huì tóng yì.",
        "japanese": "この服の欠陥について割引を要求すれば、店は同意するでしょう。",
        "chunks": [
          "只要針對這件衣服的瑕疵",
          "要求打折，",
          "店家就會同意。"
        ],
        "hintText": "只要針對這件衣服的瑕疵"
      }
    ]
  },
  {
    "id": "B-096",
    "band": "B",
    "targetWord": "教訓",
    "distractors": [
      "經驗",
      "機會",
      "成功"
    ],
    "grammarNote": "「教訓（jiào xùn）」は失敗から得た戒めを指します。",
    "bossReading": {
      "text": "創業初期他設定的目標太高，結果資金周轉出問題；因此這次挫折成了深刻的[ ? ]，他開始用自動化節省成本，慢慢重新出發。",
      "targetWord": "教訓",
      "distractors": [
        "提醒",
        "回憶",
        "印象"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「成了深刻的[ ? ]」は“失敗から学ぶ戒め”を表す名詞が必要なので「教訓」が正解です。「目標」は達成すべきゴールで、「設定目標」などの形でよく使います。「節省」は節約することで、「自動化節省成本」＝自動化でコストを削減する、というビジネスの現実的な流れになります。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為他上次說謊被發現，所以這次他學到了一個很大的教訓。",
        "pinyin": "yīn wèi tā shàng cì shuō huǎng bèi fā xiàn, suǒ yǐ zhè cì tā xué dào le yī gè hěn dà de jiào xùn.",
        "japanese": "彼は前回嘘をついたことがバレたので、今回は大きな教訓を得た。",
        "chunks": [
          "因為他上次說謊被發現",
          "所以這次他學到了一個",
          "很大的教訓"
        ],
        "hintText": "因為他上次說謊被發現，所以這次他學到了一個"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家餐廳的服務很差，但是老闆願意改進，這也算是一個教訓。",
        "pinyin": "suī rán zhè jiā cān tīng de fú wù hěn chà, dàn shì lǎo bǎn yuàn yì gǎi jìn, zhè yě suàn shì yī gè jiào xùn.",
        "japanese": "このレストランのサービスはひどいが、店主が改善しようとしているのは一つの教訓と言える。",
        "chunks": [
          "雖然這家餐廳的服務很差",
          "但是老闆願意改進",
          "這也算是一個教訓"
        ],
        "hintText": "雖然這家餐廳的服務很差，但是老闆願意改進，這也算是"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要騎機車不戴安全帽，被警察抓到就會收到罰單，這是一個重要的教訓。",
        "pinyin": "zhǐ yào qí jī chē bù dài ān quán mào, bèi jǐng chá zhuā dào jiù huì shōu dào fá dān, zhè shì yī gè zhòng yào de jiào xùn.",
        "japanese": "バイクに乗る際にヘルメットをかぶらず、警官に捕まると罰金を取られる。これは重要な教訓だ。",
        "chunks": [
          "只要騎機車不戴安全帽",
          "被警察抓到就會收到罰單",
          "這是一個重要的教訓"
        ],
        "hintText": "只要騎機車不戴安全帽，被警察抓到就會收到罰單，這是一個"
      }
    ]
  },
  {
    "id": "B-097",
    "band": "B",
    "targetWord": "節省",
    "distractors": [
      "浪費",
      "準備",
      "發現"
    ],
    "grammarNote": "DXの目的である「節省（jié shěng）」は「節約する」という意味です。",
    "examples": [
      {
        "situation": "交通・移動",
        "chinese": "因為捷運有月票方案，所以每個月可以節省不少交通費。",
        "pinyin": "yīn wèi jié yùn yǒu yuè piào fāng àn, suǒ yǐ měi gè yuè kě yǐ jié shěng bù shǎo jiāo tōng fèi.",
        "japanese": "地下鉄には月額定期券プランがあるので、毎月かなりの交通費を節約できます。",
        "chunks": [
          "因為捷運有月票方案，",
          "所以每個月可以節省",
          "不少交通費。"
        ],
        "hintText": "因為捷運有月票方案，所以每個月可以"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要在打折的時候買東西，就能節省很多錢。",
        "pinyin": "zhǐ yào zài dǎ zhé de shí hòu mǎi dōng xī, jiù néng jié shěng hěn duō qián.",
        "japanese": "セールの時に買い物をすれば、たくさんお金を節約できます。",
        "chunks": [
          "只要在打折的時候買東西，",
          "就能節省",
          "很多錢。"
        ],
        "hintText": "只要在打折的時候買東西，就能"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然申請補助的流程很麻煩，但是可以節省一筆開銷。",
        "pinyin": "suī rán shēn qǐng bǔ zhù de liú chéng hěn má fan, dàn shì kě yǐ jié shěng yī bǐ kāi xiāo.",
        "japanese": "補助金の申請手続きは面倒ですが、出費を節約できます。",
        "chunks": [
          "雖然申請補助的流程很麻煩，",
          "但是可以節省",
          "一筆開銷。"
        ],
        "hintText": "雖然申請補助的流程很麻煩，但是可以"
      }
    ]
  },
  {
    "id": "B-098",
    "band": "B",
    "targetWord": "目標",
    "distractors": [
      "環境",
      "態度",
      "經驗"
    ],
    "grammarNote": "「目標（mù biāo）」は、ビジネスや人生において達成すべき明確なゴールを指します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然家人不支持我的目標，但是我還是堅持自己的夢想。",
        "pinyin": "suī rán jiā rén bù zhī chí wǒ de mù biāo, dàn shì wǒ hái shì jiān chí zì jǐ de mèng xiǎng.",
        "japanese": "雖然家人不支持我的目標，但我還是堅持自己的夢想。",
        "chunks": [
          "雖然家人不支持我的目標",
          "但是我還是堅持自己的夢想"
        ],
        "hintText": "雖然家人不支持"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的服務品質很好，所以我們決定把業績目標訂高一點。",
        "pinyin": "yīn wèi zhè jiā diàn de fú wù pǐn zhì hěn hǎo, suǒ yǐ wǒ men jué dìng bǎ yè jì mù biāo dìng gāo yī diǎn.",
        "japanese": "因為這家店的服務品質很好，所以我們決定把業績目標訂高一點。",
        "chunks": [
          "因為這家店的服務品質很好",
          "所以我們決定把業績目標訂高一點"
        ],
        "hintText": "因為這家店的服務品質很好，所以我們決定把"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要按時完成這個專案，我們就能達成年度目標。",
        "pinyin": "zhǐ yào àn shí wán chéng zhè ge zhuān àn, wǒ men jiù néng dá chéng nián dù mù biāo.",
        "japanese": "只要按時完成這個專案，我們就能達成年度目標。",
        "chunks": [
          "只要按時完成這個專案",
          "我們就能達成年度目標"
        ],
        "hintText": "只要按時完成這個專案，我們就能達成"
      }
    ]
  },
  {
    "id": "B-099",
    "band": "B",
    "targetWord": "確認",
    "distractors": [
      "發現",
      "準備",
      "解決"
    ],
    "grammarNote": "「與會（yù huì）」は「会議に出席する」というフォーマルな表現です。",
    "bossReading": {
      "text": "最近詐騙簡訊變多，我們開會前先確認與會名單並提高警覺；因此才能避免外人混進來，甚至不讓可疑連結[ ? ]任何損失。",
      "targetWord": "產生",
      "distractors": [
        "發生",
        "形成",
        "出現"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「[ ? ]任何損失」は“損失を生み出す”の意味が必要で、抽象的な結果を生む「產生」が最適です。「確認」は事前に確かめることで、「確認與會名單」に対応します。「警覺」は警戒心で、「提高警覺」は定型表現として詐騙対策の文脈にとても自然です。"
    },
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為這件衣服有打折，所以我想先確認一下尺寸再買。",
        "pinyin": "yīn wèi zhè jiàn yī fu yǒu dǎ zhé, suǒ yǐ wǒ xiǎng xiān què rèn yī xià chǐ cùn zài mǎi.",
        "japanese": "この服は割引があるので、サイズを確認してから買いたいです。",
        "chunks": [
          "因為這件衣服有打折",
          "所以我想先確認一下尺寸",
          "再買"
        ],
        "hintText": "因為這件衣服有打折，所以我想先"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然捷運很方便，但是上車前還是要確認一下路線圖。",
        "pinyin": "suī rán jié yùn hěn fāng biàn, dàn shì shàng chē qián hái shì yào què rèn yī xià lù xiàn tú.",
        "japanese": "MRTは便利ですが、乗車前に路線図を確認する必要があります。",
        "chunks": [
          "雖然捷運很方便",
          "但是上車前還是要確認一下路線圖"
        ],
        "hintText": "雖然捷運很方便，但是上車前還是要"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為發票不見了，所以我要確認一下有沒有辦法補救。",
        "pinyin": "yīn wèi fā piào bú jiàn le, suǒ yǐ wǒ yào què rèn yī xià yǒu méi yǒu bàn fǎ bǔ jiù.",
        "japanese": "領収書をなくしたので、何とか方法がないか確認します。",
        "chunks": [
          "因為發票不見了",
          "所以我要確認一下有沒有辦法補救"
        ],
        "hintText": "因為發票不見了，所以我要"
      }
    ]
  },
  {
    "id": "B-100",
    "band": "B",
    "targetWord": "產生",
    "distractors": [
      "發生",
      "發現",
      "解決"
    ],
    "grammarNote": "「產生（chǎn shēng）」は抽象的なもの（影響、興味、結果など）を生み出す際に使います。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為他常常遲到，所以對同事產生了不好的印象。",
        "pinyin": "yīn wèi tā cháng cháng chí dào, suǒ yǐ duì tóng shì chǎn shēng le bù hǎo de yìn xiàng.",
        "japanese": "彼はよく遅刻するので、同僚に悪い印象を与えた。",
        "chunks": [
          "因為他常常遲到，",
          "所以對同事",
          "產生了不好的印象。"
        ],
        "hintText": "因為他常常遲到，所以對同事"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要捷運站附近有停車位，就不會產生找車位的困擾。",
        "pinyin": "zhǐ yào jié yùn zhàn fù jìn yǒu tíng chē wèi, jiù bú huì chǎn shēng zhǎo chē wèi de kùn rǎo.",
        "japanese": "MRT駅の近くに駐車場があれば、駐車スペースを探す手間は生じない。",
        "chunks": [
          "只要捷運站附近有停車位，",
          "就不會產生",
          "找車位的困擾。"
        ],
        "hintText": "只要捷運站附近有停車位，就不會產生"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然我有買保險，但是車禍還是產生了高額的修車費。",
        "pinyin": "suī rán wǒ yǒu mǎi bǎo xiǎn, dàn shì chē huò hái shì chǎn shēng le gāo é de xiū chē fèi.",
        "japanese": "保険に入っていたけれど、事故で高額な修理費が発生した。",
        "chunks": [
          "雖然我有買保險，",
          "但是車禍還是產生了",
          "高額的修車費。"
        ],
        "hintText": "雖然我有買保險，但是車禍還是產生了"
      }
    ]
  },
  {
    "id": "B-101",
    "band": "B",
    "targetWord": "警覺",
    "distractors": [
      "興趣",
      "態度",
      "經驗"
    ],
    "grammarNote": "「提高警覺」は「警戒心を持つ」という定型句です。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為最近詐騙電話很多，所以我們要提高警覺，不要隨便接聽。",
        "pinyin": "yīn wèi zuì jìn zhà piàn diàn huà hěn duō, suǒ yǐ wǒ men yào tí gāo jǐng jué, bù yào suí biàn jiē tīng.",
        "japanese": "最近詐欺電話が多いので、警戒心を高めて、むやみに電話に出ないようにしましょう。",
        "chunks": [
          "因為最近詐騙電話很多",
          "所以我們要提高警覺",
          "不要隨便接聽"
        ],
        "hintText": "因為最近詐騙電話很多，所以我們要"
      },
      {
        "situation": "交通・移動",
        "problem": false,
        "target": "警覺",
        "category": "交通・移動",
        "chinese": "雖然捷運站都有監視器，但我們還是要提高警覺，注意身邊的陌生人。",
        "pinyin": "suī rán jié yùn zhàn dōu yǒu jiān shì qì, dàn wǒ men hái shì yào tí gāo jǐng jué, zhù yì shēn biān de mò shēng rén.",
        "japanese": "MRTの駅には監視カメラがありますが、それでも私たちは警戒心を高めて、周りの見知らぬ人に注意しなければなりません。",
        "chunks": [
          "雖然捷運站都有監視器",
          "但我們還是要提高警覺",
          "注意身邊的陌生人"
        ],
        "hintText": "雖然捷運站都有監視器，但我們還是要"
      },
      {
        "situation": "店舗・サービス",
        "problem": false,
        "target": "警覺",
        "category": "店舗・サービス",
        "chinese": "只要店員說要幫你保管發票，你就要提高警覺，因為可能是詐騙。",
        "pinyin": "zhǐ yào diàn yuán shuō yào bāng nǐ bǎo guǎn fā piào, nǐ jiù yào tí gāo jǐng jué, yīn wèi kě néng shì zhà piàn.",
        "japanese": "店員が領収書を預かると言ったら、警戒心を高めてください。詐欺の可能性があります。",
        "chunks": [
          "只要店員說要幫你保管發票",
          "你就要提高警覺",
          "因為可能是詐騙"
        ],
        "hintText": "只要店員說要幫你保管發票，你就要"
      }
    ]
  },
  {
    "id": "B-102",
    "band": "B",
    "targetWord": "佔據",
    "distractors": [
      "解決",
      "準備",
      "放棄"
    ],
    "grammarNote": "「佔據（zhàn jù）」はある場所や地位を占めることを指します。",
    "bossReading": {
      "text": "台灣半導體靠精密製程打出名號，因此公司順利[ ? ]國際大廠的訂單；投入後獲利相當可觀，甚至帶動更多供應商回流。",
      "targetWord": "佔據",
      "distractors": [
        "佔用",
        "掌握",
        "爭取"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "ここは「[ ? ]訂單」で“（市場・注文を）占める/確保する”意味が最も自然なので「佔據」が正解です。「精密」は誤差が少なく精巧なことを表し、「精密製程」で台湾の産業文脈に合います。「可觀」は数量・程度が大きいことで、「獲利相當可觀」＝利益がかなり大きい、の定番表現です。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他年紀最小，但是在我們家他總是佔據主導地位。",
        "pinyin": "suī rán tā nián jì zuì xiǎo，dàn shì zài wǒ men jiā tā zǒng shì zhàn jù zhǔ dǎo dì wèi。",
        "japanese": "彼は年齢が一番下ですが、私たちの家ではいつも主導権を握っています。",
        "chunks": [
          "雖然他年紀最小",
          "但是在我們家",
          "他總是佔據主導地位"
        ],
        "hintText": "雖然他年紀最小，但是在我們家他總是"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "這家餐廳因為人氣很旺，所以常常佔據排隊人潮。",
        "pinyin": "zhè jiā cān tīng yīn wèi rén qì hěn wàng，suǒ yǐ cháng cháng zhàn jù pái duì rén cháo。",
        "japanese": "このレストランは人気が高いので、よく行列ができています。",
        "chunks": [
          "這家餐廳因為人氣很旺",
          "所以常常",
          "佔據排隊人潮"
        ],
        "hintText": "這家餐廳因為人氣很旺，所以常常"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要一到上下班時間，捷運車廂就會被乘客佔據。",
        "pinyin": "zhǐ yào yí dào shàng xià bān shí jiān，jié yùn chē xiāng jiù huì bèi chéng kè zhàn jù。",
        "japanese": "ラッシュ時になると、MRTの車両は乗客で占領されます。",
        "chunks": [
          "只要一到上下班時間",
          "捷運車廂",
          "就會被乘客佔據"
        ],
        "hintText": "只要一到上下班時間，捷運車廂就會被乘客"
      }
    ]
  },
  {
    "id": "B-103",
    "band": "B",
    "targetWord": "精密",
    "distractors": [
      "簡單",
      "嚴重",
      "鬆散"
    ],
    "grammarNote": "「精密（jīng mì）」は誤差が少なく精巧な様子を表します。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為這隻手錶的機芯非常精密，所以維修費用很高。",
        "pinyin": "yīn wèi zhè zhī shǒu biǎo de jī xīn fēi cháng jīng mì, suǒ yǐ wéi xiū fèi yòng hěn gāo.",
        "japanese": "この時計のムーブメントは非常に精密なので、修理代が高いです。",
        "chunks": [
          "因為這隻手錶的機芯",
          "非常精密",
          "所以維修費用很高"
        ],
        "hintText": "因為這隻手錶的機芯"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然這台冷氣的零件很精密，但是只要定期保養就不容易壞。",
        "pinyin": "suī rán zhè tái lěng qì de líng jiàn hěn jīng mì, dàn shì zhǐ yào dìng qī bǎo yǎng jiù bù róng yì huài.",
        "japanese": "このエアコンの部品は精密ですが、定期的にメンテナンスすれば壊れにくいです。",
        "chunks": [
          "雖然這台冷氣的零件",
          "很精密",
          "但是只要定期保養就不容易壞"
        ],
        "hintText": "雖然這台冷氣的零件"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為這份地籍圖的測量數據非常精密，所以必須由專業技師來處理。",
        "pinyin": "yīn wèi zhè fèn dì jí tú de cè liáng shù jù fēi cháng jīng mì, suǒ yǐ bì xū yóu zhuān yè jì shī lái chǔ lǐ.",
        "japanese": "この地籍図の測量データは非常に精密なので、専門の技術者が処理しなければなりません。",
        "chunks": [
          "因為這份地籍圖的測量數據",
          "非常精密",
          "所以必須由專業技師來處理"
        ],
        "hintText": "因為這份地籍圖的測量數據"
      }
    ]
  },
  {
    "id": "B-104",
    "band": "B",
    "targetWord": "可觀",
    "distractors": [
      "簡單",
      "嚴重",
      "普通"
    ],
    "grammarNote": "「可觀（kě guān）」は数量や程度が無視できないほど「かなりの、相当な」ことを表します。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的生意非常好，所以每個月的收入都相當可觀。",
        "pinyin": "yīn wèi zhè jiā diàn de shēng yì fēi cháng hǎo，suǒ yǐ měi gè yuè de shōu rù dōu xiāng dāng kě guān。",
        "japanese": "この店の商売はとても好調なので、毎月の収入はかなりのものです。",
        "chunks": [
          "因為這家店的生意非常好",
          "所以每個月的收入",
          "都相當可觀"
        ],
        "hintText": "因為這家店的生意非常好，所以每個月的收入都"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然只是小車禍，但修車費卻是一筆可觀的開銷。",
        "pinyin": "suī rán zhǐ shì xiǎo chē huò，dàn xiū chē fèi què shì yī bǐ kě guān de kāi xiāo。",
        "japanese": "小さな事故でしたが、修理代はかなりの出費でした。",
        "chunks": [
          "雖然只是小車禍",
          "但修車費",
          "卻是一筆可觀的開銷"
        ],
        "hintText": "雖然只是小車禍，但修車費"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為捷運站周邊的停車位有限，所以違規停車的罰款金額非常可觀。",
        "pinyin": "yīn wèi jié yùn zhàn zhōu biān de tíng chē wèi yǒu xiàn，suǒ yǐ wéi guī tíng chē de fá kuǎn jīn é fēi cháng kě guān。",
        "japanese": "MRT駅周辺の駐車スペースが限られているため、違法駐車の罰金はかなりの額です。",
        "chunks": [
          "因為捷運站周邊的停車位有限",
          "所以違規停車的罰款金額",
          "非常可觀"
        ],
        "hintText": "因為捷運站周邊的停車位有限，所以違規停車的罰款金額"
      }
    ]
  },
  {
    "id": "B-105",
    "band": "B",
    "targetWord": "挑戰",
    "distractors": [
      "保護",
      "放棄",
      "拒絕"
    ],
    "grammarNote": "「挑戰（tiǎo zhàn）」は限界を超える試みを指します。",
    "bossReading": {
      "text": "台北黑客松氣氛前所未有地熱烈，大家不停挑戰自我，因此他在簡報中展現[ ? ]的分析能力，甚至獲得評審加碼資源。",
      "targetWord": "卓越",
      "distractors": [
        "優秀",
        "普通",
        "出色"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「展現[ ? ]的分析能力」は“他よりはるかに優れている”ニュアンスが必要なので「卓越」が最適です。「前所未有」は今までに一度もなかったことで、「前所未有地熱烈」のように強調表現になります。「挑戰」は限界に挑むことで、ハッカソンの文脈で「挑戰自我」が自然に使えます。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然哥哥覺得創業風險很高，但是他還是決定挑戰自己開一家咖啡店。",
        "pinyin": "suī rán gē ge jué de chuàng yè fēng xiǎn hěn gāo, dàn shì tā hái shì jué dìng tiǎo zhàn zì jǐ kāi yī jiā kā fēi diàn.",
        "japanese": "兄は起業のリスクは高いと思っているが、それでも自分に挑戦してカフェを開くことにした。",
        "chunks": [
          "雖然哥哥覺得創業風險很高",
          "但是他還是決定",
          "挑戰自己開一家咖啡店"
        ],
        "hintText": "雖然哥哥覺得創業風險很高，但是他還是決定"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為機車突然拋錨，我只好挑戰自己推車去最近的機車行修理。",
        "pinyin": "yīn wèi jī chē tū rán pāo máo, wǒ zhǐ hǎo tiǎo zhàn zì jǐ tuī chē qù zuì jìn de jī chē háng xiū lǐ.",
        "japanese": "バイクが突然エンストしたので、仕方なく自分で押して最寄りのバイク屋まで修理に行くことに挑戦した。",
        "chunks": [
          "因為機車突然拋錨",
          "我只好挑戰自己",
          "推車去最近的機車行修理"
        ],
        "hintText": "因為機車突然拋錨，我只好"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要拿到這張證照，我就可以挑戰更高階的職位，所以我要努力準備考試。",
        "pinyin": "zhǐ yào ná dào zhè zhāng zhèng zhào, wǒ jiù kě yǐ tiǎo zhàn gèng gāo jiē de zhí wèi, suǒ yǐ wǒ yào nǔ lì zhǔn bèi kǎo shì.",
        "japanese": "この資格を取れば、より高いポジションに挑戦できるので、試験勉強を頑張ります。",
        "chunks": [
          "只要拿到這張證照",
          "我就可以挑戰更高階的職位",
          "所以我要努力準備考試"
        ],
        "hintText": "只要拿到這張證照，我就可以"
      }
    ]
  },
  {
    "id": "B-106",
    "band": "B",
    "targetWord": "前所未有",
    "distractors": [
      "習以為常",
      "常見",
      "普通"
    ],
    "grammarNote": "「前所未有（qián suǒ wèi yǒu）」は、今までに一度もなかったことを強調する四字熟語です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們認識很久了，但這次的誤會是前所未有的嚴重。",
        "pinyin": "suī rán wǒ men rèn shi hěn jiǔ le, dàn zhè cì de wù huì shì qián suǒ wèi yǒu de yán zhòng.",
        "japanese": "私たちは長い付き合いですが、今回の誤解はかつてないほど深刻です。",
        "chunks": [
          "雖然我們認識很久了",
          "但這次的誤會",
          "是前所未有的嚴重"
        ],
        "hintText": "雖然我們認識很久了，但這次的誤會是"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店推出了前所未有的折扣，所以很多人排隊買東西。",
        "pinyin": "yīn wèi zhè jiā diàn tuī chū le qián suǒ wèi yǒu de zhé kòu, suǒ yǐ hěn duō rén pái duì mǎi dōng xi.",
        "japanese": "この店が前代未聞の割引を実施したので、多くの人が列を作って買い物をしています。",
        "chunks": [
          "因為這家店推出了前所未有的折扣",
          "所以很多人排隊買東西"
        ],
        "hintText": "因為這家店推出了"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要遇到前所未有的問題，我們就會先打電話問客服。",
        "pinyin": "zhǐ yào yù dào qián suǒ wèi yǒu de wèn tí, wǒ men jiù huì xiān dǎ diàn huà wèn kè fú.",
        "japanese": "かつてない問題に直面したら、まずカスタマーサービスに電話して尋ねます。",
        "chunks": [
          "只要遇到前所未有的問題",
          "我們就會先打電話問客服"
        ],
        "hintText": "只要遇到"
      }
    ]
  },
  {
    "id": "B-107",
    "band": "B",
    "targetWord": "卓越",
    "distractors": [
      "普通",
      "簡單",
      "嚴重"
    ],
    "grammarNote": "「卓越（zhuó yuè）」は他よりはるかに優れていることを表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他年紀輕輕，但在處理家庭問題上展現了卓越的智慧。",
        "pinyin": "suī rán tā nián jì qīng qīng, dàn zài chǔ lǐ jiā tíng wèn tí shàng zhǎn xiàn le zhuó yuè de zhì huì.",
        "japanese": "彼は若いが、家庭問題の処理において卓越した知恵を示した。",
        "chunks": [
          "雖然他年紀輕輕",
          "但在處理家庭問題上",
          "展現了卓越的智慧"
        ],
        "hintText": "雖然他年紀輕輕，但在處理家庭問題上展現了"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的服務品質卓越，所以即使不打折客人還是很多。",
        "pinyin": "yīn wèi zhè jiā diàn de fú wù pǐn zhì zhuó yuè, suǒ yǐ jí shǐ bù dǎ zhé kè rén hái shì hěn duō.",
        "japanese": "この店のサービス品質が卓越しているので、割引がなくても客は多い。",
        "chunks": [
          "因為這家店的服務品質卓越",
          "所以即使不打折",
          "客人還是很多"
        ],
        "hintText": "因為這家店的服務品質卓越，所以即使不打折"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要持續努力，你也能在職場上獲得卓越的表現。",
        "pinyin": "zhǐ yào chí xù nǔ lì, nǐ yě néng zài zhí chǎng shàng huò dé zhuó yuè de biǎo xiàn.",
        "japanese": "努力を続ければ、あなたも職場で卓越した成績を収められる。",
        "chunks": [
          "只要持續努力",
          "你也能在職場上",
          "獲得卓越的表現"
        ],
        "hintText": "只要持續努力，你也能在職場上獲得"
      }
    ]
  },
  {
    "id": "B-108",
    "band": "B",
    "targetWord": "樂觀",
    "distractors": [
      "悲觀",
      "嚴重",
      "緊張"
    ],
    "grammarNote": "「樂觀（lè guān）」は物事を前向きに捉える姿勢です。",
    "bossReading": {
      "text": "專案卡關時他仍保持樂觀，因此各部門願意配合加班；為了[ ? ]品質，團隊又做了嚴格測試，最後準時交付。",
      "targetWord": "確保",
      "distractors": [
        "保證",
        "維持",
        "完成"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「為了[ ? ]品質」は“確実に守る”意味が必要で、定番の「確保品質」になるため「確保」が正解です。「樂觀」は前向きな姿勢で、トラブル時でも士気を落とさない文脈に合います。「配合」は歩調を合わせ協力することで、「各部門願意配合」＝部署間連携が取れる、という自然な用法です。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他最近失業了，但是他還是很樂觀，因為他相信只要努力就會找到好工作。",
        "pinyin": "suī rán tā zuì jìn shī yè le， dàn shì tā hái shì hěn lè guān， yīn wèi tā xiāng xìn zhǐ yào nǔ lì jiù huì zhǎo dào hǎo gōng zuò。",
        "japanese": "彼は最近失業したけれども、それでもとても楽観的です。努力すれば良い仕事が見つかると信じているからです。",
        "chunks": [
          "雖然他最近失業了",
          "但是他還是很樂觀",
          "因為他相信只要努力就會找到好工作"
        ],
        "hintText": "雖然他最近失業了，但是他還是"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "即使這家餐廳的服務很慢，我也保持樂觀，因為他們的發票可以對獎。",
        "pinyin": "jí shǐ zhè jiā cān tīng de fú wù shēng yīn hěn dà， wǒ yě bǎo chí lè guān， yīn wèi tā men de fā piào kě yǐ duì jiǎng。",
        "japanese": "このレストランのサービスはとても遅いけれども、私は楽観的です。なぜなら、彼らの領収書で宝くじが当たるかもしれないからです。",
        "chunks": [
          "即使這家餐廳的服務很慢",
          "我也保持樂觀",
          "因為他們的發票可以對獎"
        ],
        "hintText": "即使這家餐廳的服務很慢，我也"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為捷運突然故障，所以很多人遲到，但只要保持樂觀，就能找到替代的交通方式。",
        "pinyin": "yīn wèi jié yùn tū rán gù zhàng， suǒ yǐ hěn duō rén chí dào， dàn zhǐ yào bǎo chí lè guān， jiù néng zhǎo dào tì dài de jiāo tōng fāng shì。",
        "japanese": "地下鉄が突然故障したので、多くの人が遅刻しましたが、楽観的でいれば、代わりの交通手段を見つけることができます。",
        "chunks": [
          "因為捷運突然故障",
          "所以很多人遲到",
          "但只要保持樂觀就能找到替代的交通方式"
        ],
        "hintText": "因為捷運突然故障，所以很多人遲到，但只要"
      }
    ]
  },
  {
    "id": "B-109",
    "band": "B",
    "targetWord": "確保",
    "distractors": [
      "發現",
      "準備",
      "解決"
    ],
    "grammarNote": "「確保」は「確実に保つ、確保する」という意味で、ビジネスの目標や安全、品質などに対してよく使われます。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為下個月要舉辦大型活動，所以我們必須確保場地安全。",
        "pinyin": "yīn wèi xià ge yuè yào jǔ bàn dà xíng huó dòng, suǒ yǐ wǒ men bì xū què bǎo chǎng dì ān quán.",
        "japanese": "来月大規模なイベントを開催するので、会場の安全を確保しなければなりません。",
        "chunks": [
          "因為下個月要舉辦大型活動",
          "所以我們必須",
          "確保場地安全"
        ],
        "hintText": "因為下個月要舉辦大型活動，所以我們必須"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要定期檢查庫存量，就能確保商品不會缺貨。",
        "pinyin": "zhǐ yào dìng qī jiǎn chá kù cún liàng, jiù néng què bǎo shāng pǐn bù huì quē huò.",
        "japanese": "定期的に在庫量をチェックすれば、商品が品切れにならないように確保できます。",
        "chunks": [
          "只要定期檢查庫存量",
          "就能",
          "確保商品不會缺貨"
        ],
        "hintText": "只要定期檢查庫存量，就能"
      },
      {
        "situation": "交通・移動",
        "chinese": "為了確保捷運行車安全，司機員必須嚴格遵守號誌。",
        "pinyin": "wèi le què bǎo jié yùn xíng chē ān quán, sī jī yuán bì xū yán gé zūn shǒu hào zhì.",
        "japanese": "MRTの運行安全を確保するため、運転士は厳格に信号を守らなければなりません。",
        "chunks": [
          "為了確保捷運行車安全",
          "司機員必須",
          "嚴格遵守號誌"
        ],
        "hintText": "為了確保捷運行車安全，"
      }
    ]
  },
  {
    "id": "B-110",
    "band": "B",
    "targetWord": "配合",
    "distractors": [
      "發現",
      "準備",
      "解決"
    ],
    "grammarNote": "「配合」は「協力する、足並みを揃える、合わせる」という意味です。他人の計画や指示に合わせて動く際によく使われます。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家餐廳很受歡迎，但還是請你配合服務人員的帶位，不然會等很久。",
        "pinyin": "suī rán zhè jiā cān tīng hěn shòu huān yíng, dàn hái shì qǐng nǐ pèi hé fú wù rén yuán de dài wèi, bù rán huì děng hěn jiǔ.",
        "japanese": "このレストランは人気ですが、スタッフの案内に従ってください。そうしないと長く待つことになります。",
        "chunks": [
          "雖然這家餐廳很受歡迎，",
          "但還是請你",
          "配合服務人員的帶位，不然會等很久。"
        ],
        "hintText": "雖然這家餐廳很受歡迎，但還是請你"
      },
      {
        "situation": "生活トラブル",
        "grammarNote": "",
        "chinese": "因為樓上鄰居施工噪音太大，所以我們只好配合管委會的時間，才能解決問題。",
        "pinyin": "yīn wèi lóu shàng lín jū shī gōng zào yīn tài dà, suǒ yǐ wǒ men zhǐ hǎo pèi hé guǎn wěi huì de shí jiān, cái néng jiě jué wèn tí.",
        "japanese": "上の階の工事の騒音がひどいので、管理委員会の時間に合わせて問題を解決するしかありません。",
        "chunks": [
          "因為樓上鄰居施工噪音太大，",
          "所以我們只好",
          "配合管委會的時間，才能解決問題。"
        ],
        "hintText": "因為樓上鄰居施工噪音太大，所以我們只好"
      },
      {
        "situation": "公的手続き・職場",
        "grammarNote": "",
        "chinese": "只要大家配合公司的防疫規定，就能安心上班不用擔心。",
        "pinyin": "zhǐ yào dà jiā pèi hé gōng sī de fáng yì guī dìng, jiù néng ān xīn shàng bān bù yòng dān xīn.",
        "japanese": "みんなが会社の防疫規定に従えば、安心して仕事ができます。",
        "chunks": [
          "只要大家",
          "配合公司的防疫規定，",
          "就能安心上班不用擔心。"
        ],
        "hintText": "只要大家"
      }
    ]
  },
  {
    "id": "B-111",
    "band": "B",
    "targetWord": "責任感",
    "distractors": [
      "危機感",
      "幽默感",
      "挫折感"
    ],
    "grammarNote": "「責任感」は日本語と同じ意味です。「有責任感（責任感がある）」という形で、人の性質や仕事への態度を評価する際によく使われます。",
    "bossReading": {
      "text": "新案子趕進度時，主管要求每個人有責任感並守住[ ? ]；因此流程更一致，公司在國際市場才能維持競爭優勢，甚至吸引新客戶。",
      "targetWord": "原則",
      "distractors": [
        "規則",
        "條件",
        "立場"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「守住[ ? ]」は“譲れない基本ルール”を指す語が必要で、「原則」が最も自然です。「責任感」は仕事をやり切る姿勢で、チームの品質・納期を支える要素としてよく使われます。「優勢」は他より有利な条件で、「維持競爭優勢」＝競争優位を保つ、というビジネス表現になります。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為他很有責任感，所以家裡的大小事都交給他去處理。",
        "pinyin": "yīn wèi tā hěn yǒu zé rèn gǎn, suǒ yǐ jiā lǐ de dà xiǎo shì dōu jiāo gěi tā qù chǔ lǐ.",
        "japanese": "彼は責任感があるので、家の大小のことはすべて彼に任せています。",
        "chunks": [
          "因為他很有責任感",
          "所以家裡的大小事",
          "都交給他去處理"
        ],
        "hintText": "因為他很有責任感，所以"
      },
      {
        "situation": "職場",
        "chinese": "雖然工作很辛苦，但只要大家有責任感，就能順利完成任務。",
        "pinyin": "suī rán gōng zuò hěn xīn kǔ, dàn zhǐ yào dà jiā yǒu zé rèn gǎn, jiù néng shùn lì wán chéng rèn wù.",
        "japanese": "仕事は大変ですが、みんなに責任感があれば、任務を順調に完了できます。",
        "chunks": [
          "雖然工作很辛苦",
          "但只要大家有責任感",
          "就能順利完成任務"
        ],
        "hintText": "雖然工作很辛苦，但只要大家有責任感，"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為房東很有責任感，所以熱水器壞掉時，他馬上找人來修。",
        "pinyin": "yīn wèi fáng dōng hěn yǒu zé rèn gǎn, suǒ yǐ rè shuǐ qì huài diào shí, tā mǎ shàng zhǎo rén lái xiū.",
        "japanese": "大家さんは責任感があるので、給湯器が壊れた時、すぐに修理を手配してくれました。",
        "chunks": [
          "因為房東很有責任感",
          "所以熱水器壞掉時",
          "他馬上找人來修"
        ],
        "hintText": "因為房東很有責任感，所以"
      }
    ]
  },
  {
    "id": "B-112",
    "band": "B",
    "targetWord": "原則",
    "distractors": [
      "機會",
      "經驗",
      "態度"
    ],
    "grammarNote": "「原則」は物事の根本的な決まりやルールを指します。「首要」は「最も重要な」という意味の形容詞です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們家庭的原則是互相尊重，但是偶爾還是會因為小事吵架。",
        "pinyin": "suī rán wǒ men jiā tíng de yuán zé shì hù xiāng zūn zhòng, dàn shì ǒu ěr hái shì huì yīn wèi xiǎo shì chǎo jià.",
        "japanese": "私たち家族の原則は相互尊重ですが、たまには小さなことで喧嘩します。",
        "chunks": [
          "雖然我們家庭的原則是互相尊重",
          "但是偶爾還是會因為小事吵架"
        ],
        "hintText": "雖然我們家庭的原則是互相尊重，但是偶爾還是會因為小事吵架。"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的原則是不打折，所以就算用會員卡也沒有優惠。",
        "pinyin": "yīn wèi zhè jiā diàn de yuán zé shì bù dǎ zhé, suǒ yǐ jiù suàn yòng huì yuán kǎ yě méi yǒu yōu huì.",
        "japanese": "この店の原則は値引きしないことなので、会員カードを使っても割引はありません。",
        "chunks": [
          "因為這家店的原則是不打折",
          "所以就算用會員卡也沒有優惠"
        ],
        "hintText": "因為這家店的原則是不打折，所以就算用會員卡也沒有優惠。"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要開車的原則是安全第一，就不容易發生車禍。",
        "pinyin": "zhǐ yào kāi chē de yuán zé shì ān quán dì yī, jiù bù róng yì fā shēng chē huò.",
        "japanese": "運転の原則を安全第一にすれば、事故は起こりにくいです。",
        "chunks": [
          "只要開車的原則是安全第一",
          "就不容易發生車禍"
        ],
        "hintText": "只要開車的原則是安全第一，就不容易發生車禍。"
      }
    ]
  },
  {
    "id": "B-113",
    "band": "B",
    "targetWord": "優勢",
    "distractors": [
      "弱勢",
      "劣勢",
      "趨勢"
    ],
    "grammarNote": "「優勢」は他より優れた条件や立場を指します。「既然...」は「～である以上は」という前提を表す接続詞です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "既然他這麼有優勢，我們不如就讓他來主導這次的家庭旅行吧。",
        "pinyin": "jì rán tā zhè me yǒu yōu shì, wǒ men bù rú jiù ràng tā lái zhǔ dǎo zhè cì de jiā tíng lǚ xíng ba.",
        "japanese": "彼がこれほど優位な立場にあるのだから、今回の家族旅行は彼に主導してもらおう。",
        "chunks": [
          "既然他這麼有優勢",
          "我們不如就讓他來主導",
          "這次的家庭旅行吧"
        ],
        "hintText": "既然他這麼有優勢，我們不如就讓他來主導這次的家庭旅行吧。"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "既然這家店的優勢是價格便宜，只要打折我就會來買。",
        "pinyin": "jì rán zhè jiā diàn de yōu shì shì jià gé pián yí, zhǐ yào dǎ zhé wǒ jiù huì lái mǎi.",
        "japanese": "この店の強みは価格が安いことなので、割引があれば私は買いに来ます。",
        "chunks": [
          "既然這家店的優勢是價格便宜",
          "只要打折",
          "我就會來買"
        ],
        "hintText": "既然這家店的優勢是價格便宜，只要打折我就會來買。"
      },
      {
        "situation": "交通・移動",
        "chinese": "既然捷運的優勢是準時，我們雖然要轉車，但還是選擇搭捷運。",
        "pinyin": "jì rán jié yùn de yōu shì shì zhǔn shí, wǒ men suī rán yào zhuǎn chē, dàn hái shì xuǎn zé dā jié yùn.",
        "japanese": "地下鉄の強みは時間通りであることなので、乗り換えが必要ですが、それでも地下鉄を選びます。",
        "chunks": [
          "既然捷運的優勢是準時",
          "我們雖然要轉車",
          "但還是選擇搭捷運"
        ],
        "hintText": "既然捷運的優勢是準時，我們雖然要轉車，但還是選擇搭捷運。"
      }
    ]
  },
  {
    "id": "B-114",
    "band": "B",
    "targetWord": "潛力",
    "distractors": [
      "壓力",
      "精力",
      "財力"
    ],
    "grammarNote": "「潛力」は潜在的な能力や発展の可能性を指します。「只要...」は「～しさえすれば」という十分条件を表します。",
    "bossReading": {
      "text": "實習生用不同角度整理簡報並在會議上發表，因此主管看見他的[ ? ]，甚至讓他負責下一次提案，給他更大舞台。",
      "targetWord": "潛力",
      "distractors": [
        "能力",
        "實力",
        "動力"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "文脈は“まだ表に出ていない伸びしろ”を評価する内容なので「潛力」が正解です。「角度」は視点・切り口で、「用不同角度整理」＝別の観点でまとめる、という自然な用法です。「發表」は会議など公の場で述べることで、「在會議上發表」につながります。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "只要他願意多花時間練習，他的潛力就能完全發揮出來。",
        "pinyin": "zhǐ yào tā yuàn yì duō huā shí jiān liàn xí ， tā de qián lì jiù néng wán quán fā huī chū lái 。",
        "japanese": "彼が進んで多くの時間を練習に費やしさえすれば、彼の潜在能力は完全に発揮できる。",
        "chunks": [
          "只要他願意多花時間練習，",
          "他的潛力",
          "就能完全發揮出來。"
        ],
        "hintText": "只要他願意多花時間練習，"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "這家店只要改進服務態度，其實很有潛力成為排隊名店。",
        "pinyin": "zhè jiā diàn zhǐ yào gǎi jìn fú wù tài dù ， qí shí hěn yǒu qián lì chéng wéi pái duì míng diàn 。",
        "japanese": "この店はサービス態度を改善しさえすれば、実は行列のできる有名店になる潜在力がある。",
        "chunks": [
          "這家店只要改進服務態度，",
          "其實很有潛力",
          "成為排隊名店。"
        ],
        "hintText": "這家店只要改進服務態度，"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然這條捷運路線目前運量不高，但未來發展潛力非常大。",
        "pinyin": "suī rán zhè tiáo jié yùn lù xiàn mù qián yùn liàng bù gāo ， dàn wèi lái fā zhǎn qián lì fēi cháng dà 。",
        "japanese": "このMRT路線は現在輸送量は高くないが、将来の発展潜在力は非常に大きい。",
        "chunks": [
          "雖然這條捷運路線目前運量不高，",
          "但未來發展潛力",
          "非常大。"
        ],
        "hintText": "雖然這條捷運路線目前運量不高，"
      }
    ]
  },
  {
    "id": "B-115",
    "band": "B",
    "targetWord": "角度",
    "distractors": [
      "程度",
      "態度",
      "溫度"
    ],
    "grammarNote": "「角度（jiǎo dù）」は視点や考え方の切り口を指します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然爸爸很嚴格，但是從他的角度來看，都是為了我好。",
        "pinyin": "suī rán bà ba hěn yán gé, dàn shì cóng tā de jiǎo dù lái kàn, dōu shì wèi le wǒ hǎo.",
        "japanese": "お父さんはとても厳しいけれど、彼の立場から見れば、すべて私のためなんだ。",
        "chunks": [
          "雖然爸爸很嚴格，",
          "但是從他的角度來看，",
          "都是為了我好。"
        ],
        "hintText": "雖然爸爸很嚴格，但是從"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為鄰居經常半夜吵鬧，所以從住戶的角度來看，只好報警處理。",
        "pinyin": "yīn wèi lín jū jīng cháng bàn yè chǎo nào, suǒ yǐ cóng zhù hù de jiǎo dù lái kàn, zhǐ hǎo bào jǐng chǔ lǐ.",
        "japanese": "隣人がよく夜中に騒ぐので、住民の立場から見れば、仕方なく警察に通報するしかない。",
        "chunks": [
          "因為鄰居經常半夜吵鬧，",
          "所以從住戶的角度來看，",
          "只好報警處理。"
        ],
        "hintText": "因為鄰居經常半夜吵鬧，所以從"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要站在客戶的角度思考，就能提供更好的服務品質。",
        "pinyin": "zhǐ yào zhàn zài kè hù de jiǎo dù sī kǎo, jiù néng tí gōng gèng hǎo de fú wù pǐn zhì.",
        "japanese": "顧客の立場に立って考えさえすれば、より良いサービス品質を提供できる。",
        "chunks": [
          "只要站在客戶的角度思考，",
          "就能提供更好的服務品質。"
        ],
        "hintText": "只要站在"
      }
    ]
  },
  {
    "id": "B-116",
    "band": "B",
    "targetWord": "發表",
    "distractors": [
      "發現",
      "發生",
      "發明"
    ],
    "grammarNote": "「發表（fā biǎo）」は公の場で意見や作品を出すことを指します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他年紀輕輕，但是已經在學術期刊上發表了三篇論文。",
        "pinyin": "suī rán tā nián jì qīng qīng ，dàn shì yǐ jīng zài xué shù qī kān shàng fā biǎo le sān piān lùn wén 。",
        "japanese": "彼は若いながらも、学術誌に3本の論文を発表している。",
        "chunks": [
          "雖然他年紀輕輕",
          "但是",
          "已經在學術期刊上",
          "發表了三篇論文"
        ],
        "hintText": "雖然他年紀輕輕，但是已經在學術期刊上"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的料理很有特色，所以老闆決定在網路上發表食譜吸引客人。",
        "pinyin": "yīn wèi zhè jiā cān tīng de liào lǐ hěn yǒu tè sè ，suǒ yǐ lǎo bǎn jué dìng zài wǎng lù shàng fā biǎo shí pǔ xī yǐn kè rén 。",
        "japanese": "このレストランの料理は特徴があるので、店主はネットでレシピを公開して客を呼び込むことにした。",
        "chunks": [
          "因為這家餐廳的料理很有特色",
          "所以",
          "老闆決定在網路上",
          "發表食譜吸引客人"
        ],
        "hintText": "因為這家餐廳的料理很有特色，所以老闆決定在網路上"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要申請通過，他就可以在國際研討會上發表最新的研究成果。",
        "pinyin": "zhǐ yào shēn qǐng tōng guò ，tā jiù kě yǐ zài guó jì yán tǎo huì shàng fā biǎo zuì xīn de yán jiū chéng guǒ 。",
        "japanese": "申請が通れば、彼は国際セミナーで最新の研究成果を発表できる。",
        "chunks": [
          "只要申請通過",
          "他就可以",
          "在國際研討會上",
          "發表最新的研究成果"
        ],
        "hintText": "只要申請通過，他就可以在國際研討會上"
      }
    ]
  },
  {
    "id": "B-117",
    "band": "B",
    "targetWord": "旨在",
    "distractors": [
      "存在",
      "是在",
      "正在"
    ],
    "grammarNote": "「旨在（zhǐ zài）」は「〜することを目的とする」という書き言葉で、公式な規定や方針などを説明する際によく使われます。",
    "bossReading": {
      "text": "新合約條款旨在保障雙方權益，因此談判時必須把細節說清楚；若供應商臨時改交期，我們就得立刻[ ? ]替代方案。",
      "targetWord": "交期",
      "distractors": [
        "學期",
        "日期",
        "預期"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "ここは“納期・納品期限”を表す名詞が必要で、定番のビジネス語「交期」が最適です。「旨在」は“〜を目的とする”で、規定・条款の目的を述べる硬い表現として自然です。「談判」は利害調整の交渉で、契約条件を詰める場面に合います。"
    },
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳旨在提供健康飲食，所以他們堅持使用有機食材。",
        "pinyin": "yīn wèi zhè jiā cān tīng zhǐ zài tí gōng jiàn kāng yǐn shí, suǒ yǐ tā men jiān chí shǐ yòng yǒu jī shí cái.",
        "japanese": "このレストランは健康的な食事を提供することを目的としているので、有機食材を使うことにこだわっています。",
        "chunks": [
          "因為這家餐廳",
          "旨在提供健康飲食",
          "所以他們堅持使用有機食材"
        ],
        "hintText": "因為這家餐廳"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然這項新政策旨在簡化申請流程，但是大家還是覺得很麻煩。",
        "pinyin": "suī rán zhè xiàng xīn zhèng cè zhǐ zài jiǎn huà shēn qǐng liú chéng, dàn shì dà jiā hái shì jué de hěn má fan.",
        "japanese": "この新しい政策は申請手続きを簡素化することを目的としていますが、みんなはまだ面倒だと感じています。",
        "chunks": [
          "雖然這項新政策",
          "旨在簡化申請流程",
          "但是大家還是覺得很麻煩"
        ],
        "hintText": "雖然這項新政策"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要社區的監視系統旨在保障住戶安全，就應該定期維護。",
        "pinyin": "zhǐ yào shè qū de jiān shì xì tǒng zhǐ zài bǎo zhàng zhù hù ān quán, jiù yīng gāi dìng qī wéi hù.",
        "japanese": "コミュニティの監視システムが住民の安全を確保することを目的としているなら、定期的にメンテナンスすべきです。",
        "chunks": [
          "只要社區的監視系統",
          "旨在保障住戶安全",
          "就應該定期維護"
        ],
        "hintText": "只要社區的監視系統"
      }
    ]
  },
  {
    "id": "B-118",
    "band": "B",
    "targetWord": "交期",
    "distractors": [
      "預期",
      "學期",
      "日期"
    ],
    "grammarNote": "「交期」は“納期”のこと。ビジネスでは「交期延後（納期が遅れる）」のように言います。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為原料短缺，所以這批訂單的交期可能會延後一個月。",
        "pinyin": "yīn wèi yuán liào duǎn quē，suǒ yǐ zhè pī dìng dān de jiāo qī kě néng huì yán hòu yī gè yuè。",
        "japanese": "原料不足のため、この注文の納期は1ヶ月遅れる可能性があります。",
        "chunks": [
          "因為原料短缺",
          "所以這批訂單的交期",
          "可能會延後一個月"
        ],
        "hintText": "因為原料短缺，所以這批訂單的"
      },
      {
        "situation": "職場",
        "japanese": "プロジェクトの進捗が順調なら、来週の水曜日が最終納期になります。",
        "chinese": "只要專案進度順利，交期就會在下週三截止。",
        "pinyin": "zhǐ yào zhuān àn jìn dù shùn lì，jiāo qī jiù huì zài xià zhōu sān jié zhǐ。",
        "hintText": "只要專案進度順利，",
        "chunks": [
          "只要專案進度順利",
          "交期",
          "就會在下週三截止"
        ]
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然廠商說交期沒問題，但是我們還是擔心會延遲。",
        "pinyin": "suī rán chǎng shāng shuō jiāo qī méi wèn tí，dàn shì wǒ men hái shì dān xīn huì yán chí。",
        "japanese": "メーカーは納期に問題ないと言っているが、それでも遅れるのではと心配だ。",
        "hintText": "雖然廠商說交期沒問題，",
        "chunks": [
          "雖然廠商說交期沒問題",
          "但是我們還是擔心",
          "會延遲"
        ]
      }
    ]
  },
  {
    "id": "B-119",
    "band": "B",
    "targetWord": "談判",
    "distractors": [
      "談話",
      "開會",
      "面談"
    ],
    "grammarNote": "「談判」は利害や条件をすり合わせる“交渉”です。納期や価格の調整でよく使います。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為哥哥跟嫂嫂對婚禮預算看法不同，所以他們一直在談判，希望達成共識。",
        "pinyin": "Yīnwèi gēge gēn sǎosao duì hūnlǐ yùsuàn kànfǎ bùtóng, suǒyǐ tāmen yīzhí zài tánpàn, xīwàng dáchéng gòngshì.",
        "japanese": "兄と義姉は結婚式の予算について意見が合わないので、ずっと交渉して合意に達しようとしている。",
        "chunks": [
          "因為哥哥跟嫂嫂對婚禮預算看法不同",
          "所以他們一直在談判",
          "希望達成共識"
        ],
        "hintText": "因為哥哥跟嫂嫂對婚禮預算看法不同，所以他們一直在"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家店的服務很好，但是因為價格太貴，所以我跟店員談判看看能不能打折。",
        "pinyin": "Suīrán zhè jiā diàn de fúwù hěn hǎo, dànshì yīnwèi jiàgé tài guì, suǒyǐ wǒ gēn diànyuán tánpàn kànkan néng bù néng dǎzhé.",
        "japanese": "この店のサービスはとても良いけれど、値段が高すぎるので、店員と交渉して割引してもらえるかどうか見ている。",
        "chunks": [
          "雖然這家店的服務很好",
          "但是因為價格太貴",
          "所以我跟店員談判看看能不能打折"
        ],
        "hintText": "雖然這家店的服務很好，但是因為價格太貴，所以我跟店員"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要公司願意調整付款條件，我們就可以跟客戶談判更長的交期。",
        "pinyin": "Zhǐyào gōngsī yuànyì tiáozhěng fùkuǎn tiáojiàn, wǒmen jiù kěyǐ gēn kèhù tánpàn gèng cháng de jiāoqī.",
        "japanese": "会社が支払い条件を調整してくれさえすれば、私たちは顧客とより長い納期を交渉できる。",
        "chunks": [
          "只要公司願意調整付款條件",
          "我們就可以跟客戶談判更長的交期"
        ],
        "hintText": "只要公司願意調整付款條件，我們就可以跟客戶"
      }
    ]
  },
  {
    "id": "B-120",
    "band": "B",
    "targetWord": "防範",
    "distractors": [
      "解決",
      "準備",
      "發現"
    ],
    "grammarNote": "「防範」=「未然に防ぐ」。リスクに対して事前に対策する時に使います。",
    "bossReading": {
      "text": "公司導入新系統後，流程被徹底顛覆，因此IT先優化權限設定並加強防範；雖然麻煩，但能避免資料外洩[ ? ]更大損失。",
      "targetWord": "優化",
      "distractors": [
        "惡化",
        "變化",
        "消化"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "ここは“より良く最適化する”意味が必要なので「優化」が正解です。「顛覆」は既存の仕組みをひっくり返すほどの変化で、新システム導入の文脈に合います。「防範」は未然に防ぐことで、「加強防範」＝セキュリティ対策を強化する、という台湾でも自然な言い方です。"
    },
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為最近詐騙很多，所以我們要防範個資被盜用，不要亂點連結。",
        "pinyin": "yīn wèi zuì jìn zhà piàn hěn duō, suǒ yǐ wǒ men yào fáng fàn gè zī bèi dào yòng, bù yào luàn diǎn lián jiē.",
        "japanese": "最近詐騙が多いので、個人情報が盗用されないように防がなければなりません。むやみにリンクをクリックしないでください。",
        "chunks": [
          "因為最近詐騙很多",
          "所以我們要防範個資被盜用",
          "不要亂點連結"
        ],
        "hintText": "因為最近詐騙很多，所以我們要"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要在網購時選擇超商取貨，就能防範包裹被偷的風險。",
        "pinyin": "zhǐ yào zài wǎng gòu shí xuǎn zé chāo shāng qǔ huò, jiù néng fáng fàn bāo guǒ bèi tōu de fēng xiǎn.",
        "japanese": "ネット通販でコンビニ受け取りを選べば、荷物が盗まれるリスクを防げます。",
        "chunks": [
          "只要在網購時選擇超商取貨",
          "就能防範包裹被偷的風險"
        ],
        "hintText": "只要在網購時選擇超商取貨，就能"
      },
      {
        "situation": "人間関係・家族",
        "chinese": "雖然長輩很關心我們，但是也要防範他們被詐騙集團騙錢。",
        "pinyin": "suī rán zhǎng bèi hěn guān xīn wǒ men, dàn shì yě yào fáng fàn tā men bèi zhà piàn jí tuán piàn qián.",
        "japanese": "年長者は私たちをとても気遣ってくれますが、彼らが詐欺グループにお金を騙し取られないように防がなければなりません。",
        "chunks": [
          "雖然長輩很關心我們",
          "但是也要防範他們被詐騙集團騙錢"
        ],
        "hintText": "雖然長輩很關心我們，但是也要"
      }
    ]
  },
  {
    "id": "B-121",
    "band": "B",
    "targetWord": "顛覆",
    "distractors": [
      "維護",
      "保護",
      "解決"
    ],
    "grammarNote": "「顛覆」=「ひっくり返すほど変える」。常識や市場のやり方が大きく変わる時に使います。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我媽很保守，但她的育兒觀念卻徹底被我的小孩顛覆了。",
        "pinyin": "suī rán wǒ mā hěn bǎo shǒu，dàn tā de yù ér guān niàn què chè dǐ bèi wǒ de xiǎo hái diān fù le。",
        "japanese": "母はとても保守的ですが、彼女の子育て観は私の子供によって完全に覆されました。",
        "chunks": [
          "雖然我媽很保守",
          "但她的育兒觀念",
          "卻徹底被我的小孩顛覆了"
        ],
        "hintText": "雖然我媽很保守，但她的育兒觀念卻徹底"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家超商推出行動支付，所以徹底顛覆了傳統零售的結帳方式。",
        "pinyin": "yīn wèi zhè jiā chāo shāng tuī chū xíng dòng zhī fù，suǒ yǐ chè dǐ diān fù le chuán tǒng líng shòu de jié zhàng fāng shì。",
        "japanese": "このコンビニがモバイル決済を導入したので、従来の小売りの会計方法を完全に覆しました。",
        "chunks": [
          "因為這家超商推出行動支付",
          "所以徹底顛覆了",
          "傳統零售的結帳方式"
        ],
        "hintText": "因為這家超商推出行動支付，所以徹底"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要搭過一次高鐵，你就會發現它徹底顛覆了對台灣長途交通的印象。",
        "pinyin": "zhǐ yào dā guò yī cì gāo tiě，nǐ jiù huì fā xiàn tā chè dǐ diān fù le duì tái wān cháng tú jiāo tōng de yìn xiàng。",
        "japanese": "一度でも高速鉄道に乗れば、台湾の長距離交通に対する印象を完全に覆すことに気づくでしょう。",
        "chunks": [
          "只要搭過一次高鐵",
          "你就會發現它",
          "徹底顛覆了對台灣長途交通的印象"
        ],
        "hintText": "只要搭過一次高鐵，你就會發現它徹底"
      }
    ]
  },
  {
    "id": "B-122",
    "band": "B",
    "targetWord": "優化",
    "distractors": [
      "變化",
      "惡化",
      "消化"
    ],
    "grammarNote": "「優化」=「より良くする/最適化する」。流程や系統を改善する時のビジネス語です。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為客人反應結帳太慢，所以我們優化了收銀流程。",
        "pinyin": "yīn wèi kè rén fǎn yìng jié zhàng tài màn, suǒ yǐ wǒ men yōu huà le shōu yín liú chéng.",
        "japanese": "お客様から会計が遅いと反応があったので、私たちはレジの流れを最適化しました。",
        "chunks": [
          "因為客人反應結帳太慢",
          "所以我們優化了收銀流程"
        ],
        "hintText": "因為客人反應結帳太慢，所以我們"
      },
      {
        "situation": "交通・移動",
        "category": "交通・移動",
        "chinese": "雖然捷運班次很密集，但是我們還是優化了轉乘路線。",
        "pinyin": "suī rán jié yùn bān cì hěn mì jí, dàn shì wǒ men hái shì yōu huà le zhuǎn chéng lù xiàn.",
        "japanese": "地下鉄の本数はとても多いけれど、それでも私たちは乗り換えルートを最適化しました。",
        "chunks": [
          "雖然捷運班次很密集",
          "但是我們還是優化了轉乘路線"
        ],
        "hintText": "雖然捷運班次很密集，但是我們還是"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要導入新系統，就能優化公文傳遞的效率。",
        "pinyin": "zhǐ yào dǎo rù xīn xì tǒng, jiù néng yōu huà gōng wén chuán dì de xiào lǜ.",
        "japanese": "新しいシステムを導入さえすれば、公文書の伝達効率を最適化できます。",
        "chunks": [
          "只要導入新系統",
          "就能優化公文傳遞的效率"
        ],
        "hintText": "只要導入新系統，就能"
      }
    ]
  },
  {
    "id": "B-123",
    "band": "B",
    "targetWord": "回報",
    "distractors": [
      "報告",
      "回憶",
      "回答"
    ],
    "grammarNote": "「回報」は投資や努力に対する“リターン”。「回報很明顯」のように言えます。",
    "bossReading": {
      "text": "雖然市場波動大，但只要資訊透明並和客戶保持良好溝通，因此投資人更願意長期投入，回報也會更[ ? ]，甚至願意介紹朋友。",
      "targetWord": "豐厚",
      "distractors": [
        "微薄",
        "普通",
        "有限"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「回報也會更[ ? ]」は“リターンが厚い/大きい”意味が必要で、「豐厚」が最も自然です。「資訊」は台湾で一般的に“情報”を指し、「資訊透明」＝情報開示が透明という文脈になります。「溝通」は意思疎通で、投資家・顧客との信頼関係を作る要素としてよく使われます。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我花很多時間陪家人，但只要看到他們開心，回報就很明顯。",
        "pinyin": "suī rán wǒ huā hěn duō shí jiān péi jiā rén，dàn zhǐ yào kàn dào tā men kāi xīn，huí bào jiù hěn míng xiǎn。",
        "japanese": "家族と過ごす時間は長いけれど、彼らが楽しそうにしているのを見ると、その見返りは明らかだ。",
        "chunks": [
          "雖然我花很多時間陪家人",
          "但只要看到他們開心",
          "回報就很明顯"
        ],
        "hintText": "雖然我花很多時間陪家人，但只要看到他們開心，"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的服務態度很好，所以回報很明顯，客人回流率很高。",
        "pinyin": "yīn wèi zhè jiā diàn de fú wù tài dù hěn hǎo，suǒ yǐ huí bào hěn míng xiǎn，kè rén huí liú lǜ hěn gāo。",
        "japanese": "この店の接客態度がとても良いので、そのリターンは明らかで、客のリピート率が高い。",
        "chunks": [
          "因為這家店的服務態度很好",
          "所以回報很明顯",
          "客人回流率很高"
        ],
        "hintText": "因為這家店的服務態度很好，所以"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要用心準備簡報，提案通過後的回報就會很明顯。",
        "pinyin": "zhǐ yào yòng xīn zhǔn bèi jiǎn bào，tí àn tōng guò hòu de huí bào jiù huì hěn míng xiǎn。",
        "japanese": "プレゼンをしっかり準備すれば、提案が通った後のリターンは明らかだ。",
        "chunks": [
          "只要用心準備簡報",
          "提案通過後的回報就會很明顯"
        ],
        "hintText": "只要用心準備簡報，"
      }
    ]
  },
  {
    "id": "B-124",
    "band": "B",
    "targetWord": "資訊",
    "distractors": [
      "資料",
      "消息",
      "新聞"
    ],
    "grammarNote": "「資訊」は台湾で一般的な“情報”。社内連絡や市場情報など幅広く使えます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為我哥對電腦資訊很熟，所以我們都找他幫忙修電腦。",
        "pinyin": "yīn wèi wǒ gē duì diàn nǎo zī xùn hěn shú, suǒ yǐ wǒ men dōu zhǎo tā bāng máng xiū diàn nǎo.",
        "japanese": "兄がコンピューター情報に詳しいので、私たちは皆、彼にコンピューターの修理を頼んでいます。",
        "chunks": [
          "因為我哥對電腦",
          "資訊很熟",
          "所以我們都找他幫忙修電腦。"
        ],
        "hintText": "因為我哥對電腦"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要提供正確的資訊，店員就會幫你查詢商品庫存。",
        "pinyin": "zhǐ yào tí gōng zhèng què de zī xùn, diàn yuán jiù huì bāng nǐ chá xún shāng pǐn kù cún.",
        "japanese": "正しい情報を提供すれば、店員が商品の在庫を調べてくれます。",
        "chunks": [
          "只要提供正確的",
          "資訊",
          "店員就會幫你查詢商品庫存。"
        ],
        "hintText": "只要提供正確的"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然資訊已經更新，但是系統還是顯示舊資料。",
        "pinyin": "suī rán zī xùn yǐ jīng gēng xīn, dàn shì xì tǒng hái shì xiǎn shì jiù zī liào.",
        "japanese": "情報はすでに更新されましたが、システムにはまだ古いデータが表示されています。",
        "chunks": [
          "雖然",
          "資訊已經更新",
          "但是系統還是顯示舊資料。"
        ],
        "hintText": "雖然"
      }
    ]
  },
  {
    "id": "B-125",
    "band": "B",
    "targetWord": "溝通",
    "distractors": [
      "討論",
      "準備",
      "發現"
    ],
    "grammarNote": "「溝通」=「意思疎通する」。部署間で情報を合わせる時にもよく使います。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我跟哥哥常常吵架，但還是會好好溝通解決問題。",
        "pinyin": "suī rán wǒ gēn gē ge cháng cháng chǎo jià, dàn hái shì huì hǎo hǎo gōu tōng jiě jué wèn tí.",
        "japanese": "兄とはよく喧嘩するけど、ちゃんと話し合って問題を解決します。",
        "chunks": [
          "雖然我跟哥哥常常吵架",
          "但還是會好好溝通",
          "解決問題"
        ],
        "hintText": "雖然我跟哥哥常常吵架，但還是會"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為店員沒跟我溝通清楚，所以我買錯發票上的品項。",
        "pinyin": "yīn wèi diàn yuán méi gēn wǒ gōu tōng qīng chǔ, suǒ yǐ wǒ mǎi cuò fā piào shàng de pǐn xiàng.",
        "japanese": "店員がちゃんと説明してくれなかったので、レシートの品目を間違えて買ってしまいました。",
        "chunks": [
          "因為店員沒跟我溝通清楚",
          "所以我買錯",
          "發票上的品項"
        ],
        "hintText": "因為店員沒跟我溝通清楚，所以"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要各部門先溝通好，就能避免重複申請經費。",
        "pinyin": "zhǐ yào gè bù mén xiān gōu tōng hǎo, jiù néng bì miǎn chóng fù shēn qǐng jīng fèi.",
        "japanese": "各部署が事前に連携すれば、予算の重複申請を避けられます。",
        "chunks": [
          "只要各部門先溝通好",
          "就能避免",
          "重複申請經費"
        ],
        "hintText": "只要各部門先溝通好，就能"
      }
    ]
  },
  {
    "id": "B-126",
    "band": "B",
    "targetWord": "評估",
    "distractors": [
      "決定",
      "實施",
      "完成"
    ],
    "grammarNote": "「評估」=「評価する/見極める」。計畫や成本效益などを判断する時に使います。",
    "bossReading": {
      "text": "工廠想導入新設備，先用數據做成本效益評估，因此發現若能提升產線效率就值得；雖然前期投資大，但要先把[ ? ]指標訂清楚。",
      "targetWord": "數據",
      "distractors": [
        "數字",
        "數量",
        "數學"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「[ ? ]指標」には“分析に使うデータ”が入るため「數據」が正解です。「評估」は導入可否を見極める評価で、「成本效益評估」の形でよく使われます。「提升」はレベルや効率を上げることで、「提升產線效率」＝生産ライン効率を向上させる、という自然な用法です。"
    },
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為這個專案影響很大，所以我們需要仔細評估風險再決定。",
        "pinyin": "yīn wèi zhè ge zhuān àn yǐng xiǎng hěn dà，suǒ yǐ wǒ men xū yào zǐ xì píng gū fēng xiǎn zài jué dìng。",
        "japanese": "このプロジェクトは影響が大きいので、リスクを慎重に評価してから決定する必要があります。",
        "chunks": [
          "因為這個專案影響很大",
          "所以我們需要仔細評估風險",
          "再決定"
        ],
        "hintText": "因為這個專案影響很大，所以我們需要仔細"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然房東說會處理漏水，但我還是找水電師傅來評估比較放心。",
        "pinyin": "suī rán fáng dōng shuō huì chǔ lǐ lòu shuǐ，dàn wǒ hái shì zhǎo shuǐ diàn shī fù lái píng gū bǐ jiào fàng xīn。",
        "japanese": "大家さんは漏水を直すと言ったけど、やっぱり水道屋さんに評価してもらったほうが安心です。",
        "chunks": [
          "雖然房東說會處理漏水",
          "但我還是找水電師傅來評估",
          "比較放心"
        ],
        "hintText": "雖然房東說會處理漏水，但我還是找水電師傅來"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要先預約，就能免費評估手機維修費用，不用擔心被亂報價。",
        "pinyin": "zhǐ yào xiān yù yuē，jiù néng miǎn fèi píng gū shǒu jī wéi xiū fèi yòng，bù yòng dān xīn bèi luàn bào jià。",
        "japanese": "事前に予約すれば、スマホ修理費を無料で見積もってもらえるので、ぼったくられる心配がありません。",
        "chunks": [
          "只要先預約",
          "就能免費評估手機維修費用",
          "不用擔心被亂報價"
        ],
        "hintText": "只要先預約，就能免費"
      }
    ]
  },
  {
    "id": "B-127",
    "band": "B",
    "targetWord": "數據",
    "distractors": [
      "數字",
      "數量",
      "數學"
    ],
    "grammarNote": "「數據（shù jù）」は統計や分析のための「データ」を指します。台湾のビジネス現場では「大數據（ビッグデータ）」などの形でも頻出します。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為我們分析了顧客的消費數據，所以才能推出更符合需求的優惠活動。",
        "pinyin": "yīn wèi wǒ men fēn xī le gù kè de xiāo fèi shù jù, suǒ yǐ cái néng tuī chū gèng fú hé xū qiú de yōu huì huó dòng。",
        "japanese": "顧客の消費データを分析したので、よりニーズに合ったキャンペーンを打ち出すことができました。",
        "chunks": [
          "因為我們分析了顧客的消費數據",
          "所以才能推出更符合需求的優惠活動"
        ],
        "hintText": "因為我們分析了顧客的消費"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要我們將這些數據輸入系統，就可以自動生成報表。",
        "pinyin": "zhǐ yào wǒ men jiāng zhè xiē shù jù shū rù xì tǒng, jiù kě yǐ zì dòng shēng chéng bào biǎo。",
        "japanese": "これらのデータをシステムに入力すれば、自動的にレポートが生成されます。",
        "chunks": [
          "只要我們將這些數據輸入系統",
          "就可以自動生成報表"
        ],
        "hintText": "只要我們將這些"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然手機遺失了，但因為有備份數據，所以資料都還在。",
        "pinyin": "suī rán shǒu jī yí shī le, dàn yīn wèi yǒu bèi fèn shù jù, suǒ yǐ zī liào dōu hái zài。",
        "japanese": "スマホは失くしたけれど、バックアップデータがあるのでデータは全て残っています。",
        "chunks": [
          "雖然手機遺失了",
          "但因為有備份數據",
          "所以資料都還在"
        ],
        "hintText": "雖然手機遺失了，但因為有備份"
      }
    ]
  },
  {
    "id": "B-128",
    "band": "B",
    "targetWord": "提升",
    "distractors": [
      "減少",
      "維持",
      "放棄"
    ],
    "grammarNote": "「提升（tí shēng）」は質やレベル、効率などを「向上させる、高める」というポジティブな変化を表す重要語彙です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為我們經常一起討論，所以彼此的溝通能力提升了不少。",
        "pinyin": "yīn wèi wǒ men jīng cháng yì qǐ tǎo lùn，suǒ yǐ bǐ cǐ de gōu tōng néng lì tí shēng le bù shǎo。",
        "japanese": "私たちはよく一緒に議論するので、お互いのコミュニケーション能力がかなり向上しました。",
        "chunks": [
          "因為我們經常一起討論",
          "所以彼此的溝通能力",
          "提升了不少"
        ],
        "hintText": "因為我們經常一起討論，所以彼此的溝通能力"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要店員態度親切，就能提升顧客的回購意願。",
        "pinyin": "zhǐ yào diàn yuán tài dù qīn qiè，jiù néng tí shēng gù kè de huí gòu yì yuàn。",
        "japanese": "店員の態度が親切であれば、顧客のリピート意欲を高めることができます。",
        "chunks": [
          "只要店員態度親切",
          "就能提升",
          "顧客的回購意願"
        ],
        "hintText": "只要店員態度親切，就能"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然捷運票價調漲，但是服務品質並沒有提升。",
        "pinyin": "suī rán jié yùn piào jià tiáo zhǎng，dàn shì fú wù pǐn zhì bìng méi yǒu tí shēng。",
        "japanese": "MRTの運賃は値上げされましたが、サービス品質は向上していません。",
        "chunks": [
          "雖然捷運票價調漲",
          "但是服務品質",
          "並沒有提升"
        ],
        "hintText": "雖然捷運票價調漲，但是服務品質並沒有"
      }
    ]
  },
  {
    "id": "B-129",
    "band": "B",
    "targetWord": "分配",
    "distractors": [
      "準備",
      "發現",
      "解決"
    ],
    "grammarNote": "「分配（fēn pèi）」は資源や任務、資金などを各所に割り当てることを指します。",
    "bossReading": {
      "text": "颱風後物資不足，里長先協調志工分工，因此救援資源才能被謹慎分配；雖然大家都著急，但流程穩定後，社區很快恢復正常。",
      "targetWord": "協調",
      "distractors": [
        "競爭",
        "指揮",
        "討論"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "ここは“複数の人・部署を調整してまとめる”意味が必要なので「協調」が正解です。「分配」は限られた資源を割り当てることで、「資源被謹慎分配」と対応します。「穩定」は状態を安定させることで、混乱が落ち着いた後の状況説明に自然に使えます。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們家的家事很多，但是只要大家平均分配，就不會太累。",
        "pinyin": "suī rán wǒ men jiā de jiā shì hěn duō，dàn shì zhǐ yào dà jiā píng jūn fēn pèi，jiù bú huì tài lèi。",
        "japanese": "うちの家事は多いけど、みんなで平均に分配すれば、そんなに疲れません。",
        "chunks": [
          "雖然我們家的家事很多，",
          "但是只要大家平均分配，",
          "就不會太累。"
        ],
        "hintText": "雖然我們家的家事很多，但是只要大家平均"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這間店的員工分紅是根據業績來分配，所以大家都很努力。",
        "pinyin": "yīn wèi zhè jiān diàn de yuán gōng fēn hóng shì gēn jù yè jì lái fēn pèi，suǒ yǐ dà jiā dōu hěn nǔ lì。",
        "japanese": "この店の従業員ボーナスは業績に基づいて分配されるので、みんな頑張っています。",
        "chunks": [
          "因為這間店的員工分紅",
          "是根據業績來分配，",
          "所以大家都很努力。"
        ],
        "hintText": "因為這間店的員工分紅是根據業績來"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然這次的車禍責任不在我，但是保險理賠的分配還是需要協商。",
        "pinyin": "suī rán zhè cì de chē huò zé rèn bú zài wǒ，dàn shì bǎo xiǎn lǐ péi de fēn pèi hái shì xū yào xié shāng。",
        "japanese": "今回の事故の責任は私にはないけど、保険金の分配はやはり協議が必要です。",
        "chunks": [
          "雖然這次的車禍責任不在我，",
          "但是保險理賠的分配",
          "還是需要協商。"
        ],
        "hintText": "雖然這次的車禍責任不在我，但是保險理賠的"
      }
    ]
  },
  {
    "id": "B-130",
    "band": "B",
    "targetWord": "協調",
    "distractors": [
      "競爭",
      "討論",
      "發現"
    ],
    "grammarNote": "「協調（xié tiáo）」は複数の要素や関係者がスムーズに動けるように「間を取り持って調整する」ことを指すビジネス必須単語です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他們個性不同，但只要願意協調，就能相處得很好。",
        "pinyin": "suī rán tā men gè xìng bù tóng, dàn zhǐ yào yuàn yì xié tiáo, jiù néng xiāng chǔ de hěn hǎo.",
        "japanese": "彼らは性格が違うけれど、調整する意思があればうまくやっていける。",
        "chunks": [
          "雖然他們個性不同，",
          "但只要願意協調，",
          "就能相處得很好。"
        ],
        "hintText": "雖然他們個性不同，但只要願意"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為客人抱怨菜色太鹹，所以主廚馬上協調廚房調整口味。",
        "pinyin": "yīn wèi kè rén bào yuàn cài sè tài xián, suǒ yǐ zhǔ chú mǎ shàng xié tiáo chú fáng tiáo zhěng kǒu wèi.",
        "japanese": "お客様が料理が塩辛いと苦情を言ったので、シェフがすぐに厨房と調整して味を調整した。",
        "chunks": [
          "因為客人抱怨菜色太鹹，",
          "所以主廚馬上協調廚房",
          "調整口味。"
        ],
        "hintText": "因為客人抱怨菜色太鹹，所以主廚馬上"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要各部門協調好進度，這個專案就能準時完成。",
        "pinyin": "zhǐ yào gè bù mén xié tiáo hǎo jìn dù, zhè ge zhuān àn jiù néng zhǔn shí wán chéng.",
        "japanese": "各部門が進捗を調整すれば、このプロジェクトは時間通りに完了できる。",
        "chunks": [
          "只要各部門協調好進度，",
          "這個專案就能準時完成。"
        ],
        "hintText": "只要各部門"
      }
    ]
  },
  {
    "id": "B-131",
    "band": "B",
    "targetWord": "穩定",
    "distractors": [
      "改變",
      "放棄",
      "減少"
    ],
    "grammarNote": "「穩定（wěn dìng）」は状態が「安定している」という形容詞、または「安定させる」という動詞としても使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們交往時間不長，但是感情已經很穩定了。",
        "pinyin": "suī rán wǒ men jiāo wǎng shí jiān bù cháng, dàn shì gǎn qíng yǐ jīng hěn wěn dìng le.",
        "japanese": "付き合って間もないですが、感情はもう安定しています。",
        "chunks": [
          "雖然我們交往時間不長，但是",
          "感情已經很穩定了。"
        ],
        "hintText": "雖然我們交往時間不長，但是感情已經很"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的生意很穩定，所以他們很少打折。",
        "pinyin": "yīn wèi zhè jiā diàn de shēng yì hěn wěn dìng, suǒ yǐ tā men hěn shǎo dǎ zhé.",
        "japanese": "この店の商売は安定しているので、めったに割引しません。",
        "chunks": [
          "因為這家店的生意很穩定，",
          "所以他們很少打折。"
        ],
        "hintText": "因為這家店的生意很穩定，所以"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要定期保養機車，引擎的運轉就會比較穩定。",
        "pinyin": "zhǐ yào dìng qī bǎo yǎng jī chē, yǐn qíng de yùn zhuǎn jiù huì bǐ jiào wěn dìng.",
        "japanese": "定期的にバイクをメンテナンスすれば、エンジンの回転は比較的安定します。",
        "chunks": [
          "只要定期保養機車，",
          "引擎的運轉就會比較穩定。"
        ],
        "hintText": "只要定期保養機車，引擎的運轉就會比較"
      }
    ]
  },
  {
    "id": "B-132",
    "band": "B",
    "targetWord": "顯現",
    "distractors": [
      "隠藏",
      "解決",
      "準備"
    ],
    "grammarNote": "「顯現（xiǎn xiàn）」は性質、状態、または成果などが「はっきりと表に出る、顕在化する」ことを指します。",
    "bossReading": {
      "text": "新版SOP把作業程序寫得更清楚，設計時也兼顧美觀與實用，因此問題一出現就能迅速顯現原因；若流程不完整，風險就會在後續[ ? ]。",
      "targetWord": "程序",
      "distractors": [
        "程度",
        "情況",
        "環境"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "空欄は“手順・プロセス”を表す名詞が必要なので「程序」が正解です。「兼顧」は二つの要素を同時に考慮することで、設計で“美観と実用性を両立”の文脈に合います。「顯現」は原因や特徴がはっきり表に出ることで、問題の原因が“顯現”する、という使い方が自然です。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然她平時不愛說話，但只要遇到喜歡的話題，她的熱情就會顯現出來。",
        "pinyin": "suī rán tā píng shí bú ài shuō huà, dàn zhǐ yào yù dào xǐ huān de huà tí, tā de rè qíng jiù huì xiǎn xiàn chū lái.",
        "japanese": "彼女は普段は無口ですが、好きな話題になると熱意が現れます。",
        "chunks": [
          "雖然她平時不愛說話",
          "但只要遇到喜歡的話題",
          "她的熱情就會顯現出來"
        ],
        "hintText": "雖然她平時不愛說話，但只要遇到喜歡的話題，她的熱情就會"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的服務態度很好，所以顧客的滿意度很快就顯現出來了。",
        "pinyin": "yīn wèi zhè jiā diàn de fú wù tài dù hěn hǎo, suǒ yǐ gù kè de mǎn yì dù hěn kuài jiù xiǎn xiàn chū lái le.",
        "japanese": "この店のサービス態度が良いので、顧客満足度がすぐに現れました。",
        "chunks": [
          "因為這家店的服務態度很好",
          "所以顧客的滿意度",
          "很快就顯現出來了"
        ],
        "hintText": "因為這家店的服務態度很好，所以顧客的滿意度很快就"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要機車的引擎有問題，騎起來的異音就會顯現出來。",
        "pinyin": "zhǐ yào jī chē de yǐn qíng yǒu wèn tí, qí qǐ lái de yì yīn jiù huì xiǎn xiàn chū lái.",
        "japanese": "バイクのエンジンに問題があれば、走行中に異音が現れます。",
        "chunks": [
          "只要機車的引擎有問題",
          "騎起來的異音",
          "就會顯現出來"
        ],
        "hintText": "只要機車的引擎有問題，騎起來的異音就會"
      }
    ]
  },
  {
    "id": "B-133",
    "band": "B",
    "targetWord": "兼顧",
    "distractors": [
      "放棄",
      "解決",
      "發現"
    ],
    "grammarNote": "「兼顧（jiān gù）」は二つの要素（仕事と家庭、美しさと実用性など）を同時に考慮し、「両立させる」ことを指します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然工作很忙，但我還是努力兼顧家庭，週末一定陪小孩去公園玩。",
        "pinyin": "suī rán gōng zuò hěn máng, dàn wǒ hái shì nǔ lì jiān gù jiā tíng, zhōu mò yī dìng péi xiǎo hái qù gōng yuán wán.",
        "japanese": "仕事は忙しいけど、それでも家庭を両立させるよう努力して、週末は必ず子どもを連れて公園に遊びに行く。",
        "chunks": [
          "雖然工作很忙",
          "但我還是努力兼顧家庭",
          "週末一定陪小孩去公園玩"
        ],
        "hintText": "雖然工作很忙，但我還是努力"
      },
      {
        "situation": "店舗・サービス",
        "pinyin": "zhè jiā cān tīng de cài sè jì měi wèi yòu piào liàng, zhēn de hěn néng jiān gù měi shí yǔ yì shù.",
        "japanese": "このレストランの料理は美味しくて見た目も美しく、本当に美食と芸術を両立できている。",
        "chunks": [
          "這家餐廳的菜色",
          "既美味又漂亮",
          "真的很能兼顧美食與藝術"
        ],
        "hintText": "這家餐廳的菜色既美味又漂亮，真的很能",
        "chinese": "這家餐廳的菜色既美味又漂亮，真的很能兼顧美食與藝術。"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為專案時程很趕，所以我們必須兼顧品質與效率，才能按時完成。",
        "pinyin": "yīn wèi zhuān àn shí chéng hěn gǎn, suǒ yǐ wǒ men bì xū jiān gù pǐn zhí yǔ xiào lǜ, cái néng àn shí wán chéng.",
        "japanese": "プロジェクトのスケジュールが非常にタイトなので、品質と効率を両立させなければ期限内に完了できません。",
        "chunks": [
          "因為專案時程很趕",
          "所以我們必須兼顧品質與效率",
          "才能按時完成"
        ],
        "hintText": "因為專案時程很趕，所以我們必須"
      }
    ]
  },
  {
    "id": "B-134",
    "band": "B",
    "targetWord": "程序",
    "distractors": [
      "程度",
      "情況",
      "環境"
    ],
    "grammarNote": "「程序（chéng xù）」は物事の順序や手順（プロセス）を指します。IT用語の「プログラム」という意味もあります。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為申請補助的程序很複雜，所以需要先準備好所有文件。",
        "pinyin": "yīn wèi shēn qǐng bǔ zhù de chéng xù hěn fù zá, suǒ yǐ xū yào xiān zhǔn bèi hǎo suǒ yǒu wén jiàn.",
        "japanese": "補助金申請の手続きが複雑なので、まずすべての書類を準備する必要があります。",
        "chunks": [
          "因為",
          "申請補助的程序很複雜",
          "所以",
          "需要先準備好所有文件"
        ],
        "hintText": "因為申請補助"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然退貨的程序很麻煩，但是只要帶著發票和商品就可以處理。",
        "pinyin": "suī rán tuì huò de chéng xù hěn má fan, dàn shì zhǐ yào dài zhe fā piào hé shāng pǐn jiù kě yǐ chǔ lǐ.",
        "japanese": "返品の手続きは面倒ですが、領収書と商品を持っていけば対応してもらえます。",
        "chunks": [
          "雖然",
          "退貨的程序很麻煩",
          "但是",
          "只要帶著發票和商品就可以處理"
        ],
        "hintText": "雖然退貨"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為捷運的購票程序很簡單，所以只要用悠遊卡就能快速進站。",
        "pinyin": "yīn wèi jié yùn de gòu piào chéng xù hěn jiǎn dān, suǒ yǐ zhǐ yào yòng yōu yóu kǎ jiù néng kuài sù jìn zhàn.",
        "japanese": "MRTの切符購入手順はとても簡単なので、悠遊カードを使えばすぐに入場できます。",
        "chunks": [
          "因為",
          "捷運的購票程序很簡單",
          "所以",
          "只要用悠遊卡就能快速進站"
        ],
        "hintText": "因為捷運"
      }
    ]
  },
  {
    "id": "B-135",
    "band": "B",
    "targetWord": "通訊",
    "distractors": [
      "消息",
      "新聞",
      "資訊"
    ],
    "grammarNote": "「通訊（tōng xùn）」は情報伝達や通信を指します。チャットアプリのことは台湾華語で「通訊軟體」と呼びます。",
    "bossReading": {
      "text": "新通訊平台上線後，公司審慎設定權限並公告規範，因此面試通知也能即時送達；只要通過嚴格流程被順利[ ? ]，新人就能立刻加入專案。",
      "targetWord": "錄取",
      "distractors": [
        "拒絕",
        "淘汰",
        "保留"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "ここは“採用される/合格して入る”意味が必要なので「錄取」が正解です。「審慎」は非常に慎重で、権限設定や規範作りを丁寧に行うニュアンスを出せます。「通訊」は通信・連絡手段で、通知が“即時送達”する文脈と相性が良いです。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為我媽不太會用通訊軟體，所以我每次都要打電話跟她聊天。",
        "pinyin": "yīn wèi wǒ mā bù tài huì yòng tōng xùn ruǎn tǐ, suǒ yǐ wǒ měi cì dōu yào dǎ diàn huà gēn tā liáo tiān.",
        "japanese": "母はコミュニケーションアプリをあまり使えないので、私はいつも電話で話します。",
        "chunks": [
          "因為我媽不太會用",
          "通訊軟體",
          "所以我每次都要打電話跟她聊天"
        ],
        "hintText": "因為我媽不太會用"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然我已經更新了通訊軟體，但是訊息還是傳不出去。",
        "pinyin": "suī rán wǒ yǐ jīng gēng xīn le tōng xùn ruǎn tǐ, dàn shì xùn xī hái shì chuán bù chū qù.",
        "japanese": "コミュニケーションアプリをアップデートしたのに、メッセージが送れません。",
        "chunks": [
          "雖然我已經更新了",
          "通訊軟體",
          "但是訊息還是傳不出去"
        ],
        "hintText": "雖然我已經更新了"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要公司統一通訊軟體，大家就不會漏掉重要訊息。",
        "pinyin": "zhǐ yào gōng sī tǒng yī tōng xùn ruǎn tǐ, dà jiā jiù bù huì lòu diào zhòng yào xùn xī.",
        "japanese": "会社がコミュニケーションアプリを統一すれば、みんな重要なメッセージを見逃さなくなります。",
        "chunks": [
          "只要公司統一",
          "通訊軟體",
          "大家就不會漏掉重要訊息"
        ],
        "hintText": "只要公司統一"
      }
    ]
  },
  {
    "id": "B-136",
    "band": "B",
    "targetWord": "錄取",
    "distractors": [
      "拒絕",
      "放棄",
      "準備"
    ],
    "grammarNote": "「錄取（lù qǔ）」は試験や選考に合格し「採用される、受かる」ことを指します。「錄取通知（採用通知）」の形でよく使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他這次沒被錄取，但因為有面試經驗，所以下次會更有把握。",
        "pinyin": "suī rán tā zhè cì méi bèi lù qǔ, dàn yīn wèi yǒu miàn shì jīng yàn, suǒ yǐ xià cì huì gèng yǒu bǎ wò.",
        "japanese": "彼は今回は採用されなかったけど、面接経験があるから次はもっと自信が持てるよ。",
        "chunks": [
          "雖然他這次沒被錄取",
          "但因為有面試經驗",
          "所以下次會更有把握"
        ],
        "hintText": "雖然他這次沒被"
      },
      {
        "situation": "店舗・サービス",
        "category": "店舗・サービス",
        "chinese": "只要收到錄取通知，我就馬上去辦一張新的信用卡。",
        "pinyin": "zhǐ yào shōu dào lù qǔ tōng zhī, wǒ jiù mǎ shàng qù bàn yī zhāng xīn de xìn yòng kǎ.",
        "japanese": "採用通知を受け取ったら、すぐに新しいクレジットカードを作りに行くよ。",
        "chunks": [
          "只要收到錄取通知",
          "我就馬上去辦一張新的信用卡"
        ],
        "hintText": "只要收到"
      },
      {
        "situation": "公的手続き・職場",
        "category": "公的手続き・職場",
        "chinese": "因為他錄取了這份工作，所以需要趕快申請工作簽證。",
        "pinyin": "yīn wèi tā lù qǔ le zhè fèn gōng zuò, suǒ yǐ xū yào gǎn kuài shēn qǐng gōng zuò qiān zhèng.",
        "japanese": "彼はこの仕事に採用されたので、急いで就労ビザを申請する必要がある。",
        "chunks": [
          "因為他錄取了這份工作",
          "所以需要趕快申請工作簽證"
        ],
        "hintText": "因為他"
      }
    ]
  },
  {
    "id": "B-137",
    "band": "B",
    "targetWord": "審慎",
    "distractors": [
      "隨便",
      "簡單",
      "普通"
    ],
    "grammarNote": "「審慎（shěn shèn）」は極めて慎重であることを指す硬い言葉（書面語）で、ビジネスの意思決定や評価の場面でよく使われます。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然主管已經批准了這個方案，但我覺得還是要審慎評估一下潛在風險。",
        "pinyin": "suī rán zhǔ guǎn yǐ jīng pī zhǔn le zhè ge fāng àn ，dàn wǒ jué de hái shì yào shěn shèn píng gū yī xià qián zài fēng xiǎn 。",
        "japanese": "上司がこの計画を承認したけれど、私はやはり潜在的なリスクを慎重に評価すべきだと思う。",
        "chunks": [
          "雖然主管已經批准了這個方案，",
          "但我覺得還是要",
          "審慎評估一下潛在風險。"
        ],
        "hintText": "雖然主管已經批准了這個方案，但我覺得還是要"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的評價很好，所以我們決定先審慎觀察再預約。",
        "pinyin": "yīn wèi zhè jiā cān tīng de píng jià hěn hǎo ，suǒ yǐ wǒ men jué dìng xiān shěn shèn guān chá zài yù yuē 。",
        "japanese": "このレストランの評価が良いので、まずは慎重に様子を見てから予約することにした。",
        "chunks": [
          "因為這家餐廳的評價很好，",
          "所以我們決定先",
          "審慎觀察再預約。"
        ],
        "hintText": "因為這家餐廳的評價很好，所以我們決定先"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要發現健保卡遺失，就必須馬上審慎處理並申請補發。",
        "pinyin": "zhǐ yào fā xiàn jiàn bǎo kǎ yí shī ，jiù bì xū mǎ shàng shěn shèn chǔ lǐ bìng shēn qǐng bǔ fā 。",
        "japanese": "健康保険証を紛失したら、すぐに慎重に対処して再発行を申請しなければならない。",
        "chunks": [
          "只要發現健保卡遺失，",
          "就必須馬上",
          "審慎處理並申請補發。"
        ],
        "hintText": "只要發現健保卡遺失，就必須馬上"
      }
    ]
  },
  {
    "id": "B-138",
    "band": "B",
    "targetWord": "衝突",
    "distractors": [
      "重疊",
      "延誤",
      "變更"
    ],
    "grammarNote": "「衝突（chōng tú）」は物理的なぶつかり合いや意見の対立だけでなく、スケジュールが「被る、バッティングする」という意味でも使われます。",
    "bossReading": {
      "text": "團隊討論時若觀點衝突，主管要用敏銳的洞察抓到癥結，因此能在情緒升高前先安撫；否則大家一急就容易喪失[ ? ]，合作也會卡住。",
      "targetWord": "信心",
      "distractors": [
        "耐心",
        "理性",
        "禮貌"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "文脈は“自信を失う”の定番コロケーションなので「信心」が最適です（原文でも「喪失信心」）。「敏銳」は感覚・判断が鋭いことで、衝突の原因を素早く見抜くニュアンスを作れます。「衝突」は意見対立を指し、チーム議論の場面に自然です。"
    },
    "examples": [
      {
        "situation": "交通・移動",
        "chinese": "因為捷運站出口的人潮太多，所以我們不小心跟別人發生了碰撞衝突。",
        "pinyin": "yīn wèi jié yùn zhàn chū kǒu de rén cháo tài duō, suǒ yǐ wǒ men bù xiǎo xīn gēn bié rén fā shēng le pèng zhuàng chōng tú.",
        "japanese": "地下鉄の駅の出口の人混みが多すぎて、うっかり他人とぶつかる衝突が起きてしまいました。",
        "chunks": [
          "因為捷運站出口的人潮太多",
          "所以我們不小心",
          "跟別人發生了碰撞衝突"
        ],
        "hintText": "因為捷運站出口的人潮太多，所以我們不小心"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然我已經預約了時間，但是跟健保卡換發的日期衝突，只好重新排隊。",
        "pinyin": "suī rán wǒ yǐ jīng yù yuē le shí jiān, dàn shì gēn jiàn bǎo kǎ huàn fā de rì qī chōng tú, zhǐ hǎo chóng xīn pái duì.",
        "japanese": "もう予約したけど、健康保険証の再発行の日とバッティングしてしまい、仕方なく並び直しました。",
        "chunks": [
          "雖然我已經預約了時間",
          "但是跟健保卡換發的日期衝突",
          "只好重新排隊"
        ],
        "hintText": "雖然我已經預約了時間，但是跟健保卡換發的日期衝突"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要發票號碼跟中獎號碼衝突，就不能兌換獎金，所以你要仔細核對。",
        "pinyin": "zhǐ yào fā piào hào mǎ gēn zhòng jiǎng hào mǎ chōng tú, jiù bù néng duì huàn jiǎng jīn, suǒ yǐ nǐ yào zǐ xì hé duì.",
        "japanese": "領収書の番号が当選番号とバッティングすると、賞金と交換できないので、しっかり確認してください。",
        "chunks": [
          "只要發票號碼跟中獎號碼衝突",
          "就不能兌換獎金",
          "所以你要仔細核對"
        ],
        "hintText": "只要發票號碼跟中獎號碼衝突"
      }
    ]
  },
  {
    "id": "B-139",
    "band": "B",
    "targetWord": "敏銳",
    "distractors": [
      "模糊",
      "緩慢",
      "簡單"
    ],
    "grammarNote": "「敏銳（mǐn ruì）」は感覚や思考、観察力などが鋭いことを表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我弟弟年紀還小，但是他對別人的情緒非常敏銳。",
        "pinyin": "suī rán wǒ dì di nián jì hái xiǎo，dàn shì tā duì bié rén de qíng xù fēi cháng mǐn ruì。",
        "japanese": "弟はまだ小さいですが、他人の感情にとても敏感です。",
        "chunks": [
          "雖然我弟弟年紀還小，",
          "但是他對別人的情緒",
          "非常敏銳。"
        ],
        "hintText": "雖然我弟弟年紀還小，但是他對別人的情緒"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為店員的觀察很敏銳，所以他一看到我的表情就知道我要換發票。",
        "pinyin": "yīn wèi diàn yuán de guān chá hěn mǐn ruì，suǒ yǐ tā yī kàn dào wǒ de biǎo qíng jiù zhī dào wǒ yào huàn fā piào。",
        "japanese": "店員の観察力が鋭いので、私の表情を見ただけで領収書を交換したいとわかりました。",
        "chunks": [
          "因為店員的觀察很敏銳，",
          "所以他一看到我的表情",
          "就知道我要換發票。"
        ],
        "hintText": "因為店員的觀察很敏銳，所以他一看到我的表情"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要房東的警覺性夠敏銳，就不會讓機車停在消防通道上。",
        "pinyin": "zhǐ yào fáng dōng de jǐng jué xìng gòu mǐn ruì，jiù bù huì ràng jī chē tíng zài xiāo fáng tōng dào shàng。",
        "japanese": "大家さんの警戒心が十分に鋭ければ、バイクを消防通路に停めさせないでしょう。",
        "chunks": [
          "只要房東的警覺性夠敏銳，",
          "就不會讓機車",
          "停在消防通道上。"
        ],
        "hintText": "只要房東的警覺性夠敏銳，就不會讓機車"
      }
    ]
  },
  {
    "id": "B-140",
    "band": "B",
    "targetWord": "喪失",
    "distractors": [
      "獲得",
      "準備",
      "解決"
    ],
    "grammarNote": "「喪失（sàng shī）」は資格、自信、能力など、抽象的で重要なものを失う際に使われる硬い言葉（書面語）です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他因為車禍喪失了記憶，但是家人依然不離不棄地照顧他。",
        "pinyin": "suī rán tā yīn wèi chē huò sàng shī le jì yì, dàn shì jiā rén yī rán bù lí bù qì de zhào gù tā.",
        "japanese": "彼は事故で記憶を失ったが、家族はそれでも離れずに世話をしている。",
        "chunks": [
          "雖然他因為車禍",
          "喪失了記憶",
          "但是家人依然不離不棄地照顧他"
        ],
        "hintText": "雖然他因為車禍"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為他沒有按時繳交報告，所以喪失了這次升遷的機會。",
        "pinyin": "yīn wèi tā méi yǒu àn shí jiǎo jiāo bào gào, suǒ yǐ sàng shī le zhè cì shēng qiān de jī huì.",
        "japanese": "彼は期限通りに報告書を提出しなかったため、今回の昇進の機会を失った。",
        "chunks": [
          "因為他沒有按時繳交報告",
          "所以喪失了",
          "這次升遷的機會"
        ],
        "hintText": "因為他沒有按時繳交報告，所以"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要健保卡遺失，就會喪失當天看醫生的資格，必須重新申請。",
        "pinyin": "zhǐ yào jiàn bǎo kǎ yí shī, jiù huì sàng shī dāng tiān kàn yī shēng de zī gé, bì xū chóng xīn shēn qǐng.",
        "japanese": "健康保険証を紛失すると、その日の診察を受ける資格を失い、再申請しなければならない。",
        "chunks": [
          "只要健保卡遺失",
          "就會喪失",
          "當天看醫生的資格，必須重新申請"
        ],
        "hintText": "只要健保卡遺失，就會"
      }
    ]
  },
  {
    "id": "B-141",
    "band": "B",
    "targetWord": "秩序",
    "distractors": [
      "混亂",
      "經驗",
      "態度"
    ],
    "grammarNote": "「秩序（zhì xù）」は社会や集団が整然と保たれている状態を指します。台湾の交通機関などのアナウンスでよく聞く単語です。",
    "bossReading": {
      "text": "為了維持園區秩序，管理會先公告動線並加強巡邏，因此人潮能被有效帶動而不致擁擠；同時也要確保供應鏈[ ? ]，才能在活動後迅速補貨。",
      "targetWord": "穩定",
      "distractors": [
        "混亂",
        "鬆散",
        "危險"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「供應鏈[ ? ]」は“サプライチェーンの安定”を述べるのが自然なので「穩定」が正解です。「帶動」はある動きが他を連動させることで、人の流れを“帶動”する表現が作れます。「秩序」はルールや動線で整然とさせる文脈に合い、全体が一貫します。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然家裡的秩序有時候會亂掉，但是只要大家一起整理就能維持整潔。",
        "pinyin": "suī rán jiā lǐ de zhì xù yǒu shí hòu huì luàn diào, dàn shì zhǐ yào dà jiā yì qǐ zhěng lǐ jiù néng wéi chí zhěng jié.",
        "japanese": "家の秩序は時々乱れることがあるけど、みんなで一緒に整理すれば清潔を保てる。",
        "chunks": [
          "雖然家裡的秩序有時候會亂掉",
          "但是只要大家一起整理",
          "就能維持整潔"
        ],
        "hintText": "雖然家裡的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為排隊結帳的秩序很好，所以客人很快就買到東西了。",
        "pinyin": "yīn wèi pái duì jié zhàng de zhì xù hěn hǎo, suǒ yǐ kè rén hěn kuài jiù mǎi dào dōng xī le.",
        "japanese": "会計の列の秩序がよかったので、お客さんはすぐに買い物ができました。",
        "chunks": [
          "因為排隊結帳的秩序很好",
          "所以客人很快就買到東西了"
        ],
        "hintText": "因為排隊結帳的"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要乘客遵守捷運站內的秩序，就不會發生推擠的危險。",
        "pinyin": "zhǐ yào chéng kè zūn shǒu jié yùn zhàn nèi de zhì xù, jiù bú huì fā shēng tuī jǐ de wēi xiǎn.",
        "japanese": "乗客が駅内の秩序を守れば、押し合いの危険は起こりません。",
        "chunks": [
          "只要乘客遵守捷運站內的秩序",
          "就不會發生推擠的危險"
        ],
        "hintText": "只要乘客遵守捷運站內的"
      }
    ]
  },
  {
    "id": "B-142",
    "band": "B",
    "targetWord": "帶動",
    "distractors": [
      "妨礙",
      "維持",
      "準備"
    ],
    "grammarNote": "「帶動（dài dòng）」は、ある事象がエンジンとなって他の事象を「連動して動かす、波及させる」というビジネスや経済ニュースで必須の表現です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為哥哥考上研究所，所以帶動了全家一起讀書的風氣。",
        "pinyin": "yīn wèi gē ge kǎo shàng yán jiū suǒ, suǒ yǐ dài dòng le quán jiā yì qǐ dú shū de fēng qì.",
        "japanese": "兄が大学院に合格したので、家族全員で一緒に勉強する風潮が生まれました。",
        "chunks": [
          "因為哥哥考上研究所",
          "所以帶動了",
          "全家一起讀書的風氣"
        ],
        "hintText": "因為哥哥考上研究所，所以"
      },
      {
        "situation": "店舗・サービス",
        "japanese": "那家餐廳推出新的優惠活動，帶動了附近的店家也跟著打折。",
        "chinese": "那家餐廳推出新的優惠活動，帶動了附近的店家也跟著打折。",
        "pinyin": "nà jiā cān tīng tuī chū xīn de yōu huì huó dòng, dài dòng le fù jìn de diàn jiā yě gēn zhe dǎ zhé.",
        "hintText": "那家餐廳推出新的優惠活動，",
        "chunks": [
          "那家餐廳推出新的優惠活動",
          "帶動了附近的店家",
          "也跟著打折"
        ]
      },
      {
        "situation": "交通・移動",
        "chinese": "只要捷運站周邊增設停車場，就能帶動更多通勤族使用大眾運輸。",
        "pinyin": "zhǐ yào jié yùn zhàn zhōu biān zēng shè tíng chē chǎng, jiù néng dài dòng gèng duō tōng qín zú shǐ yòng dà zhòng yùn shū.",
        "japanese": "MRT駅周辺に駐車場を増設すれば、より多くの通勤者が公共交通機関を利用するようになります。",
        "chunks": [
          "只要捷運站周邊增設停車場",
          "就能帶動更多通勤族",
          "使用大眾運輸"
        ],
        "hintText": "只要捷運站周邊增設停車場，"
      }
    ]
  },
  {
    "id": "B-143",
    "band": "B",
    "targetWord": "供應鏈",
    "distractors": [
      "需求量",
      "銷售額",
      "預算表"
    ],
    "grammarNote": "「供應鏈（gōng yìng liàn）」はサプライチェーン（供給網）のことです。台湾は世界のITサプライチェーンの中心であるため、ニュースで連日登場します。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為颱風影響，所以生鮮食品的供應鏈中斷，害我買不到菜。",
        "pinyin": "yīn wèi tái fēng yǐng xiǎng, suǒ yǐ shēng xiān shí pǐn de gōng yìng liàn zhōng duàn, hài wǒ mǎi bù dào cài.",
        "japanese": "台風の影響で生鮮食品のサプライチェーンが途絶えて、野菜が買えなかった。",
        "chunks": [
          "因為颱風影響",
          "所以生鮮食品的供應鏈中斷",
          "害我買不到菜"
        ],
        "hintText": "因為颱風影響，所以生鮮食品的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要供應鏈恢復正常，我們店就可以打折促銷了。",
        "pinyin": "zhǐ yào gōng yìng liàn huī fù zhèng cháng, wǒ men diàn jiù kě yǐ dǎ zhé cù xiāo le.",
        "japanese": "サプライチェーンが正常に戻れば、うちの店は割引セールができます。",
        "chunks": [
          "只要供應鏈恢復正常",
          "我們店就可以打折促銷了"
        ],
        "hintText": "只要"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然供應鏈出問題，但是公司還是按時出貨。",
        "pinyin": "suī rán gōng yìng liàn chū wèn tí, dàn shì gōng sī hái shì àn shí chū huò.",
        "japanese": "サプライチェーンに問題があったが、会社は時間通りに出荷した。",
        "chunks": [
          "雖然供應鏈出問題",
          "但是公司還是按時出貨"
        ],
        "hintText": "雖然"
      }
    ]
  },
  {
    "id": "B-144",
    "band": "B",
    "targetWord": "扮演",
    "distractors": [
      "發現",
      "準備",
      "解決"
    ],
    "grammarNote": "「扮演（bàn yǎn）」は元々「役を演じる」という意味ですが、ビジネスや組織においては「扮演…的角色（〜の役割を果たす、担う）」という形で頻出します。",
    "bossReading": {
      "text": "研發在新產品中扮演關鍵角色，必須先確認核心技術是否有專利風險，因此法務也會一起審查；若大家能先取得共識，[ ? ]談判才會更順利。",
      "targetWord": "商討",
      "distractors": [
        "爭吵",
        "決裂",
        "放棄"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "文脈は“正式に相談して詰める”意味が必要で、「商討」が最適です（細部を詰める交渉・協議）。「共識」は合意で、事前に共識を作る→その後に商討が進む流れが自然です。「專利」は知財リスクの確認に必須で、プロジェクトの役割分担（扮演）とも繋がります。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我弟弟年紀最小，但在家裡他總是扮演協調衝突的角色。",
        "pinyin": "suī rán wǒ dì di nián jì zuì xiǎo, dàn zài jiā lǐ tā zǒng shì bàn yǎn xié tiáo chōng tū de jué sè.",
        "japanese": "私の弟は年齢が一番下ですが、家ではいつも衝突を調整する役割を果たしています。",
        "chunks": [
          "雖然我弟弟年紀最小",
          "但在家裡",
          "他總是扮演協調衝突的角色"
        ],
        "hintText": "雖然我弟弟年紀最小，但在家裡，他總是"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的服務生態度很好，所以他們扮演了吸引顧客的重要角色。",
        "pinyin": "yīn wèi zhè jiā cān tīng de fú wù shēng tài dù hěn hǎo, suǒ yǐ tā men bàn yǎn le xī yǐn gù kè de zhòng yào jué sè.",
        "japanese": "このレストランの店員の態度がとても良いので、彼らは顧客を引き付ける重要な役割を果たしています。",
        "chunks": [
          "因為這家餐廳的服務生態度很好",
          "所以他們扮演了",
          "吸引顧客的重要角色"
        ],
        "hintText": "因為這家餐廳的服務生態度很好，所以他們"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要我們部門扮演好溝通的角色，就能順利完成這次的專案。",
        "pinyin": "zhǐ yào wǒ men bù mén bàn yǎn hǎo gōu tōng de jué sè, jiù néng shùn lì wán chéng zhè cì de zhuān àn.",
        "japanese": "私たちの部門がうまくコミュニケーションの役割を果たせば、今回のプロジェクトを順調に完了できます。",
        "chunks": [
          "只要我們部門扮演好",
          "溝通的角色",
          "就能順利完成這次的專案"
        ],
        "hintText": "只要我們部門"
      }
    ]
  },
  {
    "id": "B-145",
    "band": "B",
    "targetWord": "專利",
    "distractors": [
      "著作",
      "商標",
      "所有"
    ],
    "grammarNote": "「專利（zhuān lì）」は特許のことです。台湾のIT産業や半導体業界のニュースでは「專利權（特許権）」「專利申請（特許出願）」という言葉が頻出します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我哥哥的公司已經申請了這項專利，但是因為還在審查中，所以暫時不能公開。",
        "pinyin": "suī rán wǒ gē ge de gōng sī yǐ jīng shēn qǐng le zhè xiàng zhuān lì，dàn shì yīn wèi hái zài shěn chá zhōng，suǒ yǐ zàn shí bù néng gōng kāi。",
        "japanese": "私の兄の会社はこの特許を申請しましたが、まだ審査中なので、一時的に公開できません。",
        "chunks": [
          "雖然我哥哥的公司已經申請了這項專利",
          "但是因為還在審查中",
          "所以暫時不能公開"
        ],
        "hintText": "雖然我哥哥的公司已經申請了這項"
      },
      {
        "situation": "店舗・サービス",
        "category": "店舗・サービス",
        "chinese": "只要你在這家店消費滿五百元，就可以拿到一張專利設計的限量悠遊卡。",
        "pinyin": "zhǐ yào nǐ zài zhè jiā diàn xiāo fèi mǎn wǔ bǎi yuán，jiù kě yǐ ná dào yī zhāng zhuān lì shè jì de xiàn liàng yōu yóu kǎ。",
        "japanese": "このお店で500元以上買い物をすれば、特許デザインの限定悠遊卡（交通系ICカード）がもらえます。",
        "chunks": [
          "只要你在這家店消費滿五百元",
          "就可以拿到一張專利設計的限量悠遊卡"
        ],
        "hintText": "只要你在這家店消費滿五百元，就可以拿到一張"
      },
      {
        "situation": "公的手続き・職場",
        "category": "公的手続き・職場",
        "chinese": "因為我們部門的專利申請文件遺失了，所以必須趕緊去智慧財產局補辦。",
        "pinyin": "yīn wèi wǒ men bù mén de zhuān lì shēn qǐng wén jiàn yí shī le，suǒ yǐ bì xū gǎn jǐn qù zhì huì cái chǎn jú bǔ bàn。",
        "japanese": "私たちの部門の特許出願書類を紛失したので、急いで知的財産局に行って再発行しなければなりません。",
        "chunks": [
          "因為我們部門的專利申請文件遺失了",
          "所以必須趕緊去智慧財產局補辦"
        ],
        "hintText": "因為我們部門的"
      }
    ]
  },
  {
    "id": "B-146",
    "band": "B",
    "targetWord": "共識",
    "distractors": [
      "意見",
      "衝突",
      "建議"
    ],
    "grammarNote": "「共識（gòng shí）」は合意やコンセンサスを指します。「尋求共識（合意点を探る）」「達成共識（合意に達する）」という形でビジネスや政治でよく使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們對孩子的教育方式意見不同，但最後還是達成了共識。",
        "pinyin": "suī rán wǒ men duì hái zi de jiào yù fāng shì yì jiàn bù tóng, dàn zuì hòu hái shì dá chéng le gòng shí.",
        "japanese": "子供の教育方針について意見は異なっていたが、最終的には合意に達した。",
        "chunks": [
          "雖然我們對孩子的教育方式意見不同",
          "但最後還是達成了共識"
        ],
        "hintText": "雖然我們對孩子的教育方式意見不同，但最後還是"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為大家對新的打卡制度看法不一，所以需要再開會尋求共識。",
        "pinyin": "yīn wèi dà jiā duì xīn de dǎ kǎ zhì dù kàn fǎ bù yī, suǒ yǐ xū yào zài kāi huì xún qiú gòng shí.",
        "japanese": "新しいタイムカード制度について皆の意見が一致しないので、再度会議を開いて合意を求める必要がある。",
        "chunks": [
          "因為大家對新的打卡制度看法不一",
          "所以需要再開會尋求共識"
        ],
        "hintText": "因為大家對新的打卡制度看法不一，所以需要再開會"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要住戶們對管理費的調整達成共識，社區的問題就能解決。",
        "pinyin": "zhǐ yào zhù hù men duì guǎn lǐ fèi de tiáo zhěng dá chéng gòng shí, shè qū de wèn tí jiù néng jiě jué.",
        "japanese": "住民たちが管理費の調整について合意さえすれば、コミュニティの問題は解決できる。",
        "chunks": [
          "只要住戶們對管理費的調整達成共識",
          "社區的問題就能解決"
        ],
        "hintText": "只要住戶們對管理費的調整"
      }
    ]
  },
  {
    "id": "B-147",
    "band": "B",
    "targetWord": "商討",
    "distractors": [
      "決定",
      "準備",
      "發現"
    ],
    "grammarNote": "「商討（shāng tǎo）」は「討論（話し合う）」より硬く、ビジネスや行政の場で公式に協議・検討することを指します。",
    "bossReading": {
      "text": "會議先把政策實施細節商討清楚，也要求負責人具備足夠素養；因此面對外部變化時，能隨時掌握市場[ ? ]並快速調整作法，避免造成誤解。",
      "targetWord": "動態",
      "distractors": [
        "情況",
        "環境",
        "方向"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「市場[ ? ]」は“市場の動き・変化する状況”を表す定番コロケーションで、「動態」が最も自然です。「商討」は実施細節を詰める正式な協議で、政策の文脈に合います。「素養」は専門性・教養の土台を表し、担当者に求める資質として自然に入ります。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我已經跟家人商討過結婚的事，但他們還是希望我再考慮一下。",
        "pinyin": "suī rán wǒ yǐ jīng gēn jiā rén shāng tǎo guò jié hūn de shì, dàn tā men hái shì xī wàng wǒ zài kǎo lǜ yī xià.",
        "japanese": "もう家族と結婚のことを話し合ったけれど、彼らはまだもう一度考えてほしいと言っています。",
        "chunks": [
          "雖然我已經",
          "跟家人商討過",
          "結婚的事，",
          "但他們還是",
          "希望我再考慮一下。"
        ],
        "hintText": "雖然我已經跟家人"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的服務態度很差，所以老闆決定跟員工商討改進方案。",
        "pinyin": "yīn wèi zhè jiā diàn de fú wù tài dù hěn chà, suǒ yǐ lǎo bǎn jué dìng gēn yuán gōng shāng tǎo gǎi jìn fāng àn.",
        "japanese": "この店のサービス態度がとても悪いので、店主は従業員と改善策を協議することにしました。",
        "chunks": [
          "因為這家店的",
          "服務態度很差，",
          "所以老闆決定",
          "跟員工商討",
          "改進方案。"
        ],
        "hintText": "因為這家店的服務態度很差，所以老闆決定跟員工"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要我們跟政府單位商討完補助申請的流程，就可以開始提交文件了。",
        "pinyin": "zhǐ yào wǒ men gēn zhèng fǔ dān wèi shāng tǎo wán bǔ zhù shēn qǐng de liú chéng, jiù kě yǐ kāi shǐ tí jiāo wén jiàn le.",
        "japanese": "政府機関と補助金申請の手続きを協議し終えれば、書類を提出し始めることができます。",
        "chunks": [
          "只要我們",
          "跟政府單位",
          "商討完補助申請的流程，",
          "就可以開始",
          "提交文件了。"
        ],
        "hintText": "只要我們跟政府單位"
      }
    ]
  },
  {
    "id": "B-148",
    "band": "B",
    "targetWord": "素養",
    "distractors": [
      "能力",
      "經驗",
      "環境"
    ],
    "grammarNote": "「素養（sù yǎng）」は身につけた教養やスキルを指します。仕事の態度や専門性について「專業素養（プロ意識・専門的素養）」と表現します。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家餐廳價格不低，但因為服務生的專業素養很好，所以客人還是願意再來。",
        "pinyin": "suī rán zhè jiā cān tīng jià gé bù dī, dàn yīn wèi fú wù shēng de zhuān yè sù yǎng hěn hǎo, suǒ yǐ kè rén hái shì yuàn yì zài lái.",
        "japanese": "このレストランは値段が高いですが、ウェイターの専門的素養が良いので、客はまた来たいと思います。",
        "chunks": [
          "雖然這家餐廳價格不低",
          "但因為服務生的專業素養很好",
          "所以客人還是願意再來"
        ],
        "hintText": "雖然這家餐廳價格不低，但因為服務生的"
      },
      {
        "situation": "生活トラブル",
        "context": "鄰居噪音",
        "chinese": "只要管理員展現足夠的專業素養，就能妥善處理住戶之間的噪音糾紛。",
        "pinyin": "zhǐ yào guǎn lǐ yuán zhǎn xiàn zú gòu de zhuān yè sù yǎng, jiù néng tuǒ shàn chǔ lǐ zhù hù zhī jiān de zào yīn jiū fēn.",
        "japanese": "管理人が十分な専門的素養を示せば、住人間の騒音トラブルを適切に処理できます。",
        "chunks": [
          "只要管理員展現足夠的專業素養",
          "就能妥善處理住戶之間的噪音糾紛"
        ],
        "hintText": "只要管理員展現足夠的"
      },
      {
        "situation": "公的手続き・職場",
        "context": "職場",
        "chinese": "因為同事的專業素養不夠，所以我們需要再花時間重新檢查他的報告。",
        "pinyin": "yīn wèi tóng shì de zhuān yè sù yǎng bú gòu, suǒ yǐ wǒ men xū yào zài huā shí jiān chóng xīn jiǎn chá tā de bào gào.",
        "japanese": "同僚の専門的素養が足りないので、彼の報告書を再度チェックする時間が必要です。",
        "chunks": [
          "因為同事的專業素養不夠",
          "所以我們需要再花時間重新檢查他的報告"
        ],
        "hintText": "因為同事的"
      }
    ]
  },
  {
    "id": "B-149",
    "band": "B",
    "targetWord": "動態",
    "distractors": [
      "情況",
      "環境",
      "態度"
    ],
    "grammarNote": "「動態（dòng tài）」は変化する状況やトレンドを指します。SNSの「フィード/タイムライン」や「近況アップデート」という意味でも日常的に使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我最近很忙，但我還是會抽空看朋友的社群動態。",
        "pinyin": "suī rán wǒ zuì jìn hěn máng, dàn wǒ hái shì huì chōu kòng kàn péng yǒu de shè qún dòng tài.",
        "japanese": "最近忙しいですが、それでも友達のSNSの近況を見る時間を作ります。",
        "chunks": [
          "雖然我最近很忙，",
          "但我還是會抽空看",
          "朋友的社群動態。"
        ],
        "hintText": "雖然我最近很忙，但我還是會抽空看"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的動態常更新，所以客人容易掌握優惠資訊。",
        "pinyin": "yīn wèi zhè jiā cān tīng de dòng tài cháng gēng xīn, suǒ yǐ kè rén róng yì zhǎng wò yōu huì zī xùn.",
        "japanese": "このレストランは近況をよく更新するので、お客さんは割引情報を把握しやすいです。",
        "chunks": [
          "因為這家餐廳的動態常更新，",
          "所以客人容易掌握",
          "優惠資訊。"
        ],
        "hintText": "因為這家餐廳的動態常更新，所以客人容易掌握"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要按時更新社群動態，就能避免親友擔心你的近況。",
        "pinyin": "zhǐ yào àn shí gēng xīn shè qún dòng tài, jiù néng bì miǎn qīn yǒu dān xīn nǐ de jìn kuàng.",
        "japanese": "定期的にSNSの近況を更新すれば、親しい人に心配をかけずに済みます。",
        "chunks": [
          "只要按時更新社群動態，",
          "就能避免",
          "親友擔心你的近況。"
        ],
        "hintText": "只要按時更新社群動態，就能避免"
      }
    ]
  },
  {
    "id": "B-150",
    "band": "B",
    "targetWord": "歸功於",
    "distractors": [
      "導因於",
      "受限於",
      "來自於"
    ],
    "grammarNote": "「歸功於（guī gōng yú）」で「功績を〜に帰する、〜のおかげである」というフォーマルな表現です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他平時不太愛說話，但這次專案能成功，主要歸功於他的細心規劃。",
        "pinyin": "suī rán tā píng shí bù tài ài shuō huà, dàn zhè cì zhuān àn néng chéng gōng, zhǔ yào guī gōng yú tā de xì xīn guī huà.",
        "japanese": "彼は普段あまり話しませんが、今回のプロジェクトが成功したのは主に彼の細やかな計画のおかげです。",
        "chunks": [
          "雖然他平時不太愛說話",
          "但這次專案能成功",
          "主要歸功於他的細心規劃"
        ],
        "hintText": "雖然他平時不太愛說話，但這次專案能成功，主要"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為店員的親切服務，所以這家店的業績成長歸功於他們。",
        "pinyin": "yīn wèi diàn yuán de qīn qiè fú wù, suǒ yǐ zhè jiā diàn de yè jì chéng zhǎng guī gōng yú tā men.",
        "japanese": "店員の親切なサービスがあったからこそ、この店の業績成長は彼らのおかげです。",
        "chunks": [
          "因為店員的親切服務",
          "所以這家店的業績成長",
          "歸功於他們"
        ],
        "hintText": "因為店員的親切服務，所以這家店的業績成長"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要捷運準時到站，通勤時間就能縮短，這都要歸功於新的號誌系統。",
        "pinyin": "zhǐ yào jié yùn zhǔn shí dào zhàn, tōng qín shí jiān jiù néng suō duǎn, zhè dōu yào guī gōng yú xīn de hào zhì xì tǒng.",
        "japanese": "地下鉄が時間通りに到着すれば通勤時間が短縮できますが、それはすべて新しい信号システムのおかげです。",
        "chunks": [
          "只要捷運準時到站",
          "通勤時間就能縮短",
          "這都要歸功於新的號誌系統"
        ],
        "hintText": "只要捷運準時到站，通勤時間就能縮短，這都要"
      }
    ]
  },
  {
    "id": "B-151",
    "band": "B",
    "targetWord": "可行性",
    "distractors": [
      "困難度",
      "重要性",
      "危機感"
    ],
    "grammarNote": "「可行性（kě xíng xìng）」は実行できるかどうかの度合い（フィジビリティ）を指し、会議の場で「評估可行性（実現可能性を評価する）」とセットで頻出します。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為公司要評估這個新專案的可行性，所以我們需要先收集相關資料。",
        "pinyin": "yīn wèi gōng sī yào píng gū zhè ge xīn zhuān àn de kě xíng xìng, suǒ yǐ wǒ men xū yào xiān shōu jí xiāng guān zī liào.",
        "japanese": "会社がこの新プロジェクトの実現可能性を評価するので、まず関連資料を収集する必要があります。",
        "chunks": [
          "因為公司要評估",
          "這個新專案的可行性",
          "所以我們需要先收集相關資料"
        ],
        "hintText": "因為公司要評估"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然搭捷運比較方便，但是我們還是要評估它的可行性。",
        "pinyin": "suī rán dā jié yùn bǐ jiào fāng biàn, dàn shì wǒ men hái shì yào píng gū tā de kě xíng xìng.",
        "japanese": "MRTに乗る方が便利ですが、それでもその実現可能性を評価しなければなりません。",
        "chunks": [
          "雖然搭捷運比較方便",
          "但是我們還是要評估",
          "它的可行性"
        ],
        "hintText": "雖然搭捷運比較方便，但是我們還是要評估"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要找到足夠的發票，就可以評估退稅的可行性。",
        "pinyin": "zhǐ yào zhǎo dào zú gòu de fā piào, jiù kě yǐ píng gū tuì shuì de kě xíng xìng.",
        "japanese": "十分な領収書が見つかれば、税金還付の実現可能性を評価できます。",
        "chunks": [
          "只要找到足夠的發票",
          "就可以評估",
          "退稅的可行性"
        ],
        "hintText": "只要找到足夠的發票，就可以評估"
      }
    ]
  },
  {
    "id": "B-152",
    "band": "B",
    "targetWord": "創新",
    "distractors": [
      "傳統",
      "簡單",
      "嚴重"
    ],
    "grammarNote": "「創新（chuàng xīn）」は「イノベーション」や「革新的である」ことを指します。ビジネスから飲食業界まで、台湾で非常に好まれるキーワードです。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的創新菜單很受歡迎，所以即使平日也需要排隊。",
        "pinyin": "yīn wèi zhè jiā cān tīng de chuàng xīn cài dān hěn shòu huān yíng, suǒ yǐ jí shǐ píng rì yě xū yào pái duì。",
        "japanese": "このレストランの革新的なメニューがとても人気があるので、平日でも行列が必要です。",
        "chunks": [
          "因為",
          "這家餐廳的創新菜單",
          "很受歡迎",
          "所以即使平日也需要排隊"
        ],
        "hintText": "因為這家餐廳的"
      },
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我媽不太習慣用科技產品，但是她很支持我從事創新的工作。",
        "pinyin": "suī rán wǒ mā bú tài xí guàn yòng kē jì chǎn pǐn, dàn shì tā hěn zhī chí wǒ cóng shì chuàng xīn de gōng zuò。",
        "japanese": "母はテクノロジー製品にあまり慣れていませんが、私が革新的な仕事に就くことはとても支持しています。",
        "chunks": [
          "雖然我媽不太習慣用科技產品",
          "但是她很支持我",
          "從事創新的工作"
        ],
        "hintText": "雖然我媽不太習慣用科技產品，但是她很支持我"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要捷運公司導入創新的票務系統，乘客就能用手機直接刷卡進站。",
        "pinyin": "zhǐ yào jié yùn gōng sī dǎo rù chuàng xīn de piào wù xì tǒng, chéng kè jiù néng yòng shǒu jī zhí jiē shuā kǎ jìn zhàn。",
        "japanese": "地下鉄会社が革新的なチケットシステムを導入すれば、乗客はスマートフォンで直接カードをかざして改札に入れます。",
        "chunks": [
          "只要捷運公司導入創新的票務系統",
          "乘客就能用手機",
          "直接刷卡進站"
        ],
        "hintText": "只要捷運公司導入"
      }
    ]
  },
  {
    "id": "B-153",
    "band": "B",
    "targetWord": "變革",
    "distractors": [
      "維持",
      "發現",
      "準備"
    ],
    "grammarNote": "「變革（biàn gé）」は根本的な変化や改革を指す硬い言葉で、「產業變革（産業変革）」や「推動變革（変革を推進する）」の形でよく使われます。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為公司正在推動組織變革，所以我們每個人都需要重新學習新的系統。",
        "pinyin": "yīn wèi gōng sī zhèng zài tuī dòng zǔ zhī biàn gé, suǒ yǐ wǒ men měi gè rén dōu xū yào chóng xīn xué xí xīn de xì tǒng.",
        "japanese": "会社が組織変革を推進しているので、私たち一人ひとりが新しいシステムを再学習する必要があります。",
        "chunks": [
          "因為公司正在推動組織變革",
          "所以我們每個人都需要重新學習新的系統"
        ],
        "hintText": "因為公司正在推動"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然我對這次的變革感到不安，但是我相信只要努力適應就能找到新的機會。",
        "pinyin": "suī rán wǒ duì zhè cì de biàn gé gǎn dào bù ān, dàn shì wǒ xiāng xìn zhǐ yào nǔ lì shì yìng jiù néng zhǎo dào xīn de jī huì.",
        "japanese": "今回の変革に不安を感じているが、努力して適応すれば新たなチャンスが見つかると信じている。",
        "chunks": [
          "雖然我對這次的變革感到不安",
          "但是我相信只要努力適應就能找到新的機會"
        ],
        "hintText": "雖然我對這次的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要我們跟上產業變革的腳步，這家餐廳就能繼續使用電子發票系統。",
        "pinyin": "zhǐ yào wǒ men gēn shàng chǎn yè biàn gé de jiǎo bù, zhè jiā cān tīng jiù néng jì xù shǐ yòng diàn zǐ fā piào xì tǒng.",
        "japanese": "産業変革の流れに乗れば、このレストランは電子領収書システムを引き続き使えます。",
        "chunks": [
          "只要我們跟上產業變革的腳步",
          "這家餐廳就能繼續使用電子發票系統"
        ],
        "hintText": "只要我們跟上"
      }
    ]
  },
  {
    "id": "B-154",
    "band": "B",
    "targetWord": "耗費",
    "distractors": [
      "獲得",
      "解決",
      "準備"
    ],
    "grammarNote": "「耗費（hào fèi）」は時間、お金、エネルギーなどを「大量に消費する、費やす」ことを指します。",
    "examples": [
      {
        "situation": "交通・移動",
        "chinese": "因為每天通勤耗費太多時間，所以小明決定搬到公司附近。",
        "pinyin": "yīn wèi měi tiān tōng qín hào fèi tài duō shí jiān, suǒ yǐ xiǎo míng jué dìng bān dào gōng sī fù jìn.",
        "japanese": "毎日の通勤に時間を費やしすぎるので、シャオミンは会社の近くに引っ越すことにした。",
        "chunks": [
          "因為每天通勤",
          "耗費太多時間",
          "所以小明決定搬到公司附近"
        ],
        "hintText": "因為每天通勤"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然這台機車耗費了很多修理費，但是性能還是很差。",
        "pinyin": "suī rán zhè tái jī chē hào fèi le hěn duō xiū lǐ fèi, dàn shì xìng néng hái shì hěn chà.",
        "japanese": "このスクーターは修理費をたくさん費やしたが、性能はまだ悪い。",
        "chunks": [
          "雖然這台機車",
          "耗費了很多修理費",
          "但是性能還是很差"
        ],
        "hintText": "雖然這台機車"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要申請補助耗費一點時間，就可以拿到健保補助金。",
        "pinyin": "zhǐ yào shēn qǐng bǔ zhù hào fèi yì diǎn shí jiān, jiù kě yǐ ná dào jiàn bǎo bǔ zhù jīn.",
        "japanese": "補助金の申請に少し時間を費やせば、健康保険の補助金を受け取れる。",
        "chunks": [
          "只要申請補助",
          "耗費一點時間",
          "就可以拿到健保補助金"
        ],
        "hintText": "只要申請補助"
      }
    ]
  },
  {
    "id": "B-155",
    "band": "B",
    "targetWord": "致力於",
    "distractors": [
      "限制於",
      "歸功於",
      "來自於"
    ],
    "grammarNote": "「致力於（zhì lì yú）」は「〜に力を注ぐ、尽力する、献身する」という表現で、企業の理念やビジョンを語る際に必須のフレーズです。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然公司規模不大，但我們致力於提升員工福利，所以每年都會調整薪資。",
        "pinyin": "suī rán gōng sī guī mó bù dà, dàn wǒ men zhì lì yú tí shēng yuán gōng fú lì, suǒ yǐ měi nián dōu huì tiáo zhěng xīn zī.",
        "japanese": "会社の規模は大きくないが、私たちは従業員の福利厚生の向上に尽力しているので、毎年給与を調整している。",
        "chunks": [
          "雖然公司規模不大",
          "但我們致力於提升員工福利",
          "所以每年都會調整薪資"
        ],
        "hintText": "雖然公司規模不大，但我們"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為社區居民致力於維護環境整潔，所以垃圾分類落實得很好，連發票都記得回收。",
        "pinyin": "yīn wèi shè qū jū mín zhì lì yú wéi hù huán jìng zhěng jié, suǒ yǐ lè sè fēn lèi luò shí dé hěn hǎo, lián fā piào dōu jì de huí shōu.",
        "japanese": "地域住民が環境の清潔維持に尽力しているので、ゴミの分別がしっかり行われており、レシートまでちゃんとリサイクルしている。",
        "chunks": [
          "因為社區居民致力於維護環境整潔",
          "所以垃圾分類落實得很好",
          "連發票都記得回收"
        ],
        "hintText": "因為社區居民致力於維護環境整潔"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要政府致力於改善捷運系統，我們就能減少騎機車的次數，讓空氣更清新。",
        "pinyin": "zhǐ yào zhèng fǔ zhì lì yú gǎi shàn jié yùn xì tǒng, wǒ men jiù néng jiǎn shǎo qí jī chē de cì shù, ràng kōng qì gèng qīng xīn.",
        "japanese": "政府がMRTシステムの改善に尽力すれば、バイクに乗る回数を減らして、空気をもっときれいにできる。",
        "chunks": [
          "只要政府致力於改善捷運系統",
          "我們就能減少騎機車的次數",
          "讓空氣更清新"
        ],
        "hintText": "只要政府致力於改善捷運系統"
      }
    ]
  },
  {
    "id": "B-156",
    "band": "B",
    "targetWord": "對稱",
    "distractors": [
      "平衡",
      "公開",
      "流通"
    ],
    "grammarNote": "「對稱（duì chèn）」は「対称」の意味ですが、ビジネスや経済では「資訊不對稱（情報の非対称性、情報格差）」という専門用語として頻繁に登場します。",
    "bossReading": {
      "text": "當資訊不對稱時，決策品質仍[ ? ]提升；因此我們要憑藉數據與第三方審核來校正假設，並建立透明機制，讓各方取得更接近的資訊再行判斷。",
      "targetWord": "有待",
      "distractors": [
        "已經",
        "正在",
        "立刻"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「仍[ ? ]提升」は“まだ〜する必要がある/改善の余地がある”を表すので「有待」が正解です。「憑藉」は“〜を頼りに/〜を根拠にして”で、數據を根拠に校正する流れに合います。「不對稱」な情報状況を是正する文脈として全体が自然です。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他們是雙胞胎，但因為個性不對稱，所以常常吵架。",
        "pinyin": "suī rán tā men shì shuāng bāo tāi, dàn yīn wèi gè xìng bù duì chèn, suǒ yǐ cháng cháng chǎo jià.",
        "japanese": "彼らは双子ですが、性格が対称ではないので、よく喧嘩します。",
        "chunks": [
          "雖然他們是雙胞胎",
          "但因為個性不對稱",
          "所以常常吵架"
        ],
        "hintText": "雖然他們是雙胞胎，但因為個性"
      },
      {
        "situation": "店舗・服務",
        "chinese": "只要買家對商品資訊不對稱，就容易買到假貨。",
        "pinyin": "zhǐ yào mǎi jiā duì shāng pǐn zī xùn bù duì chèn, jiù róng yì mǎi dào jiǎ huò.",
        "japanese": "買い手が商品情報に非対称性を持てば、偽物を買いやすくなります。",
        "chunks": [
          "只要買家對商品資訊不對稱",
          "就容易買到假貨"
        ],
        "hintText": "只要買家對商品資訊"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為房東和房客的資訊不對稱，所以租屋糾紛經常發生。",
        "pinyin": "yīn wèi fáng dōng hé fáng kè de zī xùn bù duì chèn, suǒ yǐ zū wū jiū fēn jīng cháng fā shēng.",
        "japanese": "大家と借主の情報非対称性のため、賃貸トラブルがよく発生します。",
        "chunks": [
          "因為房東和房客的資訊不對稱",
          "所以租屋糾紛經常發生"
        ],
        "hintText": "因為房東和房客的資訊"
      }
    ]
  },
  {
    "id": "B-157",
    "band": "B",
    "targetWord": "有待",
    "distractors": [
      "已經",
      "正在",
      "準備"
    ],
    "grammarNote": "「有待（yǒu dài）」は「（改善や解決が）まだ〜される必要がある、〜の余地がある」という状態を表し、「有待改善」「有待提升」のセットでよく使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們常常吵架，但彼此的溝通方式仍有待改善。",
        "pinyin": "suī rán wǒ men cháng cháng chǎo jià，dàn bǐ cǐ de gōu tōng fāng shì réng yǒu dài gǎi shàn。",
        "japanese": "私たちはよく喧嘩するけれど、お互いのコミュニケーション方法はまだ改善の余地がある。",
        "chunks": [
          "雖然我們常常吵架",
          "但彼此的溝通方式",
          "仍有待改善"
        ],
        "hintText": "雖然我們常常吵架，但彼此的溝通方式"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的服務態度有待提升，所以客人越來越少。",
        "pinyin": "yīn wèi zhè jiā cān tīng de fú wù tài dù yǒu dài tí shēng，suǒ yǐ kè rén yuè lái yuè shǎo。",
        "japanese": "このレストランのサービス態度はまだ改善が必要なので、客がどんどん減っている。",
        "chunks": [
          "因為這家餐廳的服務態度",
          "有待提升",
          "所以客人越來越少"
        ],
        "hintText": "因為這家餐廳的服務態度"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要捷運的班次密度有待改進，尖峰時間就很難準時到達。",
        "pinyin": "zhǐ yào jié yùn de bān cì mì dù yǒu dài gǎi jìn，jiān fēng shí jiān jiù hěn nán zhǔn shí dào dá。",
        "japanese": "地下鉄の運行頻度が改善されなければ、ラッシュ時に時間通りに到着するのは難しい。",
        "chunks": [
          "只要捷運的班次密度",
          "有待改進",
          "尖峰時間就很難準時到達"
        ],
        "hintText": "只要捷運的班次密度"
      }
    ]
  },
  {
    "id": "B-158",
    "band": "B",
    "targetWord": "憑藉",
    "distractors": [
      "放棄",
      "拒絕",
      "準備"
    ],
    "grammarNote": "「憑藉（píng jiè）」はある力や条件、能力などを「拠り所とする、頼りにする」ことを指す少し硬い表現です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他沒有顯赫的背景，但是憑藉著自己的努力，終於考上理想的大學。",
        "pinyin": "suī rán tā méi yǒu xiǎn hè de bèi jǐng, dàn shì píng jiè zhe zì jǐ de nǔ lì, zhōng yú kǎo shàng lǐ xiǎng de dà xué.",
        "japanese": "彼は目立った背景はないが、自分の努力を頼りに、ついに志望大学に合格した。",
        "chunks": [
          "雖然他沒有顯赫的背景",
          "但是憑藉著自己的努力",
          "終於考上理想的大學"
        ],
        "hintText": "雖然他沒有顯赫的背景，但是"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的發票可以兌獎，所以憑藉著消費者的信賴，業績一直很好。",
        "pinyin": "yīn wèi zhè jiā diàn de fā piào kě yǐ duì jiǎng, suǒ yǐ píng jiè zhe xiāo fèi zhě de xìn lài, yè jī yī zhí hěn hǎo.",
        "japanese": "この店の領収書は宝くじの抽選に使えるので、消費者の信頼を頼りに、業績はずっと良い。",
        "chunks": [
          "因為這家店的發票可以兌獎",
          "所以憑藉著消費者的信賴",
          "業績一直很好"
        ],
        "hintText": "因為這家店的發票可以兌獎，所以"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要憑藉著悠遊卡，就可以搭捷運和公車，非常方便。",
        "pinyin": "zhǐ yào píng jiè zhe yōu yóu kǎ, jiù kě yǐ dā jié yùn hé gōng chē, fēi cháng fāng biàn.",
        "japanese": "悠遊カードを頼りにすれば、MRTやバスに乗ることができ、とても便利だ。",
        "chunks": [
          "只要憑藉著悠遊卡",
          "就可以搭捷運和公車",
          "非常方便"
        ],
        "hintText": "只要"
      }
    ]
  },
  {
    "id": "B-159",
    "band": "B",
    "targetWord": "凝聚力",
    "distractors": [
      "影響力",
      "競爭力",
      "壓力"
    ],
    "grammarNote": "「凝聚力（níng jù lì）」はバラバラのものが一つに固まる力、つまり「結束力」や「チームワーク」を指すビジネス必須語彙です。",
    "bossReading": {
      "text": "要展現團隊的凝聚力，成員必須具備清楚分工與互相支援；若流程拖延，就會降低[ ? ]並打擊士氣，因此要用工具追蹤進度、找出瓶頸並快速改善。",
      "targetWord": "效率",
      "distractors": [
        "壓力",
        "能力",
        "程度"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「降低[ ? ]」は“効率を下げる”の意味が最も自然なので「效率」が正解です。「具備」は必要条件を備えることで、分工や支援体制を“具備”する流れに合います。「凝聚力」は結束力で、効率低下が士気や結束に影響する説明として一貫します。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們家人個性不同，但是因為有凝聚力，所以遇到困難時總能團結一致。",
        "pinyin": "suī rán wǒ men jiā rén gè xìng bù tóng, dàn shì yīn wèi yǒu níng jù lì, suǒ yǐ yù dào kùn nán shí zǒng néng tuán jié yī zhì.",
        "japanese": "うちの家族は性格が違うけど、結束力があるので困難な時はいつも団結できる。",
        "chunks": [
          "雖然我們家人個性不同",
          "但是因為有凝聚力",
          "所以遇到困難時總能團結一致"
        ],
        "hintText": "雖然我們家人個性不同，但是因為有"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要店員之間有凝聚力，即使客人再多，服務品質也不會下降。",
        "pinyin": "zhǐ yào diàn yuán zhī jiān yǒu níng jù lì, jí shǐ kè rén zài duō, fú wù pǐn zhí yě bú huì xià jiàng.",
        "japanese": "店員同士に結束力があれば、客が多くてもサービス品質は下がらない。",
        "chunks": [
          "只要店員之間有凝聚力",
          "即使客人再多",
          "服務品質也不會下降"
        ],
        "hintText": "只要店員之間有"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為團隊凝聚力很強，所以我們才能在截止日前完成這個專案。",
        "pinyin": "yīn wèi tuán duì níng jù lì hěn qiáng, suǒ yǐ wǒ men cái néng zài jié zhǐ rì qián wán chéng zhè ge zhuān àn.",
        "japanese": "チームの結束力が強いので、締切前にこのプロジェクトを完了できた。",
        "chunks": [
          "因為團隊凝聚力很強",
          "所以我們才能",
          "在截止日前完成這個專案"
        ],
        "hintText": "因為團隊"
      }
    ]
  },
  {
    "id": "B-160",
    "band": "B",
    "targetWord": "效率",
    "distractors": [
      "壓力",
      "能力",
      "程度"
    ],
    "grammarNote": "「效率（xiào lǜ）」は仕事や作業のはかどり具合（効率）を指し、「提高效率（効率を高める）」というセットで使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我媽媽很忙，但她還是會想辦法提高家事效率，讓我們早點休息。",
        "pinyin": "suī rán wǒ mā ma hěn máng, dàn tā hái shì huì xiǎng bàn fǎ tí gāo jiā shì xiào lǜ, ràng wǒ men zǎo diǎn xiū xi.",
        "japanese": "母はとても忙しいけれど、それでも家事の効率を上げて、私たちを早く休ませようとしてくれます。",
        "chunks": [
          "雖然我媽媽很忙",
          "但她還是會想辦法提高家事效率",
          "讓我們早點休息"
        ],
        "hintText": "雖然我媽媽很忙，但她還是會想辦法提高家事"
      },
      {
        "situation": "店舗・サービス",
        "category": "店舗・サービス",
        "chinese": "因為這家餐廳用了平板點餐，所以點餐效率提高很多，不用等太久。",
        "pinyin": "yīn wèi zhè jiā cān tīng yòng le píng bǎn diǎn cān, suǒ yǐ diǎn cān xiào lǜ tí gāo hěn duō, bù yòng děng tài jiǔ.",
        "japanese": "このレストランはタブレットで注文するので、注文の効率がかなり上がり、あまり待たなくて済みます。",
        "chunks": [
          "因為這家餐廳用了平板點餐",
          "所以點餐效率提高很多",
          "不用等太久"
        ],
        "hintText": "因為這家餐廳用了平板點餐，所以點餐"
      },
      {
        "situation": "交通・移動",
        "category": "交通・移動",
        "chinese": "只要搭捷運的時候用悠遊卡，就能提高進站效率，不用排隊買票。",
        "pinyin": "zhǐ yào dā jié yùn de shí hou yòng yōu yóu kǎ, jiù néng tí gāo jìn zhàn xiào lǜ, bù yòng pái duì mǎi piào.",
        "japanese": "MRTに乗る時に悠遊卡を使えば、入場の効率が上がり、切符を買うために並ぶ必要がありません。",
        "chunks": [
          "只要搭捷運的時候用悠遊卡",
          "就能提高進站效率",
          "不用排隊買票"
        ],
        "hintText": "只要搭捷運的時候用悠遊卡，就能提高進站"
      }
    ]
  },
  {
    "id": "B-161",
    "band": "B",
    "targetWord": "具備",
    "distractors": [
      "準備",
      "發現",
      "解決"
    ],
    "grammarNote": "「具備（jù bèi）」は特定の能力や条件を「あらかじめ備え持っている」ことを指す就職活動や募集要項での頻出単語です。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然他學歷很高，但是如果不具備團隊合作的能力，就很難找到理想的工作。",
        "pinyin": "suī rán tā xué lì hěn gāo, dàn shì rú guǒ bù jù bèi tuán duì hé zuò de néng lì, jiù hěn nán zhǎo dào lǐ xiǎng de gōng zuò.",
        "japanese": "彼は学歴が高いけれども、チームワークの能力を備えていなければ、理想の仕事を見つけるのは難しい。",
        "chunks": [
          "雖然他學歷很高",
          "但是如果不具備團隊合作的能力",
          "就很難找到理想的工作"
        ],
        "hintText": "雖然他學歷很高，但是如果不"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為我的機車突然拋錨，所以只好請假去修車，幸好我具備基本的維修知識。",
        "pinyin": "yīn wèi wǒ de jī chē tū rán pāo máo, suǒ yǐ zhǐ hǎo qǐng jià qù xiū chē, xìng hǎo wǒ jù bèi jī běn de wéi xiū zhī shi.",
        "japanese": "バイクが突然故障したので、休暇を取って修理に行かざるを得ませんでした。幸い基本的な修理知識は備わっています。",
        "chunks": [
          "因為我的機車突然拋錨",
          "所以只好請假去修車",
          "幸好我具備基本的維修知識"
        ],
        "hintText": "因為我的機車突然拋錨，所以只好請假去修車，幸好我"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要店員具備良好的服務態度，就算商品價格高一點，客人也願意買單。",
        "pinyin": "zhǐ yào diàn yuán jù bèi liáng hǎo de fú wù tài dù, jiù suàn shāng pǐn jià gé gāo yī diǎn, kè rén yě yuàn yì mǎi dān.",
        "japanese": "店員が良いサービス態度を備えていれば、たとえ商品価格が少々高くても、客は支払う気になります。",
        "chunks": [
          "只要店員具備良好的服務態度",
          "就算商品價格高一點",
          "客人也願意買單"
        ],
        "hintText": "只要店員"
      }
    ]
  },
  {
    "id": "B-162",
    "band": "B",
    "targetWord": "資格",
    "distractors": [
      "個性",
      "價格",
      "經驗"
    ],
    "grammarNote": "「資格（zī gé）」は特定の事柄を行うために必要な身分や条件です。「符合資格（資格に当てはまる）」の組み合わせが王道です。",
    "bossReading": {
      "text": "報名前先確認是否符合資格，因此遇到臨場壓力也別退縮；但若練習不夠，真正的[ ? ]常在最後關頭才冒出來，讓進度卡住。",
      "targetWord": "瓶頸",
      "distractors": [
        "重點",
        "關鍵",
        "程度"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "空欄は“ボトルネック”を表す名詞が必要なので「瓶頸」が正解です。バッチ語彙の「資格」「退縮」「瓶頸」を、参加条件→緊張しても退縮しない→最後に瓶頸が出る、という流れで自然に統合しています。"
    },
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為我已經考到專業證照，所以符合申請進階工作資格的條件。",
        "pinyin": "yīn wèi wǒ yǐ jīng kǎo dào zhuān yè zhèng zhào, suǒ yǐ fú hé shēn qǐng jìn jiē gōng zuò zī gé de tiáo jiàn.",
        "japanese": "私はすでに専門資格を取得したので、高度な仕事の資格を申請する条件を満たしています。",
        "chunks": [
          "因為我已經考到專業證照",
          "所以符合申請進階工作資格",
          "的條件"
        ],
        "hintText": "因為我已經考到專業證照，所以符合申請"
      },
      {
        "situation": "因為這張會員卡有打折優惠，只要你符合資格，就能在結帳時使用。",
        "chinese": "因為這張會員卡有打折優惠，只要你符合資格，就能在結帳時使用。",
        "pinyin": "yīn wèi zhè zhāng huì yuán kǎ yǒu dǎ zhé yōu huì, zhǐ yào nǐ fú hé zī gé, jiù néng zài jié zhàng shí shǐ yòng.",
        "japanese": "この会員カードには割引特典があり、資格を満たしていれば、会計時に使用できます。",
        "chunks": [
          "因為這張會員卡有打折優惠",
          "只要你符合資格",
          "就能在結帳時使用"
        ],
        "hintText": "因為這張會員卡有打折優惠，只要你"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然我已經報警，但是因為沒有監視器畫面，所以不符合保險理賠的資格。",
        "pinyin": "suī rán wǒ yǐ jīng bào jǐng, dàn shì yīn wèi méi yǒu jiān shì qì huà miàn, suǒ yǐ bù fú hé bǎo xiǎn lǐ péi de zī gé.",
        "japanese": "警察には通報したけれど、監視カメラの映像がないので、保険金を受け取る資格を満たしていません。",
        "chunks": [
          "雖然我已經報警",
          "但是因為沒有監視器畫面",
          "所以不符合保險理賠的資格"
        ],
        "hintText": "雖然我已經報警，但是因為沒有監視器畫面，所以不符合"
      }
    ]
  },
  {
    "id": "B-163",
    "band": "B",
    "targetWord": "退縮",
    "distractors": [
      "前進",
      "發展",
      "擴大"
    ],
    "grammarNote": "「退縮（tuì suō）」は困難や恐れを前にして後ずさりする、ひるむことを指します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然朋友一直鼓勵我，但我因為害怕失敗而退縮了。",
        "pinyin": "suī rán péng yǒu yī zhí gǔ lì wǒ，dàn wǒ yīn wèi hài pà shī bài ér tuì suō le。",
        "japanese": "友達がずっと励ましてくれたけど、私は失敗が怖くて尻込みしてしまった。",
        "chunks": [
          "雖然朋友一直鼓勵我",
          "但我因為害怕失敗",
          "而退縮了"
        ],
        "hintText": "雖然朋友一直鼓勵我，但我因為害怕失敗"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要遇到態度不好的店員，我就會退縮不敢反映問題。",
        "pinyin": "zhǐ yào yù dào tài dù bù hǎo de diàn yuán，wǒ jiù huì tuì suō bù gǎn fǎn yìng wèn tí。",
        "japanese": "態度の悪い店員に当たると、私は尻込みして問題を言い出せなくなる。",
        "chunks": [
          "只要遇到態度不好的店員",
          "我就會退縮",
          "不敢反映問題"
        ],
        "hintText": "只要遇到態度不好的店員，我就會"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為機車被拖吊，我雖然很生氣，但沒有退縮直接去繳罰單。",
        "pinyin": "yīn wèi jī chē bèi tuō diào，wǒ suī rán hěn shēng qì，dàn méi yǒu tuì suō zhí jiē qù jiǎo fá dān。",
        "japanese": "バイクがレッカー移動されたので、すごく怒ったけど、尻込みせずに直接罰金を払いに行った。",
        "chunks": [
          "因為機車被拖吊",
          "我雖然很生氣",
          "但沒有退縮直接去繳罰單"
        ],
        "hintText": "因為機車被拖吊，我雖然很生氣，但"
      }
    ]
  },
  {
    "id": "B-164",
    "band": "B",
    "targetWord": "瓶頸",
    "distractors": [
      "重點",
      "關鍵",
      "程度"
    ],
    "grammarNote": "「瓶頸（píng jǐng）」は物理的な瓶の首のように、進行を妨げている隘路（ボトルネック）を指す重要なビジネス語彙です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們夫妻感情很好，但在溝通上還是遇到了瓶頸，只要願意坦誠對話就能改善。",
        "pinyin": "suī rán wǒ men fū qī gǎn qíng hěn hǎo, dàn zài gōu tōng shàng hái shì yù dào le píng jǐng, zhǐ yào yuàn yì tǎn chéng duì huà jiù néng gǎi shàn.",
        "japanese": "私たち夫婦は仲が良いけれど、コミュニケーションで行き詰まりを感じている。誠実に話し合えば改善できる。",
        "chunks": [
          "雖然我們夫妻感情很好",
          "但在溝通上還是遇到了瓶頸",
          "只要願意坦誠對話就能改善"
        ],
        "hintText": "雖然我們夫妻感情很好，但在溝通上還是遇到了"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的服務品質一直遇到瓶頸，所以客人越來越少，老闆決定重新訓練員工。",
        "pinyin": "yīn wèi zhè jiā cān tīng de fú wù pǐn zhí yī zhí yù dào píng jǐng, suǒ yǐ kè rén yuè lái yuè shǎo, lǎo bǎn jué dìng chóng xīn xùn liàn yuán gōng.",
        "japanese": "このレストランのサービス品質がずっと頭打ちで、客足が減っているため、オーナーは従業員を再訓練することにした。",
        "chunks": [
          "因為這家餐廳的服務品質一直遇到瓶頸",
          "所以客人越來越少",
          "老闆決定重新訓練員工"
        ],
        "hintText": "因為這家餐廳的服務品質一直遇到瓶頸，所以"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然捷運的運量已經飽和，但因為擴建工程遇到瓶頸，所以短期內無法解決擁擠問題。",
        "pinyin": "suī rán jié yùn de yùn liàng yǐ jīng bǎo hé, dàn yīn wèi kuò jiàn gōng chéng yù dào píng jǐng, suǒ yǐ duǎn qī nèi wú fǎ jiě jué yōng jǐ wèn tí.",
        "japanese": "MRTの輸送量は飽和状態だが、拡張工事が行き詰まっているため、短期的には混雑問題は解決できない。",
        "chunks": [
          "雖然捷運的運量已經飽和",
          "但因為擴建工程遇到瓶頸",
          "所以短期內無法解決擁擠問題"
        ],
        "hintText": "雖然捷運的運量已經飽和，但因為擴建工程遇到"
      }
    ]
  },
  {
    "id": "B-165",
    "band": "B",
    "targetWord": "擴大",
    "distractors": [
      "縮小",
      "減少",
      "維持"
    ],
    "grammarNote": "「擴大（kuò dà）」は規模や範囲を広げることを指し、「擴大市場」「擴大營業」などビジネスシーンで多用されます。",
    "bossReading": {
      "text": "公司想擴大市場時，得先盤點固定開銷並控管現金流，因此即使景氣反轉也不至於再度轉虧為[ ? ]，投資人也更安心。",
      "targetWord": "盈",
      "distractors": [
        "虧",
        "滿",
        "平"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「轉虧為盈」は“赤字から黒字へ”の定型表現で、空欄は「盈」が正解です。バッチ語彙の「擴大」「開銷」「盈」を、事業拡大→コスト管理→黒字化、というビジネス文脈で一貫させています。"
    },
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家咖啡店的生意很好，所以老闆決定擴大店面，增加更多座位。",
        "pinyin": "yīn wèi zhè jiā kā fēi diàn de shēng yì hěn hǎo, suǒ yǐ lǎo bǎn jué dìng kuò dà diàn miàn, zēng jiā gèng duō zuò wèi.",
        "japanese": "このコーヒー店は商売がとてもうまくいっているので、オーナーは店舗を拡大して席を増やすことに決めた。",
        "chunks": [
          "因為這家咖啡店的生意很好",
          "所以老闆決定擴大店面",
          "增加更多座位"
        ],
        "hintText": "因為這家咖啡店的生意很好，所以老闆決定"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "為了因應業務成長，公司計畫明年擴大招募，所以我們需要提前準備面試流程。",
        "pinyin": "wèi le yīn yìng yè wù chéng zhǎng, gōng sī jì huà míng nián kuò dà zhāo mù, suǒ yǐ wǒ men xū yào tí qián zhǔn bèi miàn shì liú chéng.",
        "japanese": "業務成長に対応するため、会社は来年の採用拡大を計画しているので、面接の流れを事前に準備する必要がある。",
        "chunks": [
          "為了因應業務成長",
          "公司計畫明年擴大招募",
          "所以我們需要提前準備面試流程"
        ],
        "hintText": "為了因應業務成長，公司計畫明年"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然颱風警報已經發布，但是政府還是決定擴大疏散範圍，以確保居民安全。",
        "pinyin": "suī rán tái fēng jǐng bào yǐ jīng fā bù, dàn shì zhèng fǔ hái shì jué dìng kuò dà shū sàn fàn wéi, yǐ què bǎo jū mín ān quán.",
        "japanese": "台風警報はすでに発令されたが、政府は住民の安全を確保するために避難範囲を拡大することを決定した。",
        "chunks": [
          "雖然颱風警報已經發布",
          "但是政府還是決定擴大疏散範圍",
          "以確保居民安全"
        ],
        "hintText": "雖然颱風警報已經發布，但是政府還是決定"
      }
    ]
  },
  {
    "id": "B-166",
    "band": "B",
    "targetWord": "開銷",
    "distractors": [
      "收入",
      "產品",
      "規模"
    ],
    "grammarNote": "「開銷（kāi xiāo）」は支出や経費（生活費などを含む）を意味する名詞で、日常でもビジネスでも使われます。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為這個月的開銷太大，所以我只好把機車賣掉來應急。",
        "pinyin": "yīn wèi zhè ge yuè de kāi xiāo tài dà，suǒ yǐ wǒ zhǐ hǎo bǎ jī chē mài diào lái yìng jí。",
        "japanese": "今月の出費が大きすぎるので、やむを得ずバイクを売って急場をしのいだ。",
        "chunks": [
          "因為這個月的開銷太大",
          "所以我只好把機車賣掉",
          "來應急"
        ],
        "hintText": "因為這個月的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家餐廳的開銷比較高，但是只要刷信用卡就能打折。",
        "pinyin": "suī rán zhè jiā cān tīng de kāi xiāo bǐ jiào gāo，dàn shì zhǐ yào shuā xìn yòng kǎ jiù néng dǎ zhé。",
        "japanese": "このレストランは出費は高いけれど、クレジットカードを使えば割引になる。",
        "chunks": [
          "雖然這家餐廳的開銷比較高",
          "但是只要刷信用卡",
          "就能打折"
        ],
        "hintText": "雖然這家餐廳的"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為公司最近要節省開銷，所以出差只能搭捷運不能搭計程車。",
        "pinyin": "yīn wèi gōng sī zuì jìn yào jié shěng kāi xiāo，suǒ yǐ chū chāi zhǐ néng dā jié yùn bù néng dā jì chéng chē。",
        "japanese": "会社が最近経費節減をしているので、出張はMRTしか使えずタクシーは使えない。",
        "chunks": [
          "因為公司最近要節省開銷",
          "所以出差只能搭捷運",
          "不能搭計程車"
        ],
        "hintText": "因為公司最近要節省"
      }
    ]
  },
  {
    "id": "B-167",
    "band": "B",
    "targetWord": "盈",
    "distractors": [
      "平",
      "滿",
      "空"
    ],
    "grammarNote": "「虧（kuī）」は赤字・損失、「盈（yíng）」は黒字・利益を表します。「轉虧為盈（赤字から黒字になる）」は経済ニュース必須の四字熟語です。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家餐廳之前虧損很多，但因為改用在地食材，今年終於轉虧為盈。",
        "pinyin": "suīrán zhè jiā cāntīng zhīqián kuīsǔn hěnduō, dàn yīnwèi gǎiyòng zàidì shícái, jīnnián zhōngyú zhuǎn kuī wéi yíng.",
        "japanese": "このレストランは以前は赤字が多かったが、地元の食材に切り替えたおかげで、今年ついに黒字に転換した。",
        "chunks": [
          "雖然這家餐廳之前虧損很多",
          "但因為改用在地食材",
          "今年終於轉虧為盈"
        ],
        "hintText": "雖然這家餐廳之前虧損很多，但因為改用在地食材，今年終於"
      },
      {
        "situation": "職場",
        "chinese": "只要我們部門努力降低成本，下季就能轉虧為盈，拿到獎金。",
        "pinyin": "zhǐyào wǒmen bùmén nǔlì jiàngdī chéngběn, xià jì jiù néng zhuǎn kuī wéi yíng, ná dào jiǎngjīn.",
        "japanese": "私たちの部署が努力してコストを削減すれば、来期には黒字に転換してボーナスがもらえる。",
        "chunks": [
          "只要我們部門努力降低成本",
          "下季就能轉虧為盈",
          "拿到獎金"
        ],
        "hintText": "只要我們部門努力降低成本，下季就能"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為房東一直不修漏水，導致店裡生意轉虧為盈的計畫又延後了。",
        "pinyin": "yīnwèi fángdōng yīzhí bù xiū lòushuǐ, dǎozhì diàn lǐ shēngyì zhuǎn kuī wéi yíng de jìhuà yòu yánhòu le.",
        "japanese": "大家がずっと水漏れを修理しないため、店の業績が黒字に転換する計画がまた遅れてしまった。",
        "chunks": [
          "因為房東一直不修漏水",
          "導致店裡生意轉虧為盈的計畫",
          "又延後了"
        ],
        "hintText": "因為房東一直不修漏水，導致店裡生意"
      }
    ]
  },
  {
    "id": "B-168",
    "band": "B",
    "targetWord": "緩和",
    "distractors": [
      "惡化",
      "嚴重",
      "激烈"
    ],
    "grammarNote": "「趨於（qū yú）」は「〜の傾向に向かう」、「緩和（huǎn hé）」は状況や雰囲気が和らぐことを指します。",
    "bossReading": {
      "text": "競爭再激烈也要保留餘地，因此談判前先擬一系列可行方案，讓氣氛逐步緩和；若一開始就互不讓步，衝突只會[ ? ]升高。",
      "targetWord": "激烈",
      "distractors": [
        "安靜",
        "輕鬆",
        "簡單"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「只會[ ? ]升高」は“さらに激しくなる”の意味が自然なので「激烈」が正解です。同バッチ語彙「緩和」「激烈」「一系列」を、交渉の場面で“激しい競争→一連の案→緩和”という流れにまとめています。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然爸媽最近常吵架，但只要大家好好溝通，氣氛就會趨於緩和。",
        "pinyin": "suī rán bà mā zuì jìn cháng chǎo jià，dàn zhǐ yào dà jiā hǎo hǎo gōu tōng，qì fēn jiù huì qū yú huǎn hé。",
        "japanese": "雖然爸媽最近常吵架，但只要大家好好溝通，氣氛就會趨於緩和。",
        "chunks": [
          "雖然爸媽最近常吵架",
          "但只要大家好好溝通",
          "氣氛就會趨於緩和"
        ],
        "hintText": "雖然爸媽最近常吵架，但只要大家好好溝通，氣氛就會"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為鄰居的冷氣太吵，所以管委會協調後，噪音問題已經趨於緩和。",
        "pinyin": "yīn wèi lín jū de lěng qì tài chǎo，suǒ yǐ guǎn wěi huì xié tiáo hòu，zào yīn wèn tí yǐ jīng qū yú huǎn hé。",
        "japanese": "因為鄰居的冷氣太吵，所以管委會協調後，噪音問題已經趨於緩和。",
        "chunks": [
          "因為鄰居的冷氣太吵",
          "所以管委會協調後",
          "噪音問題已經趨於緩和"
        ],
        "hintText": "因為鄰居的冷氣太吵，所以管委會協調後，噪音問題已經"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要公司調整加班制度，員工的離職率就會趨於緩和。",
        "pinyin": "zhǐ yào gōng sī tiáo zhěng jiā bān zhì dù，yuán gōng de lí zhí lǜ jiù huì qū yú huǎn hé。",
        "japanese": "只要公司調整加班制度，員工的離職率就會趨於緩和。",
        "chunks": [
          "只要公司調整加班制度",
          "員工的離職率就會",
          "趨於緩和"
        ],
        "hintText": "只要公司調整加班制度，員工的離職率就會"
      }
    ]
  },
  {
    "id": "B-169",
    "band": "B",
    "targetWord": "激烈",
    "distractors": [
      "安靜",
      "輕鬆",
      "簡單"
    ],
    "grammarNote": "「激烈（jī liè）」は競争や議論、市場の変化などが「激しい、熾烈である」様子を表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他們是好朋友，但是因為事業競爭激烈，最近關係變得有些緊張。",
        "pinyin": "suī rán tā men shì hǎo péng yǒu，dàn shì yīn wèi shì yè jìng zhēng jī liè，zuì jìn guān xì biàn dé yǒu xiē jǐn zhāng。",
        "japanese": "彼らは良い友達だが、ビジネスの競争が激しいため、最近関係がやや緊張している。",
        "chunks": [
          "雖然他們是好朋友",
          "但是因為事業競爭激烈",
          "最近關係變得有些緊張"
        ],
        "hintText": "雖然他們是好朋友，但是因為事業競爭"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要一到週末，這家百貨公司的折扣戰就會變得非常激烈，顧客都搶著排隊結帳。",
        "pinyin": "zhǐ yào yī dào zhōu mò，zhè jiā bǎi huò gōng sī de zhé kòu zhàn jiù huì biàn dé fēi cháng jī liè，gù kè dōu qiǎng zhe pái duì jié zhàng。",
        "japanese": "週末になると、このデパートの割引合戦は非常に激しくなり、客は皆レジに並ぶのに必死だ。",
        "chunks": [
          "只要一到週末",
          "這家百貨公司的折扣戰就會變得非常激烈",
          "顧客都搶著排隊結帳"
        ],
        "hintText": "只要一到週末，這家百貨公司的折扣戰"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為尖峰時段的捷運車廂內人潮擁擠，搶位子的競爭非常激烈，所以很多人寧願等下一班。",
        "pinyin": "yīn wèi jiān fēng shí duàn de jié yùn chē xiāng nèi rén cháo yōng jǐ，qiǎng wèi zi de jìng zhēng fēi cháng jī liè，suǒ yǐ hěn duō rén nìng yuàn děng xià yī bān。",
        "japanese": "ラッシュ時の地下鉄車内は人混みで、席取り競争が非常に激しいので、多くの人は次の電車を待つほうを選ぶ。",
        "chunks": [
          "因為尖峰時段的捷運車廂內人潮擁擠",
          "搶位子的競爭非常激烈",
          "所以很多人寧願等下一班"
        ],
        "hintText": "因為尖峰時段的捷運車廂內人潮擁擠，搶位子的競爭"
      }
    ]
  },
  {
    "id": "B-170",
    "band": "B",
    "targetWord": "一系列",
    "distractors": [
      "一連串",
      "大規模",
      "針對性"
    ],
    "grammarNote": "「一系列（yì xì liè）」は関連する事柄が連続している「一連の、一連のシリーズ」という意味です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然她最近很忙，但是她還是準備了一系列的生日驚喜給她媽媽。",
        "pinyin": "suī rán tā zuì jìn hěn máng, dàn shì tā hái shì zhǔn bèi le yī xì liè de shēng rì jīng xǐ gěi tā mā ma.",
        "japanese": "彼女は最近とても忙しいけれど、それでも母のために一連の誕生日サプライズを用意しました。",
        "chunks": [
          "雖然她最近很忙，",
          "但是她還是準備了",
          "一系列的生日驚喜給她媽媽。"
        ],
        "hintText": "雖然她最近很忙，但是她還是準備了"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家百貨公司的週年慶，所以他們推出了一系列的折扣活動。",
        "pinyin": "yīn wèi zhè jiā bǎi huò gōng sī de zhōu nián qìng, suǒ yǐ tā men tuī chū le yī xì liè de zhé kòu huó dòng.",
        "japanese": "このデパートの周年祭のため、一連の割引キャンペーンを実施しています。",
        "chunks": [
          "因為這家百貨公司的週年慶，",
          "所以他們推出了",
          "一系列的折扣活動。"
        ],
        "hintText": "因為這家百貨公司的週年慶，所以他們推出了"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要捷運站實施一系列的安全檢查，就能讓乘客更安心搭乘。",
        "pinyin": "zhǐ yào jié yùn zhàn shí shī yī xì liè de ān quán jiǎn chá, jiù néng ràng chéng kè gèng ān xīn dā chéng.",
        "japanese": "MRTの駅が一連の安全検査を実施すれば、乗客はより安心して利用できます。",
        "chunks": [
          "只要捷運站實施",
          "一系列的安全檢查，",
          "就能讓乘客更安心搭乘。"
        ],
        "hintText": "只要捷運站實施"
      }
    ]
  },
  {
    "id": "B-171",
    "band": "B",
    "targetWord": "妥協",
    "distractors": [
      "決定",
      "要求",
      "放棄"
    ],
    "grammarNote": "「達成妥協（dá chéng tuǒ xié）」で「妥協点に至る、歩み寄る」というビジネスや交渉の場での定番表現です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們對小孩的教育方式不同，但為了家庭和諧，最後還是達成妥協。",
        "pinyin": "suī rán wǒ men duì xiǎo hái de jiào yù fāng shì bù tóng, dàn wèi le jiā tíng hé xié, zuì hòu hái shì dá chéng tuǒ xié.",
        "japanese": "私たちは子供の教育方針が異なるが、家庭の調和のために最終的には妥協点に達した。",
        "chunks": [
          "雖然我們對小孩的教育方式不同",
          "但為了家庭和諧",
          "最後還是達成妥協"
        ],
        "hintText": "雖然我們對小孩的教育方式不同，但為了家庭和諧，最後還是"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為客人對價格有意見，所以我們打折後才達成妥協。",
        "pinyin": "yīn wèi kè rén duì jià gé yǒu yì jiàn, suǒ yǐ wǒ men dǎ zhé hòu cái dá chéng tuǒ xié.",
        "japanese": "客が価格に不満を持ったので、値引きをしてようやく妥協点に達した。",
        "chunks": [
          "因為客人對價格有意見",
          "所以我們打折後",
          "才達成妥協"
        ],
        "hintText": "因為客人對價格有意見，所以我們打折後"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要雙方願意各退一步，就能在薪資調整上達成妥協。",
        "pinyin": "zhǐ yào shuāng fāng yuàn yì gè tuì yī bù, jiù néng zài xīn zī tiáo zhěng shàng dá chéng tuǒ xié.",
        "japanese": "双方が一歩ずつ譲れば、給与調整で妥協点に達することができる。",
        "chunks": [
          "只要雙方願意各退一步",
          "就能在薪資調整上",
          "達成妥協"
        ],
        "hintText": "只要雙方願意各退一步，就能在薪資調整上"
      }
    ]
  },
  {
    "id": "B-172",
    "band": "B",
    "targetWord": "引發",
    "distractors": [
      "解決",
      "發現",
      "減少"
    ],
    "grammarNote": "「引發（yǐn fā）」は事象や議論、社会的な関心などを「引き起こす、誘発する」ことを指すニュース頻出語です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然只是小事，但因為他說話太直接，引發了家人之間的不愉快。",
        "pinyin": "suī rán zhǐ shì xiǎo shì，dàn yīn wèi tā shuō huà tài zhí jiē，yǐn fā le jiā rén zhī jiān de bù yú kuài。",
        "japanese": "些細なことですが、彼の話し方があまりにストレートだったため、家族間の不愉快を引き起こしました。",
        "chunks": [
          "雖然只是小事",
          "但因為他說話太直接",
          "引發了家人之間的不愉快"
        ],
        "hintText": "雖然只是小事，但因為他說話太直接，"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要捷運票價調整，就容易引發通勤族的抱怨。",
        "pinyin": "zhǐ yào jié yùn piào jià tiáo zhěng，jiù róng yì yǐn fā tōng qín zú de bào yuàn。",
        "japanese": "MRTの運賃が調整されると、通勤者の不満を引き起こしやすい。",
        "chunks": [
          "只要捷運票價調整",
          "就容易引發",
          "通勤族的抱怨"
        ],
        "hintText": "只要捷運票價調整，就容易引發"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為鄰居半夜施工的聲音太大，引發了整棟樓的住戶抗議。",
        "pinyin": "yīn wèi lín jū bàn yè shī gōng de shēng yīn tài dà，yǐn fā le zhěng dòng lóu de zhù hù kàng yì。",
        "japanese": "隣人が夜中に工事をする音が大きすぎたため、建物全体の住人の抗議を引き起こしました。",
        "chunks": [
          "因為鄰居半夜施工的聲音太大",
          "引發了",
          "整棟樓的住戶抗議"
        ],
        "hintText": "因為鄰居半夜施工的聲音太大，引發了"
      }
    ]
  },
  {
    "id": "B-173",
    "band": "B",
    "targetWord": "出眾",
    "distractors": [
      "普通",
      "平凡",
      "簡單"
    ],
    "grammarNote": "「出眾（chū zhòng）」は群を抜いて優れている、目立って素晴らしい様子を表します。台湾では対人スキルを「EQ（心の知能指数）」と表現することが多いです。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我妹成績不是最頂尖，但她的社交能力非常出眾，每次聚會都讓大家很開心。",
        "pinyin": "suī rán wǒ mèi chéng jì bú shì zuì dǐng jiān, dàn tā de shè jiāo néng lì fēi cháng chū zhòng, měi cì jù huì dōu ràng dà jiā hěn kāi xīn.",
        "japanese": "妹の成績は最高ではないけど、社交能力は非常に優れていて、集まりのたびにみんなを楽しませてくれる。",
        "chunks": [
          "雖然我妹成績不是最頂尖",
          "但她的社交能力非常出眾",
          "每次聚會都讓大家很開心"
        ],
        "hintText": "雖然我妹成績不是最頂尖，但她的社交能力非常"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的服務態度出眾，所以即使要排隊一小時，客人也願意等。",
        "pinyin": "yīn wèi zhè jiā cān tīng de fú wù tài dù chū zhòng, suǒ yǐ jí shǐ yào pái duì yī xiǎo shí, kè rén yě yuàn yì děng.",
        "japanese": "このレストランのサービス態度が抜群なので、1時間並んでもお客さんは待ちたいと思う。",
        "chunks": [
          "因為這家餐廳的服務態度出眾",
          "所以即使要排隊一小時",
          "客人也願意等"
        ],
        "hintText": "因為這家餐廳的服務態度出眾，所以即使要排隊一小時"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要你的EQ出眾，就算遇到機車被人刮傷這種鳥事，也能冷靜處理。",
        "pinyin": "zhǐ yào nǐ de EQ chū zhòng, jiù suàn yù dào jī chē bèi rén guā shāng zhè zhǒng niǎo shì, yě néng lěng jìng chǔ lǐ.",
        "japanese": "EQが優れていれば、バイクを傷つけられるような嫌なことがあっても冷静に対処できる。",
        "chunks": [
          "只要你的EQ出眾",
          "就算遇到機車被人刮傷這種鳥事",
          "也能冷靜處理"
        ],
        "hintText": "只要你的EQ出眾，就算遇到機車被人刮傷這種鳥事"
      }
    ]
  },
  {
    "id": "B-174",
    "band": "B",
    "targetWord": "巧妙",
    "distractors": [
      "奇怪",
      "嚴重",
      "複雜"
    ],
    "grammarNote": "「巧妙（qiǎo miào）」はやり方や設計、アイディアなどが優れていて巧みな様子を表す形容詞です。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家火鍋店的醬料調配非常巧妙，所以每次來都要排隊半小時以上。",
        "pinyin": "yīn wèi zhè jiā huǒ guō diàn de jiàng liào diào pèi fēi cháng qiǎo miào, suǒ yǐ měi cì lái dōu yào pái duì bàn xiǎo shí yǐ shàng.",
        "japanese": "この火鍋店のタレの調合が非常に巧妙なので、毎回来るたびに30分以上並ばなければならない。",
        "chunks": [
          "因為這家火鍋店的醬料調配",
          "非常巧妙",
          "所以每次來都要排隊半小時以上"
        ],
        "hintText": "因為這家火鍋店的醬料調配"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然這條捷運路線的設計很巧妙，但是轉乘站還是容易讓人迷路。",
        "pinyin": "suī rán zhè tiáo jié yùn lù xiàn de shè jì hěn qiǎo miào, dàn shì zhuǎn chéng zhàn hái shì róng yì ràng rén mí lù.",
        "japanese": "この地下鉄路線の設計は巧妙だが、乗り換え駅ではやはり迷いやすい。",
        "chunks": [
          "雖然這條捷運路線的設計",
          "很巧妙",
          "但是轉乘站還是容易讓人迷路"
        ],
        "hintText": "雖然這條捷運路線的設計"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要詐騙集團的手法越巧妙，我們就越需要提高警覺。",
        "pinyin": "zhǐ yào zhà piàn jí tuán de shǒu fǎ yuè qiǎo miào, wǒ men jiù yuè xū yào tí gāo jǐng jué.",
        "japanese": "詐欺グループの手口が巧妙であればあるほど、私たちは警戒を強める必要がある。",
        "chunks": [
          "只要詐騙集團的手法",
          "越巧妙",
          "我們就越需要提高警覺"
        ],
        "hintText": "只要詐騙集團的手法"
      }
    ]
  },
  {
    "id": "B-175",
    "band": "B",
    "targetWord": "機制",
    "distractors": [
      "機器",
      "機會",
      "機率"
    ],
    "grammarNote": "「機制（jī zhì）」は組織やシステムが機能する「仕組み・システム・メカニズム」を指し、ビジネス改革の文脈で必ず使われます。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為公司要推動改革，所以我們需要建立一套新的獎勵機制。",
        "pinyin": "yīn wèi gōng sī yào tuī dòng gǎi gé, suǒ yǐ wǒ men xū yào jiàn lì yī tào xīn de jiǎng lì jī zhì.",
        "japanese": "因為公司要推動改革，所以我們需要建立一套新的獎勵機制。",
        "chunks": [
          "因為公司要推動改革",
          "所以我們需要建立一套新的",
          "獎勵機制"
        ],
        "hintText": "因為公司要推動改革，所以我們需要建立一套新的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家店生意很好，但是他們沒有完善的退貨機制，讓客人很困擾。",
        "pinyin": "suī rán zhè jiā diàn shēng yì hěn hǎo, dàn shì tā men méi yǒu wán shàn de tuì huò jī zhì, ràng kè rén hěn kùn rǎo.",
        "japanese": "雖然這家店生意很好，但是他們沒有完善的退貨機制，讓客人很困擾。",
        "chunks": [
          "雖然這家店生意很好",
          "但是他們沒有完善的",
          "退貨機制"
        ],
        "hintText": "雖然這家店生意很好，但是他們沒有完善的"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要捷運的票價調整機制更透明，民眾就會比較願意支持。",
        "pinyin": "zhǐ yào jié yùn de piào jià tiáo zhěng jī zhì gèng tòu míng, mín zhòng jiù huì bǐ jiào yuàn yì zhī chí.",
        "japanese": "只要捷運的票價調整機制更透明，民眾就會比較願意支持。",
        "chunks": [
          "只要捷運的票價調整機制",
          "更透明",
          "民眾就會比較願意支持"
        ],
        "hintText": "只要捷運的票價調整機制"
      }
    ]
  },
  {
    "id": "B-176",
    "band": "B",
    "targetWord": "領域",
    "distractors": [
      "環境",
      "態度",
      "情況"
    ],
    "grammarNote": "「領域（lǐng yù）」は学問や産業、活動の専門範囲やテリトリーを指します。「專業領域（専門分野）」としても頻出です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我哥哥在醫學領域很有成就，但是他對烹飪完全不在行。",
        "pinyin": "suī rán wǒ gē ge zài yī xué lǐng yù hěn yǒu chéng jiù, dàn shì tā duì pēng rèn wán quán bù zài háng.",
        "japanese": "私の兄は医学の分野でとても成果を上げていますが、料理は全く苦手です。",
        "chunks": [
          "雖然我哥哥",
          "在醫學領域",
          "很有成就",
          "但是他對烹飪",
          "完全不在行"
        ],
        "hintText": "雖然我哥哥"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店在美妝領域很有名，所以每次去都要排隊結帳。",
        "pinyin": "yīn wèi zhè jiā diàn zài měi zhuāng lǐng yù hěn yǒu míng, suǒ yǐ měi cì qù dōu yào pái duì jié zhàng.",
        "japanese": "この店は化粧品の分野で有名なので、行くたびに会計に並ばなければなりません。",
        "chunks": [
          "因為這家店",
          "在美妝領域",
          "很有名",
          "所以每次去",
          "都要排隊結帳"
        ],
        "hintText": "因為這家店"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要你在交通領域取得專業證照，就可以開捷運或公車。",
        "pinyin": "zhǐ yào nǐ zài jiāo tōng lǐng yù qǔ dé zhuān yè zhèng zhào, jiù kě yǐ kāi jié yùn huò gōng chē.",
        "japanese": "交通分野で専門の資格を取得すれば、地下鉄やバスを運転できます。",
        "chunks": [
          "只要你在交通領域",
          "取得專業證照",
          "就可以開",
          "捷運或公車"
        ],
        "hintText": "只要你在交通領域"
      }
    ]
  },
  {
    "id": "B-177",
    "band": "B",
    "targetWord": "收益",
    "distractors": [
      "支出",
      "成本",
      "開銷"
    ],
    "grammarNote": "「收益（shōu yì）」はビジネスや金融商品への投資で得られる利益やリターンを指します。「預期收益（期待収益）」は頻出コロケーションです。",
    "bossReading": {
      "text": "跨領域合作時要先設計清楚的分工機制，因此各部門才能在同一目標下協作；若目標不明，投入再多也難產生穩定[ ? ]，甚至互相推責。",
      "targetWord": "收益",
      "distractors": [
        "支出",
        "成本",
        "開銷"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "空欄は“リターン/収益”を表す名詞が必要なので「收益」が正解です。バッチ語彙の「機制」「領域」「收益」を、領域を跨ぐ協業→機制で回す→收益に繋げる、という因果で自然に統合しています。"
    },
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "雖然這次投資的預期收益很高，但是因為市場波動太大，我還是決定先觀望。",
        "pinyin": "suī rán zhè cì tóu zī de yù qī shōu yì hěn gāo, dàn shì yīn wèi shì chǎng bō dòng tài dà, wǒ hái shì jué dìng xiān guān wàng.",
        "japanese": "今回の投資の期待収益は高いですが、市場の変動が大きすぎるので、私はやはりまず様子を見ることにしました。",
        "chunks": [
          "雖然這次投資的預期收益很高",
          "但是因為市場波動太大",
          "我還是決定先觀望"
        ],
        "hintText": "雖然這次投資的預期收益很高，但是因為市場波動太大，"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要長期持有這檔基金，預期收益就會穩定成長，所以不用太擔心短期的波動。",
        "pinyin": "zhǐ yào cháng qī chí yǒu zhè dàng jī jīn, yù qī shōu yì jiù huì wěn dìng chéng zhǎng, suǒ yǐ bù yòng tài dān xīn duǎn qī de bō dòng.",
        "japanese": "このファンドを長期保有しさえすれば、期待収益は安定して成長するので、短期的な変動をあまり心配する必要はありません。",
        "chunks": [
          "只要長期持有這檔基金",
          "預期收益就會穩定成長",
          "所以不用太擔心短期的波動"
        ],
        "hintText": "只要長期持有這檔基金，預期收益就會穩定成長，"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為公司今年的預期收益不錯，所以老闆決定幫大家加薪。",
        "pinyin": "yīn wèi gōng sī jīn nián de yù qī shōu yì bù cuò, suǒ yǐ lǎo bǎn jué dìng bāng dà jiā jiā xīn.",
        "japanese": "今年の会社の期待収益が良いので、社長は皆の給料を上げることにしました。",
        "chunks": [
          "因為公司今年的預期收益不錯",
          "所以老闆決定幫大家加薪"
        ],
        "hintText": "因為公司今年的預期收益不錯，"
      }
    ]
  },
  {
    "id": "B-178",
    "band": "B",
    "targetWord": "履行",
    "distractors": [
      "放棄",
      "逃避",
      "拒絕"
    ],
    "grammarNote": "「履行（lǚ xíng）」は契約、約束、義務などを実際に実行に移すことを指す法律・ビジネス用語です。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為公司沒有履行合約中的保密條款，所以我們決定終止合作。",
        "pinyin": "yīn wèi gōng sī méi yǒu lǚ xíng hé yuē zhōng de bǎo mì tiáo kuǎn，suǒ yǐ wǒ men jué dìng zhōng zhǐ hé zuò。",
        "japanese": "会社が契約の秘密保持条項を履行しなかったので、私たちは協力を終了することに決めました。",
        "chunks": [
          "因為公司沒有",
          "履行合約中的保密條款",
          "所以我們決定終止合作"
        ],
        "hintText": "因為公司沒有"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要房東願意履行修繕義務，我就繼續租這間套房。",
        "pinyin": "zhǐ yào fáng dōng yuàn yì lǚ xíng xiū shàn yì wù，wǒ jiù jì xù zū zhè jiān tào fáng。",
        "japanese": "大家さんが修繕義務を履行してくれるなら、私はこのワンルームを借り続けます。",
        "chunks": [
          "只要房東願意",
          "履行修繕義務",
          "我就繼續租這間套房"
        ],
        "hintText": "只要房東願意"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家餐廳承諾使用新鮮食材，但並沒有履行，所以客人越來越少。",
        "pinyin": "suī rán zhè jiā cān tīng chéng nuò shǐ yòng xīn xiān shí cái，dàn bìng méi yǒu lǚ xíng，suǒ yǐ kè rén yuè lái yuè shǎo。",
        "japanese": "このレストランは新鮮な食材を使うと約束したが、履行しなかったので、客はますます減っている。",
        "chunks": [
          "雖然這家餐廳承諾使用新鮮食材",
          "但並沒有履行",
          "所以客人越來越少"
        ],
        "hintText": "雖然這家餐廳承諾使用新鮮食材，但並沒有"
      }
    ]
  },
  {
    "id": "B-179",
    "band": "B",
    "targetWord": "忽視",
    "distractors": [
      "重視",
      "保護",
      "發現"
    ],
    "grammarNote": "「忽視（hū shì）」は重要性や存在を見落とす、軽視する、無視することを指します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然工作很忙，但是不能因為這樣就忽視家人的感受。",
        "pinyin": "suī rán gōng zuò hěn máng, dàn shì bù néng yīn wèi zhè yàng jiù hū shì jiā rén de gǎn shòu。",
        "japanese": "仕事が忙しいけれど、だからといって家族の気持ちを無視してはいけない。",
        "chunks": [
          "雖然工作很忙",
          "但是不能因為這樣",
          "就忽視家人的感受。"
        ],
        "hintText": "雖然工作很忙，但是不能因為這樣就"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為最近機車常常發不動，所以千萬不要忽視定期保養的重要性。",
        "pinyin": "yīn wèi zuì jìn jī chē cháng cháng fā bù dòng, suǒ yǐ qiān wàn bú yào hū shì dìng qī bǎo yǎng de zhòng yào xìng。",
        "japanese": "最近バイクがよくエンジンがかからないので、定期的なメンテナンスの重要性を決して無視してはいけない。",
        "chunks": [
          "因為最近機車常常發不動",
          "所以千萬不要",
          "忽視定期保養的重要性。"
        ],
        "hintText": "因為最近機車常常發不動，所以千萬不要"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要按時繳納健保費，就不用擔心被忽視醫療權益。",
        "pinyin": "zhǐ yào àn shí jiǎo nà jiàn bǎo fèi, jiù bú yòng dān xīn bèi hū shì yī liáo quán yì。",
        "japanese": "健康保険料を期限内に納めさえすれば、医療の権利を無視される心配はない。",
        "chunks": [
          "只要按時繳納健保費",
          "就不用擔心",
          "被忽視醫療權益。"
        ],
        "hintText": "只要按時繳納健保費，就不用擔心"
      }
    ]
  },
  {
    "id": "B-180",
    "band": "B",
    "targetWord": "揭露",
    "distractors": [
      "隱藏",
      "保護",
      "維持"
    ],
    "grammarNote": "「揭露（jiē lù）」は隠されている悪事や事実、秘密などを明るみに出す（暴く）ことを指します。",
    "bossReading": {
      "text": "調查報導先揭露問題細節，因此相關單位[ ? ]大家正視風險；若能提出更實用的做法，輿論就不只停在指責，而會開始討論怎麼修補。",
      "targetWord": "呼籲",
      "distractors": [
        "拒絕",
        "放棄",
        "要求"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "正解は「呼籲」（強く呼びかける）です。バッチ語彙の「揭露」「呼籲」「實用」を、事実を揭露→社会に呼籲→實用な対策提案へ、という流れで一文にまとめています。"
    },
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為鄰居長期亂丟垃圾，所以管委會終於揭露了監視器畫面，讓大家知道是誰幹的。",
        "pinyin": "yīn wèi lín jū cháng qī luàn diū lè sè, suǒ yǐ guǎn wěi huì zhōng yú jiē lù le jiān shì qì huà miàn, ràng dà jiā zhī dào shì shuí gàn de.",
        "japanese": "隣人が長期間ゴミを勝手に捨てていたので、管理委員会がついに監視カメラの映像を公開し、誰がやったのか皆に知らせた。",
        "chunks": [
          "因為鄰居長期亂丟垃圾",
          "所以管委會終於揭露了監視器畫面",
          "讓大家知道是誰幹的"
        ],
        "hintText": "因為鄰居長期亂丟垃圾，所以管委會終於"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然公司有內規，但是員工還是向勞工局揭露了主管的違法行為。",
        "pinyin": "suī rán gōng sī yǒu nèi guī, dàn shì yuán gōng hái shì xiàng láo gōng jú jiē lù le zhǔ guǎn de wéi fǎ xíng wéi.",
        "japanese": "会社には内部規定があるが、従業員はそれでも労働局に上司の違法行為を暴露した。",
        "chunks": [
          "雖然公司有內規",
          "但是員工還是向勞工局揭露了主管的違法行為"
        ],
        "hintText": "雖然公司有內規，但是員工還是"
      },
      {
        "situation": "人間関係・家族",
        "chinese": "只要他願意揭露真相，我們就不用再被蒙在鼓裡了。",
        "pinyin": "zhǐ yào tā yuàn yì jiē lù zhēn xiàng, wǒ men jiù bù yòng zài bèi méng zài gǔ lǐ le.",
        "japanese": "彼さえ真相を明かしてくれれば、私たちはもう騙されずに済むのに。",
        "chunks": [
          "只要他願意揭露真相",
          "我們就不用再被蒙在鼓裡了"
        ],
        "hintText": "只要他願意"
      }
    ]
  },
  {
    "id": "B-181",
    "band": "B",
    "targetWord": "實用",
    "distractors": [
      "複雜",
      "漂亮",
      "昂貴"
    ],
    "grammarNote": "「實用（shí yòng）」は実際の使用に適している、役に立つという意味です。日常会話からビジネスまで幅広く使われます。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這款手機功能很多，但最實用的還是導航和地圖，因為我常常迷路。",
        "pinyin": "suī rán zhè kuǎn shǒu jī gōng néng hěn duō, dàn zuì shí yòng de hái shì dǎo háng hé dì tú, yīn wèi wǒ cháng cháng mí lù.",
        "japanese": "このスマホは機能が多いけど、一番実用的なのはナビと地図だよ。なぜなら私はよく迷子になるから。",
        "chunks": [
          "雖然這款手機功能很多",
          "但最實用的還是導航和地圖",
          "因為我常常迷路"
        ],
        "hintText": "雖然這款手機功能很多，但最"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要把發票存在載具裡，就不用擔心弄丟，而且對帳時非常實用。",
        "pinyin": "zhǐ yào bǎ fā piào cún zài zài jù lǐ, jiù bù yòng dān xīn nòng diū, ér qiě duì zhàng shí fēi cháng shí yòng.",
        "japanese": "領収書をキャリアに保存しておけば、なくす心配がなくて、しかも帳簿合わせの時にすごく実用的だ。",
        "chunks": [
          "只要把發票存在載具裡",
          "就不用擔心弄丟",
          "而且對帳時非常實用"
        ],
        "hintText": "只要把發票存在載具裡，就不用擔心弄丟，而且對帳時"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為申請補助需要很多文件，所以把資料分類整理好會很實用，節省不少時間。",
        "pinyin": "yīn wèi shēn qǐng bǔ zhù xū yào hěn duō wén jiàn, suǒ yǐ bǎ zī liào fēn lèi zhěng lǐ hǎo huì hěn shí yòng, jié shěng bù shǎo shí jiān.",
        "japanese": "補助金申請にはたくさんの書類が必要なので、資料を分類整理しておくととても実用的で、時間をかなり節約できる。",
        "chunks": [
          "因為申請補助需要很多文件",
          "所以把資料分類整理好會很實用",
          "節省不少時間"
        ],
        "hintText": "因為申請補助需要很多文件，所以把資料分類整理好會"
      }
    ]
  },
  {
    "id": "B-182",
    "band": "B",
    "targetWord": "呼籲",
    "distractors": [
      "拒絕",
      "放棄",
      "解決"
    ],
    "grammarNote": "「呼籲（hū yù）」は政府や団体が社会や大衆に向かって行動を強く呼びかける、アピールすることを指すニュース用語です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然爸媽經常呼籲我們要早睡，但是因為工作太忙，還是常常熬夜。",
        "pinyin": "suī rán bà mā jīng cháng hū yù wǒ men yào zǎo shuì, dàn shì yīn wèi gōng zuò tài máng, hái shì cháng cháng áo yè.",
        "japanese": "両親はよく早く寝るように呼びかけているが、仕事が忙しすぎて、やはりよく夜更かししている。",
        "chunks": [
          "雖然爸媽經常",
          "呼籲我們要早睡",
          "但是因為工作太忙",
          "還是常常熬夜"
        ],
        "hintText": "雖然爸媽經常"
      },
      {
        "situation": "交通・移動",
        "problem": "生活トラブル",
        "chinese": "因為最近捷運事故頻傳，所以市政府呼籲民眾搭乘時要緊握扶手。",
        "pinyin": "yīn wèi zuì jìn jié yùn shì gù pín chuán, suǒ yǐ shì zhèng fǔ hū yù mín zhòng dā chéng shí yào jǐn wò fú shǒu.",
        "japanese": "最近地下鉄の事故が頻発しているので、市政府は乗車時に手すりをしっかり握るよう呼びかけている。",
        "chunks": [
          "因為最近捷運事故頻傳",
          "所以市政府呼籲民眾",
          "搭乘時要緊握扶手"
        ],
        "hintText": "因為最近捷運事故頻傳，所以市政府"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要健保卡遺失，醫院就會呼籲民眾盡快申請補發，以免影響就醫權益。",
        "pinyin": "zhǐ yào jiàn bǎo kǎ yí shī, yī yuàn jiù huì hū yù mín zhòng jǐn kuài shēn qǐng bǔ fā, yǐ miǎn yǐng xiǎng jiù yī quán yì.",
        "japanese": "健康保険証を紛失した場合、病院は早急に再発行を申請するよう呼びかけ、医療を受ける権利に影響が出ないようにしている。",
        "chunks": [
          "只要健保卡遺失",
          "醫院就會呼籲民眾",
          "盡快申請補發",
          "以免影響就醫權益"
        ],
        "hintText": "只要健保卡遺失，醫院就會"
      }
    ]
  },
  {
    "id": "B-183",
    "band": "B",
    "targetWord": "落後",
    "distractors": [
      "超前",
      "領先",
      "完成"
    ],
    "grammarNote": "「落後（luò hòu）」は基準や他者、あるいはスケジュールよりも後ろに取り残される、遅れることを指します。",
    "bossReading": {
      "text": "進度落後時，團隊常在會議上激烈辯論責任歸屬，因此情緒升高卻解不了問題；若一直拖延不調整策略，產品最終只會走向[ ? ]，市場也會轉向新選擇。",
      "targetWord": "衰退",
      "distractors": [
        "成長",
        "繁榮",
        "擴張"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「走向[ ? ]」は“勢いが弱くなる/縮小する”意味が必要で「衰退」が正解です。「落後」は進捗が遅れること、「辯論」は激しい議論で、遅延→責任の辯論→改善しないと衰退、という因果が自然です。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我哥哥很努力，但他的成績還是落後於班上其他同學。",
        "pinyin": "suī rán wǒ gē ge hěn nǔ lì，dàn tā de chéng jī hái shì luò hòu yú bān shàng qí tā tóng xué。",
        "japanese": "兄はとても努力しているけれど、成績はクラスの他の生徒にまだ遅れをとっています。",
        "chunks": [
          "雖然我哥哥很努力",
          "但他的成績還是落後於班上其他同學"
        ],
        "hintText": "雖然我哥哥很努力，但他的成績還是"
      },
      {
        "situation": "交通・移動",
        "problem": "因為機車拋錨，所以我上班的時間落後了半小時。",
        "chinese": "因為機車拋錨，所以我上班的時間落後了半小時。",
        "pinyin": "yīn wèi jī chē pāo máo，suǒ yǐ wǒ shàng bān de shí jiān luò hòu le bàn xiǎo shí。",
        "japanese": "バイクが故障したので、出勤時間が30分遅れました。",
        "chunks": [
          "因為機車拋錨",
          "所以我上班的時間落後了半小時"
        ],
        "hintText": "因為機車拋錨，所以我上班的時間"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要健保卡一弄丟，申請補發的程序就會落後好幾天。",
        "pinyin": "zhǐ yào jiàn bǎo kǎ yī nòng diū，shēn qǐng bǔ fā de chéng xù jiù huì luò hòu hǎo jǐ tiān。",
        "japanese": "健康保険証をなくしてしまうと、再発行の手続きが数日遅れます。",
        "chunks": [
          "只要健保卡一弄丟",
          "申請補發的程序就會落後好幾天"
        ],
        "hintText": "只要健保卡一弄丟，申請補發的程序就會"
      }
    ]
  },
  {
    "id": "B-184",
    "band": "B",
    "targetWord": "辯論",
    "distractors": [
      "妥協",
      "合作",
      "放棄"
    ],
    "grammarNote": "「辯論（biàn lùn）」は互いに自分の正しさを主張し合う論争・ディベートを指します。政治やニュースの文脈で頻出します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我和我哥常常因為小事辯論，但是我們感情還是很好。",
        "pinyin": "suī rán wǒ hé wǒ gē cháng cháng yīn wèi xiǎo shì biàn lùn，dàn shì wǒ men gǎn qíng hái shì hěn hǎo。",
        "japanese": "私と兄はよく些細なことで議論しますが、それでも仲は良いです。",
        "chunks": [
          "雖然我和我哥常常因為小事",
          "辯論",
          "，但是我們感情還是很好。"
        ],
        "hintText": "雖然我和我哥常常因為小事"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為鄰居為了停車位一直辯論，所以最後只好報警處理。",
        "pinyin": "yīn wèi lín jū wèi le tíng chē wèi yī zhí biàn lùn，suǒ yǐ zuì hòu zhǐ hǎo bào jǐng chǔ lǐ。",
        "japanese": "隣人が駐車スペースをめぐってずっと議論していたので、結局警察に通報しました。",
        "chunks": [
          "因為鄰居為了停車位一直",
          "辯論",
          "，所以最後只好報警處理。"
        ],
        "hintText": "因為鄰居為了停車位一直"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要同事們在會議上繼續辯論，我們就無法達成共識。",
        "pinyin": "zhǐ yào tóng shì men zài huì yì shàng jì xù biàn lùn，wǒ men jiù wú fǎ dá chéng gòng shì。",
        "japanese": "同僚たちが会議で議論を続ければ、私たちは合意に達することができません。",
        "chunks": [
          "只要同事們在會議上繼續",
          "辯論",
          "，我們就無法達成共識。"
        ],
        "hintText": "只要同事們在會議上繼續"
      }
    ]
  },
  {
    "id": "B-185",
    "band": "B",
    "targetWord": "衰退",
    "distractors": [
      "成長",
      "繁榮",
      "擴張"
    ],
    "grammarNote": "「衰退（shuāi tuì）」は、勢い・規模・経済状況などがだんだん弱くなる（衰える）ことを表す経済ニュースの必須単語です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為阿公年紀大了，身體機能逐漸衰退，所以我們要更常回去陪他。",
        "pinyin": "yīn wèi ā gōng nián jì dà le，shēn tǐ jī néng zhú jiàn shuāi tuì，suǒ yǐ wǒ men yào gèng cháng huí qù péi tā。",
        "japanese": "おじいちゃんが年をとって身体機能が衰えてきたので、もっと頻繁に帰って付き添わなければなりません。",
        "chunks": [
          "因為阿公年紀大了",
          "身體機能逐漸衰退",
          "所以我們要更常回去陪他"
        ],
        "hintText": "因為阿公年紀大了，身體機能"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然那家餐廳的生意已經衰退，但只要推出新的優惠活動，還是能吸引客人。",
        "pinyin": "suī rán nà jiā cān tīng de shēng yì yǐ jīng shuāi tuì，dàn zhǐ yào tuī chū xīn de yōu huì huó dòng，hái shì néng xī yǐn kè rén。",
        "japanese": "あのレストランは客足が衰えているが、新しい割引キャンペーンを打ち出せば、まだ客を呼び寄せることができる。",
        "chunks": [
          "雖然那家餐廳的生意已經衰退",
          "但只要推出新的優惠活動",
          "還是能吸引客人"
        ],
        "hintText": "雖然那家餐廳的生意"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為捷運的運量衰退，所以公司決定減少離峰時段的班次。",
        "pinyin": "yīn wèi jié yùn de yùn liàng shuāi tuì，suǒ yǐ gōng sī jué dìng jiǎn shǎo lí fēng shí duàn de bān cì。",
        "japanese": "MRTの輸送量が減少したため、会社はオフピーク時の便数を減らすことに決めた。",
        "chunks": [
          "因為捷運的運量衰退",
          "所以公司決定減少離峰時段的班次"
        ],
        "hintText": "因為捷運的運量"
      }
    ]
  },
  {
    "id": "B-186",
    "band": "B",
    "targetWord": "惡性循環",
    "distractors": [
      "良性循環",
      "轉機",
      "平衡"
    ],
    "grammarNote": "「惡性循環（è xìng xún huán）」は、悪い結果が原因となってさらに状況を悪化させる“悪循環”を指します。「陷入（陥る）」という動詞とセットで使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為爸媽一直吵架，所以家庭氣氛很差，小孩也跟著情緒不穩，最後陷入了惡性循環。",
        "pinyin": "yīn wèi bà mā yī zhí chǎo jià, suǒ yǐ jiā tíng qì fēn hěn chà, xiǎo hái yě gēn zhe qíng xù bù wěn, zuì hòu xiàn rù le è xìng xún huán.",
        "japanese": "両親がずっと喧嘩しているので、家庭の雰囲気が悪く、子供も情緒不安定になり、最終的に悪循環に陥った。",
        "chunks": [
          "因為爸媽一直吵架",
          "所以家庭氣氛很差",
          "小孩也跟著情緒不穩",
          "最後陷入了",
          "惡性循環"
        ],
        "hintText": "因為爸媽一直吵架，所以家庭氣氛很差，小孩也跟著情緒不穩，最後陷入了"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "這家店因為服務態度不好，客人越來越少，業績變差後又更不想改進，陷入了惡性循環。",
        "pinyin": "zhè jiā diàn yīn wèi fú wù tài dù bù hǎo, kè rén yuè lái yuè shǎo, yè jì biàn chà hòu yòu gèng bù xiǎng gǎi jìn, xiàn rù le è xìng xún huán.",
        "japanese": "この店はサービス態度が悪いため、客がどんどん減り、業績が悪くなるとさらに改善しようとせず、悪循環に陥っている。",
        "chunks": [
          "這家店因為服務態度不好",
          "客人越來越少",
          "業績變差後又更不想改進",
          "陷入了",
          "惡性循環"
        ],
        "hintText": "這家店因為服務態度不好，客人越來越少，業績變差後又更不想改進，陷入了"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要熬夜就會精神不好，精神不好又更容易失眠，最後陷入了惡性循環。",
        "pinyin": "zhǐ yào áo yè jiù huì jīng shén bù hǎo, jīng shén bù hǎo yòu gèng róng yì shī mián, zuì hòu xiàn rù le è xìng xún huán.",
        "japanese": "夜更かしすると体調が悪くなり、体調が悪いとさらに不眠になりやすく、最後には悪循環に陥る。",
        "chunks": [
          "只要熬夜就會精神不好",
          "精神不好又更容易失眠",
          "最後陷入了",
          "惡性循環"
        ],
        "hintText": "只要熬夜就會精神不好，精神不好又更容易失眠，最後陷入了"
      }
    ]
  },
  {
    "id": "B-187",
    "band": "B",
    "targetWord": "夕陽產業",
    "distractors": [
      "新興產業",
      "主流",
      "趨勢"
    ],
    "grammarNote": "「夕陽產業（xī yáng chǎn yè）」は成長が止まり、衰退傾向にある“斜陽産業”を指すビジネス用語です。",
    "bossReading": {
      "text": "若只顧省錢而不投資人才，就容易形成惡性循環，因此原本的優勢也會慢慢消失；一旦被貼上[ ? ]標籤，外界信心下滑，資源更難回流。",
      "targetWord": "夕陽產業",
      "distractors": [
        "新興產業",
        "主流",
        "趨勢"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "空欄は“成長が止まり衰退傾向の業界”を表す「夕陽產業」が正解です。バッチ語彙の「惡性循環」「優勢」「夕陽產業」を、悪循環で優勢が削られる→夕陽産業扱いになる、という因果で自然に繋げています。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然很多人說印刷廠是夕陽產業，但我爸爸還是堅持做了三十年。",
        "pinyin": "suī rán hěn duō rén shuō yìn shuā chǎng shì xī yáng chǎn yè，dàn wǒ bà ba hái shì jiān chí zuò le sān shí nián。",
        "japanese": "多くの人は印刷工場は斜陽産業だと言うけれど、私の父はそれでも30年間やり続けています。",
        "chunks": [
          "雖然很多人說",
          "印刷廠是夕陽產業",
          "但我爸爸還是堅持做了三十年"
        ],
        "hintText": "雖然很多人說"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為光碟出租店已經變成夕陽產業，所以老闆決定轉型賣咖啡。",
        "pinyin": "yīn wèi guāng dié chū zū diàn yǐ jīng biàn chéng xī yáng chǎn yè，suǒ yǐ lǎo bǎn jué dìng zhuǎn xíng mài kā fēi。",
        "japanese": "DVDレンタル店はもう斜陽産業になってしまったので、店主はコーヒーを売ることに転業することにしました。",
        "chunks": [
          "因為光碟出租店",
          "已經變成夕陽產業",
          "所以老闆決定轉型賣咖啡"
        ],
        "hintText": "因為光碟出租店"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要傳統書店繼續把自己當成夕陽產業，就永遠找不到新的出路。",
        "pinyin": "zhǐ yào chuán tǒng shū diàn jì xù bǎ zì jǐ dāng chéng xī yáng chǎn yè，jiù yǒng yuǎn zhǎo bù dào xīn de chū lù。",
        "japanese": "伝統的な書店が自分たちを斜陽産業だと思い続ける限り、永遠に新たな活路は見つからないでしょう。",
        "chunks": [
          "只要傳統書店",
          "繼續把自己當成夕陽產業",
          "就永遠找不到新的出路"
        ],
        "hintText": "只要傳統書店"
      }
    ]
  },
  {
    "id": "B-188",
    "band": "B",
    "targetWord": "優勢",
    "distractors": [
      "弱點",
      "危機",
      "劣勢"
    ],
    "grammarNote": "「優勢（yōu shì）」は、競争や比較において有利な点・強みを表します。「絕對優勢（絶対的優位）」などの形でもよく使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他年紀比較小，但在溝通能力上卻佔有絕對優勢。",
        "pinyin": "suī rán tā nián jì bǐ jiào xiǎo, dàn zài gōu tōng néng lì shàng què zhàn yǒu jué duì yōu shì.",
        "japanese": "彼は年齢が比較的若いけれど、コミュニケーション能力では絶対的な優位を占めている。",
        "chunks": [
          "雖然他年紀比較小",
          "但在溝通能力上",
          "卻佔有絕對優勢"
        ],
        "hintText": "雖然他年紀比較小，但在溝通能力上卻佔有"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店食材新鮮，所以比起其他餐廳更有競爭優勢。",
        "pinyin": "yīn wèi zhè jiā diàn shí cái xīn xiān, suǒ yǐ bǐ qǐ qí tā cān tīng gèng yǒu jìng zhēng yōu shì.",
        "japanese": "この店は食材が新鮮なので、他のレストランよりも競争優位がある。",
        "chunks": [
          "因為這家店食材新鮮",
          "所以比起其他餐廳",
          "更有競爭優勢"
        ],
        "hintText": "因為這家店食材新鮮，所以比起其他餐廳更有"
      },
      {
        "situation": "交通・移動",
        "chosen": true,
        "chinese": "只要搭捷運去機場，就能避開塞車的劣勢，轉為時間上的優勢。",
        "pinyin": "zhǐ yào dā jié yùn qù jī chǎng, jiù néng bì kāi sāi chē de liè shì, zhuǎn wéi shí jiān shàng de yōu shì.",
        "japanese": "MRTで空港に行きさえすれば、渋滞の不利を避けて時間的な優位に変わることができる。",
        "chunks": [
          "只要搭捷運去機場",
          "就能避開塞車的劣勢",
          "轉為時間上的優勢"
        ],
        "hintText": "只要搭捷運去機場，就能避開塞車的劣勢，轉為"
      }
    ]
  },
  {
    "id": "B-189",
    "band": "B",
    "targetWord": "票房",
    "distractors": [
      "成本",
      "收視率",
      "評價"
    ],
    "grammarNote": "「票房（piào fáng）」は映画などの“興行収入”を指します。「票房毒藥（興行収入を悪化させる俳優）」のような面白い派生語もあります。",
    "bossReading": {
      "text": "行銷團隊先整合平台資源，因此宣傳能同步上線並帶來大量流量；觀眾討論一熱，票房就容易被推高。若資料分散無法[ ? ]，成效常會被稀釋。",
      "targetWord": "整合",
      "distractors": [
        "分散",
        "拆解",
        "忽略"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "這裡是需要“匯集與統一”意思的名詞，因此「整合」為正解。將「票房」、「流量」、「整合」這些詞彙，透過宣傳帶來流量→推高票房→無法整合就會效果不彰的脈絡自然串聯。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然那部電影的票房很高，但是我覺得劇情很無聊。",
        "pinyin": "suī rán nà bù diàn yǐng de piào fáng hěn gāo, dàn shì wǒ jué dé jù qíng hěn wú liáo.",
        "japanese": "あの映画は興行収入が高いけど、私はストーリーがつまらないと思う。",
        "chunks": [
          "雖然那部電影的票房很高",
          "但是我覺得劇情很無聊"
        ],
        "hintText": "雖然那部電影的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的口碑很好，所以他們的票房一直都很不錯。",
        "pinyin": "yīn wèi zhè jiā diàn de kǒu bēi hěn hǎo, suǒ yǐ tā men de piào fáng yī zhí dōu hěn bù cuò.",
        "japanese": "この店の評判がいいので、彼らの興行収入はいつも良い。",
        "chunks": [
          "因為這家店的口碑很好",
          "所以他們的票房一直都很不錯"
        ],
        "hintText": "因為這家店的口碑很好，所以他們的"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要票房不好，電影院就可能會減少場次。",
        "pinyin": "zhǐ yào piào fáng bù hǎo, diàn yǐng yuàn jiù kě néng huì jiǎn shǎo chǎng cì.",
        "japanese": "興行収入が悪ければ、映画館は上映回数を減らすかもしれない。",
        "chunks": [
          "只要票房不好",
          "電影院就可能會減少場次"
        ],
        "hintText": "只要"
      }
    ]
  },
  {
    "id": "B-190",
    "band": "B",
    "targetWord": "流量",
    "distractors": [
      "品質",
      "內容",
      "口碑"
    ],
    "grammarNote": "「流量（liú liàng）」は本来は交通量などを指しますが、現代ではネット上の「アクセス数・トラフィック・PV」を表す最も重要な単語です。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家飲料店最近在網路上流量很高，所以每天都排滿了人。",
        "pinyin": "yīn wèi zhè jiā yǐn liào diàn zuì jìn zài wǎng lù shàng liú liàng hěn gāo, suǒ yǐ měi tiān dōu pái mǎn le rén.",
        "japanese": "この飲料店は最近ネットでアクセス数が多いので、毎日行列ができています。",
        "chunks": [
          "因為這家飲料店最近在網路上流量很高",
          "所以每天都排滿了人"
        ],
        "hintText": "因為這家飲料店最近在網路上"
      },
      {
        "situation": "交通・移動",
        "grammarNote": "「流量」は交通量の意味でも使えます。",
        "chinese": "雖然這條路的車流量很大，但是騎機車還是比較快。",
        "pinyin": "suī rán zhè tiáo lù de chē liú liàng hěn dà, dàn shì qí jī chē hái shì bǐ jiào kuài.",
        "japanese": "この道路は交通量が多いですが、バイクの方がまだ速いです。",
        "chunks": [
          "雖然這條路的車流量很大",
          "但是騎機車還是比較快"
        ],
        "hintText": "雖然這條路的車流量很大，但是"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要網站流量突然暴增，伺服器就有可能會當機。",
        "pinyin": "zhǐ yào wǎng zhàn liú liàng tū rán bào zēng, sì fú qì jiù yǒu kě néng huì dàng jī.",
        "japanese": "ウェブサイトのアクセス数が急増すると、サーバーがダウンする可能性があります。",
        "chunks": [
          "只要網站流量突然暴增",
          "伺服器就有可能會當機"
        ],
        "hintText": "只要網站流量突然暴增"
      }
    ]
  },
  {
    "id": "B-191",
    "band": "B",
    "targetWord": "整合",
    "distractors": [
      "分散",
      "拆解",
      "忽略"
    ],
    "grammarNote": "「整合（zhěng hé）」は、分散している複数のものを「まとめて統合・集約する」ことを表す、ビジネスやDX化の文脈で必須の動詞です。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家百貨公司整合了會員點數和發票，所以只要帶手機就可以消費。",
        "pinyin": "yīn wèi zhè jiā bǎi huò gōng sī zhěng hé le huì yuán diǎn shù hé fā piào，suǒ yǐ zhǐ yào dài shǒu jī jiù kě yǐ xiāo fèi。",
        "japanese": "このデパートは会員ポイントとレシートを統合したので、携帯だけ持っていけば買い物ができます。",
        "chunks": [
          "因為這家百貨公司",
          "整合了",
          "會員點數和發票",
          "所以",
          "只要帶手機",
          "就可以消費"
        ],
        "hintText": "因為這家百貨公司"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然捷運和公車的票價系統已經整合，但是轉乘優惠還是有限制。",
        "pinyin": "suī rán jié yùn hé gōng chē de piào jià xì tǒng yǐ jīng zhěng hé，dàn shì zhuǎn chéng yōu huì hái shì yǒu xiàn zhì。",
        "japanese": "地下鉄とバスの運賃システムは統合されましたが、乗り継ぎ割引にはまだ制限があります。",
        "chunks": [
          "雖然捷運和公車的票價系統",
          "已經整合",
          "但是",
          "轉乘優惠",
          "還是有限制"
        ],
        "hintText": "雖然捷運和公車的票價系統"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為公司整合了各部門的請假系統，所以我們只要用一個APP就能申請。",
        "pinyin": "yīn wèi gōng sī zhěng hé le gè bù mén de qǐng jià xì tǒng，suǒ yǐ wǒ men zhǐ yào yòng yī gè APP jiù néng shēn qǐng。",
        "japanese": "会社が各部門の休暇申請システムを統合したので、一つのアプリで申請できます。",
        "chunks": [
          "因為公司",
          "整合了",
          "各部門的請假系統",
          "所以",
          "我們只要用一個APP",
          "就能申請"
        ],
        "hintText": "因為公司"
      }
    ]
  },
  {
    "id": "B-192",
    "band": "B",
    "targetWord": "願景",
    "distractors": [
      "現況",
      "困境",
      "限制"
    ],
    "grammarNote": "「願景（yuàn jǐng）」は、企業や組織が将来こうありたいという“ビジョン”や“長期的な展望”を表すフォーマルな言葉です。",
    "bossReading": {
      "text": "領導者先描繪清楚[ ? ]，因此面對外部角力時也不會慌；即使團隊遇到各種困擾，只要方向一致，就能穩住步伐繼續前進。",
      "targetWord": "願景",
      "distractors": [
        "現況",
        "困境",
        "限制"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "這個題組由「願景、角力、困擾」三詞組成。因為需要一個代表“未來藍圖”的名詞，因此「願景」最為合適。「角力」指勢力拉扯、「困擾」為煩心事，描繪有了願景後，即使遭遇外部角力或內部困擾都能前進，語意最自然。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們家的經濟狀況不太好，但父母對未來的願景還是很樂觀。",
        "pinyin": "suī rán wǒ men jiā de jīng jì zhuàng kuàng bù tài hǎo, dàn fù mǔ duì wèi lái de yuàn jǐng hái shì hěn lè guān.",
        "japanese": "うちの家計はあまり良くないけれど、両親は将来のビジョンに対してとても楽観的です。",
        "chunks": [
          "雖然我們家的經濟狀況不太好",
          "但父母對未來的願景還是很樂觀"
        ],
        "hintText": "雖然我們家的經濟狀況不太好，但父母對未來的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的老闆很有願景，所以即使價格偏高，客人還是願意支持。",
        "pinyin": "yīn wèi zhè jiā cān tīng de lǎo bǎn hěn yǒu yuàn jǐng, suǒ yǐ jí shǐ jià gé piān gāo, kè rén hái shì yuàn yì zhī chí.",
        "japanese": "このレストランのオーナーはビジョンがあるので、値段が少々高くてもお客さんは応援してくれます。",
        "chunks": [
          "因為這家餐廳的老闆很有願景",
          "所以即使價格偏高",
          "客人還是願意支持"
        ],
        "hintText": "因為這家餐廳的老闆很有願景，所以即使價格偏高，"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要我們團隊有共同的願景，就能在明年順利推動這個專案。",
        "pinyin": "zhǐ yào wǒ men tuán duì yǒu gòng tóng de yuàn jǐng, jiù néng zài míng nián shùn lì tuī dòng zhè ge zhuān àn.",
        "japanese": "私たちのチームに共通のビジョンがあれば、来年このプロジェクトをスムーズに進められます。",
        "chunks": [
          "只要我們團隊有共同的願景",
          "就能在明年順利推動這個專案"
        ],
        "hintText": "只要我們團隊有共同的願景，就能在明年順利推動這個專案。"
      }
    ]
  },
  {
    "id": "B-193",
    "band": "B",
    "targetWord": "角力",
    "distractors": [
      "合作",
      "協調",
      "妥協"
    ],
    "grammarNote": "「角力（jiǎo lì）」は、元々はレスリングや相撲のような力比べを意味しますが、転じて“勢力争い・駆け引き”を表すニュース頻出表現です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他們是兄弟，但為了家產的分配，還是免不了要進行一場家庭角力。",
        "pinyin": "suī rán tā men shì xiōng dì，dàn wèi le jiā chǎn de fēn pèi，hái shì miǎn bù liǎo yào jìn xíng yī chǎng jiā tíng jiǎo lì。",
        "japanese": "彼らは兄弟ですが、家産の分配のために、やはり家庭内での駆け引きを避けられません。",
        "chunks": [
          "雖然他們是兄弟",
          "但為了家產的分配",
          "還是免不了要進行一場家庭角力"
        ],
        "hintText": "雖然他們是兄弟，但為了家產的分配，還是免不了要進行一場家庭"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這條街上有太多同性質的飲料店，所以各家都在進行價格角力來搶客人。",
        "pinyin": "yīn wèi zhè tiáo jiē shàng yǒu tài duō tóng xìng zhì de yǐn liào diàn，suǒ yǐ gè jiā dōu zài jìn xíng jià gé jiǎo lì lái qiǎng kè rén。",
        "japanese": "この通りには同じような飲み物屋が多すぎるので、各店が値引き合戦で客を奪い合っています。",
        "chunks": [
          "因為這條街上有太多同性質的飲料店",
          "所以各家都在進行價格角力",
          "來搶客人"
        ],
        "hintText": "因為這條街上有太多同性質的飲料店，所以各家都在進行價格"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要部門主管之間持續進行權力角力，公司的決策效率就會受到影響。",
        "pinyin": "zhǐ yào bù mén zhǔ guǎn zhī jiān chí xù jìn xíng quán lì jiǎo lì，gōng sī de jué cè xiào lǜ jiù huì shòu dào yǐng xiǎng。",
        "japanese": "部門の主管同士が権力闘争を続ける限り、会社の意思決定の効率は影響を受けます。",
        "chunks": [
          "只要部門主管之間持續進行權力角力",
          "公司的決策效率",
          "就會受到影響"
        ],
        "hintText": "只要部門主管之間持續進行權力"
      }
    ]
  },
  {
    "id": "B-194",
    "band": "B",
    "targetWord": "困擾",
    "distractors": [
      "幫助",
      "安慰",
      "鼓勵"
    ],
    "grammarNote": "「困擾（kùn rǎo）」は、人を「悩ませる・困らせる（動詞）」、または「困りごと・迷惑・トラブル（名詞）」を表します。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為樓上鄰居經常在半夜洗澡，所以水流聲讓我感到非常困擾。",
        "pinyin": "yīn wèi lóu shàng lín jū jīng cháng zài bàn yè xǐ zǎo, suǒ yǐ shuǐ liú shēng ràng wǒ gǎn dào fēi cháng kùn rǎo.",
        "japanese": "上の階の隣人がよく夜中にシャワーを浴びるので、水の流れる音がとても迷惑です。",
        "chunks": [
          "因為樓上鄰居經常在半夜洗澡",
          "所以水流聲讓我感到",
          "非常困擾"
        ],
        "hintText": "因為樓上鄰居經常在半夜洗澡，所以水流聲讓我感到"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然捷運站離我家很近，但是尖峰時間的人潮還是造成不少困擾。",
        "pinyin": "suī rán jié yùn zhàn lí wǒ jiā hěn jìn, dàn shì jiān fēng shí jiān de rén cháo hái shì zào chéng bù shǎo kùn rǎo.",
        "japanese": "MRTの駅は家から近いですが、ラッシュ時の人混みはかなり迷惑です。",
        "chunks": [
          "雖然捷運站離我家很近",
          "但是尖峰時間的人潮",
          "還是造成不少困擾"
        ],
        "hintText": "雖然捷運站離我家很近，但是尖峰時間的人潮"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要店員結帳時忘了給我發票，我就會覺得很困擾。",
        "pinyin": "zhǐ yào diàn yuán jié zhàng shí wàng le gěi wǒ fā piào, wǒ jiù huì jué de hěn kùn rǎo.",
        "japanese": "店員が会計時にレシートをくれないだけで、とても困ります。",
        "chunks": [
          "只要店員結帳時忘了給我發票",
          "我就會覺得",
          "很困擾"
        ],
        "hintText": "只要店員結帳時忘了給我發票，我就會覺得"
      }
    ]
  },
  {
    "id": "B-195",
    "band": "B",
    "targetWord": "契機",
    "distractors": [
      "原因",
      "結果",
      "阻礙"
    ],
    "grammarNote": "「契機（qì jī）」は、物事が大きく動き出す“転機・きっかけ・チャンス”を表す、少し改まった（書面語的な）表現です。",
    "bossReading": {
      "text": "面對挫折別太悲觀，因此他把這次失敗當作重新出發的[ ? ]；後來用自己的軟實力累積信任，才慢慢把路走穩。",
      "targetWord": "契機",
      "distractors": [
        "原因",
        "結果",
        "阻礙"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "空欄是需要“轉機/機會”含義的名詞，所以填「契機」最正確。這裡將「悲觀」、「軟實力」、「契機」結合，呈現出不要悲觀→將失敗化為契機→依靠軟實力累積信任的積極故事。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然爸媽經常吵架，但這次他們為了我的學費問題，反而成為好好溝通的契機。",
        "pinyin": "suī rán bà mā jīng cháng chǎo jià, dàn zhè cì tā men wèi le wǒ de xué fèi wèn tí, fǎn ér chéng wéi hǎo hǎo gōu tōng de qì jī.",
        "japanese": "両親はよく喧嘩するけど、今回は私の学費の問題のために、かえってちゃんと話し合うきっかけになった。",
        "chunks": [
          "雖然爸媽經常吵架",
          "但這次他們為了我的學費問題",
          "反而成為好好溝通的契機"
        ],
        "hintText": "雖然爸媽經常吵架，但這次他們為了我的學費問題，反而成為"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為那家飲料店常常開錯發票，所以客人投訴反而成為他們改善服務的契機。",
        "pinyin": "yīn wèi nà jiā yǐn liào diàn cháng cháng kāi cuò fā piào, suǒ yǐ kè rén tóu sù fǎn ér chéng wéi tā men gǎi shàn fú wù de qì jī.",
        "japanese": "あの飲料店はよく領収書を間違えるので、お客さんの苦情がかえってサービス改善のきっかけになった。",
        "chunks": [
          "因為那家飲料店常常開錯發票",
          "所以客人投訴",
          "反而成為他們改善服務的契機"
        ],
        "hintText": "因為那家飲料店常常開錯發票，所以客人投訴反而成為"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要公司願意補助員工進修，這次的績效檢討就會成為大家提升能力的契機。",
        "pinyin": "zhǐ yào gōng sī yuàn yì bǔ zhù yuán gōng jìn xiū, zhè cì de jī xiào jiǎn tǎo jiù huì chéng wéi dà jiā tí shēng néng lì de qì jī.",
        "japanese": "会社が進学補助をしてくれれば、今回の業績評価がみんなの能力向上のきっかけになる。",
        "chunks": [
          "只要公司願意補助員工進修",
          "這次的績效檢討",
          "就會成為大家提升能力的契機"
        ],
        "hintText": "只要公司願意補助員工進修，這次的績效檢討就會成為"
      }
    ]
  },
  {
    "id": "B-196",
    "band": "B",
    "targetWord": "軟實力",
    "distractors": [
      "硬實力",
      "影響力",
      "競爭力"
    ],
    "grammarNote": "「軟實力（ruǎn shí lì）」は、軍事力や経済力ではなく、文化・価値観・魅力などによる“ソフトパワー”を指す時事用語です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我媽媽不太會用網路，但是她常常跟我說，待人親切就是一種軟實力。",
        "pinyin": "suī rán wǒ mā ma bú tài huì yòng wǎng lù，dàn shì tā cháng cháng gēn wǒ shuō，dài rén qīn qiè jiù shì yī zhǒng ruǎn shí lì。",
        "japanese": "母はネットがあまり使えないけれど、人に親切にすることがソフトパワーだとよく言います。",
        "chunks": [
          "雖然我媽媽不太會用網路",
          "但是她常常跟我說",
          "待人親切就是一種軟實力"
        ],
        "hintText": "雖然我媽媽不太會用網路，但是她常常跟我說，"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家飲料店的服務態度很好，所以他們用軟實力吸引了很多回頭客。",
        "pinyin": "yīn wèi zhè jiā yǐn liào diàn de fú wù tài dù hěn hǎo，suǒ yǐ tā men yòng ruǎn shí lì xī yǐn le hěn duō huí tóu kè。",
        "japanese": "この飲料店はサービス態度が良いので、ソフトパワーで多くのリピーターを引きつけています。",
        "chunks": [
          "因為這家飲料店的服務態度很好",
          "所以他們用軟實力吸引了很多回頭客"
        ],
        "hintText": "因為這家飲料店的服務態度很好，所以他們用"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然鄰居的機車常常亂停，但是只要我們用溝通的方式解決，就能展現軟實力。",
        "pinyin": "suī rán lín jū de jī chē cháng cháng luàn tíng，dàn shì zhǐ yào wǒ men yòng gōu tōng de fāng shì jiě jué，jiù néng zhǎn xiàn ruǎn shí lì。",
        "japanese": "隣のバイクがよく無茶な駐車をしますが、コミュニケーションで解決すればソフトパワーを発揮できます。",
        "chunks": [
          "雖然鄰居的機車常常亂停",
          "但是只要我們用溝通的方式解決",
          "就能展現軟實力"
        ],
        "hintText": "雖然鄰居的機車常常亂停，但是只要我們用溝通的方式解決，就能展現"
      }
    ]
  },
  {
    "id": "B-197",
    "band": "B",
    "targetWord": "悲觀",
    "distractors": [
      "樂觀",
      "自信",
      "期待"
    ],
    "grammarNote": "「悲觀（bēi guān）」は、物事を悪い方向に見がちな“悲観的”な見方を表します。対義語の「樂觀（楽観的）」と共に頻出します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他最近找工作不太順利，但是他對未來並不悲觀，因為他覺得只要努力就會有機會。",
        "pinyin": "suī rán tā zuì jìn zhǎo gōng zuò bù tài shùn lì, dàn shì tā duì wèi lái bìng bù bēi guān, yīn wèi tā jué de zhǐ yào nǔ lì jiù huì yǒu jī huì.",
        "japanese": "彼は最近仕事探しがうまくいっていないが、未来に対して悲観的ではなく、努力すればチャンスがあると思っている。",
        "chunks": [
          "雖然他最近找工作不太順利",
          "但是他對未來並不悲觀",
          "因為他覺得只要努力就會有機會"
        ],
        "hintText": "雖然他最近找工作不太順利，但是他對未來"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為捷運又故障了，所以我對今天準時上班感到悲觀，可能又要遲到了。",
        "pinyin": "yīn wèi jié yùn yòu gù zhàng le, suǒ yǐ wǒ duì jīn tiān zhǔn shí shàng bān gǎn dào bēi guān, kě néng yòu yào chí dào le.",
        "japanese": "地下鉄がまた故障したので、今日定時に出勤できるか悲観的で、また遅刻しそうだ。",
        "chunks": [
          "因為捷運又故障了",
          "所以我對今天準時上班感到悲觀",
          "可能又要遲到了"
        ],
        "hintText": "因為捷運又故障了，所以我對今天準時上班"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要健保卡不見了，我就對補辦的速度感到悲觀，因為上次等了兩個禮拜。",
        "pinyin": "zhǐ yào jiàn bǎo kǎ bú jiàn le, wǒ jiù duì bǔ bàn de sù dù gǎn dào bēi guān, yīn wèi shàng cì děng le liǎng gè lǐ bài.",
        "japanese": "健康保険証をなくすと、再発行のスピードに悲観的になる。前回2週間待ったから。",
        "chunks": [
          "只要健保卡不見了",
          "我就對補辦的速度感到悲觀",
          "因為上次等了兩個禮拜"
        ],
        "hintText": "只要健保卡不見了，我就對補辦的速度"
      }
    ]
  },
  {
    "id": "B-198",
    "band": "B",
    "targetWord": "民主化",
    "distractors": [
      "現代化",
      "工業化",
      "全球化"
    ],
    "grammarNote": "「民主化（mín zhǔ huà）」は、政治や社会制度が民主的な方向へ変化することを表します。台湾の歴史を語る上で欠かせないキーワードです。",
    "bossReading": {
      "text": "在多元經濟體裡，公共議題常被大家津津樂道，因此教育普及更能推動社會[ ? ]，讓更多人願意參與討論與監督。",
      "targetWord": "民主化",
      "distractors": [
        "現代化",
        "工業化",
        "全球化"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "空欄は“社会制度が民主的な方向へ変化すること”を表す「民主化」が正解です。バッチ語彙の「經濟體」「津津樂道」「民主化」を、経済体の中で話題が繰り返し語られる→教育普及→民主化促進、という流れで自然に統合しています。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我阿公以前很保守，但是因為台灣的民主化，他現在也會跟我們討論政治了。",
        "pinyin": "suī rán wǒ ā gōng yǐ qián hěn bǎo shǒu，dàn shì yīn wèi tái wān de mín zhǔ huà，tā xiàn zài yě huì gēn wǒ men tǎo lùn zhèng zhì le。",
        "japanese": "私の祖父は以前はとても保守的でしたが、台湾の民主化のおかげで、今では私たちと政治について話し合うようになりました。",
        "chunks": [
          "雖然我阿公以前很保守，",
          "但是因為台灣的民主化，",
          "他現在也會跟我們討論政治了。"
        ],
        "hintText": "雖然我阿公以前很保守，但是因為台灣的"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要公司繼續推動決策民主化，員工的參與感就會提升。",
        "pinyin": "zhǐ yào gōng sī jì xù tuī dòng jué cè mín zhǔ huà，yuán gōng de cān yù gǎn jiù huì tí shēng。",
        "japanese": "会社が引き続き意思決定の民主化を推進すれば、従業員の参加意識が高まります。",
        "chunks": [
          "只要公司繼續推動決策民主化，",
          "員工的參與感就會提升。"
        ],
        "hintText": "只要公司繼續推動"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為社區管委會不夠民主化，所以住戶常常為了管理費的問題吵架。",
        "pinyin": "yīn wèi shè qū guǎn wěi huì bù gòu mín zhǔ huà，suǒ yǐ zhù hù cháng cháng wèi le guǎn lǐ fèi de wèn tí chǎo jià。",
        "japanese": "コミュニティの管理委員会が十分に民主化されていないため、住民は管理費の問題でよく喧嘩になります。",
        "chunks": [
          "因為社區管委會不夠民主化，",
          "所以住戶常常為了管理費的問題吵架。"
        ],
        "hintText": "因為社區管委會不夠"
      }
    ]
  },
  {
    "id": "B-199",
    "band": "B",
    "targetWord": "經濟體",
    "distractors": [
      "市場",
      "產業",
      "機構"
    ],
    "grammarNote": "「經濟體（jīng jì tǐ）」は、国家・地域などをひとつの単位として見た“経済体（エコノミー）”を指します。台湾の国際的地位を説明する際によく使われる表現です。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "雖然台灣的經濟體規模不大，但是在便利商店的服務上非常先進。",
        "pinyin": "suī rán Tái wān de jīng jì tǐ guī mó bú dà, dàn shì zài biàn lì shāng diàn de fú wù shàng fēi cháng xiān jìn.",
        "japanese": "台湾の経済体の規模は大きくないが、コンビニエンスストアのサービスは非常に先進的だ。",
        "chunks": [
          "雖然台灣的經濟體規模不大",
          "但是在便利商店的服務上",
          "非常先進"
        ],
        "hintText": "雖然台灣的"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為台灣的經濟體以出口為主，所以國際貿易對捷運系統的建設影響很大。",
        "pinyin": "yīn wèi Tái wān de jīng jì tǐ yǐ chū kǒu wéi zhǔ, suǒ yǐ guó jì mào yì duì jié yùn xì tǒng de jiàn shè yǐng xiǎng hěn dà.",
        "japanese": "台湾の経済体は輸出が中心なので、国際貿易がMRTシステムの建設に大きな影響を与えている。",
        "chunks": [
          "因為台灣的經濟體以出口為主",
          "所以國際貿易",
          "對捷運系統的建設影響很大"
        ],
        "hintText": "因為台灣的"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要台灣的經濟體持續穩定成長，健保卡的給付範圍就會更完善。",
        "pinyin": "zhǐ yào Tái wān de jīng jì tǐ chí xù wěn dìng chéng zhǎng, jiàn bǎo kǎ de gěi fù fàn wéi jiù huì gèng wán shàn.",
        "japanese": "台湾の経済体が継続的に安定成長すれば、健康保険証の給付範囲はより充実するだろう。",
        "chunks": [
          "只要台灣的經濟體持續穩定成長",
          "健保卡的給付範圍",
          "就會更完善"
        ],
        "hintText": "只要台灣的"
      }
    ]
  },
  {
    "id": "B-200",
    "band": "B",
    "targetWord": "津津樂道",
    "distractors": [
      "置之不理",
      "默不作聲",
      "不以為然"
    ],
    "grammarNote": "「津津樂道（jīn jīn lè dào）」は、興味深そうに楽しんで語る、話題として何度も語り継がれることを表す成語（四字熟語）です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然爸爸已經退休好幾年了，但他以前在學校教書的趣事，還是常常被我們全家津津樂道。",
        "pinyin": "suī rán bà ba yǐ jīng tuì xiū hǎo jǐ nián le, dàn tā yǐ qián zài xué xiào jiào shū de qù shì, hái shì cháng cháng bèi wǒ men quán jiā jīn jīn lè dào.",
        "japanese": "父はもう何年も前に退職したけれど、以前学校で教えていた面白い話は、今でも家族みんなでよく話題にしています。",
        "chunks": [
          "雖然爸爸已經退休好幾年了",
          "但他以前在學校教書的趣事",
          "還是常常被我們全家津津樂道"
        ],
        "hintText": "雖然爸爸已經退休好幾年了，但他以前在學校教書的趣事，還是常常被我們全家"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要那家牛肉麵店一開門，就會有很多老顧客上門，因為大家對它的招牌湯頭總是津津樂道。",
        "pinyin": "zhǐ yào nà jiā niú ròu miàn diàn yī kāi mén, jiù huì yǒu hěn duō lǎo gù kè shàng mén, yīn wèi dà jiā duì tā de zhāo pái tāng tóu zǒng shì jīn jīn lè dào.",
        "japanese": "あの牛肉麺屋が開店するとすぐにたくさんの常連客が来ます。なぜなら皆、あの店の看板スープをいつも楽しそうに語るからです。",
        "chunks": [
          "只要那家牛肉麵店一開門",
          "就會有很多老顧客上門",
          "因為大家對它的招牌湯頭總是津津樂道"
        ],
        "hintText": "只要那家牛肉麵店一開門，就會有很多老顧客上門，因為大家對它的招牌湯頭總是"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為最近社區裡發生了好幾次機車被偷的事件，所以鄰居們聚在一起時，總是對這些治安問題津津樂道。",
        "pinyin": "yīn wèi zuì jìn shè qū lǐ fā shēng le hǎo jǐ cì jī chē bèi tōu de shì jiàn, suǒ yǐ lín jū men jù zài yī qǐ shí, zǒng shì duì zhè xiē zhì ān wèn tí jīn jīn lè dào.",
        "japanese": "最近マンションで何度もバイクが盗まれる事件があったので、近所の人たちが集まると、いつもこの治安問題について楽しそうに話しています。",
        "chunks": [
          "因為最近社區裡發生了好幾次機車被偷的事件",
          "所以鄰居們聚在一起時",
          "總是對這些治安問題津津樂道"
        ],
        "hintText": "因為最近社區裡發生了好幾次機車被偷的事件，所以鄰居們聚在一起時，總是對這些治安問題"
      }
    ]
  },
  {
    "id": "B-201",
    "band": "B",
    "targetWord": "針鋒相對",
    "distractors": [
      "互相配合",
      "達成共識",
      "握手言和"
    ],
    "grammarNote": "「針鋒相對（zhēn fēng xiāng duì）」は、針と鉾の先がぶつかり合うように、議論や主張で「真っ向から対立する、火花を散らす」ことを表す成語です。",
    "bossReading": {
      "text": "辯論時若針鋒相對，就更要保持[ ? ]；否則一旦被抓到阿基里斯腱，對手就會趁勢放大弱點，讓局勢更難收拾。",
      "targetWord": "光明正大",
      "distractors": [
        "偷偷摸摸",
        "不擇手段",
        "含糊其詞"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "空欄は“正々堂々と”を表す四字熟語が必要なので「光明正大」が正解です。バッチ語彙の「針鋒相對」は真っ向からの対立、「阿基里斯腱」は最大の弱点で、対立が激しいほど正面から戦わないと弱点を突かれる、という流れが自然です。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他們是兄弟，但因為財產分配問題，每次見面都針鋒相對。",
        "pinyin": "suī rán tā men shì xiōng dì，dàn yīn wèi cái chǎn fēn pèi wèn tí，měi cì jiàn miàn dōu zhēn fēng xiāng duì。",
        "japanese": "彼らは兄弟だが、財産分配の問題で会うたびに真っ向から対立する。",
        "chunks": [
          "雖然他們是兄弟",
          "但因為財產分配問題",
          "每次見面都針鋒相對"
        ],
        "hintText": "雖然他們是兄弟，但因為財產分配問題，每次見面都"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要客人對折扣有意見，老闆就會針鋒相對地爭論，氣氛很尷尬。",
        "pinyin": "zhǐ yào kè rén duì zhé kòu yǒu yì jiàn，lǎo bǎn jiù huì zhēn fēng xiāng duì de zhēng lùn，qì fēn hěn gān gà。",
        "japanese": "客が割引に不満を言うと、店主は真っ向から言い争い、気まずい雰囲気になる。",
        "chunks": [
          "只要客人對折扣有意見",
          "老闆就會針鋒相對地爭論",
          "氣氛很尷尬"
        ],
        "hintText": "只要客人對折扣有意見，老闆就會"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為預算分配不均，兩個部門的主管在會議上針鋒相對，互不相讓。",
        "pinyin": "yīn wèi yù suàn fēn pèi bù jūn，liǎng gè bù mén de zhǔ guǎn zài huì yì shàng zhēn fēng xiāng duì，hù bù xiāng ràng。",
        "japanese": "予算配分が不均等なため、2つの部門の部長が会議で真っ向から対立し、互いに譲らなかった。",
        "chunks": [
          "因為預算分配不均",
          "兩個部門的主管在會議上針鋒相對",
          "互不相讓"
        ],
        "hintText": "因為預算分配不均，兩個部門的主管在會議上"
      }
    ]
  },
  {
    "id": "B-202",
    "band": "B",
    "targetWord": "光明正大",
    "distractors": [
      "偷偷摸摸",
      "不擇手段",
      "含糊其詞"
    ],
    "grammarNote": "「光明正大（guāng míng zhèng dà）」は、隠し事をせず「正々堂々としている」ことを表します。不正行為や「搞小動作（裏でこそこそやる）」の対義語として使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他很有錢，但是因為為人光明正大，所以朋友都很信任他。",
        "pinyin": "suī rán tā hěn yǒu qián, dàn shì yīn wèi wéi rén guāng míng zhèng dà, suǒ yǐ péng yǒu dōu hěn xìn rèn tā.",
        "japanese": "彼はお金持ちだけど、人柄が正々堂々としているので、友達はみんな彼を信頼している。",
        "chunks": [
          "雖然他很有錢",
          "但是因為為人光明正大",
          "所以朋友都很信任他"
        ],
        "hintText": "雖然他很有錢，但是因為為人"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要店家光明正大地公布食材來源，消費者就會更放心來消費。",
        "pinyin": "zhǐ yào diàn jiā guāng míng zhèng dà de gōng bù shí cái lái yuán, xiāo fèi zhě jiù huì gèng fàng xīn lái xiāo fèi.",
        "japanese": "お店が正々堂々と食材の産地を公表すれば、消費者はもっと安心して買い物に来るでしょう。",
        "chunks": [
          "只要店家光明正大地公布食材來源",
          "消費者就會更放心來消費"
        ],
        "hintText": "只要店家"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為公司要求所有交易都要光明正大，所以我們必須開立統一發票。",
        "pinyin": "yīn wèi gōng sī yāo qiú suǒ yǒu jiāo yì dōu yào guāng míng zhèng dà, suǒ yǐ wǒ men bì xū kāi lì tǒng yī fā piào.",
        "japanese": "会社がすべての取引を正々堂々と行うよう求めているので、私たちは統一発票を発行しなければなりません。",
        "chunks": [
          "因為公司要求所有交易都要光明正大",
          "所以我們必須開立統一發票"
        ],
        "hintText": "因為公司要求所有交易都要"
      }
    ]
  },
  {
    "id": "B-203",
    "band": "B",
    "targetWord": "阿基里斯腱",
    "distractors": [
      "優勢",
      "特長",
      "強項"
    ],
    "grammarNote": "「阿基里斯腱（Ā jī lǐ sī jiàn）」はギリシャ神話に由来し、比喩で「致命的な弱点、アキレス腱」を表すビジネスや評論での頻出表現です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他工作能力很強，但情緒管理一直是他的阿基里斯腱。",
        "pinyin": "suī rán tā gōng zuò néng lì hěn qiáng, dàn qíng xù guǎn lǐ yī zhí shì tā de ā jī lǐ sī jiàn.",
        "japanese": "彼は仕事の能力はとても高いですが、感情管理はずっと彼のアキレス腱です。",
        "chunks": [
          "雖然他工作能力很強",
          "但情緒管理一直是",
          "他的阿基里斯腱"
        ],
        "hintText": "雖然他工作能力很強，但情緒管理一直是"
      },
      {
        "situation": "雖然這家餐廳的裝潢很漂亮，但服務態度是他們的阿基里斯腱。",
        "chinese": "雖然這家餐廳的裝潢很漂亮，但服務態度是他們的阿基里斯腱。",
        "pinyin": "suī rán zhè jiā cān tīng de zhuāng huáng hěn piào liang, dàn fú wù tài dù shì tā men de ā jī lǐ sī jiàn.",
        "japanese": "このレストランの内装はとても綺麗ですが、サービス態度が彼らのアキレス腱です。",
        "chunks": [
          "雖然這家餐廳的裝潢很漂亮",
          "但服務態度是",
          "他們的阿基里斯腱"
        ],
        "hintText": "雖然這家餐廳的裝潢很漂亮，但服務態度是"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為這條捷運路線的班次太密集，所以準點率反而成為阿基里斯腱。",
        "pinyin": "yīn wèi zhè tiáo jié yùn lù xiàn de bān cì tài mì jí, suǒ yǐ zhǔn diǎn lǜ fǎn ér chéng wéi ā jī lǐ sī jiàn.",
        "japanese": "このMRT路線は運行本数が多すぎるため、定時性がかえってアキレス腱になっています。",
        "chunks": [
          "因為這條捷運路線的班次太密集",
          "所以準點率反而成為",
          "阿基里斯腱"
        ],
        "hintText": "因為這條捷運路線的班次太密集，所以準點率反而成為"
      }
    ]
  },
  {
    "id": "B-204",
    "band": "B",
    "targetWord": "時至今日",
    "distractors": [
      "從今以後",
      "當時",
      "不久前"
    ],
    "grammarNote": "「時至今日（shí zhì jīn rì）」は“今となっては／今日に至るまで”という、時の経過と現状の変化を強調する書き言葉寄りの言い回しです。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然小時候常跟哥哥吵架，但時至今日，我們感情非常好。",
        "pinyin": "suī rán xiǎo shí hou cháng gēn gē ge chǎo jià，dàn shí zhì jīn rì，wǒ men gǎn qíng fēi cháng hǎo。",
        "japanese": "小さい頃はよく兄と喧嘩したけれど、今となっては私たちの仲はとても良い。",
        "chunks": [
          "雖然小時候常跟哥哥吵架",
          "但時至今日",
          "我們感情非常好"
        ],
        "hintText": "雖然小時候常跟哥哥吵架，但"
      },
      {
        "situation": "交通・移動",
        "person": "雖然以前都騎機車上班，但時至今日，我已經習慣搭捷運了。",
        "chinese": "雖然以前都騎機車上班，但時至今日，我已經習慣搭捷運了。",
        "pinyin": "suī rán yǐ qián dōu qí jī chē shàng bān，dàn shí zhì jīn rì，wǒ yǐ jīng xí guàn dā jié yùn le。",
        "japanese": "以前はバイクで通勤していたけれど、今となってはもう捷運に慣れた。",
        "chunks": [
          "雖然以前都騎機車上班",
          "但時至今日",
          "我已經習慣搭捷運了"
        ],
        "hintText": "雖然以前都騎機車上班，但"
      },
      {
        "situation": "公的手続き・職場",
        "person": "因為之前申請補助的資料不齊全，所以時至今日，還是沒收到核准通知。",
        "chinese": "因為之前申請補助的資料不齊全，所以時至今日，還是沒收到核准通知。",
        "pinyin": "yīn wèi zhī qián shēn qǐng bǔ zhù de zī liào bù qí quán，suǒ yǐ shí zhì jīn rì，hái shì méi shōu dào hé zhǔn tōng zhī。",
        "japanese": "前に補助金の申請書類が不備だったので、今に至るまで承認通知を受け取っていない。",
        "chunks": [
          "因為之前申請補助的資料不齊全",
          "所以時至今日",
          "還是沒收到核准通知"
        ],
        "hintText": "因為之前申請補助的資料不齊全，所以"
      }
    ]
  },
  {
    "id": "B-205",
    "band": "B",
    "targetWord": "才會慢慢改變",
    "distractors": [
      "立刻改變",
      "馬上停止",
      "一直維持"
    ],
    "grammarNote": "「只有…才（會）…」は“〜して初めて…する”という必要条件を表します。環境問題や社会問題への意識変化を語る際の定型句です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然爸媽常嘮叨，但只有當我自己當了父母，才會慢慢改變對他們的看法。",
        "pinyin": "suī rán bà mā cháng láo dao, dàn zhǐ yǒu dāng wǒ zì jǐ dāng le fù mǔ, cái huì màn màn gǎi biàn duì tā men de kàn fǎ.",
        "japanese": "両親はよく口うるさく言うけど、自分が親になって初めて、彼らに対する見方が徐々に変わるんだ。",
        "chunks": [
          "雖然爸媽常嘮叨",
          "但只有當我自己當了父母",
          "才會慢慢改變對他們的看法"
        ],
        "hintText": "雖然爸媽常嘮叨，但只有當我自己當了父母，"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為店家一直不開發票，所以只有等到被檢舉，他們的習慣才會慢慢改變。",
        "pinyin": "yīn wèi diàn jiā yī zhí bù kāi fā piào, suǒ yǐ zhǐ yǒu děng dào bèi jiǎn jǔ, tā men de xí guàn cái huì màn màn gǎi biàn.",
        "japanese": "店がずっと領収書を発行しないので、通報されて初めて、彼らの習慣が徐々に変わるんだ。",
        "chunks": [
          "因為店家一直不開發票",
          "所以只有等到被檢舉",
          "他們的習慣才會慢慢改變"
        ],
        "hintText": "因為店家一直不開發票，所以只有等到被檢舉，"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要政府加強取締，機車族的違規行為才會慢慢改變。",
        "pinyin": "zhǐ yào zhèng fǔ jiā qiáng qǔ dì, jī chē zú de wéi guī xíng wéi cái huì màn màn gǎi biàn.",
        "japanese": "政府が取り締まりを強化して初めて、バイク族の違反行為が徐々に変わるんだ。",
        "chunks": [
          "只要政府加強取締",
          "機車族的違規行為",
          "才會慢慢改變"
        ],
        "hintText": "只要政府加強取締，機車族的違規行為"
      }
    ]
  },
  {
    "id": "B-206",
    "band": "B",
    "targetWord": "雖然…但是",
    "distractors": [
      "因為…所以",
      "如果…就",
      "只要…就"
    ],
    "grammarNote": "「雖然…但是…（〜ではあるが…だ）」は逆接を表します。後半に「還是（やはり）」を伴って本音や結論を強調することが多いです。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我媽媽很嘮叨，但是我知道她是為我好，我還是會乖乖聽話。",
        "pinyin": "suī rán wǒ mā mā hěn láo dāo, dàn shì wǒ zhī dào tā shì wèi wǒ hǎo, wǒ hái shì huì guāi guāi tīng huà.",
        "japanese": "母はとても口うるさいけれど、私のためを思ってだと分かっているので、やはり素直に言うことを聞きます。",
        "chunks": [
          "雖然我媽媽很嘮叨",
          "但是我知道她是為我好",
          "我還是會乖乖聽話"
        ],
        "hintText": "雖然我媽媽很嘮叨，但是我知道她是為我好，"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家餐廳的價格比較高，但是食材很新鮮，所以我還是會再來。",
        "pinyin": "suī rán zhè jiā cān tīng de jià gé bǐ jiào gāo, dàn shì shí cái hěn xīn xiān, suǒ yǐ wǒ hái shì huì zài lái.",
        "japanese": "このレストランは値段が高いけれど、食材がとても新鮮なので、やはりまた来ます。",
        "chunks": [
          "雖然這家餐廳的價格比較高",
          "但是食材很新鮮",
          "所以我還是會再來"
        ],
        "hintText": "雖然這家餐廳的價格比較高，但是食材很新鮮，"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然機車突然拋錨讓我很煩，但是好險附近有車行，我還是順利修好了。",
        "pinyin": "suī rán jī chē tū rán pāo máo ràng wǒ hěn fán, dàn shì hǎo xiǎn fù jìn yǒu chē háng, wǒ hái shì shùn lì xiū hǎo le.",
        "japanese": "バイクが突然故障してとても困ったけれど、幸い近くに修理屋があったので、なんとか直せました。",
        "chunks": [
          "雖然機車突然拋錨讓我很煩",
          "但是好險附近有車行",
          "我還是順利修好了"
        ],
        "hintText": "雖然機車突然拋錨讓我很煩，但是好險附近有車行，"
      }
    ]
  },
  {
    "id": "B-207",
    "band": "B",
    "targetWord": "不是因為…而是",
    "distractors": [
      "不但…而且",
      "雖然…但是",
      "只要…就"
    ],
    "grammarNote": "「不是因為…而是…」は、表面的な原因を否定し、背後にある「真の理由」を提示する高度な対比表現です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "我媽這次沒有生氣，不是因為我做錯事，而是因為她心情很好。",
        "pinyin": "wǒ mā zhè cì méi yǒu shēng qì ， bú shì yīn wèi wǒ zuò cuò shì ， ér shì yīn wèi tā xīn qíng hěn hǎo 。",
        "japanese": "母は今回怒らなかった。私が間違ったことをしたからではなく、彼女の機嫌がとても良かったからだ。",
        "chunks": [
          "我媽這次沒有生氣",
          "不是因為我做錯事",
          "而是因為她心情很好"
        ],
        "hintText": "我媽這次沒有生氣，"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "我喜歡這家飲料店，不是因為它便宜，而是因為它可以用發票換折扣。",
        "pinyin": "wǒ xǐ huān zhè jiā yǐn liào diàn ， bú shì yīn wèi tā pián yí ， ér shì yīn wèi tā kě yǐ yòng fā piào huàn zhé kòu 。",
        "japanese": "この飲料店が好きなのは、安いからではなく、レシートで割引が受けられるからだ。",
        "chunks": [
          "我喜歡這家飲料店",
          "不是因為它便宜",
          "而是因為它可以用發票換折扣"
        ],
        "hintText": "我喜歡這家飲料店，"
      },
      {
        "situation": "生活トラブル",
        "chinese": "我遲到不是因為捷運誤點，而是因為我忘記帶悠遊卡。",
        "pinyin": "wǒ chí dào bú shì yīn wèi jié yùn wù diǎn ， ér shì yīn wèi wǒ wàng jì dài yōu yóu kǎ 。",
        "japanese": "私が遅刻したのは、地下鉄が遅れたからではなく、悠遊卡を忘れたからだ。",
        "chunks": [
          "我遲到",
          "不是因為捷運誤點",
          "而是因為我忘記帶悠遊卡"
        ],
        "hintText": "我遲到"
      }
    ]
  },
  {
    "id": "B-208",
    "band": "B",
    "targetWord": "值得珍惜的",
    "distractors": [
      "值得懷疑的",
      "容易失去的",
      "不必在意的"
    ],
    "grammarNote": "「值得 + 動詞」は“〜する価値がある”を表し、「值得珍惜（大切にする価値がある、かけがえのない）」は深い人間関係や経験を語るのに最適です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們常常吵架，但因為彼此了解，所以這份友情是值得珍惜的。",
        "pinyin": "suī rán wǒ men cháng cháng chǎo jià, dàn yīn wèi bǐ cǐ liǎo jiě, suǒ yǐ zhè fèn yǒu qíng shì zhí dé zhēn xī de.",
        "japanese": "私たちはよく喧嘩するけれど、お互いを理解しているからこそ、この友情は大切にする価値があります。",
        "chunks": [
          "雖然我們常常吵架",
          "但因為彼此了解",
          "所以這份友情是值得珍惜的"
        ],
        "hintText": "雖然我們常常吵架，但因為彼此了解，所以這份友情是"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要健保卡還在，就算遇到緊急狀況，那些醫療資源也是值得珍惜的。",
        "pinyin": "zhǐ yào jiàn bǎo kǎ hái zài, jiù suàn yù dào jǐn jí zhuàng kuàng, nà xiē yī liáo zī yuán yě shì zhí dé zhēn xī de.",
        "japanese": "健康保険証さえあれば、緊急事態に遭っても、医療リソースは大切にする価値があります。",
        "chunks": [
          "只要健保卡還在",
          "就算遇到緊急狀況",
          "那些醫療資源也是值得珍惜的"
        ],
        "hintText": "只要健保卡還在，就算遇到緊急狀況，那些醫療資源也是"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為老闆總是熱情招待，所以這間小店的人情味是值得珍惜的。",
        "pinyin": "yīn wèi lǎo bǎn zǒng shì rè qíng zhāo dài, suǒ yǐ zhè jiān xiǎo diàn de rén qíng wèi shì zhí dé zhēn xī de.",
        "japanese": "店主がいつも熱心に迎えてくれるので、この小さなお店の人情味は大切にする価値があります。",
        "chunks": [
          "因為老闆總是熱情招待",
          "所以這間小店的人情味",
          "是值得珍惜的"
        ],
        "hintText": "因為老闆總是熱情招待，所以這間小店的人情味是"
      }
    ]
  },
  {
    "id": "B-209",
    "band": "B",
    "targetWord": "凝聚",
    "distractors": [
      "分散",
      "破壞",
      "忽略"
    ],
    "grammarNote": "「凝聚（níng jù）」は人の気持ちや力を「一つにまとめる/結集させる」という意味で、「向心力（求心力）」や「共識（コンセンサス）」とセットで使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們家人平常各忙各的，但過年時總能凝聚大家的感情。",
        "pinyin": "suī rán wǒ men jiā rén píng cháng gè máng gè de, dàn guò nián shí zǒng néng níng jù dà jiā de gǎn qíng.",
        "japanese": "普段は家族それぞれ忙しいですが、旧正月にはいつも家族の絆を一つにまとめることができます。",
        "chunks": [
          "雖然我們家人平常各忙各的",
          "但過年時總能",
          "凝聚大家的感情"
        ],
        "hintText": "雖然我們家人平常各忙各的，但過年時總能"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家咖啡店常常舉辦會員活動，所以凝聚了很多忠實顧客。",
        "pinyin": "yīn wèi zhè jiā kā fēi diàn cháng cháng jǔ bàn huì yuán huó dòng, suǒ yǐ níng jù le hěn duō zhōng shí gù kè.",
        "japanese": "このコーヒー店はよく会員イベントを開催するので、多くの常連客を結集しています。",
        "chunks": [
          "因為這家咖啡店常常舉辦會員活動",
          "所以凝聚了",
          "很多忠實顧客"
        ],
        "hintText": "因為這家咖啡店常常舉辦會員活動，所以凝聚了"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要部門主管願意傾聽員工意見，就能有效凝聚團隊的共識。",
        "pinyin": "zhǐ yào bù mén zhǔ guǎn yuàn yì qīng tīng yuán gōng yì jiàn, jiù néng yǒu xiào níng jù tuán duì de gòng shì.",
        "japanese": "部門の上司が進んで社員の意見に耳を傾ければ、効果的にチームのコンセンサスをまとめることができます。",
        "chunks": [
          "只要部門主管願意傾聽員工意見",
          "就能有效凝聚",
          "團隊的共識"
        ],
        "hintText": "只要部門主管願意傾聽員工意見，就能有效凝聚"
      }
    ]
  },
  {
    "id": "B-210",
    "band": "B",
    "targetWord": "啟發",
    "distractors": [
      "打擊",
      "阻礙",
      "誤導"
    ],
    "grammarNote": "「啟發（qǐ fā）」は、言葉や本などが人に“気づきを与える/インスピレーションを促す”こと。「啟發了我（私を啓発した）」の形で非常によく使われます。",
    "bossReading": {
      "text": "家人之間的深厚感情是最值得珍惜的，也能凝聚彼此的力量；一次真誠的對話常會[ ? ]我們重新看見方向，繼續往前走。",
      "targetWord": "啟發",
      "distractors": [
        "打擊",
        "阻礙",
        "誤導"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "空欄は“気づきを与えて考え方を促す”動詞が必要なので「啟發」が正解です。同バッチ語彙は「值得珍惜的（大切にする価値がある）」「凝聚（結集する）」「啟發（啓発する）」の3語で、家族の情が“值得珍惜”→その情が力を“凝聚”→対話が人を“啟發”する、という因果で自然に統合できます。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我媽媽常說一些老生常談，但她的一句話深深啟發了我，讓我想通了很多事。",
        "pinyin": "suī rán wǒ mā ma cháng shuō yī xiē lǎo shēng cháng tán，dàn tā de yī jù huà shēn shēn qǐ fā le wǒ，ràng wǒ xiǎng tōng le hěn duō shì。",
        "japanese": "母はよく決まり文句を言うけれど、彼女のある一言が私を大いに啓発し、多くのことを理解させてくれました。",
        "chunks": [
          "雖然我媽媽常說一些老生常談",
          "但她的一句話深深啟發了我",
          "讓我想通了很多事"
        ],
        "hintText": "雖然我媽媽常說一些老生常談，但她的一句話深深"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為在捷運上看到一個關於環保的廣告，深深啟發了我，所以決定開始搭公車上班。",
        "pinyin": "yīn wèi zài jié yùn shàng kàn dào yī gè guān yú huán bǎo de guǎng gào，shēn shēn qǐ fā le wǒ，suǒ yǐ jué dìng kāi shǐ dā gōng chē shàng bān。",
        "japanese": "地下鉄で環境に関する広告を見て大いに啓発されたので、バスで通勤することにしました。",
        "chunks": [
          "因為在捷運上看到一個關於環保的廣告",
          "深深啟發了我",
          "所以決定開始搭公車上班"
        ],
        "hintText": "因為在捷運上看到一個關於環保的廣告，深深"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要讀過那份公司的培訓手冊，就能獲得啟發，讓工作效率大大提升。",
        "pinyin": "zhǐ yào dú guò nà fèn gōng sī de péi xùn shǒu cè，jiù néng huò dé qǐ fā，ràng gōng zuò xiào lǜ dà dà tí shēng。",
        "japanese": "あの会社の研修マニュアルを読めば啓発を受け、仕事の効率が大幅に向上します。",
        "chunks": [
          "只要讀過那份公司的培訓手冊",
          "就能獲得啟發",
          "讓工作效率大大提升"
        ],
        "hintText": "只要讀過那份公司的培訓手冊，就能獲得"
      }
    ]
  },
  {
    "id": "B-211",
    "band": "B",
    "targetWord": "理論",
    "distractors": [
      "規定",
      "傳統",
      "現象"
    ],
    "grammarNote": "「理論（lǐ lùn）」は学術や科学において体系化された理論を指します。「實踐（実践）」と対比されることが多いです。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他的理論很完美，但是因為家庭因素，他無法專心實踐。",
        "pinyin": "suī rán tā de lǐ lùn hěn wán měi, dàn shì yīn wèi jiā tíng yīn sù, tā wú fǎ zhuān xīn shí jiàn.",
        "japanese": "彼の理論は完璧だけれども、家庭の事情で実践に専念できません。",
        "chunks": [
          "雖然他的理論很完美",
          "但是因為家庭因素",
          "他無法專心實踐"
        ],
        "hintText": "雖然他的理論很完美，但是因為家庭因素，他無法專心"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要根據這個理論，我們就能設計出更符合顧客需求的菜單，所以打折促銷效果會更好。",
        "pinyin": "zhǐ yào gēn jù zhè ge lǐ lùn, wǒ men jiù néng shè jì chū gèng fú hé gù kè xū qiú de cài dān, suǒ yǐ dǎ zhé cù xiāo xiào guǒ huì gèng hǎo.",
        "japanese": "この理論に従えば、顧客のニーズにより合ったメニューをデザインできるので、割引販促効果がより良くなります。",
        "chunks": [
          "只要根據這個理論",
          "我們就能設計出更符合顧客需求的菜單",
          "所以打折促銷效果會更好"
        ],
        "hintText": "只要根據這個理論，我們就能設計出更符合顧客需求的菜單，所以"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為機車故障的理論太複雜，所以師傅雖然檢查很久，還是找不到問題。",
        "pinyin": "yīn wèi jī chē gù zhàng de lǐ lùn tài fù zá, suǒ yǐ shī fù suī rán jiǎn chá hěn jiǔ, hái shì zhǎo bù dào wèn tí.",
        "japanese": "バイクの故障の理論が複雑すぎるので、整備士が長い間点検しても問題が見つかりません。",
        "chunks": [
          "因為機車故障的理論太複雜",
          "所以師傅雖然檢查很久",
          "還是找不到問題"
        ],
        "hintText": "因為機車故障的理論太複雜，所以師傅雖然檢查很久，還是"
      }
    ]
  },
  {
    "id": "B-212",
    "band": "B",
    "targetWord": "證明",
    "distractors": [
      "發明",
      "說明",
      "決定"
    ],
    "grammarNote": "「證明（zhèng míng）」は事実や真理を証拠によって明らかにすること。「研究證明了〜（研究が〜を証明した）」は学術論文の頻出表現です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他常常遲到，但是這次他準時出席證明了他是個可靠的人。",
        "pinyin": "suī rán tā cháng cháng chí dào, dàn shì zhè cì tā zhǔn shí chū xí zhèng míng le tā shì gè kě kào de rén.",
        "japanese": "雖然他常常遲到，但這次他準時出席證明了他是一個可靠的人。",
        "chunks": [
          "雖然他常常遲到",
          "但是這次他準時出席",
          "證明了他是個可靠的人"
        ],
        "hintText": "雖然他常常遲到，但是這次他準時出席"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店的發票有中獎，所以證明了消費紀錄是真的。",
        "pinyin": "yīn wèi zhè jiā diàn de fā piào yǒu zhòng jiǎng, suǒ yǐ zhèng míng le xiāo fèi jì lù shì zhēn de.",
        "japanese": "因為這家店的發票有中獎，所以證明了消費紀錄是真的。",
        "chunks": [
          "因為這家店的發票有中獎",
          "所以證明了消費紀錄是真的"
        ],
        "hintText": "因為這家店的發票有中獎，所以"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要搭捷運並使用悠遊卡，就能證明你已經付了車資。",
        "pinyin": "zhǐ yào dā jié yùn bìng shǐ yòng yōu yóu kǎ, jiù néng zhèng míng nǐ yǐ jīng fù le chē zī.",
        "japanese": "只要搭捷運並使用悠遊卡，就能證明你已經付了車資。",
        "chunks": [
          "只要搭捷運並使用悠遊卡",
          "就能證明你已經付了車資"
        ],
        "hintText": "只要搭捷運並使用悠遊卡，就能"
      }
    ]
  },
  {
    "id": "B-213",
    "band": "B",
    "targetWord": "分析",
    "distractors": [
      "分工",
      "分配",
      "分享"
    ],
    "grammarNote": "「分析（fēn xī）」は事象やデータを細かく分けて性質や構造を明らかにすること。「大數據分析（ビッグデータ分析）」は現代の研究で不可欠な用語です。",
    "bossReading": {
      "text": "在學術研究中，單憑一個完美的[ ? ]是不夠的。研究者必須透過大量的數據分析來支持自己的假設，最終才能證明該觀點在現實世界中也是成立的。",
      "targetWord": "理論",
      "distractors": [
        "規定",
        "傳統",
        "現象"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "空欄には「分析や証明の対象となる仮説・考え」を表す名詞が入るため「理論」が正解です。「理論」「分析」「證明」という学術研究のアプローチを一つのストーリーにまとめています。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為我對他的行為進行了分析，所以我們之間的誤會很快就解開了。",
        "pinyin": "yīn wèi wǒ duì tā de xíng wéi jìn xíng le fēn xī, suǒ yǐ wǒ men zhī jiān de wù huì hěn kuài jiù jiě kāi le.",
        "japanese": "彼の行動を分析したので、私たちの誤解はすぐに解けました。",
        "chunks": [
          "因為我對他的行為進行了分析",
          "所以我們之間的誤會很快就解開了"
        ],
        "hintText": "因為我對他的行為進行了"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家店的發票分析顯示業績下滑，但是他們還是推出了打折活動。",
        "pinyin": "suī rán zhè jiā diàn de fā piào fēn xī xiǎn shì yè jì xià huá, dàn shì tā men hái shì tuī chū le dǎ zhé huó dòng.",
        "japanese": "この店の領収書分析によると業績は低下しているが、それでも彼らは割引キャンペーンを実施した。",
        "chunks": [
          "雖然這家店的發票分析顯示業績下滑",
          "但是他們還是推出了打折活動"
        ],
        "hintText": "雖然這家店的發票分析顯示"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要我們分析捷運的搭乘數據，就能避開人潮擁擠的時段。",
        "pinyin": "zhǐ yào wǒ men fēn xī jié yùn de dā chéng shù jù, jiù néng bì kāi rén cháo yōng jǐ de shí duàn.",
        "japanese": "MRTの乗車データを分析すれば、混雑時間帯を避けることができます。",
        "chunks": [
          "只要我們分析捷運的搭乘數據",
          "就能避開人潮擁擠的時段"
        ],
        "hintText": "只要我們分析捷運的"
      }
    ]
  },
  {
    "id": "B-214",
    "band": "B",
    "targetWord": "邏輯",
    "distractors": [
      "情緒",
      "脾氣",
      "態度"
    ],
    "grammarNote": "「邏輯（luó jí）」は論理（ロジック）を指します。「邏輯不通（論理が破綻している）」や「邏輯思考（論理的思考）」などの形で使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他講話很有邏輯，但是常常忽略別人的感受。",
        "pinyin": "suī rán tā jiǎng huà hěn yǒu luó jí，dàn shì cháng cháng hū lüè bié rén de gǎn shòu。",
        "japanese": "彼は話すときとても論理的ですが、よく他人の気持ちを無視します。",
        "chunks": [
          "雖然他講話",
          "很有邏輯",
          "但是常常忽略別人的感受"
        ],
        "hintText": "雖然他講話"
      },
      {
        "situation": "店舗・サービス",
        "location": "店舗・サービス",
        "chinese": "因為這家店的促銷邏輯不通，所以客人都不買單。",
        "pinyin": "yīn wèi zhè jiā diàn de cù xiāo luó jí bù tōng，suǒ yǐ kè rén dōu bù mǎi dān。",
        "japanese": "この店のプロモーションのロジックが通っていないので、客は誰も買いません。",
        "chunks": [
          "因為這家店的促銷",
          "邏輯不通",
          "所以客人都不買單"
        ],
        "hintText": "因為這家店的促銷"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要他的邏輯思考再清楚一點，就不會搞錯發票金額了。",
        "pinyin": "zhǐ yào tā de luó jí sī kǎo zài qīng chǔ yī diǎn，jiù bù huì gǎo cuò fā piào jīn é le。",
        "japanese": "彼の論理的思考がもう少し明確であれば、領収書の金額を間違えることはなかったでしょう。",
        "chunks": [
          "只要他的邏輯思考",
          "再清楚一點",
          "就不會搞錯發票金額了"
        ],
        "hintText": "只要他的邏輯思考"
      }
    ]
  },
  {
    "id": "B-215",
    "band": "B",
    "targetWord": "結論",
    "distractors": [
      "結果",
      "結束",
      "結帳"
    ],
    "grammarNote": "「結論（jié lùn）」は議論や研究の最終的な判断やまとめのことです。「得出結論（結論を出す、結論に至る）」というコロケーションが重要です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然大家意見不同，但討論後還是得出了一個共同的結論。",
        "pinyin": "suī rán dà jiā yì jiàn bù tóng, dàn tǎo lùn hòu hái shì dé chū le yī gè gòng tóng de jié lùn.",
        "japanese": "みんな意見が違ったけど、議論した後でやはり共通の結論に至った。",
        "chunks": [
          "雖然大家意見不同，",
          "但討論後",
          "還是得出了一個",
          "共同的結論。"
        ],
        "hintText": "雖然大家意見不同，但討論後還是得出了一個"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的服務很差，所以我們最後的結論是不會再來了。",
        "pinyin": "yīn wèi zhè jiā cān tīng de fú wù hěn chà, suǒ yǐ wǒ men zuì hòu de jié lùn shì bù huì zài lái le.",
        "japanese": "このレストランのサービスがとても悪いので、私たちの最終的な結論はもう来ないということです。",
        "chunks": [
          "因為這家餐廳的服務很差，",
          "所以我們最後的結論是",
          "不會再來了。"
        ],
        "hintText": "因為這家餐廳的服務很差，所以我們最後的結論是"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要房東願意修漏水，我們就能得出一個圓滿的結論。",
        "pinyin": "zhǐ yào fáng dōng yuàn yì xiū lòu shuǐ, wǒ men jiù néng dé chū yī gè yuán mǎn de jié lùn.",
        "japanese": "大家さんが水漏れを修理してくれさえすれば、私たちは満足のいく結論を出せます。",
        "chunks": [
          "只要房東願意修漏水，",
          "我們就能得出一個",
          "圓滿的結論。"
        ],
        "hintText": "只要房東願意修漏水，我們就能得出一個"
      }
    ]
  },
  {
    "id": "B-216",
    "band": "B",
    "targetWord": "實驗",
    "distractors": [
      "考驗",
      "經驗",
      "體驗"
    ],
    "grammarNote": "「實驗（shí yàn）」は科学的な実験を指します。台湾の大学生が取り組む「畢業專題（卒論・卒業制作）」の文脈で非常によく使われます。",
    "bossReading": {
      "text": "進行科學[ ? ]時，過程必須遵守嚴密的邏輯。如果步驟出錯，無論數據看起來多麼完美，最終得出的結論都將無法令人信服。",
      "targetWord": "實驗",
      "distractors": [
        "考驗",
        "經驗",
        "體驗"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「科學（科学）」の後ろに続き、プロセスや論理が求められるものは「實驗」です。バッチ内の「邏輯」「結論」「實驗」を科学研究のプロセスとして繋げています。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為哥哥的畢業專題需要做實驗，所以他常常拜託我幫忙記錄數據。",
        "pinyin": "yīn wèi gē ge de bì yè zhuān tí xū yào zuò shí yàn，suǒ yǐ tā cháng cháng bài tuō wǒ bāng máng jì lù shù jù。",
        "japanese": "兄の卒業研究で実験が必要なので、よくデータ記録を手伝ってほしいと頼まれます。",
        "chunks": [
          "因為哥哥的畢業專題需要做實驗，",
          "所以他常常拜託我幫忙記錄數據。"
        ],
        "hintText": "因為哥哥的畢業專題需要做"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然便利商店沒有賣實驗器材，但只要上網訂購，隔天就能送到超商取貨。",
        "pinyin": "suī rán biàn lì shāng diàn méi yǒu mài shí yàn qì cái，dàn zhǐ yào shàng wǎng dìng gòu，gé tiān jiù néng sòng dào chāo shāng qǔ huò。",
        "japanese": "コンビニには実験器具は売っていませんが、ネットで注文すれば翌日にはコンビニ受け取りできます。",
        "chunks": [
          "雖然便利商店沒有賣實驗器材，",
          "但只要上網訂購，",
          "隔天就能送到超商取貨。"
        ],
        "hintText": "雖然便利商店沒有賣"
      },
      {
        "situation": "交通・移動",
        "chinese": "為了去中研院做實驗，他每天騎機車從學校到捷運站，再轉乘捷運。",
        "pinyin": "wèi le qù zhōng yán yuàn zuò shí yàn，tā měi tiān qí jī chē cóng xué xiào dào jié yùn zhàn，zài zhuǎn chéng jié yùn。",
        "japanese": "中央研究院で実験をするため、彼は毎日バイクで学校から駅まで行き、地下鉄に乗り換えています。",
        "chunks": [
          "為了去中研院做實驗，",
          "他每天騎機車從學校到捷運站，",
          "再轉乘捷運。"
        ],
        "hintText": "為了去中研院做"
      }
    ]
  },
  {
    "id": "B-217",
    "band": "B",
    "targetWord": "客觀",
    "distractors": [
      "主觀",
      "悲觀",
      "樂觀"
    ],
    "grammarNote": "「客觀（kè guān）」は客観的であること。対義語は「主觀（主観的）」です。学術や報道などで「保持客觀（客観性を保つ）」として使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他是我最好的朋友，但我還是盡量保持客觀，不要因為私人情感影響判斷。",
        "pinyin": "suī rán tā shì wǒ zuì hǎo de péng yǒu，dàn wǒ hái shì jǐn liàng bǎo chí kè guān，bù yào yīn wèi sī rén qíng gǎn yǐng xiǎng pàn duàn。",
        "japanese": "彼は私の親友だけど、私はできるだけ客観的でいようと努めている。個人的な感情で判断を誤らないようにね。",
        "chunks": [
          "雖然他是我最好的朋友",
          "但我還是盡量保持客觀",
          "不要因為私人情感影響判斷"
        ],
        "hintText": "雖然他是我最好的朋友，但我還是盡量"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家店給的發票金額有問題，所以我必須客觀地核對每一筆消費記錄。",
        "pinyin": "yīn wèi zhè jiā diàn gěi de fā piào jīn é yǒu wèn tí，suǒ yǐ wǒ bì xū kè guān de hé duì měi yī bǐ xiāo fèi jì lù。",
        "japanese": "この店の領収書の金額に問題があるので、客観的に一つ一つの消費記録を確認しなければならない。",
        "chunks": [
          "因為這家店給的發票金額有問題",
          "所以我必須客觀地核對",
          "每一筆消費記錄"
        ],
        "hintText": "因為這家店給的發票金額有問題，所以我必須"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要我們在開會時保持客觀，就能做出更公平的決策。",
        "pinyin": "zhǐ yào wǒ men zài kāi huì shí bǎo chí kè guān，jiù néng zuò chū gèng gōng píng de jué cè。",
        "japanese": "会議の時に客観的でいさえすれば、より公平な決定ができる。",
        "chunks": [
          "只要我們在開會時保持客觀",
          "就能做出更公平的決策"
        ],
        "hintText": "只要我們在開會時"
      }
    ]
  },
  {
    "id": "B-218",
    "band": "B",
    "targetWord": "探討",
    "distractors": [
      "拜訪",
      "打聽",
      "探望"
    ],
    "grammarNote": "「探討（tàn tǎo）」は問題や現象について深く調べて議論すること。論文の要旨などで「本文旨在探討〜（本稿は〜を検討することを目的とする）」と頻出します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們常常探討家庭溝通的重要性，但是實際做到的人卻不多。",
        "pinyin": "suī rán wǒ men cháng cháng tàn tǎo jiā tíng gōu tōng de zhòng yào xìng, dàn shì shí jì zuò dào de rén què bù duō.",
        "japanese": "私たちはよく家庭のコミュニケーションの重要性を議論しますが、実際にできている人は多くありません。",
        "chunks": [
          "雖然我們常常探討",
          "家庭溝通的重要性",
          "但是實際做到的人卻不多"
        ],
        "hintText": "雖然我們常常"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的服務品質一直不穩定，所以我們決定在會議上深入探討該如何改善。",
        "pinyin": "yīn wèi zhè jiā cān tīng de fú wù zhì liàng yī zhí bù wěn dìng, suǒ yǐ wǒ men jué dìng zài huì yì shàng shēn rù tàn tǎo gāi rú hé gǎi shàn.",
        "japanese": "このレストランのサービス品質が安定しないので、私たちは会議でどのように改善するか深く議論することにしました。",
        "chunks": [
          "因為這家餐廳的服務品質一直不穩定",
          "所以我們決定在會議上",
          "深入探討該如何改善"
        ],
        "hintText": "因為這家餐廳的服務品質一直不穩定，所以我們決定在會議上"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要我們好好探討這次漏水的原因，就能避免以後再發生同樣的問題。",
        "pinyin": "zhǐ yào wǒ men hǎo hǎo tàn tǎo zhè cì lòu shuǐ de yuán yīn, jiù néng bì miǎn yǐ hòu zài fā shēng tóng yàng de wèn tí.",
        "japanese": "この水漏れの原因をしっかり議論すれば、今後同じ問題が起こるのを防げます。",
        "chunks": [
          "只要我們好好探討",
          "這次漏水的原因",
          "就能避免以後再發生同樣的問題"
        ],
        "hintText": "只要我們好好"
      }
    ]
  },
  {
    "id": "B-219",
    "band": "B",
    "targetWord": "發表",
    "distractors": [
      "發明",
      "發生",
      "發送"
    ],
    "grammarNote": "「發表（fā biǎo）」は意見、結果、論文などを公の場で発表することです。「發表論文（論文を発表する）」や「發表意見」などの形で使われます。",
    "bossReading": {
      "text": "這篇論文深入探討了氣候變遷的成因，作者在研討會上[ ? ]成果時，全程保持客觀的態度，讓台下的學者們都十分敬佩。",
      "targetWord": "發表",
      "distractors": [
        "發明",
        "發生",
        "發送"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「成果」を学会でどうするかという文脈なので「發表」が正解です。「客觀（客観的）」「探討（検討する）」「發表（発表する）」を論文発表のシーンにまとめています。"
    },
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為鄰居半夜還在開派對，所以我決定在社區群組發表我的意見。",
        "pinyin": "yīn wèi lín jū bàn yè hái zài kāi pài duì, suǒ yǐ wǒ jué dìng zài shè qū qún zǔ fā biǎo wǒ de yì jiàn.",
        "japanese": "隣人が夜中にまだパーティーをしているので、コミュニティグループで意見を発表することにしました。",
        "chunks": [
          "因為鄰居半夜還在開派對",
          "所以我決定在社區群組",
          "發表我的意見"
        ],
        "hintText": "因為鄰居半夜還在開派對，所以我決定在社區群組"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要主管同意，我就可以在會議上發表這份新產品的行銷計畫。",
        "pinyin": "zhǐ yào zhǔ guǎn tóng yì, wǒ jiù kě yǐ zài huì yì shàng fā biǎo zhè fèn xīn chǎn pǐn de xíng xiāo jì huà.",
        "japanese": "上司が同意すれば、会議でこの新製品のマーケティング計画を発表できます。",
        "chunks": [
          "只要主管同意",
          "我就可以在會議上",
          "發表這份新產品的行銷計畫"
        ],
        "hintText": "只要主管同意，我就可以在會議上"
      },
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我妹妹很害羞，但是她還是在家庭聚會上發表了她的留學心得。",
        "pinyin": "suī rán wǒ mèi mei hěn hài xiū, dàn shì tā hái shì zài jiā tíng jù huì shàng fā biǎo le tā de liú xué xīn dé.",
        "japanese": "妹はとても恥ずかしがり屋ですが、家族の集まりで留学の感想を発表しました。",
        "chunks": [
          "雖然我妹妹很害羞",
          "但是她還是在家庭聚會上",
          "發表了她的留學心得"
        ],
        "hintText": "雖然我妹妹很害羞，但是她還是在家庭聚會上"
      }
    ]
  },
  {
    "id": "B-220",
    "band": "B",
    "targetWord": "學術",
    "distractors": [
      "技術",
      "藝術",
      "算術"
    ],
    "grammarNote": "「學術（xué shù）」は学問や研究の領域を指します。「學術界（学術界）」や「學術地位」などの形で用いられます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我哥哥沒有很高的學術地位，但是他對歷史的研究非常深入。",
        "pinyin": "suī rán wǒ gē ge méi yǒu hěn gāo de xué shù dì wèi, dàn shì tā duì lì shǐ de yán jiū fēi cháng shēn rù.",
        "japanese": "私の兄は高い学術的地位はありませんが、歴史の研究は非常に深いです。",
        "chunks": [
          "雖然我哥哥沒有很高的",
          "學術地位",
          "，但是他對歷史的研究非常深入。"
        ],
        "hintText": "雖然我哥哥沒有很高的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這間書店專賣學術書籍，所以很多教授都來這裡買書。",
        "pinyin": "yīn wèi zhè jiān shū diàn zhuān mài xué shù shū jí, suǒ yǐ hěn duō jiào shòu dōu lái zhè lǐ mǎi shū.",
        "japanese": "この書店は学術書を専門に売っているので、多くの教授がここで本を買います。",
        "chunks": [
          "因為這間書店專賣",
          "學術書籍",
          "，所以很多教授都來這裡買書。"
        ],
        "hintText": "因為這間書店專賣"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要你的學術論文通過審查，就可以申請研究經費補助。",
        "pinyin": "zhǐ yào nǐ de xué shù lùn wén tōng guò shěn chá, jiù kě yǐ shēn qǐng yán jiū jīng fèi bǔ zhù.",
        "japanese": "あなたの学術論文が審査を通れば、研究経費の補助を申請できます。",
        "chunks": [
          "只要你的",
          "學術論文",
          "通過審查，就可以申請研究經費補助。"
        ],
        "hintText": "只要你的"
      }
    ]
  },
  {
    "id": "B-221",
    "band": "B",
    "targetWord": "衝擊",
    "distractors": [
      "衝突",
      "打擊",
      "驚嚇"
    ],
    "grammarNote": "「衝擊（chōng jí）」は経済や社会における大きな影響やショックを指します。「造成衝擊（衝撃を与える）」のセットで社会問題のニュースに頻出します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然爸爸失業對我們家造成很大的衝擊，但我們還是會一起面對。",
        "pinyin": "suī rán bà ba shī yè duì wǒ men jiā zào chéng hěn dà de chōng jí，dàn wǒ men hái shì huì yì qǐ miàn duì。",
        "japanese": "父の失業は私たち家族に大きな衝撃を与えたけれど、それでも一緒に立ち向かうつもりです。",
        "chunks": [
          "雖然爸爸失業",
          "對我們家造成很大的衝擊",
          "但我們還是會一起面對"
        ],
        "hintText": "雖然爸爸失業對我們家造成"
      },
      {
        "situation": "店舗・サービス",
        "japanese": "因為疫情對餐廳造成衝擊，所以老闆只好推出打折活動來吸引客人。",
        "chinese": "因為疫情對餐廳造成衝擊，所以老闆只好推出打折活動來吸引客人。",
        "pinyin": "yīn wèi yì qíng duì cān tīng zào chéng chōng jí，suǒ yǐ lǎo bǎn zhǐ hǎo tuī chū dǎ zhé huó dòng lái xī yǐn kè rén。",
        "hintText": "因為疫情對餐廳造成",
        "chunks": [
          "因為疫情對餐廳造成衝擊",
          "所以老闆只好推出打折活動來吸引客人"
        ]
      },
      {
        "situation": "交通・移動",
        "japanese": "只要捷運停駛一天，就會對通勤族的生活造成很大的衝擊。",
        "chinese": "只要捷運停駛一天，就會對通勤族的生活造成很大的衝擊。",
        "pinyin": "zhǐ yào jié yùn tíng shǐ yì tiān，jiù huì duì tōng qín zú de shēng huó zào chéng hěn dà de chōng jí。",
        "hintText": "只要捷運停駛一天，就會對通勤族的生活造成",
        "chunks": [
          "只要捷運停駛一天",
          "就會對通勤族的生活造成很大的衝擊"
        ]
      }
    ]
  },
  {
    "id": "B-222",
    "band": "B",
    "targetWord": "負擔",
    "distractors": [
      "負責",
      "擔憂",
      "責任"
    ],
    "grammarNote": "「負擔（fù dān）」は経済的、または心理的な重荷・負担を指します。「沉重的負擔（重い負担）」や「減輕負擔（負担を減らす）」として使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然爸媽總是說不用擔心他們，但我還是覺得他們的醫藥費對我來說是很大的負擔。",
        "pinyin": "suī rán bà mā zǒng shì shuō bù yòng dān xīn tā men，dàn wǒ hái shì jué de tā men de yī yào fèi duì wǒ lái shuō shì hěn dà de fù dān。",
        "japanese": "両親はいつも心配しなくていいと言うけど、彼らの医療費は私にとって大きな負担だと感じています。",
        "chunks": [
          "雖然爸媽總是說不用擔心他們",
          "但我還是覺得",
          "他們的醫藥費對我來說是很大的負擔"
        ],
        "hintText": "雖然爸媽總是說不用擔心他們，但我還是覺得他們的醫藥費對我來說是"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為最近房貸利率調漲，所以每個月的還款金額變成很沉重的負擔。",
        "pinyin": "yīn wèi zuì jìn fáng dài lì lǜ tiáo zhǎng，suǒ yǐ měi gè yuè de huán kuǎn jīn é biàn chéng hěn chén zhòng de fù dān。",
        "japanese": "最近住宅ローンの金利が上がったので、毎月の返済額がとても重い負担になっています。",
        "chunks": [
          "因為最近房貸利率調漲",
          "所以每個月的還款金額變成",
          "很沉重的負擔"
        ],
        "hintText": "因為最近房貸利率調漲，所以每個月的還款金額變成"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要機車突然壞掉要花大錢修理，就會對我的生活造成很大的負擔。",
        "pinyin": "zhǐ yào jī chē tū rán huài diào yào huā dà qián xiū lǐ，jiù huì duì wǒ de shēng huó zào chéng hěn dà de fù dān。",
        "japanese": "バイクが突然故障して大金を修理に使うだけで、生活に大きな負担がかかります。",
        "chunks": [
          "只要機車突然壞掉要花大錢修理",
          "就會對我的生活造成",
          "很大的負擔"
        ],
        "hintText": "只要機車突然壞掉要花大錢修理，就會對我的生活造成"
      }
    ]
  },
  {
    "id": "B-223",
    "band": "B",
    "targetWord": "弱勢",
    "distractors": [
      "強勢",
      "劣勢",
      "優勢"
    ],
    "grammarNote": "「弱勢（ruò shì）」は力や勢力が弱いこと。「弱勢族群（マイノリティ・社会的弱者）」は社会問題を語る際の最重要キーワードの一つです。",
    "bossReading": {
      "text": "面對物價上漲的[ ? ]，許多年輕人感到生活壓力倍增。為了不讓這些群體成為社會中的弱勢，政府必須確保勞工的權益，並減輕他們的經濟負擔。",
      "targetWord": "衝擊",
      "distractors": [
        "衝突",
        "打擊",
        "驚嚇"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "物価上昇による「影響・ショック」を表すため「衝擊」が正解です。バッチ内の「弱勢」「權益」「負擔」を一つの文脈に統合し、現代の若者が直面する経済的プレッシャーのストーリーにしています。"
    },
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為我家的收入比較少，所以被列入弱勢族群，可以申請補助。",
        "pinyin": "yīn wèi wǒ jiā de shōu rù bǐ jiào shǎo, suǒ yǐ bèi liè rù ruò shì zú qún, kě yǐ shēn qǐng bǔ zhù.",
        "japanese": "我が家の収入が少ないので、弱勢族群に認定され、補助を申請できます。",
        "chunks": [
          "因為我家的收入比較少",
          "所以被列入弱勢族群",
          "可以申請補助"
        ],
        "hintText": "因為我家的收入比較少，所以被列入"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要持有身心障礙手冊，就可以在公家機關申請弱勢補助。",
        "pinyin": "zhǐ yào chí yǒu shēn xīn zhàng ài shǒu cè, jiù kě yǐ zài gōng jiā jī guān shēn qǐng ruò shì bǔ zhù.",
        "japanese": "身心障害者手帳を持っていれば、公的機関で弱勢補助を申請できます。",
        "chunks": [
          "只要持有身心障礙手冊",
          "就可以在公家機關申請弱勢補助"
        ],
        "hintText": "只要持有身心障礙手冊，就可以在公家機關申請"
      },
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他是弱勢族群，但是他的努力讓大家都非常佩服。",
        "pinyin": "suī rán tā shì ruò shì zú qún, dàn shì tā de nǔ lì ràng dà jiā dōu fēi cháng pèi fú.",
        "japanese": "彼は弱勢族群ですが、その努力には皆とても感心しています。",
        "chunks": [
          "雖然他是弱勢族群",
          "但是他的努力讓大家都非常佩服"
        ],
        "hintText": "雖然他是"
      }
    ]
  },
  {
    "id": "B-224",
    "band": "B",
    "targetWord": "權益",
    "distractors": [
      "權力",
      "權利",
      "利益"
    ],
    "grammarNote": "「權益（quán yì）」は権利と利益のこと。「權利（権利）」と似ていますが、労働や消費者問題では「保護權益（権益を保護する）」としてこちらが好まれます。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為房東擅自調漲租金，所以我們決定聯合住戶一起爭取租屋權益。",
        "pinyin": "yīn wèi fáng dōng shàn zì tiáo zhǎng zū jīn, suǒ yǐ wǒ men jué dìng lián hé zhù hù yì qǐ zhēng qǔ zū wū quán yì。",
        "japanese": "大家が勝手に家賃を値上げしたので、私たちは入居者と協力して賃貸の権益を守ることにしました。",
        "chunks": [
          "因為房東擅自調漲租金",
          "所以我們決定聯合住戶",
          "一起爭取租屋權益"
        ],
        "hintText": "因為房東擅自調漲租金，所以我們決定聯合住戶一起爭取"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要公司違反勞基法，勞工就可以向主管機關申訴以維護自身權益。",
        "pinyin": "zhǐ yào gōng sī wéi fǎn láo jī fǎ, láo gōng jiù kě yǐ xiàng zhǔ guǎn jī guān shēn sù yǐ wéi hù zì shēn quán yì。",
        "japanese": "会社が労働基準法に違反すれば、労働者は監督機関に申し立てて自身の権益を守ることができます。",
        "chunks": [
          "只要公司違反勞基法",
          "勞工就可以向主管機關申訴",
          "以維護自身權益"
        ],
        "hintText": "只要公司違反勞基法，勞工就可以向主管機關申訴以維護"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然店員說特價商品不能退換，但消保法保障我們的權益，所以還是可以要求退款。",
        "pinyin": "suī rán diàn yuán shuō tè jià shāng pǐn bù néng tuì huàn, dàn xiāo bǎo fǎ bǎo zhàng wǒ men de quán yì, suǒ yǐ hái shì kě yǐ yāo qiú tuì kuǎn。",
        "japanese": "店員は特価品は返品交換できないと言いましたが、消費者保護法が私たちの権益を守っているので、返金を要求できます。",
        "chunks": [
          "雖然店員說特價商品不能退換",
          "但消保法保障我們的權益",
          "所以還是可以要求退款"
        ],
        "hintText": "雖然店員說特價商品不能退換，但消保法保障"
      }
    ]
  },
  {
    "id": "B-225",
    "band": "B",
    "targetWord": "偏鄉",
    "distractors": [
      "偏僻",
      "偏遠",
      "鄉下"
    ],
    "grammarNote": "「偏鄉（piān xiāng）」は「偏遠鄉鎮」の略で、交通が不便なへき地を指します。「偏鄉教育」は台湾の教育格差問題を象徴する言葉です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我住在偏鄉，但是每個週末還是會搭捷運去台北找朋友。",
        "pinyin": "suī rán wǒ zhù zài piān xiāng ， dàn shì měi gè zhōu mò hái shì huì dā jié yùn qù tái běi zhǎo péng yǒu 。",
        "japanese": "私は僻地に住んでいますが、毎週末はまだMRTに乗って台北に友達に会いに行きます。",
        "chunks": [
          "雖然我住在偏鄉",
          "但是每個週末還是會搭捷運去台北",
          "找朋友"
        ],
        "hintText": "雖然我住在"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為偏鄉的公車班次很少，所以很多人只能騎機車去市區買東西。",
        "pinyin": "yīn wèi piān xiāng de gōng chē bān cì hěn shǎo ， suǒ yǐ hěn duō rén zhǐ néng qí jī chē qù shì qū mǎi dōng xī 。",
        "japanese": "僻地はバスの本数が少ないので、多くの人はスクーターで市街地に買い物に行くしかありません。",
        "chunks": [
          "因為偏鄉的公車班次很少",
          "所以很多人只能騎機車",
          "去市區買東西"
        ],
        "hintText": "因為"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要偏鄉的網路訊號穩定，我就不用擔心收不到健保卡的通知簡訊。",
        "pinyin": "zhǐ yào piān xiāng de wǎng lù xùn hào wěn dìng ， wǒ jiù bù yòng dān xīn shōu bú dào jiàn bǎo kǎ de tōng zhī jiǎn xùn 。",
        "japanese": "僻地のネット信号さえ安定していれば、健康保険証の通知SMSが届かない心配はありません。",
        "chunks": [
          "只要偏鄉的網路訊號穩定",
          "我就不用擔心",
          "收不到健保卡的通知簡訊"
        ],
        "hintText": "只要"
      }
    ]
  },
  {
    "id": "B-226",
    "band": "B",
    "targetWord": "高齡化",
    "distractors": [
      "現代化",
      "全球化",
      "邊緣化"
    ],
    "grammarNote": "「高齡化（gāo líng huà）」は高齢化のこと。「長照（長期照護＝介護）」や「少子化」とセットで出題される確率が非常に高い語彙です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為高齡化，所以我家阿嬤現在住在長照機構，我們每週都會去探望她。",
        "pinyin": "yīn wèi gāo líng huà, suǒ yǐ wǒ jiā ā mā xiàn zài zhù zài cháng zhào jī gòu, wǒ men měi zhōu dōu huì qù tàn wàng tā.",
        "japanese": "高齢化のため、うちの祖母は今介護施設に住んでいて、私たちは毎週彼女を訪ねます。",
        "chunks": [
          "因為高齡化",
          "所以我家阿嬤現在住在長照機構",
          "我們每週都會去探望她"
        ],
        "hintText": "因為高齡化，所以"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然高齡化讓捷運站增加很多無障礙設施，但是尖峰時間還是很擁擠。",
        "pinyin": "suī rán gāo líng huà ràng jié yùn zhàn zēng jiā hěn duō wú zhàng ài shè shī, dàn shì jiān fēng shí jiān hái shì hěn yōng jǐ.",
        "japanese": "高齢化で地下鉄の駅にバリアフリー設備が増えたけれど、ラッシュ時はやはり混雑しています。",
        "chunks": [
          "雖然高齡化讓捷運站增加很多無障礙設施",
          "但是尖峰時間還是很擁擠"
        ],
        "hintText": "雖然高齡化讓"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要高齡化問題不解決，長照資源不足的糾紛就會越來越多。",
        "pinyin": "zhǐ yào gāo líng huà wèn tí bù jiě jué, cháng zhào zī yuán bù zú de jiū fēn jiù huì yuè lái yuè duō.",
        "japanese": "高齢化問題が解決されなければ、介護資源不足のトラブルはますます増えるでしょう。",
        "chunks": [
          "只要高齡化問題不解決",
          "長照資源不足的糾紛就會越來越多"
        ],
        "hintText": "只要高齡化問題不解決，"
      }
    ]
  },
  {
    "id": "B-227",
    "band": "B",
    "targetWord": "歧視",
    "distractors": [
      "忽視",
      "輕視",
      "重視"
    ],
    "grammarNote": "「歧視（qí shì）」は偏見を持って差別すること。「消除歧視（差別をなくす）」「種族歧視（人種差別）」などのコロケーションで使われます。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為公司最近推行了反歧視政策，所以我們都要參加相關的培訓課程。",
        "pinyin": "yīn wèi gōng sī zuì jìn tuī xíng le fǎn qí shì zhèng cè, suǒ yǐ wǒ men dōu yào cān jiā xiāng guān de péi xùn kè chéng.",
        "japanese": "会社が最近反差別方針を導入したので、私たちは皆関連する研修コースに参加しなければなりません。",
        "chunks": [
          "因為公司最近推行了反歧視政策",
          "所以我們都要參加",
          "相關的培訓課程"
        ],
        "hintText": "因為公司最近推行了反歧視政策，所以我們都要參加"
      },
      {
        "situation": "人間関係・家族",
        "chinese": "雖然阿嬤沒有受過什麼教育，但是她從來不會對外籍看護有任何歧視。",
        "pinyin": "suī rán ā mā méi yǒu shòu guò shén me jiào yù, dàn shì tā cóng lái bù huì duì wài jí kān hù yǒu rèn hé qí shì.",
        "japanese": "祖母はあまり教育を受けていませんが、外国人の介護士に対して決して差別しません。",
        "chunks": [
          "雖然阿嬤沒有受過什麼教育",
          "但是她從來不會對外籍看護",
          "有任何歧視"
        ],
        "hintText": "雖然阿嬤沒有受過什麼教育，但是她從來不會對外籍看護"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要這家餐廳不再發生歧視顧客的事件，我就願意再來光顧。",
        "pinyin": "zhǐ yào zhè jiā cān tīng bù zài fā shēng qí shì gù kè de shì jiàn, wǒ jiù yuàn yì zài lái guāng gù.",
        "japanese": "このレストランが二度と客を差別する事件を起こさなければ、私はまた来店してもいいです。",
        "chunks": [
          "只要這家餐廳不再發生歧視顧客的事件",
          "我就願意",
          "再來光顧"
        ],
        "hintText": "只要這家餐廳不再發生歧視顧客的事件，我就願意"
      }
    ]
  },
  {
    "id": "B-228",
    "band": "B",
    "targetWord": "爭議",
    "distractors": [
      "討論",
      "抗議",
      "建議"
    ],
    "grammarNote": "「爭議（zhēng yì）」は意見の対立や論争を指します。「引發爭議（物議を醸す、論争を引き起こす）」はニュースの見出しの定番です。",
    "bossReading": {
      "text": "面對高齡化與少子化的雙重挑戰，政府推出了新的育兒與長照補助政策。然而，財源要從哪裡來卻引發了極大的[ ? ]，民眾對於是否該增稅有著兩極的看法。",
      "targetWord": "爭議",
      "distractors": [
        "討論",
        "抗議",
        "建議"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "政策の財源を巡って意見が二極化している文脈なので「爭議（論争）」が正解です。「高齡化」「補助」など台湾の政策に関する語彙を組み合わせています。"
    },
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為鄰居半夜施工的噪音問題，我們和管委會之間引發了不少爭議。",
        "pinyin": "yīn wèi lín jū bàn yè shī gōng de zào yīn wèn tí ， wǒ men hé guǎn wěi huì zhī jiān yǐn fā le bù shǎo zhēng yì 。",
        "japanese": "隣人が夜中に工事をする騒音問題で、私たちと管理委員会の間でかなりの論争が起きました。",
        "chunks": [
          "因為鄰居半夜施工的噪音問題",
          "我們和管委會之間",
          "引發了不少爭議"
        ],
        "hintText": "因為鄰居半夜施工的噪音問題，我們和管委會之間"
      },
      {
        "situation": "公的手続き・職場",
        "title": "職場での給与計算ミス",
        "chinese": "雖然公司已經道歉，但這次薪資計算錯誤還是引發了員工之間的爭議。",
        "pinyin": "suī rán gōng sī yǐ jīng dào qiàn ， dàn zhè cì xīn zī jì suàn cuò wù hái shì yǐn fā le yuán gōng zhī jiān de zhēng yì 。",
        "japanese": "会社は謝罪したものの、今回の給与計算ミスは従業員間の論争を引き起こしました。",
        "chunks": [
          "雖然公司已經道歉",
          "但這次薪資計算錯誤",
          "還是引發了員工之間的爭議"
        ],
        "hintText": "雖然公司已經道歉，但這次薪資計算錯誤"
      },
      {
        "situation": "店舗・サービス",
        "title": "レストランのサービス料",
        "chinese": "只要餐廳收取服務費，就常常會引發顧客對於收費合理性的爭議。",
        "pinyin": "zhǐ yào cān tīng shōu qǔ fú wù fèi ， jiù cháng cháng huì yǐn fā gù kè duì yú shōu fèi hé lǐ xìng de zhēng yì 。",
        "japanese": "レストランがサービス料を取ると、よく客が料金の妥当性について論争を引き起こします。",
        "chunks": [
          "只要餐廳收取服務費",
          "就常常會引發顧客",
          "對於收費合理性的爭議"
        ],
        "hintText": "只要餐廳收取服務費，就常常會引發顧客"
      }
    ]
  },
  {
    "id": "B-229",
    "band": "B",
    "targetWord": "查證",
    "distractors": [
      "證明",
      "保證",
      "作證"
    ],
    "grammarNote": "「查證（chá zhèng）」は事実かどうかを調査して証明すること。台湾で社会問題となっているフェイクニュース対策（事實查核）の文脈で必須です。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為最近假訊息太多，所以收到可疑訊息時，我一定要先查證才不會被騙。",
        "pinyin": "yīn wèi zuì jìn jiǎ xùn xī tài duō，suǒ yǐ shōu dào kě yí xùn xī shí，wǒ yī dìng yào xiān chá zhèng cái bù huì bèi piàn。",
        "japanese": "最近フェイクニュースが多いので、怪しいメッセージを受け取った時は、必ず先に確認しないと騙されません。",
        "chunks": [
          "因為最近假訊息太多",
          "所以收到可疑訊息時",
          "我一定要先查證",
          "才不會被騙"
        ],
        "hintText": "因為最近假訊息太多，所以收到可疑訊息時，我一定要先"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然店員說這件衣服是純棉的，但我還是想查證一下標籤上的成分。",
        "pinyin": "suī rán diàn yuán shuō zhè jiàn yī fú shì chún mián de，dàn wǒ hái shì xiǎng chá zhèng yī xià biāo qiān shàng de chéng fèn。",
        "japanese": "店員がこの服は純綿だと言ったけど、やっぱりラベルの成分を確認したい。",
        "chunks": [
          "雖然店員說這件衣服是純棉的",
          "但我還是想查證一下",
          "標籤上的成分"
        ],
        "hintText": "雖然店員說這件衣服是純棉的，但我還是想"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要收到政府補助的通知，就應該先查證官方網站，以免上當。",
        "pinyin": "zhǐ yào shōu dào zhèng fǔ bǔ zhù de tōng zhī，jiù yīng gāi xiān chá zhèng guān fāng wǎng zhàn，yǐ miǎn shàng dàng。",
        "japanese": "政府補助の通知を受け取ったら、まず公式サイトで確認して、騙されないようにすべきです。",
        "chunks": [
          "只要收到政府補助的通知",
          "就應該先查證官方網站",
          "以免上當"
        ],
        "hintText": "只要收到政府補助的通知，就應該先"
      }
    ]
  },
  {
    "id": "B-230",
    "band": "B",
    "targetWord": "補助",
    "distractors": [
      "幫助",
      "贊助",
      "捐款"
    ],
    "grammarNote": "「補助（bǔ zhù）」は国や組織が財政的な支援を行うこと。「申請補助（補助金を申請する）」などの組み合わせで使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為我們家收入不高，所以申請了政府的育兒補助來減輕負擔。",
        "pinyin": "yīn wèi wǒ men jiā shōu rù bù gāo, suǒ yǐ shēn qǐng le zhèng fǔ de yù ér bǔ zhù lái jiǎn qīng fù dān.",
        "japanese": "我が家は収入が低いので、政府の育児補助を申請して負担を軽減しました。",
        "chunks": [
          "因為我們家收入不高",
          "所以申請了政府的育兒補助",
          "來減輕負擔"
        ],
        "hintText": "因為我們家收入不高，所以申請了政府的"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要備齊健保卡和身分證，就可以到區公所申請租金補助。",
        "pinyin": "zhǐ yào bèi qí jiàn bǎo kǎ hé shēn fèn zhèng, jiù kě yǐ dào qū gōng suǒ shēn qǐng zū jīn bǔ zhù.",
        "japanese": "健保卡と身分証を揃えさえすれば、区役所で家賃補助を申請できます。",
        "chunks": [
          "只要備齊健保卡和身分證",
          "就可以到區公所申請租金補助"
        ],
        "hintText": "只要備齊健保卡和身分證，就可以到區公所申請"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然機車被颱風吹倒了，但因為有申請災害補助，所以修車費可以報銷。",
        "pinyin": "suī rán jī chē bèi tái fēng chuī dǎo le, dàn yīn wèi yǒu shēn qǐng zāi hài bǔ zhù, suǒ yǐ xiū chē fèi kě yǐ bào xiāo.",
        "japanese": "バイクが台風で倒れたけど、災害補助を申請したので修理代は清算できます。",
        "chunks": [
          "雖然機車被颱風吹倒了",
          "但因為有申請災害補助",
          "所以修車費可以報銷"
        ],
        "hintText": "雖然機車被颱風吹倒了，但因為有申請"
      }
    ]
  },
  {
    "id": "B-231",
    "band": "B",
    "targetWord": "傳統",
    "distractors": [
      "傳說",
      "傳播",
      "傳達"
    ],
    "grammarNote": "「傳統（chuán tǒng）」は「伝統」や「伝統的な」という意味です。台湾の「傳統市場（昔ながらの市場）」はローカル文化を語る文脈の定番です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我家很傳統，但是只要我堅持，他們就會尊重我的選擇。",
        "pinyin": "suī rán wǒ jiā hěn chuán tǒng，dàn shì zhǐ yào wǒ jiān chí，tā men jiù huì zūn zhòng wǒ de xuǎn zé。",
        "japanese": "うちはとても伝統的ですが、私が主張すれば彼らは私の選択を尊重してくれます。",
        "chunks": [
          "雖然我家很傳統",
          "但是只要我堅持",
          "他們就會尊重我的選擇"
        ],
        "hintText": "雖然我家很"
      },
      {
        "situation": "店舗・サービス",
        "category": "店舗・服務",
        "chinese": "因為這家傳統市場的東西比較便宜，所以我每個週末都會去買菜。",
        "pinyin": "yīn wèi zhè jiā chuán tǒng shì chǎng de dōng xi bǐ jiào pián yi，suǒ yǐ wǒ měi gè zhōu mò dōu huì qù mǎi cài。",
        "japanese": "この伝統的な市場の物は比較的安いので、毎週末買い物に行きます。",
        "chunks": [
          "因為這家傳統市場的東西比較便宜",
          "所以我每個週末都會去買菜"
        ],
        "hintText": "因為這家"
      },
      {
        "situation": "交通・移動",
        "category": "交通・移動",
        "chinese": "雖然騎機車去傳統市場很方便，但是停車位很難找。",
        "pinyin": "suī rán qí jī chē qù chuán tǒng shì chǎng hěn fāng biàn，dàn shì tíng chē wèi hěn nán zhǎo。",
        "japanese": "バイクで伝統市場に行くのはとても便利ですが、駐車場を見つけるのが難しいです。",
        "chunks": [
          "雖然騎機車去傳統市場很方便",
          "但是停車位很難找"
        ],
        "hintText": "雖然騎機車去"
      }
    ]
  },
  {
    "id": "B-232",
    "band": "B",
    "targetWord": "習俗",
    "distractors": [
      "習慣",
      "熟悉",
      "練習"
    ],
    "grammarNote": "「習俗（xí sú）」は社会や地域に根付いた「風習・しきたり」のこと。個人の癖やルーティンを表す「習慣」とは明確に区別されます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然現代人覺得傳統結婚習俗很麻煩，但是為了尊重長輩，還是會盡量遵守。",
        "pinyin": "suī rán xiàn dài rén jué de chuán tǒng jié hūn xí sú hěn má fan, dàn shì wèi le zūn zhòng zhǎng bèi, hái shì huì jìn liàng zūn shǒu.",
        "japanese": "現代人は伝統的な結婚のしきたりが面倒だと思うけれど、長輩を尊重するためにできるだけ守る。",
        "chunks": [
          "雖然現代人覺得傳統結婚習俗很麻煩",
          "但是為了尊重長輩",
          "還是會盡量遵守"
        ],
        "hintText": "雖然現代人覺得傳統結婚習俗很麻煩，但是為了尊重長輩，"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為鄰居燒金紙的習俗造成空氣污染，所以我們只好向管委會投訴。",
        "pinyin": "yīn wèi lín jū shāo jīn zhǐ de xí sú zào chéng kōng qì wū rǎn, suǒ yǐ wǒ men zhǐ hǎo xiàng guǎn wěi huì tóu sù.",
        "japanese": "隣人が金紙を燃やす習慣で大気汚染が発生したので、管理組合に苦情を言わざるを得なかった。",
        "chunks": [
          "因為鄰居燒金紙的習俗造成空氣污染",
          "所以我們只好向管委會投訴"
        ],
        "hintText": "因為鄰居燒金紙的習俗造成空氣污染，"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要客人了解在地的飲食習俗，我們就可以推薦最道地的台灣小吃。",
        "pinyin": "zhǐ yào kè rén liǎo jiě zài dì de yǐn shí xí sú, wǒ men jiù kě yǐ tuī jiàn zuì dào dì de tái wān xiǎo chī.",
        "japanese": "お客様が現地の食習慣を理解してさえいれば、最も本場の台湾小吃を推薦できます。",
        "chunks": [
          "只要客人了解在地的飲食習俗",
          "我們就可以推薦最道地的台灣小吃"
        ],
        "hintText": "只要客人了解在地的飲食習俗，"
      }
    ]
  },
  {
    "id": "B-233",
    "band": "B",
    "targetWord": "信仰",
    "distractors": [
      "信任",
      "信心",
      "信用"
    ],
    "grammarNote": "「信仰（xìn yǎng）」は宗教的、または思想的な信仰のこと。台湾の民間信仰（媽祖など）は歴史・文化テーマの読解問題で頻出します。",
    "bossReading": {
      "text": "台灣社會保留了許多豐富的傳統與[ ? ]。特別是在中南部，當地的宗教活動不僅是長輩的寄託，現在也吸引了許多年輕人參與，展現出跨世代的凝聚力。",
      "targetWord": "信仰",
      "distractors": [
        "信任",
        "信心",
        "信用"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "空欄の後ろで「宗教活動」について語られているため、宗教的な概念を表す「信仰」が正解です。「傳統（伝統）」「習俗（風習）」などの文化的キーワードとも親和性が高いです。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為我媽媽有很深的信仰，所以每個月都會去廟裡拜拜。",
        "pinyin": "yīn wèi wǒ mā ma yǒu hěn shēn de xìn yǎng, suǒ yǐ měi gè yuè dōu huì qù miào lǐ bài bài.",
        "japanese": "私の母は深い信仰を持っているので、毎月お寺にお参りに行きます。",
        "chunks": [
          "因為我媽媽有很深的信仰",
          "所以每個月都會去廟裡拜拜"
        ],
        "hintText": "因為我媽媽有很深的信仰，"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然他沒有特定的信仰，但是遇到困難時還是會去廟裡求平安。",
        "pinyin": "suī rán tā méi yǒu tè dìng de xìn yǎng, dàn shì yù dào kùn nán shí hái shì huì qù miào lǐ qiú píng ān.",
        "japanese": "彼は特定の信仰を持っていないけれど、困難に直面するとやはりお寺に安全を祈りに行きます。",
        "chunks": [
          "雖然他沒有特定的信仰",
          "但是遇到困難時還是會去廟裡求平安"
        ],
        "hintText": "雖然他沒有特定的信仰，"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要顧客有宗教信仰需求，我們店就會準備素食便當。",
        "pinyin": "zhǐ yào gù kè yǒu zōng jiào xìn yǎng xū qiú, wǒ men diàn jiù huì zhǔn bèi sù shí biàn dāng.",
        "japanese": "お客様に宗教上の信仰のご要望があれば、当店ではベジタリアン弁当をご用意します。",
        "chunks": [
          "只要顧客有宗教信仰需求",
          "我們店就會準備素食便當"
        ],
        "hintText": "只要顧客有宗教信仰需求，"
      }
    ]
  },
  {
    "id": "B-234",
    "band": "B",
    "targetWord": "祭典",
    "distractors": [
      "經典",
      "字典",
      "典禮"
    ],
    "grammarNote": "「祭典（jì diǎn）」は宗教的、または伝統的な「お祭り・祭典」を指します。「儀式（儀式）」などとセットで使われやすい単語です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然廟會的祭典很熱鬧，但是因為要準備供品，所以我媽忙得沒時間去。",
        "pinyin": "suī rán miào huì de jì diǎn hěn rè nào, dàn shì yīn wèi yào zhǔn bèi gòng pǐn, suǒ yǐ wǒ mā máng de méi shí jiān qù.",
        "japanese": "廟會の祭典は賑やかだけど、供物を準備しなければならないので、母は忙しくて行く時間がありません。",
        "chunks": [
          "雖然廟會的祭典很熱鬧",
          "但是因為要準備供品",
          "所以我媽忙得沒時間去"
        ],
        "hintText": "雖然廟會的"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要祭典一結束，我們就要趕快把垃圾清乾淨，不然會被開罰單。",
        "pinyin": "zhǐ yào jì diǎn yī jié shù, wǒ men jiù yào gǎn kuài bǎ lè sè qīng gān jìng, bù rán huì bèi kāi fá dān.",
        "japanese": "祭典が終わったらすぐにゴミをきれいに片付けないと、罰金を取られます。",
        "chunks": [
          "只要祭典一結束",
          "我們就要趕快把垃圾清乾淨",
          "不然會被開罰單"
        ],
        "hintText": "只要"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為祭典的關係，所以捷運站周邊實施交通管制，機車也不能通行。",
        "pinyin": "yīn wèi jì diǎn de guān xì, suǒ yǐ jié yùn zhàn zhōu biān shí shī jiāo tōng guǎn zhì, jī chē yě bù néng tōng xíng.",
        "japanese": "祭典の関係で、MRT駅周辺は交通規制が行われ、バイクも通行できません。",
        "chunks": [
          "因為祭典的關係",
          "所以捷運站周邊實施交通管制",
          "機車也不能通行"
        ],
        "hintText": "因為"
      }
    ]
  },
  {
    "id": "B-235",
    "band": "B",
    "targetWord": "傳承",
    "distractors": [
      "傳染",
      "傳說",
      "傳達"
    ],
    "grammarNote": "「傳承（chuán chéng）」は技術、文化、歴史などを「後の世代へ受け継ぐ（伝承する）」という、文化保存の文脈における超重要動詞です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然阿公已經過世了，但他傳承給我們的客家精神永遠不會消失。",
        "pinyin": "suī rán ā gōng yǐ jīng guò shì le, dàn tā chuán chéng gěi wǒ men de kè jiā jīng shén yǒng yuǎn bù huì xiāo shī.",
        "japanese": "雖然爺爺已經過世了，但他傳承給我們的客家精神永遠不會消失。",
        "chunks": [
          "雖然阿公已經過世了，",
          "但他傳承給我們的",
          "客家精神永遠不會消失。"
        ],
        "hintText": "雖然阿公已經過世了，但他"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家老餅舖堅持傳承古法，所以每逢中秋節訂單總是爆滿。",
        "pinyin": "yīn wèi zhè jiā lǎo bǐng pù jiān chí chuán chéng gǔ fǎ, suǒ yǐ měi féng zhōng qiū jié dìng dān zǒng shì bào mǎn.",
        "japanese": "因為這家老餅鋪堅持傳承古法，所以每逢中秋節訂單總是爆滿。",
        "chunks": [
          "因為這家老餅舖堅持",
          "傳承古法，",
          "所以每逢中秋節訂單總是爆滿。"
        ],
        "hintText": "因為這家老餅舖堅持"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要我們繼續傳承長輩的交通安全觀念，就能減少機車事故的發生。",
        "pinyin": "zhǐ yào wǒ men jì xù chuán chéng zhǎng bèi de jiāo tōng ān quán guān niàn, jiù néng jiǎn shǎo jī chē shì gù de fā shēng.",
        "japanese": "只要我們繼續傳承長輩的交通安全觀念，就能減少機車事故的發生。",
        "chunks": [
          "只要我們繼續傳承",
          "長輩的交通安全觀念，",
          "就能減少機車事故的發生。"
        ],
        "hintText": "只要我們繼續傳承"
      }
    ]
  },
  {
    "id": "B-236",
    "band": "B",
    "targetWord": "融合",
    "distractors": [
      "融化",
      "合作",
      "符合"
    ],
    "grammarNote": "「融合（róng hé）」は異なるものが混ざり合って一つになること。文化や料理、音楽などの「フュージョン・融合」を表す際に使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們來自不同國家，但是因為興趣相同，所以很快地融合在一起。",
        "pinyin": "suī rán wǒ men lái zì bù tóng guó jiā, dàn shì yīn wèi xìng qù xiāng tóng, suǒ yǐ hěn kuài de róng hé zài yì qǐ.",
        "japanese": "私たちは出身国は違いますが、趣味が同じなのですぐに打ち解けました。",
        "chunks": [
          "雖然我們來自不同國家",
          "但是因為興趣相同",
          "所以很快地融合在一起"
        ],
        "hintText": "雖然我們來自不同國家，但是因為興趣相同，所以很快地"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "這家餐廳的菜色融合了台式跟日式口味，只要吃過一次就會愛上。",
        "pinyin": "zhè jiā cān tīng de cài sè róng hé le tái shì gēn rì shì kǒu wèi, zhǐ yào chī guò yí cì jiù huì ài shàng.",
        "japanese": "このレストランの料理は台湾風と日本風の味を融合していて、一度食べれば好きになります。",
        "chunks": [
          "這家餐廳的菜色融合了台式跟日式口味",
          "只要吃過一次",
          "就會愛上"
        ],
        "hintText": "這家餐廳的菜色"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為社區裡住了很多外國人，所以文化融合時常會發生一些小誤會。",
        "pinyin": "yīn wèi shè qū lǐ zhù le hěn duō wài guó rén, suǒ yǐ wén huà róng hé shí cháng huì fā shēng yì xiē xiǎo wù huì.",
        "japanese": "コミュニティには外国人が多く住んでいるので、文化の融合の際に小さな誤解がよく起こります。",
        "chunks": [
          "因為社區裡住了很多外國人",
          "所以文化融合時常會發生一些小誤會"
        ],
        "hintText": "因為社區裡住了很多外國人，所以"
      }
    ]
  },
  {
    "id": "B-237",
    "band": "B",
    "targetWord": "多元",
    "distractors": [
      "多少",
      "多數",
      "多半"
    ],
    "grammarNote": "「多元（duō yuán）」は「多様な、多元的な」という意味。「多元文化（多文化）」は台湾社会のアイデンティティを形容する上で不可欠なキーワードです。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們來自不同的家庭背景，但是因為尊重彼此的多元文化，所以相處得很融洽。",
        "pinyin": "suī rán wǒ men lái zì bù tóng de jiā tíng bèi jǐng, dàn shì yīn wèi zūn zhòng bǐ cǐ de duō yuán wén huà, suǒ yǐ xiāng chǔ de hěn róng qià.",
        "japanese": "私たちは異なる家庭背景から来ていますが、お互いの多様な文化を尊重しているので、とてもうまくやっています。",
        "chunks": [
          "雖然我們來自不同的家庭背景",
          "但是因為尊重彼此的多元文化",
          "所以相處得很融洽"
        ],
        "hintText": "雖然我們來自不同的家庭背景，但是因為尊重彼此的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳提供多元的異國料理，所以只要放假，我就會帶朋友來吃。",
        "pinyin": "yīn wèi zhè jiā cān tīng tí gōng duō yuán de yì guó liào lǐ, suǒ yǐ zhǐ yào fàng jià, wǒ jiù huì dài péng yǒu lái chī.",
        "japanese": "このレストランは多様な異国料理を提供しているので、休みになると必ず友達を連れて食べに来ます。",
        "chunks": [
          "因為這家餐廳提供多元的異國料理",
          "所以只要放假",
          "我就會帶朋友來吃"
        ],
        "hintText": "因為這家餐廳提供"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然公司規模不大，但是因為重視多元的意見，所以員工的提案常常被採納。",
        "pinyin": "suī rán gōng sī guī mó bù dà, dàn shì yīn wèi zhòng shì duō yuán de yì jiàn, suǒ yǐ yuán gōng de tí àn cháng cháng bèi cǎi nà.",
        "japanese": "会社の規模は大きくありませんが、多様な意見を重視しているので、従業員の提案がよく採用されます。",
        "chunks": [
          "雖然公司規模不大",
          "但是因為重視多元的意見",
          "所以員工的提案常常被採納"
        ],
        "hintText": "雖然公司規模不大，但是因為重視"
      }
    ]
  },
  {
    "id": "B-238",
    "band": "B",
    "targetWord": "族群",
    "distractors": [
      "人群",
      "群眾",
      "社群"
    ],
    "grammarNote": "「族群（zú qún）」は共通の文化や言語を持つ集団（エスニックグループ）を指します。客家人、原住民、新住民などをまとめて語る際に頻出します。",
    "bossReading": {
      "text": "台灣社會之所以充滿活力，正是因為它涵蓋了各種不同的[ ? ]。從原住民、客家人到新住民，大家在同一塊土地上生活，彼此的文化互相融合，形成了今天豐富的樣貌。",
      "targetWord": "族群",
      "distractors": [
        "人群",
        "群眾",
        "社群"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "空欄の直後に「原住民、客家人、新住民」という具体的なエスニックグループの例が挙げられているため「族群」が正解です。「多元（多様性）」「融合（融合する）」といったワードと強く結びつく概念です。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我們來自不同的族群，但是只要互相尊重，就能成為好朋友。",
        "pinyin": "suī rán wǒ men lái zì bù tóng de zú qún, dàn shì zhǐ yào hù xiàng zūn zhòng, jiù néng chéng wéi hǎo péng yǒu.",
        "japanese": "私たちは異なるエスニックグループの出身ですが、互いに尊重し合えば良い友達になれます。",
        "chunks": [
          "雖然我們來自不同的",
          "族群",
          "，但是只要互相尊重，就能成為好朋友。"
        ],
        "hintText": "雖然我們來自不同的"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為社區裡有好多個族群，所以管理處常常要協調大家的意見。",
        "pinyin": "yīn wèi shè qū lǐ yǒu hǎo duō gè zú qún, suǒ yǐ guǎn lǐ chù cháng cháng yào xié tiáo dà jiā de yì jiàn.",
        "japanese": "コミュニティにはたくさんのエスニックグループがいるので、管理事務所はよくみんなの意見を調整しなければなりません。",
        "chunks": [
          "因為社區裡有好多個",
          "族群",
          "，所以管理處常常要協調大家的意見。"
        ],
        "hintText": "因為社區裡有好多個"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要公司尊重每個族群的文化，員工就會更有歸屬感。",
        "pinyin": "zhǐ yào gōng sī zūn zhòng měi gè zú qún de wén huà, yuán gōng jiù huì gèng yǒu guī shǔ gǎn.",
        "japanese": "会社がそれぞれのエスニックグループの文化を尊重すれば、従業員はより帰属意識を持つでしょう。",
        "chunks": [
          "只要公司尊重每個",
          "族群",
          "的文化，員工就會更有歸屬感。"
        ],
        "hintText": "只要公司尊重每個"
      }
    ]
  },
  {
    "id": "B-239",
    "band": "B",
    "targetWord": "遺跡",
    "distractors": [
      "遺失",
      "遺憾",
      "痕跡"
    ],
    "grammarNote": "「遺跡（yí jī）」は過去の時代から残された建物や史跡のこと。台湾の歴史（オランダ統治、日本統治など）をテーマにした読解問題の必須単語です。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為我家附近的遺跡最近在整修，所以機車停車位變得好難找。",
        "pinyin": "yīn wèi wǒ jiā fù jìn de yí jī zuì jìn zài zhěng xiū, suǒ yǐ jī chē tíng chē wèi biàn de hǎo nán zhǎo.",
        "japanese": "家の近くの遺跡が最近改修中なので、バイクの駐車スペースがとても見つけにくくなった。",
        "chunks": [
          "因為我家附近的遺跡最近在整修",
          "所以機車停車位變得好難找"
        ],
        "hintText": "因為我家附近的"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然捷運站旁邊的遺跡很漂亮，但是遊客太多導致交通很亂。",
        "pinyin": "suī rán jié yùn zhàn páng biān de yí jī hěn piào liang, dàn shì yóu kè tài duō dǎo zhì jiāo tōng hěn luàn.",
        "japanese": "MRT駅の隣の遺跡はとても綺麗だけど、観光客が多すぎて交通が混乱している。",
        "chunks": [
          "雖然捷運站旁邊的遺跡很漂亮",
          "但是遊客太多導致交通很亂"
        ],
        "hintText": "雖然捷運站旁邊的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要去那間賣紀念品的店，就可以拿到介紹附近遺跡的免費地圖。",
        "pinyin": "zhǐ yào qù nà jiān mài jì niàn pǐn de diàn, jiù kě yǐ ná dào jiè shào fù jìn yí jī de miǎn fèi dì tú.",
        "japanese": "あのお土産屋さんに行きさえすれば、近くの遺跡を紹介する無料の地図がもらえる。",
        "chunks": [
          "只要去那間賣紀念品的店",
          "就可以拿到介紹附近遺跡的免費地圖"
        ],
        "hintText": "只要去那間賣紀念品的店，"
      }
    ]
  },
  {
    "id": "B-240",
    "band": "B",
    "targetWord": "紀念",
    "distractors": [
      "紀律",
      "懷念",
      "記憶"
    ],
    "grammarNote": "「紀念（jì niàn）」は歴史的な出来事や人物を「記念する・追悼する」という意味。「紀念碑（記念碑）」や「紀念日」として使われます。二二八事件は台湾歴史の超重要キーワードです。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然紀念日很重要，但是因為工作太忙，所以我們今年沒有特別慶祝。",
        "pinyin": "suī rán jì niàn rì hěn zhòng yào, dàn shì yīn wèi gōng zuò tài máng, suǒ yǐ wǒ men jīn nián méi yǒu tè bié qìng zhù.",
        "japanese": "記念日はとても大事だけど、仕事が忙しすぎて今年は特別に祝わなかった。",
        "chunks": [
          "雖然紀念日很重要",
          "但是因為工作太忙",
          "所以我們今年沒有特別慶祝"
        ],
        "hintText": "雖然"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要購買滿五百元，就可以獲得一張紀念版的發票，而且還能參加抽獎。",
        "pinyin": "zhǐ yào gòu mǎi mǎn wǔ bǎi yuán, jiù kě yǐ huò dé yī zhāng jì niàn bǎn de fā piào, ér qiě hái néng cān jiā chōu jiǎng.",
        "japanese": "500元以上購入すれば、記念版のレシートがもらえて、さらに抽選にも参加できる。",
        "chunks": [
          "只要購買滿五百元",
          "就可以獲得一張紀念版的發票",
          "而且還能參加抽獎"
        ],
        "hintText": "只要"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為捷運站附近有座二二八紀念碑，所以很多人會在那裡下車拍照。",
        "pinyin": "yīn wèi jié yùn zhàn fù jìn yǒu zuò èr èr bā jì niàn bēi, suǒ yǐ hěn duō rén huì zài nà lǐ xià chē pāi zhào.",
        "japanese": "MRTの駅の近くに二二八記念碑があるので、多くの人がそこで降りて写真を撮る。",
        "chunks": [
          "因為捷運站附近有座二二八紀念碑",
          "所以很多人會在那裡下車拍照"
        ],
        "hintText": "因為"
      }
    ]
  },
  {
    "id": "B-241",
    "band": "B",
    "targetWord": "環保",
    "distractors": [
      "保護",
      "保證",
      "保留"
    ],
    "grammarNote": "「環保（huán bǎo）」は「環境保護」の略ですが、形容詞的に「エコな」という意味でも広く使われます。「環保杯（マイボトル）」や「環保袋（エコバッグ）」は日常頻出語彙です。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "因為我很注重環保，所以去超商買東西都會帶環保杯跟環保袋。",
        "pinyin": "yīn wèi wǒ hěn zhù zhòng huán bǎo ，suǒ yǐ qù chāo shāng mǎi dōng xī dōu huì dài huán bǎo bēi gēn huán bǎo dài 。",
        "japanese": "私は環境保護を重視しているので、コンビニで買い物をするときはいつもマイボトルとエコバッグを持って行きます。",
        "chunks": [
          "因為我很注重環保",
          "所以去超商買東西",
          "都會帶環保杯跟環保袋"
        ],
        "hintText": "因為我很注重環保，所以去超商買東西"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然我已經很認真做環保回收，但是鄰居還是常常把垃圾亂丟。",
        "pinyin": "suī rán wǒ yǐ jīng hěn rèn zhēn zuò huán bǎo huí shōu ，dàn shì lín jū hái shì cháng cháng bǎ lè sè luàn diū 。",
        "japanese": "私はもう真面目にエコリサイクルをしているのに、隣の人はよくゴミを勝手に捨てます。",
        "chunks": [
          "雖然我已經很認真做環保回收",
          "但是鄰居還是常常",
          "把垃圾亂丟"
        ],
        "hintText": "雖然我已經很認真做環保回收，但是"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要公司推動環保政策，我們就會配合使用環保餐具。",
        "pinyin": "zhǐ yào gōng sī tuī dòng huán bǎo zhèng cè ，wǒ men jiù huì pèi hé shǐ yòng huán bǎo cān jù 。",
        "japanese": "会社が環境保護政策を推進すれば、私たちはエコ食器を使うよう協力します。",
        "chunks": [
          "只要公司推動環保政策",
          "我們就會配合",
          "使用環保餐具"
        ],
        "hintText": "只要公司推動環保政策，我們"
      }
    ]
  },
  {
    "id": "B-242",
    "band": "B",
    "targetWord": "氣候",
    "distractors": [
      "天氣",
      "氣氛",
      "氣象"
    ],
    "grammarNote": "「氣候（qì hòu）」は長期間の気象状態を指します。「天氣（天気）」とは区別され、気候変動（氣候變遷）などの文脈では必ず「氣候」が使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然台灣的氣候很潮濕，但是因為我習慣了，所以覺得還不錯。",
        "pinyin": "suī rán tái wān de qì hòu hěn cháo shī， dàn shì yīn wèi wǒ xí guàn le， suǒ yǐ jué de hái bú cuò。",
        "japanese": "台湾の気候はとても湿気がありますが、慣れているのでまあまあだと思います。",
        "chunks": [
          "雖然台灣的氣候很潮濕",
          "但是因為我習慣了",
          "所以覺得還不錯"
        ],
        "hintText": "雖然台灣的"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要氣候穩定，我們店就會推出打折活動，吸引更多客人。",
        "pinyin": "zhǐ yào qì hòu wěn dìng， wǒ men diàn jiù huì tuī chū dǎ zhé huó dòng， xī yǐn gèng duō kè rén。",
        "japanese": "気候が安定すれば、私たちの店は割引活動を実施し、より多くの客を引き付けます。",
        "chunks": [
          "只要氣候穩定",
          "我們店就會推出打折活動",
          "吸引更多客人"
        ],
        "hintText": "只要"
      },
      {
        "situation": "交通・移動",
        "chinese": "因為氣候變遷導致颱風越來越多，所以搭捷運比騎機車安全。",
        "pinyin": "yīn wèi qì hòu biàn qiān dǎo zhì tái fēng yuè lái yuè duō， suǒ yǐ dā jié yùn bǐ qí jī chē ān quán。",
        "japanese": "気候変動で台風が増えているので、MRTに乗る方がバイクより安全です。",
        "chunks": [
          "因為氣候變遷導致颱風越來越多",
          "所以搭捷運比騎機車安全"
        ],
        "hintText": "因為"
      }
    ]
  },
  {
    "id": "B-243",
    "band": "B",
    "targetWord": "能源",
    "distractors": [
      "資源",
      "來源",
      "財源"
    ],
    "grammarNote": "「能源（néng yuán）」はエネルギー源のこと。「再生能源（再生可能エネルギー）」や「綠色能源（グリーンエネルギー）」として頻出します。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為颱風的關係，我們家的太陽能能源系統壞掉了，所以要請人來修理。",
        "pinyin": "Yīnwèi táifēng de guānxì, wǒmen jiā de tàiyáng néng néngyuán xìtǒng huài diào le, suǒyǐ yào qǐng rén lái xiūlǐ.",
        "japanese": "台風の関係で、我が家の太陽エネルギーシステムが壊れてしまったので、修理を依頼しなければならない。",
        "chunks": [
          "因為颱風的關係",
          "我們家的太陽能能源系統壞掉了",
          "所以要請人來修理"
        ],
        "hintText": "因為颱風的關係，我們家的"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要公司採用綠色能源，就可以申請政府的補助金。",
        "pinyin": "Zhǐyào gōngsī cǎiyòng lǜsè néngyuán, jiù kěyǐ shēnqǐng zhèngfǔ de bǔzhùjīn.",
        "japanese": "会社がグリーンエネルギーを採用すれば、政府の補助金を申請できます。",
        "chunks": [
          "只要公司採用綠色能源",
          "就可以申請政府的補助金"
        ],
        "hintText": "只要公司採用"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然電動機車比較貴，但是因為使用再生能源，所以長期下來可以省油錢。",
        "pinyin": "Suīrán diàndòng jīchē bǐjiào guì, dànshì yīnwèi shǐyòng zàishēng néngyuán, suǒyǐ chángqī xiàlái kěyǐ shěng yóu qián.",
        "japanese": "電動バイクは高いけれど、再生可能エネルギーを使っているので、長期的にはガソリン代が節約できます。",
        "chunks": [
          "雖然電動機車比較貴",
          "但是因為使用再生能源",
          "所以長期下來可以省油錢"
        ],
        "hintText": "雖然電動機車比較貴，但是因為使用"
      }
    ]
  },
  {
    "id": "B-244",
    "band": "B",
    "targetWord": "生態",
    "distractors": [
      "心態",
      "狀態",
      "動態"
    ],
    "grammarNote": "「生態（shēng tài）」は生物のありさまや生態系を指します。環境保護に関する長文読解では欠かせないキーワードです。",
    "bossReading": {
      "text": "受到全球暖化的影響，極端氣候越來越常見。為了保護地球的[ ? ]，許多國家開始推動減碳政策並發展再生能源，希望能達成環境的永續發展。",
      "targetWord": "生態",
      "distractors": [
        "心態",
        "狀態",
        "動態"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「保護（保護する）」の対象として、自然環境のシステムを指す「生態（生態系）」が正解です。気候変動や再生エネルギー、持続可能な発展（永續發展）といった環境テーマのコア語彙を一つの文脈に統合しています。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我家附近的公園生態很豐富，但是因為大家都亂丟垃圾，所以現在越來越髒了。",
        "pinyin": "suī rán wǒ jiā fù jìn de gōng yuán shēng tài hěn fēng fù，dàn shì yīn wèi dà jiā dōu luàn diū lè sè，suǒ yǐ xiàn zài yuè lái yuè zāng le。",
        "japanese": "家の近くの公園の生態は豊かですが、みんながゴミをポイ捨てするので、どんどん汚くなっています。",
        "chunks": [
          "雖然我家附近的公園",
          "生態很豐富",
          "但是因為大家都亂丟垃圾",
          "所以現在越來越髒了"
        ],
        "hintText": "雖然我家附近的公園"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要我們好好保護生態，就不用擔心颱風來的時候會發生土石流。",
        "pinyin": "zhǐ yào wǒ men hǎo hǎo bǎo hù shēng tài，jiù bù yòng dān xīn tái fēng lái de shí hòu huì fā shēng tǔ shí liú。",
        "japanese": "私たちが生態をしっかり守れば、台風が来たときに土石流が発生する心配はありません。",
        "chunks": [
          "只要我們好好保護",
          "生態",
          "就不用擔心颱風來的時候會發生土石流"
        ],
        "hintText": "只要我們好好保護"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為這塊地的生態很脆弱，所以政府規定開發前一定要先做環境影響評估。",
        "pinyin": "yīn wèi zhè kuài dì de shēng tài hěn cuì ruò，suǒ yǐ zhèng fǔ guī dìng kāi fā qián yī dìng yào xiān zuò huán jìng yǐng xiǎng píng gū。",
        "japanese": "この土地の生態は非常に脆弱なので、政府は開発前に必ず環境影響評価を行うよう規定しています。",
        "chunks": [
          "因為這塊地的",
          "生態很脆弱",
          "所以政府規定開發前一定要先做環境影響評估"
        ],
        "hintText": "因為這塊地的"
      }
    ]
  },
  {
    "id": "B-245",
    "band": "B",
    "targetWord": "永續",
    "distractors": [
      "連續",
      "繼續",
      "後續"
    ],
    "grammarNote": "「永續（yǒng xù）」は「持続可能な（サステナブル）」という意味。「永續發展（SDGs/持続可能な開発）」は現代のビジネス・環境文脈で超重要語彙です。",
    "examples": [
      {
        "situation": "店舗・サービス",
        "chinese": "雖然這家餐廳使用環保餐具，但是因為成本較高，所以價格也比較貴，不過為了永續發展，我還是願意支持。",
        "pinyin": "suī rán zhè jiā cān tīng shǐ yòng huán bǎo cān jù，dàn shì yīn wèi chéng běn jiào gāo，suǒ yǐ jià gé yě bǐ jiào guì，bù guò wèi le yǒng xù fā zhǎn，wǒ hái shì yuàn yì zhī chí。",
        "japanese": "このレストランはエコ食器を使っていますが、コストが高いため値段も高めです。でも持続可能な発展のため、私は応援したいと思います。",
        "chunks": [
          "雖然這家餐廳使用環保餐具",
          "但是因為成本較高",
          "所以價格也比較貴",
          "不過為了永續發展",
          "我還是願意支持"
        ],
        "hintText": "雖然這家餐廳使用環保餐具，但是因為成本較高，所以價格也比較貴，不過為了"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要大家多搭捷運或騎機車，就可以減少碳排放，對城市的永續發展有幫助。",
        "pinyin": "zhǐ yào dà jiā duō dā jié yùn huò qí jī chē，jiù kě yǐ jiǎn shǎo tàn pái fàng，duì chéng shì de yǒng xù fā zhǎn yǒu bāng zhù。",
        "japanese": "みんながもっとMRTに乗ったりバイクに乗ったりすれば、炭素排出を減らせて、都市の持続可能な発展に役立ちます。",
        "chunks": [
          "只要大家多搭捷運或騎機車",
          "就可以減少碳排放",
          "對城市的永續發展有幫助"
        ],
        "hintText": "只要大家多搭捷運或騎機車，就可以減少碳排放，對"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "因為公司推行綠色辦公政策，所以我們現在都要用電子發票，這樣才能達到永續的目標。",
        "pinyin": "yīn wèi gōng sī tuī xíng lǜ sè bàn gōng zhèng cè，suǒ yǐ wǒ men xiàn zài dōu yào yòng diàn zǐ fā piào，zhè yàng cái néng dá dào yǒng xù de mù biāo。",
        "japanese": "会社がグリーンオフィス政策を推進しているので、今はみんな電子領収書を使わなければならず、そうして初めて持続可能な目標を達成できます。",
        "chunks": [
          "因為公司推行綠色辦公政策",
          "所以我們現在都要用電子發票",
          "這樣才能達到永續的目標"
        ],
        "hintText": "因為公司推行綠色辦公政策，所以我們現在都要用電子發票，這樣才能達到"
      }
    ]
  },
  {
    "id": "B-246",
    "band": "B",
    "targetWord": "汙染",
    "distractors": [
      "傳染",
      "感染",
      "渲染"
    ],
    "grammarNote": "「汙染（wū rǎn）」（または污染）は環境や空気、水などが汚されること。「空氣汙染（大気汚染）」や「環境汙染」などの形で使われます。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為隔壁工廠排放廢氣，所以我們社區的空氣汙染越來越嚴重。",
        "pinyin": "yīn wèi gé bì gōng chǎng pái fàng fèi qì, suǒ yǐ wǒ men shè qū de kōng qì wū rǎn yuè lái yuè yán zhòng.",
        "japanese": "隣の工場が排気ガスを排出するので、私たちのコミュニティの大気汚染がますます深刻になっています。",
        "chunks": [
          "因為隔壁工廠排放廢氣",
          "所以我們社區的空氣汙染",
          "越來越嚴重"
        ],
        "hintText": "因為隔壁工廠排放廢氣，所以我們社區的"
      },
      {
        "situation": "店舗・サービス",
        "japanese": "雖然這家餐廳的裝潢很漂亮，但是因為附近有工廠，所以空氣汙染很嚴重。",
        "chinese": "雖然這家餐廳的裝潢很漂亮，但是因為附近有工廠，所以空氣汙染很嚴重。",
        "pinyin": "suī rán zhè jiā cān tīng de zhuāng huáng hěn piào liang, dàn shì yīn wèi fù jìn yǒu gōng chǎng, suǒ yǐ kōng qì wū rǎn hěn yán zhòng.",
        "chunks": [
          "雖然這家餐廳的裝潢很漂亮",
          "但是因為附近有工廠",
          "所以空氣汙染很嚴重"
        ],
        "hintText": "雖然這家餐廳的裝潢很漂亮，但是因為附近有工廠，所以"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要大家願意配合垃圾分類，就能有效減少環境汙染。",
        "pinyin": "zhǐ yào dà jiā yuàn yì pèi hé lè sè fēn lèi, jiù néng yǒu xiào jiǎn shǎo huán jìng wū rǎn.",
        "japanese": "みんながごみの分別に協力すれば、効果的に環境汚染を減らせます。",
        "chunks": [
          "只要大家願意配合垃圾分類",
          "就能有效減少",
          "環境汙染"
        ],
        "hintText": "只要大家願意配合垃圾分類，就能有效減少"
      }
    ]
  },
  {
    "id": "B-247",
    "band": "B",
    "targetWord": "排放",
    "distractors": [
      "排除",
      "排隊",
      "安排"
    ],
    "grammarNote": "「排放（pái fàng）」は気体や液体などを外部へ出すこと。「碳排放（炭素排出）」や「溫室氣體排放」といったコロケーションが定石です。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為工廠排放廢水，所以我家附近的河川都變黑了。",
        "pinyin": "yīn wèi gōng chǎng pái fàng fèi shuǐ, suǒ yǐ wǒ jiā fù jìn de hé chuān dōu biàn hēi le.",
        "japanese": "工場が廃水を排出するので、私の家の近くの川はみんな黒くなった。",
        "chunks": [
          "因為工廠排放廢水",
          "所以我家附近的河川",
          "都變黑了"
        ],
        "hintText": "因為工廠"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要公司能減少碳排放，就可以申請政府的補助金。",
        "pinyin": "zhǐ yào gōng sī néng jiǎn shǎo tàn pái fàng, jiù kě yǐ shēn qǐng zhèng fǔ de bǔ zhù jīn.",
        "japanese": "会社が炭素排出を減らせさえすれば、政府の補助金を申請できます。",
        "chunks": [
          "只要公司能減少碳排放",
          "就可以申請政府的補助金"
        ],
        "hintText": "只要公司能減少"
      },
      {
        "situation": "交通・移動",
        "chinese": "雖然機車排放的廢氣比較少，但還是比捷運污染環境。",
        "pinyin": "suī rán jī chē pái fàng de fèi qì bǐ jiào shǎo, dàn hái shì bǐ jié yùn wū rǎn huán jìng.",
        "japanese": "バイクの排気ガスは比較的少ないが、それでもMRTより環境を汚染する。",
        "chunks": [
          "雖然機車排放的廢氣比較少",
          "但還是比捷運污染環境"
        ],
        "hintText": "雖然機車"
      }
    ]
  },
  {
    "id": "B-248",
    "band": "B",
    "targetWord": "減碳",
    "distractors": [
      "減肥",
      "減輕",
      "減少"
    ],
    "grammarNote": "「減碳（jiǎn tàn）」は「節能減碳（省エネ・炭素削減）」の略で、二酸化炭素の排出を減らす行動全般を指す台湾の環境用語です。",
    "examples": [
      {
        "situation": "交通・移動",
        "chinese": "因為捷運很方便，所以我每天搭捷運上班，這也是一種減碳的方式。",
        "pinyin": "yīn wèi jié yùn hěn fāng biàn，suǒ yǐ wǒ měi tiān dā jié yùn shàng bān，zhè yě shì yī zhǒng jiǎn tàn de fāng shì。",
        "japanese": "地下鉄がとても便利なので、私は毎日地下鉄で通勤しています。これも炭素削減の方法です。",
        "chunks": [
          "因為捷運很方便",
          "所以我每天搭捷運上班",
          "這也是一種減碳的方式"
        ],
        "hintText": "因為捷運很方便，所以我每天搭捷運上班，這也是一種"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然冷氣壞了很熱，但只要少開冷氣就能減碳，也算因禍得福。",
        "pinyin": "suī rán lěng qì huài le hěn rè，dàn zhǐ yào shǎo kāi lěng qì jiù néng jiǎn tàn，yě suàn yīn huò dé fú。",
        "japanese": "エアコンが壊れて暑いけれど、エアコンをあまり使わなければ炭素削減になるので、怪我の功名です。",
        "chunks": [
          "雖然冷氣壞了很熱",
          "但只要少開冷氣就能減碳",
          "也算因禍得福"
        ],
        "hintText": "雖然冷氣壞了很熱，但只要少開冷氣就能"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要自備購物袋去超商買東西，就可以順便減碳，還能省下買袋子的錢。",
        "pinyin": "zhǐ yào zì bèi gòu wù dài qù chāo shāng mǎi dōng xī，jiù kě yǐ shùn biàn jiǎn tàn，hái néng shěng xià mǎi dài zi de qián。",
        "japanese": "エコバッグを持ってコンビニで買い物をすれば、炭素削減にもなるし、袋代も節約できます。",
        "chunks": [
          "只要自備購物袋去超商買東西",
          "就可以順便減碳",
          "還能省下買袋子的錢"
        ],
        "hintText": "只要自備購物袋去超商買東西，就可以順便"
      }
    ]
  },
  {
    "id": "B-249",
    "band": "B",
    "targetWord": "破壞",
    "distractors": [
      "打破",
      "破產",
      "突破"
    ],
    "grammarNote": "「破壞（pò huài）」は物や環境、関係などを壊すこと。「造成破壞（破壊をもたらす）」のセットで使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他只是開玩笑，但那種話很容易造成朋友之間的破壞。",
        "pinyin": "suī rán tā zhǐ shì kāi wán xiào, dàn nà zhǒng huà hěn róng yì zào chéng péng yǒu zhī jiān de pò huài.",
        "japanese": "彼は冗談のつもりでも、そういう言葉は友人間の関係を壊しやすい。",
        "chunks": [
          "雖然他只是開玩笑",
          "但那種話很容易造成",
          "朋友之間的破壞"
        ],
        "hintText": "雖然他只是開玩笑，但那種話很容易造成"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為隔壁施工的聲音太大，造成我家的牆壁出現裂縫的破壞。",
        "pinyin": "yīn wèi gé bì shī gōng de shēng yīn tài dà, zào chéng wǒ jiā de qiáng bì chū xiàn liè fèng de pò huài.",
        "japanese": "隣の工事の音が大きすぎて、我が家の壁にひび割れの破損が生じた。",
        "chunks": [
          "因為隔壁施工的聲音太大",
          "造成我家的牆壁出現裂縫",
          "的破壞"
        ],
        "hintText": "因為隔壁施工的聲音太大，造成"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要員工不小心洩漏客戶資料，就會對公司信譽造成嚴重的破壞。",
        "pinyin": "zhǐ yào yuán gōng bù xiǎo xīn xiè lòu kè hù zī liào, jiù huì duì gōng sī xìn yù zào chéng yán zhòng de pò huài.",
        "japanese": "社員がうっかり顧客情報を漏らすだけで、会社の信用に深刻な損害を与える。",
        "chunks": [
          "只要員工不小心洩漏客戶資料",
          "就會對公司信譽造成",
          "嚴重的破壞"
        ],
        "hintText": "只要員工不小心洩漏客戶資料，就會對公司信譽造成"
      }
    ]
  },
  {
    "id": "B-250",
    "band": "B",
    "targetWord": "意識",
    "distractors": [
      "常識",
      "知識",
      "見識"
    ],
    "grammarNote": "「意識（yì shì）」は物事に対する認識や自覚のこと。「環保意識的抬頭（環境意識の高まり）」は環境問題を語る際の定番フレーズです。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他以前對環保不太在意，但最近因為環保意識的抬頭，他開始提醒家人要分類垃圾。",
        "pinyin": "suī rán tā yǐ qián duì huán bǎo bù tài zài yì, dàn zuì jìn yīn wèi huán bǎo yì shì de tái tóu, tā kāi shǐ tí xǐng jiā rén yào fēn lèi lè sè.",
        "japanese": "彼は以前は環境保護にあまり関心がありませんでしたが、最近環境意識の高まりから、家族にゴミの分別を促すようになりました。",
        "chunks": [
          "雖然他以前對環保不太在意",
          "但最近因為環保意識的抬頭",
          "他開始提醒家人要分類垃圾"
        ],
        "hintText": "雖然他以前對環保不太在意，但最近因為"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要顧客的環保意識抬頭，我們店就會考慮停止提供塑膠吸管。",
        "pinyin": "zhǐ yào gù kè de huán bǎo yì shì tái tóu, wǒ men diàn jiù huì kǎo lǜ tíng zhǐ tí gōng sù jiāo xī guǎn.",
        "japanese": "お客様の環境意識が高まれば、当店はプラスチックストローの提供をやめることを検討します。",
        "chunks": [
          "只要顧客的環保意識抬頭",
          "我們店就會考慮停止提供塑膠吸管"
        ],
        "hintText": "只要顧客的"
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為社區居民的環保意識抬頭，所以管委會決定增設資源回收桶。",
        "pinyin": "yīn wèi shè qū jū mín de huán bǎo yì shì tái tóu, suǒ yǐ guǎn wěi huì jué dìng zēng shè zī yuán huí shōu tǒng.",
        "japanese": "地域住民の環境意識が高まったため、管理組合は資源ごみ箱を増設することにしました。",
        "chunks": [
          "因為社區居民的環保意識抬頭",
          "所以管委會決定增設資源回收桶"
        ],
        "hintText": "因為社區居民的"
      }
    ]
  },
  {
    "id": "B-251",
    "band": "B",
    "targetWord": "健保",
    "distractors": [
      "保健",
      "保險",
      "保護"
    ],
    "grammarNote": "「健保（jiàn bǎo）」は「健康保險」の略。台湾の優れた医療システム「全民健保」は、台湾社会を語る上で欠かせない最重要キーワードの一つです。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為公司有補助健保費，所以員工每個月負擔比較輕。",
        "pinyin": "yīn wèi gōng sī yǒu bǔ zhù jiàn bǎo fèi, suǒ yǐ yuán gōng měi gè yuè fù dān bǐ jiào qīng.",
        "japanese": "会社が健康保険料を補助してくれるので、従業員の毎月の負担は比較的軽い。",
        "chunks": [
          "因為公司有補助",
          "健保費",
          "所以員工每個月負擔比較輕"
        ],
        "hintText": "因為公司有補助"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然我有健保卡，但是忘記帶了，所以要先自費看診。",
        "pinyin": "suī rán wǒ yǒu jiàn bǎo kǎ, dàn shì wàng jì dài le, suǒ yǐ yào xiān zì fèi kàn zhěn.",
        "japanese": "健康保険証は持っているけど、忘れてしまったので、一旦自費で診察を受けなければならない。",
        "chunks": [
          "雖然我有",
          "健保卡",
          "但是忘記帶了，所以要先自費看診"
        ],
        "hintText": "雖然我有"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要拿健保卡去藥局，就可以用比較便宜的價格買藥。",
        "pinyin": "zhǐ yào ná jiàn bǎo kǎ qù yào jú, jiù kě yǐ yòng bǐ jiào pián yí de jià gé mǎi yào.",
        "japanese": "健康保険証を持って薬局に行けば、比較的安い価格で薬を買うことができる。",
        "chunks": [
          "只要拿",
          "健保卡",
          "去藥局，就可以用比較便宜的價格買藥"
        ],
        "hintText": "只要拿"
      }
    ]
  },
  {
    "id": "B-252",
    "band": "B",
    "targetWord": "醫療",
    "distractors": [
      "治療",
      "醫學",
      "療養"
    ],
    "grammarNote": "「醫療（yī liáo）」は医療全般を指します。「醫療資源（医療資源）」「醫療人員（医療従事者）」などの組み合わせで頻出します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然阿嬤有健保卡，但因為偏鄉醫療資源不足，我們還是得帶她去大醫院。",
        "pinyin": "suī rán ā mā yǒu jiàn bǎo kǎ, dàn yīn wèi piān xiāng yī liáo zī yuán bù zú, wǒ men hái shì děi dài tā qù dà yī yuàn.",
        "japanese": "祖母は健康保険証を持っているけれど、田舎の医療資源が足りないので、やはり大きな病院に連れて行かなければならない。",
        "chunks": [
          "雖然阿嬤有健保卡",
          "但因為偏鄉醫療資源不足",
          "我們還是得帶她去大醫院"
        ],
        "hintText": "雖然阿嬤有健保卡，但因為偏鄉"
      },
      {
        "situation": "店舗・サービス",
        "japanese": "この薬局では、医療用マスクと消毒液を買うことができて、しかも発票がもらえる。",
        "chinese": "只要到這間藥局，就可以買到醫療用口罩和消毒液，而且還有發票。",
        "pinyin": "zhǐ yào dào zhè jiān yào jú, jiù kě yǐ mǎi dào yī liáo yòng kǒu zhào hé xiāo dú yè, ér qiě hái yǒu fā piào.",
        "hintText": "只要到這間藥局，就可以買到",
        "chunks": [
          "只要到這間藥局",
          "就可以買到醫療用口罩和消毒液",
          "而且還有發票"
        ]
      },
      {
        "situation": "生活トラブル",
        "chinese": "因為騎機車摔傷，所以我趕快去附近的診所申請醫療補助。",
        "pinyin": "yīn wèi qí jī chē shuāi shāng, suǒ yǐ wǒ gǎn kuài qù fù jìn de zhěn suǒ shēn qǐng yī liáo bǔ zhù.",
        "japanese": "バイクで転んで怪我をしたので、急いで近くの診療所に医療補助を申請しに行った。",
        "hintText": "因為騎機車摔傷，所以我趕快去附近的診所申請",
        "chunks": [
          "因為騎機車摔傷",
          "所以我趕快去附近的診所",
          "申請醫療補助"
        ]
      }
    ]
  },
  {
    "id": "B-253",
    "band": "B",
    "targetWord": "預防",
    "distractors": [
      "預備",
      "預測",
      "預算"
    ],
    "grammarNote": "「預防（yù fáng）」はあらかじめ防ぐこと。「預防勝於治療（予防は治療に勝る）」は台湾でも非常によく使われる健康の格言です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我媽媽很忙，但她還是會提醒我們要預防感冒，多穿衣服。",
        "pinyin": "suī rán wǒ mā ma hěn máng, dàn tā hái shì huì tí xǐng wǒ men yào yù fáng gǎn mào, duō chuān yī fu.",
        "japanese": "母はとても忙しいですが、それでも風邪を予防するように、服をたくさん着るようにと私たちに注意してくれます。",
        "chunks": [
          "雖然我媽媽很忙",
          "但她還是會提醒我們",
          "要預防感冒",
          "多穿衣服"
        ],
        "hintText": "雖然我媽媽很忙，但她還是會提醒我們"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為最近流感很嚴重，所以藥局建議大家買口罩來預防。",
        "pinyin": "yīn wèi zuì jìn liú gǎn hěn yán zhòng, suǒ yǐ yào jú jiàn yì dà jiā mǎi kǒu zhào lái yù fáng.",
        "japanese": "最近インフルエンザがひどいので、薬局ではマスクを買って予防するよう勧めています。",
        "chunks": [
          "因為最近流感很嚴重",
          "所以藥局建議大家",
          "買口罩來預防"
        ],
        "hintText": "因為最近流感很嚴重，所以藥局建議大家"
      },
      {
        "situation": "交通・移動",
        "chinese": "只要搭捷運的時候戴好口罩，就能有效預防病毒傳播。",
        "pinyin": "zhǐ yào dā jié yùn de shí hòu dài hǎo kǒu zhào, jiù néng yǒu xiào yù fáng bìng dú chuán bō.",
        "japanese": "MRTに乗るときにマスクをしっかり着用すれば、ウイルスの拡散を効果的に予防できます。",
        "chunks": [
          "只要搭捷運的時候戴好口罩",
          "就能有效預防病毒傳播"
        ],
        "hintText": "只要搭捷運的時候戴好口罩"
      }
    ]
  },
  {
    "id": "B-254",
    "band": "B",
    "targetWord": "病毒",
    "distractors": [
      "細菌",
      "中毒",
      "毒藥"
    ],
    "grammarNote": "「病毒（bìng dú）」はウイルスのこと。「電腦病毒（コンピューターウイルス）」という意味でも使われます。「細菌（細菌）」と区別して覚えましょう。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為電腦中毒了，所以我的重要檔案都被病毒加密了。",
        "pinyin": "yīn wèi diàn nǎo zhòng dú le, suǒ yǐ wǒ de zhòng yào dǎng àn dōu bèi bìng dú jiā mì le.",
        "japanese": "パソコンがウイルスに感染したので、私の重要なファイルがすべてウイルスに暗号化されてしまいました。",
        "chunks": [
          "因為電腦中毒了",
          "所以我的重要檔案",
          "都被病毒加密了"
        ],
        "hintText": "因為電腦中毒了，所以我的重要檔案"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要下載這個防毒軟體，就能有效阻擋電腦病毒入侵。",
        "pinyin": "zhǐ yào xià zài zhè ge fáng dú ruǎn tǐ, jiù néng yǒu xiào zǔ dǎng diàn nǎo bìng dú rù qīn.",
        "japanese": "このウイルス対策ソフトをダウンロードすれば、コンピューターウイルスの侵入を効果的に防げます。",
        "chunks": [
          "只要下載這個防毒軟體",
          "就能有效阻擋",
          "電腦病毒入侵"
        ],
        "hintText": "只要下載這個防毒軟體，就能有效阻擋"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然打了疫苗，但是還是要小心新冠病毒的變種。",
        "pinyin": "suī rán dǎ le yì miáo, dàn shì hái shì yào xiǎo xīn xīn guàn bìng dú de biàn zhǒng.",
        "japanese": "ワクチンを打ったけれども、やはり新型コロナウイルスの変異種に注意しなければなりません。",
        "chunks": [
          "雖然打了疫苗",
          "但是還是要小心",
          "新冠病毒的變種"
        ],
        "hintText": "雖然打了疫苗，但是還是要小心"
      }
    ]
  },
  {
    "id": "B-255",
    "band": "B",
    "targetWord": "症狀",
    "distractors": [
      "狀態",
      "狀況",
      "病情"
    ],
    "grammarNote": "「症狀（zhèng zhuàng）」は病気の症状のこと。「出現症狀（症状が現れる）」「減輕症狀（症状を軽くする）」などの表現で使われます。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為最近一直出現頭痛症狀，所以我去藥局買了止痛藥。",
        "pinyin": "yīn wèi zuì jìn yī zhí chū xiàn tóu tòng zhèng zhuàng, suǒ yǐ wǒ qù yào jú mǎi le zhǐ tòng yào.",
        "japanese": "最近ずっと頭痛の症状が出ているので、薬局で鎮痛薬を買いました。",
        "chunks": [
          "因為最近一直出現",
          "頭痛症狀",
          "所以我去藥局買了止痛藥"
        ],
        "hintText": "因為最近一直出現"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "雖然吃了藥，但症狀沒有減輕，所以我決定明天去診所看醫生。",
        "pinyin": "suī rán chī le yào, dàn zhèng zhuàng méi yǒu jiǎn qīng, suǒ yǐ wǒ jué dìng míng tiān qù zhěn suǒ kàn yī shēng.",
        "japanese": "薬を飲んだけど症状が軽くならなかったので、明日クリニックに行くことにしました。",
        "chunks": [
          "雖然吃了藥",
          "但症狀沒有減輕",
          "所以我決定明天去診所看醫生"
        ],
        "hintText": "雖然吃了藥，但"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要出現發燒症狀，公司就會要求員工在家工作直到康復。",
        "pinyin": "zhǐ yào chū xiàn fā shāo zhèng zhuàng, gōng sī jiù huì yāo qiú yuán gōng zài jiā gōng zuò zhí dào kāng fù.",
        "japanese": "発熱の症状が出れば、会社は従業員に回復するまで在宅勤務を求めます。",
        "chunks": [
          "只要出現發燒症狀",
          "公司就會要求員工在家工作",
          "直到康復"
        ],
        "hintText": "只要出現"
      }
    ]
  },
  {
    "id": "B-256",
    "band": "B",
    "targetWord": "傳染",
    "distractors": [
      "傳說",
      "傳統",
      "傳達"
    ],
    "grammarNote": "「傳染（chuán rǎn）」は病気などがうつること、感染すること。「傳染病（感染症）」や「被傳染了（うつされた）」として日常・ニュース両方で必須の語彙です。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我已經提醒他戴口罩，但他還是被傳染了感冒。",
        "pinyin": "suī rán wǒ yǐ jīng tí xǐng tā dài kǒu zhào, dàn tā hái shì bèi chuán rǎn le gǎn mào.",
        "japanese": "私は彼にマスクをするように注意したけど、彼はやっぱり風邪をうつされた。",
        "chunks": [
          "雖然我已經提醒他戴口罩",
          "但他還是被傳染了感冒"
        ],
        "hintText": "雖然我已經提醒他戴口罩，但他還是"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為餐廳的員工被傳染了新冠病毒，所以暫時停止營業。",
        "pinyin": "yīn wèi cān tīng de yuán gōng bèi chuán rǎn le xīn guàn bìng dú, suǒ yǐ zàn shí tíng zhǐ yíng yè.",
        "japanese": "レストランの従業員が新型コロナに感染したので、一時的に営業を停止しています。",
        "chunks": [
          "因為餐廳的員工被傳染了新冠病毒",
          "所以暫時停止營業"
        ],
        "hintText": "因為餐廳的員工"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要公司有人被傳染，就必須通報衛生局並進行消毒。",
        "pinyin": "zhǐ yào gōng sī yǒu rén bèi chuán rǎn, jiù bì xū tōng bào wèi shēng jú bìng jìn xíng xiāo dú.",
        "japanese": "会社で感染者が出れば、衛生局に通報して消毒しなければなりません。",
        "chunks": [
          "只要公司有人被傳染",
          "就必須通報衛生局並進行消毒"
        ],
        "hintText": "只要公司有人"
      }
    ]
  },
  {
    "id": "B-257",
    "band": "B",
    "targetWord": "疫苗",
    "distractors": [
      "藥苗",
      "免疫",
      "血清"
    ],
    "grammarNote": "「疫苗（yì miáo）」はワクチンのこと。「打疫苗（ワクチンを打つ）」や、少し硬い表現の「接種疫苗（ワクチンを接種する）」の形で使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然我奶奶已經八十歲了，但她還是堅持要去打疫苗。",
        "pinyin": "suī rán wǒ nǎi nai yǐ jīng bā shí suì le，dàn tā hái shì jiān chí yào qù dǎ yì miáo。",
        "japanese": "祖母はもう80歳ですが、それでもワクチンを打ちに行くと主張しています。",
        "chunks": [
          "雖然我奶奶已經八十歲了，",
          "但她還是堅持",
          "要去打疫苗。"
        ],
        "hintText": "雖然我奶奶已經八十歲了，但她還是堅持"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為最近疫情又升溫，所以藥局門口貼了「請先預約再來打疫苗」的公告。",
        "pinyin": "yīn wèi zuì jìn yì qíng yòu shēng wēn，suǒ yǐ yào jú mén kǒu tiē le「qǐng xiān yù yuē zài lái dǎ yì miáo」de gōng gào。",
        "japanese": "最近また感染が拡大しているので、薬局の入り口に「予約してからワクチン接種に来てください」というお知らせが貼ってあります。",
        "chunks": [
          "因為最近疫情又升溫，",
          "所以藥局門口貼了",
          "「請先預約再來打疫苗」的公告。"
        ],
        "hintText": "因為最近疫情又升溫，所以藥局門口貼了"
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "只要帶健保卡去衛生所，就可以免費接種流感疫苗。",
        "pinyin": "zhǐ yào dài jiàn bǎo kǎ qù wèi shēng suǒ，jiù kě yǐ miǎn fèi jiē zhǒng liú gǎn yì miáo。",
        "japanese": "健康保険証を持って保健所に行けば、無料でインフルエンザワクチンを接種できます。",
        "chunks": [
          "只要帶健保卡去衛生所，",
          "就可以免費",
          "接種流感疫苗。"
        ],
        "hintText": "只要帶健保卡去衛生所，就可以免費"
      }
    ]
  },
  {
    "id": "B-258",
    "band": "B",
    "targetWord": "心理",
    "distractors": [
      "生理",
      "心態",
      "心情"
    ],
    "grammarNote": "「心理（xīn lǐ）」は心、精神、心理状態のこと。身体（肉体）と対比される概念です。「心理健康（メンタルヘルス）」「心理醫生（心理カウンセラー）」としてよく登場します。",
    "bossReading": {
      "text": "現代人工作壓力大，除了身體的疲勞之外，[ ? ]健康的問題也逐漸受到社會重視。若長期忽視這些隱形的症狀，可能會導致更嚴重的疾病，因此適時尋求專業協助非常重要。",
      "targetWord": "心理",
      "distractors": [
        "生理",
        "心態",
        "心情"
      ],
      "question": "請選出最適合填入 [ ? ] 的詞彙：",
      "grammarNote": "「身體（身体/肉体）」と対比される概念として「心理（メンタル/精神）」が正解です。「心理健康（メンタルヘルス）」は現代の医療・社会問題の長文で不可欠な用語です。"
    },
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為妹妹最近心情不好，所以我建議她去看心理醫生。",
        "pinyin": "yīn wèi mèi mei zuì jìn xīn qíng bù hǎo, suǒ yǐ wǒ jiàn yì tā qù kàn xīn lǐ yī shēng.",
        "japanese": "妹が最近気分が優れないので、私は彼女に心理カウンセラーに診てもらうよう勧めた。",
        "chunks": [
          "因為妹妹最近心情不好，",
          "所以我建議她",
          "去看心理醫生。"
        ],
        "hintText": "因為妹妹最近心情不好，所以我建議她"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要買東西超過五百元，就可以用發票換心理測驗的折扣券。",
        "pinyin": "zhǐ yào mǎi dōng xī chāo guò wǔ bǎi yuán, jiù kě yǐ yòng fā piào huàn xīn lǐ cè yàn de zhé kòu quàn.",
        "japanese": "500元以上買い物すれば、レシートで心理テストの割引券と交換できます。",
        "chunks": [
          "只要買東西超過五百元，",
          "就可以用發票",
          "換心理測驗的折扣券。"
        ],
        "hintText": "只要買東西超過五百元，就可以用發票"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然機車被拖吊很倒楣，但是保持心理健康更重要。",
        "pinyin": "suī rán jī chē bèi tuō diào hěn dǎo méi, dàn shì bǎo chí xīn lǐ jiàn kāng gèng zhòng yào.",
        "japanese": "バイクがレッカー移動されてとても不運だけれど、メンタルヘルスを保つことのほうがもっと大切だ。",
        "chunks": [
          "雖然機車被拖吊很倒楣，",
          "但是保持心理健康",
          "更重要。"
        ],
        "hintText": "雖然機車被拖吊很倒楣，但是保持心理健康"
      }
    ]
  },
  {
    "id": "B-259",
    "band": "B",
    "targetWord": "恢復",
    "distractors": [
      "回覆",
      "報復",
      "重複"
    ],
    "grammarNote": "「恢復（huī fù）」は健康や状態、秩序などが「元の状態に戻る、回復する」こと。「恢復健康」「恢復正常」などの形で広く使われます。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "雖然他因為車禍住院一個月，但是經過復健，現在已經恢復正常生活了。",
        "pinyin": "suī rán tā yīn wèi chē huò zhù yuàn yī gè yuè，dàn shì jīng guò fù jiàn，xiàn zài yǐ jīng huī fù zhèng cháng shēng huó le。",
        "japanese": "彼は交通事故で1ヶ月入院したが、リハビリを経て、今はもう普通の生活に戻っている。",
        "chunks": [
          "雖然他因為車禍住院一個月",
          "但是經過復健",
          "現在已經恢復正常生活了"
        ],
        "hintText": "雖然他因為車禍住院一個月，但是經過復健，現在已經"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "因為這家餐廳的衛生檢查沒過，所以被勒令暫停營業，直到改善後才能恢復。",
        "pinyin": "yīn wèi zhè jiā cān tīng de wèi shēng jiǎn chá méi guò，suǒ yǐ bèi lè lìng zàn tíng yíng yè，zhí dào gǎi shàn hòu cái néng huī fù。",
        "japanese": "このレストランは衛生検査に合格しなかったため、改善するまで営業停止を命じられ、その後再開できる。",
        "chunks": [
          "因為這家餐廳的衛生檢查沒過",
          "所以被勒令暫停營業",
          "直到改善後才能恢復"
        ],
        "hintText": "因為這家餐廳的衛生檢查沒過，所以被勒令暫停營業，直到改善後才能"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要按時吃藥並多休息，你的感冒症狀很快就會恢復的。",
        "pinyin": "zhǐ yào àn shí chī yào bìng duō xiū xī，nǐ de gǎn mào zhèng zhuàng hěn kuài jiù huì huī fù de。",
        "japanese": "薬を時間通りに飲んでしっかり休めば、風邪の症状はすぐに回復するよ。",
        "chunks": [
          "只要按時吃藥並多休息",
          "你的感冒症狀很快就會恢復的"
        ],
        "hintText": "只要按時吃藥並多休息，你的感冒症狀很快就會"
      }
    ]
  },
  {
    "id": "B-260",
    "band": "B",
    "targetWord": "防疫",
    "distractors": [
      "免疫",
      "防守",
      "預防"
    ],
    "grammarNote": "「防疫（fáng yì）」は感染症の予防・対策のこと。台湾では「防疫措施（感染対策）」「防疫規定」など、日常的に使われる国民的キーワードです。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為公司要求員工遵守防疫規定，所以進辦公室前都要量體溫。",
        "pinyin": "yīn wèi gōng sī yāo qiú yuán gōng zūn shǒu fáng yì guī dìng, suǒ yǐ jìn bàn gōng shì qián dōu yào liáng tǐ wēn。",
        "japanese": "会社が従業員に防疫規定の遵守を求めているので、オフィスに入る前に体温を測らなければなりません。",
        "chunks": [
          "因為公司要求員工遵守",
          "防疫規定",
          "所以進辦公室前都要量體溫"
        ],
        "hintText": "因為公司要求員工遵守"
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然政府宣導防疫措施，但是鄰居還是不戴口罩出門，讓我很擔心。",
        "pinyin": "suī rán zhèng fǔ xuān dǎo fáng yì cuò shī, dàn shì lín jū hái shì bù dài kǒu zhào chū mén, ràng wǒ hěn dān xīn。",
        "japanese": "政府は防疫対策を呼びかけているのに、隣人はまだマスクをせずに出かけるので、とても心配です。",
        "chunks": [
          "雖然政府宣導",
          "防疫措施",
          "但是鄰居還是不戴口罩出門，讓我很擔心"
        ],
        "hintText": "雖然政府宣導"
      },
      {
        "situation": "店舗・サービス",
        "chinese": "只要顧客配合防疫規定，我們餐廳就會提供九折優惠。",
        "pinyin": "zhǐ yào gù kè pèi hé fáng yì guī dìng, wǒ men cān tīng jiù huì tí gōng jiǔ zhé yōu huì。",
        "japanese": "お客様が防疫規定に協力してくだされば、当店は10%割引を提供します。",
        "chunks": [
          "只要顧客配合",
          "防疫規定",
          "我們餐廳就會提供九折優惠"
        ],
        "hintText": "只要顧客配合"
      }
    ]
  },
  {
    "id": "B-261",
    "band": "B",
    "targetWord": "委託",
    "distractors": [
      "委屈",
      "託付",
      "拜託"
    ],
    "grammarNote": "「委託（wěituō）」は「委託する、依頼する」。業務や手続きなどを外部の人や専門機関に頼んで任せることを表します。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為我們部門最近人力不足，所以把這個專案委託給外部公司。",
        "pinyin": "yīn wèi wǒ men bù mén zuì jìn rén lì bù zú, suǒ yǐ bǎ zhè ge zhuān àn wěi tuō gěi wài bù gōng sī.",
        "japanese": "私たちの部門は最近人手不足なので、このプロジェクトを外部の会社に委託しました。",
        "chunks": [
          "因為我們部門最近人力不足",
          "所以把這個專案",
          "委託給外部公司"
        ],
        "hintText": "因為我們部門最近人力不足",
        "question": "這段對話的主要內容是什麼？",
        "options": [
          "部門因缺人而找外包協助",
          "部門決定自己完成這個專案",
          "外部公司主動委託專案給主角",
          "因為預算充足而聘用新員工"
        ],
        "answerIndex": 0
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然這起車禍的責任很複雜，但只要委託律師，就能妥善處理。",
        "pinyin": "suī rán zhè qǐ chē huò de zé rèn hěn fù zá, dàn zhǐ yào wěi tuō lǜ shī, jiù néng tuǒ shàn chǔ lǐ.",
        "japanese": "この交通事故の責任は複雑ですが、弁護士に依頼すれば、適切に処理できます。",
        "chunks": [
          "雖然這起車禍的責任很複雜",
          "但只要委託律師",
          "就能妥善處理"
        ],
        "hintText": "雖然這起車禍的責任很複雜"
      },
      {
        "situation": "店舗・服務",
        "chinese": "只要我們委託專業的團隊，這家餐廳的廣告效果就會更好。",
        "pinyin": "zhǐ yào wǒ men wěi tuō zhuān yè de tuán duì, zhè jiā cān tīng de guǎng gào xiào guǒ jiù huì gèng hǎo.",
        "japanese": "専門のチームに依頼しさえすれば、このレストランの広告効果はさらに良くなります。",
        "chunks": [
          "只要我們委託專業的團隊",
          "這家餐廳的廣告效果",
          "就會更好"
        ],
        "hintText": "只要我們委託專業的團隊"
      }
    ]
  },
  {
    "id": "B-262",
    "band": "B",
    "targetWord": "核心",
    "distractors": [
      "真心",
      "中心",
      "決心"
    ],
    "grammarNote": "「核心（héxīn）」は「核心、中心部、核」。問題や技術、事業などの最も重要で中心となる部分を指します。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為我們公司掌握了核心技術，所以不怕其他競爭對手的模仿。",
        "pinyin": "yīn wèi wǒ men gōng sī zhǎng wò le hé xīn jì shù, suǒ yǐ bú pà qí tā jìng zhēng duì shǒu de mó fǎng.",
        "japanese": "我が社はコア技術を握っているため、他の競合他社の模倣を恐れません。",
        "chunks": [
          "因為我們公司掌握了核心技術",
          "所以不怕其他",
          "競爭對手的模仿"
        ],
        "hintText": "因為我們公司掌握了核心技術",
        "question": "關於這家公司，下列敘述何者正確？",
        "options": [
          "核心技術讓公司具有競爭力",
          "公司因為對手模仿感到害怕",
          "公司希望對手能提供新技術",
          "公司目前沒有研發任何技術"
        ],
        "answerIndex": 0
      },
      {
        "situation": "店舗・服務",
        "chinese": "雖然這家餐廳的裝潢很簡單，但只要保留核心風味，生意一樣很好。",
        "pinyin": "suī rán zhè jiā cān tīng de zhuāng huáng hěn jiǎn dān, dàn zhǐ yào bǎo liú hé xīn fēng wèi, shēng yì yí yàng hěn hǎo.",
        "japanese": "このレストランの内装は非常にシンプルですが、核心となる風味を保ちさえすれば、商売は同じように繁盛します。",
        "chunks": [
          "雖然這家餐廳的裝潢很簡單",
          "但只要保留核心風味",
          "生意一樣很好"
        ],
        "hintText": "雖然這家餐廳的裝潢很簡單"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要我們能找到這個問題的核心，解決鄰居的糾紛就不難了。",
        "pinyin": "zhǐ yào wǒ men néng zhǎo dào zhè ge wèn tí de hé xīn, jiě jué lín jū de jiū fēn jiù bù nán le.",
        "japanese": "この問題の核心さえ見つければ、近隣住民のトラブルを解決することは難しくありません。",
        "chunks": [
          "只要我們能找到",
          "這個問題的核心",
          "解決鄰居的糾紛就不難了"
        ],
        "hintText": "只要我們能找到這"
      }
    ]
  },
  {
    "id": "B-263",
    "band": "B",
    "targetWord": "漏洞",
    "distractors": [
      "洞穴",
      "漏水",
      "疏忽"
    ],
    "grammarNote": "「漏洞（lòudòng）」は「抜け穴、欠陥、脆弱性」。セキュリティ上のバグや、法律・契約などの不備を表すのに頻出します。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為系統出現安全漏洞，所以他的個人資料差一點就被駭客偷走。",
        "pinyin": "yīn wèi xì tǒng chū xiàn ān quán lòu dòng, suǒ yǐ tā de gè rén zī liào chà yì diǎn jiù bèi hài kè tōu zǒu.",
        "japanese": "システムにセキュリティ上の脆弱性があったため、彼の個人情報はハッカーに盗まれそうになりました。",
        "chunks": [
          "因為系統出現安全漏洞",
          "所以他的個人資料",
          "差一點就被駭客偷走"
        ],
        "hintText": "因為系統出現安全漏洞",
        "question": "這位使用者的新資料最後怎麼樣了？",
        "options": [
          "資料差點被偷但最後安全",
          "個人資料已經被駭客偷走了",
          "駭客主動幫忙修補系統漏洞",
          "系統沒有出現任何安全問題"
        ],
        "answerIndex": 0
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然這份合約看起來很完美，但只要仔細檢查，就能發現漏洞。",
        "pinyin": "suī rán zhè fèn hé yuē kàn qǐ lái hěn wán měi, dàn zhǐ yào zǐ xì jiǎn chá, jiù néng fā xiàn lòu dòng.",
        "japanese": "この契約書は一見完璧に見えますが、注意深くチェックしさえすれば、不備を見つけることができます。",
        "chunks": [
          "雖然這份合約看起來很完美",
          "但只要仔細檢查",
          "就能發現漏洞"
        ],
        "hintText": "雖然這份合約看起來很完美"
      },
      {
        "situation": "店舗・服務",
        "chinese": "只要我們能修補收銀系統的漏洞，就不會再發生結帳金額錯誤了。",
        "pinyin": "zhǐ yào wǒ men néng xiū bǔ shōu yín xì tǒng de lòu dòng, jiù bú huì zài fā shēng jié zhàng jīn é cuò wù le.",
        "japanese": "レジシステムの不具合を修復しさえすれば、会計金額の間違いは二度と起こりません。",
        "chunks": [
          "只要我們能修補",
          "收銀系統的漏洞",
          "就不會再發生結帳金額錯誤了"
        ],
        "hintText": "只要我們能修補"
      }
    ]
  },
  {
    "id": "B-264",
    "band": "B",
    "targetWord": "突破",
    "distractors": [
      "打破",
      "突變",
      "衝突"
    ],
    "grammarNote": "「突破（tūpò）」は「突破する、乗り越える」。技術的なボトルネックの解消や、前人未到の記録更新などの際に用いられます。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為研發團隊在關鍵技術上取得突破，所以新產品才能提早上市。",
        "pinyin": "yīn wèi yán fā tuán duì zài guān jiàn jì shù shang qǔ dé tū pò, suǒ yǐ xīn chǎn pǐn cái néng tí zǎo shàng shì.",
        "japanese": "開発チームが重要技術でブレイクスルーを達成したため、新製品は予定より早く発売できました。",
        "chunks": [
          "因為研發團隊在關鍵技術",
          "上取得突破",
          "所以新產品才能提早上市"
        ],
        "hintText": "因為研發團隊在關鍵技術",
        "question": "新產品能夠提早上市的原因是什麼？",
        "options": [
          "研發團隊解決了技術瓶頸",
          "因為這款產品沒有技術門檻",
          "競爭對手主動放棄推出新機",
          "研發團隊延長了每天的工作"
        ],
        "answerIndex": 0
      },
      {
        "situation": "生活トラブル",
        "chinese": "雖然他在學習上遇到了瓶頸，但只要堅持練習，自然能突破。",
        "pinyin": "suī rán tā zài xué xí shang yù dào le píng jǐng, dàn zhǐ yào jiān chí liàn xí, zì rán néng tū pò.",
        "japanese": "彼は学習において壁にぶつかっていますが、練習を続ければ自然と突破できます。",
        "chunks": [
          "雖然他在學習上遇到了瓶頸",
          "但只要堅持練習",
          "自然能突破"
        ],
        "hintText": "雖然他在學習上遇到了瓶頸"
      },
      {
        "situation": "店舗・服務",
        "chinese": "只要這家老店在宣傳上尋求突破，就能吸引更多年輕人的注意。",
        "pinyin": "zhǐ yào zhè jiā lǎo diàn zài xuān chuán shang xún qiú tū pò, jiù néng xī yǐn gèng duō nián qīng rén de zhù yì.",
        "japanese": "この老舗がプロモーションで突破口を求めさえすれば、より多くの若者の関心を引くことができます。",
        "chunks": [
          "只要這家老店",
          "在宣傳上尋求突破",
          "就能吸引更多年輕人的注意"
        ],
        "hintText": "只要這家老店"
      }
    ]
  },
  {
    "id": "B-265",
    "band": "B",
    "targetWord": "協調",
    "distractors": [
      "合作",
      "妥協",
      "調和"
    ],
    "grammarNote": "「協調（xiétiáo）」は「調整する、折り合いをつける、協調する」。対立する二者間のバランスをとり、問題を解決に導く活動です。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為樓上漏水影響到樓下，所以管委會出面協調雙方的賠償問題。",
        "pinyin": "yīn wèi lóu shàng lòu shuǐ yǐng xiǎng dào lóu xià, suǒ yǐ guǎn wěi huì chū miàn xié tiáo shuāng fāng de péi cháng wèn tí.",
        "japanese": "上の階の水漏れが下の階に影響したため、管理委員会が双方の賠償問題の調整に乗り出しました。",
        "chunks": [
          "因為樓上漏水影響到樓下",
          "所以管委會出面",
          "協調雙方的賠償問題"
        ],
        "hintText": "因為樓上漏水影響到樓下",
        "question": "管理委員會出面做什麼事？",
        "options": [
          "協商調解兩家人的漏水糾紛",
          "自己出錢幫忙修理大樓水管",
          "處罰樓上住戶不可以再唱歌",
          "直接報警處理漏水賠償問題"
        ],
        "answerIndex": 0
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然各部門的要求不一致，但只要多方協調，就能達成共識。",
        "pinyin": "suī rán gè bù mén de yāo qiú bù yī zhì, dàn zhǐ yào duō fāng xié tiáo, jiù néng dá chéng gòng shí.",
        "japanese": "各部門の要求は一致していませんが、多角的に調整すれば合意に達することができます。",
        "chunks": [
          "雖然各部門的要求不一致",
          "但只要多方協調",
          "就能達成共識"
        ],
        "hintText": "雖然各部門的要求不一致"
      },
      {
        "situation": "店舗・服務",
        "chinese": "只要我們能與廠商協調出貨時間，這家店的商品就不會缺貨了。",
        "pinyin": "zhǐ yào wǒ men néng yǔ chàng shāng xié tiáo chū huò shí jiān, zhè jiā diàn de shāng pǐn jiù bú huì quē huò le.",
        "japanese": "メーカーと出荷時間を調整できさえすれば、この店の商品の欠品はなくなります。",
        "chunks": [
          "只要我們能與廠商",
          "協調出貨時間",
          "這家店的商品就不會缺貨了"
        ],
        "hintText": "只要我們能與廠商"
      }
    ]
  },
  {
    "id": "B-266",
    "band": "B",
    "targetWord": "機制",
    "distractors": [
      "機會",
      "體制",
      "機器"
    ],
    "grammarNote": "「機制（jīzhì）」は「メカニズム、仕組み、制度」。会社や社会における特定のプロセスの自動化・制度化されたルールを指します。",
    "examples": [
      {
        "situation": "公的手続き・職場",
        "chinese": "因為公司缺乏申訴保護機制，所以員工遇到不公時都不敢發言。",
        "pinyin": "yīn wèi gōng sī quē fá shēn sù bǎo hù jī zhì, suǒ yǐ yuán gōng yù dào bù gōng shí dōu bù gǎn fā yán.",
        "japanese": "会社に苦情保護メカニズムが欠けているため、従業員は不当な扱いを受けても発言する勇気がありません。",
        "chunks": [
          "因為公司缺乏申訴保護機制",
          "所以員工遇到不公時",
          "都不敢發言"
        ],
        "hintText": "因為公司缺乏申訴保護機制",
        "question": "為什麼員工遇到不公平的事情不敢說？",
        "options": [
          "因為公司沒有完善申訴機制",
          "因為員工自己犯了嚴重錯誤",
          "因為發言會被扣除當月獎金",
          "因為公司福利政策非常好"
        ],
        "answerIndex": 0
      },
      {
        "situation": "店舗・服務",
        "chinese": "雖然這家購物網站很受歡迎，但只要會員退貨機制太差，顧客就不會再買。",
        "pinyin": "suī rán zhè jiā gòu wù wǎng zhàn hěn shòu huān yíng, dàn zhǐ yào huì yuán tuì huò jī zhì tài chà, gù kè jiù bú huì zài mǎi.",
        "japanese": "このショッピングサイトは人気がありますが、会員の返品制度が悪ければ、顧客は二度と買いません。",
        "chunks": [
          "雖然這家購物網站很受歡迎",
          "但只要會員退貨機制太差",
          "顧客就不會再買"
        ],
        "hintText": "雖然這家購物網站很受歡迎"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要大樓的安全防火機制運作正常，就能在火災時保護住戶。",
        "pinyin": "zhǐ yào dà lóu de ān quán fáng huǒ jī zhì yùn zuò zhèng cháng, jiù néng zài huǒ zāi shí bǎo hù zhù hù.",
        "japanese": "ビルの防火システムが正常に作動しさえすれば、火災時に住民を保護することができます。",
        "chunks": [
          "只要大樓的安全防火機制",
          "運作正常",
          "就能在火災時保護住戶"
        ],
        "hintText": "只要大樓的安全防火機制"
      }
    ]
  },
  {
    "id": "B-267",
    "band": "B",
    "targetWord": "妥協",
    "distractors": [
      "協調",
      "放棄",
      "讓步"
    ],
    "grammarNote": "「妥協（tuǒxié）」は「妥協する、妥協」。お互いに譲り合って合意に達すること、または困難に屈することを表します。",
    "examples": [
      {
        "situation": "人間関係・家族",
        "chinese": "因為他們兩人在生活習慣上互不妥協，所以總是為了小事吵架。",
        "pinyin": "yīn wèi tā men liǎng rén zài shēng huó xí guàn shang hù bù tuǒ xié, suǒ yǐ zǒng shì wèi le xiǎo shì chǎo jià.",
        "japanese": "彼ら二人は生活習慣においてお互いに妥協しないため、いつも些細なことで喧嘩をしています。",
        "chunks": [
          "因為他們兩人在生活習慣上",
          "互不妥協",
          "所以總是為了小事吵架"
        ],
        "hintText": "因為他們兩人在生活習慣上",
        "question": "這兩個人經常吵架的原因是什麼？",
        "options": [
          "雙方都不願意為了對方讓步",
          "因為他們的收入差距太大了",
          "因為大樓的唱歌噪音太吵了",
          "主角不想跟對方繼續住下去"
        ],
        "answerIndex": 0
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然客戶提出的要求很不合理，但為了能簽約，我們不得不妥協。",
        "pinyin": "suī rán kè hù tí chū de yāo qiú hěn bù hé lǐ, dàn wèi le néng qiān yuē, wǒ men bù dé bù tuǒ xié.",
        "japanese": "顧客の要求は理不尽ですが、契約を結ぶために私たちは妥協せざるを得ません。",
        "chunks": [
          "雖然客戶提出的要求很不合理",
          "但為了能簽約",
          "我們不得不妥協"
        ],
        "hintText": "雖然客戶提出的要求很不合理"
      },
      {
        "situation": "生活トラブル",
        "chinese": "只要我們在關鍵問題上做出一些妥協，這場談判就能順利結束。",
        "pinyin": "zhǐ yào wǒ men zài guān jiàn wèn tí shang zuò chū yī xiē tuǒ xié, zhè chǎng tán pàn jiù néng shùn lì jié shù.",
        "japanese": "重要な問題で私たちが少し妥協しさえすれば、この交渉はスムーズに終了します。",
        "chunks": [
          "只要我們在關鍵問題上",
          "做出一些妥協",
          "這場談判就能順利結束"
        ],
        "hintText": "只要我們在關鍵問題上"
      }
    ]
  },
  {
    "id": "B-268",
    "band": "B",
    "targetWord": "糾紛",
    "distractors": [
      "矛盾",
      "紛失",
      "爭吵"
    ],
    "grammarNote": "「糾紛（jiūfēn）」は「紛争、トラブル、もめごと」。契約上の争いや、住民間のトラブルなどの揉め事を表す際に非常によく使われます。",
    "examples": [
      {
        "situation": "生活トラブル",
        "chinese": "因為合約的內容寫得不夠清楚，所以房東與房客發生了租屋糾紛。",
        "pinyin": "yīn wèi hé yuē de nèi róng xiě de bú gòu qīng chǔ, suǒ yǐ fáng dōng yǔ fáng kè fā shēng le zū wū jiū fēn.",
        "japanese": "契約内容が十分に明確に書かれていなかったため、大家と店主の間で賃貸トラブルが発生しました。",
        "chunks": [
          "因為合約的內容",
          "寫得不夠清楚",
          "所以房東與房客發生了租屋糾紛"
        ],
        "hintText": "因為合約的內容",
        "question": "關於租屋糾紛發生的主要原因是什麼？",
        "options": [
          "租賃契約的條款不夠明確",
          "房客故意不繳交每月租金",
          "房東不願意把房子租出去",
          "雙方的生活習慣互不適應"
        ],
        "answerIndex": 0
      },
      {
        "situation": "公的手続き・職場",
        "chinese": "雖然這家公司的合約有模糊地帶，但只要我們妥協，就能避免糾紛。",
        "pinyin": "suī rán zhè jiā gōng sī de hé yuē yǒu mó hu dì dài, dàn zhǐ yào wǒ men tuǒ xié, jiù néng bì miǎn jiū fēn.",
        "japanese": "この会社の契約書には曖昧な部分がありますが、私たちが妥協しさえすれば、紛争を避けることができます。",
        "chunks": [
          "雖然這家公司的合約有模糊地帶",
          "但只要我們妥協",
          "就能避免糾紛"
        ],
        "hintText": "雖然這家公司的合約有模糊地帶"
      },
      {
        "situation": "店舗・服務",
        "chinese": "只要這家店能提供良好的售後服務，就能減少與顧客的糾紛。",
        "pinyin": "zhǐ yào zhè jiā diàn néng tí gōng liáng hǎo de shòu hòu fú wù, jiù néng jiǎn shǎo yǔ gù kè de jiū fēn.",
        "japanese": "この店が良いアフターサービスを提供できさえすれば、顧客とのトラブルを減らすことができます。",
        "chunks": [
          "只要這家店",
          "能提供良好的售後服務",
          "就能減少與顧客的糾紛"
        ],
        "hintText": "只要這家店"
      }
    ]
  }
,
  {
    "id": "B-NEW-ORD-001",
    "band": "B",
    "targetWord": "儘管",
    "distractors": [
      "既然",
      "因為",
      "不但"
    ],
    "grammarNote": "「儘管」は「〜であるにもかかわらず」を意味します。",
    "examples": [
      {
        "situation": "工作",
        "chinese": "儘管這個任務非常艱鉅，整個團隊仍然願意接受挑戰。",
        "pinyin": "jǐn guǎn zhè ge rèn wù fēi cháng jiān jù, zhěng gè tuán duì réng rán yuàn yì jiē shòu tiǎo zhàn.",
        "japanese": "この任務は非常に困難であるにもかかわらず、チーム全体が喜んで挑戦を受け入れています。",
        "chunks": [
          "儘管這個任務非常艱鉅",
          "整個團隊仍然願意",
          "接受挑戰"
        ],
        "hintText": "儘管這個任務非常艱鉅，"
      }
    ]
  },
  {
    "id": "B-NEW-ORD-002",
    "band": "B",
    "targetWord": "既然",
    "distractors": [
      "既然",
      "因為",
      "不但"
    ],
    "grammarNote": "「儘管」は「〜であるにもかかわらず」を意味します。",
    "examples": [
      {
        "situation": "日常",
        "chinese": "既然你已經決定辭職，那就好好規劃未來的方向吧。",
        "pinyin": "jì rán nǐ yǐ jīng jué dìng cí zhí, nà jiù hǎo hǎo guī huà wèi lái de fāng xiàng ba.",
        "japanese": "すでに辞職すると決めたのだから、将来の方向性をしっかり計画しなさい。",
        "chunks": [
          "既然你已經決定辭職",
          "那就好好規劃",
          "未來的方向吧"
        ],
        "hintText": "既然你已經決定辭職，"
      }
    ]
  },
  {
    "id": "B-NEW-ORD-003",
    "band": "B",
    "targetWord": "不但",
    "distractors": [
      "既然",
      "因為",
      "不但"
    ],
    "grammarNote": "「儘管」は「〜であるにもかかわらず」を意味します。",
    "examples": [
      {
        "situation": "學習",
        "chinese": "他不但會彈鋼琴，還拿過全國大提琴比賽的冠軍。",
        "pinyin": "tā bù dàn huì tán gāng qín, hái ná guò quán guó dà tí qín bǐ sài de guān jūn.",
        "japanese": "彼はピアノを弾けるだけでなく、全国チェロコンクールで優勝したこともあります。",
        "chunks": [
          "他不但會彈鋼琴",
          "還拿過全國大提琴比賽的冠軍"
        ],
        "hintText": "他不但會彈鋼琴，"
      }
    ]
  },
  {
    "id": "B-NEW-ORD-004",
    "band": "B",
    "targetWord": "反而",
    "distractors": [
      "既然",
      "因為",
      "不但"
    ],
    "grammarNote": "「儘管」は「〜であるにもかかわらず」を意味します。",
    "examples": [
      {
        "situation": "意外",
        "chinese": "吃了這種藥之後，他的病情反而變得更加嚴重了。",
        "pinyin": "chī le zhè zhǒng yào zhī hòu, tā de bìng qíng fǎn ér biàn de gèng jiā yán zhòng le.",
        "japanese": "この薬を飲んだ後、彼の病状はかえってさらに深刻になりました。",
        "chunks": [
          "吃了這種藥之後",
          "他的病情反而變得",
          "更加嚴重了"
        ],
        "hintText": "吃了這種藥之後，"
      }
    ]
  },
  {
    "id": "B-NEW-ORD-005",
    "band": "B",
    "targetWord": "甚至於",
    "distractors": [
      "既然",
      "因為",
      "不但"
    ],
    "grammarNote": "「儘管」は「〜であるにもかかわらず」を意味します。",
    "examples": [
      {
        "situation": "極端",
        "chinese": "那場大火非常猛烈，甚至於整棟建築物都被燒毀了。",
        "pinyin": "nà chǎng dà huǒ fēi cháng měng liè, shèn zhì yú zhěng dòng jiàn zhù wù dōu bèi shāo huǐ le.",
        "japanese": "その大火は非常に猛烈で、建物全体さえも焼失してしまいました。",
        "chunks": [
          "那場大火非常猛烈",
          "甚至於整棟建築物",
          "都被燒毀了"
        ],
        "hintText": "那場大火非常猛烈，"
      }
    ]
  },
  {
    "id": "B-NEW-ORD-006",
    "band": "B",
    "targetWord": "不僅",
    "distractors": [
      "既然",
      "因為",
      "不但"
    ],
    "grammarNote": "「儘管」は「〜であるにもかかわらず」を意味します。",
    "examples": [
      {
        "situation": "能力",
        "chinese": "這家公司不僅提供優渥的薪水，還有完善的培訓計畫。",
        "pinyin": "zhè jiā gōng sī bù jǐn tí gōng yōu wò de xīn shuǐ, hái yǒu wán shàn de péi xùn jì huà.",
        "japanese": "この会社は良い給与を提供するだけでなく、充実した研修計画もあります。",
        "chunks": [
          "這家公司不僅提供優渥的薪水",
          "還有完善的",
          "培訓計畫"
        ],
        "hintText": "這家公司不僅提供優渥的薪水，"
      }
    ]
  },
  {
    "id": "B-NEW-ORD-007",
    "band": "B",
    "targetWord": "寧可",
    "distractors": [
      "既然",
      "因為",
      "不但"
    ],
    "grammarNote": "「儘管」は「〜であるにもかかわらず」を意味します。",
    "examples": [
      {
        "situation": "選擇",
        "chinese": "他寧可走路回家，也不願意搭乘擁擠的公車。",
        "pinyin": "tā níng kě zǒu lù huí jiā, yě bù yuàn yì dā chéng yǒng jǐ de gōng chē.",
        "japanese": "彼は満員のバスに乗るくらいなら、歩いて帰る方を選びます。",
        "chunks": [
          "他寧可走路回家",
          "也不願意搭乘",
          "擁擠的公車"
        ],
        "hintText": "他寧可走路回家，"
      }
    ]
  },
  {
    "id": "B-NEW-ORD-008",
    "band": "B",
    "targetWord": "何必",
    "distractors": [
      "既然",
      "因為",
      "不但"
    ],
    "grammarNote": "「儘管」は「〜であるにもかかわらず」を意味します。",
    "examples": [
      {
        "situation": "勸告",
        "chinese": "事情都已經過去了，你何必還一直放在心上呢？",
        "pinyin": "shì qíng dōu yǐ jīng guò qù le, nǐ hé bì hái yì zhí fàng zài xīn shàng ne?",
        "japanese": "事態はもう終わったのだから、どうしてずっと気にしているのですか？",
        "chunks": [
          "事情都已經過去了",
          "你何必還一直",
          "放在心上呢？"
        ],
        "hintText": "事情都已經過去了，"
      }
    ]
  },
  {
    "id": "B-NEW-ORD-009",
    "band": "B",
    "targetWord": "除非",
    "distractors": [
      "既然",
      "因為",
      "不但"
    ],
    "grammarNote": "「儘管」は「〜であるにもかかわらず」を意味します。",
    "examples": [
      {
        "situation": "條件",
        "chinese": "除非你親自向他道歉，否則他絕對不會原諒你的。",
        "pinyin": "chú fēi nǐ qīn zì xiàng tā dào qiàn, fǒu zé tā jué duì bú huì yuán liàng nǐ de.",
        "japanese": "あなたが直接彼に謝らない限り、彼は絶対にあなたを許さないでしょう。",
        "chunks": [
          "除非你親自向他道歉",
          "否則他絕對",
          "不會原諒你的"
        ],
        "hintText": "除非你親自向他道歉，"
      }
    ]
  },
  {
    "id": "B-NEW-ORD-010",
    "band": "B",
    "targetWord": "否則",
    "distractors": [
      "既然",
      "因為",
      "不但"
    ],
    "grammarNote": "「儘管」は「〜であるにもかかわらず」を意味します。",
    "examples": [
      {
        "situation": "警告",
        "chinese": "請務必遵守公司的規定，否則會受到嚴厲的處分。",
        "pinyin": "qǐng wù bì zūn shǒu gōng sī de guī dìng, fǒu zé huì shòu dào yán lì de chǔ fèn.",
        "japanese": "必ず会社の規則を守ってください。さもなければ厳しい処分を受けます。",
        "chunks": [
          "請務必遵守公司的規定",
          "否則會受到",
          "嚴厲的處分"
        ],
        "hintText": "請務必遵守公司的規定，"
      }
    ]
  },
  {
    "id": "B-NEW-LIS-001",
    "band": "B",
    "targetWord": "幾乎",
    "distractors": [
      "大概",
      "也許",
      "可能"
    ],
    "grammarNote": "「幾乎」は「ほとんど」を意味します。",
    "examples": [
      {
        "situation": "購物",
        "chinese": "這家百貨公司正在舉辦週年慶，全館的商品幾乎都有打折。",
        "pinyin": "zhè jiā bǎi huò gōng sī zhèng zài jǔ bàn zhōu nián qìng, quán guǎn de shāng pǐn jī hū dōu yǒu dǎ zhé.",
        "japanese": "このデパートは今、周年記念セールを開催していて、全館の商品がほとんど割引されています。",
        "question": "根據這句話，現在去這家百貨公司購物會有什麼好處？",
        "options": [
          "幾乎所有的商品都可以免費拿走",
          "因為週年慶，大部分的商品都有折扣",
          "全館的商品可能都沒有打折",
          "只有幾件特定商品有參與週年慶活動"
        ],
        "answerIndex": 1,
        "chunks": [
          "這家百貨公司正在舉辦週年慶",
          "全館的商品幾乎都有打折"
        ],
        "hintText": "這家百貨公司正在舉辦週年慶，"
      }
    ]
  },
  {
    "id": "B-NEW-LIS-002",
    "band": "B",
    "targetWord": "稍微",
    "distractors": [
      "大概",
      "也許",
      "可能"
    ],
    "grammarNote": "「幾乎」は「ほとんど」を意味します。",
    "examples": [
      {
        "situation": "修正",
        "chinese": "這份報告的內容很完整，只是排版稍微需要修改一下。",
        "pinyin": "zhè fèn bào gào de nèi róng hěn wán zhěng, zhǐ shì pái bǎn shāo wéi xū yào xiū gǎi yí xià.",
        "japanese": "このレポートの内容は完璧ですが、レイアウトだけ少し修正が必要です。",
        "question": "說話者對這份報告的評價如何？",
        "options": [
          "內容非常糟糕，需要稍微重寫",
          "排版非常完美，但內容需要大幅修改",
          "整體內容不錯，僅有一些排版的小問題",
          "這份報告稍微看了一下，覺得完全不行"
        ],
        "answerIndex": 2,
        "chunks": [
          "這份報告的內容很完整",
          "只是排版稍微需要修改一下"
        ],
        "hintText": "這份報告的內容很完整，"
      }
    ]
  },
  {
    "id": "B-NEW-LIS-003",
    "band": "B",
    "targetWord": "根本",
    "distractors": [
      "大概",
      "也許",
      "可能"
    ],
    "grammarNote": "「幾乎」は「ほとんど」を意味します。",
    "examples": [
      {
        "situation": "否認",
        "chinese": "我根本不認識那個人，怎麼可能借給他兩百萬元？",
        "pinyin": "wǒ gēn běn bù rèn shí nà ge rén, zěn me kě néng jiè gěi tā liǎng bǎi wàn yuán?",
        "japanese": "私はあの人を全く知らないのに、どうして彼に二百万元も貸すことができるでしょうか？",
        "question": "說話者的意思是想表達什麼？",
        "options": [
          "他借了兩百萬元給那個不認識的人",
          "他因為根本不認識對方，所以不可能借錢",
          "他認識那個人，但只借了一點點錢",
          "那個人跟他借錢，但他打算明天再給"
        ],
        "answerIndex": 1,
        "chunks": [
          "我根本不認識那個人",
          "怎麼可能借給他兩百萬元"
        ],
        "hintText": "我根本不認識那個人，"
      }
    ]
  },
  {
    "id": "B-NEW-LIS-004",
    "band": "B",
    "targetWord": "確實",
    "distractors": [
      "大概",
      "也許",
      "可能"
    ],
    "grammarNote": "「幾乎」は「ほとんど」を意味します。",
    "examples": [
      {
        "situation": "確認",
        "chinese": "這份資料確實是經理親自核准的，沒有任何問題。",
        "pinyin": "zhè fèn zī liào què shí shì jīng lǐ qīn zì hé zhǔn de, méi yǒu rèn hé wèn tí.",
        "japanese": "この資料は確かにマネージャーが自ら承認したもので、何の問題もありません。",
        "question": "關於這份資料，下列哪一個敘述正確？",
        "options": [
          "經理確實還沒有看過這份資料",
          "這份資料有問題，需要經理核准",
          "經理已經親自批准，所以資料沒問題",
          "雖然經理核准了，但資料確實有錯誤"
        ],
        "answerIndex": 2,
        "chunks": [
          "這份資料確實是經理親自核准的",
          "沒有任何問題"
        ],
        "hintText": "這份資料確實是經理親自核准的，"
      }
    ]
  },
  {
    "id": "B-NEW-LIS-005",
    "band": "B",
    "targetWord": "顯然",
    "distractors": [
      "大概",
      "也許",
      "可能"
    ],
    "grammarNote": "「幾乎」は「ほとんど」を意味します。",
    "examples": [
      {
        "situation": "推測",
        "chinese": "地上全都是水，顯然剛才下過一場大雨。",
        "pinyin": "dì shàng quán dōu shì shuǐ, xiǎn rán gāng cái xià guò yì chǎng dà yǔ.",
        "japanese": "地面が水浸しだ。どうやらさっき大雨が降ったようだ。",
        "question": "說話者看到地上的水，做出了什麼推測？",
        "options": [
          "顯然有人故意把水灑在地上",
          "剛才應該有下過一場很大的雨",
          "接下來顯然會下一場大雨",
          "顯然水管破裂了，所以地上都是水"
        ],
        "answerIndex": 1,
        "chunks": [
          "地上全都是水",
          "顯然剛才下過一場大雨"
        ],
        "hintText": "地上全都是水，"
      }
    ]
  },
  {
    "id": "B-NEW-LIS-006",
    "band": "B",
    "targetWord": "難免",
    "distractors": [
      "大概",
      "也許",
      "可能"
    ],
    "grammarNote": "「幾乎」は「ほとんど」を意味します。",
    "examples": [
      {
        "situation": "安慰",
        "chinese": "剛開始接觸新工作，難免會犯錯，下次注意就好。",
        "pinyin": "gāng kāi shǐ jiē chù xīn gōng zuò, nán miǎn huì fàn cuò, xià cì zhù yì jiù hǎo.",
        "japanese": "新しい仕事に就いたばかりの頃は、どうしてもミスをしてしまうものだ。次回気を付ければいい。",
        "question": "說話者對於新人犯錯抱持什麼態度？",
        "options": [
          "覺得新人不應該犯錯，非常生氣",
          "認為剛開始難免會出錯，給予安慰",
          "警告新人如果再犯錯就會被開除",
          "覺得工作太難，新人一定做不好"
        ],
        "answerIndex": 1,
        "chunks": [
          "剛開始接觸新工作",
          "難免會犯錯",
          "下次注意就好"
        ],
        "hintText": "剛開始接觸新工作，難免會犯錯，"
      }
    ]
  },
  {
    "id": "B-NEW-LIS-007",
    "band": "B",
    "targetWord": "畢竟",
    "distractors": [
      "大概",
      "也許",
      "可能"
    ],
    "grammarNote": "「幾乎」は「ほとんど」を意味します。",
    "examples": [
      {
        "situation": "包容",
        "chinese": "畢竟他還是個孩子，你就別對他太嚴格了。",
        "pinyin": "bì jìng tā hái shì gè hái zi, nǐ jiù bié duì tā tài yán gé le.",
        "japanese": "結局のところ彼はまだ子供なのだから、あまり厳しくしないでやってくれ。",
        "question": "說話者希望對方怎麼做？",
        "options": [
          "因為他是個孩子，所以要更加嚴格",
          "不要對那個孩子要求得太過苛刻",
          "畢竟孩子需要學習，應該處罰他",
          "孩子太嚴格了，應該讓他休息"
        ],
        "answerIndex": 1,
        "chunks": [
          "畢竟他還是個孩子",
          "你就別對他太嚴格了"
        ],
        "hintText": "畢竟他還是個孩子，"
      }
    ]
  },
  {
    "id": "B-NEW-LIS-008",
    "band": "B",
    "targetWord": "反正",
    "distractors": [
      "大概",
      "也許",
      "可能"
    ],
    "grammarNote": "「幾乎」は「ほとんど」を意味します。",
    "examples": [
      {
        "situation": "無所謂",
        "chinese": "反正今天的會議已經取消了，我們不如去喝杯咖啡吧。",
        "pinyin": "fǎn zhèng jīn tiān de huì yì yǐ jīng qǔ xiāo le, wǒ men bù rú qù hē bēi kā fēi ba.",
        "japanese": "どのみち今日の会議はキャンセルされたのだから、コーヒーでも飲みに行きませんか。",
        "question": "說話者提議去喝咖啡的原因是什麼？",
        "options": [
          "因為會議要在咖啡廳舉行",
          "因為原本安排的會議取消了",
          "因為反正他們都不想參加會議",
          "因為喝完咖啡會議才要開始"
        ],
        "answerIndex": 1,
        "chunks": [
          "反正今天的會議已經取消了",
          "我們不如去喝杯咖啡吧"
        ],
        "hintText": "反正今天的會議已經取消了，"
      }
    ]
  },
  {
    "id": "B-NEW-LIS-009",
    "band": "B",
    "targetWord": "難道",
    "distractors": [
      "大概",
      "也許",
      "可能"
    ],
    "grammarNote": "「幾乎」は「ほとんど」を意味します。",
    "examples": [
      {
        "situation": "質疑",
        "chinese": "難道你真的相信他編出來的那些謊話嗎？",
        "pinyin": "nán dào nǐ zhēn de xiāng xìn tā biān chū lái de nà xiē huǎng huà ma?",
        "japanese": "まさかあなたは彼が作り上げたあの嘘を本当に信じているのですか？",
        "question": "說話者對聽話者的態度是什麼？",
        "options": [
          "相信聽話者說的都是實話",
          "懷疑對方怎麼會相信那些謊言",
          "難道聽話者也要一起說謊嗎",
          "希望聽話者能幫忙編個謊話"
        ],
        "answerIndex": 1,
        "chunks": [
          "難道你真的相信",
          "他編出來的那些謊話嗎"
        ],
        "hintText": "難道你真的相信"
      }
    ]
  },
  {
    "id": "B-NEW-LIS-010",
    "band": "B",
    "targetWord": "到底",
    "distractors": [
      "大概",
      "也許",
      "可能"
    ],
    "grammarNote": "「幾乎」は「ほとんど」を意味します。",
    "examples": [
      {
        "situation": "追問",
        "chinese": "這份合約到底有沒有經過總經理的批准？",
        "pinyin": "zhè fèn hé yuē dào dǐ yǒu méi yǒu jīng guò zǒng jīng lǐ de pī zhǔn?",
        "japanese": "この契約書は一体社長の承認を得ているのですか？",
        "question": "說話者最想確認的事情是什麼？",
        "options": [
          "這份合約到底是誰寫的",
          "總經理到底什麼時候要看合約",
          "合約是否已經得到總經理的同意",
          "總經理到底同不同意這份合約的價格"
        ],
        "answerIndex": 2,
        "chunks": [
          "這份合約到底有沒有",
          "經過總經理的批准"
        ],
        "hintText": "這份合約到底有沒有"
      }
    ]
  }
];
