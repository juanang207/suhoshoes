import React, { Component } from "react";
import { ReactComponent as Close } from "../../images/close.svg";
import { ReactComponent as Arrow } from "../../images/Arrow.svg";
import Input from "../input/Input";
import ButtonItem from "../button-item/ButtonItem";
import "./Bag.css";

class Bag extends Component {
  render() {
    const BagItem = (props) => {
      return (
        <div className="bag-item">
          <img
            src={require(`../../images/shoes-img-thumbnail.jpg`)}
            alt={`shoe`}
          />

          <div className="item-details">
            <p className="shoe-name">Continental 80</p>
            <p className="shoe-size">Size: 7.5 (Men's)</p>

            <div className="item-details-price-qty">
              <p>$100.00</p>
              <div className="quantity">
                <p>Qty: 1</p>
                <Arrow width={12} height={7} className="arrow" />
              </div>
            </div>
          </div>

          <Close
            width={12}
            height={12}
            className="close-btn"
            fill="var(--grey300)"
          />
        </div>
      );
    };

    return (
      <div className="bag">
        <h3>Bag</h3>

        <div className="bag-items">
          <BagItem />
        </div>

        <div className="promo-code">
          <Input
            width="323px"
            paddingLeft="10px"
            placeholderText="Enter promo code"
          />
        </div>

        <div className="order-summary">
          <h4>Order Summary</h4>

          <div className="order-details">
            <p>1 Item</p>
            <p className="right-align">$100.00</p>
            <p>Shipping</p>
            <p className="right-align">$5.99</p>
            <p>Sales Tax</p>
            <p className="right-align">-</p>
            <p className="order-total">Total</p>
            <p className="order-total right-align">$105.99</p>
          </div>
        </div>

        <div className="checkout-btns">
          {/* <div>
          <input type="image" alt="Paypal Checkout" src={require(`../../images/Paypal.png`)} className="paypal-btn"/>
          </div> */}
          <button className="paypal-btn">
            <img
              src={require(`../../images/Paypal.png`)}
              alt={`paypal checkout`}
            />
          </button>
          <ButtonItem text="Checkout" />
        </div>
      </div>
    );
  }
}

export default Bag;
