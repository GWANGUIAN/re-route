import { useMemo, useState } from 'react'
import { timeline } from '../data/timeline'
import type { Category, TimelineEntry } from '../data/types'
import { base, dateText, sortEntries, yearOf } from '../lib'

const filters: { key: Category | 'all'; label: string }[] = [
  { key: 'all', label: '전체' },
  { key: 'career', label: '커리어' },
  { key: 'project', label: '개인 프로젝트' },
]

function Entry({ e }: { e: TimelineEntry }) {
  return (
    <li className={`entry ${e.category} ${e.milestone ? 'milestone' : ''}`}>
      <time className="entry-date">{dateText(e)}</time>
      <article className="card">
        <span className="badge">{e.category === 'career' ? '커리어' : '프로젝트'}</span>
        <h3>{e.title}</h3>
        <p>{e.summary}</p>
        {e.image && <img className="entry-img" src={`${base}thumbs/${e.image}`} alt="" loading="lazy" />}
        {e.points && (
          <ul className="points">
            {e.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
        {e.tags && (
          <ul className="tags">
            {e.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        {e.links && (
          <div className="links">
            {e.links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </article>
    </li>
  )
}

export function Timeline() {
  const [filter, setFilter] = useState<Category | 'all'>('all')
  const [desc, setDesc] = useState(true)

  const groups = useMemo(() => {
    const list = sortEntries(
      timeline.filter((e) => filter === 'all' || e.category === filter),
      desc,
    )
    const map = new Map<string, TimelineEntry[]>()
    for (const e of list) map.set(yearOf(e), [...(map.get(yearOf(e)) ?? []), e])
    return [...map.entries()]
  }, [filter, desc])

  return (
    <section id="timeline" className="section">
      <h2>날짜별 행적</h2>
      <p className="section-sub">앞으로의 행보도 여기에 계속 쌓여요.</p>
      <div className="controls">
        <div className="chips" role="group" aria-label="카테고리 필터">
          {filters.map((f) => (
            <button key={f.key} className={filter === f.key ? 'chip on' : 'chip'} onClick={() => setFilter(f.key)}>
              {f.label}
            </button>
          ))}
        </div>
        <button className="chip" onClick={() => setDesc(!desc)}>
          {desc ? '최신순 ↓' : '오래된순 ↑'}
        </button>
      </div>
      <div className="timeline">
        {groups.map(([year, entries]) => (
          <div key={year} className="year-group">
            <h3 className="year">{year}</h3>
            <ol>
              {entries.map((e) => (
                <Entry key={e.id} e={e} />
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  )
}
