// components/Navbar.js
'use client'
import { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white p-4 text-black font-semibold">
      <div className="container mx-auto flex justify-between items-center pl-20">
        <div
          className={`text-center ${isMobileMenuOpen ? 'w-full' : 'w-auto'}`}
        >
          <img
            src="/static/Logo.png"
            alt="Website Logo"
            className="md:mx-auto"
          />
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-6 pr-20">
            <li>
              <a href="#">About</a>
            </li>
            <li className="pl-5">
              <a href="/events">Events</a>
            </li>
            <li className="pl-5">
              <a href="#">Projects</a>
            </li>
            <li className="pl-5">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="animate-bounce text-black"
            onClick={toggleMobileMenu}
          >
            &#9776;
          </button>
        </div>
      </div>
      <ul
        className={`md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } border-t border-black`}
      >
        <div className="flex flex-col items-center">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
