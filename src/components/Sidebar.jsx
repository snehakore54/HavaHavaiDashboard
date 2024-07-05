import React from 'react';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';

function Sidebar() {
  return (
    <aside id="sidebar">
      <div className='sidebar-title'>
        <div className='sidebar-brand' style={{fontSize:'30px', fontWeight:'bold'}}>
          hava havai
        </div>
        <span className='icon close_icon'>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href='/' onClick={(e) => e.preventDefault()}>
            <FaHome className='icon'/> Home
          </a>
        </li>
        <li className='sidebar-list-item' style={{paddingTop:'0px'}}>
          <a href='/dashboard' onClick={(e) => e.preventDefault()}>
            <BsFillGrid3X3GapFill className='icon'/> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item' style={{fontWeight:'bold', fontSize:'20px'}}>
          <span>Services</span>
        </li>
        <li className='sidebar-list-item' style={{paddingTop:'0px'}}>
          <a href='/airports' onClick={(e) => e.preventDefault()}>
            Airports
          </a>
        </li>
        <li className='sidebar-list-item' style={{paddingTop:'0px'}}>
          <a href='/videos' onClick={(e) => e.preventDefault()}>
            Videos
          </a>
        </li>
        <li className='sidebar-list-item' style={{fontWeight:'bold', fontSize:'20px'}}>
          <span>Others</span>
        </li>
        <li className='sidebar-list-item' style={{paddingTop:'0px'}}>
          <a href='/list1' onClick={(e) => e.preventDefault()}>
            List 1
          </a>
        </li>
        <li className='sidebar-list-item' style={{paddingTop:'0px'}}>
          <a href='/list2' onClick={(e) => e.preventDefault()}>
            List 2
          </a>
        </li>
        <li className='sidebar-list-item' style={{paddingTop:'0px'}}>
          <a href='/list3' onClick={(e) => e.preventDefault()}>
            List 3
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
