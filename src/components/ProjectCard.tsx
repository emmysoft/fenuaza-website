import React, { FC } from 'react';


type ICard = {
  src: any
}


const ProjectCard:FC<ICard> = ({src}) => {
  return (
        <img src={src} alt="" className="h-[250px] w-[373px] object-cover rounded-xl hover:scale-x-[1.01]" />
  )
}

export default ProjectCard;

