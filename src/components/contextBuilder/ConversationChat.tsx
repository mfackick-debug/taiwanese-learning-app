"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Bookmark, Loader2, Mic, MicOff, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { WebSpeechPlayButton } from "@/components/contextBuilder/WebSpeechPlayButton";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { stopWebSpeech } from "@/lib/speechUtils";
import type { ChatMessage } from "@/types/contextBuilder";

export interface ConversationChatProps {
  messages: ChatMessage[];
  chatInput: string;
  onChatInputChange: (value: string) => void;
  onSend: () => void;
  isSubmitting: boolean;
  error: string | null;
  onSave: () => void;
  saveDisabled?: boolean;
  saved?: boolean;
  mode?: "gemini" | "mock";
}

function Bubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  const canPlay = message.variant === "polished" || message.variant === "question";

  const label =
    message.variant === "raw"
      ? "あなた"
      : message.variant === "polished"
        ? "添削"
        : "質問";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 shadow-sm",
          isUser && "bg-sky-500 text-white rounded-br-md",
          !isUser &&
            message.variant === "polished" &&
            "bg-emerald-50 text-slate-900 border border-emerald-100 rounded-bl-md",
          !isUser &&
            message.variant === "question" &&
            "bg-violet-50 text-violet-950 border border-violet-100 rounded-bl-md"
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <p
            className={cn(
              "text-[10px] font-headline font-bold mb-1 flex-1",
              isUser ? "text-sky-100" : message.variant === "polished" ? "text-emerald-700" : "text-violet-700"
            )}
          >
            {label}
          </p>
          {canPlay && (
            <WebSpeechPlayButton
              text={message.text}
              className={
                message.variant === "polished"
                  ? "text-emerald-600 hover:text-emerald-800 hover:bg-emerald-100/80"
                  : "text-violet-600 hover:text-violet-800 hover:bg-violet-100/80"
              }
              activeClassName={
                message.variant === "polished"
                  ? "text-emerald-700 bg-emerald-100"
                  : "text-violet-700 bg-violet-100"
              }
            />
          )}
        </div>
        <p className="text-sm font-body whitespace-pre-wrap leading-relaxed">{message.text}</p>
        {message.variant === "polished" && message.pinyin && (
          <p className="text-xs text-emerald-600/90 font-body mt-1.5 tracking-wide">{message.pinyin}</p>
        )}
        {message.variant === "polished" && message.explanation && (
          <div className="mt-2 rounded-xl bg-white/70 border border-emerald-100 px-3 py-2">
            <p className="text-[10px] font-headline font-bold text-emerald-800 mb-0.5">添削の理由</p>
            <p className="text-xs font-body text-slate-700 leading-relaxed">{message.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function ConversationChat({
  messages,
  chatInput,
  onChatInputChange,
  onSend,
  isSubmitting,
  error,
  onSave,
  saveDisabled,
  saved,
  mode,
}: ConversationChatProps) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const baseInputRef = useRef("");
  const [sttError, setSttError] = useState<string | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSubmitting]);

  const handleTranscript = useCallback(
    (text: string, isFinal: boolean) => {
      const prefix = baseInputRef.current.trim();
      const combined = prefix ? `${prefix} ${text}` : text;
      onChatInputChange(combined);
      if (isFinal) baseInputRef.current = combined;
    },
    [onChatInputChange]
  );

  const { isListening, supported, toggleListening, stopListening } = useSpeechRecognition({
    lang: "zh-TW",
    onTranscript: handleTranscript,
    onError: (message) => setSttError(message),
  });

  const handleMicToggle = () => {
    setSttError(null);
    if (!isListening) {
      stopWebSpeech();
      baseInputRef.current = chatInput;
    }
    toggleListening();
  };

  const handleInputChange = (value: string) => {
    baseInputRef.current = value;
    onChatInputChange(value);
  };

  useEffect(() => {
    if (isSubmitting) stopListening();
  }, [isSubmitting, stopListening]);

  if (messages.length === 0) return null;

  return (
    <div className="space-y-4 pt-2 border-t">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-headline font-bold text-muted-foreground">会話</p>
        {mode === "mock" && (
          <span className="text-[10px] text-muted-foreground font-body">（モック添削）</span>
        )}
      </div>

      <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
        {messages.map((msg) => (
          <Bubble key={msg.id} message={msg} />
        ))}
        {isSubmitting && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md bg-white border px-4 py-3 shadow-sm">
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="space-y-2 rounded-2xl border bg-slate-50/80 p-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-headline font-bold text-muted-foreground">
            深掘り質問に返信
          </p>
          {isListening && (
            <span className="text-[10px] font-headline font-bold text-rose-600 animate-pulse">
              録音中…
            </span>
          )}
        </div>

        <div className="flex gap-2 items-start">
          <Textarea
            value={chatInput}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="繁体字中国語で返信…（日本語混じりでもOK）"
            className={cn(
              "min-h-[88px] flex-1 rounded-xl text-base font-body resize-y bg-white",
              isListening && "ring-2 ring-rose-300 border-rose-200"
            )}
            disabled={isSubmitting}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                onSend();
              }
            }}
          />
          <Button
            type="button"
            variant={isListening ? "destructive" : "outline"}
            size="icon"
            className={cn(
              "h-11 w-11 shrink-0 rounded-xl mt-0.5",
              !supported && "opacity-50"
            )}
            disabled={isSubmitting || !supported}
            onClick={handleMicToggle}
            title={
              supported
                ? isListening
                  ? "録音を停止"
                  : "音声入力（zh-TW）"
                : "このブラウザは音声入力に非対応です"
            }
            aria-label={isListening ? "録音停止" : "音声入力"}
          >
            {isListening ? (
              <MicOff className="h-5 w-5" />
            ) : (
              <Mic className="h-5 w-5" />
            )}
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            className="flex-1 rounded-xl font-headline min-w-[140px]"
            disabled={!chatInput.trim() || isSubmitting || isListening}
            onClick={onSend}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                送信中…
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                返信する
              </>
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="rounded-xl font-headline"
            disabled={saveDisabled || saved}
            onClick={onSave}
          >
            <Bookmark className={cn("mr-2 h-4 w-4", saved && "fill-current")} />
            {saved ? "保存済み" : "フレーズを保存"}
          </Button>
        </div>

        {(error || sttError) && (
          <p className="text-sm text-destructive font-body text-center">{error ?? sttError}</p>
        )}
      </div>
    </div>
  );
}
