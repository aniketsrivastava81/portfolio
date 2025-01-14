import React from 'react';
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";


const Contact = () => {
  return (
      <div className='max-w mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8 bg-gradient-to-b from-black to-[#381a5f] py-18' id='contact'>
         <div className='flex flex-col lg:flex-row items-center justify-center mx-auto space-y-8 lg:space-y-0'>
           <ul>
                    <li>
                            <Image src={phone} alt="phone" className='h-[110px] w-auto mr-6' />
                            <p> +1 647 975 5897</p>

                    </li>

                    <li>
                            <Image src={mail} alt="mail" className='h-[110px] w-auto mr-6' />
                            <p> developer_teki09@protonmail.com</p>

                    </li>

            </ul>

            <div className='bg-white/10 p-8 rounded-xl max-w[650px] '>
              <h2 className="text-5xl font-bold text-orange-400 mb-4"> Get in touch!</h2>
              <p className="text-white/70 mb-6"> Send me a message to schedule a call! </p>
                {/* FormSubmit Action URL added here */}
                <form action="https://formsubmit.co/developer_teki09@protonmail.com" method="POST" className='space-y-4'>
                  <div className='grid md:grid-cols-2 gap-4'>
                      <input className='bg-black/70 rounded-x1 p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='First Name' name="firstName" />
                      <input className='bg-black/70 rounded-x1 p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Last Name' name="lastName" />
                      <input className='bg-black/70 rounded-x1 p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Email' name="email" />
                      <input className='bg-black/70 rounded-x1 p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Phone' name="phone" />
                  </div>
                      <textarea className='bg-black/70 rounded-x1 p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Your Message Please' name="message" />
                      <button className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-x1 rounded-x1'> Send Message </button>
                </form>

            </div>

        </div>

    </div>
  )
}

export default Contact
