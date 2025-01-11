import React, { FC } from 'react';


type ICard = {
  src: any;
  text: string;
}


const ProjectCard:FC<ICard> = ({src, text}) => {
  return (
    <div className="flex flex-col w-[333px] h-[280px] rounded-xl border-[2px] border-Blue hover:border-DPBtn hover:text-DPBtn bg-White my-4">
      <img src={src} alt="" className="w-full h-2/3 object-cover rounded-t-xl hover:scale-x-[1.01]" />
      <p className='text-Blue hover:text-DPBtn text-center text-2xl font-semibold my-2 capitalize'>{text}</p>
    </div>
  )
}

export default ProjectCard;

