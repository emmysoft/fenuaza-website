import React, { useRef } from 'react'
import ContactCard from '../components/ContactCard';
import { contactData } from '../constant/data'
import Input from '../components/Input';
import emailjs from '@emailjs/browser';



const Contact = () => {

    const form: any = useRef();

    const sendEmail = async (e: any) => {
        e.preventDefault();

        try {
            const res = await  emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
              publicKey: 'YOUR_PUBLIC_KEY',
            })
            return res
        } catch (error) {
            throw new Error()
        }
    
        // emailjs
        //   .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        //     publicKey: 'YOUR_PUBLIC_KEY',
        //   })
        //   .then(
        //     () => {
        //       console.log('SUCCESS!');
        //     },
        //     (error) => {
        //       console.log('FAILED...', error.text);
        //     },
        //   );
      };



  return (
    <div className='bg-[#c8dac881] w-full h-full' id='contact'>
        <div className="flex flex-col max-w-[1200px] mx-auto gap-6 p-4  lg:px-8 lg:py-10">
            <h1 className='flex mx-auto text-3xl my-[50px] text-Blue font-[400]'>Contact us</h1>

            <div className="flex flex-col justify-center items-center lg:flex-row md:justify-between gap-4">
                <div className="flex flex-col w-full lg:w-1/2 gap-3">
                    <h1 className='text-Blue text-lg lg:text-3xl font-[500] text-center'>Feel free to contact us for any of our premium paint service.</h1>
                    <p className='text-sm lg:text-xl text-[#8F8F8F] text-center font-[300]'>Thank you for your interest in contacting Fenuaza premium paints.  We consider communication with the customer.
                    </p>

                    <div className="flex flex-col gap-4 p-4">
                        {
                            contactData.map((d) => (
                                <ContactCard img={d.img} title={d.title} text={d.text} key={d.title}/>
                            ))
                        }
                    </div>
                </div>

                 <form ref={form} onSubmit={sendEmail} className="flex justify-center items-center">
                    <div className="flex flex-col  gap-[25px] p-4 bg-White rounded-xl lg:py-7">
                        <Input type='text' placeholder='Your Name'/>
                        <Input type='email' placeholder='Mail Address'/>
                        <Input type='text' placeholder='Subject'/>
                        <textarea name="" id="" className='p-4 outline-[0.1px] border-[0.5px] h-[156px] bg-white w-[330px] lg:w-full' placeholder='Message'/>

                        <button type='submit' className='w-full bg-[#363f41] text-White font-semibold p-3 text-xl rounded-lg'>Submit</button>
                    </div>                
                </form> 
            </div>
        </div>
    </div>
  )
}

export default Contact;
