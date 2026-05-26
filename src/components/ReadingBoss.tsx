"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { playTts, stopTts } from "@/components/AudioButton";
import type { SentenceCard } from "@/types";

type BossReading = NonNullable<SentenceCard["bossReading"]>;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function ReadingBoss({
  data,
  onCleared,
  className,
}: {
  data: BossReading;
  onCleared: () => void;
  className?: string;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
      stopTts();
    };
  }, []);

  const choices = useRef<string[]>(shuffle([data.targetWord, ...data.distractors].slice(0, 4)));

  const handleSelect = async (c: string) => {
    if (isLocked) return;
    setSelected(c);

    if (c === data.targetWord) {
      setResult("correct");
      setIsLocked(true);
      void playTts(data.text);
      timerRef.current = window.setTimeout(() => {
        onCleared();
      }, 1500);
      return;
    }

    setResult("wrong");
  };

  return (
    <Card className={cn("border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl", className)}>
      <CardHeader className="space-y-3">
        <CardTitle className="font-headline text-lg">Step 5：長文読解（ボス戦）</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-base leading-8 font-body text-slate-900 whitespace-pre-wrap">{data.text}</div>

        <div className="space-y-3">
          <div className="text-sm text-muted-foreground font-body">{data.question}</div>

          <div className="grid grid-cols-2 gap-3">
            {choices.current.map((c) => {
              const isSelected = selected === c;
              const isCorrectChoice = result === "correct" && c === data.targetWord;
              const isWrongSelected = result === "wrong" && isSelected && c !== data.targetWord;

              return (
                <Button
                  key={c}
                  type="button"
                  onClick={() => void handleSelect(c)}
                  disabled={isLocked}
                  className={cn(
                    "h-14 rounded-2xl text-base font-headline",
                    isCorrectChoice && "bg-emerald-600 hover:bg-emerald-600",
                    isWrongSelected && "bg-rose-600 hover:bg-rose-600"
                  )}
                  variant={isSelected ? "default" : "secondary"}
                >
                  {c}
                </Button>
              );
            })}
          </div>

          {result === "wrong" && (
            <div className="text-sm font-headline font-bold text-rose-600">不正解。もう一度選んでください。</div>
          )}

          {result === "correct" && (
            <div className="text-sm font-headline font-bold text-emerald-700">正解！音声を再生して結果へ進みます。</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
