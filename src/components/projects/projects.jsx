import React from 'react'
import './projects.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.jpg'
import IMG5 from '../../assets/project5.png'
import IMG6 from '../../assets/project6.jpg'
import IMG7 from '../../assets/project7.png'

// 
const data = [
  {
    id:1,
    image: IMG1,
    title: 'Blogging-Site',
    github: 'https://github.com/1siikaa/project1_blogging-site',
  },
  {
    id:4,
    image: IMG4,
    title: 'Url-Shortner',
    github: 'https://github.com/1siikaa/url-shortner',
  },
  {
    id:6,
    image: IMG6,
    title: 'Crypto-Currency',
    github: 'https://github.com/1siikaa/blockchainProject',
  },
  {
    id:2,
    image: IMG2,
    title: 'Open-to-Intern',
    github: 'https://github.com/1siikaa/open-to-intern',
  },
  {
    id:3,
    image: IMG3,
    title: 'BooksManagement',
    github: 'https://github.com/1siikaa/booksManagement',
  },
  
  {
    id:5,
    image: IMG5,
    title: 'Shopping-Cart',
    github: 'https://github.com/1siikaa/productManagement-shoppingCart',
  },
 
  {
    id:7,
    image: IMG7,
    title: 'Google-Homepage',
    github: 'https://github.com/1siikaa/google-homepage'
  }
]


function projects() {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className='container project__container'>
{
  data.map(({id, image, title, github})=>{
    return(
<article key={id} className='poroject__item'>
<div className='project__item-image'>
<img src={image} alt={title} />
</div>
<h3>{title}</h3>
<div className='project__item-cta'>
<a href={github} className='btn'  target='_blank' rel="noreferrer">Github</a>
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