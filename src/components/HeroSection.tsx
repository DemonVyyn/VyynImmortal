import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY
        bgRef.current.style.transform = `scale(1.05) translateY(${y * 0.4}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="hero-section">
      {/* Parallax bg */}
      <div ref={bgRef} className="hero-bg" />
      <div className="hero-bg-overlay" />

      {/* Decorative corner frames */}
      <div style={{ position: 'absolute', top: '80px', left: '24px', width: '60px', height: '60px', borderTop: '2px solid rgba(200,150,60,0.4)', borderLeft: '2px solid rgba(200,150,60,0.4)' }} />
      <div style={{ position: 'absolute', top: '80px', right: '24px', width: '60px', height: '60px', borderTop: '2px solid rgba(200,150,60,0.4)', borderRight: '2px solid rgba(200,150,60,0.4)' }} />
      <div style={{ position: 'absolute', bottom: '80px', left: '24px', width: '60px', height: '60px', borderBottom: '2px solid rgba(200,150,60,0.4)', borderLeft: '2px solid rgba(200,150,60,0.4)' }} />
      <div style={{ position: 'absolute', bottom: '80px', right: '24px', width: '60px', height: '60px', borderBottom: '2px solid rgba(200,150,60,0.4)', borderRight: '2px solid rgba(200,150,60,0.4)' }} />

      {/* Hanzi decorations */}
      <span className="hanzi-deco" style={{ top: '20%', left: '5%', fontSize: '12rem', transform: 'rotate(-10deg)' }}>道</span>
      <span className="hanzi-deco" style={{ top: '30%', right: '5%', fontSize: '10rem', transform: 'rotate(8deg)' }}>仙</span>
      <span className="hanzi-deco" style={{ bottom: '20%', left: '8%', fontSize: '8rem', transform: 'rotate(-5deg)' }}>龙</span>

      {/* Qi rings */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        {[0, 1.5, 3].map((delay, i) => (
          <div
            key={i}
            className="qi-ring"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              top: '50%', left: '50%',
              marginLeft: `${-(40 + i * 20)}px`,
              marginTop: `${-(40 + i * 20)}px`,
              animationDelay: `${delay}s`,
              position: 'absolute',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 20px' }}>
        {/* Small label */}
        <div style={{
          fontFamily: 'Noto Serif SC',
          fontSize: '0.7rem',
          letterSpacing: '0.5em',
          color: 'rgba(200,150,60,0.6)',
          textTransform: 'uppercase',
          marginBottom: '20px',
          animation: 'fadeInUp 1s ease 0.1s forwards',
          opacity: 0,
        }}>
          ✦ 修真者 · Cultivator Portfolio ✦
        </div>

        {/* Chinese name */}
        <h1 className="hero-name-cn" style={{ animationDelay: '0.2s' }}>
          穆罕默德·阿里芬
        </h1>

        {/* Divider with yin-yang */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px',
          margin: '20px 0',
          animation: 'fadeInUp 1s ease 0.5s forwards',
          opacity: 0,
        }}>
          <div style={{ height: '1px', width: '80px', background: 'linear-gradient(90deg, transparent, #C8963C)' }} />
          <span style={{ color: '#C8963C', fontSize: '1.2rem', animation: 'spinSlow 8s linear infinite' }}>☯</span>
          <div style={{ height: '1px', width: '80px', background: 'linear-gradient(90deg, #C8963C, transparent)' }} />
        </div>

        {/* Latin name */}
        <p className="hero-name-latin" style={{ animationDelay: '0.5s' }}>
          Muhammad Arifin
        </p>

        {/* Title */}
        <p className="hero-title" style={{ marginTop: '10px', animationDelay: '0.7s' }}>
          Renegade Immortal · 踏天 · Ranah Kultivasi Heaven Trampling
        </p>

        {/* Path badges */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '28px',
          animation: 'fadeInUp 1s ease 1s forwards',
          opacity: 0,
          flexWrap: 'wrap',
        }}>
          {['⚔️ Jalur Kode', '🐉 Keabadian Digital', '🌙 Renegade Path'].map((badge, i) => (
            <div
              key={i}
              className="hero-badge"
              style={{ animationDelay: `${1 + i * 0.15}s`, fontFamily: 'Noto Serif SC' }}
            >
              {badge}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          marginTop: '40px',
          animation: 'fadeInUp 1s ease 1.3s forwards',
          opacity: 0,
          flexWrap: 'wrap',
        }}>
          <a
            href="#projects"
            style={{
              padding: '12px 32px',
              background: 'linear-gradient(135deg, #8B0000, #5a0000)',
              border: '1px solid rgba(200,150,60,0.6)',
              borderRadius: '3px',
              color: '#f0d060',
              fontFamily: 'Noto Serif SC',
              fontSize: '0.9rem',
              textDecoration: 'none',
              letterSpacing: '0.1em',
              transition: 'all 0.3s',
              boxShadow: '0 4px 20px rgba(139,0,0,0.3)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.boxShadow = '0 0 30px rgba(139,0,0,0.6), 0 0 60px rgba(200,150,60,0.2)'
              el.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.boxShadow = '0 4px 20px rgba(139,0,0,0.3)'
              el.style.transform = 'translateY(0)'
            }}
          >
            作品集 · Lihat Karya
          </a>
          <a
            href="#contact"
            style={{
              padding: '12px 32px',
              background: 'transparent',
              border: '1px solid rgba(200,150,60,0.5)',
              borderRadius: '3px',
              color: '#C8963C',
              fontFamily: 'Noto Serif SC',
              fontSize: '0.9rem',
              textDecoration: 'none',
              letterSpacing: '0.1em',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.borderColor = '#C8963C'
              el.style.boxShadow = '0 0 20px rgba(200,150,60,0.3)'
              el.style.color = '#f0d060'
              el.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.borderColor = 'rgba(200,150,60,0.5)'
              el.style.boxShadow = 'none'
              el.style.color = '#C8963C'
              el.style.transform = 'translateY(0)'
            }}
          >
            联系 · Hubungi
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll-btn">
        ⬇
      </a>
    </section>
  )
}
