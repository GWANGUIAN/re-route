import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="section">
      <h2>두 번의 선택</h2>
      <p className="section-sub">길을 바꿀 때마다 기준은 하나, 재미였어요.</p>
      <div className="reasons">
        {profile.reasons.map((r) => (
          <article key={r.title} className="card reason">
            <span className="emoji" aria-hidden>
              {r.emoji}
            </span>
            <h3>{r.title}</h3>
            <p>{r.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
