"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, RefreshCw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ConversationChat } from "@/components/contextBuilder/ConversationChat";
import { usePhraseBook } from "@/hooks/usePhraseBook";
import { toast } from "@/hooks/use-toast";
import type {
  ChatMessage,
  ConversationTurn,
  GenerateQuestionResponseBody,
  PolishResponseBody,
} from "@/types/contextBuilder";
import {
  INTERVIEW_THEME_GROUPS,
  buildFallbackQuestion,
  getInterviewTheme,
  getThemesByGroup,
  resolveInterviewThemeLabel,
  type InterviewThemeId,
} from "@/data/interviewThemes";
import { getPracticeCategoryMeta, type PracticeCategory } from "@/types/practiceCategory";
import { parsePolishResponse } from "@/utils/parsePolishResponse";

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

function getFirstQuestion(messages: ChatMessage[]): string {
  return messages.find((m) => m.variant === "question")?.text ?? "";
}

export function ContextBuilderFlow() {
  const { addEntry } = usePhraseBook();
  const [themeId, setThemeId] = useState<InterviewThemeId>("shopping");
  const [customGroup, setCustomGroup] = useState<PracticeCategory>("survival");
  const [customTheme, setCustomTheme] = useState("");
  const [hintJa, setHintJa] = useState("");
  const [recentQuestions, setRecentQuestions] = useState<string[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [polishMode, setPolishMode] = useState<PolishResponseBody["mode"] | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const selectedTheme = themeId === "custom" ? undefined : getInterviewTheme(themeId);
  const category: PracticeCategory = selectedTheme?.group ?? customGroup;
  const categoryMeta = getPracticeCategoryMeta(category);
  const themeLabelJa = resolveInterviewThemeLabel(themeId, customTheme);
  const canGenerate = themeId !== "custom" || Boolean(customTheme.trim());
  const hasConversation = messages.some((m) => m.variant === "raw");

  const selectPreset = useCallback((id: InterviewThemeId) => {
    setThemeId(id);
    setMessages([]);
    setHintJa("");
    setChatInput("");
    setPolishMode(null);
    setError(null);
    setSaved(false);
  }, []);

  const selectCustom = useCallback(() => {
    setThemeId("custom");
    setMessages([]);
    setHintJa("");
    setChatInput("");
    setPolishMode(null);
    setError(null);
    setSaved(false);
  }, []);

  const callPolishApi = useCallback(
    async (userText: string, history: ConversationTurn[]): Promise<PolishResponseBody> => {
      const promptQuestion = getFirstQuestion(messages) || getLatestQuestion(messages) || "";
      const res = await fetch("/api/polish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userText,
          category,
          themeLabelJa,
          customTheme: themeId === "custom" ? customTheme.trim() : undefined,
          promptQuestion,
          promptHintJa: hintJa || themeLabelJa,
          conversationHistory: history.length > 0 ? history : undefined,
        }),
      });

      if (!res.ok) {
        const details = await res.text().catch(() => "");
        throw new Error(details || `HTTP ${res.status}`);
      }

      return parsePolishResponse(await res.json(), userText, "gemini");
    },
    [category, customTheme, hintJa, messages, themeId, themeLabelJa],
  );

  const appendTurn = useCallback((userText: string, result: PolishResponseBody) => {
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
  }, []);

  const generateQuestion = useCallback(async () => {
    if (!canGenerate || isGenerating) return;
    setIsGenerating(true);
    setError(null);
    setSaved(false);

    try {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 18_000);
      const res = await fetch("/api/generate-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          themeId,
          themeLabelJa,
          category,
          customTheme: themeId === "custom" ? customTheme.trim() : undefined,
          avoidQuestions: recentQuestions,
        }),
        signal: controller.signal,
      }).finally(() => window.clearTimeout(timeout));
      if (!res.ok) {
        const details = await res.text().catch(() => "");
        throw new Error(details || `HTTP ${res.status}`);
      }
      const data = (await res.json()) as GenerateQuestionResponseBody;
      const question = data.question?.trim();
      if (!question) throw new Error("質問の生成に失敗しました");

      setHintJa(data.hintJa ?? "");
      setChatInput("");
      setPolishMode(data.mode);
      setRecentQuestions((prev) => [...prev, question].slice(-6));
      setMessages([
        {
          id: newMessageId(),
          role: "assistant",
          variant: "question",
          text: question,
          pinyin: data.pinyin,
        },
      ]);
    } catch {
      const fallback = buildFallbackQuestion(
        themeId,
        themeLabelJa,
        themeId === "custom" ? customTheme : undefined,
      );
      setHintJa(fallback.hintJa);
      setChatInput("");
      setPolishMode("mock");
      setRecentQuestions((prev) => [...prev, fallback.question].slice(-6));
      setMessages([
        {
          id: newMessageId(),
          role: "assistant",
          variant: "question",
          text: fallback.question,
          pinyin: fallback.pinyin,
        },
      ]);
    } finally {
      setIsGenerating(false);
    }
  }, [canGenerate, category, customTheme, isGenerating, recentQuestions, themeId, themeLabelJa]);

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
    const promptQuestion = getFirstQuestion(messages);

    addEntry({
      sourceCardId: `theme:${themeId}`,
      targetWord: themeLabelJa,
      skeletonText: promptQuestion,
      category,
      promptHintJa: hintJa || themeLabelJa,
      userDraft: getFirstUserDraft(messages),
      polishedText: latestPolished.text,
      pinyin: latestPolished.pinyin,
      explanation: latestPolished.explanation,
      nextQuestion: getLatestQuestion(messages),
      conversation: messagesToHistory(messages),
      themeId,
      themeLabelJa,
      customTheme: themeId === "custom" ? customTheme.trim() : undefined,
      promptQuestion,
    });

    setSaved(true);
    toast({
      title: "My Phrase Book に保存しました",
      description: "フレーズ帳からいつでも復習できます。",
    });
  }, [addEntry, category, customTheme, hintJa, messages, themeId, themeLabelJa]);

  const groupedThemes = useMemo(
    () =>
      INTERVIEW_THEME_GROUPS.map((group) => ({
        ...group,
        themes: getThemesByGroup(group.id),
      })),
    [],
  );

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
          <Button variant="outline" size="sm" className="rounded-full font-headline" asChild>
            <Link href="/phrase-book">フレーズ帳</Link>
          </Button>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-headline font-bold text-slate-900 flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            テーマ会話
          </h1>
          <p className="text-sm text-muted-foreground font-body">
            テーマに沿ってアプリが質問し、あなたの答えを添削します
          </p>
        </div>

        <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
          <CardHeader className="pb-2">
            <CardTitle className="font-headline text-lg">テーマを選ぶ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {groupedThemes.map((group) => (
              <div key={group.id} className="space-y-2">
                <p className="text-[11px] font-headline font-bold text-muted-foreground">{group.labelJa}</p>
                <div className="flex flex-wrap gap-2">
                  {group.themes.map((theme) => (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => selectPreset(theme.id)}
                      className={cn(
                        "text-xs px-3 py-1.5 rounded-full font-headline border transition-colors",
                        themeId === theme.id
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-white text-slate-700 border-slate-200 hover:border-primary/40",
                      )}
                    >
                      {theme.labelJa}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="space-y-2 pt-1">
              <p className="text-[11px] font-headline font-bold text-muted-foreground">その他</p>
              <button
                type="button"
                onClick={selectCustom}
                className={cn(
                  "text-xs px-3 py-1.5 rounded-full font-headline border transition-colors",
                  themeId === "custom"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-white text-slate-700 border-slate-200 hover:border-primary/40",
                )}
              >
                自分で決める
              </button>
              {themeId === "custom" && (
                <div className="space-y-2 rounded-2xl bg-violet-50/80 p-3">
                  <div className="flex flex-wrap gap-1.5">
                    {INTERVIEW_THEME_GROUPS.map((group) => (
                      <button
                        key={group.id}
                        type="button"
                        onClick={() => setCustomGroup(group.id)}
                        className={cn(
                          "text-[10px] px-2.5 py-1 rounded-full font-headline border",
                          customGroup === group.id
                            ? "bg-violet-600 text-white border-violet-600"
                            : "bg-white text-violet-800 border-violet-200",
                        )}
                      >
                        {group.labelJa}
                      </button>
                    ))}
                  </div>
                  <Input
                    value={customTheme}
                    onChange={(e) => setCustomTheme(e.target.value.slice(0, 40))}
                    placeholder="例: ペットを預ける、夜市で値切る"
                    className="rounded-xl bg-white"
                  />
                  <p className="text-[10px] text-muted-foreground font-body">
                    該当するテーマがなければ、ここで話題を書いてください（40字まで）
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className={cn("font-body border", categoryMeta.badgeClass)}>
                {categoryMeta.labelJa}
              </Badge>
              <p className="text-sm font-headline font-bold text-slate-800">{themeLabelJa}</p>
            </div>
            {selectedTheme && (
              <p className="text-xs text-muted-foreground font-body">{selectedTheme.descriptionJa}</p>
            )}

            <Button
              type="button"
              className="w-full rounded-2xl h-12 font-headline"
              disabled={!canGenerate || isGenerating}
              onClick={generateQuestion}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  質問を作っています…
                </>
              ) : messages.length > 0 ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  別の質問を作る
                </>
              ) : (
                "このテーマで質問する"
              )}
            </Button>
            {error && messages.length === 0 && (
              <p className="text-sm text-destructive font-body text-center">{error}</p>
            )}
          </CardContent>
        </Card>

        {messages.length > 0 && (
          <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
            <CardHeader className="pb-2">
              <CardTitle className="font-headline text-lg">質問に答える</CardTitle>
              {hintJa && <p className="text-xs text-cyan-800 font-body bg-cyan-50 rounded-xl px-3 py-2">{hintJa}</p>}
            </CardHeader>
            <CardContent>
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
              {hasConversation && !saved && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="w-full rounded-xl font-headline text-muted-foreground mt-2"
                  onClick={generateQuestion}
                  disabled={isSubmitting || isGenerating}
                >
                  別の質問からやり直す
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
