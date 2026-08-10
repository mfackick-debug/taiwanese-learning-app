/** ドリル難易度ラベル（旧 Band B Level 3/4 の UI 代替） */
export const DRILL_COURSE_OPTIONS = [
  {
    level: 3 as const,
    label: "生活・日常",
    description: "買い物、交通、近所のやりとりなど、暮らしの場面",
  },
  {
    level: 4 as const,
    label: "社会・職場＋日常",
    description: "社会・職場に加え、飲食・買い物・交通など暮らしの実践例文も含む",
  },
] as const;

export function getDrillCourseLabel(level: 3 | 4): string {
  return DRILL_COURSE_OPTIONS.find((o) => o.level === level)?.label ?? "実践ドリル";
}
