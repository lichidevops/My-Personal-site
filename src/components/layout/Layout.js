import React from 'react'
import Navbar from '../navbar/Navbar'
import './Layout.css'
import Sidebar from '../sidebar/Sidebar'
import '../sidebar/Sidebar.css'
export default function Layout({children}) {
  
  return (
    <>
    <div>
        <header className='header'>
           <Navbar />
        </header>
        <main className='main-body'>
            <div className='side-bar'>
                <Sidebar />
            </div>
            <div className='main-content'>
            {children}
            </div>
        </main>
    </div> 
    </>
  )
}
