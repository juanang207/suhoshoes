import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonItem from "../button-item/ButtonItem";
import CheckoutTabs from "../checkout-tabs/CheckoutTabs";
import "./CheckoutReview.css";

function CheckoutReview() {
  let navigate = useNavigate();
  const goToCheckoutConfirmation = () => {
    navigate(`/checkout-confirmation`);
  };

  let bagItems = JSON.parse(localStorage.getItem("bagItems"));
  let subtotal = JSON.parse(localStorage.getItem("subtotal"));

  const OrderItem = (props) => {
    const { shoe } = props;

    return (
      <div className="order-item">
        <img src={shoe.image} alt={`${shoe.name} order-item`} />
        <div className="order-item-details">
          <h5>{shoe.name} </h5>
          <p>Size: {shoe.size}</p>
        </div>
        <div className="order-item-quantity">
          <p>Qty: {shoe.qty}</p>
        </div>
      </div>
    );
  };

  // clean up the data from bag items array objects
  const getOrderItemDetails = () => {
    const orderItems = bagItems;
    orderItems.map((shoe) => {
      delete shoe.description;
      delete shoe.sizes;
      delete shoe.silhoutte;
      delete shoe.releaseDate;
      delete shoe.path;

      return shoe;
    });

    return orderItems;
  };

  const order = {
    email: "johndoe@gmail.com",
    firstName: "john",
    lastName: "doe",
    address: "123 12th st",
    city: "NYC",
    state: "NY",
    zipcode: "12345",
    deliveryOption: "USPS Ground",
    payment: "Credit Card",
    orderItems: getOrderItemDetails(),
  };

  const placeOrder = async () => {
    localStorage.removeItem("bagItems");
    localStorage.removeItem("subtotal");

    await axios.post("http://localhost:4000/order", order).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    goToCheckoutConfirmation();
  };

  return (
    <div className="checkout-review">
      <CheckoutTabs page="Review" completed={["Shipping", "Payment"]} />
      <h3>Review Order</h3>

      <div className="order-items-box">
        <div className="order-items">
          <h4>Order Item(s)</h4>
          {bagItems.map((shoe, i) => {
            return <OrderItem key={i} shoe={shoe} />;
          })}
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
            <p className="right-align">${subtotal.toFixed(2)}</p>
            <p>Shipping (USPS Ground)</p>
            <p className="right-align">$5.99</p>
            <p>Sales Tax</p>
            <p className="right-align">-</p>
            <p className="order-total">Total</p>
            <p className="order-total right-align">
              ${(subtotal + 5.99).toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="place-order-btn">
        <ButtonItem text="Place Order" onClick={placeOrder} />
      </div>
    </div>
  );
}

export default CheckoutReview;
