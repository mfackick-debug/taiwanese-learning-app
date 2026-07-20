import type { NormalizedStudyCard } from "@/types";
import { normalizeCards } from "@/utils/normalizeCard";
import { STORY_EPISODES, STORY_EPISODE_1, storyModeFlatCards } from "./episodes";
import { STORY_EPISODES_2_12 } from "./episodes2to12";
import { getSceneContextForCard } from "./sceneContexts";
import type { StoryCardInput, StoryEpisode, StorySpeaker } from "./types";
import { STORY_CHARACTERS, getSpeakerLabel } from "./types";

export type { StoryCardInput, StoryEpisode, StorySpeaker } from "./types";
export { STORY_EPISODES, STORY_EPISODE_1, STORY_EPISODES_2_12, storyModeFlatCards, STORY_CHARACTERS, getSpeakerLabel };
export { getEpisodeClearScreenData } from "./clearScreen";
export type { EpisodeClearScreenData } from "./clearScreen";
export {
  STORY_PROGRESS_STORAGE_KEY,
  getDefaultStoryProgress,
  loadStoryProgress,
  saveStoryProgress,
  markEpisodeCompleted,
  isEpisodeUnlocked,
  isEpisodeCompleted,
  unlockAllEpisodes,
  resetStoryProgress,
  getStoryProgressSummary,
} from "./progress";
export type { StoryProgress } from "./progress";

export interface StoryStudyCard extends NormalizedStudyCard {
  speaker: StorySpeaker;
  episodeNumber: number;
  sceneContext?: string;
}

export function normalizeStoryCards(
  cards: StoryCardInput[],
  episodeNumber: number
): StoryStudyCard[] {
  return normalizeCards(cards).map((card, index) => {
    const input = cards[index]!;
    return {
      ...card,
      speaker: input.speaker,
      episodeNumber,
      sceneContext: input.sceneContext ?? getSceneContextForCard(card.id),
    };
  });
}

export function getStoryEpisode(episodeNumber: number): StoryEpisode | undefined {
  return STORY_EPISODES.find((ep) => ep.episodeNumber === episodeNumber);
}

export function getStoryEpisodeCards(episodeNumber: number): StoryStudyCard[] {
  const episode = getStoryEpisode(episodeNumber);
  if (!episode) return [];
  return normalizeStoryCards(episode.cards, episodeNumber);
}
