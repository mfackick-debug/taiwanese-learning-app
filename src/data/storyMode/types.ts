import type { FlatSentenceCardInput } from "@/types";

export type StorySpeaker = "takashi" | "alen" | "landlord" | "npc";

/** ストーリーモード専用カード（既存 FlatSentenceCardInput を拡張） */
export interface StoryCardInput extends FlatSentenceCardInput {
  speaker: StorySpeaker;
  /** ドラマのト書き・背景状況（学習UI上部に表示） */
  sceneContext?: string;
}

export interface StoryEpisode {
  episodeNumber: number;
  title: string;
  subtitle: string;
  synopsis: string;
  cards: StoryCardInput[];
}

export interface StoryCharacter {
  nameJa: string;
  nameZh: string;
  role: string;
  /** キャラクターを象徴する絵文字アイコン */
  emoji: string;
  /** 話者バッジのカラースキーム（Tailwind クラス） */
  badgeClass: string;
  /** 話者名テキストのカラー（Tailwind クラス） */
  accentClass: string;
}

export const STORY_CHARACTERS: Record<StorySpeaker, StoryCharacter> = {
  takashi: {
    nameJa: "タカシ（隆志）",
    nameZh: "隆志",
    role: "日本から語学留学中",
    emoji: "🙋‍♂️",
    badgeClass: "bg-blue-50 text-blue-700 border border-blue-200",
    accentClass: "text-blue-700",
  },
  alen: {
    nameJa: "アレン（阿倫）",
    nameZh: "阿倫",
    role: "台湾人ITエンジニア・ルームメイト",
    emoji: "🧑‍💻",
    badgeClass: "bg-amber-50 text-amber-700 border border-amber-200",
    accentClass: "text-amber-700",
  },
  landlord: {
    nameJa: "大家さん（房東）",
    nameZh: "房東",
    role: "マンションの大家",
    emoji: "👵",
    badgeClass: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    accentClass: "text-emerald-700",
  },
  npc: {
    nameJa: "登場人物",
    nameZh: "其他人",
    role: "店員・医師・通行人など",
    emoji: "🧑",
    badgeClass: "bg-purple-50 text-purple-700 border border-purple-200",
    accentClass: "text-purple-700",
  },
};

export function getSpeakerLabel(speaker: StorySpeaker): string {
  return STORY_CHARACTERS[speaker].nameZh;
}
