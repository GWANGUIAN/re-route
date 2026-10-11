import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const initial = (): Theme => {
  try {
    const saved = localStorage.getItem('theme-v2')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* storage unavailable */
  }
  return 'light'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(initial)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme-v2', theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  return (
    <button
      className="theme-toggle"
      aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
