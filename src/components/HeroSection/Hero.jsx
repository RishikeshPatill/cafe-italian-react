import React from 'react'
import HeroVideo from '../../assets/HeroVideo.mp4'
import CafeLogo from '../../assets/CafeLogo.png'
import './Hero.css'  

const Hero = () => {
  return (
    <div id="heroMain">
      <video id="heroVideo" src={HeroVideo} autoPlay loop muted playsInline />
      <div id="overlay"></div>
      <div id="topNav">
      <div id="navLinks">
          <a href="#home">HOME</a>
          <a href="#menu">MENU</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>
        <div id="cafeLogo">
          <img src={CafeLogo} alt="Cafe Italia Logo" />
        </div>
        <div id="bookBtn">BOOK TABLE →</div>
      </div>

      <div id="centerContent">
        <h1 id="welcomeText">Welcome To<br />Cafe Italia</h1>
        <div id="viewMenuBtn">VIEW MENU →</div>
      </div>
    </div>
  )
}

export default Hero