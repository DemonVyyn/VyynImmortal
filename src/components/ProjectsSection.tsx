const PROJECTS = [
  {
    id: 1,
    title: 'VYYN 个人作品集',
    titleLatin: 'PortoVyyn Project',
    desc: 'Website ini merupakan proyek portofolio yang dikembangkan untuk memenuhi tugas perkuliahan sekaligus menunjukkan kemampuan dalam pengembangan web. Proyek ini dirancang dengan tampilan yang sederhana, responsif, dan mudah digunakan, serta mencakup fitur-fitur dasar seperti informasi profil, halaman konten, dan navigasi yang terstruktur.',
    tags: ['Html', 'Css', 'JavaScript', 'Github'],
    status: '完成 · Selesai',
    statusColor: '#00C896',
    year: '2026',
    link: 'https://arifin-portofolio-rho.vercel.app/',
    type: '作品集 · Portfolio',
    cn: '个人作品集',
  },
  {
    id: 2,
    title: '学校网站',
    titleLatin: 'School Portal Website',
    desc: 'Website portal sekolah yang dirancang untuk mempermudah akses informasi bagi siswa, orang tua, dan guru. Melalui platform ini, pengguna dapat menemukan berbagai informasi penting seperti profil sekolah, ektrakulikuer, Fasilitas , serta Visi dan Misi sekolah.',
    tags: ['Html', 'Css', 'JavaScript', 'Github Pages'],
    status: '完成 · Selesai',
    statusColor: '#00C896',
    year: '2025',
    link: 'https://mas-batamiyah.vercel.app/',
    type: '全栈 · Full Stack',
    cn: '学校门户网站',
  },
  {
    id: 3,
    title: 'VYYN 个人作品集',
    titleLatin: 'VyynModern Porto',
    desc: 'Website ini dibuat sebagai portofolio pribadi sekaligus sarana untuk bereksperimen dan bersenang-senang dalam proses belajar pengembangan web. Proyek ini menampilkan berbagai ide, desain, dan fitur yang dibuat secara bebas tanpa batasan formal, sehingga menjadi ruang untuk mencoba hal baru dan mengasah kreativitas.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    status: '完成 · Selesai',
    statusColor: '#00C896',
    year: '2025',
    link: 'https://portovyyn.vercel.app/',
    type: '作品集 · Portfolio',
    cn: '个人作品集',
  },
  {
    id: 4,
    title: '全能仪表盘',
    titleLatin: 'Dashoard One For All',
    desc: 'Website ini merupakan platform monitoring berbasis Wazuh yang dirancang dengan layout yang dapat dikustomisasi sesuai kebutuhan pengguna. Sistem ini memanfaatkan kemampuan Wazuh untuk melakukan pemantauan keamanan, deteksi ancaman, dan analisis log secara real-time, kemudian menyajikannya dalam tampilan dashboard yang lebih rapi, interaktif, dan mudah dipahami.',
    tags: ['Laravel', 'Boostrap', 'Python', 'Github'],
    status: '完成 · Selesai',
    statusColor: '#00C896',
    year: '2026',
    link: 'https://github.com/OcatZ0/oneforall',
    type: '网站 · Website',
    cn: '项目式学习',
  },
  {
    id: 5,
    title: '公共行政管理记录',
    titleLatin: 'Pencatatan Administrasi Publik',
    desc: 'Website ini merupakan sistem pencatatan administrasi digital yang dirancang untuk menggantikan proses manual menjadi lebih cepat, rapi, dan terstruktur. Platform ini memungkinkan pengguna untuk mencatat, mengelola, dan memantau data administrasi secara real-time melalui antarmuka yang sederhana dan mudah digunakan.',
    tags: ['Html', 'Css', 'JavaScript', 'Boostrap', 'Php', 'Xampp', 'Github'],
    status: '完成 · Selesai',
    statusColor: '#00C896',
    year: '2025',
    link: 'https://github.com/DemonVyyn/sipwarga',
    type: '网站 · Website',
    cn: '数字化行政',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <span className="hanzi-deco" style={{ top: '8%', right: '2%', fontSize: '13rem', transform: 'rotate(6deg)' }}>卷</span>
      <span className="hanzi-deco" style={{ bottom: '5%', left: '2%', fontSize: '11rem', transform: 'rotate(-10deg)' }}>轴</span>

      <div className="section-container">
        {/* Title */}
        <div className="section-title-wrapper reveal" data-reveal>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '12px' }}>
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #C8963C)' }} />
            <span style={{ fontFamily: 'Noto Serif SC', fontSize: '0.65rem', letterSpacing: '0.4em', color: 'rgba(200,150,60,0.5)', textTransform: 'uppercase' }}>
              Galeri Misi · Karya Perguruan
            </span>
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #C8963C, transparent)' }} />
          </div>
          <h2 className="section-label">任务卷轴</h2>
          <div className="section-divider" />
          <p className="section-sublabel">Projects · Portfolio</p>
        </div>

        {/* Projects grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {PROJECTS.map((proj, i) => (
            <div
              key={proj.id}
              className="project-scroll reveal"
              data-reveal
              style={{ animationDelay: `${(i % 3) * 0.15}s` }}
            >
              {/* Header */}
              <div style={{ padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  {/* Type badge */}
                  <span style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    color: 'rgba(200,150,60,0.6)',
                    fontFamily: 'Noto Serif SC',
                    background: 'rgba(139,0,0,0.2)',
                    border: '1px solid rgba(200,150,60,0.2)',
                    padding: '2px 8px',
                    borderRadius: '2px',
                  }}>
                    {proj.type}
                  </span>
                  {/* Year */}
                  <span style={{ fontSize: '0.7rem', color: 'rgba(200,150,60,0.4)', fontFamily: 'Noto Serif SC' }}>{proj.year}</span>
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: 'Noto Serif SC', fontSize: '1.4rem', fontWeight: 700, color: '#f0d060', marginBottom: '4px', lineHeight: 1.2 }}>
                  {proj.title}
                </h3>
                <p style={{ fontFamily: 'Noto Serif SC', fontSize: '0.75rem', color: 'rgba(200,150,60,0.5)', marginBottom: '4px' }}>
                  {proj.titleLatin}
                </p>
                <p style={{ fontFamily: 'Noto Serif SC', fontSize: '0.65rem', color: 'rgba(200,150,60,0.3)', marginBottom: '16px' }}>
                  {proj.cn}
                </p>

                {/* Divider */}
                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(200,150,60,0.3), transparent)', marginBottom: '16px' }} />

                {/* Description */}
                <p style={{ fontFamily: 'Noto Serif SC', fontSize: '0.82rem', color: 'rgba(200,169,110,0.7)', lineHeight: 1.8, marginBottom: '20px' }}>
                  {proj.desc}
                </p>
              </div>

              {/* Tags */}
              <div style={{ padding: '0 24px', display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {proj.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              {/* Footer */}
              <div style={{
                padding: '16px 24px',
                borderTop: '1px solid rgba(200,150,60,0.15)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                {/* Status */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: proj.statusColor,
                    boxShadow: `0 0 8px ${proj.statusColor}`,
                    animation: 'glowPulse 2s ease infinite',
                  }} />
                  <span style={{ fontSize: '0.7rem', color: proj.statusColor, fontFamily: 'Noto Serif SC' }}>
                    {proj.status}
                  </span>
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a href={proj.link} className="project-btn">
                    <span>👁</span> 查看
                  </a>
                  <a href="#" className="project-btn" style={{ background: 'transparent', border: '1px solid rgba(200,150,60,0.25)' }}>
                    <span>⚙</span> 代码
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal" data-reveal>
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 36px',
              background: 'transparent',
              border: '1px solid rgba(200,150,60,0.4)',
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
              el.style.boxShadow = '0 0 25px rgba(200,150,60,0.3)'
              el.style.color = '#f0d060'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.borderColor = 'rgba(200,150,60,0.4)'
              el.style.boxShadow = 'none'
              el.style.color = '#C8963C'
              el.style.transform = 'translateY(0)'
            }}
          >
            📜 查看全部任务 · Lihat Semua Proyek
          </a>
        </div>
      </div>
    </section>
  )
}
