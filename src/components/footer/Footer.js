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
        <div className='footer-column profile'>
            <div className='footer-profile'>
                <div className='footer-profile-img'>
                    <img src='images/DSC_2200.JPG'/>
                </div>
                <div className='footer-profile-info'>
                    <p>LiChi</p>
                    <p>Seoul</p>
                    <p>South Korea</p>
                </div>
            </div>
        </div>
        <div className='footer-column'>
            <h3>Contact</h3>
            <p>Email: <span>lchi@dwight.or.kr</span></p>
        </div>
    </div>
  )
}
