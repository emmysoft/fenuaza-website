import React, { FC } from 'react';


type IChoswCard = {
    img: string;
    text: string;
    title: string;
}

const ChooseCard:FC<IChoswCard> = ({img, title, text}) => {
  return (
    <div className='border-[1px] md:border-[2px] border-DPyellow rounded-lg w-[300px] lg:w-[340px] h-[300px] flex flex-col justify-center items-center p-4'>
        <img src={img} alt="" className="" />
        <h4 className='text-Blue text-3xl md:text-[28px] font-[500] uppercase text-center'>{title}</h4>
        <p className='text-center'>{text}</p>

    </div>
  )
}

export default ChooseCard;
