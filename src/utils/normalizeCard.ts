import type {
  ExamplesSentenceCardInput,
  FlatSentenceCardInput,
  NormalizedStudyCard,
  SentenceCard,
  SentenceCardInput,
} from '@/types';

export type { NormalizedStudyCard };

export function isExamplesFormat(
  card: SentenceCardInput
): card is ExamplesSentenceCardInput {
  return (
    'examples' in card &&
    Array.isArray(card.examples) &&
    card.examples.length > 0
  );
}

export function isFlatFormat(
  card: SentenceCardInput
): card is FlatSentenceCardInput {
  return !isExamplesFormat(card);
}

/** 入力データに format ディスクリミネータを付与する */
export function toSentenceCard(card: SentenceCardInput): SentenceCard {
  if (isExamplesFormat(card)) {
    return { ...card, format: 'examples' };
  }
  return { ...card, format: 'flat' };
}

export interface NormalizeCardOptions {
  /** examples 形式の場合に使用する example のインデックス（既定: 0） */
  exampleIndex?: number;
}

export interface NormalizeCardsOptions {
  /** true の場合、examples 形式カードを example ごとに展開する */
  expandExamples?: boolean;
}

function normalizeFromExample(
  card: ExamplesSentenceCardInput,
  exampleIndex: number
): NormalizedStudyCard {
  const example = card.examples[exampleIndex];
  if (!example) {
    throw new Error(
      `Card "${card.id}": example index ${exampleIndex} is out of range (length: ${card.examples.length})`
    );
  }

  if (!example.chinese || !example.pinyin || !example.japanese) {
    throw new Error(
      `Card "${card.id}" examples[${exampleIndex}]: missing chinese, pinyin, or japanese`
    );
  }

  if (!Array.isArray(example.chunks) || example.chunks.length < 2) {
    throw new Error(
      `Card "${card.id}" examples[${exampleIndex}]: chunks must have at least 2 items`
    );
  }

  return {
    id: `${card.id}:${exampleIndex}`,
    sourceCardId: card.id,
    sourceFormat: 'examples',
    exampleIndex,
    band: card.band,
    targetWord: card.targetWord,
    distractors: card.distractors,
    grammarNote: card.grammarNote,
    pronunciationNote: card.pronunciationNote,
    sentence: example.chinese,
    pinyin: example.pinyin,
    translation: example.japanese,
    chunks: example.chunks,
    hintText: example.hintText,
    question: example.question,
    options: example.options,
    answerIndex: example.answerIndex,
  };
}

function normalizeFromFlat(card: FlatSentenceCardInput): NormalizedStudyCard {
  if (!card.sentence?.trim()) {
    throw new Error(`Card "${card.id}": missing or empty "sentence"`);
  }
  if (!card.pinyin?.trim()) {
    throw new Error(`Card "${card.id}": missing or empty "pinyin"`);
  }
  if (!card.translation?.trim()) {
    throw new Error(`Card "${card.id}": missing or empty "translation"`);
  }
  if (!Array.isArray(card.chunks) || card.chunks.length < 2) {
    throw new Error(`Card "${card.id}": chunks must have at least 2 items`);
  }

  return {
    id: card.id,
    sourceCardId: card.id,
    sourceFormat: 'flat',
    band: card.band,
    targetWord: card.targetWord,
    distractors: card.distractors,
    grammarNote: card.grammarNote,
    pronunciationNote: card.pronunciationNote,
    sentence: card.sentence,
    pinyin: card.pinyin,
    translation: card.translation,
    chunks: card.chunks,
    hintText: card.hintText,
    question: card.question,
    options: card.options,
    answerIndex: card.answerIndex,
  };
}

/** 旧形式・新形式の SentenceCardInput を UI 向けのフラット形状に正規化する */
export function normalizeCard(
  card: SentenceCardInput,
  options?: NormalizeCardOptions
): NormalizedStudyCard {
  if (isExamplesFormat(card)) {
    return normalizeFromExample(card, options?.exampleIndex ?? 0);
  }
  return normalizeFromFlat(card);
}

/** 複数カードを一括正規化する */
export function normalizeCards(
  cards: SentenceCardInput[],
  options?: NormalizeCardsOptions
): NormalizedStudyCard[] {
  const expandExamples = options?.expandExamples ?? false;
  const result: NormalizedStudyCard[] = [];

  for (const card of cards) {
    if (expandExamples && isExamplesFormat(card)) {
      for (let i = 0; i < card.examples.length; i++) {
        result.push(normalizeCard(card, { exampleIndex: i }));
      }
    } else {
      result.push(normalizeCard(card));
    }
  }

  return result;
}
