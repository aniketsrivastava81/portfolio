"use client";
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import bcdv from "../assets/bcdv.jpg";
import windowsiis from "../assets/windows-IIS.png";
import sprints from "../assets/Sprint.jpg";
import parth from "../assets/parth.jpg";
import portfo from "../assets/portfolioimg.jpg";
import pythonlab from "../assets/pythonlab.jpg";

const projects = [

    {
        title: "Parth's Photography",
        desc: "Developed a full-stack mobile-friendly website for Parth Sayta's photography business that is SEO enhanced, scored over 90 on mobile and Desktop on Google PageSpeedInsights.",
        techstack: "LAMP Stack, Wordpress",
        link: "https://www.parthsaytaphotography.com", 
        git: "#", 
        src: parth
    },

    {
        title: "Sprint Task Manager",
        desc: "Created an internal tool for managing tasks during Sprint Development Run for the Project Management team.",
        techstack: "LAMP Stack, PHP 8.1, MariaDB 10+, Xampp, Font-Awesome, Bootstrap v5+",
        link:"http://sprintmanager.lovestoblog.com",
        git: "https://github.com/aniketsrivastava81/Sprint-Task-Manager/",
        src: sprints
    },

    {
        title: "CYT [Capstone] | Reducing the attack surface and enhancing security",
        desc:"Created additional security features on an existing website, enabling them with: Device Fingerprinting, Malware Detection, Fake User/ Real User analysis, Report Generation, Keylogging, IP Blocking",
        techstack: "AI/ML, HTML, CSS, JS, Python, PHP, MySQL, LAMP Stack, Xampp, REST-APIs, and Open source resources",
        link: "https://www.youtube.com/watch?v=wjawZb2rT08",
        git: "https://github.com/aniketsrivastava81/cyt-capstone",
        src: "https://www.youtube.com/embed/wjawZb2rT08?si=QVw7BNaioxAH4G-A"
    },

    {
        title: "Python Data Analysis Labs",
        desc: "Utilized python and its libraries in tandem to develop skills like data cleaning, visualization and analysis to create reports used for decision making",
        techstack: "NumPy, PandaDocs, Matplotlib, Python 3.0+, Anaconda (Jupyter) ***** NOTE ***** link below takes you to the GitHub html page with most chart samples reusable for API calls",
        link: "https://github.com/aniketsrivastava81/python_PandaDocs/blob/main/09%20-%20Visualization%20For%20APIs%20-%20Sales%20and%20Customer%20Insights.ipynb ",
        git: "https://github.com/aniketsrivastava81/python_PandaDocs ",
        src: pythonlab
    },

    {
        title: "Windows IIS Labs",
        desc: "Performed the following operations to practice Server Administration, Windows IIS and Active Directories: ntlm network, NTP Configuration, update settings, roles and features dhcp + backup, ptr + ipv6 disable, Firewall settings, firewall 2 rdp settings, Service Configuration, Further Hardening, logging and monitoring file setup location, group policies, backup.",
        techstack: "windows server Administration, Server hardening, Network Administration, Security enhancements, Firewall and Backups, etc.",
        link: "https://www.youtube.com/watch?v=qDCCAX-Xm9c&list=PL59Cd0AOncDfuPLvIHyFroatNPUnHhyWt",
        git: "https://github.com/aniketsrivastava81/Windows-IIS-Labs",
        src: windowsiis
    },

    {
        title: "Blockchain Development [Capstone]",
        desc:" Wildlife Conservation - Designed a system that comes together with the integration of Blockchain, SBC computing, IoT Sensors aimed at saving wildlife under threat of extinction in a controlled environment",
        techstack: "Hyperledger Fabric, Solidity, RaspberryPi, IoT Sensors, etc.",
        link: "https://github.com/aniketsrivastava81/faunaRescueBlockchain/tree/main",
        git: "https://github.com/aniketsrivastava81/faunaRescueBlockchain/tree/main",
        src: bcdv
    },

    {
        title: "Tekin-OS",
        desc:"Made my own version of a Debian OS like Parrot/KALI used for Pen-testing, Network Admin, System Admin ",
        techstack: "VirtualBox, Terminal, Virtualization",
        link: "https://www.youtube.com/embed/Xm34KAhARLs?si=dIODq9E2KOAR2BS4",
        git: "#",
        src: "https://www.youtube.com/embed/Xm34KAhARLs?si=dIODq9E2KOAR2BS4"
    },

    {
        title: "Portfolio",
        desc:"Current Portfolio Made Using",
        techstack: " React, Next.js, HTML, CSS, JS, Framer-Motion, FormSubmit, Vercel, Github ",
        link: "#portfolio",
        git: "https://portfolio-next-git-nav-test-base-aniketsrivastava81s-projects.vercel.app/",
        src: portfo
    }

]

const Portfolio = () => {
    return (
        <div className="text-white bg-gradient-to-b from-black to-[#381a5f] mb-5" id="portfolio">
               
            <h1 className="text-white text-6xl mx-auto font-semibold my-12 text-center">
                Selected <span className="text-orange-400"> Projects </span>
            </h1>
 
            <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"} py-2`}
                    >
                        <div className="space-y-2 max-w-[550px] py-2">
                            <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                            <h2 className="text-4xl">{project.title}</h2>
                            <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                            <p className="text-xl text-orange-400 semi-bold">{project.techstack}</p>
                            <div className="w-64 h-[1px] bg-gray-400 my-4">
                                {/* Render 'link' always */}
                                <a href={project.link} className="mr-6">link</a>
                                
                                {/* Render 'github' only if project title is neither 'Tekin-OS' nor 'Parthsaytaphotography.com' */}
                                {project.title !== "Tekin-OS" && project.title !== "Parthsaytaphotography.com" && (
                                    <a href={project.git} className="mr-6">github</a>
                                )}
                            </div>    
                        </div>

                        <div className="flex justify-center items-center py-2">
                            {typeof project.src === 'string' ? (
                                <iframe
                                    width="560"
                                    height="315"
                                    src={project.src}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <Image src={project.src} alt={project.title} className="object-cover border rounded border-gray-700" />
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;




/*  
const Portfolio = () => {
    return (
        <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18" id="portfolio">
                
            <h1 className ="text-white text-6xl mx-auto font-semibold my-12 text-center"> 
                Selected <span className="text-orange-400"> Projects </span> 
            </h1>
  
            <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
                {projects.map((project,index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity:0 , y:75 }}
                        whileInView={{ opacity:1 , y:0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
                    >
                        <div className="space-y-2 max-w[550px]">
                            <h2 className="text-7x1 my-4 text-white/70">{`0${index +1}`}</h2>
                            <h2 className= "text-4x1" >{project.title}</h2>
                            <p className= "text-lg text-white/70 break-words p-4">{project.desc}</p>
                            <p className = "text-xl text-orange-400 semi-bold">{project.techstack}</p>
                            <div className="w-64 h-[1px] bg-gray-400 my-4">
                                <a href={project.link} className="mr-6 scroll-smooth"> link </a>
                                <a href={project.git} className="mr-6 scroll-smooth"> github </a>
                            </div>    

                        </div>

                        <div className="flex justify-center items-center">
                            {typeof project.src === 'string' ? (
                                // Check if src is a string (for YouTube URL)
                                <iframe
                                    width="560"
                                    height="315"
                                    src={project.src}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <Image src={project.src} alt={project.title} className="object-cover border rounded border-gray-700" />
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
*/