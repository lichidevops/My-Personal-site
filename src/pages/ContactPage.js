import React,{useEffect} from 'react'
import Layout from '../components/layout/Layout';
import './ContactPage.css'

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
                    <div className='business-card'>

                        <div className='card-body'>
                            <div className='card-left'>
                                <p id='name'>LiChi</p>
                                <p id='job'>Software Engineer</p>
                                    
                            </div>
                            <div className='card-right'>
                                <p></p>
                            </div>
                        </div>
                        <div className='card-bottom'></div>
                    </div>

                </div>
                <div className='contact-sub2'>
                    <div className='profile-img'>
                        <img src='images/DSC_2200.jpg' />
                    </div>
                </div>
            </div>
            <div className='contact-footer'>

            </div>
        </div>
        </Layout>
    </>
  )
}
