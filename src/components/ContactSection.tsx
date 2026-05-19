import { useState } from 'react'

const SOCIALS = [
  {
    name: 'Discord',
    cn: '声鸣石',
    desc: 'Cultivator Chat',
    color: '#5865F2',
    url: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.079.112 18.1.13 18.11a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    cn: '代码库',
    desc: 'Code Scroll Vault',
    color: '#ffffff',
    url: 'https://github.com/DemonVyyn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    cn: '图像镜',
    desc: 'Visual Cultivation',
    color: '#E4405F',
    url: 'https://www.instagram.com/demon_vyyn?igsh=MXZnM3h3eWx4ejdjZw%3D%3D',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    cn: '书脸境',
    desc: 'Social Realm',
    color: '#1877F2',
    url: 'https://www.facebook.com/share/1bHvRXsyjh/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact-section">
      <span className="hanzi-deco" style={{ top: '10%', left: '3%', fontSize: '12rem', transform: 'rotate(-8deg)' }}>联</span>
      <span className="hanzi-deco" style={{ bottom: '15%', right: '3%', fontSize: '10rem', transform: 'rotate(6deg)' }}>系</span>

      <div className="section-container">
        {/* Title */}
        <div className="section-title-wrapper reveal" data-reveal>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '12px' }}>
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #C8963C)' }} />
            <span style={{ fontFamily: 'Noto Serif SC', fontSize: '0.65rem', letterSpacing: '0.4em', color: 'rgba(200,150,60,0.5)', textTransform: 'uppercase' }}>
              Giok Sosial · Kontak Perguruan
            </span>
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #C8963C, transparent)' }} />
          </div>
          <h2 className="section-label">传讯玉简</h2>
          <div className="section-divider" />
          <p className="section-sublabel">Contact · Social Media</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '48px' }}>
          {/* Social orbs */}
          <div className="reveal-left" data-reveal>
            <h3 style={{
              fontFamily: 'Noto Serif SC',
              fontSize: '1rem',
              color: '#C8963C',
              marginBottom: '8px',
              letterSpacing: '0.1em',
            }}>
              玉简通讯 · Giok Surgawi
            </h3>
            <p style={{ fontFamily: 'Noto Serif SC', fontSize: '0.8rem', color: 'rgba(200,150,60,0.5)', marginBottom: '36px', lineHeight: 1.8 }}>
              Hubungi melalui portal giok bercahaya di bawah ini.
              Setiap batu giok adalah jembatan antar ranah.
            </p>

            {/* Giok orbs grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '40px' }}>
              {SOCIALS.map((social, i) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
                >
                  <div
                    className="giok-orb"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      animation: `dropIn 0.6s ease ${i * 0.15}s both`,
                    }}
                  >
                    <div
                      className="giok-orb-inner"
                      style={{ borderColor: `${social.color}40` }}
                    >
                      <div style={{ color: social.color, opacity: 0.9, marginBottom: '2px' }}>
                        {social.icon}
                      </div>
                      <span className="giok-hanzi">{social.cn}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Noto Serif SC', fontSize: '0.85rem', color: '#C8963C', fontWeight: 600 }}>{social.name}</div>
                    <div style={{ fontFamily: 'Noto Serif SC', fontSize: '0.65rem', color: 'rgba(200,150,60,0.4)' }}>{social.desc}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Email */}
            <div style={{
              padding: '20px 24px',
              background: 'linear-gradient(135deg, rgba(42,21,0,0.5), rgba(20,8,0,0.6))',
              border: '1px solid rgba(200,150,60,0.25)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}>
              <div style={{
                width: '48px', height: '48px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(139,0,0,0.4), rgba(90,0,0,0.5))',
                border: '1px solid rgba(200,150,60,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem', flexShrink: 0,
              }}>
                📜
              </div>
              <div>
                <div style={{ fontFamily: 'Noto Serif SC', fontSize: '0.7rem', color: 'rgba(200,150,60,0.4)', marginBottom: '4px' }}>
                  玉简地址 · Email Perguruan
                </div>
                <div style={{ fontFamily: 'Noto Serif SC', fontSize: '0.9rem', color: '#C8963C' }}>
                  arifin@gmail.com
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal-right" data-reveal>
            <h3 style={{
              fontFamily: 'Noto Serif SC',
              fontSize: '1rem',
              color: '#C8963C',
              marginBottom: '8px',
              letterSpacing: '0.1em',
            }}>
              传送秘法 · Kirim Pesan
            </h3>
            <p style={{ fontFamily: 'Noto Serif SC', fontSize: '0.8rem', color: 'rgba(200,150,60,0.5)', marginBottom: '28px', lineHeight: 1.8 }}>
              Tulis pesanmu di gulungan sutra ini dan aku akan membalasnya segera.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontFamily: 'Noto Serif SC', fontSize: '0.75rem', color: 'rgba(200,150,60,0.6)', display: 'block', marginBottom: '6px' }}>
                  名字 · Nama Cultivator
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  required
                  placeholder="Nama Anda..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(42,21,0,0.6)',
                    border: '1px solid rgba(200,150,60,0.25)',
                    borderRadius: '4px',
                    color: '#c8a96e',
                    fontFamily: 'Noto Serif SC',
                    fontSize: '0.85rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(200,150,60,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(200,150,60,0.25)'}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontFamily: 'Noto Serif SC', fontSize: '0.75rem', color: 'rgba(200,150,60,0.6)', display: 'block', marginBottom: '6px' }}>
                  玉简 · Email Anda
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  required
                  placeholder="email@anda.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(42,21,0,0.6)',
                    border: '1px solid rgba(200,150,60,0.25)',
                    borderRadius: '4px',
                    color: '#c8a96e',
                    fontFamily: 'Noto Serif SC',
                    fontSize: '0.85rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(200,150,60,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(200,150,60,0.25)'}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontFamily: 'Noto Serif SC', fontSize: '0.75rem', color: 'rgba(200,150,60,0.6)', display: 'block', marginBottom: '6px' }}>
                  咒语 · Pesan / Misi
                </label>
                <textarea
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  required
                  rows={5}
                  placeholder="Tulis pesanmu di sini..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(42,21,0,0.6)',
                    border: '1px solid rgba(200,150,60,0.25)',
                    borderRadius: '4px',
                    color: '#c8a96e',
                    fontFamily: 'Noto Serif SC',
                    fontSize: '0.85rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(200,150,60,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(200,150,60,0.25)'}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '14px',
                  background: sent
                    ? 'linear-gradient(135deg, #004400, #002200)'
                    : 'linear-gradient(135deg, #8B0000, #5a0000)',
                  border: `1px solid ${sent ? 'rgba(0,200,100,0.5)' : 'rgba(200,150,60,0.5)'}`,
                  borderRadius: '4px',
                  color: sent ? '#00C896' : '#f0d060',
                  fontFamily: 'Noto Serif SC',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                {sent ? '✅ 玉简已发送! · Terkirim!' : '⚡ 发送玉简 · Kirim Pesan'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
