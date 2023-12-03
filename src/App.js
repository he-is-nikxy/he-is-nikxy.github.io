import React from 'react'
import Navbar from './components/Navbar'
import AllRoutes from './components/AllRoutes'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import PageNotFound from './components/PageNotFound'
import { Route, Routes } from 'react-router-dom'
import Projects from './components/Projects'

const App = () => {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Resume />
      {/* <AllRoutes /> */}
      {/* <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes> */}
    </div>
  )
}

export default App