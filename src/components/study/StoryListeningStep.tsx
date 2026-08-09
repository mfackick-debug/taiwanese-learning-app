"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Loader2, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { playTts, stopTts } from "@/components/AudioButton";
import type { StoryStudyCard } from "@/data/storyMode";
import { STORY_CHARACTERS } from "@/data/storyMode/types";

export interface StoryListeningStepProps {
  cards: StoryStudyCard[];
  episodeTitle?: string;
  episodeSubtitle?: string;
  onComplete: () => void;
}

export function StoryListeningStep({
  cards,
  episodeTitle,
  episodeSubtitle,
  onComplete,
}: StoryListeningStepProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const cancelledRef = useRef(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      cancelledRef.current = true;
      stopTts();
    };
  }, []);

  useEffect(() => {
    if (activeIndex == null) return;
    const el = listRef.current?.querySelector(`[data-line-index="${activeIndex}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [activeIndex]);

  const playAll = useCallback(async () => {
    if (isPlayingAll || isBusy) return;
    cancelledRef.current = false;
    setIsPlayingAll(true);
    setIsBusy(true);

    try {
      for (let i = 0; i < cards.length; i++) {
        if (cancelledRef.current) break;
        const card = cards[i];
        if (!card) continue;
        setActiveIndex(i);
        await playTts(card.sentence, { waitUntilEnd: true });
        if (cancelledRef.current) break;
        await new Promise((r) => setTimeout(r, 350));
      }
    } finally {
      setIsPlayingAll(false);
      setIsBusy(false);
      if (!cancelledRef.current) setActiveIndex(null);
    }
  }, [cards, isBusy, isPlayingAll]);

  const stopPlayback = useCallback(() => {
    cancelledRef.current = true;
    stopTts();
    setIsPlayingAll(false);
    setIsBusy(false);
    setActiveIndex(null);
  }, []);

  return (
    <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
      <CardHeader className="space-y-2">
        <CardTitle className="font-headline text-lg">Step 1：全体リスニング</CardTitle>
        <p className="text-sm text-muted-foreground font-body">
          まずストーリー全体の会話を聞いて、場面をつかみましょう
        </p>
        {(episodeTitle || episodeSubtitle) && (
          <div className="rounded-2xl bg-cyan-50/80 px-3 py-2">
            {episodeTitle && (
              <p className="font-headline font-bold text-sm text-cyan-900">{episodeTitle}</p>
            )}
            {episodeSubtitle && (
              <p className="text-xs text-cyan-800/80 font-body">{episodeSubtitle}</p>
            )}
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {!isPlayingAll ? (
            <Button
              type="button"
              className="rounded-2xl font-headline bg-cyan-600 hover:bg-cyan-700"
              disabled={isBusy || cards.length === 0}
              onClick={() => void playAll()}
            >
              {isBusy ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Play className="mr-2 h-4 w-4" />
              )}
              全体を再生
            </Button>
          ) : (
            <Button
              type="button"
              variant="destructive"
              className="rounded-2xl font-headline"
              onClick={stopPlayback}
            >
              <Pause className="mr-2 h-4 w-4" />
              停止
            </Button>
          )}
        </div>

        <div
          ref={listRef}
          className="max-h-[50vh] overflow-y-auto space-y-3 rounded-2xl border bg-slate-50/60 p-3"
        >
          {cards.map((card, index) => {
            const speaker = STORY_CHARACTERS[card.speaker];
            const isActive = activeIndex === index;
            return (
              <div
                key={card.id}
                data-line-index={index}
                className={cn(
                  "rounded-2xl border px-3 py-3 transition-colors",
                  isActive
                    ? "bg-cyan-100 border-cyan-300 shadow-sm"
                    : "bg-white border-transparent"
                )}
              >
                <p className={cn("text-[11px] font-headline font-bold mb-1", speaker.accentClass)}>
                  {speaker.emoji} {speaker.nameZh}
                </p>
                <p className="text-base font-headline text-slate-900 leading-relaxed whitespace-pre-wrap">
                  {card.sentence}
                </p>
                <p className="mt-1 text-xs text-muted-foreground/70 font-body">{card.pinyin}</p>
                <p className="mt-0.5 text-xs text-muted-foreground font-body">{card.translation}</p>
              </div>
            );
          })}
        </div>

        <Button
          type="button"
          className="w-full rounded-2xl h-14 text-base font-headline"
          disabled={isPlayingAll}
          onClick={() => {
            stopPlayback();
            onComplete();
          }}
        >
          音読フェーズへ進む
        </Button>
      </CardContent>
    </Card>
  );
}
