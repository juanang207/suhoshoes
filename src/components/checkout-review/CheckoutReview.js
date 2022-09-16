import React, { Component } from "react";
import { Link } from "react-router-dom";
import ButtonItem from "../button-item/ButtonItem";
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
            <div className="payment-edit-btn">
              <Link to="/checkout-payment" className="link-btn">
                Edit
              </Link>
            </div>
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
            <div className="edit-shipping-btn">
              <Link to="/checkout-shipping" className="link-btn">
                Edit
              </Link>
            </div>
            <div className="shipping-address">
              <p>John Doe</p>
              <p>123 Forest Dr</p>
              <p>New York, NY 10003</p>
            </div>
          </div>
        </div>

        <div className="order-summary-box">
          <div className="order-summary-info">
            <h4>Order Summary</h4>

            <div className="order-summary-details">
              <p>Subtotal</p>
              <p className="right-align">$100.00</p>
              <p>Shipping (USPS Ground)</p>
              <p className="right-align">$5.99</p>
              <p>Sales Tax</p>
              <p className="right-align">-</p>
              <p className="order-total">Total</p>
              <p className="order-total right-align">{`$105.99`}</p>
            </div>
          </div>
        </div>

        <div className="place-order-btn">
        <ButtonItem text="Place Order"/>
        </div>

      </div>
    );
  }
}

export default CheckoutReview;
