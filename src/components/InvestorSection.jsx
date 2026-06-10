import { useState } from 'react'
import styles from './InvestorSection.module.css'
import ImageItem from './ImageItem'
import Lightbox from './Lightbox'

// Returns the correct grid class based on image count
function getGridClass(count) {
  if (count === 1)  return styles.grid1
  if (count === 2)  return styles.grid2
  if (count === 3)  return styles.grid3
  if (count === 4)  return styles.grid4
  if (count >= 10) return styles.grid5col
  return styles.grid5  // 5–9 images: featured layout
}

export default function InvestorSection({ investor, index }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const id = investor.name.toLowerCase().replace(/\s+/g, '-')
  const count = investor.images.length
  const gridClass = getGridClass(count)

  return (
    <>
      <section
        id={`investor-${id}`}
        className={`${styles.section} ${index % 2 === 0 ? styles.odd : styles.even}`}
      >
        <div className={styles.header}>
          <div>
            {/* <div className={styles.eyebrow}>
              Investor
            </div> */}
            <h2 className={styles.name}>{investor.name}</h2>
          </div>
          <div className={styles.count}>
            <span className={styles.countDot} />
            {count} image{count !== 1 ? 's' : ''}
          </div>
        </div>

        <div className={`${styles.grid} ${gridClass}`}>
          {investor.images.map((path, i) => (
            <ImageItem
              key={path}
              path={path}
              alt={`${investor.name} — image ${i + 1}`}
              index={i}
              onClick={setLightboxIndex}
            />
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={investor.images}
          currentIndex={lightboxIndex}
          investorName={investor.name}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  )
}