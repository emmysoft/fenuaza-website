import React, { FC } from 'react'



type HType = {
  url: any;
  title: string;
  title1: string;
}

const AboutHeader: FC<HType> = ({url, title, title1}) => {
  return (
    <div style={{ backgroundImage: `linear-gradient(to right, rgba(30, 13, 55, 0.9), rgba(128, 0, 128, 0.7)), url(${url})`, 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundColor: '#000080' }} 
    className='h-[320px]'>
        <div className="flex flex-col items-center justify-center h-full gap-2 uppercase">
            <h1 className='text-3xl md:text-5xl lg:text-[54px] text-White '>{title1}</h1>

            <div className="flex items-center gap-3 md:gap-4 text-White text-sm">
                <span>Fenuaza Integrated services</span>
                <span>|</span>
                <span>{title}</span>
            </div>
        </div>
    </div>
  )
}

export default AboutHeader;
