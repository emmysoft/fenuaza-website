import React from 'react'
import ContactCard from '../components/ContactCard';
import { contactData } from '../constant/data'



const Contact = () => {
  return (
    <div className='bg-[#fafafa] w-full min-h-[100vh]'>
        <div className="flex flex-col max-w-[1200px] mx-auto gap-6">
            <h1 className='flex mx-auto text-3xl font-bold my-[50px] text-Blue'>Contact Us</h1>

            <div className="flex flex-col justify-center items-center lg:flex-row md:justify-between gap-4">
                <div className="flex flex-col w-full lg:w-1/2 gap-3">
                    <h1 className='text-[#000] text-2xl lg:text-5xl font-bold text-center'>Feel free to contact with us for any kind of query.</h1>
                    <p className='text-lg lg:text-xl text-[#8F8F8F] text-center font-[400]'>Thank you for your interest in hiring Shalom Cleaning Service Company. We consider communication with the customer.
                    </p>

                    <div className="flex justify-between flex-wrap gap-4 p-4">
                        {
                            contactData.map((d) => (
                                <ContactCard img={d.img} title={d.title} text={d.text} key={d.title}/>
                            ))
                        }
                    </div>
                </div>


                <div className="flex flex-col gap-[25px]">
                    <div className="flex flex-col lg:flex-row gap-[16px] items-center">
                        <input type="email" className="w-[330px] lg:w-[250px] outline-none h-[48px] bg-White p-4 placeholder:font-[500]" placeholder='Mail Address'/>
                        <input type="tel" className="w-[330px] lg:w-[250px] outline-none h-[48px] bg-White p-4 placeholder:font-[500]" placeholder='Phone No.'/>
                    </div>

                    <textarea name="" id="" className='p-4 outline-none h-[156px] bg-white w-[330px] lg:w-full' placeholder='Message'/>

                    <button type='submit' className='w-full bg-[#000080] text-White font-semibold p-4 text-xl'>Send a message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;
