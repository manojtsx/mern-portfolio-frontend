import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex flex-col md:flex-row w-full items-start md:items-center bg-white dark:bg-black py-3 px-6 md:px-12">
      <div className="flex justify-between w-full">
        <div className="flex">
          <img src="/images/logo.png" alt="logo" className="h-8 md:h-10" />
        </div>
        <div className="hidden md:flex gap-4">
          <NavLink to="/" className="px-3 py-2 rounded hover:bg-gray-200">Home</NavLink>
          <NavLink to="/services" className="px-3 py-2 rounded hover:bg-gray-200">Services</NavLink>
          <NavLink to="/project" className="px-3 py-2 rounded hover:bg-gray-200">Project</NavLink>
          <NavLink to="/blog" className="px-3 py-2 rounded hover:bg-gray-200">Blog</NavLink>
          <NavLink to="/faq" className="px-3 py-2 rounded hover:bg-gray-200">FAQs</NavLink>
         <NavLink to="/signin" className="px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition duration-200">Sign In</NavLink>
<NavLink to="/signup" className="px-3 py-2 rounded bg-green-500 text-white hover:bg-green-700 transition duration-200">Sign Up</NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path fillRule="evenodd" d="M2 4.5A1.5 1.5 0 013.5 3h13a1.5 1.5 0 010 3h-13A1.5 1.5 0 012 4.5zm0 6A1.5 1.5 0 013.5 9h13a1.5 1.5 0 010 3h-13A1.5 1.5 0 012 10.5zm1.5 6a1.5 1.5 0 000 3h13a1.5 1.5 0 000-3h-13z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${open ? 'block' : 'hidden'}`}>
        <NavLink to="/" className="block px-3 py-2 rounded hover:bg-gray-200">Home</NavLink>
        <NavLink to="/services" className="block px-3 py-2 rounded hover:bg-gray-200">Services</NavLink>
        <NavLink to="/project" className="block px-3 py-2 rounded hover:bg-gray-200">Project</NavLink>
        <NavLink to="/blog" className="block px-3 py-2 rounded hover:bg-gray-200">Blog</NavLink>
        <NavLink to="/faq" className="block px-3 py-2 rounded hover:bg-gray-200">FAQs</NavLink>
        <NavLink to="/signin" className="px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition duration-200">Sign In</NavLink>
<NavLink to="/signup" className="px-3 py-2 rounded bg-green-500 text-white hover:bg-green-700 transition duration-200">Sign Up</NavLink>
      </div>
    </header>
  );
};

export default Navbar;