"use client";

import { useCallback, useEffect, useState } from "react";
import { Loader2, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { playTts, stopTts } from "@/components/AudioButton";

interface WebSpeechPlayButtonProps {
  text: string;
  className?: string;
  /** 再生中の見た目（色） */
  activeClassName?: string;
}

export function WebSpeechPlayButton({
  text,
  className,
  activeClassName,
}: WebSpeechPlayButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => stopTts();
  }, []);

  const handlePlay = useCallback(async () => {
    if (isPlaying) {
      stopTts();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    try {
      await playTts(text, { waitUntilEnd: true });
    } finally {
      setIsPlaying(false);
    }
  }, [isPlaying, text]);

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(
        "h-7 w-7 shrink-0 rounded-full",
        isPlaying ? activeClassName ?? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary",
        className
      )}
      onClick={handlePlay}
      title="台湾華語で読み上げ"
      aria-label="読み上げ"
    >
      {isPlaying ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : (
        <Volume2 className="h-3.5 w-3.5" />
      )}
    </Button>
  );
}
