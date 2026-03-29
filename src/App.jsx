import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import BackToTop from './components/BackToTop'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import { navItems } from './data/portfolioData'

const HeroSection = lazy(() => import('./sections/HeroSection'))
const AboutSection = lazy(() => import('./sections/AboutSection'))
const ProjectsSection = lazy(() => import('./sections/ProjectsSection'))
const SkillsSection = lazy(() => import('./sections/SkillsSection'))
const ContactSection = lazy(() => import('./sections/ContactSection'))
const FooterSection = lazy(() => import('./sections/FooterSection'))

const sectionIds = navItems.map((item) => item.id)

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observers = []

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)

      if (!element) {
        return
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        {
          threshold: 0.35,
          rootMargin: '-20% 0px -30% 0px',
        },
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">{isLoading ? <Loader key="loader" /> : null}</AnimatePresence>

      {!isLoading ? (
        <div className="relative min-h-screen overflow-x-clip bg-[#050816] text-slate-100">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(139,92,246,0.18),_transparent_22%),radial-gradient(circle_at_50%_80%,_rgba(59,130,246,0.12),_transparent_24%)]" />
          <ScrollProgress />
          <Navbar activeSection={activeSection} items={navItems} />

          <main className="relative z-10">
            <Suspense fallback={null}>
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <SkillsSection />
              <ContactSection />
              <FooterSection />
            </Suspense>
          </main>

          <BackToTop />
        </div>
      ) : null}
    </>
  )
}

export default App
