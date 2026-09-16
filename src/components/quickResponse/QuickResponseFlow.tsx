"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bookmark, Loader2, Timer, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { playTts, stopTts } from "@/components/AudioButton";
import { usePhraseBook } from "@/hooks/usePhraseBook";
import { toast } from "@/hooks/use-toast";
import {
  INTERVIEW_THEME_GROUPS,
  getThemesByGroup,
  type InterviewThemeId,
} from "@/data/interviewThemes";
import {
  getQuickResponsesByTheme,
  type QuickResponseItem,
} from "@/data/quickResponses";
import { getPracticeCategoryMeta } from "@/types/practiceCategory";
import { cn } from "@/lib/utils";
import { shuffle } from "@/components/study/utils";

const SECONDS = 15;

export function QuickResponseFlow() {
  const { addEntry } = usePhraseBook();
  const [themeId, setThemeId] = useState<InterviewThemeId>("shopping");
  const [queue, setQueue] = useState<QuickResponseItem[]>([]);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"ready" | "speaking" | "reveal">("ready");
  const [remaining, setRemaining] = useState(SECONDS);
  const [savedId, setSavedId] = useState<string | null>(null);

  const item = queue[index];
  const categoryMeta = getPracticeCategoryMeta(
    item?.category ?? getThemesByGroup("survival")[0]!.group
  );

  const startTheme = useCallback((id: InterviewThemeId) => {
    stopTts();
    const pool = shuffle(getQuickResponsesByTheme(id));
    setThemeId(id);
    setQueue(pool);
    setIndex(0);
    setPhase("ready");
    setRemaining(SECONDS);
    setSavedId(null);
  }, []);

  useEffect(() => {
    startTheme("shopping");
    return () => stopTts();
  }, [startTheme]);

  useEffect(() => {
    if (phase !== "speaking") return;
    if (remaining <= 0) {
      setPhase("reveal");
      return;
    }
    const t = setTimeout(() => setRemaining((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, remaining]);

  const beginSpeaking = useCallback(() => {
    if (!item) return;
    setSavedId(null);
    setRemaining(SECONDS);
    setPhase("speaking");
  }, [item]);

  const revealNow = useCallback(() => {
    setPhase("reveal");
  }, []);

  const playAnswer = useCallback(async () => {
    if (!item) return;
    await playTts(item.answerZh, { waitUntilEnd: true });
  }, [item]);

  const saveAnswer = useCallback(() => {
    if (!item || savedId === item.id) return;
    addEntry({
      sourceCardId: item.id,
      targetWord: item.themeId,
      skeletonText: item.promptJa,
      category: item.category,
      themeLabelJa: categoryMeta.labelJa,
      promptHintJa: "15秒応答",
      promptQuestion: item.promptJa,
      userDraft: item.promptJa,
      polishedText: item.answerZh,
      pinyin: item.answerPinyin,
    });
    setSavedId(item.id);
    toast({ title: "フレーズ帳に保存しました" });
  }, [addEntry, categoryMeta.labelJa, item, savedId]);

  const goNext = useCallback(() => {
    stopTts();
    if (index + 1 >= queue.length) {
      startTheme(themeId);
      return;
    }
    setIndex((i) => i + 1);
    setPhase("ready");
    setRemaining(SECONDS);
    setSavedId(null);
  }, [index, queue.length, startTheme, themeId]);

  const themeButtons = useMemo(
    () =>
      INTERVIEW_THEME_GROUPS.map((group) => ({
        group,
        themes: getThemesByGroup(group.id),
      })),
    []
  );

  if (!item) {
    return (
      <main className="min-h-dvh flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </main>
    );
  }

  return (
    <main className="min-h-dvh bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 pb-24">
      <div className="w-full max-w-2xl mx-auto px-4 pt-4 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <Button variant="ghost" className="rounded-full font-headline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-1 h-4 w-4" />
              モード選択
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="rounded-full font-headline" asChild>
            <Link href="/phrase-book">フレーズ帳</Link>
          </Button>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-headline font-bold text-slate-900 flex items-center justify-center gap-2">
            <Timer className="h-6 w-6 text-primary" />
            15秒応答
          </h1>
          <p className="text-sm text-muted-foreground font-body">
            場面を見て、つなぎも含めて一言で言い切る練習
          </p>
        </div>

        <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="font-headline text-sm">テーマ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {themeButtons.map(({ group, themes }) => (
              <div key={group.id} className="space-y-2">
                <p className="text-[11px] font-headline text-muted-foreground">{group.labelJa}</p>
                <div className="flex flex-wrap gap-2">
                  {themes.map((theme) => (
                    <Button
                      key={theme.id}
                      type="button"
                      size="sm"
                      variant={themeId === theme.id ? "default" : "outline"}
                      className="rounded-full font-headline"
                      onClick={() => startTheme(theme.id)}
                    >
                      {theme.labelJa}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex items-center justify-between text-xs font-body text-muted-foreground px-1">
          <Badge variant="outline" className={cn("font-body border", categoryMeta.badgeClass)}>
            {categoryMeta.labelJa}
          </Badge>
          <span>
            {index + 1} / {queue.length}
          </span>
        </div>

        <Card className="border-none bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl">
          <CardContent className="p-6 space-y-5">
            <div className="rounded-2xl bg-secondary/25 p-5 text-center space-y-2">
              <p className="text-[11px] font-headline font-bold text-sky-800 tracking-wide">
                言いたいこと（日本語）
              </p>
              <p className="text-lg font-body text-slate-900 leading-relaxed">{item.promptJa}</p>
              <p className="text-[11px] font-body text-muted-foreground">
                この内容を、中国語で一言にしてください
              </p>
            </div>

            {phase === "ready" && (
              <Button
                type="button"
                className="w-full h-14 rounded-2xl text-base font-headline"
                onClick={beginSpeaking}
              >
                15秒で言い切る
              </Button>
            )}

            {phase === "speaking" && (
              <div className="space-y-4 text-center">
                <p className="text-5xl font-headline font-bold text-sky-800 tabular-nums">
                  {remaining}
                </p>
                <p className="text-sm font-body text-muted-foreground">
                  声に出して言い切ってください
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 rounded-2xl font-headline"
                  onClick={revealNow}
                >
                  言い終わったので答えを見る
                </Button>
              </div>
            )}

            {phase === "reveal" && (
              <div className="space-y-4">
                <div className="rounded-2xl bg-emerald-50/90 p-4 space-y-2 text-center">
                  <p className="text-[11px] font-headline font-bold text-emerald-800">模範応答</p>
                  <p className="text-xl font-headline text-slate-900 leading-relaxed">
                    {item.answerZh}
                  </p>
                  <p className="text-sm font-body text-muted-foreground">{item.answerPinyin}</p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <Button
                    type="button"
                    variant="secondary"
                    className="h-12 rounded-2xl font-headline"
                    onClick={() => void playAnswer()}
                  >
                    <Volume2 className="mr-2 h-4 w-4" />
                    音声で確認
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 rounded-2xl font-headline"
                    onClick={saveAnswer}
                    disabled={savedId === item.id}
                  >
                    <Bookmark className="mr-2 h-4 w-4" />
                    {savedId === item.id ? "保存済み" : "フレーズ帳へ"}
                  </Button>
                </div>
                <Button
                  type="button"
                  className="w-full h-12 rounded-2xl font-headline"
                  onClick={goNext}
                >
                  次の場面へ
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
