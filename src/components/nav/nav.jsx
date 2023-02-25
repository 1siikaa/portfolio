import React from 'react'
import './nav.css'
let role="buthrefn"

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">COFFEE-TALES</a>
      <buthrefn class="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
        <span class="navbar-hrefggler-icon"></span>
      </buthrefn>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auhref mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About~Coffee</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-hrefggle" href="/more" role={role} data-bs-hrefggle= "dropdown">More Of COFFEE</a>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

export default Nav