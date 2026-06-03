import { useEffect } from 'react'
import type { MouseEventHandler } from 'react'
import meImg from './assets/img/me1.jpg'
import meImg2 from './assets/img/me2.jpg'

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

type Skill = {
  icon: string
  name: string
  desc: string
  tags: Array<{ label: string; tone?: 'purple' | 'blue' | 'orange' }>
  bars?: Array<{ label: string; w: number }>
  delayClass?: string
}

const skills: Skill[] = [
  {
    icon: '⚛️',
    name: 'Frontend Web & Mobile',
    desc: "Interfaces modernes avec ReactJS et applications cross-platform avec Flutter/Dart, du prototype au déploiement production.",
    tags: [{ label: 'ReactJS' }, { label: 'Flutter' }, { label: 'Dart' }],
    bars: [
      { label: 'ReactJS', w: 0.88 },
      { label: 'Flutter', w: 0.82 },
    ],
    delayClass: 'reveal-delay-1',
  },
  {
    icon: '⚙️',
    name: 'Backend & API REST',
    desc: 'APIs robustes avec ExpressJS (Node.js), authentification, gestion des données, mise en production et déploiement.',
    tags: [
      { label: 'ExpressJS', tone: 'purple' },
      { label: 'Node.js', tone: 'purple' },
      { label: 'REST API', tone: 'purple' },
    ],
    bars: [
      { label: 'ExpressJS', w: 0.85 },
      { label: 'Node.js', w: 0.82 },
    ],
    delayClass: 'reveal-delay-2',
  },
  {
    icon: '☕',
    name: 'Java & Android Natif',
    desc: 'Développement Android natif en Java, POO avancée, architecture MVC et applications desktop robustes.',
    tags: [
      { label: 'Java', tone: 'orange' },
      { label: 'Android', tone: 'orange' },
      { label: 'Python', tone: 'orange' },
    ],
    bars: [
      { label: 'Java', w: 0.9 },
      { label: 'Python', w: 0.7 },
    ],
    delayClass: 'reveal-delay-3',
  },
  {
    icon: '🗺️',
    name: 'SIG & Web Mapping',
    desc: 'Analyse spatiale QGIS, bases de données géospatiales PostGIS, publication WMS/WFS GeoServer et données OpenStreetMap.',
    tags: [
      { label: 'QGIS', tone: 'blue' },
      { label: 'PostGIS', tone: 'blue' },
      { label: 'GeoServer', tone: 'blue' },
      { label: 'OSM', tone: 'blue' },
    ],
    bars: [
      { label: 'PostGIS', w: 0.78 },
      { label: 'QGIS', w: 0.75 },
    ],
    delayClass: 'reveal-delay-1',
  },
  {
    icon: '🗄️',
    name: 'Bases de données',
    desc: 'Conception relationnelle et NoSQL, requêtes avancées et optimisation pour des applications scalables.',
    tags: [
      { label: 'PostgreSQL', tone: 'purple' },
      { label: 'MySQL', tone: 'purple' },
      { label: 'SQLite', tone: 'purple' },
      { label: 'Firebase', tone: 'purple' },
    ],
    bars: [
      { label: 'PostgreSQL', w: 0.85 },
      { label: 'MySQL', w: 0.88 },
    ],
    delayClass: 'reveal-delay-2',
  },
  {
    icon: '🛠️',
    name: 'Outils & Workflow',
    desc: 'Gestion de versions Git/GitHub, design UI/UX Figma & Adobe, pilotage de projet Trello et déploiement en production.',
    tags: [
      { label: 'Git / GitHub' },
      { label: 'Figma' },
      { label: 'Adobe' },
      { label: 'Trello' },
    ],
    delayClass: 'reveal-delay-3',
  },
]

