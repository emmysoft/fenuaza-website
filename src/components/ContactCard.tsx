import React, { FC } from 'react';


type cType = {
    img: string;
    title: string;
    text: string;
}

const ContactCard:FC<cType> = ({ img, title, text }) => {
  return (
    <div className='flex gap-4 w-[37%]'>
        <img src={img} alt="" className="h-[40px] w-[40px]" />

        <div className="flex flex-col">
            <h4 className='text-2xl font-bold'>{title}</h4>
            <p className='text-xs text-wrap'>{text}</p>
        </div>
    </div>
  )
}

export default ContactCard;
