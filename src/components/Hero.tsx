import { profile } from '../data/profile'
import { ThemeToggle } from './ThemeToggle'

export function Hero() {
  return (
    <header className="hero">
      <nav className="nav">
        <span className="brand">Re-route</span>
        <div className="nav-links">
          <a href="#about">이유</a>
          <a href="#timeline">행적</a>
          <a href="#avatars">아바타</a>
          <ThemeToggle />
        </div>
      </nav>
      <div className="hero-body">
        <p className="eyebrow">채용 → 프론트엔드 → 다음 이야기</p>
        <h1>{profile.headline}</h1>
        <p className="lead">{profile.intro}</p>
        <ul className="stats">
          {profile.stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
