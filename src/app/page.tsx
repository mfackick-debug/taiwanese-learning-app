"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  countDrillPool,
  getDrillCards,
  resolveDrillCardsByIds,
  type DrillCourseId,
} from "@/data/drillPool";
import {
  clearDrillProgress,
  formatDrillProgressLabel,
  loadDrillProgress,
  saveDrillProgress,
  type DrillProgress,
} from "@/data/drillProgress";
import type { NormalizedStudyCard } from "@/types";
import type { StudyStep } from "@/components/study/types";
import { ModeSelectScreen } from "@/components/study/ModeSelectScreen";
import { StudySession } from "@/components/study/StudySession";
import {
  getDrillCourseDescription,
  getDrillCourseLabel,
} from "@/utils/drillCourseLabel";

type AppScreen = "mode-select" | "study";

export default function StudyPage() {
  const [appScreen, setAppScreen] = useState<AppScreen>("mode-select");
  const [drillCourse, setDrillCourse] = useState<DrillCourseId>("all");
  const [sessionCards, setSessionCards] = useState<NormalizedStudyCard[]>([]);
  const [restartPool, setRestartPool] = useState<NormalizedStudyCard[]>([]);
  const [sessionKey, setSessionKey] = useState(0);
  const [initialCardIndex, setInitialCardIndex] = useState(0);
  const [initialStep, setInitialStep] = useState<StudyStep>("shadowing");
  const [savedProgress, setSavedProgress] = useState<DrillProgress | null>(null);

  const totalQuestionCount = useMemo(() => countDrillPool("all"), []);

  useEffect(() => {
    setSavedProgress(loadDrillProgress());
  }, [appScreen]);

  const resumeLabel = useMemo(() => {
    if (!savedProgress) return null;
    const course = getDrillCourseLabel(savedProgress.course);
    return `${course} · ${formatDrillProgressLabel(savedProgress)}`;
  }, [savedProgress]);

  const startFreshDrill = useCallback((course: DrillCourseId = "all") => {
    const cards = getDrillCards(course, { shuffle: true });
    const pool = getDrillCards(course, { shuffle: false });
    clearDrillProgress();
    setSavedProgress(null);
    setDrillCourse(course);
    setSessionCards(cards);
    setRestartPool(pool);
    setInitialCardIndex(0);
    setInitialStep("shadowing");
    setSessionKey((k) => k + 1);
    setAppScreen("study");
    saveDrillProgress({
      course,
      cardIds: cards.map((c) => c.id),
      currentCardIndex: 0,
      currentStep: "shadowing",
      updatedAt: new Date().toISOString(),
    });
  }, []);

  const resumeDrill = useCallback(() => {
    const progress = loadDrillProgress();
    if (!progress) {
      startFreshDrill("all");
      return;
    }
    const cards = resolveDrillCardsByIds(progress.course, progress.cardIds);
    if (cards.length === 0) {
      startFreshDrill(progress.course);
      return;
    }
    const pool = getDrillCards(progress.course, { shuffle: false });
    setDrillCourse(progress.course);
    setSessionCards(cards);
    setRestartPool(pool);
    setInitialCardIndex(Math.min(progress.currentCardIndex, cards.length - 1));
    setInitialStep(progress.currentStep);
    setSessionKey((k) => k + 1);
    setAppScreen("study");
  }, [startFreshDrill]);

  const handleCourseChange = useCallback((course: DrillCourseId) => {
    startFreshDrill(course);
  }, [startFreshDrill]);

  const handleProgressChange = useCallback(
    (snapshot: {
      cardIds: string[];
      currentCardIndex: number;
      currentStep: StudyStep;
    }) => {
      const next: DrillProgress = {
        course: drillCourse,
        cardIds: snapshot.cardIds,
        currentCardIndex: snapshot.currentCardIndex,
        currentStep: snapshot.currentStep,
        updatedAt: new Date().toISOString(),
      };
      saveDrillProgress(next);
      setSavedProgress(next);
    },
    [drillCourse]
  );

  const exitToModeSelect = useCallback(() => {
    setSavedProgress(loadDrillProgress());
    setAppScreen("mode-select");
  }, []);

  const handleResetProgress = useCallback(() => {
    clearDrillProgress();
    setSavedProgress(null);
  }, []);

  if (appScreen === "mode-select") {
    return (
      <ModeSelectScreen
        onStartDrill={() => startFreshDrill(drillCourse)}
        onResumeDrill={resumeLabel ? resumeDrill : undefined}
        onResetProgress={handleResetProgress}
        resumeLabel={resumeLabel}
        totalQuestionCount={totalQuestionCount}
      />
    );
  }

  return (
    <StudySession
      key={`drill-${sessionKey}`}
      mode="drill"
      cards={sessionCards}
      restartPool={restartPool}
      shuffleOnRestart
      showDrillSettings
      courseLabel={getDrillCourseLabel(drillCourse)}
      courseDescription={getDrillCourseDescription(drillCourse)}
      selectedCourse={drillCourse}
      onCourseChange={handleCourseChange}
      initialCardIndex={initialCardIndex}
      initialStep={initialStep}
      onProgressChange={handleProgressChange}
      onExit={exitToModeSelect}
    />
  );
}
