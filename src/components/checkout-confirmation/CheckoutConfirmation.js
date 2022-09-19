import React, { Component } from "react";
import { withRouter } from "../../withRouter";
import { ReactComponent as Truck } from "../../images/truck.svg";
import ButtonItem from "../button-item/ButtonItem";
import "./CheckoutConfirmation.css";

class CheckoutConfirmation extends Component {

  constructor() {
    super();
    this.goToHome = this.goToHome.bind(this);
  }

  goToHome = () => {
    this.props.navigate(`/`);
  };

  render() {
    return (
      <div className="checkout-confirmation">
        <div className="confirmation-box">
          <div className="confirmation-details">
            <p className="order-number">Order #000-4421 confirmed</p>
            <h4>
              Hi John, <br />
              thank you for your order!
            </h4>
            <p className="confirmation-email">
              The order confirmation has been sent to your email.
            </p>

            <div className="delivery-date">
              <Truck width={20} height={16} className="truck" />
              <p>Est. Delivery Date: Sept 3</p>
            </div>
          </div>
        </div>

        <div className="continue-shopping-btn">
        <ButtonItem text="Continue Shopping" onClick={this.goToHome}/>
        </div>
      </div>
    );
  }
}

export default withRouter(CheckoutConfirmation);
