import type { TimelineEntry } from './data/types'

const fmt = (d: string) => {
  const [y, m, day] = d.split('-')
  return day ? `${y}.${m}.${day}` : `${y}.${m}`
}

export const dateText = (e: TimelineEntry) => {
  if (e.dateLabel) return e.dateLabel
  if (!e.date) return ''
  return e.endDate ? `${fmt(e.date)} – ${fmt(e.endDate)}` : fmt(e.date)
}

export const yearOf = (e: TimelineEntry) => (e.date ? e.date.slice(0, 4) : '시작')

export const sortEntries = (list: TimelineEntry[], desc: boolean) =>
  [...list].sort((a, b) => {
    const r = (a.date ?? '0000').localeCompare(b.date ?? '0000')
    return desc ? -r : r
  })

export const base = import.meta.env.BASE_URL
