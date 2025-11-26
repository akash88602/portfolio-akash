import React from 'react';
import { IoFlameSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { MdBorderColor } from "react-icons/md";
const AboutUs = () => {
    return (
        <div>
            
                    {/* About */}
                    <div className='animate-[fadeUp_1.5s_ease-out] bg-gray-800 text-white  px-5 '>
                      <div className='text-center lg:m-20 space-y-3 m-5 '>
                        <h1 className='text-3xl font-bold sm:text-4xl md:text-5xl'>About <span className='text-purple-500'>Me</span> </h1>
                        <h3 className='text-gray-300' >Get to know more about my background and passion</h3>
                      </div>
            
                      <div className='flex flex-col lg:flex-row gap-12 lg:ps-16   max-w-5xl mx-auto '>
                        <div className=' flex justify-center lg:w-1/2'>
                          <img src="/images/WhatsApp Image 2025-10-18 at 03.21.46.jpeg" alt="" className=' w-2/3 lg:h-full  lg:w-full rounded-2xl sm:w-1/2' />
                        </div>
                        <div className='space-y-10 lg:w-1/2 '>
                          <h1 className='text-3xl font-semibold'>My Journey </h1>
                          <h3 className=' max-w-xl'>I'm a passionate frondent developer with over 1 years of experience creating digital solutions for businesses around the world. My journey started with basic HTML/CSS websites and has evolved into building complex web applications with modern frameworks.</h3>
                          <h3 className='max-w-xl'>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and tutorials. I believe in continuous learning and pushing the boundaries of what's possible on the web.</h3>
                          <div className='  grid  lg:w-150 gap-5 grid-cols-1 lg:grid-cols-2   '>
                            <div className='bg-gray-600 p-5 rounded-xl'>
                              <p className='text-3xl text-purple-500'><IoFlameSharp /></p>
                              <h4 className='text-3xl'>Innovative</h4>
                              <p>I love creating unique solutions to complex problems with cutting-edge technologies.</p>
                            </div>
                            <div className='bg-gray-600 p-5 rounded-xl'>
                              <p className='text-3xl text-purple-500'><MdBorderColor /></p>
                              <h4 className='text-3xl'>Design Oriented</h4>
                              <p>Beautiful design and user experience are at the heart of everything I create.</p>
                            </div>
                            <div className='bg-gray-600 p-5 rounded-xl'>
                              <p className='text-3xl text-purple-500'><FaCode /></p>
                              <h4 className='text-3xl'>Clean Code</h4>
                              <p>I write maintainable, efficient code following best practices and modern patterns.</p>
                            </div>
                          </div>
                        </div>
            
            
                      </div>
            
                    </div>
        </div>
    );
};

export default AboutUs;