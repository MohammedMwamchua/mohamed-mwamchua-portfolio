import { timeline } from '../data/content.js'

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="wrap split">
        <header className="reveal">
          <h2 className="section-title">Experience and education</h2>
        </header>
        <ol className="timeline">
          {timeline.map((entry) => (
            <li key={`${entry.year}-${entry.what}`} className="timeline-item reveal">
              <span className="timeline-year">{entry.year}</span>
              <div>
                <p className="timeline-what">{entry.what}</p>
                <p className="timeline-where">{entry.where}</p>
                {entry.detail && <p className="timeline-detail">{entry.detail}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
