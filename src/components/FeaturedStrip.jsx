import { useState } from 'react'
import styles from './FeaturedStrip.module.css'
import Lightbox from './Lightbox'
import { featuredImages } from '../data/media'

export default function FeaturedStrip() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // FeaturedImages items already have .full path built in media.js
  // Lightbox expects path strings — extract just the path portion
  const paths = featuredImages.map((img) =>
    img.full.replace('https://res.cloudinary.com/dpluujmr3/image/upload/q_auto,f_auto/coega/images/', '')
  )

  return (
    <>
      <div className={styles.strip}>
        {featuredImages.map((img, i) => (
          <button
            key={img.id}
            className={styles.item}
            onClick={() => setLightboxIndex(i)}
            aria-label={img.alt}
          >
            <img src={img.thumb} alt={img.alt} loading="lazy" />
            <span className={styles.num}>
              {String(img.id).padStart(2, '0')}
            </span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={paths}
          currentIndex={lightboxIndex}
          investorName="Featured Drone Images"
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  )
}