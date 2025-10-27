import React from 'react'
import Photo1 from '../../assets/Photo1.png'
import Photo2 from '../../assets/Photo2.png'
import Photo3 from '../../assets/Photo3.png'
import Photo4 from '../../assets/Photo4.png'
import Photo5 from '../../assets/Photo5.png'
import Photo6 from '../../assets/Photo6.png'
import Photo7 from '../../assets/Photo7.png'
import Photo8 from '../../assets/Photo8.png'
import './FollowUs.css'

const FollowUs = () => {
  return (
    <div id="followUsMain">
      <div id="followUsHeader">
        <div id="galleryInfo">
          <p id="galleryLabel">GALLERY</p>
          <h2 id="galleryTitle">follow us</h2>
        </div>
        <a href="#instagram" id="instagramBtn">
          <span className="instaIcon">📷</span>
          CHECK OUT OUR INSTAGRAM
        </a>
      </div>

      <div id="galleryGrid">
        <div className="galleryItem">
          <img src={Photo1} alt="Gallery 1" />
        </div>
        <div className="galleryItem">
          <img src={Photo2} alt="Gallery 2" />
        </div>
        <div className="galleryItem">
          <img src={Photo3} alt="Gallery 3" />
        </div>
        <div className="galleryItem">
          <img src={Photo4} alt="Gallery 4" />
        </div>
        <div className="galleryItem">
          <img src={Photo5} alt="Gallery 5" />
        </div>
        <div className="galleryItem">
          <img src={Photo6} alt="Gallery 6" />
        </div>
        <div className="galleryItem">
          <img src={Photo7} alt="Gallery 7" />
        </div>
        <div className="galleryItem">
          <img src={Photo8} alt="Gallery 8" />
        </div>
      </div>
    </div>
  )
}

export default FollowUs