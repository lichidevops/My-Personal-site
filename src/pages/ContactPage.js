import React,{useEffect,useState} from 'react'
import Layout from '../components/layout/Layout';
import './ContactPage.css'
import BusinessCard from './widgets/BusinessCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faX } from '@fortawesome/free-solid-svg-icons';

export default function ContactPage() {
  const [faqs,setFaqs] = useState([
    {qIndex:0, question:"How is my name spelled or read?",status:"active",answer:"My Family Name is Li, given name is Qi (sounds like Chi), in most of Asia, people's family name goes before given name. therefore, people call me LiChi"},

    {qIndex:1, question:"Where Have I worked?",status:"",answer:"I worked in Confucius Institute in Kenya, International Schools in Myanmar, Mongolia and South Korea, from 2012 to present"},
    {qIndex:2, question:"Where did I grow up?",status:"",answer:"I grew up in both China and Mongolia, i spent total of 24 years in both places"},
    {qIndex:3, question:"Where have a I lived? ",status:"",answer:"China, Mongolia, Kenya, Myanmar, South Korea"},
    {qIndex:4, question:"What is my favorite coding langauge? ",status:"",answer:"Javascript"},
    {qIndex:5, question:"What coding languages do I know??",status:"",answer:"I know JS, Python, Java, Dart, Swift!"},
    {qIndex:6, question:"What frameworks or libraries have I used?",status:"",answer:"React, Flutter, Flask, Node, Express.js, etc"},
    {qIndex:7, question:"Frontend or backend?",status:"",answer:"both, more backend please!"},
    {qIndex:8, question:"Am I eligible to work in US?",status:"",answer:"Yes"},
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

  useEffect(()=>{
    document.title = "Contact"
    },[])
  return (
    <>
        <Layout>
        <div id='contact-page'>
            <BusinessCard/>
          <div id='frequentQuestions'>
          {
            faqs.map((question)=>{
              return (
                <>
                  <div key={question.qIndex} className={`frequentQ ${question.status}`} onClick={()=>{handleFaqActive(question.qIndex)}}>
                      <h3 className='frequentQ-title'>{question.question}</h3>
                      <p className='frequentQ-answer'>
                        {question.answer}
                      </p>
                      <button className='frequentQ-toggle' >
                      <FontAwesomeIcon icon={faChevronDown}/>
                      </button>
                  </div>
                </>
              )
            })
          }
          </div>
        </div>
        </Layout>
    </>
  )
}
