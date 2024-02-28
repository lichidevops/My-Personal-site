import React, { useEffect, useState } from 'react'
import ModalLayout from './ModalLayout/ModalLayout';
import './BlurryLoading.css'

export default function BlurryLoading() {

  const [percentage,setPercentage] = useState(0);
  const [startLoading, setStartLoading] = useState(false);
  
  const scale = (num, in_min, in_max, out_min, out_max)=>{
    return ((num - in_min)* (out_max - out_min)) / (in_max - in_min) + out_min
  }

  const clearState=()=>{
    setPercentage(0);
    setStartLoading(false);
  }

  useEffect(()=>{
    if(!startLoading) return;
    const loadText = document.querySelector('.loading-text');
    const bg = document.querySelector('.blurryBg');

    let interval =  setInterval(()=>{
      setPercentage((prevPercentage) => {
        if(prevPercentage>=100){
          clearInterval(interval)
          return 100;
        }
        loadText.style.opacity = scale(prevPercentage, 0,100,1,0);
        bg.style.filter = `blur(${scale(prevPercentage, 0,100,30,0)}px)`
        return prevPercentage + 1
      });
    },50);

    return ()=>clearInterval(interval)
  },[startLoading])

  return (
    <>
    <ModalLayout name={"Blurry Loading"} setState={()=>setStartLoading(true)} clearState={()=>clearState()}>
     <div className='blurryBg'>
      <div className='loading-text'>{percentage}%</div>
     </div>
    </ModalLayout>
    </>
  )
}
