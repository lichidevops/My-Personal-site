import React, { useEffect, useRef, useState } from 'react'
import ModalLayout from './ModalLayout/ModalLayout';
import './ButtonRipple.css';

export default function ButtonRipple() {

  const rippleCircleRef = useRef(null);
  const rippleTimeRef = useRef(null);

  const handleClick = (e)=>{
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = rippleCircleRef.current;
    circle.style.top = `${yInside}px`;
    circle.style.left = `${xInside}px`;
    
    circle.classList.add('ripple-demo-button-circle');

    rippleTimeRef.current = setTimeout(() => {
      circle.classList.remove('ripple-demo-button-circle');
    }, 500);
  }

  useEffect(() => {
    return () => {
      if(rippleTimeRef.current){
        clearTimeout(rippleTimeRef.current);
      }
    }
  }, [])

  return (
    <>
    <ModalLayout name={"Button Ripple"} setState={()=>{}} clearState={()=>{}}>
    <div className='button-ripple-body'>
      <div className='button-ripple-container'>
        <button className='ripple-demo-button' onClick={handleClick}>SUBMIT
          <span ref={rippleCircleRef}></span>
        </button>

      </div>

    </div>

    </ModalLayout>
    </>
  )
}
