import {Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'
import Blog from './pages/Blog'
import Development from './pages/Development'

const Main = () => {
    return(
<div className='container'>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/development" element={<Development/>} />
    </Routes>
</div>
    )
}

export default Main