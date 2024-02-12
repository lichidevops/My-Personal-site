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
                    <h3>Hi, I'm <span className='homepage-title-name'>Lichi</span></h3>
                    <h3>Web Developer</h3>
                </div>
                <div className='homepage-about'>
                    <p>
                        I am a web developer with a passion for creating tools and apps for people to use. 
                        I have skills in front-end and back-end development, and I am always looking to learn new technologies.
                    </p>
                </div>
                <div className='homepage-cta'>
                    <Link to={'/portfolio'}>
                        <ButtonRegular className='homepage-cta-button'>View My Work</ButtonRegular>
                    </Link>
                </div>
            </div>

            <div className='homepage-text-box'>
                
            </div>
        </div>
        </div>
        </Layout>
    </>
  )
}
