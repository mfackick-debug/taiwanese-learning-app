/** 実践ドリルのコース定義 */
import type { DrillCourseId } from "@/data/drillPool";
import { countDrillPool } from "@/data/drillPool";

export interface DrillCourseOption {
  id: DrillCourseId;
  label: string;
  description: string;
}

export const DRILL_COURSE_OPTIONS: readonly DrillCourseOption[] = [
  {
    id: "all",
    label: "総合（全問題）",
    description: "日常・社会・ストーリー転用例文をすべて含むメインコース",
  },
  {
    id: "daily",
    label: "生活・日常",
    description: "暮らし・会話・ストーリー転用を中心にした実践例文",
  },
  {
    id: "social",
    label: "社会・職場",
    description: "社会問題・職場・ニュース寄りの例文",
  },
] as const;

export function getDrillCourseLabel(course: DrillCourseId): string {
  return DRILL_COURSE_OPTIONS.find((o) => o.id === course)?.label ?? "実践ドリル";
}

export function getDrillCourseDescription(course: DrillCourseId): string {
  const base = DRILL_COURSE_OPTIONS.find((o) => o.id === course)?.description ?? "";
  const count = countDrillPool(course);
  return `${base}（約 ${count} 問）`;
}
