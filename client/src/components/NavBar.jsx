"use client"; // Ensure this is used at the top of your component

import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Link from 'next/link'; // Import Link from Next.js

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className="fixed top-[3%] left-[40%] w-screen/2 z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-full">
      <div className="container mx-auto flex justify-between items-center p-4 border border-gray-300 dark:border-gray-600 rounded-full">
        <ul className="flex space-x-5">
          <li>
            {/* Link for Home */}
            <Link href="/" className="text-black dark:text-white transition-all hover:rounded-3xl hover:border-2 hover:border-black hover:bg-yellow-100 hover:p-2 rounded-3xl dark:hover:text-black">
                Home
            </Link>
          </li>
          <li>
            <Link href="#" className="text-black dark:text-white transition-all hover:rounded-3xl hover:border-2 hover:border-black hover:bg-yellow-100 hover:p-2 rounded-3xl dark:hover:text-black">About</Link>
          </li>
          <li>
            <Link href="#" className="text-black dark:text-white transition-all hover:rounded-3xl hover:border-2 hover:border-black hover:bg-yellow-100 hover:p-2 rounded-3xl dark:hover:text-black">Contact</Link>
          </li>
          <li>
            <div className="flex items-center">
              <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={24}
                moonColor="white"
                sunColor="black"
                className='transition-all hover:size-[27px]'
              />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
