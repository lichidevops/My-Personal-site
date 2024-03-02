import React, { useEffect } from 'react'
import ModalLayout from './ModalLayout/ModalLayout';
import './ScrollAnimation.css'

export default function ScrollAnimation() {


  const checkBoxes = () =>{
    // console.log(document.getElementById('scroll-animation-page'))
  }

  useEffect(()=>{
    window.addEventListener('scroll',checkBoxes)
  },[])
  return (
    <>
    <ModalLayout name={"Scrolling Animation"} setState={()=>{}} clearState={()=>{}}>
      <div id='scroll-animation-page'>
        <h1 id='scroll-anime-h1'>Scroll to see animation</h1>
        <div className='scroll-anime-box show'><h3>content</h3></div>
        <div className='scroll-anime-box'><h3>content</h3></div>
        <div className='scroll-anime-box'><h3>content</h3></div>
        <div className='scroll-anime-box'><h3>content</h3></div>
        <div className='scroll-anime-box'><h3>content</h3></div>
        <div className='scroll-anime-box'><h3>content</h3></div>
        <div className='scroll-anime-box'><h3>content</h3></div>
        <div className='scroll-anime-box'><h3>content</h3></div>
        <div className='scroll-anime-box'><h3>content</h3></div>
        <div className='scroll-anime-box'><h3>content</h3></div>
      </div>
    </ModalLayout>
    </>
  )
}
