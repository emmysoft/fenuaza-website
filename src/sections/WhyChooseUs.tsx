import React from 'react';

import { ceo, ceo2 } from '../constant/images';

const WhyChooseUs = () => {
  return (
    <div className='flex'>
        <div className="flex flex-col-reverse md:flex-row max-w-[1200px] w-full mx-auto p-4">
            <div className="flex flex-col items-center w-full md:w-[30%] gap-6">
                <h1 className='text-[38px] uppercase text-Blue'>Meet our CEO</h1>
                <img src={ceo} alt="" className="object-cover rounded-full h-[140px] w-[150px]" />

                <img src={ceo2} alt="" className="object-cover rounded-full h-[140px] w-[150px]" />
            </div>

            <div className="flex flex-col w-full md:w-[70%] gap-5">
                <h1 className='bg-Blue text-White text-2xl text-center p-2 rounded-md'>BRIEF PROFILE OF THE C.E.O.</h1>
                <p className='flex'>
                    Mrs Oguntoye Oluwadunni Esther is the CEO of Fenuaza Premium Paints and integrated services. She is a graduate of Federal University of Technology Akure, where she studied Architecture. She is a seasoned Entrepreneur, a writer and a Business Consultant that specializes in building small prospective markets via her diverse marketing platforms. 
                <br />
                <br />
                She is a social Entrepreneur that specializes in the production of Chemical and organic products that provides lasting solutions to environmental problems; which Fenuaza Premium Paints happen to be one of her special products, because of her interest in building finishing and her passion for beautifying the built environment. She gives an value of her brand to clients by consulting for them, she strongly believes that ‘’Knowing the type of paint to use is much more important than just painting’’. She has provided diverse soluion with her products for the last four years.
                <br />
                <br />
                She is also a skills master with about 30 skills, with these skills she has trained over 800 youths in Nigeria during the past 10 years. She is the founder of Enterprise Club in Schools in Ondo State; this she intends to replicate in other parts of Nigeria. The vision behind this is to structure the Nigerian Youth for Responsibility. She has volunteered for various organisations like BEE Enterprise, SAGE Nigeria, MOP Foundation, Throne Flow Consults amongst others in training hundreds of Nigerian youths.
                <br />
                She is married to Pastor Oluwamayowa Oguntoye, a quantity surveyor who is also part of the company’s board of directors.

                </p>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs;
