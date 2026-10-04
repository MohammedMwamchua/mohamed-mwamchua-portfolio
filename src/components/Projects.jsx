import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <header className="section-head reveal">
          <h2 className="section-title">Selected work</h2>
          <p className="section-intro">
            Four projects I have built, from a school website to a hospital app.
          </p>
        </header>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
