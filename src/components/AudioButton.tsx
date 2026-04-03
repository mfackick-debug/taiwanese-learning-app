
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
      // 既存の再生を即座に停止
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "zh-TW";
      
      const voices = window.speechSynthesis.getVoices();
      
      /**
       * 台湾華語 (zh-TW) の女性音声を優先的に選択するロジック
       * OSやブラウザによって名称が異なるため、代表的なキーワードでフィルタリングします
       */
      const preferredVoice = voices.find(v => {
        const lang = v.lang.replace('_', '-');
        const name = v.name.toLowerCase();
        
        const isTaiwan = lang === 'zh-TW';
        
        // 一般的な台湾の女性音声名や高品質なGoogle/Microsoftの音声キーワード
        const isTargetFemale = 
          name.includes('female') || 
          name.includes('yating') || // Microsoft Yating
          name.includes('hanhan') || // Microsoft Hanhan
          name.includes('mei-jia') || // Apple Mei-Jia
          name.includes('國語') ||    // Google 國語 (Taiwan)
          name.includes('taiwan');
          
        return isTaiwan && isTargetFemale;
      }) || voices.find(v => v.lang.replace('_', '-').startsWith('zh-TW'));

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      // 学習用に少し速度を落とし、ピッチを微調整してより女性的・自然な響きにします
      utterance.rate = 0.85;
      utterance.pitch = 1.05;
      
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
