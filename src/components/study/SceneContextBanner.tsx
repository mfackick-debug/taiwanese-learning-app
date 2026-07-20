"use client";

export interface SceneContextBannerProps {
  context: string;
}

export function SceneContextBanner({ context }: SceneContextBannerProps) {
  return (
    <div
      className="rounded-2xl border border-stone-200/80 bg-gradient-to-r from-stone-50/95 via-amber-50/60 to-stone-50/95 px-4 py-3 shadow-sm"
      role="note"
      aria-label="シーン背景"
    >
      <p className="text-[11px] font-headline font-bold tracking-wide text-stone-500 uppercase mb-1.5">
        🎬 状況
      </p>
      <p className="text-sm leading-relaxed font-body text-stone-700">{context}</p>
    </div>
  );
}
