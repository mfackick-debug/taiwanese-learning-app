export const PLAYLIST_PROGRESS_STORAGE_KEY = "formosa_playlist_progress_v1";

export interface PlaylistProgress {
  currentIndex: number;
  updatedAt: string;
}

export function loadPlaylistProgress(): PlaylistProgress | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PLAYLIST_PROGRESS_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<PlaylistProgress>;
    if (typeof parsed.currentIndex !== "number" || typeof parsed.updatedAt !== "string") {
      return null;
    }
    return {
      currentIndex: Math.max(0, Math.floor(parsed.currentIndex)),
      updatedAt: parsed.updatedAt,
    };
  } catch {
    return null;
  }
}

export function savePlaylistProgress(index: number): void {
  if (typeof window === "undefined") return;
  try {
    const next: PlaylistProgress = {
      currentIndex: Math.max(0, index),
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(PLAYLIST_PROGRESS_STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* ignore quota */
  }
}

export function clearPlaylistProgress(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(PLAYLIST_PROGRESS_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
