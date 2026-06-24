import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const Projects = () => {
  const archiveProjects = projects.filter((project) => !project.archiveOnly)

  return (
    <main className="page-shell">
      <section className="section-shell project-page-hero">
        <Link className="text-link" to="/">
          ← Back home
        </Link>

        <p className="section-kicker">Project Archive</p>

        <h1>Projects, research, and applied builds.</h1>

        <p>
          This page is structured for deeper project cards now and can later
          expand into individual case studies, reports, demos, and
          resume-specific pages.
        </p>
      </section>

      <section className="section-shell archive-grid" aria-label="All projects">
        {archiveProjects.map((project) => (
          <a
            className="archive-card"
            href={project.url}
            target={project.url === '#' ? '_self' : '_blank'}
            rel={project.url === '#' ? undefined : 'noreferrer'}
            key={project.title}
          >
            <img src={project.image} alt={`${project.title} mockup`} />

            <div>
              <p className="project-label">{project.type}</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <span>{project.stack}</span>
            </div>
          </a>
        ))}
      </section>
    </main>
  )
}

export default Projects