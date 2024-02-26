import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer-content'>
        <div className='footer-column'>
            <h3>Navigate</h3>
            <NavLink to={'/'} >
                <p>Home</p>
            </NavLink>
            <NavLink to={'/portfolio'} >
                <p>My work</p>
            </NavLink>
            <NavLink to={'/resume'} >
                <p>Resume</p>
            </NavLink>
            <NavLink to={'/contact'}>
                <p>Contact</p>
            </NavLink>
        </div>
        <div className='footer-column'>
            <h3>Profile</h3>
        </div>
        <div className='footer-column'>
            <h3>Contact</h3>
        </div>
    </div>
  )
}
