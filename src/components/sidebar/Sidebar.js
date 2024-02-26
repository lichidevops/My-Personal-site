import React from 'react';
import './Sidebar.css';
import HomeIcon from '../icons/HomeIcon';
import ClipboardIcon from '../icons/ClipboardIcon';
import AboutIcon from '../icons/AboutIcon';
import PhoneIcon from '../icons/PhoneIcon';
import {Link,NavLink} from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
    <ul className='sidebar-main'>
        <NavLink to={'/'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
            <li className='sidebar-item'>
                <div className='sidebar-icon'>
                    <HomeIcon />
                </div>
                <p>Home</p>
            </li>
        </NavLink>
        <NavLink to={'/portfolio'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
            <li className='sidebar-item'>
                <div className='sidebar-icon'>
                    <ClipboardIcon />
                </div>
                <p>My Work</p>
            </li>
        </NavLink>
        <NavLink to={'/resume'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
        <li className='sidebar-item'>
            <div className='sidebar-icon'>
                <AboutIcon />
            </div>
            <p>Resume</p>
        </li>
        </NavLink>
        <NavLink to={'/contact'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
            <li className='sidebar-item'>
                <div className='sidebar-icon'>
                    <PhoneIcon />
                </div>
                <p>Contact</p>
            </li>
        </NavLink>

    </ul>

    <ul className='sidebar-small' hidden>
        <li className='sidebar-item'>1</li>
        <li className='sidebar-item'>2 </li>
        <li className='sidebar-item'>3</li>
        <li className='sidebar-item'>4</li>
    </ul>
    </>
  )
}
