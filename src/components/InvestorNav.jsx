import { useEffect, useRef } from 'react'
import styles from './InvestorNav.module.css'

export default function InvestorNav({ investors, activeId }) {
  const tabRefs = useRef({})

  // Auto-scroll active tab into view when it changes
  useEffect(() => {
    if (activeId && tabRefs.current[activeId]) {
      tabRefs.current[activeId].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [activeId])

  return (
    <nav className={styles.nav} aria-label="Investor sections">
      <div className={styles.inner}>
        {investors.map((investor) => {
          const id = investor.name.toLowerCase().replace(/\s+/g, '-')
          return (
            <a
              key={investor.name}
              href={`#investor-${id}`}
              className={`${styles.tab} ${activeId === id ? styles.active : ''}`}
              ref={(el) => { tabRefs.current[id] = el }}
            >
              {investor.name}
            </a>
          )
        })}
      </div>
    </nav>
  )
}