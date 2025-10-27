import React from 'react'
import ContactUsBg from '../../assets/ContactUsBg.png'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div id="contactUsMain" style={{backgroundImage: `url(${ContactUsBg})`}}>
      <div id="contactUsHeader">
        <p id="connectLabel">CONNECT WITH US</p>
        <h2 id="contactUsTitle">Contact Us</h2>
      </div>

      <div id="contactUsGrid">
        <div className="contactCard">
          <h3 className="contactCardTitle">BOOKING REQUEST</h3>
          <p className="contactCardContent">0161 795 5502</p>
        </div>

        <div className="contactCard">
          <h3 className="contactCardTitle">LOCATION</h3>
          <p className="contactCardContent">
            2 Bury Old Road,<br />
            Manchester, M8 9JN
          </p>
        </div>

        <div className="contactCard">
          <h3 className="contactCardTitle">OPENING HOURS</h3>
          <p className="contactCardContent">
            Monday to Saturday<br />
            11:00am - 11:30pm<br />
            Sunday 12:00pm - 11:00pm
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs