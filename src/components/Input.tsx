import React, { FC } from 'react';



type  IInput = {
    type: any;
    placeholder: string;
}


const Input:FC<IInput> = ({type, placeholder}) => {
  return (
    <div className='w-[330px] lg:w-[420px] outline-[0.1px] border-[0.5px] h-[48px] bg-White'>
        <input type={type} className="w-full h-full placeholder:font-[500]  p-4" placeholder={placeholder}/>
    </div>
  )
}

export default Input;
