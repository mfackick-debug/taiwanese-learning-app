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
  selectedChunks: string[];
  result: QuizResult;
  isLastCard: boolean;
  hasRecallStep?: boolean;
  onChunkClick: (chunk: string) => void;
  onRetry: () => void;
  onNext: () => void;
  nextLabel?: string;
}

function ReorderStepComponent({
  card,
  shuffledChunks,
  selectedChunks,
  result,
  isLastCard,
  hasRecallStep = false,
  onChunkClick,
  onRetry,
  onNext,
  nextLabel,
}: ReorderStepProps) {
  if (card.chunks.length < 2) return null;

  return (
    <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
      <CardHeader className="space-y-2">
        <CardTitle className="font-headline text-lg">Step3：並べ替え</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-sm text-muted-foreground font-body text-center">
          チャンクをタップして正しい順序に並べ替えてください
        </div>

        <div className="min-h-[60px] p-4 bg-secondary/20 rounded-2xl">
          <p className="text-lg font-headline text-slate-900 text-center">
            {selectedChunks.length > 0 ? (
              selectedChunks.join("")
            ) : (
              <span className="text-muted-foreground/50">タップして文を構築...</span>
            )}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {shuffledChunks.map((chunk, idx) => {
            const isUsed = selectedChunks.includes(chunk);
            return (
              <Button
                key={`${chunk}-${idx}`}
                type="button"
                variant={isUsed ? "ghost" : "secondary"}
                className={cn(
                  "rounded-xl text-base font-headline transition-all",
                  isUsed && "opacity-30 pointer-events-none"
                )}
                onClick={() => onChunkClick(chunk)}
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
            <Button variant="ghost" className="w-full rounded-full" onClick={onRetry}>
              もう一度並べ替える
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export const ReorderStep = memo(ReorderStepComponent);
