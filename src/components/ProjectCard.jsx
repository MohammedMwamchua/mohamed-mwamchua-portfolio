import { ExternalLink } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="glass project-card"
      id={project.id}
    >
      <div className="project-grid">
        <div className="project-header">
          <h3>{project.title}</h3>
          {project.badge && <span className="badge">{project.badge}</span>}
          <p className="project-status">{project.status}</p>
        </div>
        <div>
          <p className="project-desc">{project.desc}</p>
          <div className="project-chips">
            {project.chips.map((chip) => (
              <span className="chip" key={chip}>{chip}</span>
            ))}
          </div>
          <details className="more">
            <summary>What it can do</summary>
            <ul>
              {project.details.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </details>
          {project.link && (
            <p className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View the code on GitHub <ExternalLink size={15} />
              </a>
            </p>
          )}
        </div>
      </div>
    </Reveal>
  )
}
