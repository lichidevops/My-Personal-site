import React,{useEffect, useState} from 'react'
import ModalLayout from './ModalLayout/ModalLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer, faBreadSlice, faCoffee, faCookie } from '@fortawesome/free-solid-svg-icons';
import './IncrementCounter.css';

export default function IncrementCounter() {

  const [counters, setCounters] = useState([
    {
      id: 1,
      icon: faCoffee,
      count: 0,
      target: 60,
      name: 'Coffee'
    },
    {
      id: 2,
      icon: faCookie,
      count: 0,
      target: 20,
      name: 'Cookies'
    },
    {
      id: 3,
      icon: faBreadSlice,
      count: 0,
      target: 30,
      name: 'Bread'
    }
  ])

  const handleIncrement = ()=>{
    
    counters.forEach((counter)=>{
      if(counter.count < counter.target){
        let newCounter = counter.count + 1;
        setCounters(counters.map((c)=>{
          if(c.id === counter.id){
            return {...c, count: newCounter}
          }else {
            return c
          }
        }
        ))
      }
    })
  }

  useEffect(() => {
    setTimeout(() => {
      handleIncrement()
    }, 100);
  },[])
  

  return (
    <>
    <ModalLayout name={"Incremental Counter"} setState={()=>{}} clearState={()=>{}}>
      <div id='increment-counter-page'>
      {
          counters.map((counter)=>{
            return (
              <div className='increment-counter-container' key={counter.id} data-target={counter.target}>
                <FontAwesomeIcon icon={counter.icon} size='5x'/>
                <div className='increment-counter' data-target={counter.target}>{counter.count}</div>
                <span>{counter.name}</span>
              </div>
            )
          })
        }
      </div>


    </ModalLayout>
    </>
  )
}
