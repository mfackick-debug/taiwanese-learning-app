"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, RefreshCw, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  CONTEXT_BUILDER_POOL,
  countByCategory,
  pickRandomContextItem,
} from "@/data/contextBuilderPool";
import { ConversationChat } from "@/components/contextBuilder/ConversationChat";
import { usePhraseBook } from "@/hooks/usePhraseBook";
import { toast } from "@/hooks/use-toast";
import type {
  ChatMessage,
  ContextBuilderItem,
  ConversationTurn,
  PolishResponseBody,
  SkeletonSegment,
} from "@/types/contextBuilder";
import {
  PRACTICE_CATEGORIES,
  getPracticeCategoryMeta,
  type PracticeCategory,
} from "@/types/practiceCategory";
import { SKELETON_EXTRACTION_RULES } from "@/utils/extractContextSkeleton";
import { parsePolishResponse } from "@/utils/parsePolishResponse";

type FlowStep = "read" | "extract" | "shift";

function newMessageId(): string {
  return crypto.randomUUID();
}

function messagesToHistory(messages: ChatMessage[]): ConversationTurn[] {
  return messages.map(({ role, text }) => ({ role, text }));
}

function getLatestPolishedMessage(messages: ChatMessage[]): ChatMessage | undefined {
  return [...messages].reverse().find((m) => m.variant === "polished");
}

function getLatestPolished(messages: ChatMessage[]): string {
  return getLatestPolishedMessage(messages)?.text ?? "";
}

function getLatestQuestion(messages: ChatMessage[]): string | undefined {
  return [...messages].reverse().find((m) => m.variant === "question")?.text;
}

function getFirstUserDraft(messages: ChatMessage[]): string {
  return messages.find((m) => m.variant === "raw")?.text ?? "";
}

function SkeletonHighlight({ segments }: { segments: SkeletonSegment[] }) {
  return (
    <p className="text-lg leading-relaxed font-headline text-slate-900 whitespace-pre-wrap">
      {segments.map((seg, i) => (
        <span
          key={i}
          className={cn(
            seg.kind === "target" && "font-bold text-primary bg-primary/10 px-1 rounded",
            seg.kind === "slot" && "font-bold text-amber-700 bg-amber-50 px-1 rounded"
          )}
        >
          {seg.kind === "target" ? `【${seg.text}】` : seg.text}
        </span>
      ))}
    </p>
  );
}