function App() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    const hasCursor = Boolean(cursor && ring)

    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0
    let rafId = 0

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (cursor) {
        cursor.style.left = `${mx}px`
        cursor.style.top = `${my}px`
      }

      const dx = (e.clientX / window.innerWidth - 0.5) * 20
      const dy = (e.clientY / window.innerHeight - 0.5) * 20
      const orb1 = document.querySelector<HTMLElement>('.orb1')
      const orb2 = document.querySelector<HTMLElement>('.orb2')
      if (orb1) orb1.style.transform = `translate(${dx}px,${dy}px)`
      if (orb2) orb2.style.transform = `translate(${-dx}px,${-dy}px)`
    }

    const animRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ring) {
        ring.style.left = `${rx}px`
        ring.style.top = `${ry}px`
        rafId = window.requestAnimationFrame(animRing)
      }
    }

    const setHover = (active: boolean) => {
      if (!cursor || !ring) return
      if (active) {
        cursor.style.transform = 'translate(-50%,-50%) scale(2.5)'
        ring.style.borderColor = 'var(--accent)'
        ring.style.transform = 'translate(-50%,-50%) scale(1.6)'
      } else {
        cursor.style.transform = 'translate(-50%,-50%) scale(1)'
        ring.style.transform = 'translate(-50%,-50%) scale(1)'
        ring.style.borderColor = 'rgba(0,229,160,0.45)'
      }
    }

    const hoverEls = Array.from(
      document.querySelectorAll<HTMLElement>('a,button,.project-card,.skill-card'),
    )
    const onEnter = () => setHover(true)
    const onLeave = () => setHover(false)
    if (hasCursor) {
      hoverEls.forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
      window.addEventListener('mousemove', onMouseMove)
      rafId = window.requestAnimationFrame(animRing)
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add('visible')
            io.unobserve(x.target)
          }
        }),
      { threshold: 0.1 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

    const cio = new IntersectionObserver(
      (entries) =>
        entries.forEach((x) => {
          if (!x.isIntersecting) return
          const el = x.target as HTMLElement
          const t = Number(el.dataset.target)
          if (!Number.isFinite(t)) return
          let c = 0
          const iv = window.setInterval(() => {
            c += t / 60
            el.textContent = `${Math.min(Math.round(c), t)}+`
            if (c >= t) window.clearInterval(iv)
          }, 16)
          cio.unobserve(el)
        }),
      { threshold: 0.5 },
    )
    document
      .querySelectorAll<HTMLElement>('.stat-num[data-target]')
      .forEach((c) => cio.observe(c))

    const bio = new IntersectionObserver(
      (entries) =>
        entries.forEach((x) => {
          if (!x.isIntersecting) return
          const el = x.target as HTMLElement
          const w = Number(el.dataset.w)
          if (!Number.isFinite(w)) return
          el.style.transform = `scaleX(${w})`
          bio.unobserve(el)
        }),
      { threshold: 0.3 },
    )
    document.querySelectorAll<HTMLElement>('.skill-bar-fill').forEach((b) => bio.observe(b))

    return () => {
      if (hasCursor) {
        window.removeEventListener('mousemove', onMouseMove)
        if (rafId) window.cancelAnimationFrame(rafId)
        hoverEls.forEach((el) => {
          el.removeEventListener('mouseenter', onEnter)
          el.removeEventListener('mouseleave', onLeave)
        })
      }
      io.disconnect()
      cio.disconnect()
      bio.disconnect()
    }
  }, [])

  const onMoveGlow: MouseEventHandler<HTMLDivElement> = (e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
  }

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />

      <div id="bg-canvas">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
      </div>
      <div id="map-grid" />

      <nav>
        <div className="logo">Zo Ariel</div>
        <ul className="nav-links">
          <li>
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#skills">Compétences</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#experience">Parcours</a>
          </li>
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="mailto:zandrianoelson@gmail.com" className="btn-primary">
          Me contacter
        </a>
      </nav>

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
                Web & SIG
              </h1>
              <p className="hero-desc">
                Étudiant en Master II SIGD avec 4 ans d&apos;expérience. Spécialisé en Java,
                Flutter, ReactJS et ExpressJS — je conçois et déploie des applications
                complètes, du frontend à la base de données spatiale.
              </p>
              <div className="hero-ctas">
                <a
                  href="#projects"
                  className="btn-primary"
                  style={{ padding: '14px 28px', fontSize: '0.9rem' }}
                >
                  Voir mes projets →
                </a>
                <a href="#contact" className="btn-outline">
                  Me contacter
                </a>
              </div>
              <div className="hero-contacts">
                <div className="hero-contact-item">
                  📧{' '}
                  <a href="mailto:zandrianoelson@gmail.com">zandrianoelson@gmail.com</a>
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
            <div className="stat-item">
              <span className="stat-num" data-target="4">
                0
              </span>
              <div className="stat-label">Ans d&apos;expérience</div>
            </div>
            <div className="stat-item">
              <span className="stat-num" data-target="5">
                0
              </span>
              <div className="stat-label">Projets réalisés</div>
            </div>
            <div className="stat-item">
              <span className="stat-num" data-target="8">
                0
              </span>
              <div className="stat-label">Technologies maîtrisées</div>
            </div>
            <div className="stat-item">
              <span className="stat-num" data-target="2">
                0
              </span>
              <div className="stat-label">Diplômes obtenus</div>
            </div>
          </div>
        </div>
      </section>

      <section id="introduction" className="section" style={{ padding: '4rem 0' }}>
        <div className="wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.6fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="reveal"
          >
            <div style={{ position: 'relative' }}>
              <div
                className="glass"
                style={{
                  padding: '2.5rem',
                  borderRadius: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'radial-gradient(ellipse at 30% 30%,rgba(0,229,160,0.07),transparent 60%)',
                    pointerEvents: 'none',
                  }}
                />

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ position: 'relative', width: '120px', height: '120px' }}>
                    <div
                      style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid rgba(0,229,160,0.35)',
                        boxShadow: '0 0 40px rgba(0,229,160,0.15)',
                      }}
                    >
                      <img
                        src={meImg}
                        alt="Zo Ariel"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        onError={(e) => {
                          const img = e.currentTarget
                          if (img.src !== meImg2) {
                            img.src = meImg2
                            return
                          }
                          img.style.display = 'none'
                          const fallback = img.nextElementSibling as HTMLElement | null
                          if (fallback) fallback.style.display = 'flex'
                        }}
                      />
                      <div
                        style={{
                          display: 'none',
                          width: '100%',
                          height: '100%',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background:
                            'linear-gradient(135deg,rgba(0,229,160,0.12),rgba(124,108,252,0.12))',
                          fontSize: '3rem',
                        }}
                      >
                        🧑‍💻
                      </div>
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        inset: '-6px',
                        borderRadius: '50%',
                        border: '1.5px solid rgba(0,229,160,0.25)',
                        animation: 'spin-ring 8s linear infinite',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '5px',
                        right: '5px',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        border: '2px solid var(--bg1)',
                        boxShadow: '0 0 10px rgba(0,229,160,0.7)',
                      }}
                    />
                  </div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      marginBottom: '0.2rem',
                    }}
                  >
                    Andrianoelson Zo Ariel
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--accent)',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                    }}
                  >
                    Développeur Full Stack · SIG
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      padding: '8px 12px',
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: '10px',
                    }}
                  >
                    <span>🎂</span> 13 octobre 2001
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      padding: '8px 12px',
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: '10px',
                    }}
                  >
                    <span>📍</span> Ambalaroy – Antsororokavo
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.8rem',
                      padding: '8px 12px',
                      background: 'rgba(0,229,160,0.06)',
                      borderRadius: '10px',
                      border: '1px solid rgba(0,229,160,0.15)',
                    }}
                  >
                    <span>🎓</span>{' '}
                    <span style={{ color: 'var(--accent)', fontWeight: 500 }}>
                      Master II SIGD · EMIT
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      padding: '8px 12px',
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: '10px',
                    }}
                  >
                    <span>📞</span> 032 27 578 52
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.8rem',
                      padding: '8px 12px',
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: '10px',
                    }}
                  >
                    <span>✉️</span>{' '}
                    <a
                      href="mailto:zandrianoelson@gmail.com"
                      style={{
                        color: 'var(--accent)',
                        textDecoration: 'none',
                        fontSize: '0.78rem',
                      }}
                    >
                      zandrianoelson@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '-12px',
                  width: '40px',
                  height: '40px',
                  borderTop: '2px solid var(--accent)',
                  borderLeft: '2px solid var(--accent)',
                  borderRadius: '4px 0 0 0',
                  opacity: 0.5,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  right: '-12px',
                  width: '40px',
                  height: '40px',
                  borderBottom: '2px solid var(--accent2)',
                  borderRight: '2px solid var(--accent2)',
                  borderRadius: '0 0 4px 0',
                  opacity: 0.5,
                }}
              />
            </div>

            <div>
              <div className="section-tag">Introduction</div>
              <h2 className="section-title">Qui suis-je ?</h2>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  marginTop: '1.2rem',
                }}
              >
                <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-muted)' }}>
                  Je suis <strong style={{ color: 'var(--text)' }}>ANDRIANOELSON Zo Ariel</strong>
                  , développeur Full Stack Web & Mobile passionné, actuellement en Master II en
                  Systèmes d&apos;Information Géomatique et Décision à l'
                  <strong style={{ color: 'var(--accent)' }}>EMIT de Fianarantsoa</strong>.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-muted)' }}>
                  Avec <strong style={{ color: 'var(--text)' }}>4 ans d&apos;expérience</strong> acquis
                  à travers des stages, des projets personnels et des missions professionnelles, je maîtrise l&apos;ensemble du
                  cycle de développement de la conception UI/UX jusqu&apos;au déploiement en
                  production en utilisant des technologies modernes comme{' '}
                  <strong style={{ color: 'var(--accent)' }}>
                    ReactJS, Flutter, ExpressJS et Java
                  </strong>
                  .
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-muted)' }}>
                  Ma formation en <strong style={{ color: 'var(--text)' }}>SIG &amp; Web Mapping</strong>{' '}
                  m&apos;apporte une double compétence rare : je développe des applications métier
                  performantes tout en intégrant des données géospatiales via{' '}
                  <strong style={{ color: 'var(--accent2)' }}>
                    PostGIS, GeoServer et OpenStreetMap
                  </strong>
                  , pour des solutions cartographiques interactives et analytiques.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-muted)' }}>
                  Curieux, autonome et rigoureux, j&apos;aime relever des défis techniques complexes
                  et transformer des idées en{' '}
                  <strong style={{ color: 'var(--text)' }}>
                    applications concrètes et utiles
                  </strong>
                  .
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '2rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    borderRadius: '12px',
                    background: 'rgba(0,229,160,0.07)',
                    border: '1px solid rgba(0,229,160,0.18)',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                  }}
                >
                  <span>⚛️</span> ReactJS
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    borderRadius: '12px',
                    background: 'rgba(0,180,216,0.07)',
                    border: '1px solid rgba(0,180,216,0.18)',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    color: '#00b4d8',
                  }}
                >
                  <span>📱</span> Flutter
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    borderRadius: '12px',
                    background: 'rgba(124,108,252,0.07)',
                    border: '1px solid rgba(124,108,252,0.18)',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    color: 'var(--accent2)',
                  }}
                >
                  <span>⚙️</span> ExpressJS
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    borderRadius: '12px',
                    background: 'rgba(249,199,79,0.07)',
                    border: '1px solid rgba(249,199,79,0.18)',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    color: '#f9c74f',
                  }}
                >
                  <span>☕</span> Java
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    borderRadius: '12px',
                    background: 'rgba(0,229,160,0.07)',
                    border: '1px solid rgba(0,229,160,0.18)',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                  }}
                >
                  <span>🗺️</span> PostGIS
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    borderRadius: '12px',
                    background: 'rgba(255,107,107,0.07)',
                    border: '1px solid rgba(255,107,107,0.18)',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    color: '#ff6b6b',
                  }}
                >
                  <span>🌍</span> GeoServer
                </div>
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

      <section id="skills" className="section">
        <div className="wrap">
          <div className="reveal">
            <div className="section-tag">Compétences</div>
            <h2 className="section-title">Mon expertise technique</h2>
            <p className="section-sub">
              Full stack web & mobile + maîtrise des outils géospatiaux — des applications
              conçues, développées et déployées de A à Z.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((s, idx) => (
              <div
                key={`${s.name}-${idx}`}
                className={`skill-card glass reveal ${s.delayClass ?? ''}`}
                onMouseMove={onMoveGlow}
              >
                <span className="skill-icon">{s.icon}</span>
                <div className="skill-name">{s.name}</div>
                <div className="skill-desc">{s.desc}</div>
                <div className="skill-tags">
                  {s.tags.map((t) => (
                    <span
                      key={`${s.name}-${t.label}`}
                      className={`skill-tag ${t.tone ?? ''}`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>

                {s.bars?.length ? (
                  <div className="skill-bar-wrap">
                    {s.bars.map((b) => (
                      <div key={`${s.name}-${b.label}`} className="skill-bar-item">
                        <div className="skill-bar-label">{b.label}</div>
                        <div className="skill-bar-track">
                          <div className="skill-bar-fill" data-w={b.w} />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <div className="project-card glass featured reveal">
              <div>
                <div className="project-badge">🏆 Projet le plus récent · Déployé en production</div>
                <div className="project-num">01 — Full-Stack Web</div>
                <div className="project-title">
                  Plateforme de gestion des partenariats scolaires
                </div>
                <div className="project-desc">
                  Application web complète développée pour EMIT Fianarantsoa. Gestion des
                  partenariats entre établissements scolaires : tableau de bord, gestion des
                  utilisateurs, suivi des conventions, authentification et déploiement en
                  production.
                </div>
                <div className="project-tech">
                  <span className="tech-badge">ReactJS</span>
                  <span className="tech-badge">ExpressJS</span>
                  <span className="tech-badge">PostgreSQL</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">REST API</span>
                </div>
                <div className="project-date">📅 Oct. – Déc. 2025 · EMIT Fianarantsoa</div>
              </div>
              <div className="project-visual">
                <div dangerouslySetInnerHTML={{ __html: featuredProjectSvg }} />
              </div>
            </div>

            <div className="project-card glass reveal reveal-delay-1">
              <div className="project-num">02 — Mobile Flutter</div>
              <div className="project-title">
                App d&apos;optimisation de la productivité individuelle
              </div>
              <div className="project-desc">
                Application mobile Android développée et mise en ligne pour la Direction de
                Mine de Fianarantsoa. Interface Flutter connectée à une API REST ExpressJS.
              </div>
              <div className="project-tech">
                <span className="tech-badge">Flutter</span>
                <span className="tech-badge">Dart</span>
                <span className="tech-badge">ExpressJS</span>
                <span className="tech-badge">API REST</span>
              </div>
              <div className="project-date">
                📅 Juil. – Sept. 2024 · Direction de Mine, Fianarantsoa
              </div>
            </div>

            <div className="project-card glass reveal reveal-delay-2">
              <div className="project-num">03 — Android Natif Java</div>
              <div className="project-title">Application de gestion des ressources humaines</div>
              <div className="project-desc">
                Application Android native conçue pour Sarobidy Informatique à Antananarivo.
                Gestion complète des employés, congés et évaluations en Java Android natif.
              </div>
              <div className="project-tech">
                <span className="tech-badge">Java</span>
                <span className="tech-badge">Android</span>
                <span className="tech-badge">SQLite</span>
              </div>
              <div className="project-date">
                📅 Juil. – Sept. 2023 · Sarobidy Informatique, Antananarivo
              </div>
            </div>

            <div className="project-card glass reveal reveal-delay-1">
              <div className="project-num">04 — Desktop Java</div>
              <div className="project-title">Application de calcul fiscal</div>
              <div className="project-desc">
                Logiciel Java de calcul des impôts pour la Commune Urbaine de Fianarantsoa,
                couvrant personnes physiques et morales.
              </div>
              <div className="project-tech">
                <span className="tech-badge">Java</span>
                <span className="tech-badge">MySQL</span>
              </div>
              <div className="project-date">
                📅 Juin – Août 2021 · Commune Urbaine de Fianarantsoa
              </div>
            </div>

            <div className="project-card glass reveal reveal-delay-2">
              <div className="project-num">05 — SIG · Master II</div>
              <div className="project-title">Système d&apos;Information Géographique Web</div>
              <div className="project-desc">
                Projet académique et professionnel : publication de couches WMS/WFS avec
                GeoServer, bases de données géospatiales PostGIS, analyse QGIS et exploitation
                OpenStreetMap.
              </div>
              <div className="project-tech">
                <span className="tech-badge">PostGIS</span>
                <span className="tech-badge">GeoServer</span>
                <span className="tech-badge">QGIS</span>
                <span className="tech-badge">OpenStreetMap</span>
              </div>
              <div className="project-date">📅 2024 – présent · EMIT, Master II SIGD</div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="wrap">
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}
            className="grid-2col reveal"
          >
            <div>
              <div className="section-tag">Expériences</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem,2.5vw,2.2rem)' }}>
                Parcours professionnel
              </h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div
                    className="timeline-dot"
                    style={{
                      borderColor: 'var(--accent)',
                      boxShadow: '0 0 14px rgba(0,229,160,0.6)',
                    }}
                  />
                  <div className="timeline-content glass">
                    <div className="timeline-date">Oct. 2025 – Déc. 2025</div>
                    <div className="timeline-role">Développeur Full-Stack</div>
                    <div className="timeline-company">EMIT Fianarantsoa</div>
                    <div className="timeline-text">
                      Développement complet et déploiement en production de la plateforme de
                      gestion des partenariats scolaires.
                    </div>
                    <div className="timeline-stack">
                      <span className="tl-tag">ReactJS</span>
                      <span className="tl-tag">ExpressJS</span>
                      <span className="tl-tag">PostgreSQL</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot" style={{ borderColor: 'var(--accent2)' }} />
                  <div className="timeline-content glass">
                    <div className="timeline-date">Oct. 2024 – Oct. 2025</div>
                    <div className="timeline-role">Assistant Responsable SI</div>
                    <div className="timeline-company">Emit Business Hub · Andrainjato</div>
                    <div className="timeline-text">
                      Assistance à la gestion du système d&apos;information, support technique et
                      participation aux projets numériques.
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot" style={{ borderColor: '#00b4d8' }} />
                  <div className="timeline-content glass">
                    <div className="timeline-date">Juil. – Sept. 2024</div>
                    <div className="timeline-role">Développeur Android (Stage)</div>
                    <div className="timeline-company">Direction de Mine · Fianarantsoa</div>
                    <div className="timeline-text">
                      Développement et mise en ligne d&apos;une application mobile Android
                      d&apos;optimisation de la productivité.
                    </div>
                    <div className="timeline-stack">
                      <span className="tl-tag">Flutter</span>
                      <span className="tl-tag">ExpressJS</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot" style={{ borderColor: '#f9c74f' }} />
                  <div className="timeline-content glass">
                    <div className="timeline-date">Juil. – Sept. 2023</div>
                    <div className="timeline-role">Développeur Android (Stage)</div>
                    <div className="timeline-company">Sarobidy Informatique · Antananarivo</div>
                    <div className="timeline-text">
                      Conception et réalisation d&apos;une application Android de gestion RH en Java
                      natif.
                    </div>
                    <div className="timeline-stack">
                      <span className="tl-tag">Java</span>
                      <span className="tl-tag">Android</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot" style={{ borderColor: '#ff6b6b' }} />
                  <div className="timeline-content glass">
                    <div className="timeline-date">Juin – Août 2021</div>
                    <div className="timeline-role">Développeur Java (Stage)</div>
                    <div className="timeline-company">Commune Urbaine de Fianarantsoa</div>
                    <div className="timeline-text">
                      Développement d&apos;une application Java de calcul fiscal pour personnes
                      physiques et morales.
                    </div>
                    <div className="timeline-stack">
                      <span className="tl-tag">Java</span>
                      <span className="tl-tag">MySQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="section-tag">Formation</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem,2.5vw,2.2rem)' }}>
                Diplômes
              </h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div
                    className="timeline-dot"
                    style={{
                      borderColor: 'var(--accent)',
                      boxShadow: '0 0 18px rgba(0,229,160,0.7)',
                    }}
                  />
                  <div className="timeline-content glass">
                    <div className="timeline-date">Depuis nov. 2024 · En cours ✨</div>
                    <div className="timeline-role">
                      Master II — Systèmes d&apos;Information Géomatique et Décision
                    </div>
                    <div className="timeline-company">
                      EMIT · École Management et d&apos;Innovation Technologique · Fianarantsoa
                    </div>
                    <div className="timeline-text">
                      Formation avancée en SIG, Web Mapping, analyse spatiale, PostGIS, GeoServer
                      et aide à la décision géospatiale.
                    </div>
                    <div className="timeline-stack">
                      <span className="tl-tag">QGIS</span>
                      <span className="tl-tag">PostGIS</span>
                      <span className="tl-tag">GeoServer</span>
                      <span className="tl-tag">OSM</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot" style={{ borderColor: 'var(--accent2)' }} />
                  <div className="timeline-content glass">
                    <div className="timeline-date">Nov. 2023 – Sept. 2024</div>
                    <div className="timeline-role">
                      Licence — Informatique, Développement d&apos;Applications Internet et Intranet
                    </div>
                    <div className="timeline-company">EMIT · Fianarantsoa</div>
                    <div className="timeline-text">
                      Développement web, mobile et réseau. Bases solides en algorithmique, POO et
                      systèmes d&apos;information.
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot" style={{ borderColor: '#f9c74f' }} />
                  <div className="timeline-content glass">
                    <div className="timeline-date">Nov. 2018 – Août 2019</div>
                    <div className="timeline-role">Baccalauréat Série C</div>
                    <div className="timeline-company">Lycée Maria Manjaka · Fianarantsoa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="wrap">
          <div className="reveal">
            <div className="section-tag">À propos</div>
            <h2 className="section-title">Langues & Intérêts</h2>
          </div>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '2rem' }}
          >
            <div className="reveal reveal-delay-1">
              <h3
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  marginBottom: '1.2rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Langues
              </h3>
              <div className="lang-row">
                <div className="lang-card glass">
                  <div className="lang-name">🇫🇷 Français</div>
                  <div className="lang-level">Bien</div>
                  <div className="lang-dots">
                    <div className="lang-dot filled" />
                    <div className="lang-dot filled" />
                    <div className="lang-dot filled" />
                    <div className="lang-dot filled" />
                    <div className="lang-dot filled" />
                    <div className="lang-dot filled" />
                    <div className="lang-dot filled" />
                    <div className="lang-dot" />
                  </div>
                </div>
                <div className="lang-card glass">
                  <div className="lang-name">🇬🇧 Anglais</div>
                  <div className="lang-level">Good</div>
                  <div className="lang-dots">
                    <div className="lang-dot filled" />
                    <div className="lang-dot filled" />
                    <div className="lang-dot filled" />
                    <div className="lang-dot filled" />
                    <div className="lang-dot" />
                    <div className="lang-dot" />
                    <div className="lang-dot" />
                    <div className="lang-dot" />
                  </div>
                </div>
                <div className="lang-card glass">
                  <div className="lang-name">🇮🇹 Italiano</div>
                  <div className="lang-level">Abbastanza bene</div>
                  <div className="lang-dots">
                    <div className="lang-dot filled" />
                    <div className="lang-dot filled" />
                    <div className="lang-dot filled" />
                    <div className="lang-dot" />
                    <div className="lang-dot" />
                    <div className="lang-dot" />
                    <div className="lang-dot" />
                    <div className="lang-dot" />
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <h3
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  marginBottom: '1.2rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Centres d&apos;intérêt
              </h3>
              <div className="interests-row">
                <div className="interest-chip">📚 Manga</div>
                <div className="interest-chip">🎮 Jeux vidéo</div>
                <div className="interest-chip">🏀 Basket-ball</div>
                <div className="interest-chip">🎭 Théâtre</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <div className="contact-wrap glass reveal">
            <div className="contact-title">
              Travaillons{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg,var(--accent),#00b4d8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                ensemble
              </em>
            </div>
            <p className="contact-sub">
              Un projet web, mobile ou SIG ? Je suis disponible pour missions, stages et
              collaborations.
              <br />
              Né le 13/10/2001 · Ambalaroy – Antsororokavo
            </p>
            <div className="contact-links">
              <a href="mailto:zandrianoelson@gmail.com" className="contact-link">
                ✉️ zandrianoelson@gmail.com
              </a>
              <a href="tel:+261322757852" className="contact-link">
                📞 032 27 578 52
              </a>
              <a href="https://github.com" className="contact-link" target="_blank" rel="noreferrer">
                💻 GitHub
              </a>
              <a href="#" className="contact-link">
                📄 Télécharger le CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <p>
            Portfolio de <strong>Andrianoelson Zo Ariel</strong> — Développeur Full Stack Web &
            Mobile · SIG & Web Mapping · Fianarantsoa, Madagascar
          </p>
        </div>
      </footer>
    </>
  )
}

export default App

