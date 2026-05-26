import json
import re
import os

# Data for Level 3
level3_new_data = []

# 10 Ordering questions for Level 3
for i in range(10):
    card = {
        "id": f"A-NEW-ORD-{i+1:03d}",
        "band": "B",
        "targetWord": "不管",
        "distractors": ["只要", "雖然", "如果"],
        "grammarNote": "「不管」は「〜に関わらず」を意味します。",
        "examples": [
            {
                "situation": "日常",
                "chinese": "不管是晴天還是雨天，他每天早上六點一定會去公園運動。",
                "pinyin": "bù guǎn shì qíng tiān hái shì yǔ tiān, tā měi tiān zǎo shang liù diǎn yí dìng huì qù gōng yuán yùn dòng.",
                "japanese": "晴れでも雨でも、彼は毎朝六時に必ず公園へ運動に行きます。",
                "chunks": [
                    "不管是晴天還是雨天",
                    "他每天早上六點",
                    "一定會去公園運動"
                ],
                "hintText": "不管是晴天還是雨天，"
            }
        ]
    }
    # Modify each card slightly to be unique
    words = ["不管", "只要", "只有", "為了", "否則", "甚至", "居然", "竟然", "到底", "根本"]
    card["targetWord"] = words[i]
    if i == 1:
        card["examples"][0] = {
            "situation": "交通",
            "chinese": "只要你記得帶錢包，我們就可以隨時出發去台北。",
            "pinyin": "zhǐ yào nǐ jì de dài qián bāo, wǒ men jiù kě yǐ suí shí chū fā qù Tái běi.",
            "japanese": "財布さえ忘れなければ、いつでも台北に出発できるよ。",
            "chunks": ["只要你記得帶錢包", "我們就可以", "隨時出發去台北"],
            "hintText": "只要你記得帶錢包，"
        }
    elif i == 2:
        card["examples"][0] = {
            "situation": "職場",
            "chinese": "只有經理簽名同意，這份文件才能正式生效。",
            "pinyin": "zhǐ yǒu jīng lǐ qiān míng tóng yì, zhè fèn wén jiàn cái néng zhèng shì shēng xiào.",
            "japanese": "マネージャーが署名して同意して初めて、この書類は正式に有効になります。",
            "chunks": ["只有經理簽名同意", "這份文件", "才能正式生效"],
            "hintText": "只有經理簽名同意，"
        }
    elif i == 3:
        card["examples"][0] = {
            "situation": "家庭",
            "chinese": "為了讓孩子有更好的未來，他們決定搬到市區。",
            "pinyin": "wèi le ràng hái zi yǒu gèng hǎo de wèi lái, tā men jué dìng bān dào shì qū.",
            "japanese": "子供により良い未来を持たせるために、彼らは市街地へ引っ越すことを決めました。",
            "chunks": ["為了讓孩子有更好的未來", "他們決定", "搬到市區"],
            "hintText": "為了讓孩子有更好的未來，"
        }
    elif i == 4:
        card["examples"][0] = {
            "situation": "購物",
            "chinese": "你必須趕快決定，否則這件衣服很快就會賣完了。",
            "pinyin": "nǐ bì xū gǎn kuài jué dìng, fǒu zé zhè jiàn yī fú hěn kuài jiù huì mài wán le.",
            "japanese": "早く決めないと、この服はすぐに売り切れてしまいますよ。",
            "chunks": ["你必須趕快決定", "否則這件衣服", "很快就會賣完了"],
            "hintText": "你必須趕快決定，"
        }
    elif i == 5:
        card["examples"][0] = {
            "situation": "生活",
            "chinese": "他不僅會說三種語言，甚至連程式設計都很厲害。",
            "pinyin": "tā bù jǐn huì shuō sān zhǒng yǔ yán, shèn zhì lián chéng shì shè jì dōu hěn lì hài.",
            "japanese": "彼は三カ国語を話せるだけでなく、プログラミングさえも得意です。",
            "chunks": ["他不僅會說三種語言", "甚至連程式設計", "都很厲害"],
            "hintText": "他不僅會說三種語言，"
        }
    elif i == 6:
        card["examples"][0] = {
            "situation": "考試",
            "chinese": "他平常都沒讀書，這次考試居然考了一百分。",
            "pinyin": "tā píng cháng dōu méi dú shū, zhè cì kǎo shì jū rán kǎo le yí bǎi fēn.",
            "japanese": "彼は普段全く勉強していないのに、今回の試験でなんと百点を取りました。",
            "chunks": ["他平常都沒讀書", "這次考試居然", "考了一百分"],
            "hintText": "他平常都沒讀書，"
        }
    elif i == 7:
        card["examples"][0] = {
            "situation": "旅行",
            "chinese": "沒想到這家飯店的服務，竟然比五星級的還要好。",
            "pinyin": "méi xiǎng dào zhè jiā fàn diàn de fú wù, jìng rán bǐ wǔ xīng jí de hái yào hǎo.",
            "japanese": "このホテルのサービスが、五つ星ホテルよりも良いなんて思いませんでした。",
            "chunks": ["沒想到這家飯店的服務", "竟然比五星級的", "還要好"],
            "hintText": "沒想到這家飯店的服務，"
        }
    elif i == 8:
        card["examples"][0] = {
            "situation": "會議",
            "chinese": "大家討論了三個小時，到底最後決定是什麼？",
            "pinyin": "dà jiā tǎo lùn le sān gè xiǎo shí, dào dǐ zuì hòu jué dìng shì shén me?",
            "japanese": "みんなで三時間も話し合ったけど、結局最後の決定は何ですか？",
            "chunks": ["大家討論了三個小時", "到底最後決定", "是什麼？"],
            "hintText": "大家討論了三個小時，"
        }
    elif i == 9:
        card["examples"][0] = {
            "situation": "誤解",
            "chinese": "我根本沒說過那種話，你不要隨便誤會我。",
            "pinyin": "wǒ gēn běn méi shuō guò nà zhǒng huà, nǐ bú yào suí biàn wù huì wǒ.",
            "japanese": "私はそんなこと全く言っていないから、勝手に誤解しないで。",
            "chunks": ["我根本沒說過那種話", "你不要隨便", "誤會我"],
            "hintText": "我根本沒說過那種話，"
        }
    level3_new_data.append(card)

