import React from 'react';
import { FaLinkedin, FaGithubAlt, FaMedium, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    
<div className='px-6 md:px-0 mt-3 text-white/70 py-6 max-w mx-auto border-t border-gray-700 pt-4 flex justify-between items-center bg-gradient-to-b from-black to-[#381a5f]'>    

    <div className="max-w-[1000px] w-full flex justify-center" >
    
    
        <div className='flex space-x-6 mt-4'>

            <h1 className='text-2xl font-bold'> Aniket A Srivastava </h1>

            <a href='https://ca.linkedin.com/in/aniket-srivastava81' className='hover:text-gray-300'>
                <FaLinkedin size={24} />
            </a>

            <a href='https://medium.com/@aniketsrivastava81/' className='hover:text-gray-300'>
                <FaMedium size={24} />
            </a>

            <a href='https://github.com/aniketsrivastava81/' className='hover:text-gray-300'>
                <FaGithubAlt size={24} />
            </a>

            <a href='https://www.youtube.com/@Teki-09' className='hover:text-gray-300'>
                <FaYoutube size={24} />
            </a>


        </div>
        </div>
    </div>
    
  )
}

export default Footer