import styles from './ZonesGrid.module.css'
import ZoneCard from './ZoneCard'
import { zones } from '../data/media'

export default function ZonesGrid() {
  return (
    <div className={styles.grid}>
      {zones.map((zone) => (
        <ZoneCard key={zone.id} zone={zone} />
      ))}
    </div>
  )
}