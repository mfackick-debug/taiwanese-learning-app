"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bookmark,
  ChevronDown,
  ListMusic,
  PenLine,
  PlayCircle,
  Timer,
  Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

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
  const questionLabel =
    typeof totalQuestionCount === "number" ? `約 ${totalQuestionCount} 問` : "約 475 問";
  const [diffOpen, setDiffOpen] = useState(false);

  return (
    <main className="min-h-dvh bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 px-4 py-10 sm:py-12">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        {/* 1. ヒーロー */}
        <section className="text-center space-y-4 pt-2">
          <h1 className="text-3xl sm:text-4xl font-headline font-bold text-slate-900 tracking-tight">
            Formosan Wordsmith
          </h1>
          <p className="text-base sm:text-lg text-slate-800 font-body leading-relaxed max-w-lg mx-auto">
            聞いて真似し、並べ替えて組み立て、自分の言葉で出す。
            <span className="whitespace-nowrap font-headline font-bold text-sky-800">
              {" "}
              {questionLabel}
            </span>
            。
          </p>
          <p className="text-sm text-muted-foreground font-body">
            台湾で通じる繁体字の華語を、実生活の場面で鍛える
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-white/90 px-3 py-1 text-[11px] font-headline text-sky-900">
              目安：初級〜中級（TOCFL A2〜B1 相当を中心）
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-body text-slate-600">
              試験対策専用ではありません
            </span>
          </div>

          <div className="pt-2 space-y-3">
            {canResume ? (
              <>
                <Button
                  type="button"
                  className="w-full max-w-md mx-auto h-14 rounded-2xl text-base font-headline shadow-md"
                  onClick={onResumeDrill}
                >
                  続きから再開
                </Button>
                <p className="text-xs text-sky-800 font-body">
                  保存中：<span className="font-headline font-bold">{resumeLabel}</span>
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-headline">
                  <button
                    type="button"
                    className="text-sky-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                    onClick={onStartDrill}
                  >
                    最初からシャドーイングで始める
                  </button>
                  <Link
                    href="/playlist"
                    className="text-sky-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                  >
                    例文プレイリスト
                  </Link>
                  <a
                    href="#features"
                    className="text-muted-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                  >
                    機能一覧を見る
                  </a>
                  {onResetProgress && (
                    <button
                      type="button"
                      className="text-muted-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                      onClick={onResetProgress}
                    >
                      進行をリセット
                    </button>
                  )}
                </div>
              </>
            ) : (
              <>
                <Button
                  type="button"
                  className="w-full max-w-md mx-auto h-14 rounded-2xl text-base font-headline shadow-md"
                  onClick={onStartDrill}
                >
                  まずはシャドーイングから始める
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full max-w-md mx-auto h-12 rounded-2xl font-headline border-sky-200"
                  asChild
                >
                  <Link href="/playlist">
                    <ListMusic className="mr-2 h-4 w-4" />
                    例文プレイリストを聞く
                  </Link>
                </Button>
                <a
                  href="#features"
                  className="inline-block text-sm font-headline text-muted-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                >
                  機能一覧を見る
                </a>
              </>
            )}
          </div>
        </section>

        {/* 2. 台湾華語の独自性 */}
        <section className="rounded-3xl bg-white/90 border border-cyan-100 shadow-md p-5 sm:p-6 space-y-3">
          <h2 className="text-lg font-headline font-bold text-slate-900">
            普通話ではなく、台湾で通じる華語を学ぶ
          </h2>
          <ul className="space-y-2 text-sm font-body text-slate-700">
            <li className="flex gap-2">
              <span className="text-cyan-600 font-headline shrink-0">・</span>
              <span>教材・表示はすべて繁体字</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-600 font-headline shrink-0">・</span>
              <span>
                台湾の実生活語を優先（例：
                <span className="font-headline">捷運</span>、
                <span className="font-headline">超商</span>、
                <span className="font-headline">便當</span>、
                <span className="font-headline">悠遊卡</span>、
                <span className="font-headline">計程車</span>）
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-600 font-headline shrink-0">・</span>
              <span>大陸の普通話・簡体字とは、語彙と表記が異なる前提で設計</span>
            </li>
          </ul>

          <Collapsible open={diffOpen} onOpenChange={setDiffOpen}>
            <CollapsibleTrigger
              className={cn(
                "flex items-center gap-1 text-xs font-headline text-cyan-800 hover:text-cyan-950",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded",
              )}
            >
              詳しく
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform", diffOpen && "rotate-180")}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-2 text-xs font-body text-slate-600 leading-relaxed space-y-1.5">
              <p>
                同じ「中国語」でも、台湾では繁体字が標準で、日常語も大陸とずれることがよくあります（地下鉄→捷運、コンビニ→超商、など）。
              </p>
              <p>
                このアプリは、台湾での生活・職場・会話を想定した例文と添削に寄せています。大陸向け普通話教材の置き換えではありません。
              </p>
            </CollapsibleContent>
          </Collapsible>
        </section>

        {/* 3–4. 4技能 + アウトプット */}
        <section id="features" className="space-y-4 scroll-mt-6">
          <div className="space-y-1">
            <h2 className="text-lg font-headline font-bold text-slate-900">メイン学習：実践ドリル</h2>
            <p className="text-sm text-muted-foreground font-body">
              シャドーイング → つなぎ語 → 並べ替え → 骨組み発話。日常〜社会の例文とストーリー転用を含む{" "}
              {questionLabel}。
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "シャドーイング",
                can: "例文を聞いて口に出す",
                forWhom: "発音とリズムを掴みたい人",
              },
              {
                title: "つなぎ語",
                can: "因為・所以・可是 などで文をつなぐ",
                forWhom: "単語は出るが文にできない人",
              },
              {
                title: "並べ替え",
                can: "チャンクを並べて文を組み立てる",
                forWhom: "語順を体で覚えたい人",
              },
              {
                title: "骨組み発話",
                can: "キーワードからつなぎを自分で入れて言う",
                forWhom: "ネイティブ前で詰まりやすい人",
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl bg-white/80 border border-sky-100/80 px-4 py-3 space-y-1"
              >
                <p className="text-sm font-headline font-bold text-sky-900">{skill.title}</p>
                <p className="text-xs font-body text-slate-700">{skill.can}</p>
                <p className="text-[11px] font-body text-muted-foreground">向いている人：{skill.forWhom}</p>
              </div>
            ))}
          </div>

          {!canResume && (
            <Button
              type="button"
              variant="outline"
              className="w-full rounded-2xl h-11 font-headline border-sky-200"
              onClick={onStartDrill}
            >
              <PlayCircle className="mr-2 h-4 w-4" />
              ドリルを始める
            </Button>
          )}

          <Card className="border border-sky-100/80 bg-white/80 rounded-2xl shadow-sm">
            <CardHeader className="pb-2 space-y-1">
              <CardTitle className="font-headline text-base flex items-center gap-2">
                <ListMusic className="h-4 w-4 text-sky-600" />
                例文プレイリスト
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              <p className="text-xs font-body text-slate-700">
                完成した例文だけを、レベル・テーマを1本にまとめて教材順で再生
              </p>
              <p className="text-[11px] font-body text-muted-foreground">
                単語カード・並べ替え断片・リコール用プロンプト・フレーズ帳・AI作文は含みません
              </p>
              <Button
                type="button"
                variant="ghost"
                className="w-full rounded-xl font-headline text-sky-800 hover:bg-sky-50"
                asChild
              >
                <Link href="/playlist">プレイリストを開く</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* アウトプット導線 */}
        <section className="space-y-3">
          <h2 className="text-lg font-headline font-bold text-slate-900">咄嗟に出す・書いて定着</h2>

          <Card className="border border-violet-100/80 bg-white/80 rounded-2xl shadow-sm">
            <CardHeader className="pb-2 space-y-1">
              <CardTitle className="font-headline text-base flex items-center gap-2">
                <Timer className="h-4 w-4 text-violet-600" />
                15秒応答
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              <p className="text-xs font-body text-slate-700">
                場面を見て15秒で一言。つなぎ語込みの即答回路を作る（旧テーマ会話の進化版）
              </p>
              <p className="text-[11px] font-body text-muted-foreground">
                向いている人：ネイティブの前で言葉が出てこない人
              </p>
              <Button
                type="button"
                variant="ghost"
                className="w-full rounded-xl font-headline text-violet-900 hover:bg-violet-50"
                asChild
              >
                <Link href="/quick-response">15秒応答を始める</Link>
              </Button>
            </CardContent>
          </Card>

          <div className="grid gap-3 sm:grid-cols-2">
            <Card className="border border-teal-100/80 bg-white/75 rounded-2xl shadow-sm">
              <CardHeader className="pb-2 space-y-1">
                <CardTitle className="font-headline text-base flex items-center gap-2">
                  <PenLine className="h-4 w-4 text-teal-600" />
                  マイ単語
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <p className="text-xs font-body text-slate-700">任意の語から例文生成・作文添削</p>
                <p className="text-[11px] font-body text-muted-foreground">
                  向いている人：自分の単語を台湾華語で使える形にしたい人
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full rounded-xl font-headline text-teal-800 hover:bg-teal-50"
                  asChild
                >
                  <Link href="/my-word">マイ単語を開く</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-amber-100/80 bg-white/75 rounded-2xl shadow-sm">
              <CardHeader className="pb-2 space-y-1">
                <CardTitle className="font-headline text-base flex items-center gap-2">
                  <Bookmark className="h-4 w-4 text-amber-600" />
                  My Phrase Book
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <p className="text-xs font-body text-slate-700">保存フレーズの復習・CSVエクスポート</p>
                <p className="text-[11px] font-body text-muted-foreground">
                  向いている人：自分だけの例文集を作りたい人
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full rounded-xl font-headline text-amber-900 hover:bg-amber-50"
                  asChild
                >
                  <Link href="/phrase-book">フレーズ帳を開く</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 5. 音声 */}
        <section className="rounded-3xl bg-white/90 border border-sky-100 shadow-sm p-5 space-y-2">
          <h2 className="text-base font-headline font-bold text-slate-900 flex items-center gap-2">
            <Volume2 className="h-4 w-4 text-sky-600" />
            音声について
          </h2>
          <ul className="space-y-1.5 text-sm font-body text-slate-700">
            <li>・例文・単語は再生ボタンで聞けます（録音音声ではなく合成音声）</li>
            <li>
              ・主に Microsoft Edge TTS の台湾華語女性声（曉臻）。失敗時は端末の zh-TW
              読み上げに切り替え
            </li>
            <li>・学習向けにやや遅めの速度で配信。新しい再生で直前の音声は停止します</li>
          </ul>
          <p className="text-[11px] text-muted-foreground font-body">
            ユーザー向けの速度スライダーはありません。台湾華語寄りの読み上げを優先しています。
          </p>
        </section>

        {/* 6. 技術・安心 */}
        <section className="rounded-2xl border border-slate-200/80 bg-white/60 px-4 py-4 space-y-2">
          <h2 className="text-sm font-headline font-bold text-slate-800">保存・対応環境</h2>
          <ul className="space-y-1.5 text-xs font-body text-slate-600 leading-relaxed">
            <li>・スマホブラウザ対応（Vercel で公開）。アプリインストール不要</li>
            <li>
              ・ドリル進行とフレーズ帳は端末の localStorage に保存（アカウント同期なし）
            </li>
            <li>
              ・オフライン：保存済みの進捗は端末に残ります。音声生成・AI添削・例文生成にはネット接続が必要です
            </li>
          </ul>
        </section>

        {/* 7. フッター */}
        <footer className="text-center pb-6 space-y-1">
          <p className="text-[11px] font-body text-muted-foreground">
            Formosan Wordsmith — 台湾華語（繁体字）の実生活表現
          </p>
          <p className="text-[10px] font-body text-muted-foreground/80">
            大陸普通話・簡体字向けの教材ではありません
          </p>
        </footer>
      </div>
    </main>
  );
}
