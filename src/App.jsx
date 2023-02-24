import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Experience from './components/experience/experience'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



const App = () => {
  return (
    <>
   
    
   <Nav />
    <Router>
      
    <Routes>
      <Route path='/' element={<Header />}/>
        
        
        <Route exact path='/about' element={<About/>}/>
         
          
          <Route exact path='/projects' element={<Projects />}/>
          
          
          <Route exact path='/experience' element={ <Experience/>}/>
         
          
          <Route exact path='/contact' element= {<Contact />} />
          
          
    </Routes>
    </Router>
  <Footer/>
  </>
    

  )
}

export default App