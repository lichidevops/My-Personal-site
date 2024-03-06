import React from 'react'
import ModalLayout from './ModalLayout/ModalLayout';
import './AnimatedNavigation.css'
export default function AnimatedNavigation() {
  return (
    <>
    <ModalLayout name={"Animated Navigation"} setState={()=>{}} clearState={()=>{}}>

    <div id='animated-nav-body'>
      <nav className='ani-nav-active' id='ani-nav'>
        <ul>
          <li><a>Home</a></li>          
          <li><a>Works</a></li>          
          <li><a>About</a></li>          
          <li><a>Contact</a></li>          
        </ul>
        <button className='ani-nav-icon' id='ani-nav-toggle'>
          <div className='ani-nav-line ani-line1'></div>
          <div className='ani-nav-line ani-line2'></div>
        </button>
      </nav>

    </div>

    </ModalLayout>
    </>
  )
}
