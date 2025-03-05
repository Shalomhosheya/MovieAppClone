import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/image5-removebg-preview.png';
import UserIcon from '../assets/user2.png';
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  const navigation = [
    { label: 'TV Shows', href: '/tv' },
    { label: 'Movies', href: '/movie' }
  ];

  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75">
      <div className="container mx-auto px-2 flex items-center h-full gap-1">
        {/* Logo */}
        <img 
          src={logo} 
          alt="logo" 
          className="w-23 h-20  rounded-md   shadow-lg transition-transform duration-300 hover:scale-110"
        />

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-2 ml-5">
          {navigation.map((nav, index) => (
            <NavLink 
              key={nav.label} 
              to={nav.href} 
              className={({isActive}) =>`text-white hover:text-blue-400 transition duration-200 px-2 ${isActive && "text-blue-400"}`}
            >
              {nav.label}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <form>
            <input
            type="text"
            placeholder="Search here..."
            className="bg-neutral-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </form>
         <div className="text-2x1 text-white">
          <IoSearchSharp/>
         </div>

      <div className="w-15 h-14 rounded-full overflow-hidden cursor-pointer active:scale-50">
       <img 
        src={UserIcon} 
        alt="User" 
        className="w-full h-full object-cover"
      />
  </div>
</div>

      </div>
    </header>
  );
};

export default Header;
