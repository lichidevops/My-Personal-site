import React, { useState } from 'react'

export default function ExpandingCards() {
    const [hidden, setHidden] = useState(true);

    const handleShowModal = ()=>{
        if(hidden){
            setHidden(false);
        }else {
            setHidden(true);
        }
    }

  return (
    <>
        <button onClick={handleShowModal}></button>
        <div hidden={hidden} className='modal'>
            <div className=''>

            </div>
        </div>
    </>
  )
}
