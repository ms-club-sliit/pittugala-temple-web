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

const linkStyles = (isActive) => ({
  backgroundColor: isActive ? 'maroon' : 'transparent',
  color: isActive ? 'white' : 'black',
  display: 'inline-block',
  padding: '5px 10px',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s',
})

const links = [
  { label: 'සියළුම වැඩසටහන්', key: 'All' },
  { label: 'පෝය දින', key: 'Poya Day' },
  { label: 'තොරතුරු', key: 'Information' },
  { label: 'බෝධි පූජා', key: 'Bodhi Pooja' },
  { label: 'ආධාර', key: 'Charity' },
]

const EventNavigation = ({ activeLink, setActiveLink, onSearch }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

  return (
    <nav className="bg-white p-4 text-black font-semibold">
      <div className="container mx-auto flex justify-between items-center pl-20 pr-20">
        <div className="hidden md:flex space-x-6 pr-20">
          {links.map((linkItem) => (
            <Link
              key={linkItem.key}
              href="#"
              style={linkStyles(linkItem.key === activeLink)}
              onClick={() => handleLinkClick(linkItem.key)}
            >
              {linkItem.label}
            </Link>
          ))}
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
          onChange={onSearch}
        />

        {isMobileMenuOpen && (
          <ul className="md:hidden ml-5 ">
            {links.map((linkItem) => (
              <li key={linkItem.key}>
                <Link
                  className="text-gray-600 hover:text-black"
                  href="#"
                  style={linkStyles(linkItem.key === activeLink)}
                  onClick={() => handleLinkClick(linkItem.key)}
                >
                  {linkItem.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
export default EventNavigation
