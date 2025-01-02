import React from 'react'
import ChooseCard from '../components/ChooseCard';
import { chooseUSData } from '../constant/data';

const ChooseUs = () => {
  return (
    <div className='w-full my-[50px]'>
        <div className="max-w-[1200px] w-full flex gap-3 md:gap-[100px] mx-auto items-center p-4 flex-col">
            <h1 className='text-Blue text-3xl md:text-[28px] font-[500] uppercase'>Why Choose Us?</h1>

            <div className="flex items-center gap-4 justify-center lg:justify-between flex-wrap">
                {
                    chooseUSData.map((d) => (
                        <ChooseCard img={d.img} title={d.title} text={d.text} key={d.title}/>

                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ChooseUs;
