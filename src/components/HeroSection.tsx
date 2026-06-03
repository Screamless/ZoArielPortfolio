const mapSvg = `<svg viewBox="0 0 380 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
  <defs><clipPath id="mc"><rect width="380" height="340" rx="10"/></clipPath></defs>
  <g clip-path="url(#mc)">
    <rect width="380" height="340" fill="#060f1e"/>
    <g stroke="rgba(0,229,160,0.06)" stroke-width="0.5">
      <line x1="0" y1="68" x2="380" y2="68"/><line x1="0" y1="136" x2="380" y2="136"/>
      <line x1="0" y1="204" x2="380" y2="204"/><line x1="0" y1="272" x2="380" y2="272"/>
      <line x1="76" y1="0" x2="76" y2="340"/><line x1="152" y1="0" x2="152" y2="340"/>
      <line x1="228" y1="0" x2="228" y2="340"/><line x1="304" y1="0" x2="304" y2="340"/>
    </g>
    <rect width="380" height="340" fill="rgba(0,40,80,0.22)"/>
    <polygon points="170,18 212,28 242,58 252,98 248,140 258,180 252,222 242,262 222,297 202,320 182,330 160,320 144,292 138,252 133,212 138,172 128,132 133,90 154,56 166,28" fill="rgba(12,42,20,0.9)" stroke="rgba(0,229,160,0.22)" stroke-width="1.2"/>
    <polygon points="175,70 205,78 228,108 224,148 230,185 225,220 216,255 195,280 175,290 158,280 150,250 146,210 150,172 142,140 148,108 165,82" fill="rgba(8,30,14,0.6)" stroke="rgba(0,229,160,0.08)" stroke-width="0.5"/>
    <g stroke="rgba(255,220,100,0.18)" stroke-width="0.8" fill="none">
      <polyline points="190,180 190,225 185,262 180,295"/>
      <polyline points="168,118 190,138 212,152 234,142"/>
      <polyline points="143,200 165,210 190,222 215,215 237,205"/>
    </g>
    <circle cx="190" cy="128" r="8" fill="rgba(0,229,160,0.04)" stroke="rgba(0,229,160,0.2)" stroke-width="1" class="map-ring"/>
    <circle cx="190" cy="128" r="5" fill="rgba(0,229,160,0.18)" stroke="var(--accent)" stroke-width="1.5" class="map-point"/>
    <circle cx="190" cy="128" r="2.5" fill="var(--accent)"/>
    <text x="200" y="122" fill="rgba(0,229,160,0.85)" font-size="7.5" font-family="monospace" font-weight="600">Antananarivo</text>
    <circle cx="190" cy="216" r="8" fill="rgba(124,108,252,0.04)" stroke="rgba(124,108,252,0.2)" stroke-width="1" class="map-ring" style="animation-delay:1s"/>
    <circle cx="190" cy="216" r="6" fill="rgba(124,108,252,0.22)" stroke="var(--accent2)" stroke-width="2" class="map-point" style="animation-delay:0.5s"/>
    <circle cx="190" cy="216" r="3" fill="var(--accent2)"/>
    <text x="200" y="210" fill="rgba(124,108,252,0.9)" font-size="8.5" font-family="monospace" font-weight="700">Fianarantsoa</text>
    <text x="200" y="221" fill="rgba(124,108,252,0.55)" font-size="6.5" font-family="monospace">← vous êtes ici</text>
    <circle cx="155" cy="98" r="3.5" fill="rgba(0,180,216,0.28)" stroke="#00b4d8" stroke-width="1" class="map-point" style="animation-delay:1.5s"/>
    <circle cx="155" cy="98" r="1.5" fill="#00b4d8"/>
    <circle cx="228" cy="163" r="3" fill="rgba(255,107,107,0.28)" stroke="#ff6b6b" stroke-width="1" class="map-point" style="animation-delay:2s"/>
    <circle cx="228" cy="163" r="1.5" fill="#ff6b6b"/>
    <rect x="8" y="8" width="112" height="62" rx="6" fill="rgba(5,12,26,0.88)" stroke="rgba(0,229,160,0.2)" stroke-width="0.5"/>
    <text x="14" y="23" fill="rgba(0,229,160,0.75)" font-size="7" font-family="monospace" font-weight="600">SIG · MADAGASCAR</text>
    <circle cx="18" cy="36" r="3.5" fill="rgba(0,229,160,0.2)" stroke="var(--accent)" stroke-width="1"/>
    <text x="27" y="39" fill="rgba(240,244,255,0.6)" font-size="7" font-family="monospace">Antananarivo</text>
    <circle cx="18" cy="52" r="4" fill="rgba(124,108,252,0.2)" stroke="var(--accent2)" stroke-width="1"/>
    <text x="27" y="55" fill="rgba(240,244,255,0.6)" font-size="7" font-family="monospace">Fianarantsoa ★</text>
    <text x="374" y="334" fill="rgba(0,229,160,0.32)" font-size="6.5" font-family="monospace" text-anchor="end">-21.453°S  47.085°E</text>
  </g>
</svg>`

const STATS = [
  { target: 4, label: "Ans d'expérience" },
  { target: 5, label: 'Projets réalisés' },
  { target: 8, label: 'Technologies maîtrisées' },
  { target: 2, label: 'Diplômes obtenus' },
]

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-inner">
          <div>
            <div className="hero-tag">
              <div className="dot" /> Disponible · Master II en cours
            </div>
            <p className="hero-name">ANDRIANOELSON Zo Ariel</p>
            <h1>
              Développeur
              <br />
              <em>Full Stack</em>
              <br />
              Web &amp; SIG
            </h1>
            <p className="hero-desc">
              Étudiant en Master II SIGD avec 4 ans d&apos;expérience. Spécialisé en Java,
              Flutter, ReactJS et ExpressJS — je conçois et déploie des applications
              complètes, du frontend à la base de données spatiale.
            </p>
            <div className="hero-ctas">
              <a href="#projects" className="btn-primary" style={{ padding: '14px 28px', fontSize: '0.9rem' }}>
                Voir mes projets →
              </a>
              <a href="#contact" className="btn-outline">Me contacter</a>
            </div>
            <div className="hero-contacts">
              <div className="hero-contact-item">
                📧 <a href="mailto:zandrianoelson@gmail.com">zandrianoelson@gmail.com</a>
              </div>
              <div className="hero-contact-item">📞 032 27 578 52</div>
              <div className="hero-contact-item">📍 Fianarantsoa, Madagascar</div>
            </div>
          </div>

          <div className="map-card">
            <div className="map-card-inner glass">
              <div className="floating-badge badge-coord">📍 Fianarantsoa</div>
              <div className="floating-badge badge-layer">🗂 PostGIS · GeoServer</div>
              <div className="floating-badge badge-area">🌍 Web Mapping</div>
              <div style={{ width: '100%', aspectRatio: '1 / 0.9', position: 'relative' }}>
                <div dangerouslySetInnerHTML={{ __html: mapSvg }} />
              </div>
            </div>
          </div>
        </div>

        <div className="stats-bar glass reveal">
          {STATS.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-num" data-target={s.target}>0</span>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
