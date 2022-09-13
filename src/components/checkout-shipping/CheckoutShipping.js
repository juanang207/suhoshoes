import React, { Component } from "react";
import "./CheckoutShipping.css";

class CheckoutShipping extends Component {
  render() {

    const CheckoutTab = (props) => {
      return (
        <div className="checkout-tab">
          <div className="circle">{props.step}</div>
          <p>{props.tabName}</p>
        </div>
      )
    } 


    return (
      <div className="checkout-shipping">
        <CheckoutTab tabName="Shipping" step="1"/>
        <CheckoutTab tabName="Payment" step="2"/>
        <CheckoutTab tabName="Review" step="3"/>
      </div>
    );
  }
}

export default CheckoutShipping;