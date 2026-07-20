import type { StoryStudyCard } from "@/data/storyMode";
import { STORY_CHARACTERS } from "@/data/storyMode";
import { cn } from "@/lib/utils";

export function StorySpeakerBadge({
  card,
  className,
}: {
  card: StoryStudyCard;
  className?: string;
}) {
  const char = STORY_CHARACTERS[card.speaker];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-body shadow-sm",
        char.badgeClass,
        className
      )}
    >
      <span className="text-lg leading-none" aria-hidden>
        {char.emoji}
      </span>
      <span className={cn("font-headline font-bold", char.accentClass)}>{char.nameJa}</span>
      <span className="opacity-70">のセリフ</span>
    </div>
  );
}
