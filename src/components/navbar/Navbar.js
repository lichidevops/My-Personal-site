import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <ul className='navbar-items'>
            <Link to={'/'}>
                <li className='navbar-item'>
                    HOME
                </li>
            </Link>
            <Link to={'/portfolio'}>
                <li className='navbar-item'>
                   MY WORK
                </li>
            </Link>
            <li className='navbar-item'>ABOUT</li>
            <Link to={'/contact'}>
            <li className='navbar-item'>CONTACT</li>
            </Link>
        </ul>
        <div className='sidebar-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </nav>
    </>
  )
}
