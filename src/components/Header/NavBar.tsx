import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <React.Fragment>
        <nav className='flex font-medium p-1 gap-5'>
            <Link to="/">
                Home
            </Link>
            <Link to="/about">
                About
            </Link>
        </nav>
    </React.Fragment>
  )
}

export default NavBar