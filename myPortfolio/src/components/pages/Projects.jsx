
const projects = [
    { id: 1, title: 'Project 1', description: 'Replace with Description and add Link', url: 'https://link-to-project1.com', image: 'temporary.jpg' },
    { id: 2, title: 'Project 2', description: 'Replace with Description and add Link', url: 'https://link-to-project2.com', image: 'temporary.jpg' },
    { id: 3, title: 'Project 3', description: 'Replace with Description and add Link', url: 'https://link-to-project3.com', image: 'temporary.jpg' },
    { id: 4, title: 'Project 4', description: 'Replace with Description and add Link', url: 'https://link-to-project4.com', image: 'temporary.jpg' },
    { id: 5, title: 'Project 5', description: 'Replace with Description and add Link', url: 'https://link-to-project5.com', image: 'temporary.jpg' },
    { id: 6, title: 'Project 6', description: 'Replace with Description and add Link', url: 'https://link-to-project6.com', image: 'temporary.jpg' },
]

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="gallery">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        
                        <img src={`../images/${project.image}`} alt={`Add Image ${project.id}`} />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="temporary">
                <ul>
                    <h4>To Do for this Page</h4>
                    <li>Links (launch site) and git?</li>
                    <li>Description of Projects
                        <ul>
                            <li>50-100 words</li>
                            <li>service/purpose</li>
                            <li>group or solo</li>
                        </ul>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Projects