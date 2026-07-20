"use client";

import { useCallback, useState } from "react";
import { loadPhraseBook, savePhraseBook } from "@/data/phraseBook";
import type { PhraseBookEntry } from "@/types/contextBuilder";

export function usePhraseBook() {
  const [entries, setEntries] = useState<PhraseBookEntry[]>(() => loadPhraseBook());

  const refresh = useCallback(() => {
    setEntries(loadPhraseBook());
  }, []);

  const addEntry = useCallback(
    (input: Omit<PhraseBookEntry, "id" | "createdAt">): PhraseBookEntry => {
      const entry: PhraseBookEntry = {
        ...input,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };
      setEntries((prev) => {
        const next = [entry, ...prev];
        savePhraseBook(next);
        return next;
      });
      return entry;
    },
    []
  );

  const removeEntry = useCallback((id: string) => {
    setEntries((prev) => {
      const next = prev.filter((e) => e.id !== id);
      savePhraseBook(next);
      return next;
    });
  }, []);

  return { entries, addEntry, removeEntry, refresh };
};
