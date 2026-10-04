import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../hooks/useTheme.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { profile } from '../data/content.js'

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

// The hero is tracked too, so no link is highlighted while it is in view.
const TRACKED_IDS = ['top', ...LINKS.map((l) => l.id)]

export default function Navbar() {
  const { effective, toggle } = useTheme()
  const active = useActiveSection(TRACKED_IDS)
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
  const themeLabel = effective === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <a className="brand" href="#top">{profile.shortName}</a>

        <nav className="nav-desktop" aria-label="Main">
          {LINKS.map((link) => (
            <a
              key={link.id}
              className="nav-link"
              href={`#${link.id}`}
              aria-current={active === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <button className="icon-btn" type="button" onClick={toggle} aria-label={themeLabel} title={themeLabel}>
            <ThemeIcon size={17} strokeWidth={1.75} />
          </button>
          <button
            className="icon-btn menu-btn"
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={19} strokeWidth={1.75} /> : <Menu size={19} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              className="menu-drawer"
              id="mobile-menu"
              aria-label="Mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {LINKS.map((link) => (
                <a
                  key={link.id}
                  className="menu-link"
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'true' : undefined}
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
