import React, { useState } from 'react'
import ModalLayout from './ModalLayout/ModalLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FAQ.css';

import { faChevronDown, faX } from '@fortawesome/free-solid-svg-icons';

export default function FAQ() {

  const [faqs,setFaqs] = useState([
    {qIndex:1, question:"Where Have I worked?",status:"active",answer:"I worked in Confucius Institute in Kenya, International Schools in Myanmar, Mongolia and South Korea"},
    {qIndex:2, question:"Where did I grow up?",status:"",answer:"I grew up in both China and Mongolia, i spent total of 20 years in both places"},
    {qIndex:3, question:"Where have a I lived? ",status:"",answer:"China, Mongolia, Kenya, Myanmar, South Korea"},
    {qIndex:4, question:"What is my favorite coding langauge? ",status:"",answer:"Javascript"},
    {qIndex:5, question:"Frontend or backend?",status:"",answer:"both, more backend please!"},
  ]);

  const handleFaqActive = (faqIndex)=>{
    const copyFaqs = [...faqs];
    copyFaqs.forEach((faq)=>{
      if(faq.qIndex === faqIndex){
        faq.status = "active"
      }else{
        faq.status = ""
      }
    })
    setFaqs(copyFaqs)
  }

  return (
    <>
    <ModalLayout name={" Frequently Asked Questions"} setState={()=>{}} clearState={()=>{}}>
    <div id='faq-page'>
      <div id='faq-container'>
        {
          faqs.map((question)=>{
            return (
              <>
                <div key={question.qIndex} className={`faq ${question.status}`}>
                    <h3 className='faq-title'>{question.question}</h3>
                    <p className='faq-answer'>
                      {question.answer}
                    </p>
                    <button className='faq-toggle' onClick={()=>{handleFaqActive(question.qIndex)}}>
                    <FontAwesomeIcon icon={faChevronDown}/>
                    </button>
                </div>
              </>
            )
          })
        }
      </div>

    </div>

    </ModalLayout>
    </>
  )
}
