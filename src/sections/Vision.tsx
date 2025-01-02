import React from 'react'

const Vision = () => {
  return (
    <div className='w-full h-full p-4 my-[150px] '>
        <div className="flex flex-col md:flex-row items-center justify-center max-w-[1200px] mx-auto w-full">
           <div className="flex-1 w-full md:w-[35%] md:flex flex-col relative hidden">
                <h4 className='text-[60px] text-[#c7c7c7] opacity-[0.3]'>Fenuaza Integrated services</h4>
                <p className='text-[40px] lg:text-[85px] uppercase text-[#A76AFF] bottom-7 absolute hover:text-[#fd4299]'>About</p>
                <p className='text-[40px] lg:text-[85px] uppercase text-[#A76AFF] -bottom-10 absolute left-20 right-0 translate-x-0 hover:text-[#fd4299]'>Us</p>
           </div>

           <div className="flex-2 flex flex-col gap-4 lg:gap-9 justify-center items-center w-full lg:w-[65%]">
                <div className="p-4 bg-[#FBDBAE40] flex flex-col rounded-xl w-full lg:w-[700px] gap-5" >
                    <h2 className='text-[#F3A830] text-[26px] font-semibold'>OUR VISION</h2>
                    <p className='text-center text-[#414141] text-lg'>To be the most proficient and profitable paint manufacturing company in
                    Africa and beyond</p>
                </div>

                <div className="p-4 bg-[#F4F4F4] flex flex-col rounded-xl w-full lg:w-[700px] gap-5">
                <h2 className='text-[#C7C7C7] text-[26px] font-semibold'> OUR MISSION</h2>
                    <p className='text-center text-[#414141] text-lg'>To manufacture paints and allied products that are carefully formulated to meet international standard, using the best available technology for corporate end- user and high-end consumers, employing a team of highly experienced dedicated and customer oriented warfare through process excellence. And solving major environmental problems with our paint products. The company would become most efficient and profitable thus ensuring outstanding returns on Investments for shareholders.</p>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Vision;

