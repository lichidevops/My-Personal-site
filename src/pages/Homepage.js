import React,{useEffect, useRef, useState} from 'react';
import Layout from '../components/layout/Layout';
import './Homepage.css';
import {Link} from 'react-router-dom';
import ButtonRegular from '../components/buttons/ButtonRegular';
import TimeDisplay from '../components/TimeDisplay/TimeDisplay';

export default function Homepage() {
    const [selfIntro, setSelfIntro] = useState("");

    const introText = 
        " I'm a self-taught web developer, deeply immersed in a journey of learning, building, and exploring the ever-evolving landscape of technology. \n I can: \n - Develop backend systems, laying the groundwork for strong, scalable applications. \n - Design and implement frontend interfaces with aesthetics for a user-friendly experience in mind. \n - build mobile applications. \n Driven by curiosity and a relentless pursuit of excellence, I continuously seek to expand my skillset and tackle new challenges, and bring my unique blend of skills and perspective to a team that values innovation and creativity."
    ;
    let typeIndex = useRef(0);
    let intervalRef = useRef(null)
    const typeSpeed = 10;

    useEffect(()=>{
        document.title = "Home - LiChi";

        intervalRef.current = setInterval(() => {
            if(typeIndex.current < introText.length){
                typeIndex.current ++;
                setSelfIntro((prev)=> prev + introText.charAt(typeIndex.current));
            }
            else{
                clearInterval(intervalRef.current)
            }
        }, typeSpeed);

        return ()=>clearInterval(intervalRef.current)
        },[selfIntro])
  return (
    <>
    <Layout>
    <div className='home-main'>
        <div className='homepage-header'>
            <TimeDisplay/>
        </div>
        <div className='homepage-main'>
            <div className='homepage-body'>
                <div className='homepage-text-box'>
                    <div className='homepage-title'>
                        <h2>Hi there, I'm a Web Developer</h2>
                    </div>
                    <div className='homepage-about'>
                        <p>
                            {selfIntro.split('\n').map((line, index, array) =>index === array.length - 1 ? <span key={index}>{line}</span> : <span key={index}>{line}<br /><br/></span>)}
                        </p>
                    </div>

                </div>

                <div className='homepage-text-box'>
                    <div className='my-skills-title'>
                        <h2>What I know:</h2>
                    </div>
                    <div className='my-skills-text-box1'>
                        <div className='skills-child'>
                            <p>Programming Languages</p>
                                <ul>
                                    <li>Javascript</li>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>Dart</li>
                                    <li>Javascript</li>
                                </ul>
                        </div>
                        <div className='skills-child'>
                            <p>Frontend</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                        <div className='skills-child'>
                            <p>Backend</p>
                            <ul>
                                <li>Node.js</li>
                                <li>Python Flask</li>
                                <li>SQL</li>
                                <li>NoSQL</li>
                            </ul>
                        </div>
                    </div>
                    <div className='my-skills-text-box2'>
                        <div className='skills-child'>
                            <p>Mobile </p>
                            <ul>
                                <li>Flutter </li>
                            </ul>
                        </div>
                        <div className='skills-child'>
                            <p>Frameworks / Library </p>
                            <ul>
                                <li>React </li>
                                <li>Vue </li>
                                <li>Bootstrap </li>
                                <li>Tailwind </li>
                            </ul>
                        </div>
                    </div>
                    <div className='homepage-cta'>
                        <Link to={'/portfolio'}>
                            <ButtonRegular className='homepage-cta-button'>View My Work</ButtonRegular>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Layout>
    </>
  )
}
