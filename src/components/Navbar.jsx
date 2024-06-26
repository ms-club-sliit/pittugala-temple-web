'use client'
import { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import LangContext from '../context/LangContext'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [lang, setLang] = useState('');

  const { t, changeLanguage } = useContext(LangContext)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLangUpdate = (e) => {
    changeLanguage(e.target.value)
    setLang(e.target.value)
  }

  useEffect(() => {
    const selectedLang = t('LANGUAGE');
    setLang(selectedLang);
  }, [t]);


  return (
    <nav className="bg-white p-4 text-black font-semibold">
      <div
        className={`container mx-auto flex justify-between items-center ${isMobileMenuOpen ? 'flex-col items-center' : 'pl-5'
          }`}
      >
        <div
          className={`text-center ${isMobileMenuOpen ? 'w-full' : 'w-auto'} ${isMobileMenuOpen ? 'mx-auto' : ''
            }`}
        >
          <Link href="/">
            <Image
              src="/static/logolq.png"
              alt="pittugala-temple-web-logo"
              width={300}
              height={10}
              loading="lazy"
              className={`md:mx-auto ${isMobileMenuOpen ? 'mx-auto text-center' : ''
                }`}
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-6 pr-20">
            <li>
              <Link href="/about">{t('ABOUT')}</Link>
            </li>
            <li className="pl-5">
              <Link href="/events">{t('EVENTS')}</Link>
            </li>
            <li className="pl-5">
              <Link href="/gallery">{t('GALLERY')}</Link>
            </li>
            <li className="pl-5">
              <Link href="/projects">{t('PROJECTS')}</Link>
            </li>
            <li className="pl-5">
              <Link href="/dhammaSchool">{t('DHAMMA_SCHOOL')}</Link>
            </li>
            <li className="pl-5">
              <select onChange={handleLangUpdate}>
                <option value="en">English</option>
                <option value="si">සිංහල</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-black animate-bounce"
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
            <Link onClick={() => toggleMobileMenu()} href="/about">
              {t('ABOUT')}
            </Link>
          </li>
          <li className="pl-5">
            <Link onClick={() => toggleMobileMenu()} href="/events">
              {t('EVENTS')}
            </Link>
          </li>
          <li className="pl-5">
            <Link onClick={() => toggleMobileMenu()} href="/gallery">
              {t('GALLERY')}
            </Link>
          </li>
          <li className="pl-5">
            <Link onClick={() => toggleMobileMenu()} href="/projects">
              {t('PROJECTS')}
            </Link>
          </li>
          <li className="pl-5">
            <Link onClick={() => toggleMobileMenu()} href="/dhammaSchool">
              {t('DHAMMA_SCHOOL')}
            </Link>
          </li>
          <li className="pl-5">
            <select onChange={handleLangUpdate} value={lang}>
              <option value="en">English</option>
              <option value="si">සිංහල</option>
            </select>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
