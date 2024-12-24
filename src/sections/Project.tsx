import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Project = () => {
  return (
    <div className='text-[#3B8C2E] min-h-[100vh] w-full p-4'>
        <div className="flex max-w-[1200px] w-full flex-col mx-auto mb-6">
        <h1 className='flex mx-auto text-3xl font-bold my-[50px] text-Blue'>Our Projects</h1>

        <div className="flex flex-col md:flex-row justify-center items-center md:justify-around gap-[24px] lg:gap-[16px] flex-wrap">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
        </div>
    </div>
  )
}

export default Project


// #B8C2E200

// text-[#5d4b4b] 