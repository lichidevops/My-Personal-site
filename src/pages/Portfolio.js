import React from 'react';
import Layout from '../components/layout/Layout';
import './Portfolio.css';

import ExpandingCards from './portfolio/ExpandingCards';
import BlurryLoading from './portfolio/BlurryLoading';
import RotatingNavigation from './portfolio/RotatingNavigation';
import HiddenSearch from './portfolio/HiddenSearch';
import ProgressSteps from './portfolio/ProgressSteps';
import QuizApp from './portfolio/QuizApp';
import SplitLandingPage from './portfolio/SplitLandingPage';
import ScrollAnimation from './portfolio/ScrollAnimation';
export default function () {
  return (
    <>
    <Layout>
    <div className='portfolio-page'>

        <div className='portfolio-body'>
            <BlurryLoading />
            <ExpandingCards />
            <RotatingNavigation />
            <HiddenSearch />
            <ProgressSteps />
            <QuizApp />
            <SplitLandingPage />
            <ScrollAnimation />
            <button>Click Me</button>
        </div>
    </div>
    </Layout>
    </>
  )
}
