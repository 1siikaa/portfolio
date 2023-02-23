import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Experience from './components/experience/experience'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'



const App = () => {
  return (
    <>
    <Header/>
    <Nav />
    <About/>
    <Projects />
    <Experience/>
    <Contact />
    <Footer />
    </>
  )
}

export default App