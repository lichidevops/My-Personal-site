import React,{useEffect, useRef, useState} from 'react'
import './ModalLayout.css'

export default function ModalLayout({name,children, setState,clearState}) {
    
    const [hidden, setHidden] = useState(true);
    const buttonRef = useRef(null);
    const waveTimeRef = useRef(null);
    const modalRef = useRef(null);

    const handleShowModal = (e)=>{
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('widget-button-circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        buttonRef.current.appendChild(circle);

        waveTimeRef.current = setTimeout(()=>circle.remove(), 500);

        setHidden(!hidden);
        if(hidden){
            setState();
        }else {
            modalRef.current = setTimeout(() => {
                clearState(); 
            }, 500);
        }
    }

    const handleClose = ()=>{
        setHidden(true)
        modalRef.current = setTimeout(() =>  clearState(), 500); 
    }
    
    const handleKeyDown = (e)=>{
        e.preventDefault();
        if(e.key === "Escape"){
            setHidden(true)
            clearState();
        }
    }

    useEffect(() => {

        return () => {
            clearTimeout(waveTimeRef.current);
            if(modalRef.current){
                clearTimeout(modalRef.current);
            }
        }
    }
    , [])

  return (
    <>
        <button 
            ref={buttonRef} 
            className='widget-button ripple-button' 
            onKeyDown={handleKeyDown} 
            onClick={handleShowModal}>
                {name}
            </button>

        <div className={`modal-body ${hidden ? 'hidden' : ''}`}>
            {/* add class 'hidden' or not based on hidden value */}
            <div className='modal-header'>  
                <button onClick={handleClose} className='close-button'>X</button>
                <p className='modal-name'>{name}</p>
            </div>

            <div className='modal-children' onKeyDown={handleKeyDown} >
            <div className='modal-rim' >
                {children}
            </div>
        </div>
        </div>
    </>
  )
}
