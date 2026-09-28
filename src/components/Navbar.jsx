import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../hooks/useTheme.js'
import { useScrollProgress } from '../hooks/useScrollProgress.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

const LINK_IDS = LINKS.map((l) => l.id)

export default function Navbar() {
  const { effective, toggle } = useTheme()
  const { progress } = useScrollProgress()
  const active = useActiveSection(LINK_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [menuOpen])

  const ThemeIcon = effective === 'dark' ? Sun : Moon
  const themeLabel = effective === 'dark' ? 'Light mode' : 'Dark mode'

  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">MM</span>
          <span className="brand-name">Mohamed Mwamchua</span>
        </a>

        <nav className="nav nav-desktop" aria-label="Main">
          {LINKS.map((link) => (
            <a
              key={link.id}
              className={`nav-link${active === link.id ? ' active' : ''}`}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
          <button className="theme-btn" type="button" onClick={toggle}>
            <ThemeIcon size={15} />
            <span className="theme-label">{themeLabel}</span>
          </button>
        </nav>

        <div className="nav-compact">
          <button className="theme-btn theme-btn-icon" type="button" onClick={toggle} aria-label={themeLabel}>
            <ThemeIcon size={17} />
          </button>
          <button
            className="menu-btn"
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className="progress-track" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              className="menu-drawer glass glass-strong"
              id="mobile-menu"
              aria-label="Mobile"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {LINKS.map((link) => (
                <a
                  key={link.id}
                  className={`menu-link${active === link.id ? ' active' : ''}`}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
