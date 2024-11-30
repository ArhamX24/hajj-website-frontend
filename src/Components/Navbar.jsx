import React from 'react'
import logo from "../Images/logo.png"
import "../Styles/Navbar.css"
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const handleDropDown = () => {
        setIsNavOpen(!isNavOpen)
    }
    

  return (
    <>
    <nav>
        <div className="flex items-center font-medium justify-around z-30">
            <div className='logo flex items-center justify-between cursor-pointer z-30 w-full p-5 lg:p-3 lg:w-auto'>
                <div className='flex items-center hover:bg-slate-50'>
                    <img src={logo} alt="logo-png" className='w-12' />
                    <span className='ml-1'>Makkah <span className='logo-txt'>Travels</span></span>
                </div>
                <div onClick={handleDropDown}>
                    {
                        isNavOpen? <svg className='lg:hidden z-30' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg> :
                        <svg className='lg:hidden z-30' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
                    }
                </div>
            </div>
            <ul className='lg:flex hidden items-center gap-4 z-30'>
                <li className='link'>Home</li>
                <div className='link py-7 px-3'>
                <li className='flex items-center'>Umrah Packages <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg></li>
                <div className="dropdown-menu text-center z-30 bg-white">
                    <ul>
                        <li className="dropdown-link">Package 1</li>
                        <li className="dropdown-link">Package 2</li>
                        <li className="dropdown-link">Package 3</li>
                        <li className="dropdown-link">Package 4</li>
                    </ul>
                </div>
                </div>
                <div className='link py-7 px-3'>
                <li className='flex items-center'>Hajj Packages <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg></li>
                <div className="dropdown-menu text-center z-30 bg-white">
                    <ul>
                        <li className="dropdown-link">Package 1</li>
                        <li className="dropdown-link">Package 2</li>
                        <li className="dropdown-link">Package 3</li>
                        <li className="dropdown-link">Package 4</li>
                    </ul>
                </div>
                </div>
                <li className='link'>About Us</li>
                <li className='link'>Contact Us</li>
            <button className='px-10 py-2 border-primary border rounded-lg transition-all duration-500 ease-out hover:bg-primary hover:text-white'>Book Now</button>
            </ul>

            {/* small devices navbar */}

            <ul className={`lg:hidden text-center absolute w-full h-full bottom-0 z-10 py-20 pl-4 bg-white duration-500 ${isNavOpen ? 'left-0' : 'left-[-100%]'}`}>
                <li className='py-7 px-3 block'>Home</li>
                <div className='py-7 px-3'>
                <li className='flex items-center justify-center'>Umrah Packages <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg></li>
                <div className="dropdown-menu text-center block">
                    <ul>
                        <li className="dropdown-link">Package 1</li>
                        <li className="dropdown-link">Package 2</li>
                        <li className="dropdown-link">Package 3</li>
                        <li className="dropdown-link">Package 4</li>
                    </ul>
                </div>
                </div>
                <li className='py-7 px-3 flex justify-center items-center'>Hajj Packages <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg></li> 
                <li className='py-7 px-3 block'>About Us</li>
                <li className='py-7 px-3 block'>Contact Us</li>
            <button className='px-10 py-2 border-primary border rounded-lg transition-all duration-500 ease-out hover:bg-primary hover:text-white'>Book Now</button>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar
