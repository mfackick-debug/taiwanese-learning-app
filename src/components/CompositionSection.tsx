
"use client";

import { useState } from "react";
import { Sparkles, Send, Loader2, Info } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { aiSentenceFeedback } from "@/ai/flows/ai-sentence-feedback";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface CompositionSectionProps {
  vocabularyWord: string;
}

export function CompositionSection({ vocabularyWord }: CompositionSectionProps) {
  const [sentence, setSentence] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleCheck = async () => {
    if (!sentence.trim()) return;
    
    setIsChecking(true);
    setFeedback(null);
    try {
      const result = await aiSentenceFeedback({
        sentence,
        vocabularyWord,
      });
      setFeedback(result.feedback);
    } catch (error) {
      console.error("AI Feedback failed", error);
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <Sparkles className="h-5 w-5" />
          <h3 className="font-headline font-bold text-lg">作文練習 / Composition Practice</h3>
        </div>
        
        <div className="relative">
          <Textarea
            placeholder={`「${vocabularyWord}」を使って文章を作ってみましょう...`}
            className="min-h-[120px] p-4 text-lg border-2 border-primary/20 focus:border-primary rounded-xl resize-none bg-white/50"
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
          />
          <div className="absolute bottom-3 right-3">
            <Button
              onClick={handleCheck}
              disabled={isChecking || !sentence.trim()}
              className="rounded-full shadow-md bg-accent hover:bg-accent/90"
            >
              {isChecking ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Send className="h-4 w-4 mr-2" />
              )}
              AIでチェック
            </Button>
          </div>
        </div>
      </div>

      {feedback && (
        <Card className="border-none bg-primary/5 shadow-inner">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-headline flex items-center gap-2 text-primary">
              <Info className="h-4 w-4" />
              AI講師のフィードバック
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm font-body text-foreground/90 whitespace-pre-wrap leading-relaxed">
              {feedback}
            </div>
          </CardContent>
        </Card>
      )}

      {!feedback && !isChecking && (
        <Alert variant="default" className="bg-secondary/30 border-none">
          <Info className="h-4 w-4" />
          <AlertTitle className="font-headline text-sm font-bold">ヒント</AlertTitle>
          <AlertDescription className="text-xs text-muted-foreground font-body">
            短い文章から始めてみましょう。文法が正しくなくてもAIが丁寧に修正してくれます。
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
