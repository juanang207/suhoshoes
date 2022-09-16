import React, { Component } from "react";
import { ReactComponent as Truck } from "../../images/truck.svg";
import "./CheckoutConfirmation.css";

class CheckoutConfirmation extends Component {
  render() {
    return (
      <div className="checkout-confirmation">
        <div className="confirmation-box">

          <div className="confirmation-details">
          <p className="order-number">Order #000-4421 confirmed</p>
          <h4>Hi John, <br/>
          thank you for your order!</h4>
          <p className="confirmation-email">The order confirmation has been sent to your email.</p>

          <div className="delivery-date">
            <Truck width={20} height={16} className="truck" />
            <p>Est. Delivery Date: Sept 3</p>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutConfirmation;
