import React from 'react'
import NavBar from '../Header/NavBar'

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>

    <div className='bg-black text-white'>
        <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">SDE</h1>
          <p className=" text-sm">
          Empowering minds, illuminating futures<br/>
"Join SDE for a boundless journey of learning and growth!"
          </p>
        </div>
       
         <NavBar />
        
        
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            
            <div style={{ cursor: 'pointer' }} >
              
            </div>
           
            
           
          </nav>
        </div>
      </div>
      <div>
      <p className="text-center py-4">
      @copyright <span className="text-hoverColor">SDE Solutions</span> | All rights reserved {currentYear}
    </p>
    
      </div>
    </div>
     
  
    </React.Fragment>
    
  )
}

export default Footer