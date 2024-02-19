'use client'
import React from 'react'
import Link from 'next/link'

import { MORE_DETAILS, PROJECTS, PROJECT_TEXT } from '../../consts/consts'

const Projects = () => {
  return (
    <>
      <div className="mx-auto w-full p-4 py-6 lg:py-8 bg-white">
        <div className="flex justify-center items-center mt-2">
          <h2 className="mb-4 text-black font-extrabold leading-none tracking-tight text-4xl md:text-4xl lg:text-4xl">
            {PROJECTS}
          </h2>
        </div>
        <div className="flex justify-center items-center mt-2">
          <p className="mb-6 text-l font-normal text-black w-[90%] text-center">
            {PROJECT_TEXT}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/static/coverproject.jpeg"
            className="w-[90%]"
            alt="Projects Landing Image"
          />
        </div>
        <div className="flex justify-center items-center mt-8">
          <Link
            href="/projects"
            className="bg-orange hover:bg-light-orange text-white font-bold py-2 px-4 rounded"
          >
            {MORE_DETAILS} {'>'}
          </Link>
        </div>
      </div>
    </>
  )
}

export default Projects
