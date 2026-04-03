
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
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "zh-TW";
      // Try to find a Taiwanese voice specifically if available
      const voices = window.speechSynthesis.getVoices();
      const twVoice = voices.find(v => v.lang.includes("zh-TW") || v.lang.includes("zh-HK"));
      if (twVoice) utterance.voice = twVoice;
      
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
