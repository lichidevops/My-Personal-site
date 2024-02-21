import React,{useEffect} from 'react'
import Layout from '../components/layout/Layout';
import './ContactPage.css'
import BusinessCard from './widgets/BusinessCard';
import ProfileBalloons from './widgets/ProfileBalloons';

export default function ContactPage() {

  useEffect(()=>{
    document.title = "Contact"
    },[])
  return (
    <>
        <Layout>
        <div id='contact-page'>
            <div className='contact-main'>
                <div className='contact-sub1'>
                    <BusinessCard/>
                </div>
                {/* <div className='contact-sub2'> */}
                    <ProfileBalloons />
                {/* </div> */}
            </div>
            <div className='contact-footer'>
            </div>
        </div>
        </Layout>
    </>
  )
}