# 10 Listening questions for Level 3
for i in range(10):
    card = {
        "id": f"A-NEW-LIS-{i+1:03d}",
        "band": "B",
        "targetWord": "其實",
        "distractors": ["實在", "當然", "忽然"],
        "grammarNote": "「其實」は「実は」を意味します。",
        "examples": [
            {
                "situation": "日常",
                "chinese": "我以為他今年三十歲，其實他已經四十五歲了。",
                "pinyin": "wǒ yǐ wéi tā jīn nián sān shí suì, qí shí tā yǐ jīng sì shí wǔ suì le.",
                "japanese": "彼が今年三十歳だと思っていたら、実はもう四十五歳でした。",
                "question": "根據這句話，說話者對這個人的年齡有什麼發現？",
                "options": [
                    "他看起來比三十歲還要年輕很多",
                    "他的實際年紀比原本以為的還要大",
                    "他剛好滿三十五歲，看起來很成熟",
                    "他說謊騙人，其實他才二十歲"
                ],
                "answerIndex": 1,
                "chunks": ["我以為他今年三十歲", "其實他已經四十五歲了"],
                "hintText": "我以為他今年三十歲，"
            }
        ]
    }
    words = ["其實", "實在", "當然", "忽然", "難怪", "究竟", "終於", "幾乎", "趕快", "不管"]
    card["targetWord"] = words[i]
    if i == 1:
        card["examples"][0] = {
            "situation": "餐廳",
            "chinese": "這家餐廳的菜實在太辣了，我連一口水都喝不下去。",
            "pinyin": "zhè jiā cān tīng de cài shí zài tài là le, wǒ lián yì kǒu shuǐ dōu hē bú xià qù.",
            "japanese": "このレストランの料理は本当に辛すぎて、水一口すら飲めません。",
            "question": "這家餐廳的菜讓說話者覺得如何？",
            "options": [
                "味道很好，所以他喝了很多水",
                "實在太辣，讓他根本無法繼續吃",
                "雖然很辣，但他覺得非常好吃",
                "服務很差，甚至連水都不給客人喝"
            ],
            "answerIndex": 1,
            "chunks": ["這家餐廳的菜實在太辣了", "我連一口水都喝不下去"],
            "hintText": "這家餐廳的菜實在太辣了，"
        }
    elif i == 2:
        card["examples"][0] = {
            "situation": "工作",
            "chinese": "經理親自交代的事情，當然要優先處理完畢。",
            "pinyin": "jīng lǐ qīn zì jiāo dài de shì qíng, dāng rán yào yōu xiān chǔ lǐ wán bì.",
            "japanese": "マネージャーが直接指示したことは、当然優先して処理しなければなりません。",
            "question": "說話者對於經理交代的工作態度為何？",
            "options": [
                "覺得很麻煩，打算最後再做",
                "認為非常重要，必須第一個完成",
                "覺得跟其他工作一樣，慢慢來就好",
                "雖然是經理說的，但他當然不想做"
            ],
            "answerIndex": 1,
            "chunks": ["經理親自交代的事情", "當然要優先處理完畢"],
            "hintText": "經理親自交代的事情，"
        }
    elif i == 3:
        card["examples"][0] = {
            "situation": "天氣",
            "chinese": "原本天氣很好，忽然下起了大雨，大家都淋濕了。",
            "pinyin": "yuán běn tiān qì hěn hǎo, hū rán xià qǐ le dà yǔ, dà jiā dōu lín shī le.",
            "japanese": "元々は天気が良かったのに、突然大雨が降り出し、みんな濡れてしまいました。",
            "question": "當時的天氣發生了什麼變化？",
            "options": [
                "雨下了一整天，大家都不想出門",
                "天氣一直很好，沒有下雨",
                "本來沒下雨，結果突然變天下大雨",
                "大家因為忽然下雨而帶了雨傘"
            ],
            "answerIndex": 2,
            "chunks": ["原本天氣很好", "忽然下起了大雨", "大家都淋濕了"],
            "hintText": "原本天氣很好，"
        }
    elif i == 4:
        card["examples"][0] = {
            "situation": "遲到",
            "chinese": "難怪他今天沒來上班，原來他昨天晚上發燒了。",
            "pinyin": "nán guài tā jīn tiān méi lái shàng bān, yuán lái tā zuó tiān wǎn shàng fā shāo le.",
            "japanese": "今日彼が仕事に来ないわけだ。昨晩熱を出していたのか。",
            "question": "為什麼說話者說「難怪他今天沒來上班」？",
            "options": [
                "因為他發現對方昨天晚上生病了",
                "因為對方一直都有遲到的習慣",
                "因為他不喜歡對方，所以怪他不來",
                "因為對方昨天晚上跟朋友去玩了"
            ],
            "answerIndex": 0,
            "chunks": ["難怪他今天沒來上班", "原來他昨天晚上發燒了"],
            "hintText": "難怪他今天沒來上班，"
        }
    elif i == 5:
        card["examples"][0] = {
            "situation": "秘密",
            "chinese": "這件事情究竟是誰說出去的？我們必須查清楚。",
            "pinyin": "zhè jiàn shì qíng jiù jìng shì shéi shuō chū qù de? wǒ men bì xū chá qīng chǔ.",
            "japanese": "この事を一体誰が言いふらしたのか？我々ははっきり調べなければならない。",
            "question": "說話者現在想要知道什麼資訊？",
            "options": [
                "這件事情到底該怎麼解決",
                "究竟是誰把秘密洩漏出去的",
                "這件事情是真是假",
                "為什麼大家都在討論這件事"
            ],
            "answerIndex": 1,
            "chunks": ["這件事情究竟是誰說出去的", "我們必須查清楚"],
            "hintText": "這件事情究竟是誰說出去的？"
        }
    elif i == 6:
        card["examples"][0] = {
            "situation": "排隊",
            "chinese": "排了兩個小時，終於買到這家有名的蛋糕了。",
            "pinyin": "pái le liǎng gè xiǎo shí, zhōng yú mǎi dào zhè jiā yǒu míng de dàn gāo le.",
            "japanese": "二時間並んで、ついにこの有名なケーキを買えました。",
            "question": "說話者為了買蛋糕花費了什麼代價？",
            "options": [
                "花了很多錢，終於買到了",
                "找了很久，才發現這家有名的店",
                "排隊等了很久的時間才成功買到",
                "等了兩個星期才收到蛋糕"
            ],
            "answerIndex": 2,
            "chunks": ["排了兩個小時", "終於買到這家有名的蛋糕了"],
            "hintText": "排了兩個小時，"
        }
    elif i == 7:
        card["examples"][0] = {
            "situation": "準備",
            "chinese": "這個專案幾乎花了我半年的時間，幸好最後很成功。",
            "pinyin": "zhè ge zhuān àn jī hū huā le wǒ bàn nián de shí jiān, xìng hǎo zuì hòu hěn chéng gōng.",
            "japanese": "このプロジェクトは私の半年をほぼ費やしましたが、幸い最後はとても成功しました。",
            "question": "關於這個專案，哪一個敘述是正確的？",
            "options": [
                "花費的時間很少，所以非常成功",
                "消耗了將近半年的時間才順利完成",
                "雖然花了半年，但是最後失敗了",
                "幾乎沒有花時間就成功了"
            ],
            "answerIndex": 1,
            "chunks": ["這個專案", "幾乎花了我半年的時間", "幸好最後很成功"],
            "hintText": "這個專案幾乎花了我半年的時間，"
        }
    elif i == 8:
        card["examples"][0] = {
            "situation": "緊急",
            "chinese": "火車快開了，我們趕快把行李拿好準備上車吧。",
            "pinyin": "huǒ chē kuài kāi le, wǒ men gǎn kuài bǎ xíng lǐ ná hǎo zhǔn bèi shàng chē ba.",
            "japanese": "電車がもうすぐ出発します。急いで荷物を持って乗車の準備をしましょう。",
            "question": "說話者為什麼催促大家拿行李？",
            "options": [
                "因為行李太重，需要大家幫忙拿",
                "因為火車馬上就要發車了",
                "因為火車已經開走了，需要趕快追",
                "因為他們上錯車了，要趕快下車"
            ],
            "answerIndex": 1,
            "chunks": ["火車快開了", "我們趕快把行李拿好", "準備上車吧"],
            "hintText": "火車快開了，"
        }
    elif i == 9:
        card["examples"][0] = {
            "situation": "堅持",
            "chinese": "不管遇到多大的困難，他都不會輕易放棄夢想。",
            "pinyin": "bù guǎn yù dào duō dà de kùn nán, tā dōu bú huì qīng yì fàng qì mèng xiǎng.",
            "japanese": "どんなに大きな困難に出会っても、彼は簡単には夢を諦めない。",
            "question": "從這句話可以推測這個人的個性如何？",
            "options": [
                "遇到困難很容易就會選擇放棄",
                "非常有毅力，堅持追求自己的目標",
                "不管別人的建議，非常固執",
                "總是在尋找新的夢想"
            ],
            "answerIndex": 1,
            "chunks": ["不管遇到多大的困難", "他都不會", "輕易放棄夢想"],
            "hintText": "不管遇到多大的困難，"
        }
    level3_new_data.append(card)

