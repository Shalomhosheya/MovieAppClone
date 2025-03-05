import React from 'react'
import logo from '../assets/image5-removebg-preview.png'
const Header = () => {
  return (
    <header className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75'>
        <div className="container mx-auto px-2">
        <img 
         src={logo} 
         alt="logo" 
         className="w-50 h-16 rounded-md border-gray-300 shadow-lg transition-transform duration-300 hover:scale-110 fixed top-1 left-4 md:top-0 md:right-6 lg:top-0 lg:left-10"
        />

        </div>
    </header>
  )
}

export default Header
