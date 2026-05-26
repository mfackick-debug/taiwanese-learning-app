"use client";

import { useRef, useState } from "react";
import { Loader2, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const audioCache: Record<string, string> = {};

let globalAudio: HTMLAudioElement | null = null;

export function stopTts() {
  if (globalAudio) {
    globalAudio.pause();
    globalAudio.currentTime = 0;
    globalAudio = null;
  }
}

export async function prefetchTts(text: string) {
  const cachedUrl = audioCache[text];
  if (cachedUrl) return;

  try {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!res.ok) return;
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    audioCache[text] = url;
  } catch {
    // ignore
  }
}

/**
 * Check if text has been cached (return cached blob URL, or null)
 */
export function getCachedAudioUrl(text: string): string | null {
  return audioCache[text] ?? null;
}

/**
 * Get raw audio blob data from cache (re-fetches if not cached yet).
 * Returns [blob, url] so caller can use both.
 */
export async function getAudioBlob(text: string): Promise<{ blob: Blob; url: string } | null> {
  const cached = audioCache[text];
  if (cached) {
    const res = await fetch(cached);
    const blob = await res.blob();
    return { blob, url: cached };
  }

  // Not cached yet – fetch it
  try {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    if (!res.ok) return null;
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    audioCache[text] = url;
    return { blob, url };
  } catch {
    return null;
  }
}

export async function playTts(text: string) {
  stopTts();

  const cachedUrl = audioCache[text];
  if (cachedUrl) {
    try {
      const audio = new Audio(cachedUrl);
      globalAudio = audio;
      audio.onended = () => {
        stopTts();
      };
      audio.onerror = () => {
        stopTts();
      };
      await audio.play();
    } catch (err) {
      console.error("playTts cached audio error:", err);
      stopTts();
    }
    return;
  }

  try {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!res.ok) {
      const details = await res.text().catch(() => "");
      throw new Error(`TTS request failed: ${res.status} ${details}`);
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    audioCache[text] = url;

    const audio = new Audio(url);
    globalAudio = audio;
    audio.onended = () => {
      stopTts();
    };
    audio.onerror = () => {
      stopTts();
    };
    await audio.play();
  } catch (err) {
    console.error("playTts TTS error:", err);
    stopTts();
  }
}

interface AudioButtonProps {
  text: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  onPlay?: () => void;
}

export function AudioButton({ text, className, size = "icon", onPlay }: AudioButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const isLoadingRef = useRef(false);

  const play = async () => {
    if (isLoadingRef.current) return;
    isLoadingRef.current = true;
    setIsLoading(true);
    try {
      await playTts(text);
      onPlay?.();
    } finally {
      isLoadingRef.current = false;
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={play}
      className={cn("text-primary hover:bg-primary/10 transition-colors", className)}
      title="発音を聞く (台湾華語・女性優先)"
    >
      {isLoading ? (
        <Loader2 className={cn("animate-spin", size === "icon" ? "h-5 w-5" : "mr-2 h-4 w-4")} />
      ) : (
        <Volume2 className={size === "icon" ? "h-5 w-5" : "mr-2 h-4 w-4"} />
      )}
      {size !== "icon" && "再生"}
    </Button>
  );
}