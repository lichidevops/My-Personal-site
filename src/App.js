import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import React from 'react';
import Homepage from './pages/Homepage.js';
import ProgressStep from './pages/widgets/ProgressStep.js';
import Portfolio from './pages/Portfolio.js';
import ContactPage from './pages/ContactPage.js';
import AboutPage from './pages/AboutPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio/" element={<Portfolio />} >
          <Route path="ProgressStep" element={<ProgressStep />} />
        </Route>
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
