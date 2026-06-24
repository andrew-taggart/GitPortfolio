import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const ProjectsPreview = () => {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="section-shell projects-preview">
      <div className="projects-heading">
        <h2>Projects</h2>
      </div>

      <div className="project-grid">
        {featuredProjects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsPreview