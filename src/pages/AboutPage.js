import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout';
import './AboutPage.css'

export default function AboutPage() {

  useEffect(()=>{
    document.title = "Resume"
  },)
  return (
    <Layout>
        <div className='about-body'>
          <p>Hello</p>
        </div>
    </Layout>
  )
}
