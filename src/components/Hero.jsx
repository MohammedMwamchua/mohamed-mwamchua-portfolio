import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowDown, FileDown } from 'lucide-react'
import portrait from '../assets/portrait.jpg'
import { heroStats } from '../data/content.js'

export default function Hero() {
  const stageRef = useRef(null)
  const reduced = useReducedMotion()
  const [photoFailed, setPhotoFailed] = useState(false)

  function handlePointerMove(e) {
    const el = stageRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <section className="hero wrap" id="top" aria-label="Introduction" ref={stageRef} onPointerMove={handlePointerMove}>
      <div className="hero-glow" aria-hidden="true" />

      <motion.div
        initial={reduced ? undefined : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="eyebrow hero-eyebrow">Web &amp; mobile developer &middot; Dar es Salaam, TZ</p>
        <h1>
          <span className="accent-line">Mohamed</span>
          <span className="accent-line">Haikali</span>
          <span className="accent-line grad">Mwamchua</span>
        </h1>
        <p className="lead">
          I build <strong>websites, admin panels and mobile apps</strong> with React, Django,
          PostgreSQL and Flutter &mdash; fast, clean, and easy for non-developers to run day to day.
        </p>
        <div className="hero-actions">
          <a className="btn btn-solid" href="#projects">
            See my projects <ArrowRight size={17} />
          </a>
          <a className="btn btn-line" href="#contact">
            Contact me
          </a>
          <a className="btn btn-ghost" href="/Mohamed-Mwamchua-CV.pdf" download="Mohamed-Mwamchua-CV.pdf">
            <FileDown size={17} /> Download my CV
          </a>
        </div>
        <p className="avail">
          <span className="avail-dot" aria-hidden="true" /> Open to web and app work
        </p>

        <dl className="hero-stats">
          {heroStats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </motion.div>

      <motion.div
        className="hero-stage"
        initial={reduced ? undefined : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="hero-stage-float"
          animate={reduced ? undefined : { y: [0, -10, 0] }}
          transition={reduced ? undefined : { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
        >
          <figure className="portrait-frame">
            {photoFailed ? (
              <div className="portrait-fallback" role="img" aria-label="Mohamed Haikali Mwamchua">
                <span>MM</span>
              </div>
            ) : (
              <img
                src={portrait}
                width={720}
                height={1280}
                alt="Mohamed Haikali Mwamchua wearing a white shirt and a dotted tie"
                fetchPriority="high"
                onError={() => setPhotoFailed(true)}
              />
            )}
          </figure>
          <div className="now-card glass glass-strong">
            <div className="now-bar" aria-hidden="true"><i /><i /><i /></div>
            <div className="now-body">
              <p className="small">Latest completed project</p>
              <h2>Mnadani Secondary School website</h2>
              <p className="detail">
                A school website with its own admin panel, so staff can update news, photos
                and alumni stories without a developer.
              </p>
              <a className="jump" href="#mnadani">
                Read about it <ArrowDown size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
