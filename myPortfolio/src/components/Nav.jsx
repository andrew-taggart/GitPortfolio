import { Link, useLocation, useNavigate } from 'react-router-dom'

const Nav = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleAnchorClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 80)
      return
    }

    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="nav-logo" to="/">Andrew Taggart</Link>
        <div className="nav-links">
          <button type="button" onClick={() => handleAnchorClick('#home')}>Home</button>
          <button type="button" onClick={() => handleAnchorClick('#about')}>About</button>
          <button type="button" onClick={() => handleAnchorClick('#projects')}>Projects</button>
        </div>
      </nav>
    </header>
  )
}

export default Nav
