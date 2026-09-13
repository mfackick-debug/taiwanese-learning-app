"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bookmark, PenLine, PlayCircle, Sparkles } from "lucide-react";

export interface ModeSelectScreenProps {
  onStartDrill: () => void;
  onResumeDrill?: () => void;
  onResetProgress?: () => void;
  resumeLabel?: string | null;
  totalQuestionCount?: number;
}

export function ModeSelectScreen({
  onStartDrill,
  onResumeDrill,
  onResetProgress,
  resumeLabel,
  totalQuestionCount,
}: ModeSelectScreenProps) {
  const canResume = Boolean(resumeLabel && onResumeDrill);

  return (
    <main className="min-h-dvh bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-headline font-bold text-slate-900">
            Formosan Wordsmith
          </h1>
          <p className="text-muted-foreground font-body">
            台湾華語 — 実生活で使える表現を鍛える
          </p>
        </div>

        <Card className="border-none bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-sky-200/70">
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center gap-2">
              <PlayCircle className="h-6 w-6 text-sky-600" />
              実践ドリル
            </CardTitle>
            <p className="text-xs text-sky-700 font-body">メイン学習 · 進行保存対応</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground font-body">
              シャドーイング・語彙・並べ替え・リコールで定着。日常〜社会の例文に加え、ストーリー転用例文も含む
              {typeof totalQuestionCount === "number" ? `（約 ${totalQuestionCount} 問）` : ""}。
            </p>
            {canResume && (
              <div className="rounded-2xl bg-sky-50 border border-sky-100 p-3 space-y-2">
                <p className="text-sm font-body text-sky-900">
                  続きから再開できます：<span className="font-headline font-bold">{resumeLabel}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    type="button"
                    className="flex-1 rounded-2xl font-headline min-w-[140px]"
                    onClick={onResumeDrill}
                  >
                    続きから再開
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-2xl font-headline"
                    onClick={onResetProgress}
                  >
                    進行をリセット
                  </Button>
                </div>
              </div>
            )}
            <Button
              type="button"
              variant={canResume ? "secondary" : "default"}
              className="w-full rounded-2xl h-12 font-headline"
              onClick={onStartDrill}
            >
              {canResume ? "最初から始める" : "ドリルを始める"}
            </Button>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-teal-200/60">
            <CardHeader>
              <CardTitle className="font-headline text-lg flex items-center gap-2">
                <PenLine className="h-5 w-5 text-teal-600" />
                マイ単語
              </CardTitle>
              <p className="text-xs text-teal-700 font-body">例文生成 · 作文添削</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground font-body">
                任意の語から例文を生成し、作文を添削。完成した表現はフレーズ帳へ保存できます。
              </p>
              <Button
                type="button"
                variant="secondary"
                className="w-full rounded-2xl font-headline bg-teal-600 text-white hover:bg-teal-700"
                asChild
              >
                <Link href="/my-word">マイ単語を始める</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-amber-200/60">
            <CardHeader>
              <CardTitle className="font-headline text-lg flex items-center gap-2">
                <Bookmark className="h-5 w-5 text-amber-600" />
                My Phrase Book
              </CardTitle>
              <p className="text-xs text-amber-700 font-body">自分だけの例文集</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground font-body">
                テーマ会話やマイ単語で保存したフレーズを復習・CSVエクスポート。
              </p>
              <Button
                type="button"
                variant="secondary"
                className="w-full rounded-2xl font-headline bg-amber-600 text-white hover:bg-amber-700"
                asChild
              >
                <Link href="/phrase-book">フレーズ帳を開く</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-violet-200/60">
          <CardHeader>
            <CardTitle className="font-headline text-lg flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-violet-600" />
              テーマ会話
            </CardTitle>
            <p className="text-xs text-violet-700 font-body">質問 → 回答 → 添削</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground font-body">
              細かいテーマ、または自分で決めた話題に沿ってアプリが質問します。答えを添削してフレーズ帳に残せます。
            </p>
            <Button
              type="button"
              variant="secondary"
              className="w-full rounded-2xl font-headline bg-violet-600 text-white hover:bg-violet-700"
              asChild
            >
              <Link href="/context-builder">テーマ会話を始める</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
