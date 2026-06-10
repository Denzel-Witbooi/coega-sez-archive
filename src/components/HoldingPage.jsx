import styles from './HoldingPage.module.css'
import { CONTENT_CONFIG } from '../data/media'

export default function HoldingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <img
          src="/coega-logo.png"
          alt="Coega SEZ"
          className={styles.logo}
        />
        <div className={styles.divider} />
        <h1 className={styles.title}>Content Unavailable</h1>
        <p className={styles.body}>
          This portfolio demonstration is currently unavailable.
        </p>
        {CONTENT_CONFIG.takedownContact && (
          <p className={styles.contact}>
            For enquiries:{' '}
            <a href={`mailto:${CONTENT_CONFIG.takedownContact}`}>
              {CONTENT_CONFIG.takedownContact}
            </a>
          </p>
        )}
        <p className={styles.attribution}>
          {CONTENT_CONFIG.notice}
        </p>
      </div>
    </div>
  )
}