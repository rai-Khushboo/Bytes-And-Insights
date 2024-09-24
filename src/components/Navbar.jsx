import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
//react icons
import { FaBars, FaFacebook ,FaDribbble ,FaTwitter, FaXmark} from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    //Nav Items 
    const navItems = [
        {path:"/", link:"Home",},
        {path:"/services", link:"Services",},
        {path:"/about", link:"About",},
        {path:"/blogs", link:"Blogs",},
        {path:"/contact", link:"Contact",},
    ]
  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href="/" className='text-xl font-bold text-white'>Codeamazed<span className='text-blue-700'>KR</span></a>
        {/* naviteams for the larger devices */}
        <ul className='md:flex gap-12 text-lg hidden'>
            {
                navItems.map(({path , link}) => <li className='text-white' key={path}>
                    <NavLink to={path}>{link}
                    </NavLink>
                </li>)
            }
        </ul>
        {/* menu Items */}
        <div className='text-white lg:flex gap-4 items-center hidden'>
            <a href="/" className='hover:text-blue-700'><FaFacebook/></a>
            <a href="/" className='hover:text-blue-700'><FaDribbble/></a>
            <a href="/" className='hover:text-blue-700'><FaTwitter/></a>
            <button className='bg-blue-700 px-6 py-2 font-medium rounded  hover:bg-white hover:text-blue-700 transition-all duration-200 ease-in'>Login</button>
        </div>
        {/* mobile menu button , will be displayed only on mobile screen */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark  className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
                    }
                    </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
