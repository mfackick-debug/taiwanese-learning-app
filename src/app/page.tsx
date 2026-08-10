"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { bandBLevel3Data } from "@/data/bandBLevel3";
import { bandBLevel4AllData } from "@/data";
import { getStoryEpisode, getStoryEpisodeCards } from "@/data/storyMode";
import { isEpisodeUnlocked, loadStoryProgress } from "@/data/storyMode/progress";
import { useStoryProgress } from "@/hooks/useStoryProgress";
import type { NormalizedStudyCard } from "@/types";
import { normalizeCards } from "@/utils/normalizeCard";
import { ModeSelectScreen } from "@/components/study/ModeSelectScreen";
import { StoryEpisodeSelect } from "@/components/study/StoryEpisodeSelect";
import { StudySession } from "@/components/study/StudySession";
import { shuffle } from "@/components/study/utils";
import { getDrillCourseLabel } from "@/utils/drillCourseLabel";

type AppScreen = "mode-select" | "story-list" | "study";

type StudyKind = "drill" | "story";

function getDrillCards(level: 3 | 4): NormalizedStudyCard[] {
  const raw = level === 3 ? bandBLevel3Data : bandBLevel4AllData;
  return shuffle(normalizeCards(raw));
}

export default function StudyPage() {
  const [appScreen, setAppScreen] = useState<AppScreen>("mode-select");
  const [studyKind, setStudyKind] = useState<StudyKind>("drill");
  const [drillLevel, setDrillLevel] = useState<3 | 4>(3);
  const [sessionCards, setSessionCards] = useState<NormalizedStudyCard[]>(() =>
    getDrillCards(3)
  );
  const [restartPool, setRestartPool] = useState<NormalizedStudyCard[]>(() =>
    normalizeCards(bandBLevel3Data)
  );
  const [episodeNumber, setEpisodeNumber] = useState<number | null>(null);
  const [sessionKey, setSessionKey] = useState(0);

  const {
    progress: storyProgress,
    refreshProgress,
    completeEpisode,
    resetProgress,
    unlockAllEpisodes,
  } = useStoryProgress();

  const episodeMeta = useMemo(() => {
    if (episodeNumber == null) return null;
    const ep = getStoryEpisode(episodeNumber);
    if (!ep) return null;
    return {
      title: `第${ep.episodeNumber}話：${ep.title}`,
      subtitle: ep.subtitle,
    };
  }, [episodeNumber]);

  useEffect(() => {
    if (appScreen === "story-list") {
      refreshProgress();
    }
  }, [appScreen, refreshProgress]);

  const startDrill = useCallback(() => {
    const cards = getDrillCards(drillLevel);
    const pool = normalizeCards(drillLevel === 3 ? bandBLevel3Data : bandBLevel4AllData);
    setStudyKind("drill");
    setEpisodeNumber(null);
    setSessionCards(cards);
    setRestartPool(pool);
    setSessionKey((k) => k + 1);
    setAppScreen("study");
  }, [drillLevel]);

  const handleDrillLevelChange = useCallback((level: 3 | 4) => {
    setDrillLevel(level);
    const cards = getDrillCards(level);
    const pool = normalizeCards(level === 3 ? bandBLevel3Data : bandBLevel4AllData);
    setSessionCards(cards);
    setRestartPool(pool);
    setSessionKey((k) => k + 1);
  }, []);

  const openStoryList = useCallback(() => {
    refreshProgress();
    setAppScreen("story-list");
  }, [refreshProgress]);

  const startStoryEpisode = useCallback((num: number) => {
    const current = loadStoryProgress();
    if (!isEpisodeUnlocked(current, num)) return;
    const cards = getStoryEpisodeCards(num);
    if (cards.length === 0) return;
    setStudyKind("story");
    setEpisodeNumber(num);
    setSessionCards(cards);
    setRestartPool(cards);
    setSessionKey((k) => k + 1);
    setAppScreen("study");
  }, []);

  const goToNextStoryEpisode = useCallback(() => {
    if (episodeNumber == null) return;
    const next = episodeNumber + 1;
    const current = loadStoryProgress();
    if (!isEpisodeUnlocked(current, next)) return;
    if (getStoryEpisodeCards(next).length === 0) return;
    startStoryEpisode(next);
  }, [episodeNumber, startStoryEpisode]);

  const handleEpisodeCleared = useCallback(
    (num: number) => {
      completeEpisode(num);
    },
    [completeEpisode]
  );

  const exitToModeSelect = useCallback(() => {
    setAppScreen("mode-select");
    setEpisodeNumber(null);
  }, []);

  const exitStoryToList = useCallback(() => {
    refreshProgress();
    setAppScreen("story-list");
    setEpisodeNumber(null);
  }, [refreshProgress]);

  if (appScreen === "mode-select") {
    return (
      <ModeSelectScreen
        onSelectDrill={() => {
          setStudyKind("drill");
          startDrill();
        }}
        onSelectStory={openStoryList}
      />
    );
  }

  if (appScreen === "story-list") {
    return (
      <StoryEpisodeSelect
        progress={storyProgress}
        onSelectEpisode={startStoryEpisode}
        onBack={exitToModeSelect}
        onResetProgress={resetProgress}
        onUnlockAll={unlockAllEpisodes}
      />
    );
  }

  return (
    <StudySession
      key={`${studyKind}-${sessionKey}`}
      mode={studyKind}
      cards={sessionCards}
      restartPool={restartPool}
      episodeTitle={episodeMeta?.title}
      episodeSubtitle={episodeMeta?.subtitle}
      forceRecall={studyKind === "story"}
      shuffleOnRestart={studyKind === "drill"}
      showDrillSettings={studyKind === "drill"}
      courseLabel={getDrillCourseLabel(drillLevel)}
      selectedLevel={drillLevel}
      onCourseChange={handleDrillLevelChange}
      onExit={studyKind === "story" ? exitStoryToList : exitToModeSelect}
      onNextEpisode={studyKind === "story" ? goToNextStoryEpisode : undefined}
      onEpisodeClearBackToList={studyKind === "story" ? exitStoryToList : undefined}
      onEpisodeCleared={studyKind === "story" ? handleEpisodeCleared : undefined}
      episodeNumber={studyKind === "story" ? episodeNumber ?? undefined : undefined}
    />
  );
}
