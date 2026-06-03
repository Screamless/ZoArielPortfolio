import { experiences, education, type TimelineEntry } from '../data'

function TimelineList({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <div key={i} className="timeline-item">
          <div
            className="timeline-dot"
            style={{
              borderColor: item.color ?? 'var(--accent)',
              boxShadow: item.glow ?? undefined,
            }}
          />
          <div className="timeline-content glass">
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-role">{item.role}</div>
            <div className="timeline-company">{item.org}</div>
            {item.text && <div className="timeline-text">{item.text}</div>}
            {item.stack?.length ? (
              <div className="timeline-stack">
                {item.stack.map((tag) => (
                  <span key={tag} className="tl-tag">{tag}</span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}
          className="grid-2col reveal"
        >
          {/* Experiences */}
          <div>
            <div className="section-tag">Expériences</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem,2.5vw,2.2rem)' }}>
              Parcours professionnel
            </h2>
            <TimelineList items={experiences} />
          </div>

          {/* Education */}
          <div>
            <div className="section-tag">Formation</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem,2.5vw,2.2rem)' }}>
              Diplômes
            </h2>
            <TimelineList items={education} />
          </div>
        </div>
      </div>
    </section>
  )
}
