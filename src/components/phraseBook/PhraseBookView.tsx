"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bookmark, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { countPhraseBookByCategory } from "@/data/phraseBook";
import { usePhraseBook } from "@/hooks/usePhraseBook";
import { toast } from "@/hooks/use-toast";
import type { PhraseBookEntry } from "@/types/contextBuilder";
import { downloadPhraseBookCsv } from "@/utils/exportPhraseBookCsv";
import {
  PRACTICE_CATEGORIES,
  getPracticeCategoryMeta,
  type PracticeCategory,
} from "@/types/practiceCategory";

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

function PhraseCard({
  entry,
  onDelete,
}: {
  entry: PhraseBookEntry;
  onDelete: (id: string) => void;
}) {
  const meta = getPracticeCategoryMeta(entry.category);
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="border-none bg-white/90 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden">
      <CardHeader className="pb-2 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className={cn("font-body border text-xs", meta.badgeClass)}>
            {entry.themeLabelJa ?? meta.labelJa}
          </Badge>
          <span className="text-[10px] text-muted-foreground font-body">{formatDate(entry.createdAt)}</span>
        </div>
        <CardTitle className="font-headline text-base leading-relaxed text-slate-900">
          {entry.polishedText}
        </CardTitle>
        {entry.pinyin && (
          <p className="text-xs text-emerald-700 font-body tracking-wide">{entry.pinyin}</p>
        )}
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        <div className="rounded-xl bg-slate-50 p-3 text-xs font-body space-y-1">
          {entry.themeLabelJa ? (
            <>
              <p>
                <span className="text-muted-foreground">テーマ:</span> {entry.themeLabelJa}
              </p>
              {(entry.promptQuestion || entry.skeletonText) && (
                <p>
                  <span className="text-muted-foreground">質問:</span> {entry.promptQuestion || entry.skeletonText}
                </p>
              )}
            </>
          ) : (
            <>
              <p>
                <span className="text-muted-foreground">骨組み:</span> {entry.skeletonText}
              </p>
              <p>
                <span className="text-muted-foreground">キーワード:</span> {entry.targetWord}
              </p>
            </>
          )}
        </div>

        {entry.explanation && (
          <div className="rounded-xl bg-emerald-50/80 p-3 text-xs font-body">
            <p className="text-[10px] font-headline font-bold text-emerald-800 mb-1">添削の理由</p>
            <p className="text-slate-700 leading-relaxed">{entry.explanation}</p>
          </div>
        )}

        <button
          type="button"
          className="text-xs text-primary font-headline hover:underline"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "詳細を閉じる" : "詳細を見る（初稿・会話）"}
        </button>

        {expanded && (
          <div className="space-y-2 text-sm font-body">
            {entry.promptHintJa && (
              <p className="text-xs text-cyan-800 bg-cyan-50 rounded-lg p-2">{entry.promptHintJa}</p>
            )}
            <div className="rounded-lg bg-sky-50 p-3">
              <p className="text-[10px] font-headline font-bold text-sky-700 mb-1">初稿</p>
              <p className="whitespace-pre-wrap">{entry.userDraft}</p>
            </div>
            {(entry.nextQuestion ?? entry.followUpQuestion) && (
              <div className="rounded-lg bg-violet-50 p-3">
                <p className="text-[10px] font-headline font-bold text-violet-700 mb-1">最後の質問</p>
                <p>{entry.nextQuestion ?? entry.followUpQuestion}</p>
              </div>
            )}
            {entry.conversation && entry.conversation.length > 0 && (
              <div className="rounded-lg border p-3 space-y-2 max-h-48 overflow-y-auto">
                <p className="text-[10px] font-headline font-bold text-muted-foreground">会話履歴</p>
                {entry.conversation.map((turn, i) => (
                  <p
                    key={i}
                    className={cn(
                      "text-xs whitespace-pre-wrap",
                      turn.role === "user" ? "text-sky-800" : "text-slate-700"
                    )}
                  >
                    <span className="font-bold">{turn.role === "user" ? "あなた" : "AI"}:</span>{" "}
                    {turn.text}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="rounded-full text-destructive hover:text-destructive font-headline"
          onClick={() => onDelete(entry.id)}
        >
          <Trash2 className="mr-1 h-3 w-3" />
          削除
        </Button>
      </CardContent>
    </Card>
  );
}

export function PhraseBookView() {
  const { entries, removeEntry } = usePhraseBook();
  const [filter, setFilter] = useState<PracticeCategory | "all">("all");

  const counts = useMemo(() => countPhraseBookByCategory(entries), [entries]);

  const filtered = useMemo(
    () => (filter === "all" ? entries : entries.filter((e) => e.category === filter)),
    [entries, filter]
  );

  const handleDelete = (id: string) => {
    removeEntry(id);
    toast({ title: "フレーズを削除しました" });
  };

  const handleExportCsv = () => {
    if (filtered.length === 0) return;
    downloadPhraseBookCsv(filtered, filter);
    toast({
      title: "CSVをダウンロードしました",
      description: `${filtered.length} 件をエクスポートしました（Anki / Quizlet 取り込み用）`,
    });
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
          <Button variant="outline" size="sm" className="rounded-full font-headline" asChild>
            <Link href="/context-builder">テーマ会話</Link>
          </Button>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-headline font-bold text-slate-900 flex items-center justify-center gap-2">
            <Bookmark className="h-6 w-6 text-primary" />
            My Phrase Book
          </h1>
          <p className="text-sm text-muted-foreground font-body">
            テーマ会話やマイ単語で完成した「自分だけの例文」
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="rounded-full font-headline"
            disabled={filtered.length === 0}
            onClick={handleExportCsv}
          >
            <Download className="mr-2 h-4 w-4" />
            CSVエクスポート
            {filtered.length > 0 && (
              <span className="ml-1 text-muted-foreground">({filtered.length})</span>
            )}
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={cn(
              "text-xs px-3 py-1.5 rounded-full font-headline border transition-colors",
              filter === "all"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-white/60 text-muted-foreground border-transparent"
            )}
          >
            すべて ({entries.length})
          </button>
          {PRACTICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={cn(
                "text-xs px-3 py-1.5 rounded-full font-headline border transition-colors",
                filter === cat.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-white/60 text-muted-foreground border-transparent"
              )}
            >
              {cat.labelJa} ({counts[cat.id]})
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <Card className="border-none bg-white/80 rounded-3xl shadow-xl">
            <CardContent className="py-12 text-center space-y-4">
              <p className="text-muted-foreground font-body text-sm">
                {entries.length === 0
                  ? "まだ保存したフレーズがありません。"
                  : "このカテゴリにはフレーズがありません。"}
              </p>
              <Button className="rounded-2xl font-headline" asChild>
                <Link href="/context-builder">テーマ会話で書く</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {filtered.map((entry) => (
              <PhraseCard key={entry.id} entry={entry} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
