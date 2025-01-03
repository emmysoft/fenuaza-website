import React, { FC } from 'react';


type ICard = {
  src: any
}


const ProjectCard:FC<ICard> = ({src}) => {
  return (
    <div className="flex flex-col w-[373px] h-[280px] rounded-xl border-[2px] border-Blue hover:border-DPBtn hover:text-DPBtn bg-White">
      <img src={src} alt="" className="w-full h-2/3 object-cover rounded-t-xl hover:scale-x-[1.01]" />
      <p className='text-Blue hover:text-DPBtn text-center text-2xl font-semibold my-2'>INTERIOR RESIDENTIAL PAINTING </p>
    </div>
  )
}

export default ProjectCard;

