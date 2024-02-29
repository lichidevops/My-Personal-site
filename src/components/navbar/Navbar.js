import React, { useState } from 'react'
import './Navbar.css';
import {Link,NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked,faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

  const [menuHidden, setMenuHidden] = useState(true)

  const toggleMenu = ()=>{
    
    setMenuHidden(!menuHidden)
  }

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
          <div id='navbar-dropdown'>
            <button id='navbar-button' onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
            </button>
            <div id='navbar-dropdown-menu' hidden={menuHidden}>
              <ul id='navbar-dropdown-list'>
              <NavLink to={'/'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
                <li className='navbar-list'>HOME</li>
              </NavLink>
              <NavLink to={'/portfolio'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
                <li className='navbar-list'>MY WORK</li>
              </NavLink>
              <NavLink to={'/resume'}  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
                <li className='navbar-list'>RESUME</li>
              </NavLink>
              <NavLink to={'/contact'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
                <li className='navbar-list'>CONTACT</li>
              </NavLink>
              </ul>
            </div>
          </div>
      </nav>
    </>
  )
}
