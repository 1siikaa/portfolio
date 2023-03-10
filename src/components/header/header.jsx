import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './headersocial'
import Me from '../../assets/me.jpg'

function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vanshika Dubey</h1>
        <h5 className='text-light'>Software Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
         <img src={Me} alt='me'/>
        </div>
      </div>
    </header>
  )
}

export default header