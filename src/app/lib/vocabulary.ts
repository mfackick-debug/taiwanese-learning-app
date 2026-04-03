export interface VocabularyItem {
  id: string;
  word: string;
  pinyin: string;
  translation: string;
  example: string;
  exampleTranslation: string;
  level: 'A' | 'B';
}

export const VOCABULARY_DATA: VocabularyItem[] = [
  // Band A (Level 1-2)
  {
    id: 'a1',
    level: 'A',
    word: '我',
    pinyin: 'wǒ',
    translation: '私',
    example: '我是一個學生。',
    exampleTranslation: '私は学生です。'
  },
  {
    id: 'a2',
    level: 'A',
    word: '好',
    pinyin: 'hǎo',
    translation: '良い、元気だ',
    example: '今天天氣很好。',
    exampleTranslation: '今日は天気がとても良いです。'
  },
  {
    id: 'a3',
    level: 'A',
    word: '去',
    pinyin: 'qù',
    translation: '行く',
    example: '我想去台灣旅行。',
    exampleTranslation: '私は台湾旅行に行きたいです。'
  },
  {
    id: 'a4',
    level: 'A',
    word: '家',
    pinyin: 'jiā',
    translation: '家、家族',
    example: '我回家的路上看到了一隻貓。',
    exampleTranslation: '家に帰る途中で一匹の猫を見ました。'
  },
  {
    id: 'a5',
    level: 'A',
    word: '漂亮',
    pinyin: 'piàoliàng',
    translation: '美しい、綺麗',
    example: '那朵花真漂亮。',
    exampleTranslation: 'あの花は本当に綺麗です。'
  },
  // Band B (Level 3-4)
  {
    id: 'b1',
    level: 'B',
    word: '考慮',
    pinyin: 'kǎolǜ',
    translation: '考慮する、検討する',
    example: '在做決定之前，我們必須仔細考慮所有的因素。',
    exampleTranslation: '決定を下す前に、私たちはすべての要因を慎重に検討しなければなりません。'
  },
  {
    id: 'b2',
    level: 'B',
    word: '影響',
    pinyin: 'yǐngxiǎng',
    translation: '影響、影響を与える',
    example: '極端天氣對當地的農業造成了嚴重的影響。',
    exampleTranslation: '極端な気象は地元の農業に深刻な影響を及ぼしました。'
  },
  {
    id: 'b3',
    level: 'B',
    word: '建議',
    pinyin: 'jiànyì',
    translation: '提案、勧告、アドバイスする',
    example: '專家建議政府應該加強環境保護的法律。',
    exampleTranslation: '専門家は、政府が環境保護の法律を強化すべきだと提案しています。'
  },
  {
    id: 'b4',
    level: 'B',
    word: '環境',
    pinyin: 'huánjìng',
    translation: '環境',
    example: '為了給下一代更好的生活環境，我們必須減少碳排放。',
    exampleTranslation: '次世代により良い生活環境を残すために、私たちは炭素排出を削減しなければなりません。'
  },
  {
    id: 'b5',
    level: 'B',
    word: '改善',
    pinyin: 'gǎishàn',
    translation: '改善する、向上させる',
    example: '這項新政策旨在改善偏遠地區的醫療設施。',
    exampleTranslation: 'この新しい政策は、辺境地域の医療施設を改善することを目的としています。'
  }
];
