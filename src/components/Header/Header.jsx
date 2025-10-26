import React from 'react'
import './Header.css';
import LocationIcon from '../../assets/LocationPin.png'
import ClockIcon  from '../../assets/clock.png'
import PhoneIcon from '../../assets/Phone.png'
import EmailIcon from '../../assets/Email.png'

const Header = () => {
  return (
    <div id='headerMain'>
      <div id='block1'>
        <div id='textBlock1'>
        <img id='locationLogo' src={LocationIcon} alt="Logo"/>
        <h1 id='text1'>2 Bury Old Road, Manchester, M8 9JN</h1>
      </div>
       <div id='textBlock2'>
        <img id='clockLogo' src={ClockIcon} alt="Logo"/>
        <h1 id='text2'>Mon-Sat 11am - 11:30pm, Sun 12pm - 11pm</h1>
      </div>
      </div>
        <div id='block2'>
        <div id='textBlock3'>
        <img id='phoneLogo' src={PhoneIcon} alt="Logo"/>
        <h1 id='text3'>0161 795 5502</h1>
      </div>
       <div id='textBlock4'>
        <img id='emailLogo' src={EmailIcon} alt="Logo"/>
        <h1 id='text4'>reservations@istanbulrestaurantmanchester.co.uk</h1>
      </div>
      </div>
    </div>
  )
}

export default Header
