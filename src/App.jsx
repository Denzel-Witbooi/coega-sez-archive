import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ZonePage from './pages/ZonePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zone/:id" element={<ZonePage />} />
      </Routes>
    </BrowserRouter>
  )
}
