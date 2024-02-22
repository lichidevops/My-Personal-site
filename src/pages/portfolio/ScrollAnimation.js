import React from 'react'
import ModalLayout from './ModalLayout/ModalLayout';

export default function ScrollAnimation() {
  return (
    <>
    <ModalLayout name={"Scrolling Animation"} setState={()=>{}} clearState={()=>{}}>
      <div className='scroll-animation-body'>
        <h1>Scroll to see animation</h1>
        <div className='box'><h3>content</h3></div>
        <div className='box'><h3>content</h3></div>
        <div className='box'><h3>content</h3></div>
        <div className='box'><h3>content</h3></div>
        <div className='box'><h3>content</h3></div>
        <div className='box'><h3>content</h3></div>
        <div className='box'><h3>content</h3></div>
        <div className='box'><h3>content</h3></div>
        <div className='box'><h3>content</h3></div>
        <div className='box'><h3>content</h3></div>
      </div>
    </ModalLayout>
    </>
  )
}
