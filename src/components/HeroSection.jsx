import styles from './HeroSection.module.css'

const HERO_IMAGES = [
  'Drone_image_1.jpg',
  'Drone_image_3.jpg',
  'Drone_image_5.jpg',
]

const BASE = 'https://res.cloudinary.com/dpluujmr3/image/upload'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={`eyebrow eyebrow-navy ${styles.eyebrow}`}>
          Coega Special Economic Zone
        </div>
        <h1 className={styles.title}>
          Industrial<br />
          Infrastructure<br />
          <span className={styles.accent}>from Above</span>
        </h1>
        <p className={styles.body}>
          Aerial documentation of the Nelson Mandela Bay Logistics Park
          and Coega SEZ investor zones, captured by drone across the full SEZ footprint.
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>9</span>
            <span className={styles.statLabel}>Investor Zones</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>40+</span>
            <span className={styles.statLabel}>Investors</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>200+</span>
            <span className={styles.statLabel}>Drone Images</span>
          </div>
        </div>
      </div>

      <div className={styles.visual}>
        <img
          className={styles.mainImg}
          src={`${BASE}/w_900,q_auto,f_auto/coega/images/${HERO_IMAGES[0]}`}
          alt="Coega SEZ aerial view"
        />
        <div className={styles.subGrid}>
          <img
            className={styles.subImg}
            src={`${BASE}/w_450,q_auto,f_auto/coega/images/${HERO_IMAGES[1]}`}
            alt="Coega SEZ aerial view"
          />
          <img
            className={styles.subImg}
            src={`${BASE}/w_450,q_auto,f_auto/coega/images/${HERO_IMAGES[2]}`}
            alt="Coega SEZ aerial view"
          />
        </div>
      </div>
    </section>
  )
}