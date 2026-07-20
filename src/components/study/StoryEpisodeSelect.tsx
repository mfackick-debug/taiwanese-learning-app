"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { STORY_EPISODES } from "@/data/storyMode";
import {
  getStoryProgressSummary,
  isEpisodeCompleted,
  isEpisodeUnlocked,
  type StoryProgress,
} from "@/data/storyMode/progress";
import { cn } from "@/lib/utils";

export interface StoryEpisodeSelectProps {
  progress: StoryProgress;
  onSelectEpisode: (episodeNumber: number) => void;
  onBack: () => void;
  onResetProgress?: () => void;
  onUnlockAll?: () => void;
}

export function StoryEpisodeSelect({
  progress,
  onSelectEpisode,
  onBack,
  onResetProgress,
  onUnlockAll,
}: StoryEpisodeSelectProps) {
  const { completedCount, totalEpisodes } = getStoryProgressSummary(progress);

  return (
    <main className="min-h-dvh bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 px-4 py-8 pb-24">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-headline font-bold">ストーリーモード</h1>
            <p className="text-sm text-muted-foreground font-body mt-1">
              隆志 × 阿倫 — 全{totalEpisodes}エピソード（各5シーン）
            </p>
            <p className="text-xs text-cyan-700 font-body mt-1">
              進捗：{completedCount} / {totalEpisodes} 話クリア
            </p>
          </div>
          <Button type="button" variant="outline" className="rounded-full" onClick={onBack}>
            戻る
          </Button>
        </div>

        <Card className="border-none bg-white/70 backdrop-blur-sm rounded-3xl">
          <CardContent className="pt-6 text-sm font-body text-muted-foreground space-y-1">
            <p>
              <span className="font-bold text-slate-800">タカシ（隆志）</span>
              ：日本のIT企業を辞め、台北で語学留学中
            </p>
            <p>
              <span className="font-bold text-slate-800">アレン（阿倫）</span>
              ：台湾人ITエンジニア、ルームメイト兼ガイド
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-3">
          {STORY_EPISODES.map((ep) => {
            const unlocked = isEpisodeUnlocked(progress, ep.episodeNumber);
            const completed = isEpisodeCompleted(progress, ep.episodeNumber);

            return (
              <Card
                key={ep.episodeNumber}
                className={cn(
                  "border-none rounded-2xl shadow-md transition-shadow",
                  unlocked
                    ? "bg-white/80 backdrop-blur-sm hover:shadow-lg cursor-pointer"
                    : "bg-muted/40 cursor-not-allowed opacity-70"
                )}
                onClick={() => {
                  if (unlocked) onSelectEpisode(ep.episodeNumber);
                }}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2 min-w-0">
                      {!unlocked && (
                        <span className="text-base shrink-0" aria-hidden>
                          🔒
                        </span>
                      )}
                      <CardTitle
                        className={cn(
                          "font-headline text-base leading-snug",
                          !unlocked && "text-muted-foreground"
                        )}
                      >
                        第{ep.episodeNumber}話：{ep.title}
                      </CardTitle>
                      {completed && (
                        <span className="inline-flex items-center gap-1 shrink-0 rounded-full bg-emerald-100 text-emerald-800 px-2.5 py-0.5 text-xs font-headline font-bold border border-emerald-200/80">
                          <span aria-hidden>⭐</span>
                          ✅ 完賽
                        </span>
                      )}
                    </div>
                    <span
                      className={cn(
                        "text-xs shrink-0 rounded-full px-2 py-0.5 font-headline",
                        unlocked ? "bg-muted" : "bg-muted/60 text-muted-foreground"
                      )}
                    >
                      5シーン
                    </span>
                  </div>
                  <p
                    className={cn(
                      "text-xs font-body",
                      unlocked ? "text-cyan-700" : "text-muted-foreground"
                    )}
                  >
                    {ep.subtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <p
                    className={cn(
                      "text-sm font-body",
                      unlocked ? "text-muted-foreground" : "text-muted-foreground/70"
                    )}
                  >
                    {!unlocked
                      ? "前の話をクリアすると解放されます。"
                      : ep.synopsis}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {(onResetProgress || onUnlockAll) && (
          <div className="pt-4 border-t border-border/30 flex flex-wrap justify-center gap-x-4 gap-y-1">
            {onUnlockAll && (
              <button
                type="button"
                className="text-[10px] text-muted-foreground/50 hover:text-muted-foreground font-body underline-offset-2 hover:underline"
                onClick={onUnlockAll}
              >
                [debug] 全話解放
              </button>
            )}
            {onResetProgress && (
              <button
                type="button"
                className="text-[10px] text-muted-foreground/50 hover:text-muted-foreground font-body underline-offset-2 hover:underline"
                onClick={onResetProgress}
              >
                [debug] 進捗リセット
              </button>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
