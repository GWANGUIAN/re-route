import { avatarThumbs } from '../data/timeline'
import { base } from '../lib'

export function Gallery() {
  return (
    <section id="avatars" className="section">
      <h2>만든 아바타 몇 개</h2>
      <p className="section-sub">AI와 함께 만든 VRChat용 SD 아바타 썸네일이에요.</p>
      <ul className="gallery">
        {avatarThumbs.map((n, i) => (
          <li key={n}>
            <img src={`${base}thumbs/${n}.webp`} alt={`SD 아바타 ${i + 1}`} loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  )
}
