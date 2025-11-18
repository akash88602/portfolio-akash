import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div  className='bg-gray-900   text-gray-300'>
           <Navber></Navber>
           <div className='-mt-4 pt-5'>
            <Outlet></Outlet>
           </div>
            
        </div>
    );
};

export default Root;