export function ContextBuilderFlow() {
  const { addEntry } = usePhraseBook();
  const [category, setCategory] = useState<PracticeCategory>("survival");
  const [item, setItem] = useState<ContextBuilderItem>(() => pickRandomContextItem("survival"));
  const [step, setStep] = useState<FlowStep>("read");
  const [userDraft, setUserDraft] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [polishMode, setPolishMode] = useState<PolishResponseBody["mode"] | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const categoryCounts = useMemo(() => countByCategory(), []);
  const categoryMeta = getPracticeCategoryMeta(item.category);
  const card = item.card;
  const hasConversation = messages.length > 0;

  const stepLabels = useMemo(
    () =>
      [
        { id: "read" as const, label: "① Read" },
        { id: "extract" as const, label: "② Extract" },
        { id: "shift" as const, label: "③ Shift" },
      ] as const,
    []
  );

  const resetConversation = useCallback(() => {
    setUserDraft("");
    setChatInput("");
    setMessages([]);
    setPolishMode(null);
    setError(null);
    setSaved(false);
  }, []);

  const selectCategory = useCallback(
    (next: PracticeCategory) => {
      setCategory(next);
      setItem(pickRandomContextItem(next));
      setStep("read");
      resetConversation();
    },
    [resetConversation]
  );

  const pickAnother = useCallback(() => {
    let next = pickRandomContextItem(category);
    if (CONTEXT_BUILDER_POOL.length > 1) {
      while (next.card.id === item.card.id) {
        next = pickRandomContextItem(category);
      }
    }
    setItem(next);
    setStep("read");
    resetConversation();
  }, [category, item.card.id, resetConversation]);

  const callPolishApi = useCallback(
    async (userText: string, history: ConversationTurn[]): Promise<PolishResponseBody> => {
      const res = await fetch("/api/polish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userText,
          sourceSentence: card.sentence,
          skeletonText: item.skeletonText,
          targetWord: card.targetWord,
          grammarNote: card.grammarNote,
          promptHintJa: item.promptHintJa,
          category: item.category,
          connectorLabel: item.connectorLabel,
          conversationHistory: history.length > 0 ? history : undefined,
        }),
      });

      if (!res.ok) {
        const details = await res.text().catch(() => "");
        throw new Error(details || `HTTP ${res.status}`);
      }

      return parsePolishResponse(await res.json(), userText, "gemini");
    },
    [card, item]
  );

  const appendTurn = useCallback(
    (userText: string, result: PolishResponseBody) => {
      setMessages((prev) => [
        ...prev,
        { id: newMessageId(), role: "user", variant: "raw", text: userText },
        {
          id: newMessageId(),
          role: "assistant",
          variant: "polished",
          text: result.polishedText,
          pinyin: result.pinyin,
          explanation: result.explanation,
        },
        {
          id: newMessageId(),
          role: "assistant",
          variant: "question",
          text: result.nextQuestion,
        },
      ]);
      setPolishMode(result.mode);
      setSaved(false);
    },
    []
  );

  const handleInitialSubmit = async () => {
    if (!userDraft.trim() || isSubmitting) return;
    setIsSubmitting(true);
    setError(null);

    try {
      const data = await callPolishApi(userDraft.trim(), []);
      appendTurn(userDraft.trim(), data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "添削リクエストに失敗しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChatSend = async () => {
    if (!chatInput.trim() || isSubmitting) return;
    setIsSubmitting(true);
    setError(null);

    const text = chatInput.trim();
    const history = messagesToHistory(messages);

    try {
      const data = await callPolishApi(text, history);
      appendTurn(text, data);
      setChatInput("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "返信の送信に失敗しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSave = useCallback(() => {
    const latestPolished = getLatestPolishedMessage(messages);
    if (!latestPolished?.text) return;

    addEntry({
      sourceCardId: card.id,
      targetWord: card.targetWord,
      skeletonText: item.skeletonText,
      category: item.category,
      promptHintJa: item.promptHintJa,
      userDraft: getFirstUserDraft(messages) || userDraft.trim(),
      polishedText: latestPolished.text,
      pinyin: latestPolished.pinyin,
      explanation: latestPolished.explanation,
      nextQuestion: getLatestQuestion(messages),
      conversation: messagesToHistory(messages),
    });

    setSaved(true);
    toast({
      title: "My Phrase Book に保存しました",
      description: "フレーズ帳からいつでも復習できます。",
    });
  }, [addEntry, card.id, card.targetWord, item, messages, userDraft]);

  return (
    <main className="min-h-dvh bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 pb-24">
      <div className="w-full max-w-2xl mx-auto px-4 pt-4 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <Button variant="ghost" className="rounded-full font-headline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-1 h-4 w-4" />
              モード選択
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="rounded-full font-headline"
              asChild
            >
              <Link href="/phrase-book">フレーズ帳</Link>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="rounded-full font-headline"
              onClick={pickAnother}
            >
              <RefreshCw className="mr-1 h-4 w-4" />
              別の例文
            </Button>
          </div>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-headline font-bold text-slate-900 flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Context Re-builder
          </h1>
          <p className="text-sm text-muted-foreground font-body">
            実生活・ビジネス・メディアで使える表現を、自分のエピソードに変換する
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {PRACTICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => selectCategory(cat.id)}
              className={cn(
                "rounded-2xl border p-3 text-left transition-all",
                category === cat.id
                  ? "border-primary bg-white shadow-md ring-2 ring-primary/20"
                  : "border-transparent bg-white/60 hover:bg-white"
              )}
            >
              <p className="text-xs font-headline font-bold leading-tight">{cat.labelJa}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{categoryCounts[cat.id]} 例文</p>
            </button>
          ))}
        </div>

        <div className="flex gap-1 flex-wrap justify-center">
          {stepLabels.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setStep(id)}
              className={cn(
                "text-xs px-3 py-1 rounded-full font-headline transition-colors",
                step === id
                  ? "bg-primary text-primary-foreground"
                  : "bg-white/60 text-muted-foreground hover:bg-white"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
          <CardHeader className="pb-2">
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle className="font-headline text-lg">Read — 例文を理解する</CardTitle>
              <Badge variant="outline" className={cn("font-body border", categoryMeta.badgeClass)}>
                {categoryMeta.labelJa}
              </Badge>
              {item.connectorLabel && (
                <Badge variant="secondary" className="font-body">
                  {item.connectorLabel}
                </Badge>
              )}
              {item.situation && (
                <Badge variant="outline" className="font-body">
                  {item.situation}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-2">
              <p className="text-xl leading-10 font-headline text-slate-900 whitespace-pre-wrap">
                {card.sentence}
              </p>
              <p className="text-sm text-muted-foreground/70 font-body">{card.pinyin}</p>
              <p className="text-sm text-muted-foreground font-body">{card.translation}</p>
            </div>
            <div className="rounded-2xl bg-secondary/30 p-4 text-sm font-body whitespace-pre-wrap">
              <p className="font-headline font-bold text-xs text-muted-foreground mb-1">
                実用ポイント
              </p>
              <p>
                {item.skipChengyuTarget ? (
                  <>
                    この例文は<strong>口語パターン</strong>を骨組みに抽出しています（成語・硬語は主役にしません）。
                  </>
                ) : (
                  <>
                    キーワード:{" "}
                    <span className="font-bold text-primary">「{card.targetWord}」</span>
                  </>
                )}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {card.grammarNote.replace(/^🇹🇼[^\n]*\n?/, "")}
              </p>
            </div>
            {step === "read" && (
              <Button
                type="button"
                className="w-full rounded-2xl h-12 font-headline"
                onClick={() => setStep("extract")}
              >
                骨組みを抽出する（Extract →）
              </Button>
            )}
          </CardContent>
        </Card>

        {(step === "extract" || step === "shift") && (
          <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border-l-4 border-l-amber-400">
            <CardHeader className="pb-2">
              <CardTitle className="font-headline text-lg">Extract — 実践の骨組み</CardTitle>
              <p className="text-xs text-muted-foreground font-body">
                {SKELETON_EXTRACTION_RULES.prefer} · {SKELETON_EXTRACTION_RULES.exclude}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <SkeletonHighlight segments={item.segments} />
              <p className="text-xs text-muted-foreground font-body">
                【青】= 口語キーワード　【橙…】= あなたが埋める可変部分
              </p>
              <div className="rounded-2xl border border-cyan-200 bg-cyan-50/60 p-4">
                <p className="text-xs font-headline font-bold text-cyan-800 mb-1">お題（Shift）</p>
                <p className="text-sm font-body text-cyan-900 whitespace-pre-wrap">{item.promptHintJa}</p>
              </div>
              {step === "extract" && (
                <Button
                  type="button"
                  className="w-full rounded-2xl h-12 font-headline"
                  onClick={() => setStep("shift")}
                >
                  自分のエピソードを書く（Shift →）
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        {step === "shift" && (
          <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
            <CardHeader className="pb-2">
              <CardTitle className="font-headline text-lg">Shift — あなたのエピソード</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {!hasConversation && (
                <>
                  <Textarea
                    value={userDraft}
                    onChange={(e) => setUserDraft(e.target.value)}
                    placeholder="繁体字中国語で、お題の場面を自分の言葉で書いてください…"
                    className="min-h-[140px] rounded-2xl text-base font-body resize-y"
                    disabled={isSubmitting}
                  />
                  <Button
                    type="button"
                    className="w-full rounded-2xl h-12 font-headline"
                    disabled={!userDraft.trim() || isSubmitting}
                    onClick={handleInitialSubmit}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        添削中…
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        添削＆会話を始める（Polish & Chat）
                      </>
                    )}
                  </Button>
                  {error && (
                    <p className="text-sm text-destructive font-body text-center">{error}</p>
                  )}
                </>
              )}

              {hasConversation && (
                <ConversationChat
                  messages={messages}
                  chatInput={chatInput}
                  onChatInputChange={setChatInput}
                  onSend={handleChatSend}
                  isSubmitting={isSubmitting}
                  error={error}
                  onSave={handleSave}
                  saveDisabled={!getLatestPolished(messages)}
                  saved={saved}
                  mode={polishMode ?? undefined}
                />
              )}

              {hasConversation && !saved && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="w-full rounded-xl font-headline text-muted-foreground"
                  onClick={resetConversation}
                  disabled={isSubmitting}
                >
                  最初から書き直す
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
