import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App