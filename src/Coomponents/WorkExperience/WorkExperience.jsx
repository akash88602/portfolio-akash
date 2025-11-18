import React from 'react';

const WorkExperience = () => {
    return (
        <div>
              {/* Work Experience */}
            
                    <div className='animate-[fadeUp_1.5s_ease-out]'>
                      <div className='text-center lg:m-20 space-y-5 m-5 '>
                        <h1 className='text-3xl font-bold'>Work <span className='text-purple-500'>Experience</span> </h1>
                        <h3 className='text-gray-300' >My professional journey so far</h3>
                      </div>
            
            
            
                      <div className='  max-w-4xl  mx-auto '>
                        <div className="bg-gray-500 rounded-2xl p-6 card-hover">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-bold">Junior Developer</h3>
                            <span className="px-3 py-1 border bg-purple/20 text-white font-bold  rounded-full text-xs md:text-sm ">
                              2023 - 2024
                            </span>
                          </div>
                          <p className="text-gray-400 font-bold mb-2">StartUp Ventures</p>
                          <p className="text-gray-300 w-2/3">
                            Started my career building basic websites and gradually took on more complex
                            projects as I expanded my skill set.
                          </p>
                        </div>
            
                        <div className="bg-gray-500 rounded-2xl p-6 card-hover mt-5">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-bold">Web Developer</h3>
                            <span className="px-3 py-1 border font-bold bg-purple/20 text-white  rounded-full text-xs md:text-sm ">
                              2024 - 2025
                            </span>
                          </div>
                          <p className="text-gray-400 font-bold mb-2">Digital Solutions LLC</p>
                          <p className="text-gray-300 w-2/3">
                            Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.
                          </p>
                        </div>
            
                      </div>
            
            
            
            
                    </div>
            
        </div>
    );
};

export default WorkExperience;