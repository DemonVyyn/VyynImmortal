import { useEffect, useState } from 'react'

interface Props {
  onDone: () => void
}

export default function LoadingScreen({ onDone }: Props) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true)
      setTimeout(onDone, 800)
    }, 2800)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div className={`loading-screen ${hidden ? 'hidden' : ''}`}>
      {/* Background hanzi */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {['仙', '道', '境', '龙', '气', '法', '修', '真'].map((ch, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              fontFamily: 'Noto Serif SC',
              fontSize: `${4 + (i % 3) * 2}rem`,
              color: 'rgba(200,150,60,0.04)',
              top: `${(i * 13) % 85}%`,
              left: `${(i * 17) % 85}%`,
              transform: `rotate(${-20 + i * 10}deg)`,
              fontWeight: 900,
            }}
          >
            {ch}
          </span>
        ))}
      </div>

      {/* Qi rings — wrapper absolut tepat di tengah layar */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 0,
          height: 0,
          pointerEvents: 'none',
        }}
      >
        {[0, 0.5, 1].map((delay, i) => (
          <div
            key={i}
            className="qi-ring"
            style={{
              width: '160px',
              height: '160px',
              animationDelay: `${delay}s`,
              position: 'absolute',
              top: '-80px',
              left: '-80px',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          padding: '0 16px',
        }}
      >
        <div className="brush-stroke">修真者</div>
        <p
          style={{
            fontFamily: 'Noto Serif SC',
            fontSize: 'clamp(0.55rem, 2vw, 0.7rem)',
            letterSpacing: '0.4em',
            color: 'rgba(200,150,60,0.5)',
            marginTop: '12px',
            textTransform: 'uppercase',
          }}
        >
          Muhammad Arifin · Portfolio
        </p>
        <div className="loading-bar">
          <div className="loading-bar-fill" />
        </div>
        <p
          style={{
            fontFamily: 'Noto Serif SC',
            fontSize: 'clamp(0.55rem, 1.8vw, 0.65rem)',
            letterSpacing: '0.3em',
            color: 'rgba(200,150,60,0.3)',
            marginTop: '16px',
          }}
        >
          正在开启卷轴...
        </p>
      </div>
    </div>
  )
}
