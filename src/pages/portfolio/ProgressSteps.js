import React, { useEffect, useReducer, useRef, useState } from 'react'
import ModalLayout from './ModalLayout/ModalLayout';
import './ProgressSteps.css'

export default function ProgressSteps() {

  const [completionPct, setCompletionPct] = useState(0);
  const progressRef = useRef(null);
  const [textColor, setTextColor] = useState("");

  const [circles, setCircles] = useState([
    {index:1, status:'active'},
    {index:2, status:''},
    {index:3, status:''},
    {index:4, status:''}
  ]);

  const handleNextStep = () => {
    let copyCircles = [...circles];
    for(let i = 0; i < copyCircles.length; i ++){
      if(copyCircles[i].status ==""){
        copyCircles[i].status = "active";
        setCompletionPct(completionPct+30);
        setTextColor("#3498db");
        break;
      }
    }
    setCircles(copyCircles)
  }
  const handlePrevStep = ()=>{
    let copyCircles = [...circles];
    for(let i = copyCircles.length-1; i >=0; i--){
      if(i != 0){
        if(copyCircles[i].status ==="active"){
          copyCircles[i].status =""
          setCompletionPct(completionPct-30);
          setTextColor("");

          break;
        }
      }
    }
    setCircles(copyCircles)
  }

  const handleSpecificStep = (index) =>{
    let copyCircles = [...circles];
    circles.forEach((circle)=>{
      if(circle.index === index){
        circle.status = "active";
      }
    })
  }

  useEffect(()=>{
    if(progressRef.current){
      progressRef.current.style.width = `${completionPct}%`;
    }
    
  },[completionPct])

  return (
    <>
    <ModalLayout name={"Progress Steps"} setState={()=>{}} clearState={()=>{}}>
    <div className='progress-steps-body'>
      <div className='progress-steps-container2'>
        <div className='progress-steps-container'>
          <div className='progress' id='progress' ref={progressRef}>
          </div>
          {
            circles.map((circle,index)=>{
              return (
                <div key={index} className={`progress-steps-circle ${circle.status}`}>{circle.index}</div>
              )
            })
          }
        </div>
        <button d className='progress-steps-btn' id='prev' onClick={handlePrevStep} >Previous</button>
        <button className='progress-steps-btn' id='next' onClick={handleNextStep} >Next</button>
      </div>
    </div>

    </ModalLayout>
    </>
  )
}
