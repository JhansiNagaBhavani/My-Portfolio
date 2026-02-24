import React from 'react'
import './home.css' 
import { ImGithub } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io5";
import { TbBrandGoogleDrive } from "react-icons/tb";

function Home() {
  return (
    <div className='home' id='home'>
        <div className="left">
            <h3>Hi, I'm</h3>
            <h1>JHANSI NAGA BHAVANI KODURI</h1>
            <h2>Front End Developer</h2>
            <div className="Social-media">
                <li><a href='https://github.com/JhansiNagaBhavani'><ImGithub /></a></li>
                <li><a href='https://www.linkedin.com/in/jhansi-koduri-28456b35b/'><IoLogoLinkedin /></a></li>
                <li><a href='https://drive.google.com/file/d/1HapQn5GSZbL8Lq35ZVMQo1EwR8HvlyuV/view'><TbBrandGoogleDrive /></a></li>
            </div>
        </div>
        <div className="right">
            <div className="profile-card">
                <div className="circle"></div>
            </div>
        </div>
    </div>
  )
}

export default Home