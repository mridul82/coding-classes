import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <React.Fragment>
        <div className="flex flex-row justify-between p-4 px-5 md:px-32 bg-white shadow-lg">
            <div className='flex'>
            My LOGO
            </div>
            <NavBar />
            
        </div>
    </React.Fragment>
   
  )
}

export default Header