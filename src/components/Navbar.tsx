import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: '首页', en: 'Hero', href: '#hero' },
  { label: '关于', en: 'About', href: '#about' },
  { label: '技能', en: 'Skills', href: '#skills' },
  { label: '作品', en: 'Projects', href: '#projects' },
  { label: '联系', en: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="nav-bar"
      style={{
        padding: scrolled ? '10px 0' : '16px 0',
        transition: 'padding 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <div style={{
            width: '32px', height: '32px',
            background: 'linear-gradient(135deg, #8B0000, #5a0000)',
            border: '1px solid rgba(200,150,60,0.6)',
            borderRadius: '3px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{ fontFamily: 'Noto Serif SC', fontSize: '1rem', fontWeight: 900, color: '#f0d060' }}>修</span>
          </div>
          <div>
            <div style={{ fontFamily: 'Noto Serif SC', fontSize: '0.85rem', fontWeight: 700, color: '#C8963C', lineHeight: 1 }}>
              Muhammad Arifin
            </div>
            <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(200,150,60,0.5)', textTransform: 'uppercase' }}>
              Renegade Immortal
            </div>
          </div>
        </a>

        {/* Desktop Nav links */}
        <div className="nav-desktop-links">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}
            >
              <span style={{ fontFamily: 'Noto Serif SC', fontSize: '1rem', lineHeight: 1 }}>{item.label}</span>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em', opacity: 0.6 }}>{item.en}</span>
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="nav-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              <span style={{ fontFamily: 'Noto Serif SC', fontSize: '1.1rem' }}>{item.label}</span>
              <span style={{ fontSize: '0.65rem', opacity: 0.6, marginLeft: '8px' }}>{item.en}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
