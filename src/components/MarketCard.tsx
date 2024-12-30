import React, { FC } from 'react';


type mType = {
    title: string;
    body: string;
}

const MarketCard: FC<mType> = ({ title, body }) => {
  return (
    <div className='h-[310px] w-[270px] lg:w-[350px] rounded-lg bg-White p-4 lg:p-8'>
        <h1 className='text-3xl font-bold text-[#1E0D37]'>{title}</h1>
        <p className='text-[#969696] text-sm md:text-[16px] mt-3'>{body}</p>
    </div>
  )
}

export default MarketCard;
