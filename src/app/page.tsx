"use client";

// Declare browser SpeechRecognition types (available in Chrome/Edge)
declare global {
  interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
  }

  interface SpeechRecognitionResultList {
    readonly length: number;
    [index: number]: SpeechRecognitionResult;
  }

  interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    readonly length: number;
    [index: number]: SpeechRecognitionAlternative;
  }

  interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
  }

  interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    onstart: ((this: SpeechRecognition, ev: Event) => void) | null;
    onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
    onerror: ((this: SpeechRecognition, ev: Event) => void) | null;
    onend: ((this: SpeechRecognition, ev: Event) => void) | null;
    start(): void;
    stop(): void;
    abort(): void;
  }

  interface SpeechRecognitionConstructor {
    new (): SpeechRecognition;
  }

  interface Window {
    webkitSpeechRecognition: SpeechRecognitionConstructor;
    SpeechRecognition?: SpeechRecognitionConstructor;
  }
}

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BookOpen, GraduationCap, Mic, Trophy } from "lucide-react";
import { bandBLevel3Data, bandBLevel4Data, bandCData } from "@/data";
import { Button } from "@/components/ui/button";
import { AudioButton, playTts, prefetchTts, stopTts } from "@/components/AudioButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { SentenceCard, SentenceExample } from "@/types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type StudyPhase = "shadowing" | "fill" | "reorder" | "listening";

type StudyCourse = "B3" | "B4" | "C";

type CharToken = {
  id: string;
  text: string;
};

type LearningHistoryEntry = {
  date: string; // YYYY-MM-DD
  score: number;
};

/** One question in our 3-question random batch: the example + which card it came from. */
type BatchItem = {
  example: SentenceExample;
  card: SentenceCard;
};

