import { MenuIcon, X } from 'lucide-react'
import React, { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState()
    const toggleMenuOff = () => {
        setIsMenuOpen(false);
      };
        const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
        };
  return (
    <div>
        <header className="bg-gradient-to-t from-yellow-500 to-red-900 text-white py-3">
        <div className="flex px-10 justify-between gap-5">
          
            <img src="images/adeolaodutala.jpg" style={{with: "50px", height: "50px"}}/>
            <h1 className="text-xl md:text-2xl font-bold md:font-extrabold">Adeola Odutola College  1994 Alumni</h1>
            
           <MenuIcon className='flex md:hidden cursor-pointer' onClick={toggleMenu}/>

        <div className="hidden md:flex px-5 gap-10">
            <a href="/">Home</a>
            <a href="#student">1994 Set Students</a>
            <a href="gallery">Events</a>
        </div>

        <div className="hidden md:flex px-5 gap-10">
            <a href="#hero">Advertise Your Business</a>
            <a href="#course">Sign Up </a>
            <a href="#course">Login</a>
        </div>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-20" onClick={toggleMenu}></div>
        )}

        {/* Hamburger menu dropdown content */}
        {isMenuOpen && (
          <div className="fixed inset-0  z-30 flex  px-10 pt-1 justify-center bg-gradient-to-l from-yellow-500 to-red-900 text-slate-300">
           
          <div className="flex flex-col h-full py-10 text-xl">
          <button onClick={toggleMenuOff} className="ml-[250px]"><X/></button>
          
          <a href="/" className='my-5'>Home</a>
            <a href="#student" className='my-5'>1994 Set Students</a>
            <a href="gallery" className='my-5'>Events</a>
            <a href="#hero" className='my-5'>Advertise Your Business</a>
            <a href="#course" className='my-5'>Sign Up </a>
            <a href="#course" className='my-5'>Login</a>
           
           {/* <a href='/' className="py-5">Contact</a>
           <a href='/' className="py-5">Contact</a>
           <a href='/' className="py-5">Contact</a>
           <a href='/' className="py-5">Contact</a> */}
           {/* ... other menu items ... */}
          </div>
         
       </div>
        )}

    </header>


    </div>
  )
}

export default Header