import { ArrowUp } from 'lucide-react'
import { useScrollProgress } from '../hooks/useScrollProgress.js'

export default function BackToTop() {
  const { scrolled } = useScrollProgress()

  return (
    <button
      className="to-top"
      type="button"
      style={{ opacity: scrolled ? 1 : 0, pointerEvents: scrolled ? 'auto' : 'none', transition: 'opacity .2s' }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  )
}
