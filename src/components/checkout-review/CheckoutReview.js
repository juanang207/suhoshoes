import React, { Component } from "react";
import CheckoutTabs from "../checkout-tabs/CheckoutTabs";
import "./CheckoutReview.css";

class CheckoutReview extends Component {
  render() {
    const OrderItem = (props) => {
      return (
        <div className="order-item">
          <img
            src={require(`../../images/shoes-img-thumbnail-sm.png`)}
            alt={`order-item`}
          />
          <div className="order-item-details">
            <h5>Continental 80</h5>
            <p>Size: 7.5 (Men's)</p>
          </div>
          <div className="order-item-quantity">
            <p>Qty: 1</p>
          </div>
        </div>
      );
    };

    return (
      <div className="checkout-review">
        <CheckoutTabs page="Review" completed={["Shipping", "Payment"]} />
        <h3>Review Order</h3>

        <div className="order-items-box">
          <div className="order-items">
            <h4>Order Item(s)</h4>
            <OrderItem />
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutReview;
