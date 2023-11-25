// components/Navbar.js
'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
          <Link href="/">
            <Image
              src="/static/logo-dharma-chakra.png"
              alt="Website Logo"
              width={35}
              height={34}
              className="md:mx-auto"
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-6 pr-20">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li className="pl-5">
              <Link href="/events">Events</Link>
            </li>
            <li className="pl-5">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="pl-5">
              <Link href="/dhammaSchool">Dhamma School</Link>
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
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'
          } border-t border-black`}
      >
        <div className="flex flex-col items-center">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/dhammaSchool">Dhamma School</a>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
