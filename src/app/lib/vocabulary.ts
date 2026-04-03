
export interface VocabularyItem {
  id: string;
  word: string;
  pinyin: string;
  translation: string;
  example: string;
  exampleTranslation: string;
}

export const TOCFL_BAND_A: VocabularyItem[] = [
  {
    id: '1',
    word: '我',
    pinyin: 'wǒ',
    translation: '私',
    example: '我是一個學生。',
    exampleTranslation: '私は学生です。'
  },
  {
    id: '2',
    word: '你',
    pinyin: 'nǐ',
    translation: 'あなた',
    example: '你叫什麼名字？',
    exampleTranslation: 'あなたの名前は何ですか？'
  },
  {
    id: '3',
    word: '好',
    pinyin: 'hǎo',
    translation: '良い、元気だ',
    example: '今天天氣很好。',
    exampleTranslation: '今日は天気がとても良いです。'
  },
  {
    id: '4',
    word: '是',
    pinyin: 'shì',
    translation: '〜である',
    example: '他是我哥哥。',
    exampleTranslation: '彼は私の兄です。'
  },
  {
    id: '5',
    word: '看',
    pinyin: 'kàn',
    translation: '見る、読む',
    example: '我看過這本書。',
    exampleTranslation: '私はこの本を読んだことがあります。'
  },
  {
    id: '6',
    word: '去',
    pinyin: 'qù',
    translation: '行く',
    example: '我想去台灣旅行。',
    exampleTranslation: '私は台湾旅行に行きたいです。'
  },
  {
    id: '7',
    word: '喝',
    pinyin: 'hē',
    translation: '飲む',
    example: '我想喝珍珠奶茶。',
    exampleTranslation: 'タピオカミルクティーを飲みたいです。'
  },
  {
    id: '8',
    word: '吃',
    pinyin: 'chī',
    translation: '食べる',
    example: '我們一起去吃晚餐吧。',
    exampleTranslation: '一緒に晩ご飯を食べに行きましょう。'
  },
  {
    id: '9',
    word: '家',
    pinyin: 'jiā',
    translation: '家、家族',
    example: '我回家的路上看到了一隻貓。',
    exampleTranslation: '家に帰る途中で一匹の猫を見ました。'
  },
  {
    id: '10',
    word: '漂亮',
    pinyin: 'piàoliàng',
    translation: '美しい、綺麗',
    example: '那朵花真漂亮。',
    exampleTranslation: 'あの花は本当に綺麗です。'
  }
];
