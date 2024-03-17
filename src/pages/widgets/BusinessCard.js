import React from 'react'
import './BusinessCard.css'

export default function BusinessCard() {
  return (
    <div className='business-card'>
        <div className='card-body'>
            <div className='card-left'>
                <div>
                    <p id='name'>LI QI</p>
                    <p id='job'>Web Developer / Computer Science Teacher / Design Teacher / Chinese Teacher</p>

                </div>
            </div>
            <div className='vertical-line'></div>
            <div className='card-right'>
                <div className='address'>
                    <p>Address:</p>
                    <p>21 World Cup Bukro, 62gil</p>
                    <p>Mapo-Gu</p>
                    <p>Seoul</p>
                    <p>South Korea</p>
                </div>
            </div>
        </div>
        <div className='card-bottom'></div>
    </div>
  )
}
