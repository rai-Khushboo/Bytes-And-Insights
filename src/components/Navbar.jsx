import React from 'react'
import { NavLink } from 'react-router-dom'
//react icons
import { FaFacebook } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Navbar = () => {
    //Nav Items 
    const navItems = [
        {path:"/", link:"Home",},
        {path:"/services", link:"Services",},
        {path:"/about", link:"About",},
        {path:"/blogs", link:"Blogs",},
        {path:"/contact", link:"Contact",},
    ]
  return (
    <header className='bg-black'>
        <nav className='px-4 py-4'>
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
        <div className='text-white'>
            <a href="/" className='hover:text-blue-700'><FaFacebook/></a>
            <a href="/" className='hover:text-blue-700'><FaDribbble/></a>
            <a href="/" className='hover:text-blue-700'><FaTwitter/></a>
        </div>
        </nav>
    </header>
  )
}

export default Navbar
