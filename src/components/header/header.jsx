import React, { useState, useEffect } from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './headersocial'
import { BsArrowDown } from 'react-icons/bs'
// import Me from '../../assets/me.jpeg'

function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{ position: 'relative' }}>
      <div 
        className="header__bg-glow" 
        style={{ 
          opacity: Math.max(1 - scrollY / 300, 0), 
          transition: 'opacity 0.1s ease-out' 
        }}
      />
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vanshika Dubey</h1>
        <h5 className='text-light'>Software Developer</h5>
        <CTA/>
        <HeaderSocials/>
        {/* <div className='me'>
         <img src={Me} alt='me'/>
        </div> */}

        <div className="scroll__indicator" style={{ opacity: Math.max(1 - scrollY / 300, 0), transition: 'opacity 0.1s ease-out' }}>
           <span>Scroll to know more</span>
           <BsArrowDown className="scroll__arrow" />
        </div>
      </div>
    </header>
  )
}

export default Header