

const About = () => {
    return (
        <div className="about-container">
            <section className="profile-section">
                <img src="./images/profile.jpg" alt="Profile Picture" className="profile-photo" />
                <h1>Andrew Taggart</h1>
                <h2>Full-Stack Developer</h2>
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
        </div>
    )
}

export default About