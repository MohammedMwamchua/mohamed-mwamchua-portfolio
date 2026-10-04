import { ArrowRight, FileDown } from 'lucide-react'
import portrait from '../assets/portrait-flag.jpg?w=360;702&format=avif;webp;jpeg&as=picture'
import Picture from './Picture.jsx'
import BrandIcon from './BrandIcon.jsx'
import { heroStack, profile } from '../data/content.js'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Web and mobile developer in {profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="lead">
            I build websites, admin panels and mobile apps with React, Django, PostgreSQL and
            Flutter, for schools, small businesses and hospitals in Tanzania.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              See my work <ArrowRight size={16} strokeWidth={2} />
            </a>
            <a className="btn btn-secondary" href={profile.cv} download="Mohamed-Mwamchua-CV.pdf">
              <FileDown size={16} strokeWidth={1.75} /> Download CV
            </a>
          </div>
          <p className="hero-note">Open to web and app work, freelance or full time.</p>
        </div>

        <figure className="hero-portrait">
          <Picture
            image={portrait}
            alt="Mohamed Haikali Mwamchua in a white shirt and dotted tie, holding a blue project report beside an Institute of Technology flag"
            sizes="(min-width: 960px) 360px, min(100vw - 2.5rem, 320px)"
            priority
          />
        </figure>
      </div>

      <div className="wrap">
        <div className="stack-strip">
          <p className="stack-label">Tools I use most</p>
          <ul className="stack-list">
            {heroStack.map((item) => (
              <li key={item.label}>
                <BrandIcon icon={item.icon} size={18} />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
