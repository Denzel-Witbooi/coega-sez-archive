import styles from './DroneCard.module.css'

export default function DroneCard({ video, onPlay }) {
  const thumbUrl = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`

  return (
    <button
      className={styles.card}
      onClick={() => onPlay(video)}
      aria-label={`Play ${video.title}`}
    >
      <div className={styles.thumbWrap}>
        <img
          src={thumbUrl}
          alt={video.title}
          onError={(e) => { e.currentTarget.style.opacity = '0' }}
        />
      </div>

      <div className={styles.overlay} />

      <div className={styles.playBtn} aria-hidden="true">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </div>

      <span className={styles.partLabel}>{video.title}</span>
    </button>
  )
}