import type { SentenceCardInput } from "@/types";
import { bandBLevel3Data } from "@/data/bandBLevel3";
import { bandBLevel4Data } from "@/data/bandBLevel4";
import { bandCData } from "@/data/bandC";

export const ALL_SENTENCES: SentenceCardInput[] = [...bandBLevel3Data, ...bandBLevel4Data, ...bandCData];
export const SENTENCE_DATA: SentenceCardInput[] = ALL_SENTENCES;

export { bandBLevel3Data, bandBLevel4Data, bandCData };
