'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import projectDetails from './projectDetails.json'

const Projects = () => {
  const [projects, setProjects] = useState(projectDetails)

  useEffect(() => {
    setProjects(projectDetails)
  }, [])
  return (
    <div className="min-h-screen bg-white flex flex-col pt-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        {projects.projectName}
      </h1>
      <h3 className="text-xl md:text-2xl mt-2 text-center mt-3">
        {projects.projectBio}
      </h3>
      <Image
        src="/static/projectSample.png"
        alt="Project Image"
        width={1082}
        height={317}
        className="mt-4 w-full px-10 md:px-20"
      />
      <div className="text-center mt-12 mb-12 mx-20 md:mx-40">
        {projects.paragraphs.map((para, index) => (
          <p className="mt-6" key={index}>
            {para}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Projects
