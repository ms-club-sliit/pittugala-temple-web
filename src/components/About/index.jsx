'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { ABOUT_TEXT, ABOUT_POTRAIT_TEXT, ABOUT, FIND_OUT_MORE } from '../../consts/consts'

const About = () => {
  return (
    <>
      <div className="mx-auto w-full p-4 py-6 lg:py-8 bg-white">
        <div className="flex justify-center items-center h-40 about-top-ribbon">
          <h2 className="mb-4 text-black font-extrabold leading-none tracking-tight text-4xl md:text-4xl lg:text-4xl">
            {ABOUT}
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <p className="mb-6 text-base font-normal text-black w-[90%]">
            {ABOUT_TEXT}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="p-4 w-[330px] flex flex-col items-center">
            <Image
              src="/static/AboutPotrait.jpg"
              alt="About Potrait Image"
              width={250}
              height={280}
            />
            <p className="mb-6 text-sm font-normal text-black w-60 text-center mt-5">
              {ABOUT_POTRAIT_TEXT}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-2 h-40 about-bottom-ribbon">
          <Link
            href="/about"
            className="bg-orange hover:bg-light-orange text-white font-bold py-2 px-4 rounded"
          >
            {FIND_OUT_MORE} {'>'}
          </Link>
        </div>
      </div>
    </>
  )
}

export default About
