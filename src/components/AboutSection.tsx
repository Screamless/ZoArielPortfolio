const LANGUAGES = [
  { flag: '🇫🇷', name: 'Français', level: 'Bien', filled: 7 },
  { flag: '🇬🇧', name: 'Anglais', level: 'Good', filled: 4 },
  { flag: '🇮🇹', name: 'Italiano', level: 'Abbastanza bene', filled: 3 },
]

const INTERESTS = [
  { icon: '📚', label: 'Manga' },
  { icon: '🎮', label: 'Jeux vidéo' },
  { icon: '🏀', label: 'Basket-ball' },
  { icon: '🎭', label: 'Théâtre' },
]

const TOTAL_DOTS = 8

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="reveal">
          <div className="section-tag">À propos</div>
          <h2 className="section-title">Langues &amp; Intérêts</h2>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '2rem' }}
        >
          {/* Languages */}
          <div className="reveal reveal-delay-1">
            <h3
              style={{
                fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)',
                marginBottom: '1.2rem', letterSpacing: '0.08em', textTransform: 'uppercase',
              }}
            >
              Langues
            </h3>
            <div className="lang-row">
              {LANGUAGES.map((lang) => (
                <div key={lang.name} className="lang-card glass">
                  <div className="lang-name">{lang.flag} {lang.name}</div>
                  <div className="lang-level">{lang.level}</div>
                  <div className="lang-dots" role="img" aria-label={`Niveau ${lang.level}`}>
                    {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
                      <div key={i} className={`lang-dot${i < lang.filled ? ' filled' : ''}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="reveal reveal-delay-2">
            <h3
              style={{
                fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)',
                marginBottom: '1.2rem', letterSpacing: '0.08em', textTransform: 'uppercase',
              }}
            >
              Centres d&apos;intérêt
            </h3>
            <div className="interests-row">
              {INTERESTS.map((item) => (
                <div key={item.label} className="interest-chip">
                  {item.icon} {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
