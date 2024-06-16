
const projects = [
    { id: 1, title: 'Ticketly', description: 'Ticket Venue Application. Group Project. CHANGE PHOTO.', url: 'https://github.com/Lane17027/Ticketly', image: 'Ticketly.png' },
    { id: 2, title: 'DADA', description: 'Task Manager. Group Project.', url: 'https://github.com/andrew-taggart/DADA', image: 'DADA.png' },
    { id: 3, title: 'Workout Planner', description: 'Workout Planner. Solo Project. MERN', url: 'https://github.com/andrew-taggart/Workout-Planner', image: 'WorkoutOrganizer.png' },
    { id: 4, title: 'Pro/Fit Book', description: 'Appointment Scheduling Application', url: 'https://github.com/andrew-taggart/fit_book', image: 'temporary.jpg' },
    { id: 5, title: 'FoodReactions', description: 'Replace with Description', url: 'codydecoder/FoodReactions', image: 'FoodReactionsImg.png' },
    { id: 6, title: 'Project 6', description: 'Replace with Description and add Link', url: 'https://link-to-project6.com', image: 'temporary.jpg' },
]

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="gallery">
                {projects.map((project) => (
                    <a key={project.id} href={project.url}>
                        <div key={project.id} className="project-card">

                            <img src={`../images/${project.image}`} alt={`Add Image ${project.id}`} />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="temporary">
                <ul>
                    <h4>To Do for this Page</h4>
                    <li>Launch Demo sites??</li>
                    <li>Add Project Descriptions
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