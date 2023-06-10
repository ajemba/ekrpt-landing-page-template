import { Browserouter, Routes, Route } from 'react-router-dom'
import { Home, About, PrivacyPolicy, TermsOfService, NoPage } from './pages'

export default function MyApp() {
  return (
    <Browserouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Browserouter>
  )
}