import React from 'react'
import User1 from '../../assets/User1.png'
import User2 from '../../assets/User2.png'
import User3 from '../../assets/User3.png'
import './CustomerFeedback.css'

const CustomerFeedback = () => {
  return (
    <div id="feedbackMain">
      <div id="feedbackHeader">
        <p id="reviewsLabel">REVIEWS</p>
        <h2 id="feedbackTitle">Hear Our Guests</h2>
      </div>

      <div id="feedbackGrid">
        <div className="feedbackCard">
          <div className="userInfo">
            <img src={User1} alt="Anna Mathew" className="userAvatar" />
            <div className="userDetails">
              <h4 className="userName">Anna Mathew</h4>
              <p className="reviewDate">one day ago</p>
            </div>
          </div>
          <div className="starRating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          <p className="reviewText">
            Bavette delivers an unforgettable steak experience! The food, service, and ambiance 
            are second to none. We will definitely be coming back. We booked private dining for our
          </p>
        </div>

        <div className="feedbackCard">
          <div className="userInfo">
            <img src={User2} alt="Gerrin Tom" className="userAvatar" />
            <div className="userDetails">
              <h4 className="userName">Gerrin Tom</h4>
              <p className="reviewDate">one day ago</p>
            </div>
          </div>
          <div className="starRating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          <p className="reviewText">
            We booked private dining for our anniversary, and everything was perfect. The steak was melt-in-your-mouth 
            delicious, and the staff was amazing!
          </p>
        </div>

        <div className="feedbackCard">
          <div className="userInfo">
            <img src={User3} alt="Mary Elza" className="userAvatar" />
            <div className="userDetails">
              <h4 className="userName">Mary Elza</h4>
              <p className="reviewDate">one day ago</p>
            </div>
          </div>
          <div className="starRating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          <p className="reviewText">
            Best steak I've ever had! The quality of the meat was outstanding, and the truffle fries were to die 
            for. Highly recommend!
          </p>
        </div>
      </div>

      <div id="feedbackNavigation">
        <button className="navBtn" id="prevBtn">
          <span>←</span>
        </button>
        <button className="navBtn" id="nextBtn">
          <span>→</span>
        </button>
      </div>
    </div>
  )
}

export default CustomerFeedback