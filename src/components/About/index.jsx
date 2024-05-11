'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {
  ABOUT_TEXT,
  ABOUT_POTRAIT_TEXT,
  ABOUT,
  FIND_OUT_MORE,
} from '../../consts/consts'

import LangContext from '../../context/LangContext'

const About = () => {
  const { t } = useContext(LangContext)

  return (
    <>
      <div className="mx-auto w-full p-4 py-1 lg:py-10 bg-bg-orange">
        <div className="flex justify-center items-center h-40">
          <h2 className="mb-4 text-black font-extrabold leading-none tracking-tight text-4xl md:text-4xl lg:text-4xl">
            {t('ABOUT')}
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <p className="mb-6  font-normal  text-black w-[90%] text-center">
            {t('ABOUT_TEXT')}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="p-5 w-[330px] flex flex-col items-center drop-shadow-2xl bg-stone-300 rounded-lg">
            <Image
              src="/static/AboutPotrait2.jpg"
              alt="About Potrait Image"
              width={320}
              height={280}
            />
            <p className="mb-6 text-sm text-black w-70 text-center mt-5 font-extrabold">
              {t('ABOUT_POTRAIT_TEXT')}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <Link
            href="/about"
            className="bg-orange hover:bg-light-orange text-white font-bold py-2 px-4 rounded"
          >
             {t('FIND_OUT_MORE')} {'>'}
          </Link>
        </div>
      </div>
    </>
  )
}

export default About
