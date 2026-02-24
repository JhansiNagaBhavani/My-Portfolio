import React from 'react'
import Header from './headers/header'
import Home from './headers/home'
import Education from './headers/Education'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Achivement from './pages/Achivement'
import Softskills from './pages/Softskills'
import Contact from './headers/Contact'
function App() {
  return (
    <div>
      <Header/>
    <Home/>
    <Education/>
    <Skills/>
    <Project/>
    <Achivement/>
    <Softskills/>
    <Contact/>
    </div>
  )
}

export default App