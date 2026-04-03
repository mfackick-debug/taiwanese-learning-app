"use client";

import { useState, useMemo, useEffect } from "react";
import { ChevronLeft, ChevronRight, BookOpen, GraduationCap, Trophy, Languages } from "lucide-react";
import { VOCABULARY_DATA } from "@/app/lib/vocabulary";
import { VocabularyCard } from "@/components/VocabularyCard";
import { CompositionSection } from "@/components/CompositionSection";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [selectedLevel, setSelectedLevel] = useState<'A' | 'B'>('A');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPinyin, setShowPinyin] = useState(true);

  // Filter vocabulary based on selected level
  const filteredVocab = useMemo(() => {
    return VOCABULARY_DATA.filter(item => item.level === selectedLevel);
  }, [selectedLevel]);

  // Reset index when level changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedLevel]);

  const currentItem = filteredVocab[currentIndex];
  const progress = filteredVocab.length > 0 ? ((currentIndex + 1) / filteredVocab.length) * 100 : 0;

  const nextCard = () => {
    if (currentIndex < filteredVocab.length - 1) {
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
      <header className="flex flex-col gap-6 text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="bg-primary p-2 rounded-xl text-primary-foreground shadow-lg">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-headline font-bold text-primary tracking-tight">
            Formosan Wordsmith
          </h1>
        </div>

        {/* Level Selection Tabs */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground/60 flex items-center justify-center gap-2">
              <Trophy className="h-3 w-3" /> Select Your Level
            </p>
            <Tabs 
              defaultValue="A" 
              className="w-full"
              onValueChange={(val) => setSelectedLevel(val as 'A' | 'B')}
            >
              <TabsList className="grid w-full grid-cols-2 p-1 bg-secondary/50 rounded-2xl h-12">
                <TabsTrigger 
                  value="A" 
                  className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-headline"
                >
                  Band A (Level 1-2)
                </TabsTrigger>
                <TabsTrigger 
                  value="B" 
                  className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-headline"
                >
                  Band B (Level 3-4)
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Pinyin Toggle */}
          <div className="flex items-center justify-center gap-3 bg-white/50 py-3 px-6 rounded-2xl border border-primary/10 self-center">
            <Languages className="h-4 w-4 text-primary" />
            <Label htmlFor="pinyin-mode" className="text-sm font-headline font-bold text-muted-foreground cursor-pointer">
              ピンインを表示
            </Label>
            <Switch 
              id="pinyin-mode"
              checked={showPinyin}
              onCheckedChange={setShowPinyin}
            />
          </div>
        </div>
      </header>

      {/* Progress & Navigation Controls */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs font-headline font-bold uppercase tracking-wider text-muted-foreground px-1">
          <div className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            <span>Progress (Band {selectedLevel})</span>
          </div>
          <span>{currentIndex + 1} / {filteredVocab.length}</span>
        </div>
        <Progress value={progress} className="h-2 bg-secondary" />
        
        <div className="flex justify-between items-center pt-2">
          <Button
            variant="ghost"
            onClick={prevCard}
            disabled={currentIndex === 0}
            className="rounded-full hover:bg-primary/5 disabled:opacity-30 font-headline"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            戻る
          </Button>
          <Button
            variant="ghost"
            onClick={nextCard}
            disabled={currentIndex === filteredVocab.length - 1}
            className="rounded-full hover:bg-primary/5 disabled:opacity-30 font-headline"
          >
            次へ
            <ChevronRight className="h-5 w-5 ml-1" />
          </Button>
        </div>
      </section>

      {/* Vocabulary Flashcard Section */}
      <section>
        {currentItem ? (
          <VocabularyCard key={currentItem.id} item={currentItem} showPinyin={showPinyin} />
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            単語がありません。
          </div>
        )}
      </section>

      {/* Interactive Composition Section */}
      <section className="pb-12">
        {currentItem && (
          <CompositionSection 
            key={`${currentItem.id}-composition-${selectedLevel}`} 
            vocabularyWord={currentItem.word} 
            level={selectedLevel}
          />
        )}
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
