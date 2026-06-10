import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CONTENT_CONFIG } from './data/media'
import Home from './pages/Home'
import ZonePage from './pages/ZonePage'
import HoldingPage from './components/HoldingPage'

export default function App() {
  // Content gate — flip CONTENT_CONFIG.isPublic to false to take all
  // media offline instantly without touching any other file
  if (!CONTENT_CONFIG.isPublic) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HoldingPage />} />
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zone/:id" element={<ZonePage />} />
      </Routes>
    </BrowserRouter>
  )
}