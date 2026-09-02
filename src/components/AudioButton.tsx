"use client";

import { useRef, useState } from "react";
import { Loader2, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { speakTaiwaneseFemalePreferred, stopWebSpeech } from "@/lib/speechUtils";
import { cleanseTextForTaiwanTts } from "@/utils/taiwanTtsCleanse";

const audioCache: Record<string, string> = {};

function ttsSpeechText(displayText: string): string {
  return cleanseTextForTaiwanTts(displayText);
}

let globalAudio: HTMLAudioElement | null = null;

export function stopTts() {
  if (globalAudio) {
    globalAudio.pause();
    globalAudio.currentTime = 0;
    globalAudio = null;
  }
  stopWebSpeech();
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
      body: JSON.stringify({ text: ttsSpeechText(text) }),
    });

    if (!res.ok) return;
    const blob = await res.blob();
    if (blob.size < 64) return;
    const url = URL.createObjectURL(blob);
    audioCache[text] = url;
  } catch {
    // ignore — playback can still fall back to device TTS
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

  try {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: ttsSpeechText(text) }),
    });
    if (!res.ok) return null;
    const blob = await res.blob();
    if (blob.size < 64) return null;
    const url = URL.createObjectURL(blob);
    audioCache[text] = url;
    return { blob, url };
  } catch {
    return null;
  }
}

async function playUrl(url: string, waitUntilEnd: boolean): Promise<void> {
  const audio = new Audio(url);
  globalAudio = audio;

  if (!waitUntilEnd) {
    audio.onended = () => {
      if (globalAudio === audio) globalAudio = null;
    };
    audio.onerror = () => {
      if (globalAudio === audio) globalAudio = null;
    };
    await audio.play();
    return;
  }

  await new Promise<void>((resolve, reject) => {
    audio.onended = () => {
      if (globalAudio === audio) globalAudio = null;
      resolve();
    };
    audio.onerror = () => {
      if (globalAudio === audio) globalAudio = null;
      reject(new Error("Audio playback failed"));
    };
    audio.play().catch(reject);
  });
}

function playWebSpeechFallback(text: string, waitUntilEnd: boolean): Promise<void> {
  return new Promise((resolve) => {
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    speakTaiwaneseFemalePreferred(text, {
      lang: "zh-TW",
      rate: 0.88,
      onEnd: done,
      onError: done,
    });

    if (!waitUntilEnd) {
      done();
    }
  });
}

export async function playTts(text: string, options?: { waitUntilEnd?: boolean }) {
  const waitUntilEnd = options?.waitUntilEnd ?? false;
  stopTts();

  const cachedUrl = audioCache[text];
  if (cachedUrl) {
    try {
      await playUrl(cachedUrl, waitUntilEnd);
      return;
    } catch (err) {
      console.error("playTts cached audio error:", err);
      delete audioCache[text];
    }
  }

  try {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: ttsSpeechText(text) }),
    });

    if (!res.ok) {
      const details = await res.text().catch(() => "");
      throw new Error(`TTS request failed: ${res.status} ${details}`);
    }

    const blob = await res.blob();
    if (blob.size < 64) {
      throw new Error("TTS response empty");
    }
    const url = URL.createObjectURL(blob);
    audioCache[text] = url;
    await playUrl(url, waitUntilEnd);
  } catch (err) {
    console.error("playTts Edge TTS error, falling back to zh-TW SpeechSynthesis:", err);
    try {
      await playWebSpeechFallback(text, waitUntilEnd);
    } catch (fallbackErr) {
      console.error("playTts device TTS fallback error:", fallbackErr);
    }
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
