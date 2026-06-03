// ✅ Correct Vite asset import — fixes the broken Windows path bug
import meImg from '../assets/img/me1.jpg'

const INFO_ITEMS = [
  { icon: '🎂', text: '13 octobre 2001', style: {} },
  { icon: '📍', text: 'Ambalaroy – Antsororokavo', style: {} },
  { icon: '📞', text: '032 27 578 52', style: {} },
]

const TECH_TAGS = [
  { icon: '⚛️', label: 'ReactJS', color: 'rgba(0,229,160,0.07)', border: 'rgba(0,229,160,0.18)', textColor: 'var(--accent)' },
  { icon: '📱', label: 'Flutter', color: 'rgba(0,180,216,0.07)', border: 'rgba(0,180,216,0.18)', textColor: '#00b4d8' },
  { icon: '⚙️', label: 'ExpressJS', color: 'rgba(124,108,252,0.07)', border: 'rgba(124,108,252,0.18)', textColor: 'var(--accent2)' },
  { icon: '☕', label: 'Java', color: 'rgba(249,199,79,0.07)', border: 'rgba(249,199,79,0.18)', textColor: '#f9c74f' },
  { icon: '🗺️', label: 'PostGIS', color: 'rgba(0,229,160,0.07)', border: 'rgba(0,229,160,0.18)', textColor: 'var(--accent)' },
  { icon: '🌍', label: 'GeoServer', color: 'rgba(255,107,107,0.07)', border: 'rgba(255,107,107,0.18)', textColor: '#ff6b6b' },
]

