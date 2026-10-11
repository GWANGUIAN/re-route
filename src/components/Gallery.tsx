import { useState } from 'react'
import { avatars } from '../data/avatars'
import { base } from '../lib'

type Filter = 'all' | 'mascot' | 'sd'

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: '전부' },
  { key: 'mascot', label: '동글동글 마스코트' },
  { key: 'sd', label: 'SD 캐릭터' },
]

export function Gallery() {
  const [filter, setFilter] = useState<Filter>('all')
  const list = avatars.filter((a) => filter === 'all' || a.kind === filter)

  return (
    <section id="avatars" className="section">
      <h2>우리 아바타 친구들 🐾</h2>
      <p className="section-sub">AI와 함께 만든 VRChat 팬캐릭터 {avatars.length}명을 모두 소개해요.</p>
      <div className="chips" role="group" aria-label="아바타 종류">
        {filters.map((f) => (
          <button key={f.key} className={filter === f.key ? 'chip on' : 'chip'} onClick={() => setFilter(f.key)}>
            {f.label}
          </button>
        ))}
      </div>
      <ul className="gallery">
        {list.map((a) => (
          <li key={a.id} className="avatar">
            <img src={`${base}avatars/${a.id}.webp`} alt={a.name} loading="lazy" width="480" height="360" />
            <strong>{a.name}</strong>
            {a.note !== a.name && <span>{a.note}</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}
