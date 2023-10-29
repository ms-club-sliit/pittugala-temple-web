// Event Navigation bar
'use client'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-input': {
    padding: '10px 14px',
    width: '300px',
  },
  '& .MuiInputLabel-outlined': {
    transform: 'translate(14px, 14px) scale(1)',
  },
  '& .custom-end-icon': {
    width: '24px',
    height: '24px',
    cursor: 'pointer',
  },
})

const EventNavigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  const linkStyles = (link) => ({
    backgroundColor: activeLink === link ? 'maroon' : 'transparent',
    color: activeLink === link ? 'white' : 'black',
    display: 'inline-block',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  })

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

  return (
    <nav className="bg-white p-4 text-black font-semibold">
      <div className="container mx-auto flex justify-between items-center pl-20 pr-20">
        <div className="hidden md:block">
          <ul className="flex space-x-6 pr-20">
            <li>
              <Link
                href="#"
                style={linkStyles('All')}
                onClick={() => handleLinkClick('All')}
              >
                All
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={linkStyles('Poya Day')}
                onClick={() => handleLinkClick('Poya Day')}
              >
                Poya Day
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={linkStyles('Katina Pooja')}
                onClick={() => handleLinkClick('Katina Pooja')}
              >
                Katina Pooja
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={linkStyles('Bodhi Pooja')}
                onClick={() => handleLinkClick('Bodhi Pooja')}
              >
                Bodhi Pooja
              </Link>
            </li>
            <li>
              <Link
                href="#"
                style={linkStyles('Charity')}
                onClick={() => handleLinkClick('Charity')}
              >
                Charity
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu button/icon */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-600"
        >
          ☰
        </button>

        <CustomTextField
          id="outlined-basic"
          variant="outlined"
          InputProps={{
            endAdornment: <SearchIcon style={{ color: 'grey' }} />,
          }}
        />

        {isMobileMenuOpen && (
          <div className="md:hidden ml-5">
            <ul>
              <li>
                <Link
                  href="#"
                  style={linkStyles('All')}
                  onClick={() => handleLinkClick('All')}
                >
                  All
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  style={linkStyles('Poya Day')}
                  onClick={() => handleLinkClick('Poya Day')}
                >
                  Poya Day
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  style={linkStyles('Katina Pooja')}
                  onClick={() => handleLinkClick('Katina Pooja')}
                >
                  Katina Pooja
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  style={linkStyles('Bodhi Pooja')}
                  onClick={() => handleLinkClick('Bodhi Pooja')}
                >
                  Bodhi Pooja
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  style={linkStyles('Charity')}
                  onClick={() => handleLinkClick('Charity')}
                >
                  Charity
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default EventNavigation