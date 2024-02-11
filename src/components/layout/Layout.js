import React from 'react'
import Navbar from '../navbar/Navbar'
import './Layout.css'
import Sidebar from '../sidebar/Sidebar'

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
