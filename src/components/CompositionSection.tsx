
"use client";

import { useState } from "react";
import { Sparkles, Info } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GrammarItem } from "@/app/lib/grammar";

interface CompositionSectionProps {
  mode: 'word' | 'triple' | 'grammar';
  level: 'A' | 'B';
  vocabularyWords?: string[];
  grammarItem?: GrammarItem;
  onFeedback?: (userSentence: string, aiFeedback: string) => void;
}

export function CompositionSection({ mode, level, vocabularyWords, grammarItem, onFeedback }: CompositionSectionProps) {
  const [sentence, setSentence] = useState("");

  const getPlaceholder = () => {
    if (mode === 'word') return `「${vocabularyWords?.[0] || '単語'}」を使って文章を作ってみましょう...`;
    if (mode === 'triple') return `「${vocabularyWords?.join('、')}」の3つをすべて使ってみましょう...`;
    if (mode === 'grammar') return `「${grammarItem?.name}」の構文を使って文章を作ってみましょう...`;
    return "文章を作ってみましょう...";
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <Sparkles className="h-5 w-5" />
          <h3 className="font-headline font-bold text-lg">
            作文練習 ({mode === 'word' ? '単語' : mode === 'triple' ? '3単語' : '文法'})
          </h3>
        </div>
        
        <div className="relative">
          <Textarea
            placeholder={getPlaceholder()}
            className="min-h-[140px] p-4 text-lg border-2 border-primary/20 focus:border-primary rounded-2xl resize-none bg-white/50"
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
          />
        </div>
      </div>

      {sentence.trim().length > 0 && (
        <Card className="border-none bg-primary/5 shadow-inner">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-headline flex items-center gap-2 text-primary">
              <Info className="h-4 w-4" />
              メモ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm font-body text-foreground/90 whitespace-pre-wrap leading-relaxed">
              {sentence}
            </div>
          </CardContent>
        </Card>
      )}

      {sentence.trim().length === 0 && (
        <Alert variant="default" className="bg-secondary/30 border-none">
          <Info className="h-4 w-4" />
          <AlertTitle className="font-headline text-sm font-bold">トレーニング目標</AlertTitle>
          <AlertDescription className="text-xs text-muted-foreground font-body">
            {mode === 'word' && "単語の正しい語順と用法を意識しましょう。"}
            {mode === 'triple' && "3つの単語を論理的に繋げて、1つのまとまった文章を完成させてください。"}
            {mode === 'grammar' && "文法項目の構造を崩さずに、自分自身の状況に合わせた文章を作ってみましょう。"}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
