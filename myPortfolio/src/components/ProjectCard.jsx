import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  const content = (
    <article className="project-card">
      <img src={project.image} alt={`${project.title} mockup`} />

      <div className="project-card-body">
        <p className="project-label">{project.label}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  )

  if (project.internal) {
    return (
      <Link className="project-link" to={project.url}>
        {content}
      </Link>
    )
  }

  return (
    <a
      className="project-link"
      href={project.url}
      target={project.url === '#' ? '_self' : '_blank'}
      rel={project.url === '#' ? undefined : 'noreferrer'}
    >
      {content}
    </a>
  )
}

export default ProjectCard