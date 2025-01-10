import React from 'react'
import ProjectCard from '../components/ProjectCard';
import { pic14 } from '../constant/images';
import { gallery, gallery2, gallery3, gallery4, gallery5, gallery7, gallery8, gallery9 } from '../constant/gallery';



var images = [
  {
    img1: gallery2,
    text: 'Font Hall And Hotels'
  },
  {
    img1: gallery5,
    text: 'Our Finished work'
  },
  {
    img1: gallery8,
    text: 'St Thomas Anglican Church'
  },
  {
    img1: gallery4,
    text: 'Fenuaza Premium Services'
  },
  {
    img1: gallery9,
    text: 'Exterior Painting'
  },
  {
    img1: pic14,
    text: 'Interior Residential Painting'
  },
  {
    img1: gallery3,
    text: 'Fenuaza Premium Services'
  },
  {
    img1: gallery7,
    text: 'Fenuaza Premium Services'
  },
  {
    img1: gallery,
    text: 'Fenuaza Premium Services'
  },
]

const Project = () => {
  return (
    <div className='min-h-[100vh] w-full bg-[#fafafa]' id='project'>
        <div className="flex max-w-[1200px] w-full flex-col mx-auto my-4 lg:my-[50px] p-4">
        <h1 className='flex mx-auto text-3xl my-[50px] text-Blue font-[500]'>Gallery of Project</h1>

        <div className="flex flex-col md:flex-row justify-center items-center md:justify-around gap-[24px] lg:gap-[16px] flex-wrap">
          {
            images.map((l) => (
              <ProjectCard src={l.img1} key={l.img1} text={l.text}/>
            ))
          }
        </div>
        </div>
    </div>
  )
}

export default Project


