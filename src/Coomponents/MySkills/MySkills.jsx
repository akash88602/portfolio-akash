import React from 'react';
import { FaReact } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
const MySkills = () => {
    return (
        <div>
              {/* My skill */}
        <div className='animate-[fadeUp_1.5s_ease-out]'>
          <div className='text-center lg:m-20 space-y-5 m-5 '>
            <h1 className='text-3xl font-bold'>My  <span className='text-purple-500'>Skills</span> </h1>
            <h3 className='text-gray-300' >Technologies I work with to bring ideas to life</h3>
          </div>



          <div className='  '>
            <div className='  grid   gap-2 grid-cols-1 lg:grid-cols-3  max-w-5xl mx-auto  '>
              <div className='bg-gray-600 p-3 lg:w-75  rounded-xl'>
                <h1 className='text-3xl font-bold  gap-4 flex justify-baseline'>
                  <span className='mt-2 text-6xl text-purple-500'><FaReact /></span> <span>Frontend <br /> Development</span>
                </h1>
                <p className=' '>Building responsive and interactive user interfaces with modern frameworks.</p>
                <div className='flex gap-2 mt-3'>
                  <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>React </p>
                  <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>vue.js </p>
                </div>
              </div>
              <div className='bg-gray-600 p-3 lg:w-75  rounded-xl'>
                <h1 className='text-3xl font-bold  gap-4 flex justify-baseline'>
                  <span className='mt-2 text-6xl text-purple-500'><FaDatabase /></span> <span>Database <br />Management</span>
                </h1>
                <p className=' '>Designing and optimizing databases for performance and scalability..</p>
                <div className='flex gap-2 mt-3'>
                  <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>My SQL </p>
                  <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>MongoBD </p>
                </div>
              </div>
              <div className='bg-gray-600 p-3 lg:w-75  rounded-xl'>
                <h1 className='text-3xl font-bold  gap-4 flex justify-baseline'>
                  <span className='mt-2 text-6xl text-purple-500'><RiAdminFill /></span> <span>Backend<br /> Development</span>
                </h1>
                <p className=' '>Creating robust server-side applications and RESTful APIs.</p>
                <div className='flex gap-2 mt-3'>
                  <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>Node.js </p>
                  <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>Express</p>
                </div>
              </div>

            </div>
          </div>




        </div>
        </div>
    );
};

export default MySkills;