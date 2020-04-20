import React from 'react';

function Seller() {
  return (
    <div id="seller-service-container">
      <div className="shipping-wrapper">
        <div className="ready-to-ship">
          Ready to ship in
          <span className="ready-to-ship-time">3-5 business days</span>
        </div>
        <div className="ship-from">
          From
          <span className="ship-from-location">United States</span>
        </div>
      </div>
      <div className="cost-to-ship">
          Cost to ship
          <span className="cost-to-ship-amount">Free</span>
      </div>
      <button>Deliver to United States</button>

      <button>FAQs</button>
      <span className="meet-seller">Meet your seller</span>

      <div className="user-profile">
        <img alt="gail93" src="https://i.picsum.photos/id/59/75/75.jpg"></img>
        <div className="user-info">
          <div className="username">Clare Vacha</div>
          <div className="username-owner">Owner of <a>ClareVacha</a></div>
        </div>
      </div>

      <button className="message-username">Message Clare</button>
    </div>
  )
}

export default Seller;