"use client";

import { useCallback, useState } from "react";
import {
  loadStoryProgress,
  markEpisodeCompleted,
  resetStoryProgress,
  unlockAllEpisodes,
  type StoryProgress,
} from "@/data/storyMode/progress";

export function useStoryProgress() {
  const [progress, setProgress] = useState<StoryProgress>(() => loadStoryProgress());

  const refreshProgress = useCallback(() => {
    setProgress(loadStoryProgress());
  }, []);

  const completeEpisode = useCallback((episodeNumber: number) => {
    setProgress((prev) => markEpisodeCompleted(prev, episodeNumber));
  }, []);

  const handleResetProgress = useCallback(() => {
    setProgress(resetStoryProgress());
  }, []);

  const handleUnlockAll = useCallback(() => {
    setProgress((prev) => unlockAllEpisodes(prev));
  }, []);

  return {
    progress,
    refreshProgress,
    completeEpisode,
    resetProgress: handleResetProgress,
    unlockAllEpisodes: handleUnlockAll,
  };
}
