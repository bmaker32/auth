import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({parents}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-lg shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Links */}
        <div className="flex items-center space-x-6">
            <ul className='flex justify-between items-center gap-4'>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link> 
            </ul>

          {/* <a href="/home" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="/about" className="text-gray-700 hover:text-gray-900">{parents}</a> */}

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="focus:outline-none"
            >
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="#signin"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Sign In
                </a>
                <a
                  href="#signup"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Sign Up
                </a>
                <a
                  href="#signout"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Sign Out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
