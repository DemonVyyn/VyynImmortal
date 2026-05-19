import { useState, useEffect, useCallback } from 'react'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import Particles from './components/Particles'
import Lanterns from './components/Lanterns'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [loaded, setLoaded] = useState(false)

  const handleLoadingDone = useCallback(() => {
    setLoading(false)
    setTimeout(() => setLoaded(true), 100)
  }, [])

  // Scroll reveal animation
  useEffect(() => {
    if (!loaded) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [loaded])

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Loading screen */}
      {loading && <LoadingScreen onDone={handleLoadingDone} />}

      {/* Custom cursor */}
      <CustomCursor />

      {/* Ambient particles */}
      <Particles />

      {/* Lanterns */}
      <Lanterns />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top */}
      <BackToTop />
    </div>
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 100,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(139,0,0,0.9), rgba(90,0,0,0.9))',
        border: '1px solid rgba(200,150,60,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#C8963C',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: visible ? 'auto' : 'none',
        boxShadow: '0 4px 20px rgba(139,0,0,0.4)',
        fontFamily: 'Noto Serif SC',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.boxShadow = '0 0 25px rgba(200,150,60,0.4)'
        el.style.borderColor = '#C8963C'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.boxShadow = '0 4px 20px rgba(139,0,0,0.4)'
        el.style.borderColor = 'rgba(200,150,60,0.5)'
      }}
    >
      ↑
    </button>
  )
}
