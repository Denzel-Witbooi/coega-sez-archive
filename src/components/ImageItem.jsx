import styles from './ImageItem.module.css'
import { thumb } from '../data/media'

export default function ImageItem({ path, alt, index, onClick }) {
  return (
    <button
      className={styles.item}
      onClick={() => onClick(index)}
      aria-label={`View ${alt}`}
    >
      <img
        src={thumb(path)}
        alt={alt}
        loading="lazy"
      />
      <div className={styles.zoom} aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          width="12"
          height="12"
          fill="none"
          stroke="white"
          strokeWidth="2"
        >
          <path d="M15 3h6m0 0v6m0-6l-7 7M9 21H3m0 0v-6m0 6l7-7" />
        </svg>
      </div>
    </button>
  )
}