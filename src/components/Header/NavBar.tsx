import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <React.Fragment>
        <nav className='flex font-medium justify-center  gap-5 pt-3'>
            <Link to="/">
                Home
            </Link>
            <Link to="/about">
                About
            </Link>
            <Link to="/contact">
                Contact
            </Link>
        </nav>
    </React.Fragment>
  )
}

export default NavBar