import { useState } from 'react'
import styles from './Home.module.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import VideoCard from '../components/VideoCard'
import DroneCard from '../components/DroneCard'
import FeaturedStrip from '../components/FeaturedStrip'
import ZonesGrid from '../components/ZonesGrid'
import VideoModal from '../components/VideoModal'
import { corporateVideos, droneFootage } from '../data/media'

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(null)

  const handlePlayDrone = (video) => {
    setActiveVideo({ ...video, category: 'Drone Footage' })
  }

  return (
    <>
      <Nav />

      <main>
        {/* HERO — white surface */}
        <HeroSection />

        {/* VIDEOS — dark surface */}
        <section className={styles.sectionVideo}>
          <div className={styles.sectionHeader}>
            <div>
              {/* <div className={`eyebrow eyebrow-light`}>Video</div> */}
              <h2 className="section-title section-title--light">
                Corporate &amp; Documentary
              </h2>
            </div>
            <span className="section-count section-count--light">6 videos</span>
          </div>

          <div className={styles.videoGrid}>
            {corporateVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={setActiveVideo}
              />
            ))}
          </div>

          <div className={`eyebrow eyebrow-light ${styles.droneEyebrow}`}>
            Drone Footage
          </div>
          <div className={styles.droneRow}>
            {droneFootage.map((video) => (
              <DroneCard
                key={video.id}
                video={video}
                onPlay={handlePlayDrone}
              />
            ))}
          </div>
        </section>

        {/* FEATURED IMAGES — white surface */}
        <section className={styles.sectionFeatured}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={`eyebrow eyebrow-navy`}>Photography</div>
              <h2 className="section-title section-title--dark">
                Featured Drone Images
              </h2>
            </div>
            <span className="section-count section-count--dark">14 images</span>
          </div>
          <FeaturedStrip />
        </section>

        {/* ZONES — dark surface */}
        <section className={styles.sectionZones}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={`eyebrow eyebrow-light`}>Zones</div>
              <h2 className="section-title section-title--light">
                Coega SEZ &amp; NMBLP Investor Zones
              </h2>
            </div>
            <span className="section-count section-count--light">9 zones</span>
          </div>
          <ZonesGrid />
        </section>
      </main>

      <Footer />

      {activeVideo && (
        <VideoModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </>
  )
}