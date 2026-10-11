import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Timeline } from './components/Timeline'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Timeline />
        <Gallery />
      </main>
      <footer className="footer">
        <p>다음 이야기는 아직 쓰는 중이에요 ✍️</p>
      </footer>
    </>
  )
}
