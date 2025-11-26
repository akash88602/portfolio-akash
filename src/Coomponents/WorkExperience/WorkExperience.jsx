import React from 'react';

const WorkExperience = () => {
  return (
    <div>
      {/* Work Experience */}

      <div className='animate-[fadeUp_1.5s_ease-out]'>
        <div className='text-center lg:m-20 space-y-5 m-5 sm:m-10 '>
          <h1 className='text-3xl font-bold sm:text-4xl md:text-5xl'>Work <span className='text-purple-500'>Experience</span> </h1>
          <h3 className='text-gray-300' >My professional journey so far</h3>
        </div>



        <div className='  max-w-4xl  mx-auto p-4 sm:px-6  '>
          <div className="bg-gray-500 rounded-2xl sm:p-6 card-hover p-4">
            <div className="flex flex-col sm:flex-row sm:items-start  sm:justify-between gap-2 mb-2">
              <h3 className="text-lg sm:text-2xl font-bold">Junior Developer</h3>
              <span className="px-3 py-1 border bg-purple/20 text-white font-bold  rounded-full text-xs md:text-sm self-start ">
                2023 - 2024
              </span>
            </div>
            <p className="text-gray-400 font-bold text-sm mb-2">StartUp Ventures</p>
            <p className="text-gray-300 text-sm w-2/3">
              Started my career building basic websites and gradually took on more complex
              projects as I expanded my skill set.
            </p>
          </div>

          <div className="bg-gray-500 rounded-2xl sm:p-6 card-hover p-4 mt-4">
            <div className="flex flex-col sm:flex-row sm:items-start  sm:justify-between gap-2 mb-2">
              <h3 className="text-lg sm:text-2xl font-bold">Web Developer</h3>
              <span className="px-3 py-1 border bg-purple/20 text-white font-bold  rounded-full text-xs md:text-sm self-start ">
                2023 - 2024
              </span>
            </div>
            <p className="text-gray-400 font-bold text-sm mb-2">Digital Solutions LLC</p>
            <p className="text-gray-300 text-sm w-2/3">
              Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.
            </p>
          </div>

        </div>




      </div>

    </div>
  );
};

export default WorkExperience;