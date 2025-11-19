import React from 'react';
import TextAnimation from '../TextAnimation/TextAnimation';

const Headers = () => {
    return (
        <div>
                    {/* img */}
                    <div className='bg-gray-800 text-white'>
                      <div className="hero min-h-96 lg:p-20  space-y-5 ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                          <img
                            src="/images/WhatsApp Image 2025-10-18 at 03.21.46.jpeg"
                            className=" rounded-full  w-36 sm:w-48 md:64 lg:w-64 xl:w-64 h-auto mx-auto animate-[float_3s_ease-in-out_infinite]  "
                          />
                          <div>
                            <h1 className="text-5xl font-bold">Hi, I'm <span className='text-purple-500'>Akash Hossain </span></h1>
                            <h2 className="text-3xl font-bold py-2">
                             <TextAnimation></TextAnimation>
                            </h2>
                            <p className="py-5 max-w-3/4 text-gray-300">
                              I am a frontend developer with over 1 years of experience in building scalable web applications. Skilled in  front- development, I specialize in the frontend and other modern technologies to create seamless user experiences and efficient solutions.
                            </p>
                            <button className="btn bg-purple-500 text-white">
                                <a href="images/Copy of project (2) (1).pdf">CV Download</a>
                            </button>
                          </div>
                        </div>
                      </div>
            
                    </div>
        </div>
    );
};

export default Headers;