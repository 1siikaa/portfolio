import React from 'react'
import CV from '../../assets/cv.pdf'


function CTA() {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href='https://www.linkedin.com/mwlite/in/vanshika-dubey-479693227'  target='_blank' rel="noreferrer"  className='btn btn-primary'>Let's Talk</a>
        
    </div>
  )
}

export default CTA