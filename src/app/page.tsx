
"use client";

import { useState, useMemo, useEffect } from "react";
import { ChevronLeft, ChevronRight, BookOpen, GraduationCap, Trophy, Languages, Settings2, RefreshCw, Eye, EyeOff } from "lucide-react";
import { VOCABULARY_DATA, VocabularyItem } from "@/app/lib/vocabulary";
import { GRAMMAR_DATA, GrammarItem } from "@/app/lib/grammar";
import { VocabularyCard } from "@/components/VocabularyCard";
import { CompositionSection } from "@/components/CompositionSection";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { AudioButton } from "@/components/AudioButton";
import { cn } from "@/lib/utils";

type TrainingMode = 'word' | 'triple' | 'grammar';

export default function Home() {
  const [selectedLevel, setSelectedLevel] = useState<'A' | 'B'>('A');
  const [trainingMode, setTrainingMode] = useState<TrainingMode>('word');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPinyin, setShowPinyin] = useState(true);
  const [showGrammarExample, setShowGrammarExample] = useState(true);
  const [tripleItems, setTripleItems] = useState<VocabularyItem[]>([]);

  // Filter data based on selected level
  const filteredVocab = useMemo(() => {
    return VOCABULARY_DATA.filter(item => item.level === selectedLevel);
  }, [selectedLevel]);

  const filteredGrammar = useMemo(() => {
    return GRAMMAR_DATA.filter(item => item.level === selectedLevel);
  }, [selectedLevel]);

  // Handle 3-word challenge random selection
  const refreshTripleChallenge = () => {
    if (filteredVocab.length < 3) return;
    const shuffled = [...filteredVocab].sort(() => 0.5 - Math.random());
    setTripleItems(shuffled.slice(0, 3));
  };

  useEffect(() => {
    if (trainingMode === 'triple') {
      refreshTripleChallenge();
    }
  }, [trainingMode, selectedLevel, filteredVocab]);

  // Reset index when level or mode changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedLevel, trainingMode]);

  const currentItem = filteredVocab[currentIndex];
  const currentGrammar = filteredGrammar[currentIndex];
  
  const totalCount = trainingMode === 'grammar' ? filteredGrammar.length : filteredVocab.length;
  const progress = totalCount > 0 ? ((currentIndex + 1) / totalCount) * 100 : 0;

  const nextItem = () => {
    if (currentIndex < totalCount - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevItem = () => {
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

        {/* Level & Mode Selection */}
        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <p className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground/60 flex items-center justify-center gap-2">
              <Trophy className="h-3 w-3" /> Step 1: Select Level
            </p>
            <Tabs value={selectedLevel} onValueChange={(val) => setSelectedLevel(val as 'A' | 'B')}>
              <TabsList className="grid w-full grid-cols-2 p-1 bg-secondary/50 rounded-2xl h-12">
                <TabsTrigger value="A" className="rounded-xl font-headline">Band A (Level 1-2)</TabsTrigger>
                <TabsTrigger value="B" className="rounded-xl font-headline">Band B (Level 3-4)</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground/60 flex items-center justify-center gap-2">
              <Settings2 className="h-3 w-3" /> Step 2: Training Mode
            </p>
            <Tabs value={trainingMode} onValueChange={(val) => setTrainingMode(val as TrainingMode)}>
              <TabsList className="grid w-full grid-cols-3 p-1 bg-secondary/50 rounded-2xl h-12">
                <TabsTrigger value="word" className="rounded-xl text-xs sm:text-sm font-headline">単語</TabsTrigger>
                <TabsTrigger value="triple" className="rounded-xl text-xs sm:text-sm font-headline">3単語</TabsTrigger>
                <TabsTrigger value="grammar" className="rounded-xl text-xs sm:text-sm font-headline">文法</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex items-center justify-center gap-3 bg-white/50 py-3 px-6 rounded-2xl border border-primary/10 self-center">
            <Languages className="h-4 w-4 text-primary" />
            <Label htmlFor="pinyin-mode" className="text-sm font-headline font-bold text-muted-foreground cursor-pointer">
              ピンインを表示
            </Label>
            <Switch id="pinyin-mode" checked={showPinyin} onCheckedChange={setShowPinyin} />
          </div>
        </div>
      </header>

      {/* Progress & Navigation */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs font-headline font-bold uppercase tracking-wider text-muted-foreground px-1">
          <div className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            <span>Progress (Band {selectedLevel})</span>
          </div>
          <span>{currentIndex + 1} / {totalCount}</span>
        </div>
        <Progress value={progress} className="h-2 bg-secondary" />
        
        <div className="flex justify-between items-center pt-2">
          <Button variant="ghost" onClick={prevItem} disabled={currentIndex === 0} className="rounded-full font-headline">
            <ChevronLeft className="h-5 w-5 mr-1" /> 戻る
          </Button>
          <Button variant="ghost" onClick={nextItem} disabled={currentIndex === totalCount - 1} className="rounded-full font-headline">
            次へ <ChevronRight className="h-5 w-5 ml-1" />
          </Button>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="space-y-8">
        {trainingMode === 'word' && currentItem && (
          <VocabularyCard item={currentItem} showPinyin={showPinyin} />
        )}

        {trainingMode === 'triple' && (
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-none space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
              <Badge variant="secondary">3-Word Challenge</Badge>
              <Button variant="outline" size="sm" onClick={refreshTripleChallenge} className="rounded-full text-xs">
                <RefreshCw className="h-3 w-3 mr-1" /> シャッフル
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {tripleItems.map((item, idx) => (
                <div key={idx} className="bg-primary/10 px-6 py-4 rounded-2xl border-2 border-primary/20 text-center min-w-[120px]">
                  <span className="text-3xl font-headline font-bold text-primary block">{item.word}</span>
                  {showPinyin && (
                    <span className="text-xs font-body text-accent/80 font-medium mt-1 block">
                      {item.pinyin}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground font-body">
              上記の3つの単語をすべて使って、1つの自然な文章を作成してください。
            </p>
          </div>
        )}

        {trainingMode === 'grammar' && currentGrammar && (
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-none space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-start">
              <Badge variant="secondary">Grammar Master</Badge>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowGrammarExample(!showGrammarExample)}
                  className="text-muted-foreground text-xs rounded-full"
                >
                  {showGrammarExample ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
                  {showGrammarExample ? "使用例を隠す" : "使用例を見る"}
                </Button>
                <AudioButton text={currentGrammar.example} />
              </div>
            </div>
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-headline font-bold text-primary tracking-tight">
                {currentGrammar.name}
              </h2>
              <div className="inline-block px-4 py-2 rounded-lg bg-secondary/50">
                <p className="text-sm font-body text-foreground/80 font-medium">
                  {currentGrammar.description}
                </p>
              </div>
            </div>
            
            <div className={cn(
              "pt-6 border-t border-border/50 transition-all duration-300 overflow-hidden",
              showGrammarExample ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 pointer-events-none p-0 border-none"
            )}>
              <p className="text-xs font-headline uppercase tracking-widest text-muted-foreground font-bold mb-3">使用例</p>
              <p className="text-xl font-body text-foreground font-medium leading-relaxed">{currentGrammar.example}</p>
              {showPinyin && <p className="text-sm font-body text-accent/80 mt-1">{currentGrammar.examplePinyin}</p>}
              <p className="text-muted-foreground text-sm mt-2">{currentGrammar.exampleTranslation}</p>
            </div>
          </div>
        )}

        {/* Composition Section */}
        <div className="pb-12">
          <CompositionSection 
            key={`${selectedLevel}-${trainingMode}-${currentIndex}`}
            mode={trainingMode}
            level={selectedLevel}
            vocabularyWords={trainingMode === 'triple' ? tripleItems.map(i => i.word) : (currentItem ? [currentItem.word] : [])}
            grammarItem={trainingMode === 'grammar' ? currentGrammar : undefined}
          />
        </div>
      </section>

      <footer className="mt-auto text-center py-8">
        <p className="text-xs text-muted-foreground/60 font-body">
          &copy; {new Date().getFullYear()} Formosan Wordsmith.
        </p>
      </footer>
    </main>
  );
}
