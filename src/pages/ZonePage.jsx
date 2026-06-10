import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ZoneHero from '../components/ZoneHero'
import InvestorNav from '../components/InvestorNav'
import InvestorSection from '../components/InvestorSection'
import { zones } from '../data/media'
import Attribution from '../components/Attribution'
export default function ZonePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeInvestorId, setActiveInvestorId] = useState(null)
  const sectionRefs = useRef([])

  // Find zone by id — redirect home if not found
  const zone = zones.find((z) => z.id === id)

  useEffect(() => {
    if (!zone) navigate('/', { replace: true })
  }, [zone, navigate])

  // Scroll to top when zone changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  // Drive the active tab from scroll position
  useEffect(() => {
    const handleScroll = () => {
      let current = null
      sectionRefs.current.forEach((el) => {
        if (el && window.scrollY >= el.offsetTop - 160) {
          current = el.id.replace('investor-', '')
        }
      })
      setActiveInvestorId(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!zone) return null

  const totalImages = zone.investors.reduce(
    (sum, inv) => sum + inv.images.length,
    0
  )

  return (
    <>
      <Nav />

      <main>
        <ZoneHero zone={zone} />

        <InvestorNav
          investors={zone.investors}
          activeId={activeInvestorId}
        />

        {zone.investors.map((investor, index) => {
          const investorId = investor.name.toLowerCase().replace(/\s+/g, '-')
          return (
            <div
              key={investor.name}
              ref={(el) => { sectionRefs.current[index] = el }}
              id={`investor-${investorId}`}
            >
              <InvestorSection
                investor={investor}
                index={index}
              />
            </div>
          )
        })}
      </main>

      
      <Footer locationText={`${zone.label} — Nelson Mandela Bay`} />
      <Attribution />
    </>
  )
}