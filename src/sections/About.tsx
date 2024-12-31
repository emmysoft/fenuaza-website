import React from 'react'
import { paint, pic  } from '../constant/images'



const About = () => {
  return (
    <div className="w-full bg-[#fafafa] ">
    <div className='flex flex-col h-full gap-5 max-w-[1200px] w-full mx-auto'>
      <h1 className='text-center text-3xl font-bold mt-[50px] text-Blue uppercase hover:text-DPBtn'>About Fenuaza premium paints </h1>

      <p className=' w-[80%] lg:w-[50%] text-center flex mx-auto text-Blue text-sm md:text-lg hover:text-DPText'>At Fenuaza premium paintsg, we pride ourselves on delivering superior quality and personalized painting services..</p>

      <div className="flex items-center gap-[100px] p-5 flex-col md:flex-row">

        <div className="flex gap-4 lg:gap-[50px] items-center border-[1px] h-[360px]">
          <div className="w-full flex justify-center items-center flex-1 h-full">
              <img src={paint} alt="" className="h-full w-full object-cover" />
          </div>

          <div className="w-full flex-1">
            <div className="flex flex-col gap-[20px] p-4">
                <h4 className='text-3xl'>Give your home the desired beauty</h4>
                <p className='text-sm text-[#333] hover:text-DPBtn'>
                Fenuaza Premium Paint Flexcoat is high quality,
                  heavily textured, flexible masonry paint. Developed
                  using advanced Optilife silicone technology, Fenuaza
                  Premium Flexcoat paint offers outstanding
                  breathability, is highly waterproof and will protect
                  your building for up to 10years. Due to its extreme
                  flexibility, this one coat masonry paint is the perfect
                  solution for the renovation of areas that are uneven,
                  badly weathered or that have developed small cracks
                </p>

                <div className="flex gap-4 items-center">
                    <div className="flex items-center text-White bg-Blue hover:bg-DBlue hover:text-White gap-2 py-3 px-6 rounded-md shadow-sm cursor-pointer justify-start w-max">
                      <span className="text-2xl font-extrabold">Discover more</span>
                    </div>

                    <div className="flex items-center text-White bg-DPText hover:bg-DBlue hover:text-White gap-2 py-3 px-6 rounded-md shadow-sm cursor-pointer justify-start w-max">
                      <span className="text-2xl font-extrabold">Call Now!</span>
                      <img src={pic} alt="" className="h-9 w-9 rounded-full" />
                    </div>

                </div>


            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;

