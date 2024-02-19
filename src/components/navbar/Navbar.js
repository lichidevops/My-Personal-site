import React from 'react'
import './Navbar.css';
import {Link,NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
      <div className='navbar-title'>
          <p>L</p>
          <p>I</p>
          <p>C</p>
          <p>H</p>
          <p>I</p>
        </div>
        <ul className='navbar-items'>
            <NavLink to={'/'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
              <li className='navbar-item'>HOME</li>
            </NavLink>
            <NavLink to={'/portfolio'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
              <li className='navbar-item'>MY WORK</li>
            </NavLink>
            <NavLink to={'/about'}  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
              <li className='navbar-item'>ABOUT</li>
            </NavLink>
            <NavLink to={'/contact'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
              <li className='navbar-item'>CONTACT</li>
            </NavLink>
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
