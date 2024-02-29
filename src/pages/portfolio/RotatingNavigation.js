import React, { useState } from 'react'
import ModalLayout from './ModalLayout/ModalLayout';
import "./RotatingNavigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faCoffee, faContactBook, faHome, faSearch, faTimes, faUserAlt} from '@fortawesome/free-solid-svg-icons';

export default function RotatingNavigation() {

  const [showNav, setShowNav] = useState("");

  const handleOpen = ()=>{
    setShowNav("show-nav")
  }
  const handleClose = ()=>{
    setShowNav("")
  }

  return (
    <>
    <ModalLayout name={"Rotating Navigation"} setState={()=>{}} clearState={handleClose}>
      <div className='rotating-nav-body'>
        <div className={`rotating-nav-container ${showNav}`}>
          <div className='circle-container'>
            <div className='circle'>
              <button id='close'>
                <FontAwesomeIcon icon={faTimes} onClick={handleClose}/>
              </button>
              <button id='open' onClick={handleOpen}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>

          <div className='content'>
            <h1>Article</h1>
            <small>LiChi</small>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h3>My Dog</h3>
            <img />
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
          </div>
        </div>
        <nav className='rotatinNav'>
        <ul>
          <li><FontAwesomeIcon icon={faHome} />Home</li>
          <li><FontAwesomeIcon icon={faUserAlt} />About</li>
          <li><FontAwesomeIcon icon={faContactBook} />Contact</li>
        </ul>
      </nav>
      </div>
    </ModalLayout>
    </>
  )
}
