import type { MouseEventHandler } from 'react'
import { skills } from '../data'

export default function SkillsSection() {
  const onMoveGlow: MouseEventHandler<HTMLDivElement> = (e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
  }

  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="reveal">
          <div className="section-tag">Compétences</div>
          <h2 className="section-title">Mon expertise technique</h2>
          <p className="section-sub">
            Full stack web &amp; mobile + maîtrise des outils géospatiaux — des applications
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
                  <span key={`${s.name}-${t.label}`} className={`skill-tag ${t.tone ?? ''}`}>
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
  )
}
