import { useEffect, useRef, useCallback } from 'react'
import styles from './Lightbox.module.css'
import { full } from '../data/media'

export default function Lightbox({ images, currentIndex, investorName, onClose, onNavigate }) {
  const touchStartX = useRef(0)

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Keyboard navigation
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape')      onClose()
    if (e.key === 'ArrowLeft')   onNavigate((currentIndex - 1 + images.length) % images.length)
    if (e.key === 'ArrowRight')  onNavigate((currentIndex + 1) % images.length)
  }, [currentIndex, images.length, onClose, onNavigate])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [handleKey])

  // Touch swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) {
      onNavigate(dx < 0
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length
      )
    }
  }

  const currentImage = images[currentIndex]

  return (
    <div
      className={styles.backdrop}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label={`${investorName} images`}
    >
      <button className={styles.close} onClick={onClose} aria-label="Close lightbox">
        ×
      </button>

      <div className={styles.inner}>
        {investorName && (
          <div className={styles.investorLabel}>{investorName}</div>
        )}

        <img
          className={styles.image}
          src={full(currentImage)}
          alt={`${investorName} — image ${currentIndex + 1}`}
        />

        <div className={styles.nav}>
          <button
            className={styles.navBtn}
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            aria-label="Previous image"
          >
            ←
          </button>
          <span className={styles.counter}>
            {currentIndex + 1} / {images.length}
          </span>
          <button
            className={styles.navBtn}
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}
