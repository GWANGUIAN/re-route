export type Category = 'career' | 'project'

export interface TimelineEntry {
  id: string
  /** 'YYYY-MM' or 'YYYY-MM-DD'. Omit when the period is intentionally undisclosed (sorted as the earliest). */
  date?: string
  /** End of a period ('YYYY-MM'); omit for point-in-time entries. */
  endDate?: string
  /** Shown instead of the computed date text, e.g. '인턴 1년 → 계약직 6개월'. */
  dateLabel?: string
  category: Category
  title: string
  summary: string
  points?: string[]
  tags?: string[]
  links?: { label: string; url: string }[]
  /** File name under public/thumbs/ */
  image?: string
  /** Visually emphasize (turning points). */
  milestone?: boolean
}
