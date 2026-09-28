import { Globe2, LayoutPanelLeft, Smartphone, BrainCircuit } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { services } from '../data/content.js'

const ICONS = [Globe2, LayoutPanelLeft, Smartphone, BrainCircuit]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">02 / Services</p>
          <h2 className="section-title">How I can help</h2>
        </Reveal>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal key={service.title} delay={i * 0.06} className="glass service-card">
                <span className="service-icon"><Icon size={22} /></span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
