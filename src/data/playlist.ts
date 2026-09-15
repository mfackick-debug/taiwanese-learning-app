import { VOCABULARY_DATA } from "@/app/lib/vocabulary";
import { getDrillCards } from "@/data/drillPool";
import type { NormalizedStudyCard } from "@/types";

export type PlaylistSource = "shadowing" | "vocab";

export type PlaylistPhase = "a" | "b";

export interface PlaylistItem {
  id: string;
  sentence: string;
  pinyin: string;
  translation: string;
  source: PlaylistSource;
}

function hanOnly(text: string): string {
  return (text.match(/\p{Script=Han}/gu) ?? []).join("");
}

/**
 * 繁体字の「完成した例文」かどうか。
 * 句読点は任意。単語1語（漢字・ピンイン・訳だけの見出し）は不可。
 */
export function isCompleteExampleSentence(
  chinese: string,
  standaloneWord?: string
): boolean {
  const trimmed = chinese.trim();
  if (!trimmed) return false;

  const han = hanOnly(trimmed);
  if (han.length < 2) return false;

  if (standaloneWord) {
    const wordHan = hanOnly(standaloneWord);
    if (wordHan && han === wordHan) return false;
  }

  const hasClausePunct = /[。？！，、；：,.!?;:]/.test(trimmed);
  const hasSentenceMarker =
    /[的了是在嗎呢吧啊我你他她我們有不很也都會要跟和或但因為所以如果雖然但是]/.test(
      han
    );

  if (han.length >= 4) return true;
  if (han.length >= 2 && (hasClausePunct || hasSentenceMarker)) return true;
  return false;
}

function toShadowingItem(card: NormalizedStudyCard): PlaylistItem | null {
  const sentence = card.sentence.trim();
  const translation = card.translation.trim();
  if (!translation) return null;
  if (!isCompleteExampleSentence(sentence, card.targetWord)) return null;

  return {
    id: card.id,
    sentence,
    pinyin: card.pinyin.trim(),
    translation,
    source: "shadowing",
  };
}

function toVocabItem(item: (typeof VOCABULARY_DATA)[number]): PlaylistItem | null {
  const sentence = item.example.trim();
  const translation = item.exampleTranslation.trim();
  if (!translation) return null;
  if (!isCompleteExampleSentence(sentence, item.word)) return null;

  return {
    id: `vocab:${item.id}`,
    sentence,
    pinyin: item.examplePinyin.trim(),
    translation,
    source: "vocab",
  };
}

/**
 * 完成した例文だけを、既存教材順で1本に結合する。
 * 単語単独・並べ替え断片・リコール用プロンプト・フレーズ帳・AI生成は含めない。
 * 同一 ID は1回だけ。ランダムなし。
 */
export function buildExamplePlaylist(): PlaylistItem[] {
  const seen = new Set<string>();
  const items: PlaylistItem[] = [];

  const push = (item: PlaylistItem | null) => {
    if (!item) return;
    if (seen.has(item.id)) return;
    seen.add(item.id);
    items.push(item);
  };

  // 1. シャドーイング用の例文（テーマ・レベルは結合。ドリルの既存順）
  for (const card of getDrillCards("all", { shuffle: false })) {
    push(toShadowingItem(card));
  }

  // 2. 語彙学習に紐づく例文（単語＋訳だけのレコードは除外）
  for (const vocab of VOCABULARY_DATA) {
    push(toVocabItem(vocab));
  }

  return items;
}

let cachedPlaylist: PlaylistItem[] | null = null;

export function getExamplePlaylist(): PlaylistItem[] {
  if (!cachedPlaylist) {
    cachedPlaylist = buildExamplePlaylist();
  }
  return cachedPlaylist;
}

export function countExamplePlaylist(): number {
  return getExamplePlaylist().length;
}