/** 聴解問題の4択データ */
type ListeningQA = {
  question: string;
  options: string[];
  answerIndex: number;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============================================================
// Step 3 強化: 文を最低3つ以上のフレーズに分割
// ============================================================

/**
 * Intl.Segmenterを利用して単語の境界を保ちながら、
 * 最低3つ（最大5つ程度）のチャンクに分割・結合する。
 */
function ensureMinimumChunks(chinese: string, baseChunks: string[]): string[] {
  try {
    const validBase = (baseChunks || []).filter((c) => c && c.trim().length > 0);
    if (validBase.length >= 3 && validBase.length <= 5) {
      return validBase;
    }

    const segmenter = new Intl.Segmenter("zh-TW", { granularity: "word" });
    const words: string[] = [];
    const punctuation = /^[，、：；。！？！？,.:;()「」『』"']+$/;

    for (const seg of Array.from(segmenter.segment(chinese || ""))) {
      const text = seg.segment.trim();
      if (!text) continue;
      if (punctuation.test(text) && words.length > 0) {
        words[words.length - 1] += text;
      } else {
        words.push(text);
      }
    }

    if (words.length === 0) return [chinese || ""];
    if (words.length <= 3) return words;

    let merged = [...words];
    while (merged.length > 5) {
      let bestIdx = 0;
      let minLen = Infinity;
      for (let i = 0; i < merged.length - 1; i++) {
        const combinedLen = merged[i].length + merged[i + 1].length;
        if (combinedLen < minLen) {
          minLen = combinedLen;
          bestIdx = i;
        }
      }
      const combined = merged[bestIdx] + merged[bestIdx + 1];
      merged = [...merged.slice(0, bestIdx), combined, ...merged.slice(bestIdx + 2)];
    }

    return merged;
  } catch (err) {
    console.error("ensureMinimumChunks error:", err);
    return [chinese || ""];
  }
}

function normalizeForJudge(text: string): string {
  return splitForReorder(text).join("");
}

function splitForReorder(sentence: string): string[] {
  const punctuation = new Set(["，", "。", "、", "！", "？", "：", "；", ",", ".", "!", "?", ":", ";", "（", "）", "(", ")", "\"", "“", "”", "'", "「", "」", "『", "』", " "]);
  return sentence
    .split("")
    .map((c) => c.trim())
    .filter((c) => c.length > 0)
    .filter((c) => !punctuation.has(c));
}

// ============================================================
// Step 4 強化: 中国語の4択聴解問題を動的生成
// ============================================================

/**
 * 中国語の例文から、TOCFL形式の4択問題（問題文も選択肢も中国語）を非同期に生成する
 * サーバー側のGemini APIを利用して文脈に合ったダミー選択肢を動的生成する
 */
function generateListeningQA(chinese: string): ListeningQA {
  // Generate a simple local 4-choice question using the sentence
  const question = "關於這段對話，下列哪一個描述是正確的？";
  const optionPool: string[] = [];
  optionPool.push(chinese.slice(0, Math.min(20, chinese.length))); // correct answer (partial)
  // Add some generic distractors
  const distractors = [
    "以上皆是",
    "以上皆非",
    "對話中沒有提到",
  ];
  for (const d of distractors) {
    if (optionPool.length >= 4) break;
    if (!optionPool.includes(d)) optionPool.push(d);
  }
  while (optionPool.length < 4) {
    optionPool.push(`選項${optionPool.length + 1}`);
  }
  const finalOptions = optionPool.slice(0, 4);
  // Shuffle options, keeping track of correct answer (index 0 before shuffle)
  const correctText = finalOptions[0];
  const shuffled = [...finalOptions].sort(() => Math.random() - 0.5);
  return {
    question,
    options: shuffled,
    answerIndex: shuffled.indexOf(correctText),
  };
}

// ============================================================
// END: 強化ロジック
// ============================================================

function hasQuantifierNote(note: string) {
  return note.includes("量詞") || note.includes("数量詞") || /(項|部|張|篇)/.test(note);
}

function highlightQuantifiers(note: string) {
  if (!hasQuantifierNote(note)) return note;

  const quantifiers = new Set(["項", "部", "張", "篇"]);
  const re = /(量詞|数量詞|項|部|張|篇)/g;
  const parts = note.split(re);
  return parts.map((p, idx) => {
    if (p === "量詞" || p === "数量詞") {
      return (
        <span key={`${idx}-${p}`} className="font-headline font-bold text-emerald-700">
          {p}
        </span>
      );
    }
    if (quantifiers.has(p)) {
      return (
        <span key={`${idx}-${p}`} className="font-headline font-bold text-emerald-700">
          {p}
        </span>
      );
    }
    return <span key={`${idx}-${p}`}>{p}</span>;
  });
}

/**
 * Flexible comparison: instead of strict index-by-index matching,
 * we check whether each target character appears ANYWHERE in the recognized text.
 * This accommodates stuttering, restarts, and retries (e.g. "我我我…要去…商店").
 * Characters found in the recognized output get "correct" highlighting (black/bold),
 * while missing characters are dimmed (grey).
 */
function compareText(recognized: string, target: string): { char: string; isCorrect: boolean }[] {
  // Count how many times each character appears in the recognized text
  const recogCounts = new Map<string, number>();
  for (const ch of recognized) {
    recogCounts.set(ch, (recogCounts.get(ch) ?? 0) + 1);
  }

  const result: { char: string; isCorrect: boolean }[] = [];

  for (const tChar of target) {
    const count = recogCounts.get(tChar) ?? 0;
    if (count > 0) {
      // This target char exists in the recognized text – mark correct
      result.push({ char: tChar, isCorrect: true });
      // Decrement so we don't match the same recognized char multiple times
      recogCounts.set(tChar, count - 1);
    } else {
      // This target char was NOT found in the recognized text – mark wrong
      result.push({ char: tChar, isCorrect: false });
    }
  }

  return result;
}

function generateRandomBatch(cards: SentenceCard[]): BatchItem[] {
  if (!Array.isArray(cards) || cards.length === 0) return [];
  
  // Filter cards to only those that are valid and have examples
  const validCards = cards.filter((card) => 
    card && 
    typeof card === "object" &&
    card.targetWord &&
    Array.isArray(card.examples) && 
    card.examples.length > 0
  );
  
  if (validCards.length === 0) return [];
  
  const shuffled = shuffle(validCards);
  const selected: BatchItem[] = [];
  
  // Try to pick 3 distinct cards
  for (let i = 0; i < shuffled.length && selected.length < 3; i++) {
    const card = shuffled[i];
    if (!card) continue;
    const examples = card.examples?.filter((ex) => ex && ex.chinese && ex.pinyin) ?? [];
    if (examples.length === 0) continue;
    
    // Safely pick a random example
    const idx = Math.floor(Math.random() * examples.length);
    selected.push({ example: examples[idx], card });
  }
  
  // Fallback: If we couldn't get 3 distinct cards, reuse cards with different examples or duplicate
  let fallbackIndex = 0;
  while (selected.length < 3 && validCards.length > 0) {
    const card = validCards[fallbackIndex % validCards.length];
    if (card) {
      const examples = card.examples?.filter((ex) => ex && ex.chinese && ex.pinyin) ?? [];
      if (examples.length > 0) {
        // Try to find an example we haven't selected yet
        const unselectedEx = examples.find((ex) => !selected.some((item) => item.example === ex));
        const exToUse = unselectedEx || examples[0];
        selected.push({ example: exToUse, card });
      }
    }
    fallbackIndex++;
    if (fallbackIndex > 100) break; // Infinite loop protection
  }
  
  return selected.slice(0, 3);
}


export default function Home() {
  const [activeTab, setActiveTab] = useState<"study" | "dashboard">("study");

  const [selectedCourse, setSelectedCourse] = useState<StudyCourse>("B3");
  const [currentPhase, setCurrentPhase] = useState<StudyPhase>("shadowing");
  const [currentBatchExamples, setCurrentBatchExamples] = useState<BatchItem[]>([]);
  const [exampleIndex, setExampleIndex] = useState(0);    // 0..2 index into currentBatchExamples
  const [batchCounter, setBatchCounter] = useState(0);     // how many batches completed (for progress display)
  const [showBatchResult, setShowBatchResult] = useState(false);
  const [batchMistakeCount, setBatchMistakeCount] = useState(0);
  const mistakeKeysRef = useRef<Set<string>>(new Set());
  const [choices, setChoices] = useState<string[]>([]);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const [isInitialized, setIsInitialized] = useState(false);

  const [reorderPool, setReorderPool] = useState<CharToken[]>([]);
  const [reorderAnswer, setReorderAnswer] = useState<CharToken[]>([]);
  const [reorderResult, setReorderResult] = useState<"correct" | "wrong" | null>(null);

  // Listening phase state (Chinese 4-choice)
  const [listeningQA, setListeningQA] = useState<ListeningQA | null>(null);
  const [listenSelected, setListenSelected] = useState<number | null>(null);  // index into options
  const [listenResult, setListenResult] = useState<"correct" | "wrong" | null>(null);

  // --------------------------------------------------
  // Shadowing: Web Speech API (SpeechRecognition)
  // --------------------------------------------------
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const startListening = useCallback(() => {
    if (typeof window === "undefined") return;

    const w = window as unknown as Record<string, unknown>;
    const SpeechRecognitionCtor =
      (w.webkitSpeechRecognition as new () => SpeechRecognition) ??
      (w.SpeechRecognition as new () => SpeechRecognition | undefined);

    if (!SpeechRecognitionCtor) {
      console.error("SpeechRecognition is not supported in this browser.");
      return;
    }

    // Stop any existing recognition session
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {
        // ignore
      }
    }

    const recognition = new SpeechRecognitionCtor();
    recognition.lang = "zh-TW";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
      setRecognizedText("");
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interim = "";
      let final = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          final += result[0].transcript;
        } else {
          interim += result[0].transcript;
        }
      }

      const transcript = final || interim;
      if (transcript) {
        setRecognizedText(transcript);
      }
    };

    recognition.onerror = (event: Event) => {
      const srEvent = event as Event & { error?: string };
      console.error("SpeechRecognition error:", srEvent.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
    recognitionRef.current = recognition;
  }, []);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
      recognitionRef.current = null;
    }
    setIsListening(false);
  }, []);

  // Cleanup recognition on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  // Clear recognized text when card changes
  useEffect(() => {
    if (currentPhase !== "shadowing") return;
    setRecognizedText("");
    setIsListening(false);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {
        // ignore
      }
      recognitionRef.current = null;
    }
  }, [currentPhase, exampleIndex]);

  const PROGRESS_STORAGE_KEY = "formosan_wordsmith_progress";
  const LEARNING_HISTORY_STORAGE_KEY = "learningHistory";
  const hasHandledBandEffectRef = useRef(false);

  const [learningHistory, setLearningHistory] = useState<LearningHistoryEntry[]>([]);
  const creditedCardKeysRef = useRef<Set<string>>(new Set());

  const todayKey = useMemo(() => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  const last7DaysChartData = useMemo(() => {
    const out: LearningHistoryEntry[] = [];
    const map = new Map(learningHistory.map((e) => [e.date, e.score] as const));
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      const key = `${yyyy}-${mm}-${dd}`;
      out.push({ date: key, score: map.get(key) ?? 0 });
    }
    return out;
  }, [learningHistory]);

  const addTodayScore = (delta: number) => {
    setLearningHistory((prev) => {
      const next = [...prev];
      const idx = next.findIndex((e) => e.date === todayKey);
      if (idx >= 0) {
        next[idx] = { date: next[idx].date, score: Math.max(0, next[idx].score + delta) };
      } else {
        next.push({ date: todayKey, score: Math.max(0, delta) });
      }
      next.sort((a, b) => a.date.localeCompare(b.date));
      return next;
    });
  };

  const filteredSentences = useMemo(() => {
    if (selectedCourse === "B3") return bandBLevel3Data;
    if (selectedCourse === "B4") return bandBLevel4Data;
    return bandCData;
  }, [selectedCourse]);

  useEffect(() => {
    if (!isInitialized) return;
    if (filteredSentences.length === 0) return;
    setCurrentBatchExamples(generateRandomBatch(filteredSentences));
  }, [filteredSentences.length]);

  /** Derive the current BatchItem from currentBatchExamples[exampleIndex] */
  const currentBatchItem: BatchItem | null = useMemo(() => {
    return currentBatchExamples[exampleIndex] ?? null;
  }, [currentBatchExamples, exampleIndex]);

  const currentCard: SentenceCard | null = useMemo(() => {
    return currentBatchItem?.card ?? null;
  }, [currentBatchItem]);

  const currentExample: SentenceExample | null = useMemo(() => {
    return currentBatchItem?.example ?? null;
  }, [currentBatchItem]);

  const currentPhaseRef = useRef<StudyPhase>(currentPhase);
  const exampleIndexRef = useRef<number>(exampleIndex);
  const currentExampleRef = useRef<SentenceExample | null>(null);
  const currentCardRef = useRef<SentenceCard | null>(null);

  useEffect(() => {
    currentPhaseRef.current = currentPhase;
  }, [currentPhase]);

  useEffect(() => {
    exampleIndexRef.current = exampleIndex;
  }, [exampleIndex]);

  useEffect(() => {
    currentExampleRef.current = currentExample;
  }, [currentExample]);

  useEffect(() => {
    currentCardRef.current = currentCard;
  }, [currentCard]);

  /**
   * State machine: each phase iterates through all 3 examples in the batch (0→1→2),
   * then moves to the next phase. The last phase ("listening") advances
   * to the next batch after completing all 3 examples.
   */
  const goToNextPhaseOrBatch = () => {
    if (showBatchResult) return;

    const currentPhaseValue = currentPhaseRef.current;
    const currentExampleIdx = exampleIndexRef.current;

    switch (currentPhaseValue) {
      case "shadowing":
        if (currentExampleIdx < 2) {
          setExampleIndex((i) => i + 1);
          return;
        }
        setExampleIndex(0);
        setCurrentPhase("fill");
        return;

      case "fill":
        if (currentExampleIdx < 2) {
          setExampleIndex((i) => i + 1);
          return;
        }
        setExampleIndex(0);
        setCurrentPhase("reorder");
        return;

      case "reorder":
        if (currentExampleIdx < 2) {
          setExampleIndex((i) => i + 1);
          return;
        }
        setExampleIndex(0);
        setCurrentPhase("listening");
        return;

      case "listening": {
        if (currentExampleIdx < 2) {
          setExampleIndex((i) => i + 1);
          return;
        }
        // All 3 examples in listening done → generate new batch, back to shadowing
        setExampleIndex(0);
        setCurrentPhase("shadowing");
        if (filteredSentences.length > 0) {
          const newBatch = generateRandomBatch(filteredSentences);
          setCurrentBatchExamples(newBatch);
          setBatchCounter((c) => c + 1);
        }
        return;
      }
    }
  };

  const markMistakeOnce = (phase: StudyPhase, cardId: string) => {
    if (phase === "shadowing") return;
    const key = `${cardId}:${phase}:${exampleIndex}`;
    if (mistakeKeysRef.current.has(key)) return;
    mistakeKeysRef.current.add(key);
    setBatchMistakeCount((c) => c + 1);
  };

  const resetInteractionStateForCard = (card: SentenceCard, example: SentenceExample) => {
    setSelectedChoice(null);
    setResult(null);
    setChoices(shuffle([card.targetWord, ...card.distractors]));

    // Step 3: 並び替え - ensureMinimumChunksで最低3つ以上のフレーズに分割
    const reorderChunks = ensureMinimumChunks(example.chinese, example.chunks);
    const tokens = reorderChunks.map((text, idx) => ({
      id: `${idx}-${text}`,
      text,
    }));
    setReorderPool(shuffle(tokens));
    setReorderAnswer([]);
    setReorderResult(null);

    // Step 4: 中国語4択聴解問題を静的データから生成（API不要）
    console.log(`[Step 4 Transition] Generating listeningQA for ${example.chinese}`);
    const qa = generateListeningQA(example.chinese);
    setListeningQA(qa);
    console.log(`[Step 4 Transition] Successfully generated listeningQA from static data`, qa);
    setListenSelected(null);
    setListenResult(null);
  };

  const forceClearInteractionState = () => {
    setSelectedChoice(null);
    setResult(null);
    setReorderAnswer([]);
    setReorderResult(null);

    setListenSelected(null);
    setListenResult(null);
    setListeningQA(null);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as unknown;

        const phaseOrder: StudyPhase[] = ["shadowing", "fill", "reorder", "listening"];

        const asObj = (v: unknown): v is Record<string, unknown> => Boolean(v) && typeof v === "object";

        const legacyBand: "A" | "B" | "C" | null =
          asObj(parsed) && (parsed.selectedBand === "A" || parsed.selectedBand === "B" || parsed.selectedBand === "C")
            ? (parsed.selectedBand as "A" | "B" | "C")
            : null;

        const safeCourse: StudyCourse = (() => {
          if (asObj(parsed) && (parsed.selectedCourse === "B3" || parsed.selectedCourse === "B4" || parsed.selectedCourse === "C")) {
            return parsed.selectedCourse as StudyCourse;
          }
          if (legacyBand === "B") return "B4";
          if (legacyBand === "C") return "C";
          return "B3";
        })();

        // Migrate old phase names: "learn" → "shadowing", "translate" → "listening"
        const rawPhase = asObj(parsed) ? parsed.currentPhase : undefined;
        const phaseNameMap: Record<string, StudyPhase> = {
          learn: "shadowing",
          fill: "fill",
          reorder: "reorder",
          translate: "listening",
          shadowing: "shadowing",
          listening: "listening",
        };
        const safePhase: StudyPhase =
          typeof rawPhase === "string" && phaseNameMap[rawPhase]
            ? phaseNameMap[rawPhase]
            : "shadowing";

        const rawExampleIndex = asObj(parsed) ? parsed.exampleIndex : undefined;
        const safeExampleIndex = typeof rawExampleIndex === "number" ? Math.max(0, Math.min(2, Math.floor(rawExampleIndex))) : 0;

        const rawBatchCounter = asObj(parsed) ? parsed.batchCounter : undefined;
        const safeBatchCounter = typeof rawBatchCounter === "number" ? Math.max(0, Math.floor(rawBatchCounter)) : 0;

        setSelectedCourse(safeCourse);
        setBatchCounter(safeBatchCounter);
        setExampleIndex(safeExampleIndex);
        setCurrentPhase(safePhase);
      }
    } catch {
      try {
        window.localStorage.removeItem(PROGRESS_STORAGE_KEY);
      } catch {
        // ignore
      }
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Generate initial batch after initialization
  useEffect(() => {
    if (!isInitialized) return;
    if (filteredSentences.length === 0) return;
    if (currentBatchExamples.length === 0) {
      setCurrentBatchExamples(generateRandomBatch(filteredSentences));
    }
  }, [isInitialized]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(LEARNING_HISTORY_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as LearningHistoryEntry[];
        if (Array.isArray(parsed)) {
          const cleaned = parsed
            .filter((e) => e && typeof e.date === "string" && typeof e.score === "number")
            .map((e) => ({ date: e.date, score: Math.max(0, Math.floor(e.score)) }))
            .slice(-365);
          setLearningHistory(cleaned);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isInitialized) return;
    try {
      window.localStorage.setItem(LEARNING_HISTORY_STORAGE_KEY, JSON.stringify(learningHistory));
    } catch {
      // ignore
    }
  }, [isInitialized, learningHistory]);

  useEffect(() => {
    // Reset phase/batch when course changes
    if (!isInitialized) return;
    if (!hasHandledBandEffectRef.current) {
      hasHandledBandEffectRef.current = true;
      return;
    }
    setShowBatchResult(false);
    setBatchMistakeCount(0);
    mistakeKeysRef.current = new Set();
    setExampleIndex(0);
    setCurrentPhase("shadowing");
    setBatchCounter(0);
    if (filteredSentences.length > 0) {
      setCurrentBatchExamples(generateRandomBatch(filteredSentences));
    }
  }, [selectedCourse]);

  useEffect(() => {
    if (!currentCard || !currentExample) return;
    if (currentPhase !== "shadowing") return;
    setListenSelected(null);
    setListenResult(null);
    setListeningQA(null);
  }, [currentCard?.id, currentPhase, exampleIndex, filteredSentences]);

  useEffect(() => {
    if (!currentCard || !currentExample) return;
    if (filteredSentences.length === 0) return;

    // Prefetch all examples in the current batch
    currentBatchExamples.forEach((item) => {
      void prefetchTts(item.example.chinese);
    });
  }, [currentBatchExamples, exampleIndex, currentCard?.id, filteredSentences]);

  useEffect(() => {
    if (!currentCard || !currentExample) return;
    resetInteractionStateForCard(currentCard, currentExample);
  }, [currentCard?.id, currentPhase, exampleIndex]);

  useEffect(() => {
    // Only clear on course/batch change, do not tie to phase/index to avoid race conditions with resetInteractionStateForCard
    forceClearInteractionState();
  }, [currentBatchExamples, selectedCourse]);

  useEffect(() => {
    if (!currentCard || !currentExample) return;
    if (currentPhase !== "reorder") return;
    if (reorderResult) return;

    // 強化: chunksのかわりにensureMinimumChunksの結果で判定
    const reorderChunks = ensureMinimumChunks(currentExample.chinese, currentExample.chunks);
    if (reorderChunks.length > 0 && reorderAnswer.length === reorderChunks.length) {
      const actual = reorderAnswer.map((t) => t.text);
      const isCorrect = actual.join("|") === reorderChunks.join("|");
      setReorderResult(isCorrect ? "correct" : "wrong");
      if (isCorrect) {
        void playTts(currentExample.chinese);
      }
    }
  }, [currentPhase, currentCard, currentExample, reorderAnswer, reorderResult]);

  useEffect(() => {
    return () => {
      stopTts();
    };
  }, []);

  useEffect(() => {
    if (!currentCard) return;
    if (currentPhase !== "reorder") return;
    if (reorderResult !== "wrong") return;
    markMistakeOnce("reorder", currentCard.id);
  }, [currentCard, currentPhase, reorderResult]);

  const totalCount = filteredSentences.length;

  const overallProgress = useMemo(() => {
    const phaseOrder: StudyPhase[] = ["shadowing", "fill", "reorder", "listening"];
    const phasePos = phaseOrder.indexOf(currentPhase);
    const safePhasePos = Math.max(0, phasePos);

    const stepsPerBatch = phaseOrder.length * 3; // 4 phases × 3 examples = 12 steps per batch
    const totalBatches = Math.max(1, Math.ceil(totalCount / 3));
    const currentBatchNum = Math.max(0, batchCounter);

    const stepWithinBatch = safePhasePos * 3 + exampleIndex + 1; // 1-indexed

    const currentStep = currentBatchNum * stepsPerBatch + stepWithinBatch;
    const totalSteps = totalBatches * stepsPerBatch;
    return {
      currentStep: Math.min(currentStep, Math.max(totalSteps, 1)),
      totalSteps: Math.max(totalSteps, 1),
    };
  }, [exampleIndex, batchCounter, currentPhase, totalCount]);

  const handleGiveUpFill = () => {
    if (!currentCard) return;
    markMistakeOnce("fill", currentCard.id);
    setSelectedChoice(currentCard.targetWord);
    setResult("correct");
  };

  const handleGiveUpReorder = () => {
    if (!currentCard || !currentExample) return;
    markMistakeOnce("reorder", currentCard.id);
    const reorderChunks = ensureMinimumChunks(currentExample.chinese, currentExample.chunks);
    const tokens = reorderChunks.map((text, idx) => ({
      id: `${idx}-${text}`,
      text,
    }));
    setReorderPool([]);
    setReorderAnswer(tokens);
    setReorderResult("correct");
  };

  const handleGiveUpListening = () => {
    if (!currentCard || !currentExample) return;
    markMistakeOnce("listening", currentCard.id);
    if (listeningQA) {
      setListenSelected(listeningQA.answerIndex);
    }
    setListenResult("correct");

    const creditKey = `${selectedCourse}:${currentCard.id}:ex${exampleIndex}`;
    if (!creditedCardKeysRef.current.has(creditKey)) {
      creditedCardKeysRef.current.add(creditKey);
      addTodayScore(1);
    }
  };

  const totalQuestionsPerBatch = 9;
  const accuracyPct = useMemo(() => {
    const correct = Math.max(0, totalQuestionsPerBatch - batchMistakeCount);
    const pct = (correct / totalQuestionsPerBatch) * 100;
    return Math.max(0, Math.min(100, Math.round(pct)));
  }, [batchMistakeCount]);

  const encourageMessage = useMemo(() => {
    if (accuracyPct >= 90) return "とても良い！その調子です";
    if (accuracyPct >= 70) return "いい感じです";
    return "大丈夫。ここから伸びます";
  }, [accuracyPct]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isInitialized) return;
    const payload = {
      selectedCourse,
      currentPhase,
      batchCounter,
      exampleIndex,
    };
    try {
      window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // ignore
    }
  }, [exampleIndex, batchCounter, currentPhase, isInitialized, selectedCourse]);

  const handleSkipBatch = () => {
    if (filteredSentences.length === 0) return;
    setShowBatchResult(false);
    setBatchMistakeCount(0);
    mistakeKeysRef.current = new Set();
    setExampleIndex(0);
    setCurrentPhase("shadowing");
    setBatchCounter((c) => c + 1);
    const newBatch = generateRandomBatch(filteredSentences);
    setCurrentBatchExamples(newBatch);
  };

  if (!isInitialized || currentBatchExamples.length === 0) {
    return (
      <main className="min-h-screen flex flex-col max-w-2xl mx-auto px-4 py-6 md:py-12 gap-6 md:gap-8 pb-16 md:pb-12">
        {/* Header */}
        <header className="flex flex-col gap-6 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-primary p-2 rounded-xl text-primary-foreground shadow-lg">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-headline font-bold text-primary tracking-tight">
              Formosan Wordsmith
            </h1>
          </div>
        </header>

        {/* Tab Skeleton */}
        <div className="grid grid-cols-2 w-full bg-muted/30 p-1 rounded-2xl h-10 animate-pulse">
          <div className="bg-white/80 rounded-xl shadow-sm h-8" />
          <div className="h-8" />
        </div>

        {/* Card Skeleton */}
        <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center min-h-[350px] gap-6 animate-pulse">
          <div className="h-6 w-1/3 bg-gray-200 rounded-full" />
          <div className="h-10 w-2/3 bg-gray-200 rounded-full" />
          <div className="h-4 w-1/2 bg-gray-200 rounded-full" />
          <div className="h-4 w-1/3 bg-gray-200 rounded-full" />
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-12 w-12 rounded-full bg-gray-200" />
          </div>
          <div className="h-14 w-full bg-gray-200 rounded-2xl mt-4" />
        </Card>

        <footer className="mt-auto text-center py-8">
          <p className="text-xs text-muted-foreground/60 font-body">
            &copy; 2026 Formosan Wordsmith.
          </p>
        </footer>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col max-w-2xl mx-auto px-4 py-6 md:py-12 gap-6 md:gap-8 pb-16 md:pb-12">
      {/* Header */}
      <header className="flex flex-col gap-6 text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="bg-primary p-2 rounded-xl text-primary-foreground shadow-lg">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-headline font-bold text-primary tracking-tight">
            Formosan Wordsmith
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <p className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground/60 flex items-center justify-center gap-2">
              <Trophy className="h-3 w-3" /> Step 1: Select Course
            </p>
            <div className="grid w-full grid-cols-3 gap-2">
              <Button
                type="button"
                variant={selectedCourse === "B3" ? "default" : "outline"}
                className="rounded-xl font-headline"
                onClick={() => setSelectedCourse("B3")}
              >
                <span className="text-xs sm:text-sm leading-tight">Band Bレベル3</span>
              </Button>
              <Button
                type="button"
                variant={selectedCourse === "B4" ? "default" : "outline"}
                className="rounded-xl font-headline"
                onClick={() => setSelectedCourse("B4")}
              >
                <span className="text-xs sm:text-sm leading-tight">Band Bレベル4</span>
              </Button>
              <Button
                type="button"
                variant={selectedCourse === "C" ? "default" : "outline"}
                className="rounded-xl font-headline"
                onClick={() => setSelectedCourse("C")}
              >
                <span className="text-xs sm:text-sm leading-tight">Band C</span>
              </Button>
            </div>
            <div className="text-xs text-muted-foreground font-body leading-relaxed">
              {selectedCourse === "B3" && "日常会話からビジネス・社会問題へステップアップする必須コア語彙"}
              {selectedCourse === "B4" && "台湾の時事、ビジネス、社会問題を深く読み解く実践・応用語彙"}
              {selectedCourse === "C" && "より高度な四字熟語や抽象表現を極めるエクストラステージ"}
            </div>
          </div>
        </div>
      </header>

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "study" | "dashboard")}>
        <TabsList className="grid grid-cols-2 w-full rounded-2xl">
          <TabsTrigger value="study" className="rounded-xl">
            Study
          </TabsTrigger>
          <TabsTrigger value="dashboard" className="rounded-xl">
            Dashboard
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
            <CardHeader className="space-y-2">
              <CardTitle className="font-headline text-lg">過去7日間の学習推移</CardTitle>
              <div className="text-xs text-muted-foreground">
                正解（Step4クリア）した回数を日別に集計します
              </div>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={last7DaysChartData} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 11 }}
                    tickFormatter={(v) => String(v).slice(5)}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis allowDecimals={false} tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    formatter={(value) => [value, "正解数"]}
                    labelFormatter={(label) => `日付: ${label}`}
                  />
                  <Bar dataKey="score" fill="#10b981" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="study">

      {/* Progress & Navigation */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs font-headline font-bold uppercase tracking-wider text-muted-foreground px-1">
          <div className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            <span>
              Progress ({selectedCourse === "B3" ? "Band B Level 3" : selectedCourse === "B4" ? "Band B Level 4" : "Band C"})
            </span>
          </div>
          <span>{Math.min(batchCounter + 1, Math.ceil(totalCount / 3))} / {Math.max(1, Math.ceil(totalCount / 3))}</span>
        </div>
        <div className="text-[11px] text-muted-foreground/80 text-right px-1">
          例文 {exampleIndex + 1} / 3 &middot; {overallProgress.currentStep} / {overallProgress.totalSteps}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="space-y-8">
        {showBatchResult && (
          <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
            <CardHeader className="space-y-3">
              <CardTitle className="font-headline text-lg">🎉 トレーニング完了！</CardTitle>
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground font-body">スコア（正答率）</p>
                <p className="text-4xl font-headline font-bold">{accuracyPct}%</p>
                <p className="text-sm font-headline font-bold text-emerald-600">{encourageMessage}</p>
                <p className="text-xs text-muted-foreground font-body">（9問：シャドーイング/穴埋め/並び替え/聴力）</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                type="button"
                className="w-full rounded-2xl h-14 text-base font-headline"
                onClick={() => {
                  setShowBatchResult(false);
                  setBatchMistakeCount(0);
                  mistakeKeysRef.current = new Set();
                  setExampleIndex(0);
                  setCurrentPhase("shadowing");
                  setBatchCounter((c) => c + 1);
                  if (filteredSentences.length > 0) {
                    setCurrentBatchExamples(generateRandomBatch(filteredSentences));
                  }
                }}
              >
                次の単語へ
              </Button>
            </CardContent>
          </Card>
        )}

        {/* ============================================================
            Step 1: 音声認識シャドーイング (shadowing)
            ============================================================ */}
        {!showBatchResult && currentPhase === "shadowing" && currentCard && currentExample && (
          <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <CardTitle className="font-headline text-lg">
                  Step1：音声認識シャドーイング
                  <span className="ml-2 text-sm text-muted-foreground font-normal">
                    （例文 {exampleIndex + 1}/3）
                  </span>
                </CardTitle>
                <AudioButton text={currentExample.chinese} />
              </div>

              <div className="text-center space-y-3">
                <p className="text-sm text-muted-foreground font-body">
                  {currentExample.situation} — 耳で聴いた発音を頼りに、マイクに向かって声に出してみましょう。
                </p>

                {/* 例文・ピンイン・日本語訳を常時表示 */}
                <div className="space-y-2 py-2">
                  <p className="text-lg sm:text-xl md:text-2xl font-body font-medium leading-relaxed whitespace-normal break-words">
                    {currentExample.chinese}
                  </p>
                  <p className="text-sm text-muted-foreground/80 font-body leading-relaxed">
                    {currentExample.pinyin}
                  </p>
                  <p className="text-sm text-muted-foreground font-body whitespace-normal break-words">
                    {currentExample.japanese}
                  </p>
                </div>

                {/* Speech recognition area */}
                <div className="bg-secondary/10 rounded-2xl p-6 border border-dashed border-secondary/50 min-h-[120px] flex flex-col items-center justify-center">
                  {!isListening && !recognizedText && (
                    <p className="text-sm text-muted-foreground/50 font-body">
                      マイクボタンを押して音声認識を開始
                    </p>
                  )}
                  {isListening && !recognizedText && (
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-rose-500 animate-pulse" />
                      <span className="text-sm text-rose-600 font-headline font-bold animate-pulse">
                        音声認識中...
                      </span>
                    </div>
                  )}
                  {recognizedText && (
                    <div className="space-y-2 w-full">
                      <p className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground/50 text-left">
                        あなたの発話認識結果
                      </p>
                      <p className="text-xl sm:text-2xl font-body font-medium leading-relaxed whitespace-normal break-words">
                        {(() => {
                          const targetText = currentExample.chinese;
                          const chars = compareText(recognizedText.trim(), targetText);
                          return chars.map((c, idx) => (
                            <span
                              key={idx}
                              className={cn(
                                c.isCorrect
                                  ? "text-foreground font-bold"
                                  : "text-gray-300 dark:text-gray-500"
                              )}
                            >
                              {c.char}
                            </span>
                          ));
                        })()}
                      </p>
                    </div>
                  )}
                </div>

                {/* Mic button */}
                <div className="flex items-center justify-center gap-4">
                  {!isListening ? (
                    <Button
                      type="button"
                      variant="default"
                      className="rounded-full h-14 w-14 p-0 shadow-lg bg-emerald-600 hover:bg-emerald-700"
                      onClick={startListening}
                      title="音声認識開始"
                    >
                      <Mic className="h-6 w-6 text-white" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="default"
                      className="rounded-full h-14 w-14 p-0 shadow-lg bg-rose-600 hover:bg-rose-700 animate-pulse"
                      onClick={stopListening}
                      title="音声認識終了"
                    >
                      <Mic className="h-6 w-6 text-white" />
                    </Button>
                  )}
                  {isListening && (
                    <span className="text-xs font-headline font-bold text-rose-600 animate-pulse">
                      音声入力中...
                    </span>
                  )}
                  {!isListening && recognizedText && (
                    <div className="flex flex-col items-center gap-2 animate-in fade-in zoom-in duration-500">
                      <span className="text-sm font-headline font-bold text-emerald-600 mb-1">
                        認識完了 ✓
                      </span>
                      {(() => {
                        const comp = compareText(recognizedText, currentExample.chinese);
                        const correctCount = comp.filter((c) => c.isCorrect).length;
                        const score = currentExample.chinese.length > 0 
                          ? Math.round((correctCount / currentExample.chinese.length) * 100)
                          : 0;
                        let scoreColor = "text-rose-500";
                        if (score >= 80) scoreColor = "text-emerald-500";
                        else if (score >= 50) scoreColor = "text-amber-500";

                        return (
                          <div className={`text-5xl font-headline font-black tracking-tighter ${scoreColor} drop-shadow-sm`}>
                            {score} <span className="text-xl opacity-80 font-medium">分</span>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {currentCard.pronunciationNote && (
                <div className="text-sm text-foreground/90 bg-amber-50/80 rounded-2xl p-4 border border-amber-200">
                  <p className="font-headline font-bold mb-1">発音のコツ</p>
                  <p className="font-body whitespace-pre-wrap">{currentCard.pronunciationNote}</p>
                </div>
              )}

              <Button
                type="button"
                className="w-full rounded-2xl h-14 text-base font-headline"
                onClick={() => {
                  goToNextPhaseOrBatch();
                }}
              >
                次へ（下一題）
              </Button>
            </CardContent>
          </Card>
        )}

        {/* ============================================================
            Step 2: 穴埋め (fill)
            ============================================================ */}
        {!showBatchResult && currentPhase === "fill" && currentCard && currentExample && (
          <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <CardTitle className="font-headline text-lg">
                  Step2：穴埋め
                  <span className="ml-2 text-sm text-muted-foreground font-normal">
                    （例文 {exampleIndex + 1}/3）
                  </span>
                </CardTitle>
                {result === "correct" && <AudioButton text={currentExample.chinese} />}
              </div>

              <div className="text-center space-y-2">
                <p className="text-lg sm:text-xl md:text-2xl font-body font-medium leading-relaxed whitespace-normal break-words">
                  {currentExample.chinese.includes(currentCard.targetWord)
                    ? currentExample.chinese.replace(currentCard.targetWord, "___")
                    : currentExample.chinese}
                </p>
                <p className="text-sm text-muted-foreground font-body whitespace-normal break-words">{currentExample.japanese}</p>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {choices.map((c) => {
                  const isSelected = selectedChoice === c;
                  const isAnswer = c === currentCard.targetWord;

                  const isCorrectSelected = result === "correct" && isSelected;
                  const isWrongSelected = result === "wrong" && isSelected;

                  return (
                    <Button
                      key={c}
                      variant="outline"
                      onClick={() => {
                        if (result) return;
                        setSelectedChoice(c);
                        const isCorrect = c === currentCard.targetWord;
                        setResult(isCorrect ? "correct" : "wrong");
                        if (isCorrect) {
                          void playTts(currentExample.chinese);
                        }
                        if (!isCorrect) {
                          markMistakeOnce("fill", currentCard.id);
                        }
                      }}
                      className={cn(
                        "rounded-2xl h-auto min-h-12 py-3 text-sm md:text-base font-headline whitespace-normal break-words",
                        isCorrectSelected && "border-emerald-500 text-emerald-700",
                        isWrongSelected && "border-rose-500 text-rose-700",
                        result && isAnswer && "border-emerald-600"
                      )}
                    >
                      {c}
                    </Button>
                  );
                })}
              </div>

              <div className="flex justify-end">
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full text-muted-foreground"
                  disabled={!currentCard || result === "correct"}
                  onClick={() => {
                    handleGiveUpFill();
                  }}
                >
                  諦める（答えを見る）
                </Button>
              </div>

              {result && (
                <div className="space-y-2">
                  <div className="text-center text-2xl font-headline font-bold">
                    {result === "correct" ? "○" : "×"}
                  </div>
                  <div className="text-sm text-foreground/90 bg-secondary/30 rounded-2xl p-4">
                    <p className="font-headline font-bold mb-1">解説</p>
                    <p className="font-body whitespace-pre-wrap">{highlightQuantifiers(currentCard.grammarNote)}</p>
                  </div>

                  {result === "correct" && currentCard.pronunciationNote && (
                    <div className="text-sm text-foreground/90 bg-amber-50/80 rounded-2xl p-4 border border-amber-200">
                      <p className="font-headline font-bold mb-1">発音のコツ</p>
                      <p className="font-body whitespace-pre-wrap">{currentCard.pronunciationNote}</p>
                    </div>
                  )}

                  {result === "correct" ? (
                    <Button
                      type="button"
                      className="w-full rounded-2xl h-14 text-base font-headline"
                      onClick={() => {
                        goToNextPhaseOrBatch();
                      }}
                    >
                      次へ（下一題）
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      onClick={() => {
                        if (!currentCard || !currentExample) return;
                        setSelectedChoice(null);
                        setResult(null);
                        setChoices(shuffle([currentCard.targetWord, ...currentCard.distractors]));
                      }}
                      className="w-full rounded-full"
                    >
                      もう一回
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* ============================================================
            Step 3: 並び替え (reorder) — 最低3つ以上のカードに強化
            ============================================================ */}
        {!showBatchResult && currentPhase === "reorder" && currentCard && currentExample && (
          <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-headline text-lg">
                  Step3：並び替え
                  <span className="ml-2 text-sm text-muted-foreground font-normal">
                    （例文 {exampleIndex + 1}/3）
                    <span className="ml-2 text-[10px] text-muted-foreground/60">
                      ({ensureMinimumChunks(currentExample.chinese, currentExample.chunks).length}枚のカード)
                    </span>
                  </span>
                </CardTitle>
                {reorderResult === "correct" && <AudioButton text={currentExample.chinese} />}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground font-body">日本語</p>
                <p className="text-sm md:text-base font-body text-foreground/90 whitespace-normal break-words">{currentExample.japanese}</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground">解答エリア</p>
                <div className="min-h-16 bg-secondary/20 rounded-2xl p-3 flex flex-wrap gap-2 justify-center">
                  {reorderAnswer.length === 0 ? (
                    <span className="text-sm text-muted-foreground">下のカードをタップして並べてください</span>
                  ) : (
                    reorderAnswer.map((t) => (
                      <Button
                        key={t.id}
                        variant="outline"
                        size="sm"
                        className="rounded-xl h-9 px-3"
                        onClick={() => {
                          if (reorderResult) return;
                          setReorderAnswer((prev) => prev.filter((x) => x.id !== t.id));
                          setReorderPool((prev) => shuffle([...prev, t]));
                        }}
                      >
                        {t.text}
                      </Button>
                    ))
                  )}
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full text-muted-foreground"
                  disabled={!currentCard || reorderResult === "correct"}
                  onClick={() => {
                    handleGiveUpReorder();
                  }}
                >
                  諦める（答えを見る）
                </Button>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground">選択肢プール（{reorderPool.length}枚）</p>
                <div className="bg-white/50 rounded-2xl p-3 flex flex-wrap gap-2 justify-center">
                  {reorderPool.map((t) => (
                    <Button
                      key={t.id}
                      variant="outline"
                      size="sm"
                      className="rounded-xl h-9 px-3"
                      onClick={() => {
                        if (reorderResult) return;
                        setReorderPool((prev) => prev.filter((x) => x.id !== t.id));
                        setReorderAnswer((prev) => [...prev, t]);
                      }}
                    >
                      {t.text}
                    </Button>
                  ))}
                </div>
              </div>

              {reorderResult && (
                <div className="space-y-2">
                  <div className="text-center text-2xl font-headline font-bold">
                    {reorderResult === "correct" ? "○" : "×"}
                  </div>

                  {reorderResult === "correct" && (
                    <div className="text-sm text-foreground/90 bg-secondary/30 rounded-2xl p-4">
                      <p className="font-headline font-bold mb-1">解説</p>
                      <p className="font-body whitespace-pre-wrap">{highlightQuantifiers(currentCard.grammarNote)}</p>
                    </div>
                  )}

                  {reorderResult === "correct" && currentCard.pronunciationNote && (
                    <div className="text-sm text-foreground/90 bg-amber-50/80 rounded-2xl p-4 border border-amber-200">
                      <p className="font-headline font-bold mb-1">発音のコツ</p>
                      <p className="font-body whitespace-pre-wrap">{currentCard.pronunciationNote}</p>
                    </div>
                  )}

                  {reorderResult === "correct" && (
                    <Button
                      type="button"
                      className="w-full rounded-2xl h-14 text-base font-headline"
                      onClick={() => {
                        goToNextPhaseOrBatch();
                      }}
                    >
                      次へ（下一題）
                    </Button>
                  )}

                  {reorderResult === "wrong" && (
                    <Button
                      variant="ghost"
                      className="w-full rounded-full"
                      onClick={() => {
                        if (!currentCard || !currentExample) return;
                        const reorderChunks = ensureMinimumChunks(currentExample.chinese, currentExample.chunks);
                        const tokens = reorderChunks.map((text, idx) => ({
                          id: `${idx}-${text}`,
                          text,
                        }));
                        setReorderPool(shuffle(tokens));
                        setReorderAnswer([]);
                        setReorderResult(null);
                      }}
                    >
                      リセット
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* ============================================================
            Step 4: 聴力・趣旨選択 (listening) — 中国語4択に刷新
            ============================================================ */}
        {!showBatchResult && currentPhase === "listening" && currentCard && currentExample && listeningQA && (
          <Card className="border-none bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between">
                <CardTitle className="font-headline text-lg">
                  Step4：聴力・趣旨選択
                  <span className="ml-2 text-sm text-muted-foreground font-normal">
                    （例文 {exampleIndex + 1}/3）
                  </span>
                </CardTitle>
                {listenResult === "correct" && <AudioButton text={currentExample.chinese} />}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Central TTS button - NO Chinese/pinyin/japanese visible */}
              <div className="flex flex-col items-center gap-4 py-6">
                <p className="text-sm text-muted-foreground font-body text-center">
                  文章を見ずに、耳だけで聴いて内容を理解しましょう
                </p>
                <AudioButton
                  text={currentExample.chinese}
                  size="lg"
                  className="h-20 w-20 rounded-full bg-primary/10 hover:bg-primary/20"
                />
                <p className="text-xs text-muted-foreground/70 font-body text-center">
                  ボタンを押して音声を再生
                </p>
              </div>

              {/* Only show choices if the user hasn't answered correctly yet */}
              {!listenResult && (
                <div className="space-y-4">
                  {/* 中国語の質問文 */}
                  <p className="text-base font-headline font-bold text-center leading-relaxed whitespace-normal break-words px-2">
                    {listeningQA.question}
                  </p>

                  {/* 4つの中国語選択肢（縦並び） */}
                  <div className="grid grid-cols-1 gap-3">
                    {listeningQA.options.map((option, idx) => {
                      const labels = ["A", "B", "C", "D"];
                      const isSelected = listenSelected === idx;
                      const isCorrectAnswer = idx === listeningQA.answerIndex;

                      let variantStyle = "border-muted/40 hover:border-primary/40";
                      if (isSelected && listenResult === "correct") {
                        variantStyle = "border-emerald-500 text-emerald-700 bg-emerald-50/50";
                      } else if (isSelected && listenResult === "wrong") {
                        variantStyle = "border-rose-500 text-rose-700 bg-rose-50/50";
                      }

                      return (
                        <Button
                          key={`opt-${idx}`}
                          variant="outline"
                          onClick={() => {
                            if (listenResult) return;
                            setListenSelected(idx);
                            const isCorrect = idx === listeningQA.answerIndex;
                            setListenResult(isCorrect ? "correct" : "wrong");

                            if (isCorrect) {
                              void playTts(currentExample.chinese);

                              const creditKey = `${selectedCourse}:${currentCard.id}:ex${exampleIndex}`;
                              if (!creditedCardKeysRef.current.has(creditKey)) {
                                creditedCardKeysRef.current.add(creditKey);
                                addTodayScore(1);
                              }
                            }
                            if (!isCorrect) {
                              markMistakeOnce("listening", currentCard.id);
                            }
                          }}
                          disabled={!!listenResult}
                          className={cn(
                            "rounded-2xl h-auto min-h-14 py-4 text-base font-headline whitespace-normal break-words text-left",
                            variantStyle,
                            listenResult && isCorrectAnswer && "border-emerald-600 bg-emerald-50/30",
                          )}
                        >
                          <span className="inline-flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-muted text-muted-foreground text-xs font-bold shrink-0">
                              {labels[idx]}
                            </span>
                            <span>{option}</span>
                          </span>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Result display */}
              {listenResult && (
                <div className="space-y-4">
                  <div className="text-center text-2xl font-headline font-bold">
                    {listenResult === "correct" ? "○ 正解！" : "× 不正解"}
                  </div>

                  {/* Show correct answer when wrong */}
                  {listenResult === "wrong" && listeningQA && (
                    <div className="text-sm text-foreground/90 bg-secondary/20 rounded-2xl p-4">
                      <p className="font-headline font-bold mb-1">正解</p>
                      <p className="font-body text-base">
                        {["A", "B", "C", "D"][listeningQA.answerIndex]}: {listeningQA.options[listeningQA.answerIndex]}
                      </p>
                    </div>
                  )}

                  {listenResult === "correct" && (
                    <div className="text-sm text-foreground/90 bg-secondary/30 rounded-2xl p-4">
                      <p className="font-headline font-bold mb-1">解説</p>
                      <p className="font-body whitespace-pre-wrap">{highlightQuantifiers(currentCard.grammarNote)}</p>
                    </div>
                  )}

                  {listenResult === "correct" && currentCard.pronunciationNote && (
                    <div className="text-sm text-foreground/90 bg-amber-50/80 rounded-2xl p-4 border border-amber-200">
                      <p className="font-headline font-bold mb-1">発音のコツ</p>
                      <p className="font-body whitespace-pre-wrap">{currentCard.pronunciationNote}</p>
                    </div>
                  )}

                  {listenResult === "correct" ? (
                    <Button
                      type="button"
                      className="w-full rounded-2xl h-14 text-base font-headline"
                      onClick={() => {
                        goToNextPhaseOrBatch();
                      }}
                    >
                      次へ（下一題）
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        onClick={() => {
                          if (!currentCard || !currentExample) return;
                          // 新しい4択を生成し直す
                          const newQA = generateListeningQA(currentExample.chinese);
                          setListeningQA(newQA);
                          setListenSelected(null);
                          setListenResult(null);
                        }}
                        className="flex-1 rounded-full"
                      >
                        もう一回
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleGiveUpListening}
                        className="flex-1 rounded-full text-muted-foreground"
                      >
                        諦める（答えを見る）
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* Give up button before any selection */}
              {!listenResult && (
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full text-muted-foreground"
                    onClick={handleGiveUpListening}
                  >
                    諦める（答えを見る）
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </section>

        </TabsContent>
      </Tabs>

      <footer className="mt-auto text-center py-8">
        <p className="text-xs text-muted-foreground/60 font-body">
          &copy; {new Date().getFullYear()} Formosan Wordsmith.
        </p>
      </footer>

      {!showBatchResult && (
        <div className="fixed right-4 bottom-4 z-50">
          <Button
            type="button"
            variant="secondary"
            className="rounded-full shadow-lg"
            onClick={() => {
              handleSkipBatch();
            }}
          >
            次の単語へ
          </Button>
        </div>
      )}
    </main>
  );
}