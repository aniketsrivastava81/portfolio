import React from 'react';
import { FaMicrochip, FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaPhp, FaNodeJs, FaPython, FaDatabase, FaWordpress, FaDrupal, FaLinux, FaAws, FaGoogle, FaMicrosoft, FaBitcoin } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiPandas, SiMysql } from 'react-icons/si';

const skillIcons = [
    { icon: <FaHtml5 size={35} />, label: "HTML" },
    { icon: <FaCss3Alt size={35} />, label: "CSS" },
    { icon: <FaReact size={35} />, label: "React" },
    { icon: <FaJsSquare size={35} />, label: "JavaScript" },
    { icon: <FaPhp size={35} />, label: "PHP" },
    { icon: <FaNodeJs size={35} />, label: "Node.js" },
    { icon: <FaPython size={35} />, label: "Python" },
    { icon: <SiPandas size={35} />, label: "Pandas" },
    { icon: <SiMongodb size={35} />, label: "MongoDB" },
    { icon: <SiMysql size={35} />, label: "MySQL" },
    { icon: <SiNextdotjs size={35} />, label: "Next.js" },
    { icon: <FaBitcoin size={35} />, label: "Blockchain" },     
    { icon: <FaDatabase size={35} />, label: "Database" },
    { icon: <FaWordpress size={35} />, label: "WordPress" },
    { icon: <FaDrupal size={35} />, label: "Drupal" },
    { icon: <FaLinux size={35} />, label: "Linux" },
    { icon: <FaAws size={35} />, label: "AWS" },
    { icon: <FaGoogle size={35} />, label: "GCP" },
    { icon: <FaMicrosoft size={35} />, label: "Azure" },
    { icon: <FaMicrochip size={35} />, label: "Raspberry Pi" }
];

const Skills = () => {
    return (
      <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32 mb-5 mt-5' id="skills">
          <div className='text-white w-full max-w-[400px] sm:max-w-[600px] md:max-w-[950px] mx-auto p-4 sm:p-6 text-center'>
              <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4'>What I am Familiar with</h2>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 justify-items-center mx-auto'>
                  {skillIcons.map((skill, index) => (
                      <div
                      key={index}
                      className='h-[60px] w-[60px] flex flex-col justify-between items-center bg-white/10 py-2 rounded-x1'>
                          <div className="flex justify-center items-center">
                              {/* Add responsive sizes to the icon */}
                              <div className="text-[40px] md:text-[140px]">
                                  {skill.icon}
                              </div>
                          </div>
                          <p className='mt-2 text-xs sm:text-sm md:text-base'>{skill.label}</p>
                      </div>
                  ))}
              </div>       
          </div>
      </div>
    );
};

export default Skills;
