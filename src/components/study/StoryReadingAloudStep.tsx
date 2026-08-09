"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AudioButton } from "@/components/AudioButton";
import type { StoryStudyCard } from "@/data/storyMode";
import { STORY_CHARACTERS } from "@/data/storyMode/types";

export interface StoryReadingAloudStepProps {
  cards: StoryStudyCard[];
  onComplete: () => void;
}

export function StoryReadingAloudStep({ cards, onComplete }: StoryReadingAloudStepProps) {
  const [isDone, setIsDone] = useState(false);

  return (
    <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
      <CardHeader className="space-y-2">
        <CardTitle className="font-headline text-lg">Step 2：全文音読</CardTitle>
        <p className="text-sm text-muted-foreground font-body">
          スクリプトを見ながら、ストーリー全体を声に出して読みましょう（シャドーイング）
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="max-h-[50vh] overflow-y-auto space-y-3 rounded-2xl border bg-slate-50/60 p-3">
          {cards.map((card) => {
            const speaker = STORY_CHARACTERS[card.speaker];
            return (
              <div key={card.id} className="rounded-2xl bg-white px-3 py-3 border border-transparent">
                <div className="flex items-start justify-between gap-2">
                  <p className={`text-[11px] font-headline font-bold ${speaker.accentClass}`}>
                    {speaker.emoji} {speaker.nameZh}
                  </p>
                  <AudioButton
                    text={card.sentence}
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                  />
                </div>
                <p className="mt-1 text-base font-headline text-slate-900 leading-relaxed whitespace-pre-wrap">
                  {card.sentence}
                </p>
                <p className="mt-1 text-xs text-muted-foreground/70 font-body">{card.pinyin}</p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground font-body">
          各行のスピーカーで確認しながら、通しで音読してください
        </p>

        {!isDone ? (
          <Button
            type="button"
            className="w-full rounded-2xl h-14 text-base font-headline"
            onClick={() => setIsDone(true)}
          >
            全文音読を完了
          </Button>
        ) : (
          <div className="space-y-3">
            <p className="text-center text-base text-emerald-700 font-headline font-bold">
              全文音読完了 ✓
            </p>
            <Button
              type="button"
              className="w-full rounded-2xl h-14 text-base font-headline"
              onClick={onComplete}
            >
              個別問題へ進む
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
