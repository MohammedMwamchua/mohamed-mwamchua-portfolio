import { ArrowUp } from 'lucide-react'
import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>&copy; 2026 {profile.name}. {profile.location}.</p>
        <a className="text-link text-link-quiet" href="#top">
          Back to top <ArrowUp size={14} strokeWidth={1.75} />
        </a>
      </div>
    </footer>
  )
}
