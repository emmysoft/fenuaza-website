import React, { FC, ReactNode } from 'react'


type CType = {
    text: string;
    children: ReactNode;
    className: string;
}


const CalNow:FC<CType> = ({text, children, className}) => {
  return (
    <div className={`flex items-center ${className}  gap-2 py-3 px-6 rounded-md shadow-sm cursor-pointer w-max`}>
         <span className="text-lg font-[400]">{text}</span>
         <span>{children}</span>
    </div>
  )
}

export default CalNow;
