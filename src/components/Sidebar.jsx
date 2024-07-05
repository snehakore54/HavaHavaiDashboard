// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
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
            <a href=''>
                <FaHome className='icon'/> Home
            </a>
        </li>
        <li className='sidebar-list-item' style={{paddingTop:'0px'}}>
            <a href=''>
                <BsFillGrid3X3GapFill className='icon'/> Dashboard
            </a>
        </li>
        <li className='sidebar-list-item' style={{fontWeight:'bold', fontSize:'20px'}}>
            <a href=''>
                Services
            </a>
        </li>
        <li className='sidebar-list-item' style={{paddingTop:'0px'}}>
            <a href=''>
                Airports
            </a>
        </li>
        <li className='sidebar-list-item' style={{paddingTop:'0px'}}>
            <a href=''>
                Videos
            </a>
        </li>
        <li className='sidebar-list-item' style={{fontWeight:'bold', fontSize:'20px'}}>
            <a href=''>
            Others
            </a>
        </li>
        <li className='sidebar-list-item' style={{paddingTop:'0px'}}>
            <a href=''>
                List 1
            </a>
        </li>
        <li className='sidebar-list-item' style={{paddingTop:'0px'}}>
            <a href=''>
                List 2
            </a>
        </li>
        <li className='sidebar-list-item' style={{paddingTop:'0px'}}>
            <a href=''>
                List 3
            </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar