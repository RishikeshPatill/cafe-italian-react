import React from 'react'
import CafeLogo from '../../assets/CafeLogo.png'
import './FooterSection.css'

const FooterSection = () => {
  return (
    <footer id="footerMain">
      <div id="footerContent">
        <div id="footerLogo">
          <img src={CafeLogo} alt="Cafe Italia Logo" />
        </div>

        <nav id="footerNav">
          <a href="#home" className="footerLink">HOME</a>
          <a href="#menu" className="footerLink">MENU</a>
          <a href="#about" className="footerLink">ABOUT</a>
          <a href="#contact" className="footerLink">CONTACT</a>
        </nav>

        <div id="footerSocials">
          <a href="#instagram" className="socialIcon" aria-label="Instagram">
            <span>I</span>
          </a>
          <a href="#google" className="socialIcon" aria-label="Google">
            <span>G</span>
          </a>
          <a href="#facebook" className="socialIcon" aria-label="Facebook">
            <span>F</span>
          </a>
        </div>
      </div>

      <div id="footerBottom">
        <p id="footerCopyright">
          © 2024 Istanbul Restaurant Manchester. All Rights Reserved | Powered By Foodo
        </p>
      </div>
    </footer>
  )
}

export default FooterSection