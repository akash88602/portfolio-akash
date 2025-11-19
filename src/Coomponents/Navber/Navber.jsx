import React from 'react';
import { NavLink } from 'react-router';
import Contact from './../Contact/Contact';

const Navber = () => {
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
        <div>
                <div className="navbar bg-gray-800  text-white  shadow-sm justify-between fixed z-40  top-0 ">
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
              <ul  className="menu menu-horizontal px-1">
              {Link1}

              </ul>
            </div>
          </div>

        </div>

        </div>
    );
};

export default Navber;