export default function IntroSection() {
  return (
    <section id="introduction" className="section" style={{ padding: '4rem 0' }}>
      <div className="wrap">
        <div className="intro-grid reveal">
          {/* ── Profile Card ── */}
          <div style={{ position: 'relative' }}>
            <div
              className="glass"
              style={{ padding: '2.5rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
            >
              {/* Radial glow overlay */}
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(ellipse at 30% 30%,rgba(0,229,160,0.07),transparent 60%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Avatar */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <div style={{ position: 'relative', width: '120px', height: '120px' }}>
                  <div
                    style={{
                      width: '120px', height: '120px',
                      borderRadius: '50%', overflow: 'hidden',
                      border: '2px solid rgba(0,229,160,0.35)',
                      boxShadow: '0 0 40px rgba(0,229,160,0.15)',
                    }}
                  >
                    <img
                      src={meImg}
                      alt="Photo de profil de Zo Ariel"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onError={(e) => {
                        const img = e.currentTarget
                        img.style.display = 'none'
                        const fallback = img.nextElementSibling as HTMLElement | null
                        if (fallback) fallback.style.display = 'flex'
                      }}
                    />
                    <div
                      style={{
                        display: 'none', width: '100%', height: '100%',
                        alignItems: 'center', justifyContent: 'center',
                        background: 'linear-gradient(135deg,rgba(0,229,160,0.12),rgba(124,108,252,0.12))',
                        fontSize: '3rem',
                      }}
                    >
                      
                    </div>
                  </div>
                  {/* Spinning ring */}
                  <div
                    style={{
                      position: 'absolute', inset: '-6px', borderRadius: '50%',
                      border: '1.5px solid rgba(0,229,160,0.25)',
                      animation: 'spin-ring 8s linear infinite',
                    }}
                  />
                  {/* Online dot */}
                  <div
                    style={{
                      position: 'absolute', bottom: '5px', right: '5px',
                      width: '16px', height: '16px', borderRadius: '50%',
                      background: 'var(--accent)', border: '2px solid var(--bg1)',
                      boxShadow: '0 0 10px rgba(0,229,160,0.7)',
                    }}
                  />
                </div>
              </div>

              {/* Name & title */}
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                  Andrianoelson Zo Ariel
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.05em' }}>
                  Développeur Full Stack · SIG
                </div>
              </div>

              {/* Info rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {INFO_ITEMS.map((item) => (
                  <div
                    key={item.text}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      fontSize: '0.8rem', color: 'var(--text-muted)',
                      padding: '8px 12px',
                      background: 'rgba(255,255,255,0.04)', borderRadius: '10px',
                      ...item.style,
                    }}
                  >
                    <span>{item.icon}</span> {item.text}
                  </div>
                ))}
                {/* Education highlight */}
                <div
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    fontSize: '0.8rem', padding: '8px 12px',
                    background: 'rgba(0,229,160,0.06)', borderRadius: '10px',
                    border: '1px solid rgba(0,229,160,0.15)',
                  }}
                >
                  <span>🎓</span>{' '}
                  <span style={{ color: 'var(--accent)', fontWeight: 500 }}>Master II SIGD · EMIT</span>
                </div>
                {/* Email */}
                <div
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    fontSize: '0.8rem', padding: '8px 12px',
                    background: 'rgba(255,255,255,0.04)', borderRadius: '10px',
                  }}
                >
                  <span>✉️</span>{' '}
                  <a
                    href="mailto:zandrianoelson@gmail.com"
                    style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.78rem' }}
                  >
                    zandrianoelson@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Corner accents */}
            <div style={{
              position: 'absolute', top: '-12px', left: '-12px',
              width: '40px', height: '40px',
              borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)',
              borderRadius: '4px 0 0 0', opacity: 0.5,
            }} />
            <div style={{
              position: 'absolute', bottom: '-12px', right: '-12px',
              width: '40px', height: '40px',
              borderBottom: '2px solid var(--accent2)', borderRight: '2px solid var(--accent2)',
              borderRadius: '0 0 4px 0', opacity: 0.5,
            }} />
          </div>

          {/* ── Bio Text ── */}
          <div>
            <div className="section-tag">Introduction</div>
            <h2 className="section-title">Qui suis-je ?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1.2rem' }}>
              <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-muted)' }}>
                Je suis <strong style={{ color: 'var(--text)' }}>ANDRIANOELSON Zo Ariel</strong>,
                développeur Full Stack Web &amp; Mobile passionné, actuellement en Master II en
                Systèmes d&apos;Information Géomatique et Décision à l&apos;
                <strong style={{ color: 'var(--accent)' }}>EMIT de Fianarantsoa</strong>.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-muted)' }}>
                Avec <strong style={{ color: 'var(--text)' }}>4 ans d&apos;expérience</strong> acquis
                à travers des stages, des projets personnels et des missions professionnelles, je maîtrise l&apos;ensemble du
                cycle de développement de la conception UI/UX jusqu&apos;au déploiement en
                production en utilisant des technologies modernes comme{' '}
                <strong style={{ color: 'var(--accent)' }}>ReactJS, Flutter, ExpressJS et Java</strong>.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-muted)' }}>
                Ma formation en <strong style={{ color: 'var(--text)' }}>SIG &amp; Web Mapping</strong>{' '}
                m&apos;apporte une double compétence rare : je développe des applications métier
                performantes tout en intégrant des données géospatiales via{' '}
                <strong style={{ color: 'var(--accent2)' }}>PostGIS, GeoServer et OpenStreetMap</strong>,
                pour des solutions cartographiques interactives et analytiques.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-muted)' }}>
                Curieux, autonome et rigoureux, j&apos;aime relever des défis techniques complexes
                et transformer des idées en{' '}
                <strong style={{ color: 'var(--text)' }}>applications concrètes et utiles</strong>.
              </p>
            </div>

            {/* Tech tag pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '2rem' }}>
              {TECH_TAGS.map((t) => (
                <div
                  key={t.label}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '10px 16px', borderRadius: '12px',
                    background: t.color, border: `1px solid ${t.border}`,
                    fontSize: '0.82rem', fontWeight: 500, color: t.textColor,
                  }}
                >
                  <span>{t.icon}</span> {t.label}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a href="#projects" className="btn-primary" style={{ padding: '13px 26px', fontSize: '0.88rem' }}>
                Découvrir mes projets →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
