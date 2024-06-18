

const About = () => {
    return (
        <div className="about-container">
            <section className="profile-section">
                <img src="./images/profile.jpg" alt="Profile Picture" className="profile-photo" />
                <h1>Andrew Taggart</h1>
                <h2>Full-Stack Developer</h2>
                <h3>About Page</h3>
            </section>
            <section className="skills-section">
                <h2>Skills</h2>
                <div className="skill">HTML5</div>
                <div className="skill">CSS3</div>
                <div className="skill">Javascript</div>
                <div className="skill">Python</div>
                <div className="skill">Mongoose</div>
                <div className="skill">MongoDB</div>
                <div className="skill">Express</div>
                <div className="skill">postgreSQL</div>
                <div className="skill">Django</div>
                <div className="skill">node.js</div>
                <div className="skill">React</div>
            </section>

            <div>
                <h3>About Text / Professional Description</h3>
                <p>I am a Software Engineer who thrives on challenging myself and exploring new domains within the field. Aspiring to leverage my curiosity and determination to delve deeper into backend coding and statistics, with the ultimate goal of contributing to the realm of machine learning.  I aim to create innovative programs and applications that enhance the quality of people’s lives, embodying my values of continuous learning and problem-solving. </p>
            </div>

            <div className="temporary">
                <ul>
                    <h2>To Add</h2>
                    <li>Best/Favorite Project</li>
                    <li>Current projects?</li>
                    <li>Timeline/Career</li>
                    <li>Soft Skills</li>
                    <li>Other Code related Skills</li>
                    <li>Organize skills by language,db,middleware,etc?</li>
                </ul>
            </div>


        </div>
    )
}

export default About