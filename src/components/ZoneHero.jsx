import { useNavigate } from 'react-router-dom'
import styles from './ZoneHero.module.css'

export default function ZoneHero({ zone }) {
  const navigate = useNavigate()

  const totalImages = zone.investors.reduce(
    (sum, inv) => sum + inv.images.length,
    0
  )

  // Hero image — use the cover image at full width
  const heroUrl = zone.coverImage.replace('w_600,q_auto,f_auto', 'w_1400,q_auto,f_auto')

  return (
    <div className={styles.hero}>
      <img
        className={styles.image}
        src={heroUrl}
        alt={zone.label}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <button
          className={styles.backLink}
          onClick={() => navigate('/')}
          aria-label="Back to all zones"
        >
          ← All Zones
        </button>

        {/* <div className={`eyebrow eyebrow-light ${styles.eyebrow}`}>
          Coega SEZ
        </div> */}

        <h1 className={styles.title}>{zone.label}</h1>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={`${styles.metaDot} ${styles.green}`} />
            {zone.investors.length} investor{zone.investors.length !== 1 ? 's' : ''}
          </div>
          <div className={styles.metaDivider} />
          <div className={styles.metaItem}>
            <span className={`${styles.metaDot} ${styles.gold}`} />
            {totalImages} images
          </div>
        </div>
      </div>
    </div>
  )
}