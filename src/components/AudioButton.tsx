
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
      // 既存の再生を即座に停止してキューをクリア
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      
      // 基本となる言語コードを設定
      utterance.lang = "zh-TW";
      
      // 利用可能な音声リストを取得
      const voices = window.speechSynthesis.getVoices();
      
      /**
       * 1. 台湾華語（zh-TW）に関連する音声のみをフィルタリング
       * ブラウザやOSによって 'zh-TW', 'zh_TW', 'zh-Hant-TW' など表記が揺れるため、柔軟にマッチングさせます。
       */
      const twVoices = voices.filter(v => {
        const lang = v.lang.toLowerCase().replace('_', '-');
        return lang === 'zh-tw' || lang.includes('zh-tw') || lang.includes('zh-hant-tw');
      });

      /**
       * 2. 台湾の女性音声（代表的な名前やキーワード）を優先的に選択
       * Yating (Microsoft), Hanhan (Microsoft), Mei-Jia (Apple), 國語 (Google) など
       */
      const femaleKeywords = ['female', 'yating', 'hanhan', 'mei-jia', '國語', 'taiwan', 'lin-lin', 'xiaozhen'];
      
      const preferredVoice = twVoices.find(v => {
        const name = v.name.toLowerCase();
        return femaleKeywords.some(keyword => name.includes(keyword));
      }) || twVoices[0]; // ターゲットの女性音声がない場合は、最初に見つかった台湾音声にフォールバック

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      /**
       * 3. 学習用に音声の特性を微調整
       * 速度 (rate): 0.85 (少しゆっくりで聞き取りやすく)
       * ピッチ (pitch): 1.1 (わずかに高く設定し、より明瞭で女性的な響きに)
       */
      utterance.rate = 0.85;
      utterance.pitch = 1.1;
      
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={speak}
      className={cn("text-primary hover:bg-primary/10 transition-colors", className)}
      title="発音を聞く (台湾華語・女性優先)"
    >
      <Volume2 className={size === "icon" ? "h-5 w-5" : "mr-2 h-4 w-4"} />
      {size !== "icon" && "再生"}
    </Button>
  );
}
