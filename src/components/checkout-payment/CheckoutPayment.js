import React, { Component } from "react";
import CheckoutTabs from "../checkout-tabs/CheckoutTabs";
import "./CheckoutPayment.css";

class CheckoutPayment extends Component {
  render() {
    return (
      <div className="checkout-payment">
        <CheckoutTabs page="Payment" completed={["Shipping"]}/>
      </div>
    );
  }
}

export default CheckoutPayment;
