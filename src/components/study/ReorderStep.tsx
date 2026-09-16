"use client";

import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { QuizResult } from "@/components/study/types";
import type { NormalizedStudyCard } from "@/types";

export interface ReorderStepProps {
  card: NormalizedStudyCard;
  shuffledChunks: string[];
  selectedIndices: number[];
  result: QuizResult;
  isLastCard: boolean;
  hasRecallStep?: boolean;
  onPoolChunkClick: (poolIndex: number) => void;
  onSelectedChunkClick: (selectedPosition: number) => void;
  onRetry: () => void;
  onNext: () => void;
  nextLabel?: string;
}

function ReorderStepComponent({
  card,
  shuffledChunks,
  selectedIndices,
  result,
  isLastCard,
  hasRecallStep = false,
  onPoolChunkClick,
  onSelectedChunkClick,
  onRetry,
  onNext,
  nextLabel,
}: ReorderStepProps) {
  if (card.chunks.length < 2) return null;

  const selectedChunks = selectedIndices
    .map((i) => shuffledChunks[i])
    .filter((chunk): chunk is string => typeof chunk === "string");

  return (
    <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
      <CardHeader className="space-y-2">
        <CardTitle className="font-headline text-lg">Step3：並べ替え</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-sm text-muted-foreground font-body text-center">
          チャンクをタップして並べ替え。解答側をタップすると取り消せます
        </div>

        <div className="min-h-[60px] p-4 bg-secondary/20 rounded-2xl">
          {selectedChunks.length > 0 ? (
            <div className="flex flex-wrap gap-2 justify-center">
              {selectedChunks.map((chunk, pos) => (
                <Button
                  key={`selected-${selectedIndices[pos]}-${pos}`}
                  type="button"
                  variant="default"
                  className="rounded-xl text-base font-headline"
                  onClick={() => onSelectedChunkClick(pos)}
                  disabled={result === "correct"}
                >
                  {chunk}
                </Button>
              ))}
            </div>
          ) : (
            <p className="text-lg font-headline text-center text-muted-foreground/50">
              タップして文を構築...
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {shuffledChunks.map((chunk, idx) => {
            const isUsed = selectedIndices.includes(idx);
            return (
              <Button
                key={`pool-${idx}`}
                type="button"
                variant={isUsed ? "ghost" : "secondary"}
                className={cn(
                  "rounded-xl text-base font-headline transition-all",
                  isUsed && "opacity-30 pointer-events-none"
                )}
                onClick={() => onPoolChunkClick(idx)}
                disabled={isUsed || result === "correct"}
              >
                {chunk}
              </Button>
            );
          })}
        </div>

        {result === "correct" && (
          <div className="space-y-4">
            <div className="text-center text-2xl font-headline font-bold text-emerald-600">
              ○ 正解！
            </div>
            <Button
              type="button"
              className="w-full rounded-2xl h-14 text-base font-headline"
              onClick={onNext}
            >
              {nextLabel ??
                (hasRecallStep
                  ? "次へ（ブラインド・リコール）"
                  : isLastCard
                    ? "お疲れ様でした！最初から"
                    : "次の単語へ")}
            </Button>
          </div>
        )}

        {result === "wrong" && (
          <div className="space-y-4">
            <div className="text-center text-2xl font-headline font-bold text-rose-600">
              × 順序が違います
            </div>
            <p className="text-center text-xs text-muted-foreground font-body">
              解答のチャンクをタップして選び直せます
            </p>
            <Button variant="ghost" className="w-full rounded-full" onClick={onRetry}>
              すべてリセットして並べ替える
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export const ReorderStep = memo(ReorderStepComponent);
