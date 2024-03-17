import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BackgroundSlider.css';
import ModalLayout from './ModalLayout/ModalLayout';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function BackgroundSlider() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slides, setsSlides] = useState([
        {state:"bgSlide-active", url:"https://rp-cms.imgix.net/wp-content/uploads/MOADVPHOTO_2013_JKC_3343.jpg?auto=format&ar=1200%3A600&fit=crop&crop=faces"},
        {state:"", url:"https://i.natgeofe.com/k/16f3666f-97b3-4bc3-bbef-fff2b2084f71/mongolia-yurt.jpg?w=1084.125&h=609"},
        {state:"", url:"https://lp-cms-production.imgix.net/2023-08/shutterstock585027838.jpg?auto=format&w=1440&h=810&fit=crop&q=75"},
        {state:"", url:"https://ewjqphivwyq.exactdn.com/wp-content/uploads/2023/06/Mongolia-montana-scaled.jpeg?strip=all&lossy=1&ssl=1"},
        {state:"", url:"https://images.tripadeal.com.au/cdn-cgi/image/format=auto,width=800/https://cstad.s3.ap-southeast-2.amazonaws.com/4364_15D_Mongolia_Adventure_Web_Hero4.jpg"}
    ]);

    const slideLeft = ()=>{
        if(currentIndex >0){
            setCurrentIndex(currentIndex - 1);
        }
    }

    const slideRight = ()=>{
        if(currentIndex < slides.length -1){
            setCurrentIndex(currentIndex +1);
        }
    }

  return (
    <ModalLayout name={"Background Slider"} setState={()=>{}} clearState={()=>{}}>
    <div id='backgroundSlider-page' style={{backgroundImage:`url(${slides[currentIndex].url})`}}>
    
        <div className='backgroundSlider-container'>
        
            <div className={`background-slide`} style={{backgroundImage:`url(${slides[currentIndex].url})`}}>
            </div>

            <button 
                className='backgroundSlider-arrow bgLeft-arrow' id='backgroundSlider-left' 
                onClick={slideLeft}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </button>

            <button 
                className='backgroundSlider-arrow bgRight-arrow' 
                id='backgroundSlider-right'
                onClick={slideRight}>
                <FontAwesomeIcon icon={faArrowRight}/>
            </button>
        </div>
    </div>
    </ModalLayout>
  )
}
