import React from 'react';
import './ButtonRegular.css';

export default function ButtonRegular({children}) {
  return (
    <button className='button-regular'>{children}</button>
  )
}
