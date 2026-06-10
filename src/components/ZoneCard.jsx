import { useNavigate } from 'react-router-dom'
import styles from './ZoneCard.module.css'

export default function ZoneCard({ zone }) {
  const navigate = useNavigate()

  const totalImages = zone.investors.reduce(
    (sum, inv) => sum + inv.images.length,
    0
  )

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/zone/${zone.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/zone/${zone.id}`)}
      aria-label={`View ${zone.label}`}
    >
      <img
        src={zone.coverImage}
        alt={zone.label}
        loading="lazy"
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        {/* <span className={styles.eyebrow}>{zone.label}</span> */}
        <span className={styles.name}>{zone.label}</span>
        <div className={styles.meta}>
          <span className={styles.dot} />
          <span className={styles.investors}>
            {zone.investors.length} investor{zone.investors.length !== 1 ? 's' : ''}
          </span>
          <span className={styles.arrow}>→</span>
        </div>
      </div>
    </div>
  )
}