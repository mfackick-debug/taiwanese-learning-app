"use client";

import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { NormalizedStudyCard } from "@/types";
import type { RecallEvaluation } from "@/components/study/types";

export interface RecallStepProps {
  card: NormalizedStudyCard;
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
    sublabel: "余裕で言えた",
    className: "border-emerald-200 bg-emerald-50/80 hover:bg-emerald-100/80 text-emerald-900",
  },
  {
    result: "hard",
    emoji: "🟡",
    label: "Hard",
    sublabel: "つっかえながら言えた",
    className: "border-amber-200 bg-amber-50/80 hover:bg-amber-100/80 text-amber-900",
  },
  {
    result: "fail",
    emoji: "🔴",
    label: "Fail",
    sublabel: "全く言えなかった",
    className: "border-rose-200 bg-rose-50/80 hover:bg-rose-100/80 text-rose-900",
  },
];

function RecallStepComponent({
  card,
  isRevealed,
  onReveal,
  onEvaluate,
}: RecallStepProps) {
  return (
    <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
      <CardHeader className="space-y-2">
        <CardTitle className="font-headline text-lg">
          Step4：ブラインド・リコール
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-sm text-muted-foreground font-body text-center">
          日本語訳を見て、声に出して中国語で言ってみましょう
        </div>

        <div className="text-center py-6 px-4 bg-secondary/20 rounded-2xl min-h-[120px] flex items-center justify-center">
          <p className="text-2xl leading-relaxed font-body text-slate-900">
            {card.translation}
          </p>
        </div>

        {!isRevealed ? (
          <Button
            type="button"
            className="w-full rounded-2xl h-14 text-base font-headline"
            onClick={onReveal}
          >
            解答を表示
          </Button>
        ) : (
          <div className="space-y-4">
            <div className="text-center space-y-2 p-4 bg-emerald-50/80 rounded-2xl">
              <p className="text-xs font-headline uppercase tracking-widest text-emerald-700 font-bold">
                正解
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
