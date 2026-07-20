"use client";

import { memo, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { maskTargetWord } from "@/components/study/utils";
import type { QuizResult } from "@/components/study/types";
import type { NormalizedStudyCard } from "@/types";

function highlightQuantifiers(text: string): ReactNode {
  const wordPattern = /「(.+?)」/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let idx = 0;

  while ((match = wordPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const inner = match[1];
    parts.push(
      <span key={`hl-${idx++}`} className="font-bold text-primary">
        「{inner}」
      </span>
    );
    lastIndex = wordPattern.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

export interface VocabStepProps {
  card: NormalizedStudyCard;
  choices: string[];
  selected: string | null;
  result: QuizResult;
  onSelect: (choice: string) => void;
  onRetry: () => void;
  onNext: () => void;
  nextLabel?: string;
}

function VocabStepComponent({
  card,
  choices,
  selected,
  result,
  onSelect,
  onRetry,
  onNext,
  nextLabel = "次へ（並べ替え）",
}: VocabStepProps) {
  if (choices.length === 0) return null;

  return (
    <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
      <CardHeader className="space-y-2">
        <CardTitle className="font-headline text-lg">Step2：語彙選択</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="text-xl leading-10 font-headline text-slate-900 whitespace-pre-wrap">
            {maskTargetWord(card.sentence, card.targetWord)}
          </p>
          <p className="mt-2 text-sm text-muted-foreground/70 font-body">
            {maskTargetWord(card.pinyin, card.targetWord)}
          </p>
          <p className="mt-1 text-sm text-muted-foreground/60 font-body">{card.translation}</p>
        </div>

        <div className="text-sm text-muted-foreground font-body text-center">
          下記から正しい語彙を選んでください
        </div>

        <div className="grid grid-cols-2 gap-3">
          {choices.map((choice) => {
            const isSelected = selected === choice;
            const isCorrectChoice = result === "correct" && choice === card.targetWord;
            const isWrongSelected = result === "wrong" && isSelected;

            return (
              <Button
                key={choice}
                type="button"
                onClick={() => onSelect(choice)}
                disabled={!!result}
                className={cn(
                  "h-14 rounded-2xl text-base font-headline",
                  isCorrectChoice && "bg-emerald-600 hover:bg-emerald-600",
                  isWrongSelected && "bg-rose-600 hover:bg-rose-600"
                )}
                variant={isSelected ? "default" : "secondary"}
              >
                {choice}
              </Button>
            );
          })}
        </div>

        {result === "correct" && (
          <div className="space-y-4">
            <div className="text-center text-2xl font-headline font-bold text-emerald-600">
              ○ 正解！
            </div>
            <div className="text-sm text-foreground/90 bg-secondary/30 rounded-2xl p-4">
              <p className="font-headline font-bold mb-1">解説</p>
              <p className="font-body whitespace-pre-wrap">
                {highlightQuantifiers(card.grammarNote)}
              </p>
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

        {result === "wrong" && (
          <div className="space-y-4">
            <div className="text-center text-2xl font-headline font-bold text-rose-600">
              × 不正解
            </div>
            <Button variant="ghost" className="w-full rounded-full" onClick={onRetry}>
              もう一度
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export const VocabStep = memo(VocabStepComponent);