# Data for Level 4
level4_new_data = []

# 10 Ordering questions for Level 4
for i in range(10):
    card = {
        "id": f"B-NEW-ORD-{i+1:03d}",
        "band": "B",
        "targetWord": "儘管",
        "distractors": ["既然", "因為", "不但"],
        "grammarNote": "「儘管」は「〜であるにもかかわらず」を意味します。",
        "examples": [
            {
                "situation": "工作",
                "chinese": "儘管這個任務非常艱鉅，整個團隊仍然願意接受挑戰。",
                "pinyin": "jǐn guǎn zhè ge rèn wù fēi cháng jiān jù, zhěng gè tuán duì réng rán yuàn yì jiē shòu tiǎo zhàn.",
                "japanese": "この任務は非常に困難であるにもかかわらず、チーム全体が喜んで挑戦を受け入れています。",
                "chunks": ["儘管這個任務非常艱鉅", "整個團隊仍然願意", "接受挑戰"],
                "hintText": "儘管這個任務非常艱鉅，"
            }
        ]
    }
    words = ["儘管", "既然", "不但", "反而", "甚至於", "不僅", "寧可", "何必", "除非", "否則"]
    card["targetWord"] = words[i]
    if i == 1:
        card["examples"][0] = {
            "situation": "日常",
            "chinese": "既然你已經決定辭職，那就好好規劃未來的方向吧。",
            "pinyin": "jì rán nǐ yǐ jīng jué dìng cí zhí, nà jiù hǎo hǎo guī huà wèi lái de fāng xiàng ba.",
            "japanese": "すでに辞職すると決めたのだから、将来の方向性をしっかり計画しなさい。",
            "chunks": ["既然你已經決定辭職", "那就好好規劃", "未來的方向吧"],
            "hintText": "既然你已經決定辭職，"
        }
    elif i == 2:
        card["examples"][0] = {
            "situation": "學習",
            "chinese": "他不但會彈鋼琴，還拿過全國大提琴比賽的冠軍。",
            "pinyin": "tā bù dàn huì tán gāng qín, hái ná guò quán guó dà tí qín bǐ sài de guān jūn.",
            "japanese": "彼はピアノを弾けるだけでなく、全国チェロコンクールで優勝したこともあります。",
            "chunks": ["他不但會彈鋼琴", "還拿過全國大提琴比賽的冠軍"],
            "hintText": "他不但會彈鋼琴，"
        }
    elif i == 3:
        card["examples"][0] = {
            "situation": "意外",
            "chinese": "吃了這種藥之後，他的病情反而變得更加嚴重了。",
            "pinyin": "chī le zhè zhǒng yào zhī hòu, tā de bìng qíng fǎn ér biàn de gèng jiā yán zhòng le.",
            "japanese": "この薬を飲んだ後、彼の病状はかえってさらに深刻になりました。",
            "chunks": ["吃了這種藥之後", "他的病情反而變得", "更加嚴重了"],
            "hintText": "吃了這種藥之後，"
        }
    elif i == 4:
        card["examples"][0] = {
            "situation": "極端",
            "chinese": "那場大火非常猛烈，甚至於整棟建築物都被燒毀了。",
            "pinyin": "nà chǎng dà huǒ fēi cháng měng liè, shèn zhì yú zhěng dòng jiàn zhù wù dōu bèi shāo huǐ le.",
            "japanese": "その大火は非常に猛烈で、建物全体さえも焼失してしまいました。",
            "chunks": ["那場大火非常猛烈", "甚至於整棟建築物", "都被燒毀了"],
            "hintText": "那場大火非常猛烈，"
        }
    elif i == 5:
        card["examples"][0] = {
            "situation": "能力",
            "chinese": "這家公司不僅提供優渥的薪水，還有完善的培訓計畫。",
            "pinyin": "zhè jiā gōng sī bù jǐn tí gōng yōu wò de xīn shuǐ, hái yǒu wán shàn de péi xùn jì huà.",
            "japanese": "この会社は良い給与を提供するだけでなく、充実した研修計画もあります。",
            "chunks": ["這家公司不僅提供優渥的薪水", "還有完善的", "培訓計畫"],
            "hintText": "這家公司不僅提供優渥的薪水，"
        }
    elif i == 6:
        card["examples"][0] = {
            "situation": "選擇",
            "chinese": "他寧可走路回家，也不願意搭乘擁擠的公車。",
            "pinyin": "tā níng kě zǒu lù huí jiā, yě bù yuàn yì dā chéng yǒng jǐ de gōng chē.",
            "japanese": "彼は満員のバスに乗るくらいなら、歩いて帰る方を選びます。",
            "chunks": ["他寧可走路回家", "也不願意搭乘", "擁擠的公車"],
            "hintText": "他寧可走路回家，"
        }
    elif i == 7:
        card["examples"][0] = {
            "situation": "勸告",
            "chinese": "事情都已經過去了，你何必還一直放在心上呢？",
            "pinyin": "shì qíng dōu yǐ jīng guò qù le, nǐ hé bì hái yì zhí fàng zài xīn shàng ne?",
            "japanese": "事態はもう終わったのだから、どうしてずっと気にしているのですか？",
            "chunks": ["事情都已經過去了", "你何必還一直", "放在心上呢？"],
            "hintText": "事情都已經過去了，"
        }
    elif i == 8:
        card["examples"][0] = {
            "situation": "條件",
            "chinese": "除非你親自向他道歉，否則他絕對不會原諒你的。",
            "pinyin": "chú fēi nǐ qīn zì xiàng tā dào qiàn, fǒu zé tā jué duì bú huì yuán liàng nǐ de.",
            "japanese": "あなたが直接彼に謝らない限り、彼は絶対にあなたを許さないでしょう。",
            "chunks": ["除非你親自向他道歉", "否則他絕對", "不會原諒你的"],
            "hintText": "除非你親自向他道歉，"
        }
    elif i == 9:
        card["examples"][0] = {
            "situation": "警告",
            "chinese": "請務必遵守公司的規定，否則會受到嚴厲的處分。",
            "pinyin": "qǐng wù bì zūn shǒu gōng sī de guī dìng, fǒu zé huì shòu dào yán lì de chǔ fèn.",
            "japanese": "必ず会社の規則を守ってください。さもなければ厳しい処分を受けます。",
            "chunks": ["請務必遵守公司的規定", "否則會受到", "嚴厲的處分"],
            "hintText": "請務必遵守公司的規定，"
        }
    level4_new_data.append(card)

