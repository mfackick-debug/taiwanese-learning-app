
"use client";

import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AudioButtonProps {
  text: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

export function AudioButton({ text, className, size = "icon" }: AudioButtonProps) {
  const speak = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      // 既存の再生をキャンセル
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "zh-TW";
      
      // 利用可能な音声リストを取得
      const voices = window.speechSynthesis.getVoices();
      
      // 1. 台湾華語 (zh-TW) を最優先で探す
      // 2. 見つからない場合は標準中国語 (zh-CN) を探す
      // 3. 広東語 (zh-HK) は除外する
      const preferredVoice = 
        voices.find(v => v.lang === "zh-TW" || v.lang === "zh_TW") ||
        voices.find(v => v.lang.startsWith("zh-TW")) ||
        voices.find(v => v.lang.startsWith("zh-CN")) ||
        voices.find(v => v.lang.startsWith("zh"));

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      // 速度を少し調整（学習用に聞き取りやすく）
      utterance.rate = 0.9;
      
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={speak}
      className={cn("text-primary hover:bg-primary/10 transition-colors", className)}
      title="発音を聞く"
    >
      <Volume2 className={size === "icon" ? "h-5 w-5" : "mr-2 h-4 w-4"} />
      {size !== "icon" && "再生"}
    </Button>
  );
}
