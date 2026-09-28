import Reveal from './Reveal.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">03 / Projects</p>
          <h2 className="section-title">Projects</h2>
        </Reveal>

        <div className="projects-list">
          {projects.map((project, i) => (
            <ProjectCard project={project} delay={i * 0.08} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
