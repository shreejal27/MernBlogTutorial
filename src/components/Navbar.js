import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <p id='title'>MyBlogs</p>
            <ul>
                {/* <li><a href="/">Home</a></li> */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/articleslist">Article List</Link></li>
                {/* <li><Link to="/article">Article</Link></li> */}
            </ul>
        </nav>
    )
}

export default Navbar