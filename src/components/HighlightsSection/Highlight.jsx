import React from 'react'
import Dish1 from '../../assets/Dish1.png'
import Dish2 from '../../assets/Dish2.png'
import Dish3 from '../../assets/Dish3.png'
import Dish4 from '../../assets/Dish4.png'
import './Highlight.css'

const Highlight = () => {
  return (
    <div id="highlightMain">
      <div id="highlightHeader">
        <p id="topPicksText">OUR TOP PICKS THIS MONTH</p>
        <h2 id="highlightTitle">
          Monthly <span id="highlightHighlight">Highlights</span>
        </h2>
      </div>

      <div id="highlightGrid">
        <div className="highlightCard">
          <img src={Dish1} alt="Adana Kebab" />
          <h3 className="dishName">Adana Kebab</h3>
          <p className="dishPrice">€ 120</p>
        </div>

        <div className="highlightCard">
          <img src={Dish2} alt="Meze Platter" />
          <h3 className="dishName">Meze Platter</h3>
          <p className="dishPrice">€ 120</p>
        </div>

        <div className="highlightCard">
          <img src={Dish3} alt="Baklava" />
          <h3 className="dishName">Baklava</h3>
          <p className="dishPrice">€ 120</p>
        </div>

        <div className="highlightCard">
          <img src={Dish4} alt="Kebab Platter" />
          <h3 className="dishName">Kebab Platter</h3>
          <p className="dishPrice">€ 120</p>
        </div>
      </div>
    </div>
  )
}

export default Highlight