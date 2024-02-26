import React, { useState } from 'react'
import ModalLayout from './ModalLayout/ModalLayout';
import './SplitLandingPage.css'

export default function SplitLandingPage() {

  const [hoverSide, setHoverSide] = useState("hover-left");

  const handleHoverLeft =()=>{
    setHoverSide("hover-left")
  }

  const handleHoverRight = ()=>{
    setHoverSide("hover-right")
  }

  return (
    <>
    <ModalLayout name={"Split Landing Page"} setState={()=>{}} clearState={handleHoverLeft}>
    <div className='split-landing-body'>
      <div className={`split-landing-container ${hoverSide}`}>
        <div className='split left' onMouseEnter={handleHoverLeft}>
          <h1 className='camera-brand'>Canon</h1>
          <a className='split-landing-btn'> Buy Now</a>
        </div>
        <div className='split right' onMouseEnter={handleHoverRight}>
          <h1 className='camera-brand'>Nikon</h1>
          <a className='split-landing-btn'>Buy Now</a>
        </div>
      </div>
    </div>

    </ModalLayout>
    </>
  )
}
