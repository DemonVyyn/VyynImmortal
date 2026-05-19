import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const mainRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let x = 0, y = 0
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY
      if (mainRef.current) {
        mainRef.current.style.left = x + 'px'
        mainRef.current.style.top = y + 'px'
      }
    }
    const trailMove = (e: MouseEvent) => {
      if (trailRef.current) {
        trailRef.current.style.left = e.clientX + 'px'
        trailRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', trailMove)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', trailMove)
    }
  }, [])

  return (
    <>
      {/* Brush/Sword cursor */}
      <div ref={mainRef} className="cursor-main" style={{ left: '-100px', top: '-100px' }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          {/* Sword blade */}
          <line x1="14" y1="2" x2="14" y2="20" stroke="#f0d060" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Crossguard */}
          <line x1="8" y1="18" x2="20" y2="18" stroke="#C8963C" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Handle */}
          <rect x="12" y="20" width="4" height="6" rx="1" fill="#8B0000" stroke="#C8963C" strokeWidth="0.5"/>
          {/* Tip glow */}
          <circle cx="14" cy="2" r="2" fill="#f0d060" opacity="0.8"/>
          {/* Aura */}
          <circle cx="14" cy="14" r="8" stroke="#C8963C" strokeWidth="0.3" opacity="0.3"/>
        </svg>
      </div>
      {/* Trail */}
      <div
        ref={trailRef}
        className="cursor-trail"
        style={{
          left: '-100px', top: '-100px',
          width: '8px', height: '8px',
          background: 'rgba(200,150,60,0.3)',
          boxShadow: '0 0 6px rgba(200,150,60,0.5)',
        }}
      />
    </>
  )
}
