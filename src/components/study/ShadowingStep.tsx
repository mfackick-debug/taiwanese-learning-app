"use client";

import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AudioButton } from "@/components/AudioButton";
import type { NormalizedStudyCard } from "@/types";

export interface ShadowingStepProps {
  card: NormalizedStudyCard;
  isDone: boolean;
  onComplete: () => void;
  onNext: () => void;
  nextLabel?: string;
}

function ShadowingStepComponent({
  card,
  isDone,
  onComplete,
  onNext,
  nextLabel = "次へ（つなぎ語）",
}: ShadowingStepProps) {
  return (
    <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
      <CardHeader className="space-y-2">
        <CardTitle className="font-headline text-lg">Step1：シャドーイング</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="text-xl leading-10 font-headline text-slate-900 whitespace-pre-wrap">
            {card.sentence}
          </p>
          <p className="mt-2 text-sm text-muted-foreground/70 font-body">{card.pinyin}</p>
          <p className="mt-1 text-sm text-muted-foreground/60 font-body">{card.translation}</p>
        </div>

        <div className="flex justify-center">
          <AudioButton
            text={card.sentence}
            size="lg"
            className="h-16 w-16 rounded-full bg-primary/10 hover:bg-primary/20"
            onPlay={onComplete}
          />
        </div>

        <div className="text-center text-sm text-muted-foreground font-body">
          音声を聞いて、声に出して繰り返しましょう
        </div>

        {isDone && (
          <div className="space-y-4">
            <div className="text-center text-base text-emerald-700 font-headline font-bold">
              シャドーイング完了 ✓
            </div>
            <Button
              type="button"
              className="w-full rounded-2xl h-14 text-base font-headline"
              onClick={onNext}
            >
              {nextLabel}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export const ShadowingStep = memo(ShadowingStepComponent);
