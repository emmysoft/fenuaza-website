import React from 'react'
import { paint, pic11,  } from '../constant/images'



const About = () => {
  return (
    <div className="w-full bg-[#fafafa] ">
    <div className='flex flex-col h-full gap-5 max-w-[1200px] w-full mx-auto'>
      <h1 className='text-center text-3xl font-bold mt-[50px] text-Blue'>About Us</h1>

      <p className=' w-[80%] lg:w-[40%] text-center flex mx-auto text-Blue text-sm md:text-lg'>Fenuaza premium paints are formulated by fenuaza integrated services limited which was ﬁrst registered as a business name 2018 and later incorporated as limited liability company in 2023.</p>

      <div className="flex items-center gap-[100px] p-5 flex-col md:flex-row">
        <div className="flex-1 flex justify-center">
          <img src={paint} alt="" className="h-[269px] w-[270px] lg:w-[350px] rounded-lg" />
        </div>

        <div className="flex-1 w-[300px] flex flex-col bg-White p-3 rounded-lg h-[268px] gap-[50px] justify-center shadow-sm">
          <h1 className='text-Blue text-3xl text-center font-semibold uppercase'>Our Mission</h1>

          <p className='text-Blue text-[14px]'>We manufacture paint that are eco-friendly formulated to improve health of space users using non-toxic chemicals and plant based pigments and oils, this is achieved by our highly trained team that is dedicated to giving our customer safe and long lasting paints.</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[100px] p-5 md:flex-row-reverse">
        <div className="flex-1 flex justify-center">
          <img src={pic11} alt="" className="h-[269px] w-[270px] lg:w-[350px] rounded-lg" />
        </div>

        <div className="flex-1 w-[300px] flex flex-col bg-White p-4 rounded-lg h-[268px] gap-[50px] justify-center mx-auto shadow-sm">
          <h1 className='text-Blue text-3xl text-center font-semibold uppercase'>Our Goal</h1>

          <p className='text-Blue text-[14px]'>To become the most proﬁcient and proﬁtable paint manufacturing company in Africa and beyond.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;


// #FCFDFE
// #B8C2E200