# 10 Listening questions for Level 4
for i in range(10):
    card = {
        "id": f"B-NEW-LIS-{i+1:03d}",
        "band": "B",
        "targetWord": "幾乎",
        "distractors": ["大概", "也許", "可能"],
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
                "chunks": ["這家百貨公司正在舉辦週年慶", "全館的商品幾乎都有打折"],
                "hintText": "這家百貨公司正在舉辦週年慶，"
            }
        ]
    }
    words = ["幾乎", "稍微", "根本", "確實", "顯然", "難免", "畢竟", "反正", "難道", "到底"]
    card["targetWord"] = words[i]
    if i == 1:
        card["examples"][0] = {
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
            "chunks": ["這份報告的內容很完整", "只是排版稍微需要修改一下"],
            "hintText": "這份報告的內容很完整，"
        }
    elif i == 2:
        card["examples"][0] = {
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
            "chunks": ["我根本不認識那個人", "怎麼可能借給他兩百萬元"],
            "hintText": "我根本不認識那個人，"
        }
    elif i == 3:
        card["examples"][0] = {
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
            "chunks": ["這份資料確實是經理親自核准的", "沒有任何問題"],
            "hintText": "這份資料確實是經理親自核准的，"
        }
    elif i == 4:
        card["examples"][0] = {
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
            "chunks": ["地上全都是水", "顯然剛才下過一場大雨"],
            "hintText": "地上全都是水，"
        }
    elif i == 5:
        card["examples"][0] = {
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
            "chunks": ["剛開始接觸新工作", "難免會犯錯", "下次注意就好"],
            "hintText": "剛開始接觸新工作，難免會犯錯，"
        }
    elif i == 6:
        card["examples"][0] = {
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
            "chunks": ["畢竟他還是個孩子", "你就別對他太嚴格了"],
            "hintText": "畢竟他還是個孩子，"
        }
    elif i == 7:
        card["examples"][0] = {
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
            "chunks": ["反正今天的會議已經取消了", "我們不如去喝杯咖啡吧"],
            "hintText": "反正今天的會議已經取消了，"
        }
    elif i == 8:
        card["examples"][0] = {
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
            "chunks": ["難道你真的相信", "他編出來的那些謊話嗎"],
            "hintText": "難道你真的相信"
        }
    elif i == 9:
        card["examples"][0] = {
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
            "chunks": ["這份合約到底有沒有", "經過總經理的批准"],
            "hintText": "這份合約到底有沒有"
        }
    level4_new_data.append(card)

# Let's save the data to files by reading existing, replacing the last bracket, and writing.
import re

def append_to_ts(file_path, new_data):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the last bracket that closes the array
    match = re.search(r'\]\s*;\s*$', content)
    if not match:
        print("Could not find the end of array in " + file_path)
        return

    # Convert new data to JSON string
    new_data_str = json.dumps(new_data, ensure_ascii=False, indent=2)
    
    # We remove the outer brackets from the new JSON string since we are appending elements
    new_data_str = new_data_str.strip()[1:-1].strip()

    # Create the updated content
    # Add a comma before the new elements
    insertion_index = match.start()
    
    # Check if there is already an element, to see if we need a comma
    needs_comma = True
    prefix = content[:insertion_index].strip()
    if prefix.endswith('['):
        needs_comma = False
        
    comma_str = ",\n  " if needs_comma else "\n  "
    updated_content = content[:insertion_index] + comma_str + new_data_str + "\n];\n"

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    print(f"Successfully appended to {file_path}")

append_to_ts(r'c:\Users\user\Documents\formosa_wordsmith\src\data\bandBLevel3.ts', level3_new_data)
append_to_ts(r'c:\Users\user\Documents\formosa_wordsmith\src\data\bandBLevel4.ts', level4_new_data)

