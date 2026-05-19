export default function Lanterns() {
  return (
    <>
      {/* Left lantern */}
      <div className="lantern" style={{ top: '80px', left: '16px' }}>
        <div className="lantern-string" />
        <div
          className="lantern-body"
          style={{
            background: 'radial-gradient(ellipse at 40% 40%, #ff6600 0%, #cc2200 40%, #880000 80%)',
            boxShadow: '0 0 20px rgba(255,80,0,0.6), 0 0 40px rgba(139,0,0,0.4)',
            border: '1px solid rgba(200,150,60,0.5)',
          }}
        >
          <span style={{ fontFamily: 'Noto Serif SC', fontSize: '1rem', color: '#f0d060', fontWeight: 700, position: 'relative', zIndex: 1 }}>福</span>
          {/* Glow effect */}
          <div style={{
            position: 'absolute', inset: '-8px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,100,0,0.2) 0%, transparent 70%)',
            animation: 'glowPulse 2s ease infinite',
          }} />
        </div>
        {/* Tassels */}
        <div style={{ display: 'flex', gap: '6px', marginTop: '2px' }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: '1px', height: '12px', background: '#C8963C60' }} />
          ))}
        </div>
      </div>

      {/* Right lantern */}
      <div className="lantern" style={{ top: '80px', right: '16px' }}>
        <div className="lantern-string" />
        <div
          className="lantern-body"
          style={{
            background: 'radial-gradient(ellipse at 40% 40%, #ff6600 0%, #cc2200 40%, #880000 80%)',
            boxShadow: '0 0 20px rgba(255,80,0,0.6), 0 0 40px rgba(139,0,0,0.4)',
            border: '1px solid rgba(200,150,60,0.5)',
          }}
        >
          <span style={{ fontFamily: 'Noto Serif SC', fontSize: '1rem', color: '#f0d060', fontWeight: 700, position: 'relative', zIndex: 1 }}>道</span>
          <div style={{
            position: 'absolute', inset: '-8px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,100,0,0.2) 0%, transparent 70%)',
            animation: 'glowPulse 2s ease infinite 1s',
          }} />
        </div>
        <div style={{ display: 'flex', gap: '6px', marginTop: '2px' }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: '1px', height: '12px', background: '#C8963C60' }} />
          ))}
        </div>
      </div>
    </>
  )
}
