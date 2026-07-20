import { STORY_EPISODES } from "./episodes";

export const STORY_PROGRESS_STORAGE_KEY = "taiwan_story_progress_2026";

const MAX_EPISODE = STORY_EPISODES.length;

export interface StoryProgress {
  /** クリア済みエピソード番号（昇順） */
  completedEpisodes: number[];
  /** 選択可能な最大エピソード番号（初期値: 1） */
  maxUnlockedEpisode: number;
}

export function getDefaultStoryProgress(): StoryProgress {
  return {
    completedEpisodes: [],
    maxUnlockedEpisode: 1,
  };
}

function normalizeProgress(raw: Partial<StoryProgress>): StoryProgress {
  const completedEpisodes = Array.isArray(raw.completedEpisodes)
    ? [...new Set(raw.completedEpisodes.filter((n) => Number.isInteger(n) && n >= 1 && n <= MAX_EPISODE))].sort(
        (a, b) => a - b
      )
    : [];

  const fromCompleted =
    completedEpisodes.length > 0 ? Math.min(MAX_EPISODE, Math.max(...completedEpisodes) + 1) : 1;

  const maxUnlockedEpisode =
    typeof raw.maxUnlockedEpisode === "number"
      ? Math.min(MAX_EPISODE, Math.max(1, Math.max(raw.maxUnlockedEpisode, fromCompleted)))
      : fromCompleted;

  return { completedEpisodes, maxUnlockedEpisode };
}

export function loadStoryProgress(): StoryProgress {
  if (typeof window === "undefined") return getDefaultStoryProgress();
  try {
    const raw = localStorage.getItem(STORY_PROGRESS_STORAGE_KEY);
    if (!raw) return getDefaultStoryProgress();
    return normalizeProgress(JSON.parse(raw) as Partial<StoryProgress>);
  } catch {
    return getDefaultStoryProgress();
  }
}

export function saveStoryProgress(progress: StoryProgress): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORY_PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch {
    /* ignore quota errors */
  }
}

/** エピソードクリア時に進捗を更新し localStorage へ保存 */
export function markEpisodeCompleted(
  progress: StoryProgress,
  episodeNumber: number
): StoryProgress {
  if (episodeNumber < 1 || episodeNumber > MAX_EPISODE) return progress;

  const completedEpisodes = progress.completedEpisodes.includes(episodeNumber)
    ? progress.completedEpisodes
    : [...progress.completedEpisodes, episodeNumber].sort((a, b) => a - b);

  const maxUnlockedEpisode = Math.min(
    MAX_EPISODE,
    Math.max(progress.maxUnlockedEpisode, episodeNumber + 1)
  );

  const next: StoryProgress = { completedEpisodes, maxUnlockedEpisode };
  saveStoryProgress(next);
  return next;
}

export function isEpisodeUnlocked(progress: StoryProgress, episodeNumber: number): boolean {
  return episodeNumber >= 1 && episodeNumber <= progress.maxUnlockedEpisode;
}

export function isEpisodeCompleted(progress: StoryProgress, episodeNumber: number): boolean {
  return progress.completedEpisodes.includes(episodeNumber);
}

/** デバッグ用：全エピソードを解放（クリア状態は変更しない） */
export function unlockAllEpisodes(progress: StoryProgress): StoryProgress {
  const next: StoryProgress = {
    ...progress,
    maxUnlockedEpisode: MAX_EPISODE,
  };
  saveStoryProgress(next);
  return next;
}

/** デバッグ用：進捗を初期状態にリセット */
export function resetStoryProgress(): StoryProgress {
  const next = getDefaultStoryProgress();
  saveStoryProgress(next);
  return next;
}

export function getStoryProgressSummary(progress: StoryProgress): {
  completedCount: number;
  totalEpisodes: number;
} {
  return {
    completedCount: progress.completedEpisodes.length,
    totalEpisodes: MAX_EPISODE,
  };
}
