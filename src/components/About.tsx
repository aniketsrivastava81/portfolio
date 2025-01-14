"use client";
import React from 'react';
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import profiler from "../assets/profilepic.png"
const About = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] max-w py-18 mb-5 mt-5">
    <div className="text-white max-w-[1200px] max-h mx-auto justify center" id="about">
        <h1 className ="text-white text-6xl max-w[320px] mx-auto font-semibold p-4 mb-4 "> About <span className="text-orange-400"> Me </span> </h1>

        <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-item-center">
            
            


        <div className="w-full md:col-span-8 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-x-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-purple-250 to-orange-200 opacity-5 animate-pulse "> </div>     

                    <div className="flex flex-row p-6">
                        <Image src={profiler} alt="pc" className="w-auto h-[80px]" />
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl text-red-600 font-bold text-blue-450">Some Details about me:</h2>
                            <p className="text-lg text-white/70 mt-2">
                            Skilled in full-stack web development, cyber security & Blockchain Development. Equipped with expertise in HTML, CSS, JavaScript, React, Node.js, PHP, Python, MongoDB, AWS, Web3, Blockchain, WordPress, and Linux.
            </p>                        </div>
                    </div>
                </div>
            
            
            <div className="w-full md:col-span-2 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded x-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-purple-250 to-orange-200 opacity-5 animate-pulse "> </div>
                    <div className="flex flex-row p-2">
                    <Image src={book} alt="book" className="w-auto h-[80px]" />
                        <div className="flex flex-col mt-4">
                            <h2 className="text-red-500 font-bold"> Post Graduate Diploma </h2>
                            <p><b>Specialization:</b></p><p> Blockchain Development </p>
                            <p><b>Institute:</b></p> <p> George Brown College </p>
                            <p><b>At:</b></p><p> Toronto, ON </p> 
                            <p><b>Duration:</b></p><p> Jan 2023 - Jan 2024 </p>
                            <p></p>
                                    
                        </div>
                    </div>
            </div>


            <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded x-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-purple-250 to-orange-200 opacity-5 animate-pulse "> </div>     
 
                <div className="flex flex-row p-2">
                <Image src={book} alt="book" className="w-auto h-[80px]" />
                    <div className="flex flex-col mt-4">
                        <h2 className="text-red-500 font-bold"> Post Graduate Diploma </h2>
                        <p><b>Specialization:</b></p><p> Cyber security & Threat Management </p>
                        <p><b>Institute:</b></p><p> Seneca College </p>
                        <p><b>At:</b></p><p> Toronto, ON </p>
                        <p><b>Duration:</b></p><p> Sep 2020 - May 2021 </p>
                        <p></p>
                    </div>
                </div>
            </div>



            <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded x-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-purple-250 to-orange-200 opacity-5 animate-pulse "> </div>     

                <div className="flex flex-row p-2">
                <Image src={book} alt="book" className="w-auto h-[80px]" />
                    <div className="flex flex-col mt-4">
                        <h2 className="text-red-600 font-bold"> Bachelors Degree </h2>
                        <p><b>Specialization:</b></p><p> Computer Applications </p>
                        <p><b>Institute:</b></p><p> Symbiosis Institute Of Comp. Studies & Research  </p>
                        <p><b>University:</b> </p><p>Symbiosis International University </p>
                        <p><b>At:</b></p><p> Pune, India </p> 
                        <p><b>Duration:</b> </p><p>June 2012 to Oct 2015 </p>
                    </div>
                </div>
            </div>



            

            <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded x-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-purple-250 to-orange-200 opacity-5 animate-pulse "> </div>     
                <div className="flex flex-row p-6">
                <Image src={card} alt="card" className="w-auto h-[80px]" />
                    <div className="flex flex-col mt-4">
                        <h2 className=" text-2x1 text-red-600 font-bold text-blue-450 "> Experience </h2>
                        	<p className="text-1g text0white/70 mt-2">  FullStack Web-application Development - <span className="text-red-600 font-bold">Over 5 Years</span> </p> 
				<p className="text-1g text0white/70 mt-2">  Python Developer - <span className="text-red-600 font-bold">1 Year </span> </p>
				<p className="text-1g text0white/70 mt-2">  Internet of Things Integration & Prototyping - <span className="text-red-600 font-bold">Over 2 Years</span> </p>
                <p className="text-1g text0white/70 mt-2">  System/Network Administration - <span className="text-red-600 font-bold">Over 2 Years</span> </p>
				<p className="text-1g text0white/70 mt-2">  Vulnerability Analysis and Pen-testing <span className="text-red-600 font-bold">1 Year</span> </p>
				<p className="text-1g text0white/70 mt-2">  Governance Risk and Compliance - <span className="text-red-600 font-bold">Over 1 Year</span> </p>
				<p className="text-1g text0white/70 mt-2">  FullStack Web3.0 Dev | Blockchain Dev - <span className="text-red-600 font-bold">Looking to apply the skills. </span> </p>
                <p className="text-1g text0white/70 mt-2">  Digital Media Marketing & Content Strategy - <span className="text-red-600 font-bold">Over 5 Years </span> </p>

                    </div>
                </div>
            </div>

            <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-x-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-purple-250 to-orange-200 opacity-5 animate-pulse "> </div>     

                    <div className="flex flex-row p-6">
                        <Image src={pc} alt="pc" className="w-auto h-[80px]" />
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl text-red-600 font-bold text-blue-450">Technical Skills</h2>
                            <p className="text-lg text-white/70 mt-2">
                PHP, JavaScript (JS), HTML, CSS, Web3 / Blockchain, React, Next.js, Node.js, MongoDB, MySQL, Python / Pandas, Shell Scripting, WordPress, Drupal, Linux, AWS (Amazon Web Services), GCP (Google Cloud Platform), Azure
            </p>                        </div>
                    </div>
                </div>
    </div>
    </div>
    </div>
  )
}

export default About