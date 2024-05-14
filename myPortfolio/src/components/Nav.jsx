import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='Navbar'>
            <div className='logo'>Andrew Taggart</div>
            <div className="nav-links">
                <Link to='/'> Home </Link>
                <Link to='/projects'> Projects </Link>
                <Link to='/about'> About </Link>
                <Link to='/blog'> Blog </Link>
                <Link to='/contact'> Contact </Link>
            </div>
        </div>
    )
}

export default Nav