import React from 'react';
import Layout from '../components/layout/Layout';
import './Homepage.css';
import {Link} from 'react-router-dom';
import ProgressStep from './widgets/ProgressStep';
import ButtonRegular from '../components/buttons/ButtonRegular';

export default function Homepage() {
  return (
    <>
        <Layout>
        <div>
        <div className='homepage-header'>
            <div className='homepage-header-background'>
                <img src='images/homepageImg.jpg' alt='no image' />
                <h4>Welcome</h4>
            </div>
        </div>
        <div className='homepage-body'>
            <div className='homepage-text-box'>
                <div className='homepage-title'>
                    <h4>Hi there, I'm a Web Developer</h4>
                </div>
                <div className='homepage-about'>
                    <p>
                        I'm a self-taught web developer with a journey that spans over three years into the ever-evolving world of technology. My foray into programming started out of sheer curiosity, but it quickly blossomed into a deep-seated passion that drives me every day. Through countless hours of learning, experimenting, and building, I've honed my skills in crafting web applications that are not only functional but also intuitive and engaging.
                    </p>
                    <p>I cherish the creative process involved in programming—from conceptualizing an idea to bringing it to life through code. It's a form of art to me, one that allows for endless expression and innovation. The thrill of solving complex problems and the satisfaction of seeing a project come together are what drive my love for web development.</p>
                </div>
                <div className='homepage-cta'>
                    <Link to={'/portfolio'}>
                        <ButtonRegular className='homepage-cta-button'>View My Work</ButtonRegular>
                    </Link>
                </div>
            </div>

            <div className='homepage-text-box'>
                <div className='homepage-my-skills'>
                    <h4>What I know:</h4>
                    <div className='my-skills-layout'>
                        <div className='skills-layout-child'>
                            <p>Programming Languages</p>
                            <ul>
                                <li>Javascript</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>Dart</li>
                                <li>Javascript</li>
                            </ul>
                        </div>
                        <div className='skills-layout-child'>
                            <p>Other Languages</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
        </div>
        </Layout>
    </>
  )
}
