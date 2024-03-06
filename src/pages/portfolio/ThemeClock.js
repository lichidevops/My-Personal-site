import React, { useEffect, useRef,useState } from 'react';
import ModalLayout from './ModalLayout/ModalLayout';
import './ThemeClock.css';

export default function ThemeClock() {

  const [time, setTime] = useState(new Date());
  const [month, setMonth] = useState(time.getMonth());
  const [day, setDay] = useState(time.getDay());
  const [date, setDate] = useState(time.getDate());
  const [hours, setHours] = useState(time.getHours());
  const [amPm, setAmPm] = useState(time.getHours()>=12?'PM':'AM')

  const [minutes, setMinutes] = useState(time.getMinutes());
  const [seconds, setSeconds] = useState(time.getSeconds());

  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);
  const clockTimeRef = useRef(null);
  const clockDateRef = useRef(null);
  const toggleRef = useRef(null);
  const clockBodyRef = useRef(null);

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const toggleThemeClock = () => {
    if(clockBodyRef.current.classList.contains('dark')){
      clockBodyRef.current.classList.remove('dark');
      toggleRef.current.textContent = 'Dark Mode';
    }else{
      clockBodyRef.current.classList.add("dark");
      toggleRef.current.textContent = 'Light Mode';
    }
  }

  const clearAllStates = ()=>{
    setHours(null);
    setMinutes(null);
    setSeconds(null);
    setAmPm(null);
    setMonth(null);
    setDay(null);
    setDate(null);
    console.log("States cleared")
  }

  const setAllStates = ()=>{
    setHours(time.getHours());
    setMinutes(time.getMinutes());
    setSeconds(time.getSeconds());
    setAmPm(time.getHours()>=12?'PM':'AM');
    setMonth(time.getMonth());
    setDay(time.getDay());
    setDate(time.getDate());
    console.log("States set")
  }

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  useEffect(() => {

    const syncClock = ()=>{
      const now = new Date();
      const msUntilNextSec = 1000 - now.getMilliseconds();
   
    setTimeout(() => {
      let dateTime = new Date();

      if(hourRef.current){
        hourRef.current.style.transform = `translate(-50%,-100%) rotate(${scale(dateTime.getHours()%12, 0, 11, 0, 360)}deg)`;
      }

      if(minuteRef.current){
        minuteRef.current.style.transform = `translate(-50%,-100%) rotate(${scale(dateTime.getMinutes(), 0, 59, 0, 360)}deg)`;
      }

      if(secondRef.current){
        secondRef.current.style.transform = `translate(-50%,-100%) rotate(${scale(dateTime.getSeconds(), 0, 59, 0, 360)}deg)`;
      }
      
      setTime(dateTime);

      setHours(dateTime.getHours()>9?dateTime.getHours():`0${dateTime.getHours()}`);
      setMinutes(dateTime.getMinutes()>9?dateTime.getMinutes():`0${dateTime.getMinutes()}`);

      setSeconds(dateTime.getSeconds()>9?dateTime.getSeconds():`0${dateTime.getSeconds()}`);

      syncClock();
      }, msUntilNextSec);
    }

    syncClock();
    
    return () => clearInterval(syncClock);
  }, [])

  return (
    <>
    <ModalLayout name={"Theme Clock"} setState={setAllStates} clearState={clearAllStates}>

    <div ref={clockBodyRef} id='theme-clock-body' className='dark'>
      <button 
        ref={toggleRef} 
        className='theme-clock-toggle'
        onClick={toggleThemeClock}
        >Dark Mode</button>

      <div className='theme-clock-container'>
        <div className='theme-clock'>
          <div ref={hourRef} className='clock-needle hour'></div>
          <div ref={minuteRef} className='clock-needle minute'></div>
          <div ref={secondRef} className='clock-needle second'></div>
          <div className='center-point'></div>
        </div>

        <div ref={clockTimeRef} className='clock-time'>{hours}:{minutes}:{seconds} {amPm}</div>
        <div ref={clockDateRef} className='clock-date'> {weekDays[day]}, {months[month]} <span className='theme-clock-circle'>{date}</span></div>
      </div>
    </div>

    </ModalLayout>
    </>
  )
}
