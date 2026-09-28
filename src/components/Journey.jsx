import Reveal from './Reveal.jsx'
import { timeline } from '../data/content.js'

export default function Journey() {
  return (
    <section className="section" id="journey">
      <div className="wrap split">
        <Reveal>
          <p className="eyebrow">04 / Journey</p>
          <h2 className="section-title">My journey</h2>
        </Reveal>
        <ol className="timeline-list">
          {timeline.map((entry, i) => (
            <Reveal as="li" key={entry.year} delay={i * 0.05} className="timeline-item">
              <span className="year">{entry.year}</span>
              <div>
                <p className="what">{entry.what}</p>
                <p className="where">{entry.where}</p>
                {entry.detail && <p className="timeline-detail">{entry.detail}</p>}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
