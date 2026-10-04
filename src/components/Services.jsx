import { ArrowRight } from 'lucide-react'
import Picture from './Picture.jsx'
import { services } from '../data/content.js'

function ServiceMedia({ media }) {
  if (media.kind === 'desktop') {
    return (
      <div className="service-media service-media-desktop">
        <Picture image={media.image} alt={media.alt} sizes="(min-width: 900px) 480px, calc(100vw - 4rem)" />
      </div>
    )
  }

  return (
    <div className="service-media service-media-phones">
      {media.screens.map((screen) => (
        <Picture key={screen.alt} image={screen.image} alt={screen.alt} sizes="(min-width: 900px) 170px, 36vw" />
      ))}
    </div>
  )
}

export default function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="wrap">
        <header className="section-head reveal">
          <h2 className="section-title">How I can help</h2>
        </header>

        <ul className="services-grid">
          {services.map((service) => (
            <li key={service.title} className="service reveal" data-brand={service.brand}>
              <ServiceMedia media={service.media} />
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a className="text-link" href={service.link.href}>
                  {service.link.label} <ArrowRight size={15} strokeWidth={1.75} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
