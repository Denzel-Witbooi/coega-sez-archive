import styles from './Footer.module.css'

export default function Footer({ locationText = 'Nelson Mandela Bay, Eastern Cape' }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <img
          src="/coega-logo.png"
          alt="Coega SEZ"
          className={styles.logo}
        />
        <div className={styles.divider} />
        <span className={styles.text}>SEZ Drone Visual Archive</span>
      </div>
      <span className={styles.text}>{locationText}</span>
    </footer>
  )
}
