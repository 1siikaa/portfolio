import React from 'react'
import './projects.css'
import IMG7 from '../../assets/project7.png'
import IMG8 from '../../assets/project8.jpg'

// 
const data = [
  {
    id:7,
    image: IMG7,
    title: 'Google-Homepage',
    github: 'https://github.com/1siikaa/google-homepage',
    app:'https://tourmaline-lebkuchen-9b196d.netlify.app/'
  },
  {
    id:8,
    image: IMG8,
    title: 'Netflix-clone',
    github:'https://github.com/1siikaa/netflix-clone',
    app:'https://thunderous-paletas-82a9c3.netlify.app/'
  }
]


function projects() {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Front-end Projects</h2>
      <div className='container project__container'>
{
  data.map(({id, image, title, github,app})=>{
    return(
<article key={id} className='poroject__item'>
<div className='project__item-image'>
<img src={image} alt={title} />
</div>
<h3>{title}</h3>
<div className='project__item-cta'>
<a href={github} className='btn'  target='_blank' rel="noreferrer">Github</a>
<a href={app} className='btn' target='_blank' rel="noreferrer">App</a>
</div>
</article>
    )
  })
}
      </div>  
      </section>

  )
}

export default projects