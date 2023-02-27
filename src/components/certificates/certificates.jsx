import React from 'react'
import './certificates.css'
import IMG1 from '../../assets/certificate1.png'
import IMG2 from '../../assets/certificate2.png'
import IMG3 from '../../assets/certificate3.png'
import IMG4 from '../../assets/certificate4.png'


// 
const data = [
  {
    id:1,
    image: IMG1,
    title: 'JavaScript on the Go : Async',
    view:'https://www.linkedin.com/learning/certificates/a4a33066acef370179d52417839f8ffb797976ed16600b70f5a4b3ed72c0b406'
   
  },
  {
    id:2,
    image: IMG2,
    title: 'JavaScript Under the Hood',
    view:'https://www.linkedin.com/learning/certificates/49730f5799346e1b167f2fcca1b7f2561ac7216a8e50f8f084c73419f5690155'
    
  },
  {
    id:3,
    image: IMG3,
    title: 'Node.js Essential Training',
    view:'https://www.linkedin.com/learning/certificates/3f767f1c1688abf0a8e613549a5e9bd52d54cbc55fa3f739b2f208e370ba27b1'
    
  },
  {
    id:4,
    image: IMG4,
    title: 'Node.js Essential Training: Web Servers, Tests, Deployments',
    view:'https://www.linkedin.com/learning/certificates/119596a4efd84e6923d61206cbd17ad400c403813dc2b07b954f11095b33d2bd'
  }
 
]


function Certificates() {
  return (
    <section id='certificates'>
      <h5>My Learning & Certificates</h5>
      <h2>Certificates</h2>
      <div className='container project__container'>
{
  data.map(({id, image, title, view})=>{
    return(
<article key={id} className='poroject__item'>
<div className='project__item-image'>
<img src={image} alt={title} />
</div>
<h3>{title}</h3>
<div className='project__item-cta'>
<a href={view} className='btn'  target='_blank' rel="noreferrer">View</a>
</div>
</article>
    )
  })
}
      </div>

      </section>

  )
}

export default Certificates