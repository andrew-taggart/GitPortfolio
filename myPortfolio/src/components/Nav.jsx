import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='Navbar'>
            <div className='logo'>Andrew Taggart
            <a href="https://www.linkedin.com/in/andrew-h-taggart/" target="_blank"> LinkedIn </a>
            <a href="https://github.com/andrew-taggart" target="_blank"> GitHub </a>
            </div>

            <div className="nav-links">
                <Link to='/'> Home </Link>
                <Link to='/projects'> Projects </Link>
                <Link to='/about'> About </Link>
                
                
            </div>
        </div>
    )
}
/* 
Add back in when blog posts are available
<Link to='/blog'> Blog </Link>
<Link to='/contact'> Contact </Link>
 */
export default Nav