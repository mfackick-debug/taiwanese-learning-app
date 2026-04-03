
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen, GraduationCap } from "lucide-react";
import { TOCFL_BAND_A } from "@/app/lib/vocabulary";
import { VocabularyCard } from "@/components/VocabularyCard";
import { CompositionSection } from "@/components/CompositionSection";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = TOCFL_BAND_A[currentIndex];
  const progress = ((currentIndex + 1) / TOCFL_BAND_A.length) * 100;

  const nextCard = () => {
    if (currentIndex < TOCFL_BAND_A.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <main className="min-h-screen flex flex-col max-w-2xl mx-auto px-4 py-8 md:py-12 gap-8">
      {/* Header */}
      <header className="flex flex-col gap-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="bg-primary p-2 rounded-xl text-primary-foreground shadow-lg">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-headline font-bold text-primary tracking-tight">
            Formosan Wordsmith
          </h1>
        </div>
        <p className="text-muted-foreground font-body text-sm font-medium">
          台湾華語マスターへの第一歩
        </p>
      </header>

      {/* Progress & Navigation Controls */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs font-headline font-bold uppercase tracking-wider text-muted-foreground px-1">
          <div className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            <span>Progress</span>
          </div>
          <span>{currentIndex + 1} / {TOCFL_BAND_A.length}</span>
        </div>
        <Progress value={progress} className="h-2 bg-secondary" />
        
        <div className="flex justify-between items-center pt-2">
          <Button
            variant="ghost"
            onClick={prevCard}
            disabled={currentIndex === 0}
            className="rounded-full hover:bg-primary/5 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            戻る
          </Button>
          <Button
            variant="ghost"
            onClick={nextCard}
            disabled={currentIndex === TOCFL_BAND_A.length - 1}
            className="rounded-full hover:bg-primary/5 disabled:opacity-30"
          >
            次へ
            <ChevronRight className="h-5 w-5 ml-1" />
          </Button>
        </div>
      </section>

      {/* Vocabulary Flashcard Section */}
      <section>
        <VocabularyCard key={currentItem.id} item={currentItem} />
      </section>

      {/* Interactive Composition Section */}
      <section className="pb-12">
        <CompositionSection key={`${currentItem.id}-composition`} vocabularyWord={currentItem.word} />
      </section>

      {/* Footer / Info */}
      <footer className="mt-auto text-center py-8">
        <p className="text-xs text-muted-foreground/60 font-body">
          &copy; {new Date().getFullYear()} Formosan Wordsmith. Powered by AI and Taiwan Spirit.
        </p>
      </footer>
    </main>
  );
}
