import React from 'react';
import './Sidebar.css';
import HomeIcon from '../icons/HomeIcon';
import ClipboardIcon from '../icons/ClipboardIcon';
import AboutIcon from '../icons/AboutIcon';
import PhoneIcon from '../icons/PhoneIcon';
import {Link} from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
        <ul className='sidebar-main'>
            <Link to={'/'}>
                <li className='sidebar-item'>
                    <div className='sidebar-icon'>
                        <HomeIcon />
                    </div>
                    <p>Home</p>
                </li>
            </Link>
            <Link to={'/portfolio'}>
                <li className='sidebar-item'>
                    <div className='sidebar-icon'>
                        <ClipboardIcon />
                    </div>
                    <p>My Work</p>
                </li>
            </Link>
            <li className='sidebar-item'>
                <div className='sidebar-icon'>
                    <AboutIcon />
                </div>
                <p>About</p>
            </li>
            <Link to={'/contact'}>
                <li className='sidebar-item'>
                    <div className='sidebar-icon'>
                        <PhoneIcon />
                    </div>
                    <p>Contact</p>
                </li>
            </Link>

        </ul>
        <div className='myName'>
            <p>L</p>
            <p>I</p>
            <p>C</p>
            <p>H</p>
            <p>I</p>
        </div>
        <ul className='sidebar-small' hidden>
            <li className='sidebar-item'>1</li>
            <li className='sidebar-item'>2 </li>
            <li className='sidebar-item'>3</li>
            <li className='sidebar-item'>4</li>
        </ul>

        
    </>
  )
}
