
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

    /**
     * 台湾華語 (zh-TW) の音声を抽出し、女性の声をスコアリングして選択する
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
       * ユーザーの要求に基づき、特定のキーワードを持つ音声を優先します。
       */
      const getScore = (voice: SpeechSynthesisVoice) => {
        const name = voice.name.toLowerCase();
        let score = 0;

        // iOS: Mei-Jia (高品質な女性音声)
        if (name.includes('mei-jia')) score += 100;
        
        // Android/Google: Sin-Ji (Googleの台湾女性音声)
        if (name.includes('sin-ji')) score += 95;

        // Windows/Azure: Yating, Hanhan
        if (name.includes('yating') || name.includes('hanhan')) score += 90;

        // キーワードベースの検索 (Female, Google)
        if (name.includes('female')) score += 50;
        if (name.includes('google')) score += 40;

        // 台湾であることを示す一般的なキーワード
        if (name.includes('taiwan') || name.includes('hant')) score += 10;

        return score;
      };

      // スコアでソートして最高得点の音声を選択。
      // スコアが0でも、フィルタリングされた twVoices の中から最初のものが選ばれる（フォールバック）
      return twVoices.sort((a, b) => getScore(b) - getScore(a))[0];
    };

    /**
     * 再生実行処理
     */
    const executeSpeak = () => {
      const preferredVoice = findBestVoice();
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      // 学習用に音声の特性を微調整
      utterance.rate = 0.85; // 少しゆっくり
      utterance.pitch = 1.1; // わずかに高く（明瞭で女性的な響きに）

      window.speechSynthesis.speak(utterance);
    };

    // リストがまだロードされていない場合（特にモバイルブラウザ）
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        executeSpeak();
        // 重複実行を防ぐためイベントを解除
        window.speechSynthesis.onvoiceschanged = null;
      };
    } else {
      executeSpeak();
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
