import { Link } from 'react-router-dom'
import { projects, courseworkRepo } from '../data/projects'

const sections = [
  {
    id: 'data',
    kicker: 'Data Science & Machine Learning',
    blurb:
      'Graduate projects and research covering NLP, Spark, forecasting, deep learning, and visualization.',
  },
  {
    id: 'software',
    kicker: 'Software Engineering',
    blurb: 'Full-stack web applications, including projects from the General Assembly Software Engineering Immersive.',
  },
]

const ArchiveCard = ({ project }) => (
  <a
    className="archive-card"
    href={project.url}
    target={project.url === '#' ? '_self' : '_blank'}
    rel={project.url === '#' ? undefined : 'noreferrer'}
  >
    <img src={project.image} alt={`${project.title} preview`} loading="lazy" />

    <div>
      <p className="project-label">{project.type}</p>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {project.highlight && (
        <span className="project-highlight">{project.highlight}</span>
      )}
      <span className="archive-stack">{project.stack}</span>
    </div>
  </a>
)

const Projects = () => {
  return (
    <main className="page-shell">
      <section className="section-shell project-page-hero">
        <Link className="text-link" to="/">
          ← Back home
        </Link>

        <p className="section-kicker">Project Archive</p>

        <h1>Projects, research, and applied builds.</h1>

        <p>
          Machine learning, analytics, and research work from my Master&apos;s in
          Data Science, plus the full-stack applications I built as a software
          engineer. All of my graduate coursework code is organized by course in
          one{' '}
          <a className="inline-link" href={courseworkRepo} target="_blank" rel="noreferrer">
            GitHub repository
          </a>
          .
        </p>
      </section>

      {sections.map((section) => {
        const items = projects.filter((project) => project.category === section.id)
        if (!items.length) return null

        return (
          <section
            className="section-shell archive-section"
            aria-label={section.kicker}
            key={section.id}
          >
            <p className="section-kicker">{section.kicker}</p>
            <p className="archive-blurb">{section.blurb}</p>

            <div className="archive-grid">
              {items.map((project) => (
                <ArchiveCard project={project} key={project.title} />
              ))}
            </div>
          </section>
        )
      })}
    </main>
  )
}

export default Projects
