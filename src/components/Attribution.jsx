import styles from './Attribution.module.css'
import { CONTENT_CONFIG } from '../data/media'

export default function Attribution() {
  return (
    <div className={styles.bar}>
      <p className={styles.text}>
        {CONTENT_CONFIG.notice}
      </p>
    </div>
  )
}