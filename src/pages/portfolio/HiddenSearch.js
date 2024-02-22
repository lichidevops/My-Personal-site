import React, { useEffect, useState } from 'react'
import ModalLayout from './ModalLayout/ModalLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faSearch} from '@fortawesome/free-solid-svg-icons'
import './HiddenSearch.css';
export default function HiddenSearch() {

  const [searchText,setSearchText] = useState("");
  const [active, setActive] = useState('')

  const clearState = ()=>{
    setSearchText("");
    setActive("");
  }

  const toggleActive = ()=>{
    if(active === 'active'){
      setActive("")
    }else{
      setActive('active')
    }
  }

  return (
    <>
    <ModalLayout name={"Hidden Search"} setState={()=>{}} clearState={clearState} >
    <div className='body'>
      <p>{searchText}</p>
      <div className={`search ${active}`}>
        <input type='text' className='input' value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder='Search....'/>
        <button className='btn' onClick={toggleActive}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
    </ModalLayout>
    </>
  )
}
