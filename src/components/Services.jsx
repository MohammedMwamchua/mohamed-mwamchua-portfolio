import { BrainCircuit, Globe, LayoutDashboard, Smartphone } from 'lucide-react'
import { services } from '../data/content.js'

const ICONS = [Globe, LayoutDashboard, Smartphone, BrainCircuit]

export default function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="wrap">
        <header className="section-head reveal">
          <h2 className="section-title">How I can help</h2>
        </header>

        <ul className="services-grid">
          {services.map((service, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <li key={service.title} className="service reveal">
                <Icon className="service-icon" size={20} strokeWidth={1.6} aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
