import React from 'react'
import FoodImage from '../../assets/Food.png'
import DrinksImage from '../../assets/Drinks.png'
import AtmosphereImage from '../../assets/Atmosphere.png'
import './Service.css'

const Service = () => {
  return (
    <div id="serviceMain">
      <div id="serviceHeader">
        <p id="weOfferText">WE OFFER</p>
        <h2 id="serviceTitle">
          Unforgettable<br />
          Dining <span id="serviceHighlight">Experience</span>
        </h2>
      </div>

      <div id="serviceGrid">
        <div className="serviceCard">
          <img src={FoodImage} alt="Food" />
        </div>

        <div className="serviceCard">
          <img src={DrinksImage} alt="Drinks" />
        </div>

        <div className="serviceCard serviceCardWide">
          <img src={AtmosphereImage} alt="Atmosphere" />
        </div>
      </div>
    </div>
  )
}

export default Service