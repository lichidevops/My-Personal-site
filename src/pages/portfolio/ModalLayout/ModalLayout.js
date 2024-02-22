import React,{useState} from 'react'
import './ModalLayout.css'

export default function ModalLayout({name,children, setState,clearState}) {
    
    const [hidden, setHidden] = useState(true);

    const handleShowModal = ()=>{
        setHidden(!hidden);
        if(hidden){
            setState();    // function drilling - child to start state
        }else {
            setTimeout(() => {
                clearState(); 
            }, 500);
               // function drilling - child to clear state
        }
    }

    const handleClose = ()=>{
        setHidden(true)
        setTimeout(() =>  clearState(), 500);       // function drilling - child to clear state
    }

    const handleKeyDown = (e)=>{
        e.preventDefault();

        if(e.key === "Escape"){
            setHidden(true)
            clearState();   // function drilling - child to clear state
        }
    }

  return (
    <>
        <button onKeyDown={handleKeyDown} onClick={handleShowModal}>{name}</button>
        <div className={`modal-body ${hidden ? 'hidden' : ''}`}>
            <div className='modal-header'>  
                <button onClick={handleClose} className='close-button'>X</button>
                <p className='modal-name'>{name}</p>
            </div>

            <div className='modal-children'>
            <div className='modal-rim'>
                {children}
            </div>
        </div>
        </div>
    </>
  )
}
