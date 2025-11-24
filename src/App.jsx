import { IoFlameSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { MdBorderColor } from "react-icons/md";
import { FaReact } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import TextAnimation from './Coomponents/TextAnimation/TextAnimation'



function App() {
  const Link1 = <>
    <li className='font-medium '>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li className='font-medium '>
      <NavLink to='/About'>About</NavLink>
    </li>
    <li className='font-medium '>
      <NavLink to='/skills'>Skills</NavLink>
    </li>
    <li className='font-medium '>
      <NavLink to='/project'>projcet</NavLink>
    </li>
    <li className='font-medium '>
      <NavLink to='/experience'>Experience</NavLink>
    </li>
    <li className='font-medium '>
      <NavLink to='/contact'>Contact</NavLink>
    </li>

  </>

  return (
    <>
      <div>
        {/* navber */}
        <div>
          <div className="navbar bg-gray-900  shadow-sm justify-between fixed z-40  top-0 ">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  {Link1}
                </ul>
              </div>
              <div className="flex-1 ps-7">
                <a className="  text-3xl font-bold"> Akash <span className='text-purple-500'>Hossain</span> </a>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                  {Link1}

                </ul>
              </div>
            </div>

          </div>

        </div>

        {/* img */}
        <div className='bg-gray-800 text-white'>
          <div className="hero min-h-96 lg:p-20  space-y-5 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="/images/WhatsApp Image 2025-10-18 at 03.21.46.jpeg"
                className="max-w-sm rounded-full  w-1/2 shadow-2xl animate-[float_3s_ease-in-out_infinite] h-75"
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
        {/* About */}
        <div className='animate-[fadeUp_1.5s_ease-out]'>
          <div className='text-center lg:m-20 space-y-5 m-5 '>
            <h1 className='text-3xl font-bold'>About <span className='text-purple-500'>Me</span> </h1>
            <h3 className='text-gray-300' >Get to know more about my background and passion</h3>
          </div>

          <div className='flex flex-col lg:flex-row gap-10 ps-5   max-w-5xl mx-auto '>
            <div>
              <img src="/images/WhatsApp Image 2025-10-18 at 03.21.46.jpeg" alt="" className=' w-2/3 lg:h-full  lg:w-full rounded-2xl' />
            </div>
            <div className='space-y-10  '>
              <h1 className='text-3xl'>My Journey </h1>
              <h3 className=' w-2/3'>I'm a passionate frondent developer with over 1 years of experience creating digital solutions for businesses around the world. My journey started with basic HTML/CSS websites and has evolved into building complex web applications with modern frameworks.</h3>
              <h3 className='w-2/3'>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and tutorials. I believe in continuous learning and pushing the boundaries of what's possible on the web.</h3>
              <div className='  grid  lg:w-150 gap-5 grid-cols-1 lg:grid-cols-2 w-67 '>
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

        {/* My Projects */}
        <div className='animate-[fadeUp_1.5s_ease-out]'>
          <div className='text-center lg:m-20 space-y-5 m-5 '>
            <h1 className='text-3xl font-bold'>My  <span className='text-purple-500'>Projcets</span> </h1>
            <h3 className='text-gray-300' >A selection of my recent work</h3>
          </div>



          <div className=''>
            <div className='  grid   gap-10 grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto   '>
              <div className="card bg-gray-600  w-96 shadow-sm">
                <figure className='h-60 w-full overflow-hidden'>
                  <img
                    src="images/Project1 pic.avif"
                    alt="Shoes" className='w-full h-full object-cover' />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">E-Commerce Platform</h2>
                  <p>A full-featured online store with shopping cart, user authentication, and payment processing.</p>
                  <div className='flex gap-2 mt-3 text-center'>
                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>Node.js </p>
                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>React</p>
                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>MongoDB</p>
                  </div>
                  <div className="card-actions gap-5 mt-5 ">
                    <button className="btn bg-purple-500 text-white px-10">View Demo</button>
                    <button className="btn px-15 bg-gray-600 border-purple-500 text-white ">Code</button>
                  </div>
                </div>
              </div>
              <div className="card bg-gray-600  w-96 shadow-sm">
                <figure className='h-60 w-full overflow-hidden'>
                  <img
                    src="images/project3.avif"
                    alt="Shoes" className='w-full h-full object-cover' />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Task Management </h2>
                  <p>A productivity application with drag-and-drop functionality and real-time updates.</p>
                  <div className='flex gap-2 mt-3 text-center'>
                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>Next.js</p>
                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>Firebase</p>
                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>MySQl</p>
                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>Tailwind CSS</p>
                  </div>
                  <div className="card-actions gap-5 mt-5 ">
                    <button className="btn bg-purple-500 text-white px-10">View Demo</button>
                    <button className="btn px-15 bg-gray-600 border-purple-500 text-white ">Code</button>
                  </div>
                </div>
              </div>

              <div className="card bg-gray-600  w-96 shadow-sm">
                <figure className='h-60 w-full overflow-hidden'>
                  <img
                    src="images/project2.avif"
                    alt="Shoes" className='w-full h-full object-cover' />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Portfolio Website</h2>
                  <p>A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.</p>
                  <div className='flex gap-2 mt-3 text-center'>

                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>React</p>

                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>Tailwind CSS</p>
                    <p className='px-3 py-1 bg-purple-500 rounded-full text-sm'>Daisy UL</p>
                  </div>
                  <div className="card-actions gap-5 mt-5 ">
                    <button type="submit" className="btn bg-purple-500 text-white px-10">View Demo</button>
                    <button className="btn px-15 bg-gray-600 border-purple-500 text-white ">Code</button>
                  </div>
                </div>
              </div>



            </div>
          </div>




        </div>

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

        {/* Get IN Contact */}
        <div className='animate-[fadeUp_1.5s_ease-out]'>
          <div className='text-center lg:m-20 space-y-5 m-5 '>
            <h1 className='text-3xl font-bold'>Get In  <span className='text-purple-500'>Contact</span> </h1>
            <h3 className='text-gray-300' >Have a project in mind or want to collaborate? Let's talk!</h3>
          </div>



          <div className='  max-w-5xl  mx-auto lg:flex grid grid-cols-1 lg:grid-cols-2 gap-5 lg:ps-50 '>
            <div className=''>
              <form className="submit   rounded-box w-xs space-y-5  p-4">


                <label className="label font-bold text-2xl text-white">Name</label>
                <input type="text" className="input bg-gray-500 font-semibold  " placeholder="Your Name" />

                <label className="label font-bold text-2xl text-white">Email Address</label>
                <input type="text" className="input bg-gray-500 font-semibold " placeholder="your email address" />

                <label className="label font-bold text-2xl text-white">Your Message</label>

                <textarea name="" id="" className="w-full h-32 text-white rounded-lg outline-none  bg-gray-500 font-semibold " placeholder="write your message"></textarea>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 bg-purple-500 transition-colors"
                >
                  Send Message
                </button>

              </form>

            </div>

            <div className="p-6 card-hover ">
              <div className="flex gap-5  ">
                <h3 className="text-2xl font-bold pt-2 "><ImLocation2 /></h3>
                <span className="  font-bold text-2xl ">
                  Location
                </span>
              </div>
              <p className="text-gray-400 font-sans ms-10">Joypurhat Sodor, Rajshahi</p>
              <div className="flex gap-5 mt-10 ">
                <h3 className="text-2xl font-bold pt-2 "><MdEmail /></h3>
                <span className="  font-bold text-2xl ">
                  Email
                </span>
              </div>
              <p className="text-gray-400 font-sans ms-10">mdakashhossin88601@gmail.com</p>
              <div className="flex gap-5 mt-10">
                <h3 className="text-2xl font-bold pt-2 "><FaPhone /></h3>
                <span className="  font-bold text-2xl ">
                  Phone
                </span>
              </div>
              <p className="text-gray-400 font-sans ms-10">01756303112 , 01585532868</p>



              <div className="flex gap-5 mt-10">
                <h3 className="text-2xl font-bold pt-2 ">Follow Me</h3>

              </div>
              <div className="mt-5 ">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-accent-purple hover:bg-purple hover:text-white transition-colors"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 496 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-accent-blue hover:bg-blue hover:text-white transition-colors"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z" />
                    </svg>
                  </a>
                </div>


              </div>






            </div>

          </div>




        </div>


  <footer className="footer sm:footer-horizontal footer-center bg-gray-500 text-base-content p-5">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
          </aside>
        </footer>





      </div>


    </>
  )
}

export default App
