import React from 'react'
import NavBar from './NavBar'
import logo from '../../assets/logo/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
        <div className="flex flex-row justify-between p-2 px-5 md:px-32 bg-white shadow-lg">
            <Link to="/">
            <img src={logo} alt='logo' style={{ height: '50px', width: '50px' }} className=" rounded-full object-cover" />
            </Link>
                
           
            <NavBar />
            
        </div>
    </React.Fragment>
   
  )
}

export default Header