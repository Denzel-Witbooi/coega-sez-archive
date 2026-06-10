import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.logo}>
        <img
          src="/coega-logo.png"
          alt="Coega SEZ"
        />
      </a>
      <div className={styles.right}>
        <span className={styles.label}>SEZ Drone Archive</span>
        <span className={styles.pill}>Visual Archive</span>
      </div>
    </nav>
  )
}
