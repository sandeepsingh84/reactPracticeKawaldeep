import React from 'react'
import { NavLink } from 'react-router-dom';

const HeaderPage = () => {
  return (
    <div className='flex justify-center bg-gray-100 py-4  w-full '>
        <ul className='flex justift-center gap-10 w-1/4'>
        <NavLink
        
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : "text-blue-500"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : "text-blue-500"
            }
            to="/ContactPage"
          >
            ContactPage
          </NavLink>
          <NavLink
    
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : "text-blue-500"
            }
            to="/AboutPage"
          >
            AboutPage
          </NavLink>
        </ul>
    </div>
  );
};

export default HeaderPage;