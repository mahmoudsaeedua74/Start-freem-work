import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
 console.log( window.scrollTo(2000, 0))
  return (
    <nav className="bg-maincolor sticky top-0 start-0 end-0 z-10">
      <div className="flex justify-between p-4 md:p-8 container mx-auto items-center uppercase font-bold">
        {/* Logo */}
        <div>
          <Link className="text-white text-[2rem]" to=""> Start Framework </Link> </div>

        <ul className="hidden md:flex gap-6 text-white text-[1.4rem]">
          <li>
            <NavLink to="About" className="hover:text-secondcolor">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="Portfolio" className="hover:text-secondcolor">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="Contact" className="hover:text-secondcolor">
              Contact
            </NavLink>
          </li>
        </ul>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-3xl md:hidden focus:outline-none"
        >
          <i className={isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </button>

        {isMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-maincolor text-white text-[1.4rem] flex flex-col items-center gap-4 py-4 md:hidden">
            <li>
              <NavLink to="About" onClick={() => setIsMenuOpen(false)} className="hover:text-secondcolor">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="Portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-secondcolor">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="Contact" onClick={() => setIsMenuOpen(false)} className="hover:text-secondcolor">
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
