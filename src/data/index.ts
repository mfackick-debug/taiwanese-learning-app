import type { SentenceCardInput } from "@/types";
import { bandBLevel3Data } from "@/data/bandBLevel3";
import { bandBLevel4Data } from "@/data/bandBLevel4";
import { bandBLevel5Data } from "@/data/bandBLevel5";
import { bandCData } from "@/data/bandC";

/** Level 4 ドリル用（既存 L4 + 日常生活125問） */
export const bandBLevel4AllData: SentenceCardInput[] = [
  ...bandBLevel4Data,
  ...bandBLevel5Data,
];

export const ALL_SENTENCES: SentenceCardInput[] = [
  ...bandBLevel3Data,
  ...bandBLevel4Data,
  ...bandBLevel5Data,
  ...bandCData,
];
export const SENTENCE_DATA: SentenceCardInput[] = ALL_SENTENCES;

export { bandBLevel3Data, bandBLevel4Data, bandBLevel5Data, bandCData };
