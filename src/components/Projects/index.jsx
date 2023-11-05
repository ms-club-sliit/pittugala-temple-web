'use client'
import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { PROJECT_TEXT } from '../../consts/consts'

const Projects = () => {
    return (
        <>
            <div className="mx-auto w-full p-4 py-6 lg:py-8 bg-white">
                <div className="flex justify-center items-center">
                    <h2 class="mb-4 text-black font-extrabold leading-none tracking-tight text-4xl md:text-4xl lg:text-4xl">Projects</h2>
                </div>
                <div className="flex justify-center items-center">
                    <p class="mb-6 text-l font-normal text-black w-[90%]">{PROJECT_TEXT}</p>
                </div>
                <div className="flex justify-center items-center">
                    <img
                        src="/static/projects-landing.svg"
                        className="w-[90%]"
                        alt="Projects Landing Image"
                    />
                </div>
                <div className="flex justify-center items-center mt-8">
                    <Link
                        href="#"
                        className="bg-orange hover:bg-light-orange text-white font-bold py-2 px-4 rounded">
                        Find out more <FontAwesomeIcon icon={faAngleRight} className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Projects
