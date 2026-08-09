"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { stopTts, playTts } from "@/components/AudioButton";
import type { StoryStudyCard } from "@/data/storyMode";
import { getEpisodeClearScreenData } from "@/data/storyMode";
import type { NormalizedStudyCard } from "@/types";
import { EpisodeClearModal } from "@/components/study/EpisodeClearModal";
import { RecallStep } from "@/components/study/RecallStep";
import { ReorderStep } from "@/components/study/ReorderStep";
import { ShadowingStep } from "@/components/study/ShadowingStep";
import { StorySpeakerBadge } from "@/components/study/StorySpeakerBadge";
import { SceneContextBanner } from "@/components/study/SceneContextBanner";
import { initStepState, type StepState } from "@/components/study/stepState";
import type { StudyStep, RecallEvaluation } from "@/components/study/types";
import { shuffle } from "@/components/study/utils";
import { VocabStep } from "@/components/study/VocabStep";
import { StoryListeningStep } from "@/components/study/StoryListeningStep";
import { StoryReadingAloudStep } from "@/components/study/StoryReadingAloudStep";
import { DRILL_COURSE_OPTIONS } from "@/utils/drillCourseLabel";

export type StudySessionMode = "drill" | "story";

/** ストーリー: 全体理解 → 個別問題のトップダウン導入 */
type StoryIntroPhase = "listening" | "reading" | "questions";

export interface StudySessionProps {
  mode: StudySessionMode;
  cards: NormalizedStudyCard[];
  /** ドリル再開時にシャッフルする元データ */
  restartPool?: NormalizedStudyCard[];
  episodeTitle?: string;
  episodeSubtitle?: string;
  episodeNumber?: number;
  /** ストーリーモードは常に true、ドリルは設定に従う */
  forceRecall?: boolean;
  shuffleOnRestart?: boolean;
  showDrillSettings?: boolean;
  courseLabel?: string;
  onCourseChange?: (level: 3 | 4) => void;
  selectedLevel?: 3 | 4;
  onExit: () => void;
  onSessionComplete?: () => void;
  onNextEpisode?: () => void;
  onEpisodeClearBackToList?: () => void;
  onEpisodeCleared?: (episodeNumber: number) => void;
}

function isStoryCard(card: NormalizedStudyCard): card is StoryStudyCard {
  return "speaker" in card && typeof (card as StoryStudyCard).speaker === "string";
}

const STORY_MACRO_PHASES: readonly StudyStep[] = ["shadowing", "vocab", "reorder", "recall"];

const STORY_INTRO_LABELS: ReadonlyArray<{ id: StoryIntroPhase; label: string }> = [
  { id: "listening", label: "①全体リスニング" },
  { id: "reading", label: "②全文音読" },
  { id: "questions", label: "③個別問題" },
];

const STORY_QUESTION_PHASE_LABELS: ReadonlyArray<{ step: StudyStep; label: string }> = [
  { step: "shadowing", label: "①通しシャドー" },
  { step: "vocab", label: "②一気穴埋め" },
  { step: "reorder", label: "③一気並替" },
  { step: "recall", label: "④一気発話" },
];

function getStoryStepNextLabel(step: StudyStep, cardIndex: number, totalCards: number): string {
  const isLastCardInPhase = cardIndex >= totalCards - 1;
  if (step === "shadowing") {
    return isLastCardInPhase ? "フェーズ2へ（穴埋め）" : "次の文へ（シャドーイング）";
  }
  if (step === "vocab") {
    return isLastCardInPhase ? "フェーズ3へ（並べ替え）" : "次の文へ（穴埋め）";
  }
  if (step === "reorder") {
    return isLastCardInPhase ? "フェーズ4へ（発話）" : "次の文へ（並べ替え）";
  }
  return "次の文へ（発話）";
}

