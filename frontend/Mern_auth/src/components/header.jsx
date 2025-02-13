// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='w-full h-12 bg-gray-700 flex items-center fixed top-0'>
        <nav className='w-full flex flex-row gap-2.5 items-center justify-around ml-1 text-white font-bold'>

            <NavLink to="/home">Todo List</NavLink>

            <NavLink to="/about">About</NavLink>

            <NavLink to="/contact">Contact</NavLink>
        </nav>
    </header>
  );
}

export default Header;
