import React from 'react'
import ProjectCard from '../components/ProjectCard';
import { pic12, pic11, pic13, pic10, pic7, pic4, pic9, pic6, pic8 } from '../constant/images';



var images = [
  {
    img1: pic11,
    text: ''
  },
  {
    img1: pic12,
    text: ''
  },
  {
    img1: pic13,
    text: ''
  },
  {
    img1: pic10,
    text: ''
  },
  {
    img1: pic7,
    text: ''
  },
  {
    img1: pic4,
    text: ''
  },
  {
    img1: pic9,
    text: ''
  },
  {
    img1: pic6,
    text: ''
  },
  {
    img1: pic8,
    text: ''
  },
]

const Project = () => {
  return (
    <div className='min-h-[100vh] w-full bg-[#fafafa]'>
        <div className="flex max-w-[1200px] w-full flex-col mx-auto my-4 lg:my-[50px] p-4">
        <h1 className='flex mx-auto text-3xl font-bold my-[50px] text-Blue uppercase'>Gallery of Project</h1>

        <div className="flex flex-col md:flex-row justify-center items-center md:justify-around gap-[24px] lg:gap-[16px] flex-wrap">
          {
            images.map((l) => (
              <ProjectCard src={l.img1} key={l.img1}/>
            ))
          }
        </div>
        </div>
    </div>
  )
}

export default Project


// bg-[#1E0D37]
// ext-[#3B8C2E] 