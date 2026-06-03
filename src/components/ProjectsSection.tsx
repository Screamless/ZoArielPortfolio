import { projects } from '../data'

const featuredProjectSvg = `<svg viewBox="0 0 280 200" style="width:92%;height:92%">
  <rect width="280" height="200" rx="8" fill="rgba(5,12,26,0.92)"/>
  <rect width="280" height="36" rx="8" fill="rgba(0,229,160,0.07)" stroke="rgba(0,229,160,0.15)" stroke-width="0.5"/>
  <circle cx="16" cy="18" r="5" fill="rgba(255,107,107,0.5)"/>
  <circle cx="30" cy="18" r="5" fill="rgba(249,199,79,0.5)"/>
  <circle cx="44" cy="18" r="5" fill="rgba(0,229,160,0.5)"/>
  <text x="70" y="22" fill="rgba(240,244,255,0.3)" font-size="7.5" font-family="monospace">Partenariats Scolaires · Admin</text>
  <rect x="0" y="36" width="58" height="164" fill="rgba(0,0,0,0.28)"/>
  <rect x="7" y="50" width="44" height="8" rx="3" fill="rgba(0,229,160,0.4)"/>
  <rect x="7" y="65" width="44" height="6" rx="3" fill="rgba(255,255,255,0.08)"/>
  <rect x="7" y="78" width="44" height="6" rx="3" fill="rgba(255,255,255,0.08)"/>
  <rect x="7" y="91" width="44" height="6" rx="3" fill="rgba(255,255,255,0.08)"/>
  <rect x="68" y="46" width="58" height="38" rx="4" fill="rgba(0,229,160,0.08)" stroke="rgba(0,229,160,0.2)" stroke-width="0.5"/>
  <text x="97" y="63" fill="rgba(0,229,160,0.9)" font-size="14" font-family="monospace" font-weight="700" text-anchor="middle">24</text>
  <text x="97" y="76" fill="rgba(240,244,255,0.4)" font-size="6" font-family="monospace" text-anchor="middle">Partenaires</text>
  <rect x="136" y="46" width="58" height="38" rx="4" fill="rgba(124,108,252,0.08)" stroke="rgba(124,108,252,0.2)" stroke-width="0.5"/>
  <text x="165" y="63" fill="rgba(124,108,252,0.9)" font-size="14" font-family="monospace" font-weight="700" text-anchor="middle">8</text>
  <text x="165" y="76" fill="rgba(240,244,255,0.4)" font-size="6" font-family="monospace" text-anchor="middle">Conventions</text>
  <rect x="204" y="46" width="68" height="38" rx="4" fill="rgba(0,180,216,0.08)" stroke="rgba(0,180,216,0.2)" stroke-width="0.5"/>
  <text x="238" y="63" fill="rgba(0,180,216,0.9)" font-size="14" font-family="monospace" font-weight="700" text-anchor="middle">3</text>
  <text x="238" y="76" fill="rgba(240,244,255,0.4)" font-size="6" font-family="monospace" text-anchor="middle">En attente</text>
  <rect x="68" y="95" width="204" height="95" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
  <rect x="68" y="95" width="204" height="14" rx="4" fill="rgba(255,255,255,0.04)"/>
  <text x="78" y="105" fill="rgba(240,244,255,0.3)" font-size="6" font-family="monospace">Établissement</text>
  <text x="220" y="105" fill="rgba(240,244,255,0.3)" font-size="6" font-family="monospace">Statut</text>
  <g fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5">
    <line x1="68" y1="123" x2="272" y2="123"/>
    <line x1="68" y1="140" x2="272" y2="140"/>
    <line x1="68" y1="157" x2="272" y2="157"/>
  </g>
  <text x="78" y="134" fill="rgba(240,244,255,0.5)" font-size="6.5" font-family="monospace">Lycée Ambohipo</text>
  <rect x="220" y="126" width="30" height="10" rx="10" fill="rgba(0,229,160,0.15)"/>
  <text x="235" y="134" fill="rgba(0,229,160,0.8)" font-size="5.5" font-family="monospace" text-anchor="middle">Actif</text>
  <text x="78" y="151" fill="rgba(240,244,255,0.5)" font-size="6.5" font-family="monospace">EMIT Andrainjato</text>
  <rect x="215" y="143" width="40" height="10" rx="10" fill="rgba(124,108,252,0.15)"/>
  <text x="235" y="151" fill="rgba(124,108,252,0.8)" font-size="5.5" font-family="monospace" text-anchor="middle">En cours</text>
  <text x="78" y="168" fill="rgba(240,244,255,0.5)" font-size="6.5" font-family="monospace">CEM Mahamasina</text>
  <rect x="215" y="160" width="40" height="10" rx="10" fill="rgba(249,199,79,0.15)"/>
  <text x="235" y="168" fill="rgba(249,199,79,0.8)" font-size="5.5" font-family="monospace" text-anchor="middle">En attente</text>
</svg>`

const DELAY_CLASSES = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-1', 'reveal-delay-2']

export default function ProjectsSection() {
  const featured = projects[0]
  const rest = projects.slice(1)

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="reveal">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">Projets réalisés</h2>
          <p className="section-sub">
            Applications conçues et déployées en conditions réelles lors de stages et
            missions professionnelles.
          </p>
        </div>

        <div className="projects-grid">
          {/* Featured project */}
          <div className="project-card glass featured reveal">
            <div>
              {featured.badge && <div className="project-badge">{featured.badge}</div>}
              <div className="project-num">{featured.num} — {featured.category}</div>
              <div className="project-title">{featured.title}</div>
              <div className="project-desc">{featured.desc}</div>
              <div className="project-tech">
                {featured.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
              <div className="project-date">📅 {featured.date}</div>
            </div>
            <div className="project-visual">
              <div dangerouslySetInnerHTML={{ __html: featuredProjectSvg }} />
            </div>
          </div>

          {/* Rest of projects */}
          {rest.map((p, i) => (
            <div key={p.num} className={`project-card glass reveal ${DELAY_CLASSES[i + 1]}`}>
              <div className="project-num">{p.num} — {p.category}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
              <div className="project-date">📅 {p.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
