"use client";

import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { NormalizedStudyCard } from "@/types";
import type { RecallEvaluation } from "@/components/study/types";

export interface RecallStepProps {
  card: NormalizedStudyCard;
  keywords: string[];
  isRevealed: boolean;
  onReveal: () => void;
  onEvaluate: (result: RecallEvaluation) => void;
}

const EVALUATION_OPTIONS: {
  result: RecallEvaluation;
  emoji: string;
  label: string;
  sublabel: string;
  className: string;
}[] = [
  {
    result: "perfect",
    emoji: "🟢",
    label: "Perfect",
    sublabel: "つなぎも含めて言えた",
    className: "border-emerald-200 bg-emerald-50/80 hover:bg-emerald-100/80 text-emerald-900",
  },
  {
    result: "hard",
    emoji: "🟡",
    label: "Hard",
    sublabel: "単語は出たがつないで詰まった",
    className: "border-amber-200 bg-amber-50/80 hover:bg-amber-100/80 text-amber-900",
  },
  {
    result: "fail",
    emoji: "🔴",
    label: "Fail",
    sublabel: "咄嗟に文にできなかった",
    className: "border-rose-200 bg-rose-50/80 hover:bg-rose-100/80 text-rose-900",
  },
];

function RecallStepComponent({
  card,
  keywords,
  isRevealed,
  onReveal,
  onEvaluate,
}: RecallStepProps) {
  return (
    <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
      <CardHeader className="space-y-2">
        <CardTitle className="font-headline text-lg">Step4：骨組み発話</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-sm text-muted-foreground font-body text-center">
          日本語の意図とキーワードだけ見て、つなぎ語を自分で入れて一文で言ってください
        </div>

        <div className="text-center py-5 px-4 bg-secondary/20 rounded-2xl space-y-4">
          <p className="text-xl leading-relaxed font-body text-slate-900">{card.translation}</p>
          {keywords.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {keywords.map((word) => (
                <span
                  key={word}
                  className="inline-flex rounded-full border border-sky-200 bg-white/90 px-3 py-1 text-sm font-headline text-sky-900"
                >
                  {word}
                </span>
              ))}
            </div>
          )}
        </div>

        {!isRevealed ? (
          <Button
            type="button"
            className="w-full rounded-2xl h-14 text-base font-headline"
            onClick={onReveal}
          >
            言えたら解答を表示
          </Button>
        ) : (
          <div className="space-y-4">
            <div className="text-center space-y-2 p-4 bg-emerald-50/80 rounded-2xl">
              <p className="text-xs font-headline uppercase tracking-widest text-emerald-700 font-bold">
                模範の一文
              </p>
              <p className="text-xl leading-10 font-headline text-slate-900 whitespace-pre-wrap">
                {card.sentence}
              </p>
              <p className="text-sm text-muted-foreground/70 font-body">{card.pinyin}</p>
            </div>

            <p className="text-sm text-center text-muted-foreground font-body">
              自己評価を選んでください
            </p>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {EVALUATION_OPTIONS.map(({ result, emoji, label, sublabel, className }) => (
                <Button
                  key={result}
                  type="button"
                  variant="outline"
                  className={`h-auto min-h-14 flex-col gap-0.5 rounded-2xl py-3 font-headline ${className}`}
                  onClick={() => onEvaluate(result)}
                >
                  <span className="text-base">
                    {emoji} {label}
                  </span>
                  <span className="text-xs font-body font-normal opacity-80">{sublabel}</span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export const RecallStep = memo(RecallStepComponent);
