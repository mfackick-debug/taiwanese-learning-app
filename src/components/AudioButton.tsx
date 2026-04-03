
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

    // 既存の再生を停止
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";
    utterance.rate = 0.85; // 学習用に少しゆっくり
    utterance.pitch = 1.1; // わずかに高く（女性的に）

    /**
     * 100msごとに最大10回、音声リストがロードされるのを待機するリトライロジック
     */
    let retries = 0;
    const maxRetries = 10;

    const findAndSpeak = () => {
      const allVoices = window.speechSynthesis.getVoices();

      if (allVoices.length === 0 && retries < maxRetries) {
        retries++;
        setTimeout(findAndSpeak, 100);
        return;
      }

      /**
       * 属性ベースのフィルタリングと優先順位スコアリング
       * zh-TW/zh-HK を対象とし、女性のキーワードを含むものを抽出
       */
      const filteredVoices = allVoices.filter((v) => {
        const lang = v.lang.toLowerCase().replace("_", "-");
        const name = v.name.toLowerCase();
        
        // 言語フィルター (zh-TW を優先するが、指定により zh-HK も候補に含める)
        const isTargetLang = lang.startsWith("zh-tw") || lang.startsWith("zh-hk") || lang.includes("hant");
        
        // 女性キーワードのいずれかを含むか
        const hasFemaleKeyword = [
          "female", "女性", "mei-jia", "sin-ji", "ting-ting", "yating", "hanhan", "google", "國語"
        ].some(k => name.includes(k.toLowerCase()));

        return isTargetLang && hasFemaleKeyword;
      });

      const getScore = (voice: SpeechSynthesisVoice) => {
        const name = voice.name.toLowerCase();
        const lang = voice.lang.toLowerCase().replace("_", "-");
        let score = 0;

        // 台湾華語（zh-TW）を最優先（広東語よりも高いスコア）
        if (lang.includes("tw")) score += 1000;

        // モバイル専用キーワードの優先スコア
        // iOS 優先キーワード
        if (name.includes("mei-jia")) score += 500;
        if (name.includes("sin-ji")) score += 450;
        if (name.includes("ting-ting")) score += 400;

        // Android 優先キーワード
        if (name.includes("zh-tw-language")) score += 350;
        if (name.includes("google 國語")) score += 300;

        // 一般的な属性キーワード
        if (name.includes("female") || name.includes("女性")) score += 100;

        return score;
      };

      // スコア順にソートして最良の声を選択
      const bestVoice = filteredVoices.sort((a, b) => getScore(b) - getScore(a))[0] 
                        || allVoices.find(v => v.lang.toLowerCase().includes("tw"));

      if (bestVoice) {
        // デバッグ用ログ: 選択された音声情報を出力
        console.log(`[AudioButton] Selected voice: "${bestVoice.name}" (lang: ${bestVoice.lang}) - score rank candidate`);
        utterance.voice = bestVoice;
      } else {
        console.log("[AudioButton] No specific TW female voice found, using system default for zh-TW.");
      }

      window.speechSynthesis.speak(utterance);
    };

    findAndSpeak();
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
