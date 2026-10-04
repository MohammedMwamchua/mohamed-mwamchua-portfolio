import { ArrowUpRight } from 'lucide-react'
import { siGithub } from 'simple-icons'
import BrandIcon from './BrandIcon.jsx'
import Picture from './Picture.jsx'

function ProjectMedia({ project }) {
  if (project.image) {
    return (
      <div className="project-media">
        <Picture
          image={project.image}
          alt={project.imageAlt}
          sizes="(min-width: 1120px) 600px, (min-width: 900px) 52vw, calc(100vw - 2.5rem)"
        />
      </div>
    )
  }

  return (
    <div className="project-media project-media-phones">
      {project.screens.map((screen) => (
        <Picture
          key={screen.alt}
          className="phone-shot"
          image={screen.image}
          alt={screen.alt}
          sizes="(min-width: 1120px) 180px, (min-width: 900px) 15vw, 28vw"
        />
      ))}
    </div>
  )
}

export default function ProjectCard({ project }) {
  return (
    <article className="project reveal" id={project.id} data-brand={project.id}>
      <ProjectMedia project={project} />

      <div className="project-body">
        <p className="project-kind">{project.kind}</p>
        <h3>{project.title}</h3>
        <p className="project-desc">{project.desc}</p>

        <ul className="tag-list" aria-label="Built with">
          {project.stack.map((item) => (
            <li className="tag" key={item.label}>
              <BrandIcon icon={item.icon} size={14} />
              {item.label}
            </li>
          ))}
        </ul>

        <details className="more">
          <summary>What it can do</summary>
          <ul>
            {project.details.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </details>

        <div className="project-links">
          {project.liveLink && (
            <a className="text-link" href={project.liveLink} target="_blank" rel="noopener noreferrer">
              Visit the live site <ArrowUpRight size={15} strokeWidth={1.75} />
            </a>
          )}
          {project.githubLink && (
            <a className="text-link text-link-quiet" href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <BrandIcon icon={siGithub} size={15} /> Code on GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
