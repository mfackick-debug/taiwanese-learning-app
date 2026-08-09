"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bookmark, PenLine, Sparkles } from "lucide-react";

export interface ModeSelectScreenProps {
  onSelectDrill: () => void;
  onSelectStory: () => void;
}

export function ModeSelectScreen({ onSelectDrill, onSelectStory }: ModeSelectScreenProps) {
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

        <div className="grid gap-4 sm:grid-cols-2">
          <Card
            className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
            onClick={onSelectDrill}
          >
            <CardHeader>
              <CardTitle className="font-headline text-lg">実践ドリル</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground font-body">
                生活・日常から社会・職場まで。シャドーイング、語彙、並べ替え、（オプション）リコールの4ステップで定着させます。
              </p>
              <Button type="button" className="w-full rounded-2xl font-headline">
                ドリルを始める
              </Button>
            </CardContent>
          </Card>

          <Card
            className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl cursor-pointer hover:shadow-2xl transition-shadow border-2 border-cyan-200/60"
            onClick={onSelectStory}
          >
            <CardHeader>
              <CardTitle className="font-headline text-lg">
                ストーリーモード
              </CardTitle>
              <p className="text-xs text-cyan-700 font-body">ドラマで学ぶ</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground font-body">
                全体リスニング→全文音読→個別問題のトップダウン学習。隆志と阿倫の12話ドラマ（全60シーン）。
              </p>
              <Button
                type="button"
                variant="secondary"
                className="w-full rounded-2xl font-headline bg-cyan-600 text-white hover:bg-cyan-700"
              >
                ストーリーを選ぶ
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-teal-200/60">
          <CardHeader>
            <CardTitle className="font-headline text-lg flex items-center gap-2">
              <PenLine className="h-5 w-5 text-teal-600" />
              マイ単語（カスタム学習）
            </CardTitle>
            <p className="text-xs text-teal-700 font-body">任意の語 → 例文生成 → 作文添削</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground font-body">
              覚えたい単語を入力すると Band B 相当の例文を生成。その語を使った作文を AI が台湾華語に添削します。
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

        <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-violet-200/60">
          <CardHeader>
            <CardTitle className="font-headline text-lg flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-violet-600" />
              Context Re-builder
            </CardTitle>
            <p className="text-xs text-violet-700 font-body">4シチュエーション · アウトプット型</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground font-body">
              生活・職場・メディア・深い対話の4カテゴリから例文を選び、骨組みを奪って自分のエピソードを繁体字中国語で書く。AI添削付き。
            </p>
            <Button
              type="button"
              variant="secondary"
              className="w-full rounded-2xl font-headline bg-violet-600 text-white hover:bg-violet-700"
              asChild
            >
              <Link href="/context-builder">リビルダーを始める</Link>
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
              Context Re-builder で完成したフレーズをカテゴリ別に保存・復習。localStorage に端末内保存されます。
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
    </main>
  );
}
