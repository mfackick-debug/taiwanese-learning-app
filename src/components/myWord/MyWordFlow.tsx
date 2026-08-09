"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, PenLine, Sparkles, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AudioButton } from "@/components/AudioButton";
import type { GeneratedExample, WritingCorrection } from "@/types/myWord";

export function MyWordFlow() {
  const [targetWord, setTargetWord] = useState("");
  const [example, setExample] = useState<GeneratedExample | null>(null);
  const [userText, setUserText] = useState("");
  const [correction, setCorrection] = useState<WritingCorrection | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCorrecting, setIsCorrecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    const word = targetWord.trim();
    if (!word || isGenerating) return;
    setIsGenerating(true);
    setError(null);
    setCorrection(null);

    try {
      const res = await fetch("/api/generate-example", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetWord: word }),
      });
      if (!res.ok) {
        const details = await res.text().catch(() => "");
        throw new Error(details || `HTTP ${res.status}`);
      }
      const data = (await res.json()) as GeneratedExample;
      setExample(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "例文の生成に失敗しました");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCorrect = async () => {
    if (!example || !userText.trim() || isCorrecting) return;
    setIsCorrecting(true);
    setError(null);

    try {
      const res = await fetch("/api/correct-writing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          targetWord: example.targetWord,
          userText: userText.trim(),
          modelSentence: example.sentence,
        }),
      });
      if (!res.ok) {
        const details = await res.text().catch(() => "");
        throw new Error(details || `HTTP ${res.status}`);
      }
      const data = (await res.json()) as WritingCorrection;
      setCorrection(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "添削に失敗しました");
    } finally {
      setIsCorrecting(false);
    }
  };

  return (
    <main className="min-h-dvh bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 pb-24">
      <div className="w-full max-w-2xl mx-auto px-4 pt-4 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <Button variant="ghost" className="rounded-full font-headline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-1 h-4 w-4" />
              モード選択
            </Link>
          </Button>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-headline font-bold text-slate-900 flex items-center justify-center gap-2">
            <PenLine className="h-6 w-6 text-teal-600" />
            マイ単語（カスタム学習）
          </h1>
          <p className="text-sm text-muted-foreground font-body">
            好きな語から例文を作り、自分の作文を台湾華語に添削する
          </p>
        </div>

        <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
          <CardHeader className="pb-2">
            <CardTitle className="font-headline text-lg flex items-center gap-2">
              <Wand2 className="h-5 w-5 text-teal-600" />
              1. ターゲット単語
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input
              value={targetWord}
              onChange={(e) => setTargetWord(e.target.value)}
              placeholder="例：考慮、難免、既然…"
              className="rounded-2xl h-12 font-body text-base"
              disabled={isGenerating}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  void handleGenerate();
                }
              }}
            />
            <Button
              type="button"
              className="w-full rounded-2xl h-12 font-headline bg-teal-600 hover:bg-teal-700"
              disabled={!targetWord.trim() || isGenerating}
              onClick={() => void handleGenerate()}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  例文を生成中…
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  例文を生成
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {example && (
          <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border-l-4 border-l-teal-400">
            <CardHeader className="pb-2">
              <CardTitle className="font-headline text-lg">2. 生成例文</CardTitle>
              <p className="text-xs text-muted-foreground font-body">
                キーワード:「{example.targetWord}」· TOCFL Band B 相当
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-2">
                <p className="text-xl leading-10 font-headline text-slate-900 whitespace-pre-wrap">
                  {example.sentence}
                </p>
                <p className="text-sm text-muted-foreground/70 font-body">{example.pinyin}</p>
                <p className="text-sm text-muted-foreground font-body">{example.translation}</p>
              </div>
              <div className="flex justify-center">
                <AudioButton
                  text={example.sentence}
                  size="lg"
                  className="h-14 w-14 rounded-full bg-teal-50 hover:bg-teal-100"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {example && (
          <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
            <CardHeader className="pb-2">
              <CardTitle className="font-headline text-lg">3. 作文添削</CardTitle>
              <p className="text-xs text-muted-foreground font-body">
                「{example.targetWord}」を使って、自分の文を書いてください
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={userText}
                onChange={(e) => setUserText(e.target.value)}
                placeholder="繁体字中国語で書いてください（日本語混じりでもOK）…"
                className="min-h-[120px] rounded-2xl text-base font-body resize-y"
                disabled={isCorrecting}
              />
              <Button
                type="button"
                className="w-full rounded-2xl h-12 font-headline"
                disabled={!userText.trim() || isCorrecting}
                onClick={() => void handleCorrect()}
              >
                {isCorrecting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    添削中…
                  </>
                ) : (
                  "添削する"
                )}
              </Button>

              {correction && (
                <div className="space-y-3 pt-2 border-t">
                  <div className="rounded-2xl bg-amber-50/80 p-4 space-y-1">
                    <p className="text-xs font-headline font-bold text-amber-800">文法チェック</p>
                    <p className="text-sm font-body text-slate-800 whitespace-pre-wrap">
                      {correction.grammarCheck}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-emerald-50/80 p-4 space-y-2">
                    <p className="text-xs font-headline font-bold text-emerald-800">
                      より自然な台湾華語
                    </p>
                    <p className="text-lg font-headline text-slate-900 whitespace-pre-wrap">
                      {correction.naturalRewrite}
                    </p>
                    <div className="flex justify-end">
                      <AudioButton text={correction.naturalRewrite} size="sm" />
                    </div>
                  </div>
                  <div className="rounded-2xl bg-sky-50/80 p-4 space-y-1">
                    <p className="text-xs font-headline font-bold text-sky-800">フィードバック</p>
                    <p className="text-sm font-body text-slate-800 whitespace-pre-wrap">
                      {correction.feedback}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {error && (
          <p className="text-sm text-destructive font-body text-center">{error}</p>
        )}
      </div>
    </main>
  );
}
