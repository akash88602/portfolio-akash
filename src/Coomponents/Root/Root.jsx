import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div  className='bg-gray-800   text-gray-300'>
           <Navber></Navber>
           <div className='pt-2'>
            <Outlet></Outlet>
           </div>
            
        </div>
    );
};

export default Root;