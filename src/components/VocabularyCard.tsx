"use client";

import { VocabularyItem } from "@/app/lib/vocabulary";
import { Card, CardContent } from "@/components/ui/card";
import { AudioButton } from "@/components/AudioButton";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface VocabularyCardProps {
  item: VocabularyItem;
  showPinyin?: boolean;
}

export function VocabularyCard({ item, showPinyin = true }: VocabularyCardProps) {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="overflow-hidden border-none shadow-xl bg-white/80 backdrop-blur-sm">
        <CardContent className="p-8 space-y-8">
          <div className="flex justify-between items-start">
            <Badge variant="secondary" className="px-3 py-1 font-headline tracking-tight">
              TOCFL Band {item.level}
            </Badge>
            <AudioButton text={item.word} size="icon" className="h-12 w-12 rounded-full shadow-sm" />
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-6xl font-headline font-bold text-primary tracking-tight">
              {item.word}
            </h2>
            <div className={cn(
              "h-8 transition-opacity duration-300",
              showPinyin ? "opacity-100" : "opacity-0 pointer-events-none"
            )}>
              <p className="text-2xl font-body text-accent font-medium">
                {item.pinyin}
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block px-4 py-2 rounded-lg bg-secondary/50">
              <span className="text-xl font-body text-foreground/80 font-semibold">
                {item.translation}
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-border/50">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-headline uppercase tracking-widest text-muted-foreground font-bold">
                例文 / Example
              </h3>
              <AudioButton text={item.example} size="sm" />
            </div>
            <div className="space-y-3">
              <p className="text-2xl font-body text-foreground font-medium leading-relaxed">
                {item.example}
              </p>
              <p className="text-lg font-body text-muted-foreground">
                {item.exampleTranslation}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
