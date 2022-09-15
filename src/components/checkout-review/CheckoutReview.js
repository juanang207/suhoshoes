import React, { Component } from "react";
import { Link } from "react-router-dom";
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

        <div className="payment-box">
          <div className="payment-info">
            <h4>Payment</h4>
            <Link to="/checkout-payment" className="edit-btn">
              Edit
            </Link>
            <div className="card-number">
              <img src={require(`../../images/visa.png`)} alt={`visa`} />
              <p>**** 2222</p>
            </div>
            <div className="credit-exp-date">
              <p>02/27</p>
            </div>
          </div>
        </div>

        <div className="shipping-address-box">
          <div className="shipping-address-info">
            <h4>Shipping Address</h4>
            <Link to="/checkout-shipping" className="edit-shipping-btn">
              Edit
            </Link>
            <div className="shipping-address">
              <p>John Doe</p>
              <p>123 Forest Dr</p>
              <p>New York, NY 10003</p>
            </div>
          </div>
        </div>


        
      </div>
    );
  }
}

export default CheckoutReview;
