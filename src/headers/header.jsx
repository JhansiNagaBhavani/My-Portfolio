import React from 'react'
import './header.css'

function Header() {
  return (
    <div>
     <nav>
      <div className='logo'>JHANSI</div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Technical Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achivement">Achivement</a></li>
        <li><a href="#softskills">Soft Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button onClick={() => window.location.href='#contact'}>Hire me</button>
     </nav>
    </div>
  )
}

export default Header