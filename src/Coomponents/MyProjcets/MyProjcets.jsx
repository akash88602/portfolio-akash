import React from 'react';

const MyProjcets = () => {
    return (
        <div>
                {/* My Projects */}
        <div className='animate-[fadeUp_1.5s_ease-out]'>
          <div className='text-center m-6 sm:m-10  lg:m-20 space-y-3 sm:space-y-5'>
            <h1 className='text-3xl font-bold sm:text-4xl md:text-5xl'>My  <span className='text-purple-500'>Projcets</span> </h1>
            <h3 className='text-gray-300' >A selection of my recent work</h3>
          </div>



          <div className=''>
            <div className='  grid   sm:gap-8 gap-6 grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto px-4   '>
              <div className="card bg-gray-700  w-full shadow-sm rounded-xl">
                <figure className='h-48 sm:h-56 md:h-60 w-full overflow-hidden'>
                  <img
                    src="images/Project1 pic.avif"
                    alt="Shoes" className='w-full h-full object-cover' />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl">E-Commerce Platform</h2>
                  <p className='text-sm'>A full-featured online store with shopping cart, user authentication, and payment processing.</p>
                  <div className='flex gap-2 mt-3 text-center'>
                    <p className='px-3 py-1 bg-purple-500 rounded-full  text-sm'>Node.js </p>
                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>React</p>
                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>MongoDB</p>
                  </div>
                  <div className="card-actions gap-5 mt-5  flex flex-wrap  ">
                    <button  className="btn bg-purple-500 text-white px-6 sm:px-10 text-sm  ">View Demo</button>
                    <button className="btn  bg-gray-600 border-purple-500 px-10 sm:px-10 text-white ">Code</button>
                  </div>
                </div>
              </div>
              <div className="card bg-gray-700  w-full shadow-sm rounded-xl">
                <figure className='h-48 sm:h-56 md:h-60 w-full overflow-hidden'>
                  <img
                    src="images/project3.avif"
                    alt="Shoes" className='w-full h-full object-cover' />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl">Task Management </h2>
                  <p className='text-sm'>A productivity application with drag-and-drop functionality and real-time updates.</p>
                  <div className='flex gap-2 mt-3 text-center'>
                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>Next.js</p>
                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>Firebase</p>
                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>MySQl</p>
                 
                  </div>
                  <div className="card-actions gap-5 mt-5  flex flex-wrap">
                    <button className="btn bg-purple-500 text-white px-6 sm:px-10 text-sm ">View Demo</button>
                    <button className="btn  bg-gray-600 border-purple-500 px-10 sm:px-10 text-white ">Code</button>
                  </div>
                </div>
              </div>

              <div className="card bg-gray-700  w-full shadow-sm rounded-xl">
                <figure className='h-48 sm:h-56 md:h-60 w-full overflow-hidden'>
                  <img
                    src="images/project2.avif"
                    alt="Shoes" className='w-full h-full object-cover' />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl">Portfolio Website</h2>
                  <p className='text-sm'>A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.</p>
                  <div className='flex gap-2 mt-3 text-center'>

                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>React</p>

                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>Tailwind CSS</p>
                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>Daisy UL</p>
                  </div>
                  <div className="card-actions gap-5 mt-5  flex flex-wrap ">
                    <button  type="submit" className="btn bg-purple-500 text-white px-6 sm:px-10 text-sm ">View Demo</button>
                    <button className="btn  bg-gray-600 border-purple-500 px-10 sm:px-10 text-white ">Code</button>
                  </div>
                </div>
              </div>



            </div>
          </div>




        </div>
        </div>
    );
};

export default MyProjcets;