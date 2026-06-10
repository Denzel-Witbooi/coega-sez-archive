import styles from './VideoCard.module.css'

export default function VideoCard({ video, onPlay }) {
  const thumbUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`

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

      <div className={styles.overlay}>
        <span className={styles.tag}>{video.category}</span>
        <span className={styles.title}>{video.title}</span>
      </div>

      <div className={styles.playBtn} aria-hidden="true">
        <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </div>
    </button>
  )
}