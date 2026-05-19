const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${5 + (i * 5.3) % 90}%`,
  duration: `${10 + (i * 3.7) % 15}s`,
  delay: `${(i * 2.1) % 12}s`,
  size: i % 3 === 0 ? 5 : i % 2 === 0 ? 3 : 2,
  color: i % 4 === 0 ? '#f0d060' : i % 3 === 0 ? '#ff6644' : '#C8963C',
  opacity: 0.2 + (i % 5) * 0.1,
}))

export default function Particles() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 2, overflow: 'hidden' }}>
      {PARTICLES.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: '-10px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}
