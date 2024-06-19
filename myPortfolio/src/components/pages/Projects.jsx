
const projects = [
    { id: 1, title: 'Ticketly', description: 'Ticket Venue Application. Group Project. Python, Django, postgreSQL, React.js', url: 'https://github.com/Lane17027/Ticketly', image: 'Ticketly.png' },
    { id: 2, title: 'DADA', description: 'Task Manager. Group Project. MERN', url: 'https://github.com/andrew-taggart/DADA', image: 'DADA.png' },
    { id: 3, title: 'Workout Planner', description: 'Workout Planner. Solo Project. MERN', url: 'https://github.com/andrew-taggart/Workout-Planner', image: 'WorkoutOrganizer.png' },
    { id: 4, title: 'Pro/Fit Book', description: 'Appointment Scheduling Application. Solo Project. Python, Django, postgreSQL, React.js', url: 'https://github.com/andrew-taggart/fit_book', image: 'temporary.jpg' },
    { id: 5, title: 'FoodReactions', description: 'Replace with Description', url: 'https://github.com/codydecoder/FoodReactions', image: 'FoodReactionsImg.png'}
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
        </div>
    )
}

export default Projects