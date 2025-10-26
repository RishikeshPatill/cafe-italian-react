import React from 'react'
import BookingImage from '../../assets/BookNow.png'
import './Book.css'

const Book = () => {
  return (
    <div id="bookMain">
      <img id="bookingBgImage" src={BookingImage} alt="Private Dining" />
      <div id="bookOverlay"></div>
      
      <div id="bookContent">
        <p id="bookingLabel">BOOKING</p>
        <h2 id="bookTitle">
          Private &<br />
          Group Dining
        </h2>
        <p id="bookDescription">
          At Bavette, we specialize in creating memorable dining experiences, 
          whether you're seeking an intimate gathering or a grand celebration. 
          Our private and group dining options are designed to meet your 
          unique needs with personalized service, exceptional food, and a 
          welcoming atmosphere.
        </p>
        <a href="#book" id="bookNowBtn">BOOK NOW →</a>
      </div>
    </div>
  )
}

export default Book