"use client";
import React from 'react';
import Image from "next/image";
import profilepic from "../assets/profilepic.png";
import lightning from "../assets/icon2.png";
import cursor from "../assets/icon1.png";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
        <div className="py-24 relative overflow-clip bg-[radial-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]"> 
            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"> </div>
                <div className="relative">   
                    <div className="text-6xl font-bold text-center">
                            <h1 className="text-[#98B4CE]"> Hello World, My name is </h1>
                            <h1 className="text-[#E48A57]"> Aniket A Srivastava</h1>
                    </div>

                        
                    <motion.div
                        className="hidden md:block absolute left-[180px] top-[270px]"
                        drag
                    >
                        <Image
                        src={cursor}
                        height="190"
                        width="190"
                        alt="cursor"
                        className=""
                        draggable="false"
                        />
                    </motion.div>
            
                    <motion.div
                        className="hidden md:block absolute left-[120px] top-[20px]"
                        drag
                    >
                        <Image
                        src={lightning}
                        height="120"
                        width="120"
                        alt="cursor"
                        className=""
                        draggable="false"
                        />
                    </motion.div>
            
                    <p className="text-center text-x1 max-w-[500px] mx-auto mt-8 text/80">
                    Full Stack Developer, Smart-Contract Developer, also trained in Cyber-Security. 
                    </p>
                        <Image
                        src={profilepic}
                        alt="profile picture"
                        className="h-auto w-auto mx-auto"        
                        />    
                </div> 


            



        </div>
        )
}

export default Hero



 


