import { useState, useEffect, useRef } from 'react'

const NAV_LINKS = [
  { href: '#introduction', label: 'Introduction' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#experience', label: 'Parcours' },
  { href: '#about', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav aria-label="Menu principal" ref={menuRef}>
      <div className="logo">Zo Ariel</div>

      {/* Desktop links */}
      <ul className="nav-links" role="list">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      <a href="mailto:zandrianoelson@gmail.com" className="btn-primary nav-cta">
        Me contacter
      </a>

      {/* Hamburger — mobile only */}
      <button
        className={`hamburger${open ? ' is-open' : ''}`}
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <ul role="list">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="mailto:zandrianoelson@gmail.com" className="btn-primary" onClick={close}
               style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
              Me contacter
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
