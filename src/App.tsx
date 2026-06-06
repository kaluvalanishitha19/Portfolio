import { useEffect } from 'react'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import HeroSection from './sections/HeroSection'
import ProjectMarquee from './sections/ProjectMarquee'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/ServicesSection'
import { scrollToSection } from './utils/scrollToSection'

export default function App() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      requestAnimationFrame(() => scrollToSection(hash))
    }
  }, [])

  return (
    <main
      className="font-kanit"
      style={{ overflowX: 'clip', backgroundColor: '#0C0C0C' }}
    >
      <HeroSection />
      <ProjectMarquee />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
