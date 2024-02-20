import React, { useEffect, useState } from 'react'
import "./TimeDisplay.css"

export default function TimeDisplay() {

    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun',"Jul",'Aug','Sept','Oct','Nov','Dec']

    const [time, setTime] = useState();
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [date, setDate] = useState(new Date().getDate());


    const [formattedDate, setFormattedDate] = useState();

    useEffect(()=>{
        setFormattedDate(`${year}-${monthNames[month]}-${date}`)
        const interval = setInterval(()=>{
            setTime(new Date().toLocaleTimeString())   
        },1000)
        return () => clearInterval(interval);
    },[])

  return (
    <>
    <div className='time-display-box'>
        <h5 className='hh-mm-ss'> {time}</h5>
        <h5 className='yy-mm-dd'>{formattedDate}</h5>
    </div>
    </>
  )
}
