import type { StudyStep } from "@/components/study/types";
import type { DrillCourseId } from "@/data/drillPool";

export const DRILL_PROGRESS_STORAGE_KEY = "formosa_drill_progress_v1";

export interface DrillProgress {
  course: DrillCourseId;
  /** シャッフル後の出題順 */
  cardIds: string[];
  currentCardIndex: number;
  currentStep: StudyStep;
  updatedAt: string;
}

const VALID_STEPS: StudyStep[] = ["shadowing", "vocab", "reorder", "recall"];
const VALID_COURSES: DrillCourseId[] = ["all", "daily", "social"];

function isValidStep(value: unknown): value is StudyStep {
  return typeof value === "string" && (VALID_STEPS as string[]).includes(value);
}

function isValidCourse(value: unknown): value is DrillCourseId {
  return typeof value === "string" && (VALID_COURSES as string[]).includes(value);
}

export function loadDrillProgress(): DrillProgress | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(DRILL_PROGRESS_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<DrillProgress>;
    if (
      !isValidCourse(parsed.course) ||
      !Array.isArray(parsed.cardIds) ||
      parsed.cardIds.length === 0 ||
      typeof parsed.currentCardIndex !== "number" ||
      !isValidStep(parsed.currentStep) ||
      typeof parsed.updatedAt !== "string"
    ) {
      return null;
    }
    const index = Math.max(
      0,
      Math.min(parsed.currentCardIndex, parsed.cardIds.length - 1)
    );
    return {
      course: parsed.course,
      cardIds: parsed.cardIds.filter((id): id is string => typeof id === "string"),
      currentCardIndex: index,
      currentStep: parsed.currentStep,
      updatedAt: parsed.updatedAt,
    };
  } catch {
    return null;
  }
}

export function saveDrillProgress(progress: DrillProgress): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(DRILL_PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch {
    /* ignore quota */
  }
}

export function clearDrillProgress(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(DRILL_PROGRESS_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

export function formatDrillProgressLabel(progress: DrillProgress): string {
  const n = progress.currentCardIndex + 1;
  const total = progress.cardIds.length;
  return `${n} / ${total} 問目`;
}
