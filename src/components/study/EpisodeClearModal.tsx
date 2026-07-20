"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { EpisodeClearScreenData } from "@/data/storyMode/clearScreen";

export interface EpisodeClearModalProps {
  open: boolean;
  data: EpisodeClearScreenData;
  onNextEpisode: () => void;
  onBackToList: () => void;
}

export function EpisodeClearModal({
  open,
  data,
  onNextEpisode,
  onBackToList,
}: EpisodeClearModalProps) {
  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent
        className="max-w-lg w-[calc(100%-2rem)] rounded-3xl border-none bg-gradient-to-br from-cyan-50 via-white to-amber-50 p-0 overflow-hidden shadow-2xl [&>button]:hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="bg-gradient-to-r from-cyan-600 to-teal-500 px-6 py-8 text-center text-white">
          <p className="text-sm font-body tracking-widest opacity-90 mb-1">恭喜完成！</p>
          <DialogTitle className="text-2xl sm:text-3xl font-headline font-bold text-white">
            第{data.episodeNumber}話 クリア！
          </DialogTitle>
          <DialogDescription className="text-cyan-50/90 font-body text-sm mt-2">
            {data.episodeTitle}
          </DialogDescription>
        </div>

        <div className="px-6 py-6 space-y-5">
          <div className="space-y-2">
            <p className="text-xs font-headline font-bold uppercase tracking-wider text-muted-foreground">
              この話の振り返り
            </p>
            <p className="text-sm leading-relaxed font-body text-slate-800">{data.synopsis}</p>
          </div>

          {data.isFinalEpisode ? (
            <div className="rounded-2xl bg-amber-50 border border-amber-200/60 px-4 py-4 space-y-2">
              <p className="text-xs font-headline font-bold text-amber-800">全12話コンプリート！</p>
              <p className="text-sm font-body text-amber-900/90 leading-relaxed">
                隆志と阿倫の旅は完結しました。お疲れ様でした！他のエピソードも復習して、台湾華語を磨き続けましょう。
              </p>
            </div>
          ) : (
            <div className="rounded-2xl bg-cyan-50/80 border border-cyan-200/50 px-4 py-4 space-y-2">
              <p className="text-xs font-headline font-bold text-cyan-800">
                次回予告 — 第{data.nextEpisodeNumber}話
                {data.nextEpisodeTitle ? `「${data.nextEpisodeTitle}」` : ""}
              </p>
              <p className="text-sm font-body text-cyan-950/90 leading-relaxed italic">
                {data.nextEpisodeTeaser}
              </p>
            </div>
          )}

          <div className="flex flex-col gap-3 pt-2">
            {!data.isFinalEpisode && (
              <Button
                type="button"
                className="w-full rounded-2xl h-12 text-base font-headline bg-cyan-600 hover:bg-cyan-700"
                onClick={onNextEpisode}
              >
                次のエピソードへ進む →
              </Button>
            )}
            <Button
              type="button"
              variant="outline"
              className="w-full rounded-2xl h-12 text-base font-headline"
              onClick={onBackToList}
            >
              {data.isFinalEpisode ? "一覧に戻る" : "エピソード一覧に戻る"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
