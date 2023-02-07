import React from 'react';
import "./style.css";

const StylingNavbar = () => {
  return (
    <div className='navigation'>
        <ul>
            <li className='list active'>
                <a href="">
                    <span className='icon '><i class="fa-solid fa-house-chimney"></i></span>
                    <span className='text'>Home</span>
                </a>
            </li>
            <li className='list'>
                <a href="">
                    <span className='icon'><i class="fa-solid fa-user"></i></span>
                    <span className='text'>Profile</span>
                </a>
            </li>
            <li className='list'>
                <a href="">
                    <span className='icon'><i class="fa-solid fa-comment"></i></span>
                    <span className='text'>Message</span>
                </a>
            </li>
            <li className='list'>
                <a href="">
                    <span className='icon'><i class="fa-solid fa-image"></i></span>
                    <span className='text'>Photos</span>
                </a>
            </li>
            <li className='list'>
                <a href="">
                    <span className='icon'><i class="fa-solid fa-gear"></i></span>
                    <span className='text'>Setting</span>
                </a>
            </li>
            <div className='indicator'></div>
        </ul>
    </div>
  )
}

export default StylingNavbar;