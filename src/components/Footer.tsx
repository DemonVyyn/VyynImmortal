export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-section">
      {/* Top ornament */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px', padding: '0 24px', maxWidth: '1100px', margin: '0 auto 40px' }}>
        <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, transparent, #C8963C40)' }} />
        <span style={{ color: 'rgba(200,150,60,0.3)', fontSize: '10px' }}>✦ ✦ ✦</span>
        <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, #C8963C40, transparent)' }} />
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        {/* Seal */}
        <div className="footer-seal">
          <span>宗</span>
        </div>

        {/* Logo text */}
        <h3 style={{
          fontFamily: 'Noto Serif SC',
          fontSize: '1.5rem',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #C8963C, #f0d060, #C8963C)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '8px',
        }}>
          穆罕默德·阿里芬
        </h3>
        <p style={{ fontFamily: 'Noto Serif SC', fontSize: '0.7rem', letterSpacing: '0.4em', color: 'rgba(200,150,60,0.4)', textTransform: 'uppercase', marginBottom: '8px' }}>
          Muhammad Arifin
        </p>
        <p style={{ fontFamily: 'Noto Serif SC', fontSize: '0.65rem', color: 'rgba(200,150,60,0.3)', marginBottom: '32px' }}>
          Renegade Immortal · 三重仙道境 · Jalur Kode & Keabadian Digital
        </p>

        {/* Nav links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {[
            { href: '#hero', label: '首页', en: 'Home' },
            { href: '#about', label: '关于', en: 'About' },
            { href: '#skills', label: '技能', en: 'Skills' },
            { href: '#projects', label: '作品', en: 'Projects' },
            { href: '#contact', label: '联系', en: 'Contact' },
          ].map(item => (
            <a
              key={item.href}
              href={item.href}
              style={{
                textDecoration: 'none',
                fontFamily: 'Noto Serif SC',
                fontSize: '0.8rem',
                color: 'rgba(200,150,60,0.5)',
                transition: 'color 0.3s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C8963C')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(200,150,60,0.5)')}
            >
              <span>{item.label}</span>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em' }}>{item.en}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(200,150,60,0.2), transparent)', marginBottom: '24px' }} />

        {/* Copyright */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'Noto Serif SC', fontSize: '0.7rem', color: 'rgba(200,150,60,0.3)' }}>
            © {year} Muhammad Arifin
          </span>
          <span style={{ color: 'rgba(200,150,60,0.2)', fontSize: '0.6rem' }}>✦</span>
          <span style={{ fontFamily: 'Noto Serif SC', fontSize: '0.7rem', color: 'rgba(200,150,60,0.3)' }}>
            修真者门派 · Cultivator Sect
          </span>
          <span style={{ color: 'rgba(200,150,60,0.2)', fontSize: '0.6rem' }}>✦</span>
          <span style={{ fontFamily: 'Noto Serif SC', fontSize: '0.7rem', color: 'rgba(200,150,60,0.3)' }}>
            Dibuat dengan ⚡ & 道
          </span>
        </div>

        {/* Bottom hanzi */}
        <p style={{
          fontFamily: 'Noto Serif SC',
          fontSize: '0.6rem',
          color: 'rgba(200,150,60,0.15)',
          marginTop: '24px',
          letterSpacing: '0.5em',
        }}>
          道可道，非常道。名可名，非常名。
        </p>
      </div>
    </footer>
  )
}