export function StudySession({
  mode,
  cards: initialCards,
  restartPool,
  episodeTitle,
  episodeSubtitle,
  episodeNumber,
  forceRecall = false,
  shuffleOnRestart = true,
  showDrillSettings = false,
  courseLabel,
  onCourseChange,
  selectedLevel,
  onExit,
  onSessionComplete,
  onNextEpisode,
  onEpisodeClearBackToList,
  onEpisodeCleared,
}: StudySessionProps) {
  const [shuffledCards, setShuffledCards] = useState(initialCards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState<StudyStep>("shadowing");
  const [stepState, setStepState] = useState<StepState>(() =>
    initStepState(initialCards[0]!, "shadowing")
  );
  const [isHardModeEnabled, setIsHardModeEnabled] = useState(forceRecall);
  const [reviewQueue, setReviewQueue] = useState<NormalizedStudyCard[]>([]);
  const [todayScore, setTodayScore] = useState(0);
  const [episodeClearOpen, setEpisodeClearOpen] = useState(false);
  const [storyIntroPhase, setStoryIntroPhase] = useState<StoryIntroPhase>(
    mode === "story" ? "listening" : "questions"
  );

  const storyCards = useMemo(
    () => shuffledCards.filter((c): c is StoryStudyCard => isStoryCard(c)),
    [shuffledCards]
  );

  const clearScreenData = useMemo(
    () => (episodeNumber != null ? getEpisodeClearScreenData(episodeNumber) : null),
    [episodeNumber]
  );

  const triggerStoryEpisodeComplete = useCallback(() => {
    if (mode === "story" && episodeNumber != null && clearScreenData) {
      stopTts();
      onEpisodeCleared?.(episodeNumber);
      setEpisodeClearOpen(true);
      return;
    }
    onSessionComplete?.();
  }, [mode, episodeNumber, clearScreenData, onSessionComplete, onEpisodeCleared]);

  const useRecall = forceRecall || isHardModeEnabled;
  const currentCard = shuffledCards[currentCardIndex];
  const totalCards = shuffledCards.length;

  useEffect(() => {
    setShuffledCards(initialCards);
    setCurrentCardIndex(0);
    setCurrentStep("shadowing");
    setStepState(initStepState(initialCards[0]!, "shadowing"));
    setReviewQueue([]);
    setIsHardModeEnabled(forceRecall);
    setEpisodeClearOpen(false);
    setStoryIntroPhase(mode === "story" ? "listening" : "questions");
  }, [initialCards, forceRecall, mode]);

  const transitionToStep = useCallback(
    (sessionCards: NormalizedStudyCard[], cardIndex: number, step: StudyStep) => {
      const card = sessionCards[cardIndex];
      if (!card) return;
      stopTts();
      setCurrentCardIndex(cardIndex);
      setCurrentStep(step);
      setStepState(initStepState(card, step));
    },
    []
  );

  const restartSession = useCallback(() => {
    const pool = restartPool ?? initialCards;
    const next = shuffleOnRestart ? shuffle([...pool]) : [...pool];
    setReviewQueue([]);
    setShuffledCards(next);
    if (mode === "story") {
      setStoryIntroPhase("listening");
      transitionToStep(next, 0, "shadowing");
      return;
    }
    transitionToStep(next, 0, "shadowing");
  }, [restartPool, initialCards, shuffleOnRestart, transitionToStep, mode]);

  const addScore = useCallback((points: number) => {
    setTodayScore((s) => s + points);
  }, []);

  const enterStoryQuestions = useCallback(() => {
    stopTts();
    setStoryIntroPhase("questions");
    transitionToStep(shuffledCards, 0, "shadowing");
    addScore(1);
  }, [shuffledCards, transitionToStep, addScore]);

  const advanceAfterCardComplete = useCallback(() => {
    const nextIndex = currentCardIndex + 1;
    if (nextIndex < totalCards) {
      transitionToStep(shuffledCards, nextIndex, "shadowing");
      return;
    }

    setReviewQueue((prev) => {
      if (prev.length > 0) {
        const reviewCards = [...prev];
        setShuffledCards(reviewCards);
        transitionToStep(reviewCards, 0, "shadowing");
        return [];
      }
      restartSession();
      return prev;
    });
  }, [currentCardIndex, totalCards, shuffledCards, transitionToStep, restartSession]);

  /** Story mode: advance card within phase, or move to next macro phase. */
  const advanceStoryMacroFlow = useCallback(() => {
    const isLastCardInPhase = currentCardIndex >= totalCards - 1;
    if (!isLastCardInPhase) {
      transitionToStep(shuffledCards, currentCardIndex + 1, currentStep);
      return;
    }

    const phaseIndex = STORY_MACRO_PHASES.indexOf(currentStep);
    const nextPhase = STORY_MACRO_PHASES[phaseIndex + 1];
    if (nextPhase) {
      transitionToStep(shuffledCards, 0, nextPhase);
      return;
    }

    triggerStoryEpisodeComplete();
  }, [
    currentCardIndex,
    totalCards,
    currentStep,
    shuffledCards,
    transitionToStep,
    triggerStoryEpisodeComplete,
  ]);

  const handleShadowingComplete = useCallback(() => {
    setStepState((prev) => ({ ...prev, isShadowingDone: true }));
    addScore(1);
  }, [addScore]);

  const handleVocabSelect = useCallback(
    (selected: string) => {
      if (!currentCard || stepState.vocabResult) return;
      const isCorrect = selected === currentCard.targetWord;
      setStepState((prev) => ({
        ...prev,
        vocabSelected: selected,
        vocabResult: isCorrect ? "correct" : "wrong",
      }));
      if (isCorrect) {
        addScore(1);
        playTts(currentCard.sentence);
      }
    },
    [currentCard, stepState.vocabResult, addScore]
  );

  const handleVocabRetry = useCallback(() => {
    if (!currentCard) return;
    setStepState((prev) => ({
      ...prev,
      vocabChoices: shuffle([currentCard.targetWord, ...currentCard.distractors]),
      vocabSelected: null,
      vocabResult: null,
    }));
  }, [currentCard]);

  const goToNextStep = useCallback(() => {
    if (!currentCard) return;
    if (mode === "story") {
      advanceStoryMacroFlow();
      return;
    }
    if (currentStep === "shadowing") {
      transitionToStep(shuffledCards, currentCardIndex, "vocab");
    } else if (currentStep === "vocab") {
      transitionToStep(shuffledCards, currentCardIndex, "reorder");
    } else if (currentStep === "reorder") {
      if (useRecall) {
        transitionToStep(shuffledCards, currentCardIndex, "recall");
      } else {
        advanceAfterCardComplete();
      }
    }
  }, [
    currentCard,
    mode,
    advanceStoryMacroFlow,
    currentStep,
    currentCardIndex,
    shuffledCards,
    useRecall,
    transitionToStep,
    advanceAfterCardComplete,
  ]);

  const handleChunkClick = useCallback(
    (chunk: string) => {
      if (!currentCard || stepState.reorderResult === "correct") return;
      if (stepState.selectedChunks.includes(chunk)) return;
      const newSelected = [...stepState.selectedChunks, chunk];
      if (newSelected.length < stepState.shuffledChunks.length) {
        setStepState((prev) => ({ ...prev, selectedChunks: newSelected }));
        return;
      }
      const isCorrect = newSelected.join("") === currentCard.sentence;
      setStepState((prev) => ({
        ...prev,
        selectedChunks: newSelected,
        reorderResult: isCorrect ? "correct" : "wrong",
      }));
      if (isCorrect) {
        addScore(1);
        playTts(currentCard.sentence);
      }
    },
    [
      currentCard,
      stepState.reorderResult,
      stepState.selectedChunks,
      stepState.shuffledChunks.length,
      addScore,
    ]
  );

  const handleReorderRetry = useCallback(() => {
    if (!currentCard) return;
    setStepState((prev) => ({
      ...prev,
      shuffledChunks: shuffle(currentCard.chunks),
      selectedChunks: [],
      reorderResult: null,
    }));
  }, [currentCard]);

  const handleRecallReveal = useCallback(() => {
    if (!currentCard || stepState.isRecallRevealed) return;
    setStepState((prev) => ({ ...prev, isRecallRevealed: true }));
    playTts(currentCard.sentence);
  }, [currentCard, stepState.isRecallRevealed]);

  const handleRecallEvaluate = useCallback(
    (result: RecallEvaluation) => {
      if (!currentCard) return;

      if (mode === "story") {
        advanceStoryMacroFlow();
        return;
      }

      const shouldEnqueue = result === "hard" || result === "fail";
      const nextIndex = currentCardIndex + 1;

      if (nextIndex < totalCards) {
        if (shouldEnqueue) {
          setReviewQueue((prev) => [...prev, currentCard]);
        }
        transitionToStep(shuffledCards, nextIndex, "shadowing");
        return;
      }

      setReviewQueue((prev) => {
        const updated = shouldEnqueue ? [...prev, currentCard] : prev;
        if (updated.length > 0) {
          const reviewCards = [...updated];
          setShuffledCards(reviewCards);
          transitionToStep(reviewCards, 0, "shadowing");
          return [];
        }
        restartSession();
        return [];
      });
    },
    [
      currentCard,
      mode,
      advanceStoryMacroFlow,
      currentCardIndex,
      totalCards,
      shuffledCards,
      transitionToStep,
      restartSession,
    ]
  );

  const goToPrevCard = useCallback(() => {
    if (currentCardIndex > 0) {
      transitionToStep(
        shuffledCards,
        currentCardIndex - 1,
        mode === "story" ? currentStep : "shadowing"
      );
    }
  }, [currentCardIndex, shuffledCards, transitionToStep, mode, currentStep]);

  const goToNextCard = useCallback(() => {
    if (currentCardIndex < totalCards - 1) {
      transitionToStep(
        shuffledCards,
        currentCardIndex + 1,
        mode === "story" ? currentStep : "shadowing"
      );
    }
  }, [currentCardIndex, totalCards, shuffledCards, transitionToStep, mode, currentStep]);

  const stepLabels = useMemo(
    () =>
      mode === "story"
        ? STORY_QUESTION_PHASE_LABELS
        : ([
            { step: "shadowing" as const, label: "①音読" },
            { step: "vocab" as const, label: "②穴埋め" },
            { step: "reorder" as const, label: "③並べ替え" },
            ...(useRecall ? [{ step: "recall" as const, label: "④発話" }] : []),
          ] as const),
    [mode, useRecall]
  );

  const storyNextLabel = useMemo(
    () =>
      mode === "story" && storyIntroPhase === "questions"
        ? getStoryStepNextLabel(currentStep, currentCardIndex, totalCards)
        : undefined,
    [mode, storyIntroPhase, currentStep, currentCardIndex, totalCards]
  );

  const inStoryIntro = mode === "story" && storyIntroPhase !== "questions";

  if (!currentCard && !inStoryIntro) {
    return (
      <main className="min-h-dvh flex items-center justify-center">
        <p className="text-muted-foreground font-body">カードがありません</p>
      </main>
    );
  }

  const storyCard =
    currentCard && isStoryCard(currentCard) ? currentCard : null;

  const courseContent = (
    <div className="space-y-4">
      {mode === "story" && (
        <div className="flex gap-1 flex-wrap justify-center">
          {STORY_INTRO_LABELS.map(({ id, label }) => (
            <span
              key={id}
              className={cn(
                "text-xs px-2.5 py-1 rounded-full font-headline",
                storyIntroPhase === id
                  ? "bg-cyan-600 text-white"
                  : "bg-white/70 text-muted-foreground"
              )}
            >
              {label}
            </span>
          ))}
        </div>
      )}

      {mode === "story" && storyIntroPhase === "listening" && (
        <StoryListeningStep
          cards={storyCards}
          episodeTitle={episodeTitle}
          episodeSubtitle={episodeSubtitle}
          onComplete={() => {
            stopTts();
            setStoryIntroPhase("reading");
            addScore(1);
          }}
        />
      )}

      {mode === "story" && storyIntroPhase === "reading" && (
        <StoryReadingAloudStep cards={storyCards} onComplete={enterStoryQuestions} />
      )}

      {(mode === "drill" || storyIntroPhase === "questions") && currentCard && (
        <>
          {mode === "story" && episodeTitle && (
            <Card className="border-none bg-cyan-50/80 rounded-2xl">
              <CardContent className="pt-4 pb-4 space-y-1">
                <p className="font-headline font-bold text-sm text-cyan-900">{episodeTitle}</p>
                {episodeSubtitle && (
                  <p className="text-xs text-cyan-800/80 font-body">{episodeSubtitle}</p>
                )}
              </CardContent>
            </Card>
          )}

          {mode === "story" && storyCard?.sceneContext && (
            <SceneContextBanner context={storyCard.sceneContext} />
          )}

          {storyCard && <StorySpeakerBadge card={storyCard} />}

          <div className="flex items-center justify-between px-1">
            <span className="text-sm text-muted-foreground font-body">
              {mode === "story" ? (
                <>
                  {currentCardIndex + 1} / {totalCards}
                  <span className="text-muted-foreground/60"> · </span>
                  {STORY_QUESTION_PHASE_LABELS.find((p) => p.step === currentStep)?.label}
                </>
              ) : (
                <>
                  {currentCardIndex + 1} / {totalCards}
                </>
              )}
            </span>
            <div className="flex gap-1 flex-wrap justify-end">
              {stepLabels.map(({ step, label }) => (
                <span
                  key={step}
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full font-headline",
                    currentStep === step
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {currentStep === "shadowing" && (
            <ShadowingStep
              card={currentCard}
              isDone={stepState.isShadowingDone}
              onComplete={handleShadowingComplete}
              onNext={goToNextStep}
              nextLabel={storyNextLabel}
            />
          )}
          {currentStep === "vocab" && (
            <VocabStep
              card={currentCard}
              choices={stepState.vocabChoices}
              selected={stepState.vocabSelected}
              result={stepState.vocabResult}
              onSelect={handleVocabSelect}
              onRetry={handleVocabRetry}
              onNext={goToNextStep}
              nextLabel={storyNextLabel}
            />
          )}
          {currentStep === "reorder" && (
            <ReorderStep
              card={currentCard}
              shuffledChunks={stepState.shuffledChunks}
              selectedChunks={stepState.selectedChunks}
              result={stepState.reorderResult}
              isLastCard={currentCardIndex + 1 >= totalCards}
              hasRecallStep={mode === "story" ? false : useRecall}
              onChunkClick={handleChunkClick}
              onRetry={handleReorderRetry}
              onNext={goToNextStep}
              nextLabel={storyNextLabel}
            />
          )}
          {currentStep === "recall" && (
            <RecallStep
              card={currentCard}
              isRevealed={stepState.isRecallRevealed}
              onReveal={handleRecallReveal}
              onEvaluate={handleRecallEvaluate}
            />
          )}
        </>
      )}
    </div>
  );

  return (
    <main className="min-h-dvh bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 pb-24">
      <div className="w-full max-w-2xl mx-auto px-4 pt-4">
        <div className="flex items-center justify-between mb-4">
          <Button type="button" variant="ghost" className="rounded-full font-headline" onClick={onExit}>
            ← {mode === "story" ? "エピソード一覧" : "モード選択"}
          </Button>
          <span className="text-xs text-muted-foreground font-body">
            {mode === "story" ? "ストーリーモード" : courseLabel ?? "実践ドリル"}
          </span>
        </div>

        {showDrillSettings ? (
          <Tabs defaultValue="course" className="w-full">
            <TabsList className="w-full rounded-2xl bg-white/60 backdrop-blur-sm h-12 mb-4">
              <TabsTrigger value="course" className="flex-1 rounded-xl font-headline">
                コース
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex-1 rounded-xl font-headline">
                設定
              </TabsTrigger>
            </TabsList>
            <TabsContent value="course">{courseContent}</TabsContent>
            <TabsContent value="settings" className="space-y-6">
              <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">学習設定</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {onCourseChange && selectedLevel && (
                    <div>
                      <p className="font-headline font-bold text-sm mb-2">難易度</p>
                      <div className="flex flex-wrap gap-2">
                        {DRILL_COURSE_OPTIONS.map(({ level, label }) => (
                          <Button
                            key={level}
                            type="button"
                            variant={selectedLevel === level ? "default" : "outline"}
                            className="rounded-full"
                            onClick={() => onCourseChange(level)}
                          >
                            {label}
                          </Button>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground font-body mt-2">
                        {DRILL_COURSE_OPTIONS.find((o) => o.level === selectedLevel)?.description}
                      </p>
                    </div>
                  )}
                  {!forceRecall && (
                    <div className="flex items-center justify-between gap-4 rounded-2xl border p-4">
                      <div className="space-y-1 pr-2">
                        <Label htmlFor="hard-mode" className="font-headline text-sm font-bold">
                          ハードモード
                        </Label>
                        <p className="text-xs text-muted-foreground font-body">
                          Step 4: 日本語訳からの自力発話テスト
                        </p>
                      </div>
                      <Switch
                        id="hard-mode"
                        checked={isHardModeEnabled}
                        onCheckedChange={setIsHardModeEnabled}
                      />
                    </div>
                  )}
                  <div className="text-sm text-muted-foreground font-body space-y-1">
                    <p>
                      セッションポイント: <span className="font-bold">{todayScore}</span>
                    </p>
                    <p>
                      進行: {currentCardIndex + 1} / {totalCards}
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full rounded-2xl"
                    onClick={restartSession}
                  >
                    最初からやり直す
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        ) : (
          courseContent
        )}
      </div>

      {!inStoryIntro && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-t">
          <div className="max-w-2xl mx-auto px-4 py-3 flex gap-3">
            <Button
              type="button"
              variant="outline"
              className="flex-1 rounded-2xl h-12 font-headline"
              onClick={goToPrevCard}
              disabled={currentCardIndex <= 0}
            >
              ← 前へ
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1 rounded-2xl h-12 font-headline"
              onClick={goToNextCard}
              disabled={currentCardIndex >= totalCards - 1}
            >
              次へ →
            </Button>
          </div>
        </div>
      )}

      {clearScreenData && (
        <EpisodeClearModal
          open={episodeClearOpen}
          data={clearScreenData}
          onNextEpisode={() => {
            setEpisodeClearOpen(false);
            onNextEpisode?.();
          }}
          onBackToList={() => {
            setEpisodeClearOpen(false);
            (onEpisodeClearBackToList ?? onExit)();
          }}
        />
      )}
    </main>
  );
}
