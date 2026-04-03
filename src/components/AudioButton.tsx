
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
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    // 既存の再生を即座に停止してキューをクリア
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";

    // 利用可能な音声リストを取得
    let voices = window.speechSynthesis.getVoices();

    /**
     * 台湾華語 (zh-TW) の音声を抽出し、女性の声を優先順位付けして選択する
     */
    const findBestVoice = () => {
      const allVoices = window.speechSynthesis.getVoices();
      
      // 1. 台湾華語（zh-TW）に関連する音声のみをフィルタリング
      const twVoices = allVoices.filter(v => {
        const lang = v.lang.toLowerCase().replace('_', '-');
        return lang === 'zh-tw' || lang.includes('zh-tw') || lang.includes('zh-hant-tw');
      });

      if (twVoices.length === 0) return null;

      /**
       * 2. 優先順位スコアリング
       * スコアが高いほど優先的に選択されます。
       */
      const getScore = (voice: SpeechSynthesisVoice) => {
        const name = voice.name.toLowerCase();
        let score = 0;

        // iOS: Mei-Jia (美佳) は非常に高品質な台湾女性音声
        if (name.includes('mei-jia')) score += 100;
        
        // Windows/Azure: Yating, Hanhan
        if (name.includes('yating') || name.includes('hanhan')) score += 90;

        // Android/Google: Google 國語 (Taiwan)
        if (name.includes('google') && (name.includes('國語') || name.includes('taiwan'))) score += 80;

        // 一般的な女性キーワード
        if (name.includes('female') || name.includes('xiaozhen') || name.includes('lin-lin')) score += 50;

        // 台湾であることを示すキーワード
        if (name.includes('taiwan') || name.includes('hant')) score += 10;

        return score;
      };

      // スコアでソートして最高得点の音声を選択
      return twVoices.sort((a, b) => getScore(b) - getScore(a))[0];
    };

    const preferredVoice = findBestVoice();

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    /**
     * 学習用に音声の特性を微調整
     * 速度 (rate): 0.85 (少しゆっくりで聞き取りやすく)
     * ピッチ (pitch): 1.1 (わずかに高く設定し、より明瞭で女性的な響きに)
     */
    utterance.rate = 0.85;
    utterance.pitch = 1.1;

    // iOS/Safariで音声が取得できない場合、voiceschangedイベントを待つ必要があることがある
    if (voices.length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        const voice = findBestVoice();
        if (voice) utterance.voice = voice;
        window.speechSynthesis.speak(utterance);
        // 一度実行したらイベントを解除
        window.speechSynthesis.onvoiceschanged = null;
      };
    } else {
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
