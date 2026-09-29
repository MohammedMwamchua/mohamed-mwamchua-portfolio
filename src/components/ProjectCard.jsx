import { ExternalLink, Globe2 } from 'lucide-react'
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
          {(project.liveLink || project.githubLink) && (
            <div className="project-links">
              {project.liveLink && (
                <a className="live-link" href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <Globe2 size={15} /> View live site
                </a>
              )}
              {project.githubLink && (
                <a className="code-link" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  View the code on GitHub <ExternalLink size={15} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  )
}
