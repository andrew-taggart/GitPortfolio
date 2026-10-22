import { Link } from 'react-router-dom'
import { projects, courseworkRepo } from '../data/projects'
import ProjectCard from './ProjectCard'

const ProjectsPreview = () => {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="section-shell projects-preview">
      <div className="projects-heading">
        <h2>Projects</h2>
        <p className="projects-intro">
          Selected work from my M.S. in Data Science and research: NLP, big-data
          pipelines, forecasting, deep learning, and data visualization.
        </p>
      </div>

      <div className="project-grid">
        {featuredProjects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>

      <div className="projects-actions">
        <Link className="button button-primary" to="/projects">
          View all projects
        </Link>
        <a
          className="button button-secondary"
          href={courseworkRepo}
          target="_blank"
          rel="noreferrer"
        >
          M.S. coursework on GitHub
        </a>
      </div>
    </section>
  )
}

export default ProjectsPreview
