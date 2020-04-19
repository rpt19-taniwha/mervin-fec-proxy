import React from 'react';

function Seller() {
  return (
    <div className="seller-service-container">
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
      </div>
  )
}

export default Seller;