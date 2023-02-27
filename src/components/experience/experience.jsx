import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function experience() {
  return (
    <section id='experience'>    
    <h5>What Skills I Have</h5>
    <h2>My Strengths</h2>

    <div className='container experience__container'>
      <div className='experience__backend'>
        <h3>Technology Used</h3>
        <div className='experience__content'>
<article className='experience__details'>
<BsPatchCheckFill/>
<div>
<h4>JavaScript</h4>
<small className='text-light'>Experienced</small>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill/>
<div>
<h4>Node.js</h4>
<small className='text-light'>Experienced</small>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill/>
<div>
<h4>Express.js</h4>
<small className='text-light'>Experienced</small>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill/>
<div>
<h4>MongoDB</h4>
<small className='text-light'>Experienced</small>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill/>
<div>
<h4>React(Basics)</h4>
<small className='text-light'>Intermediate</small>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill/>
<div>
<h4>Git</h4>
<small className='text-light'>Experienced</small>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill/>
<div>
<h4>DSA</h4>
<small className='text-light'>Intermediate</small>
</div>
</article>
<article className='experience__details'>
<BsPatchCheckFill/>
<div>
<h4>Postman</h4>
<small className='text-light'>Experienced</small>
</div>
</article>
        </div>
      </div>
      </div>
    </section>
  )
}

export default experience