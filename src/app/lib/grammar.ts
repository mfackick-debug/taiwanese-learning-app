export interface GrammarItem {
  id: string;
  name: string;
  pinyin: string;
  description: string;
  example: string;
  examplePinyin: string;
  exampleTranslation: string;
  level: 'A' | 'B';
}

export const GRAMMAR_DATA: GrammarItem[] = [
  // Band A
  {
    id: 'ga1',
    level: 'A',
    name: '雖然...但是...',
    pinyin: 'suīrán... dànshì...',
    description: '「〜だけれども、しかし〜」という逆接を表します。',
    example: '雖然外面下雨，但是他還是出去了。',
    examplePinyin: 'Suīrán wàimiàn xiàyǔ, dànshì tā háishì chūqùle.',
    exampleTranslation: '外は雨が降っていますが、彼はやはり出かけました。'
  },
  {
    id: 'ga2',
    level: 'A',
    name: '因為...所以...',
    pinyin: 'yīnwèi... suǒyǐ...',
    description: '原因と結果を表します。「〜なので、だから〜」。',
    example: '因為我感冒了，所以今天不去上班。',
    examplePinyin: 'Yīnwèi wǒ gǎnmàole, suǒyǐ jīntiān bú qù shàngbān.',
    exampleTranslation: '風邪を引いたので、今日は仕事に行きません。'
  },
  {
    id: 'ga3',
    level: 'A',
    name: '太...了',
    pinyin: 'tài... le',
    description: '程度が甚だしいことを表します。「あまりに〜すぎる」。',
    example: '這件衣服太貴了！',
    examplePinyin: 'Zhè jiàn yīfú tài guì le!',
    exampleTranslation: 'この服は高すぎます！'
  },
  {
    id: 'ga4',
    level: 'A',
    name: '不但...而且...',
    pinyin: 'búdàn... érqiě...',
    description: '「〜だけでなく、さらに〜」という累加を表します。',
    example: '他不但會說中文，而且說得很流利。',
    examplePinyin: 'Tā búdàn huì shuō Zhōngwén, érqiě shuō de hěn liúlì.',
    exampleTranslation: '彼は中国語を話せるだけでなく、とても流暢に話します。'
  },
  {
    id: 'ga5',
    level: 'A',
    name: '比',
    pinyin: 'bǐ',
    description: '比較を表します。「AはBより〜だ」。',
    example: '今天比昨天熱一點。',
    examplePinyin: 'Jīntiān bǐ zuótiān rè yìdiǎn.',
    exampleTranslation: '今日は昨日より少し暑いです。'
  },
  // Band B
  {
    id: 'gb1',
    level: 'B',
    name: '與其...不如...',
    pinyin: 'yǔqí... bùrú...',
    description: '2つの事柄を比較して、後者の方が良いことを表します。「〜するよりは、〜したほうがよい」。',
    example: '與其每天抱怨，不如想辦法解決問題。',
    examplePinyin: 'Yǔqí měitiān bàoyuàn, bùrú xiǎng bànfǎ jiějué wèntí.',
    exampleTranslation: '毎日不満を言うより、問題を解決する方法を考えたほうがいい。'
  },
  {
    id: 'gb2',
    level: 'B',
    name: '既然...就...',
    pinyin: 'jìrán... jiù...',
    description: '既成の事実を前提として、結論を導きます。「〜したからには、〜する」。',
    example: '既然你已經決定了，我就支持你。',
    examplePinyin: 'Jìrán nǐ yǐjīng juédìngle, wǒ jiù zhīchí nǐ.',
    exampleTranslation: 'あなたが決めたからには、私はあなたを支持します。'
  },
  {
    id: 'gb3',
    level: 'B',
    name: '除非...否則...',
    pinyin: 'chúfēi... fǒuzé...',
    description: '唯一の条件を表します。「〜でない限り、〜だ（〜しない）」。',
    example: '除非下大雨，否則比賽會照常舉行。',
    examplePinyin: 'Chúfēi xià dàyǔ, fǒuzé bǐsài huì zhàocháng jǔxíng.',
    exampleTranslation: '大雨が降らない限り、試合は通常通り行われます。'
  },
  {
    id: 'gb4',
    level: 'B',
    name: '不但不...反而...',
    pinyin: 'búdàn bù... fǎn’ér...',
    description: '予想に反する結果を表します。「〜しないばかりか、かえって〜」。',
    example: '吃了藥以後，他的頭痛不但不舒服，反而更痛了。',
    examplePinyin: 'Chīle yào yǐhòu, tā de tóutòng búdàn bù shūfú, fǎn’ér gèng tòngle.',
    exampleTranslation: '薬を飲んだ後、彼の頭痛は良くならないばかりか、かえってひどくなりました。'
  },
  {
    id: 'gb5',
    level: 'B',
    name: '無論...都...',
    pinyin: 'wúlùn... dōu...',
    description: '条件に関わらず結果が変わらないことを表します。「たとえ〜であっても（例外なく）〜だ」。',
    example: '無論遇到什麼困難，我們都不能放棄。',
    examplePinyin: 'Wúlùn yùdào shénme kùnnán, wǒmen dōu bùnéng fàngqì.',
    exampleTranslation: 'どんな困難に遭遇しても、私たちは諦めてはいけません。'
  }
];