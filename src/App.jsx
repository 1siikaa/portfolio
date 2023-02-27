import React from 'react'
import Header from './components/header/header'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Experience from './components/experience/experience'
import Contact from './components/contact/contact'
import Certificates from './components/certificates/certificates'





const App = () => {
  return (
    <>
   <Header />
        <About/>
          <Projects />
          <Experience/>
          <Certificates/>
          <Contact />

  </>
    

  )
}

export default App