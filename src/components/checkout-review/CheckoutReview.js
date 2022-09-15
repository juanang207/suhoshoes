import React, { Component } from "react";
import CheckoutTabs from "../checkout-tabs/CheckoutTabs";
import "./CheckoutReview.css";

class CheckoutReview extends Component {
  render() {
    return (
      <div className="checkout-review">
        <CheckoutTabs page="Review" completed={["Shipping", "Payment"]} />
        <h3>Review Order</h3>
      </div>
    );
  }
}

export default CheckoutReview;
