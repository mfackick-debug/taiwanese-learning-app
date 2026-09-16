"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ListMusic,
  Loader2,
  Pause,
  Play,
  Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { playTts, prefetchTts, stopTts } from "@/components/AudioButton";
import {
  getExamplePlaylist,
  type PlaylistItem,
  type PlaylistPhase,
} from "@/data/playlist";
import {
  clearPlaylistProgress,
  loadPlaylistProgress,
  savePlaylistProgress,
} from "@/data/playlistProgress";
import { cn } from "@/lib/utils";

const PHASE_B_DWELL_MS = 2800;

export function PlaylistPlayer() {
  const items = useMemo(() => getExamplePlaylist(), []);
  const total = items.length;

  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<PlaylistPhase>("a");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [resumeAvailable, setResumeAvailable] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const playGenRef = useRef(0);
  const cancelledRef = useRef(false);
  const autoAdvanceRef = useRef(autoAdvance);
  const dwellTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    autoAdvanceRef.current = autoAdvance;
  }, [autoAdvance]);

  useEffect(() => {
    const saved = loadPlaylistProgress();
    if (saved && saved.currentIndex > 0 && saved.currentIndex < total) {
      setIndex(saved.currentIndex);
      setResumeAvailable(true);
    }
    setHydrated(true);
  }, [total]);

  useEffect(() => {
    return () => {
      cancelledRef.current = true;
      if (dwellTimerRef.current) clearTimeout(dwellTimerRef.current);
      stopTts();
    };
  }, []);

  const item: PlaylistItem | undefined = items[index];

  useEffect(() => {
    if (!item) return;
    savePlaylistProgress(index);
    const next = items[index + 1];
    const next2 = items[index + 2];
    if (next) void prefetchTts(next.sentence);
    if (next2) void prefetchTts(next2.sentence);
  }, [index, item, items]);

  const clearDwell = useCallback(() => {
    if (dwellTimerRef.current) {
      clearTimeout(dwellTimerRef.current);
      dwellTimerRef.current = null;
    }
  }, []);

  const playCurrent = useCallback(async (target: PlaylistItem) => {
    const gen = ++playGenRef.current;
    cancelledRef.current = false;
    setIsBusy(true);
    setIsPlaying(true);
    setPhase("a");

    try {
      await playTts(target.sentence, { waitUntilEnd: true });
    } catch {
      // fall through — still show Phase B
    }

    if (cancelledRef.current || playGenRef.current !== gen) {
      if (playGenRef.current === gen) {
        setIsPlaying(false);
        setIsBusy(false);
      }
      return;
    }

    // Phase B: show Japanese translation and play audio again
    setPhase("b");
    setIsPlaying(true);
    setIsBusy(true);
    try {
      await playTts(target.sentence, { waitUntilEnd: true });
    } finally {
      if (playGenRef.current === gen) {
        setIsPlaying(false);
        setIsBusy(false);
      }
    }
  }, []);

  const revealPhaseBAndReplay = useCallback(async () => {
    if (!item) return;
    clearDwell();
    cancelledRef.current = true;
    stopTts();
    const gen = ++playGenRef.current;
    cancelledRef.current = false;
    setPhase("b");
    setIsBusy(true);
    setIsPlaying(true);
    try {
      await playTts(item.sentence, { waitUntilEnd: true });
    } finally {
      if (playGenRef.current === gen) {
        setIsPlaying(false);
        setIsBusy(false);
      }
    }
  }, [clearDwell, item]);

  const startAt = useCallback(
    (startIndex: number) => {
      clearDwell();
      cancelledRef.current = true;
      stopTts();
      playGenRef.current += 1;
      const clamped = Math.max(0, Math.min(startIndex, Math.max(0, total - 1)));
      setIndex(clamped);
      setPhase("a");
      setFinished(false);
      setHasStarted(true);
      setResumeAvailable(false);
      const target = items[clamped];
      if (target) void playCurrent(target);
    },
    [clearDwell, items, playCurrent, total]
  );

  const goTo = useCallback(
    (nextIndex: number, options?: { play?: boolean }) => {
      if (nextIndex < 0) return;
      if (nextIndex >= total) {
        clearDwell();
        cancelledRef.current = true;
        stopTts();
        playGenRef.current += 1;
        setIsPlaying(false);
        setIsBusy(false);
        setFinished(true);
        setPhase("b");
        setIndex(Math.max(0, total - 1));
        return;
      }

      clearDwell();
      cancelledRef.current = true;
      stopTts();
      playGenRef.current += 1;
      setIndex(nextIndex);
      setPhase("a");
      setFinished(false);
      const target = items[nextIndex];
      if (target && (options?.play ?? hasStarted)) {
        void playCurrent(target);
      }
    },
    [clearDwell, hasStarted, items, playCurrent, total]
  );

  useEffect(() => {
    if (phase !== "b" || finished || !autoAdvance || !hasStarted || isPlaying || isBusy) {
      return;
    }
    clearDwell();
    dwellTimerRef.current = setTimeout(() => {
      goTo(index + 1, { play: true });
    }, PHASE_B_DWELL_MS);
    return () => clearDwell();
  }, [autoAdvance, clearDwell, finished, goTo, hasStarted, index, isBusy, isPlaying, phase]);

  const handleReplay = useCallback(() => {
    if (!item) return;
    setHasStarted(true);
    void playCurrent(item);
  }, [item, playCurrent]);

  const handlePause = useCallback(() => {
    cancelledRef.current = true;
    stopTts();
    playGenRef.current += 1;
    setIsPlaying(false);
    setIsBusy(false);
  }, []);

  const handleReset = useCallback(() => {
    clearPlaylistProgress();
    startAt(0);
  }, [startAt]);

  if (total === 0) {
    return (
      <main className="min-h-dvh bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 px-4 py-10">
        <div className="max-w-2xl mx-auto space-y-4">
          <Button variant="ghost" className="rounded-full font-headline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-1 h-4 w-4" />
              モード選択
            </Link>
          </Button>
          <p className="text-center text-muted-foreground font-body">再生できる例文がありません。</p>
        </div>
      </main>
    );
  }

  const progressPct = total > 0 ? ((index + (finished ? 1 : 0)) / total) * 100 : 0;

  return (
    <main className="min-h-dvh bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 pb-28">
      <div className="w-full max-w-2xl mx-auto px-4 pt-4 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <Button variant="ghost" className="rounded-full font-headline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-1 h-4 w-4" />
              モード選択
            </Link>
          </Button>
          <span className="text-xs font-body text-muted-foreground">
            {index + 1} / {total}
          </span>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-headline font-bold text-slate-900 flex items-center justify-center gap-2">
            <ListMusic className="h-6 w-6 text-primary" />
            例文プレイリスト
          </h1>
          <p className="text-sm text-muted-foreground font-body">
            完成した例文だけを教材順で再生します（{total} 文）
          </p>
        </div>

        <Progress value={progressPct} className="h-2" />

        {!hasStarted && !finished ? (
          <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
            <CardContent className="p-6 space-y-5">
              <p className="text-sm font-body text-slate-700 leading-relaxed">
                Phase A で繁体字の音声を聞き、Phase B で日本語訳を確認します。単語カード・並べ替え断片・フレーズ帳・AI作文は含まれません。
              </p>
              {hydrated && resumeAvailable && (
                <p className="text-xs font-body text-sky-800">
                  前回の位置: {index + 1} 文目
                </p>
              )}
              <div className="space-y-3">
                {hydrated && resumeAvailable ? (
                  <>
                    <Button
                      type="button"
                      className="w-full h-14 rounded-2xl text-base font-headline"
                      onClick={() => startAt(index)}
                    >
                      <Play className="mr-2 h-5 w-5" />
                      続きから再生
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full h-12 rounded-2xl font-headline"
                      onClick={handleReset}
                    >
                      最初から再生
                    </Button>
                  </>
                ) : (
                  <Button
                    type="button"
                    className="w-full h-14 rounded-2xl text-base font-headline"
                    onClick={() => startAt(0)}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    再生を始める
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ) : finished ? (
          <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
            <CardContent className="p-6 space-y-5 text-center">
              <p className="text-lg font-headline font-bold text-emerald-700">全例文を再生しました</p>
              <p className="text-sm font-body text-muted-foreground">{total} 文を教材順に通しました。</p>
              <Button
                type="button"
                className="w-full h-12 rounded-2xl font-headline"
                onClick={handleReset}
              >
                最初からもう一度
              </Button>
            </CardContent>
          </Card>
        ) : item ? (
          <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "text-xs font-headline px-2.5 py-1 rounded-full",
                    phase === "a"
                      ? "bg-sky-100 text-sky-900"
                      : "bg-emerald-100 text-emerald-900"
                  )}
                >
                  {phase === "a" ? "Phase A・聞き取り" : "Phase B・訳の確認"}
                </span>
                <span className="text-[11px] font-body text-muted-foreground">
                  {item.source === "shadowing" ? "シャドーイング例文" : "語彙の例文"}
                </span>
              </div>

              <div className="text-center space-y-3 min-h-[140px] flex flex-col justify-center">
                <p className="text-2xl leading-relaxed font-headline text-slate-900 whitespace-pre-wrap">
                  {item.sentence}
                </p>
                {phase === "b" && (
                  <div className="space-y-2 animate-in fade-in duration-300">
                    {item.pinyin ? (
                      <p className="text-sm font-body text-muted-foreground/80">{item.pinyin}</p>
                    ) : null}
                    <p className="text-base font-body text-slate-800 bg-emerald-50/80 rounded-2xl px-4 py-3">
                      {item.translation}
                    </p>
                  </div>
                )}
                {phase === "a" && (
                  <p className="text-sm font-body text-muted-foreground">
                    音声を聞いてください。訳は Phase B で出ます。
                  </p>
                )}
              </div>

              <div className="flex justify-center gap-3">
                {isPlaying || isBusy ? (
                  <Button
                    type="button"
                    variant="secondary"
                    className="rounded-full h-14 px-6 font-headline"
                    onClick={handlePause}
                  >
                    {isBusy && !isPlaying ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      <Pause className="mr-2 h-5 w-5" />
                    )}
                    停止
                  </Button>
                ) : (
                  <Button
                    type="button"
                    className="rounded-full h-14 px-6 font-headline"
                    onClick={handleReplay}
                  >
                    <Volume2 className="mr-2 h-5 w-5" />
                    もう一度再生
                  </Button>
                )}
              </div>

              {phase === "a" ? (
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 rounded-2xl font-headline"
                  onClick={() => void revealPhaseBAndReplay()}
                >
                  訳を見る（Phase B）
                </Button>
              ) : (
                <Button
                  type="button"
                  className="w-full h-12 rounded-2xl font-headline"
                  onClick={() => goTo(index + 1, { play: true })}
                >
                  {index + 1 >= total ? "終了" : "次の例文へ"}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              )}

              <div className="flex items-center justify-between rounded-2xl bg-white/70 border border-sky-100 px-4 py-3">
                <Label htmlFor="playlist-auto" className="font-headline text-sm">
                  連続再生
                </Label>
                <Switch
                  id="playlist-auto"
                  checked={autoAdvance}
                  onCheckedChange={setAutoAdvance}
                />
              </div>
            </CardContent>
          </Card>
        ) : null}

        {hasStarted && !finished && (
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-t border-border/50">
            <div className="max-w-2xl mx-auto px-4 py-3 flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1 rounded-2xl h-12 font-headline"
                onClick={() => goTo(index - 1, { play: true })}
                disabled={index <= 0}
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                前の例文
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1 rounded-2xl h-12 font-headline"
                onClick={() => goTo(index + 1, { play: true })}
                disabled={index >= total - 1 && phase === "a"}
              >
                次の例文
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
