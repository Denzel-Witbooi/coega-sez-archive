import { useEffect, useRef } from 'react'
import styles from './VideoModal.module.css'

export default function VideoModal({ video, onClose }) {
  const iframeRef = useRef(null)

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Keyboard dismiss
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  // Clear iframe src on unmount to stop video playback
  useEffect(() => {
    return () => {
      if (iframeRef.current) {
        iframeRef.current.src = ''
      }
    }
  }, [])

  const embedUrl = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`

  return (
    <div
      className={styles.backdrop}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <div className={styles.inner}>
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close video"
        >
          ×
        </button>

        <div className={styles.titleBar}>
          <span className={styles.tag}>{video.category}</span>
          <span className={styles.title}>{video.title}</span>
        </div>

        <div className={styles.frameWrap}>
          <iframe
            ref={iframeRef}
            src={embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
