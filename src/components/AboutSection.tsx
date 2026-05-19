import { useEffect, useRef, useState } from 'react'

function useCountUpAll(targets: number[], duration: number, triggered: boolean) {
  const [counts, setCounts] = useState(targets.map(() => 0))
  useEffect(() => {
    if (!triggered) return
    const timers = targets.map((target, idx) => {
      let start = 0
      const step = target / (duration / 16)
      return setInterval(() => {
        start += step
        if (start >= target) {
          setCounts(prev => { const n = [...prev]; n[idx] = target; return n })
          clearInterval(timers[idx])
        } else {
          setCounts(prev => { const n = [...prev]; n[idx] = Math.floor(start); return n })
        }
      }, 16)
    })
    return () => timers.forEach(t => clearInterval(t))
  }, [triggered])
  return counts
}

const STATS = [
  { value: 1, suffix: '+', label: '年 Pengalaman', cn: '年经验' },
  { value: 5, suffix: '+', label: '项目 Proyek', cn: '完成项目' },
  { value: 10, suffix: '+', label: '技能 Teknologi', cn: '技术武器' },
  { value: 100, suffix: '%', label: '奉献 Dedikasi', cn: '修炼投入' },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { setTriggered(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const counts = useCountUpAll(STATS.map(s => s.value), 1500, triggered)

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      {/* Hanzi deco */}
      <span className="hanzi-deco" style={{ top: '10%', right: '3%', fontSize: '15rem', transform: 'rotate(5deg)' }}>境</span>
      <span className="hanzi-deco" style={{ bottom: '10%', left: '2%', fontSize: '12rem', transform: 'rotate(-8deg)' }}>真</span>

      <div className="section-container">
        {/* Section title */}
        <div className="section-title-wrapper reveal" data-reveal>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '12px' }}>
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #C8963C)' }} />
            <span style={{ fontFamily: 'Noto Serif SC', fontSize: '0.65rem', letterSpacing: '0.4em', color: 'rgba(200,150,60,0.5)', textTransform: 'uppercase' }}>
              Tentang Sang Kultivator
            </span>
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #C8963C, transparent)' }} />
          </div>
          <h2 className="section-label">关于修炼者</h2>
          <div className="section-divider" />
          <p className="section-sublabel">About the Cultivator</p>
        </div>

        {/* Content grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'center' }}>
          {/* Photo frame */}
          <div className="reveal-left" data-reveal style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', maxWidth: '320px', width: '100%' }}>
              {/* Outer decorative frame */}
              <div style={{
                position: 'absolute',
                top: '-16px', left: '-16px', right: '-16px', bottom: '-16px',
                border: '1px solid rgba(200,150,60,0.2)',
                borderRadius: '4px',
              }} />
              <div style={{
                position: 'absolute',
                top: '-8px', left: '-8px', right: '-8px', bottom: '-8px',
                border: '1px solid rgba(200,150,60,0.15)',
                borderRadius: '4px',
              }} />
              {/* Corner decorations */}
              {[['top','left'],['top','right'],['bottom','left'],['bottom','right']].map(([v,h], i) => (
                <div key={i} style={{
                  position: 'absolute',
                  [v]: '-20px', [h]: '-20px',
                  width: '28px', height: '28px',
                  [`border${v.charAt(0).toUpperCase()+v.slice(1)}`]: '2px solid #C8963C',
                  [`border${h.charAt(0).toUpperCase()+h.slice(1)}`]: '2px solid #C8963C',
                }} />
              ))}

              {/* Main frame */}
              <div className="about-frame">
                <div className="about-img-wrapper">
                  <img
                    src="/images/arifin.jpeg"
                    alt="Muhammad Arifin"
                    style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                {/* Name card at bottom */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(13,5,0,0.95), rgba(42,21,0,0.9))',
                  padding: '16px',
                  borderTop: '1px solid rgba(200,150,60,0.3)',
                  textAlign: 'center',
                }}>
                  <p style={{ fontFamily: 'Noto Serif SC', fontSize: '1.1rem', fontWeight: 700, color: '#f0d060' }}>穆罕默德·阿里芬</p>
                  <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(200,150,60,0.6)', marginTop: '4px' }}>RENEGADE IMMORTAL · 三重仙道境</p>
                </div>
              </div>

              {/* Floating badge */}
              <div style={{
                position: 'absolute',
                top: '16px', right: '-24px',
                background: 'linear-gradient(135deg, #8B0000, #5a0000)',
                border: '1px solid rgba(200,150,60,0.6)',
                borderRadius: '50%',
                width: '60px', height: '60px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 20px rgba(139,0,0,0.5)',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Noto Serif SC', fontSize: '1.2rem', fontWeight: 900, color: '#f0d060', lineHeight: 1 }}>第</div>
                  <div style={{ fontFamily: 'Noto Serif SC', fontSize: '0.8rem', fontWeight: 700, color: '#C8963C', lineHeight: 1 }}>三</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="reveal-right" data-reveal>
            {/* Bio */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(42,21,0,0.5), rgba(20,8,0,0.5))',
              border: '1px solid rgba(200,150,60,0.2)',
              borderRadius: '6px',
              padding: '28px',
              marginBottom: '28px',
              position: 'relative',
            }}>
              <div className="corner-tl" /><div className="corner-tr" /><div className="corner-bl" /><div className="corner-br" />
              <p style={{ fontFamily: 'Noto Serif SC', fontSize: '0.85rem', color: 'rgba(200,169,110,0.8)', lineHeight: 2, marginBottom: '16px' }}>
                Seorang <strong style={{ color: '#C8963C' }}>web developer</strong> yang menempuh jalur kode dan keabadian digital.
                Dengan gelar <strong style={{ color: '#C8963C' }}>Renegade Immortal</strong> di Ranah Kultivasi step-3,
                aku menempa diri melalui HTML, CSS, JavaScript, hingga framework modern seperti React dan Laravel.
              </p>
              <p style={{ fontFamily: 'Noto Serif SC', fontSize: '0.85rem', color: 'rgba(200,169,110,0.7)', lineHeight: 2 }}>
                Setiap baris kode adalah mantra, setiap proyek adalah misi perguruan. Aura karismatik,
                tenang namun menyimpan kekuatan tersembunyi — siap membangun pengalaman digital yang memukau.
              </p>
            </div>

            {/* Info list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {[
                { label: '名字 Nama', value: 'Muhammad Arifin', cn: '' },
                { label: '学系 jurusan', value: 'Informatika', cn: '信息学' },
                { label: '道路 Aliran', value: 'Jalur Kode & Keabadian Digital', cn: '' },
                { label: '气质 Aura', value: 'Karismatik · Tenang · Tersembunyi', cn: '' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'Noto Serif SC', fontSize: '0.75rem', color: '#8B0000', minWidth: '100px', paddingTop: '2px' }}>
                    {item.label}
                  </span>
                  <span style={{ fontFamily: 'Noto Serif SC', fontSize: '0.82rem', color: '#C8963C', flex: 1 }}>
                    {item.value}
                    {item.cn && <span style={{ color: 'rgba(200,150,60,0.5)', marginLeft: '8px', fontSize: '0.7rem' }}>{item.cn}</span>}
                  </span>
                </div>
              ))}
            </div>

            {/* Download CV button */}
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                background: 'linear-gradient(135deg, #8B0000, #5a0000)',
                border: '1px solid rgba(200,150,60,0.5)',
                borderRadius: '3px',
                color: '#f0d060',
                fontFamily: 'Noto Serif SC',
                fontSize: '0.85rem',
                textDecoration: 'none',
                transition: 'all 0.3s',
                letterSpacing: '0.05em',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.boxShadow = '0 0 25px rgba(139,0,0,0.5)'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.boxShadow = 'none'
                el.style.transform = 'translateY(0)'
              }}
            >
              📜 Unduh Gulungan CV
            </a>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '16px',
          marginTop: '64px',
        }}>
          {STATS.map((stat, i) => (
            <div key={i} className="stat-card reveal" data-reveal style={{ animationDelay: `${i * 0.1}s` }}>
              <div style={{
                fontFamily: 'Noto Serif SC',
                fontSize: '2.5rem',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #C8963C, #f0d060)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
              }}>
                {counts[i]}{stat.suffix}
              </div>
              <div style={{ fontFamily: 'Noto Serif SC', fontSize: '0.78rem', color: '#c8a96e', marginTop: '8px' }}>{stat.label}</div>
              <div style={{ fontFamily: 'Noto Serif SC', fontSize: '0.62rem', color: 'rgba(200,150,60,0.4)', marginTop: '2px' }}>{stat.cn}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
