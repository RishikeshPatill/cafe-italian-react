import React from 'react'
import ItalianDish from '../../assets/ItalianDish.png'
import Pastry from '../../assets/Pastry.png'
import Coffee from '../../assets/Coffee.png'
import './Menu.css'

const Menu = () => {
  return (
    <div id="menuMain">
      <div id="menuHeader">
        <p id="exploreText">EXPLORE MENU</p>
        <h2 id="menuTitle">Our Menu</h2>
      </div>

      <div id="menuGrid">
        <div className="menuCard">
          <img src={ItalianDish} alt="Italian dishes" />
        </div>

        <div className="menuCard">
          <img src={Pastry} alt="Pastry" />
        </div>

        <div className="menuCard">
          <img src={Coffee} alt="Coffee" />
        </div>
      </div>

      <div id="menuFooter">
        <a href="#menu" id="viewFullMenuBtn">VIEW MENU →</a>
      </div>
    </div>
  )
}

export default Menu