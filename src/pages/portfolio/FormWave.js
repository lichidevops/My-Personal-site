import React from 'react';
import ModalLayout from './ModalLayout/ModalLayout';
import './FormWave.css'

export default function FormWave() {
  return (
    <>
    <ModalLayout name={"Form Wave"} setState={()=>{}} clearState={()=>{}}>
    <div className='wave-form-body'>
      <div className='wave-form-container'>
          <h1>Please Login</h1>
          <form>
            <div className='wave-form-control'>
              <input type='text' required/>
              <label>Email</label>
            </div>
            <div className='wave-form-control'>
              <input type='password' required/>
              <label>password</label>
            </div>
            <button className='wave-form-btn'>Login</button>
            <p className='wave-form-text'>Don't have an account? <a href='#'>Register</a></p>
          </form>
        </div>
      </div>

    </ModalLayout>
    </>
  )
}
