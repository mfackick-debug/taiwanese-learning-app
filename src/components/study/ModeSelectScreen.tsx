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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export interface ModeSelectScreenProps {
  onStartDrill: () => void;
  onResumeDrill?: () => void;
  onResetProgress?: () => void;
  resumeLabel?: string | null;
  totalQuestionCount?: number;
}

const MODES = [
  {
    href: "/quick-response" as const,
    icon: Timer,
    title: "15秒応答",
    hint: "場面を見て一言",
    className: "border-violet-100 hover:border-violet-300 hover:bg-violet-50/70 text-violet-900",
    iconClass: "text-violet-600",
  },
  {
    href: "/playlist" as const,
    icon: ListMusic,
    title: "プレイリスト",
    hint: "例文を連続再生",
    className: "border-sky-100 hover:border-sky-300 hover:bg-sky-50/70 text-sky-900",
    iconClass: "text-sky-600",
  },
  {
    href: "/my-word" as const,
    icon: PenLine,
    title: "マイ単語",
    hint: "例文生成・添削",
    className: "border-teal-100 hover:border-teal-300 hover:bg-teal-50/70 text-teal-900",
    iconClass: "text-teal-600",
  },
  {
    href: "/phrase-book" as const,
    icon: Bookmark,
    title: "フレーズ帳",
    hint: "保存した文を復習",
    className: "border-amber-100 hover:border-amber-300 hover:bg-amber-50/70 text-amber-900",
    iconClass: "text-amber-600",
  },
] as const;

export function ModeSelectScreen({
  onStartDrill,
  onResumeDrill,
  onResetProgress,
  resumeLabel,
  totalQuestionCount,
}: ModeSelectScreenProps) {
  const canResume = Boolean(resumeLabel && onResumeDrill);
  const questionLabel =
    typeof totalQuestionCount === "number" ? `約 ${totalQuestionCount} 問` : "約 500 問";
  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <main className="min-h-dvh bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 px-4 py-8 sm:py-10">
      <div className="w-full max-w-lg mx-auto space-y-6">
        <header className="text-center space-y-1.5 pt-1">
          <h1 className="text-2xl sm:text-3xl font-headline font-bold text-slate-900 tracking-tight">
            Formosan Wordsmith
          </h1>
          <p className="text-sm text-muted-foreground font-body">
            台湾華語 · 繁体字 · {questionLabel}
          </p>
        </header>

        <section className="space-y-3">
          {canResume ? (
            <>
              <Button
                type="button"
                className="w-full h-14 rounded-2xl text-base font-headline shadow-md"
                onClick={onResumeDrill}
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                続きから再開
              </Button>
              <div className="flex items-center justify-between gap-3 px-1">
                <p className="text-xs text-sky-800 font-body truncate">
                  {resumeLabel}
                </p>
                <div className="flex items-center gap-3 shrink-0 text-xs font-headline">
                  <button
                    type="button"
                    className="text-sky-700 underline-offset-4 hover:underline"
                    onClick={onStartDrill}
                  >
                    最初から
                  </button>
                  {onResetProgress && (
                    <button
                      type="button"
                      className="text-muted-foreground underline-offset-4 hover:underline"
                      onClick={onResetProgress}
                    >
                      リセット
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <Button
              type="button"
              className="w-full h-14 rounded-2xl text-base font-headline shadow-md"
              onClick={onStartDrill}
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              実践ドリルを始める
            </Button>
          )}

          <p className="text-center text-[11px] text-muted-foreground font-body">
            聞く → つなぐ → 並べる → 言う
          </p>
        </section>

        <nav aria-label="学習メニュー" className="grid grid-cols-2 gap-3">
          {MODES.map((mode) => {
            const Icon = mode.icon;
            return (
              <Link
                key={mode.href}
                href={mode.href}
                className={cn(
                  "rounded-2xl border bg-white/90 px-4 py-4 shadow-sm transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400",
                  mode.className,
                )}
              >
                <Icon className={cn("h-5 w-5 mb-2", mode.iconClass)} />
                <p className="font-headline font-bold text-sm">{mode.title}</p>
                <p className="text-[11px] font-body text-muted-foreground mt-0.5">{mode.hint}</p>
              </Link>
            );
          })}
        </nav>

        <Collapsible open={guideOpen} onOpenChange={setGuideOpen}>
          <CollapsibleTrigger
            className={cn(
              "flex w-full items-center justify-center gap-1 py-2 text-sm font-headline text-slate-600",
              "hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl",
            )}
          >
            各モードの説明
            <ChevronDown className={cn("h-4 w-4 transition-transform", guideOpen && "rotate-180")} />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 pt-1">
            <div className="rounded-2xl bg-white/90 border border-sky-100 px-4 py-3 space-y-2 text-sm font-body text-slate-700">
              <p className="font-headline font-bold text-slate-900">実践ドリル</p>
              <p>シャドーイング → つなぎ語 → 並べ替え → 骨組み発話。毎日のメイン学習。</p>
              <p className="text-xs text-muted-foreground">
                単語は出るが文にできない人、ネイティブの前で詰まる人向け。
              </p>
            </div>
            <div className="rounded-2xl bg-white/90 border border-violet-100 px-4 py-3 space-y-2 text-sm font-body text-slate-700">
              <p className="font-headline font-bold text-slate-900">15秒応答</p>
              <p>買い物・交通などの場面を見て、15秒で一言。即答の回路を作る。</p>
            </div>
            <div className="rounded-2xl bg-white/90 border border-sky-100 px-4 py-3 space-y-2 text-sm font-body text-slate-700">
              <p className="font-headline font-bold text-slate-900">プレイリスト</p>
              <p>完成した例文だけを教材順で再生。耳を通したいときに使う。</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/90 border border-teal-100 px-4 py-3 space-y-1 text-sm font-body text-slate-700">
                <p className="font-headline font-bold text-slate-900">マイ単語</p>
                <p className="text-xs">自分の語から例文生成・作文添削。</p>
              </div>
              <div className="rounded-2xl bg-white/90 border border-amber-100 px-4 py-3 space-y-1 text-sm font-body text-slate-700">
                <p className="font-headline font-bold text-slate-900">フレーズ帳</p>
                <p className="text-xs">保存した文の復習とCSV書き出し。</p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 space-y-2 text-xs font-body text-slate-600">
              <p className="font-headline font-bold text-slate-800">このアプリについて</p>
              <p>教材はすべて繁体字。台湾の実生活語（捷運・超商・便當など）を優先します。</p>
              <p>音声は台湾華語の合成音声。進行とフレーズ帳は端末に保存（アカウント同期なし）。</p>
              <p>試験対策専用ではありません。目安は初級〜中級（TOCFL A2〜B1 相当）。</p>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <footer className="text-center pb-4">
          <p className="text-[11px] font-body text-muted-foreground">
            台湾華語（繁体字）の実生活表現
          </p>
        </footer>
      </div>
    </main>
  );
}
