import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import React from 'react';
import Homepage from './pages/Homepage.js';
import Portfolio from './pages/Portfolio.js';
import ContactPage from './pages/ContactPage.js';
import AboutPage from './pages/AboutPage.js';
import NotFound404 from './pages/NotFound404.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio/" element={<Portfolio />} >
        </Route>
        <Route path='/resume' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/*' element={<NotFound404/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
