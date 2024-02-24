import React, { useEffect, useState } from 'react'
import ModalLayout from './ModalLayout/ModalLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faSearch} from '@fortawesome/free-solid-svg-icons'
import './HiddenSearch.css';
export default function HiddenSearch() {

  const [searchText,setSearchText] = useState("");
  const [active, setActive] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [hideCount, setHideCount] = useState(true);

  const clearState = ()=>{
    setSearchText("");
    setActive("");
  }

  const handleSearchText = (e)=>{
    setSearchText(e.target.value);
    setCharacterCount(e.target.value.length);
    e.target.value.length > 0? setHideCount(false) : setHideCount(true);
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
    <div className='hidden-search-body'>
      <p className='search-content'>{searchText}</p>
      <div className={`search ${active}`}>
        <input type='text' className='input' value={searchText} onChange={handleSearchText} placeholder='Search....'/>
        <button className='btn' onClick={toggleActive}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <p className='search-character-count' hidden={hideCount}>{`${characterCount} characters`}</p>
    </div>
    </ModalLayout>
    </>
  )
}
