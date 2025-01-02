import React from 'react'
import ContactCard from '../components/ContactCard';
import { contactData } from '../constant/data'
import Input from '../components/Input';



const Contact = () => {
  return (
    <div className='bg-[#c8dac881] w-full h-full'>
        <div className="flex flex-col max-w-[1200px] mx-auto gap-6 p-4  lg:px-8 lg:py-10">
            <h1 className='flex mx-auto text-3xl font-bold my-[50px] text-Blue uppercase'>Contact Us</h1>

            <div className="flex flex-col justify-center items-center lg:flex-row md:justify-between gap-4">
                <div className="flex flex-col w-full lg:w-1/2 gap-3">
                    <h1 className='text-Blue text-2xl lg:text-4xl font-bold text-center'>Feel free to contact with us for any kind of query.</h1>
                    <p className='text-lg lg:text-xl text-[#8F8F8F] text-center font-[400]'>Thank you for your interest in contacting Fenuaza premium paints.  We consider communication with the customer.
                    </p>

                    <div className="flex justify-between flex-wrap gap-4 p-4">
                        {
                            contactData.map((d) => (
                                <ContactCard img={d.img} title={d.title} text={d.text} key={d.title}/>
                            ))
                        }
                    </div>
                </div>

                 <div className="flex justify-center items-center">
                    <div className="flex flex-col  gap-[25px] p-4 bg-White rounded-xl lg:py-7">
                        <Input type='text' placeholder='Your Name'/>
                        <Input type='email' placeholder='Mail Address'/>
                        <Input type='text' placeholder='Subject'/>
                        <textarea name="" id="" className='p-4 outline-[0.1px] border-[0.5px] h-[156px] bg-white w-[330px] lg:w-full' placeholder='Message'/>

                        <button type='submit' className='w-full bg-[#363f41] text-White font-semibold p-3 text-xl rounded-lg'>Submit</button>
                    </div>                
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Contact;
