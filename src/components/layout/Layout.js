import React from 'react'
import Navbar from '../navbar/Navbar'
import './Layout.css'
import Sidebar from '../sidebar/Sidebar'
import '../sidebar/Sidebar.css'
import Footer from '../footer/Footer';

export default function Layout({children}) {
  
  return (
    <>
    <div className='layout'>
        <div id='header'>
          <Navbar />
        </div>
        <div className='main-body'>
            <div className='side-bar'>
                <Sidebar />
            </div>
            <div className='main-content'>
            {children}
            </div>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
    </div> 
    </>
  )
}
