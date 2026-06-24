const Hero = () => {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-layout">
        <div className="hero-profile">
          <img
            src="/images/profile.jpg"
            alt="Andrew Taggart profile"
            className="hero-profile-photo"
          />
        </div>

        <div className="hero-content">
          <p className="eyebrow">Data Science · Machine Learning · Analytics</p>

          <h1>Hi, I&apos;m Andrew!</h1>

          <p className="hero-copy">
            I&apos;m a Data Science graduate focused on building practical machine
            learning, analytics, and AI-driven applications. My work combines
            predictive modeling, data pipelines, dashboards, and product-focused
            problem solving.
          </p>

          <div className="hero-actions" aria-label="Portfolio links">
            <a
              className="button button-primary"
              href="https://github.com/andrew-taggart"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/andrew-h-taggart/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              className="button button-secondary"
              href="/Andrew_Taggart_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume PDF
            </a>

            <a className="button button-secondary" href="#projects">
              Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero