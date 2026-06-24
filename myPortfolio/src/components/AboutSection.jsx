import { skills } from '../data/skills'

const AboutSection = () => {
  return (
    <section id="about" className="section-shell about-section">
      <div className="about-heading">
        <h2>About Me</h2>
      </div>

      <div className="about-layout">
        <div className="about-subsection about-description">
          <p className="subsection-label">My Description</p>

          <div className="about-content">
            <p>
              Hi, my name is Andrew Taggart, and I am a Data Science graduate
              focused on building practical machine learning, analytics, and
              AI-driven applications.
            </p>

            <p>
              I graduated from the University of Miami in 2020 with a
              Bachelor&apos;s degree in Human and Social Development, later
              completed a Software Engineering Immersive program through General
              Assembly, and earned my Master&apos;s in Data Science from Montclair
              State University in May 2026. My work combines software development,
              data analysis, machine learning, and product-focused problem solving.
            </p>

            <p>
              My other interests include snowboarding, running, strength training,
              nutrition, hiking, and reading. These interests have shaped my
              approach to technical work and problem-solving, reinforcing
              curiosity, discipline, and resilience.
            </p>

            <p>
              I believe growth comes from consistently learning, experimenting,
              and challenging yourself. I am excited to keep developing as a data
              scientist and software engineer, and I am always open to
              opportunities that allow me to contribute, learn, and continue
              growing.
            </p>
          </div>
        </div>

        <div className="about-subsection about-skills" aria-labelledby="skills-heading">
          <p className="subsection-label" id="skills-heading">
            Skills
          </p>

          <div className="about-skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.title}>
                <h4>{skill.title}</h4>

                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <div className="skill-tag" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection