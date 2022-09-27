import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ReactComponent as CardIcon } from "../../images/security-card.svg";
import ButtonItem from "../button-item/ButtonItem";
import CheckoutTabs from "../checkout-tabs/CheckoutTabs";
import "./CheckoutReview.css";

function CheckoutReview() {
  let navigate = useNavigate();
  const goToCheckoutConfirmation = () => {
    navigate(`/checkout-confirmation`);
  };

  const location = useLocation();
  console.log(location.state);

  const { shippingInputs, paymentInputs } = location.state;

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
    email: shippingInputs.emailInput,
    firstName: shippingInputs.firstNameInput,
    lastName: shippingInputs.lastNameInput,
    address: shippingInputs.addressInput,
    city: shippingInputs.cityInput,
    state: shippingInputs.stateInput,
    zipcode: shippingInputs.zipcodeInput,
    deliveryOption: shippingInputs.shippingInput.name,
    payment: paymentInputs.paymentMethodInput,
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

  const displayPayment = () => {
    if (paymentInputs.paymentMethodInput === "Credit Card") {
      return paymentInputs.cardNumberInput.inputVal.slice(-4);
    } else if (paymentInputs.paymentMethodInput === "Gift Card") {
      return paymentInputs.giftCardNumberInput.inputVal.slice(-4);
    }
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
            <CardIcon className="card-icon" fill="var(--grey500)"/>            
            <p>**** {displayPayment()}</p>
          </div>
          <div className="credit-exp-date">
            <p>
              {paymentInputs.expDateInput ? paymentInputs.expDateInput : ""}{" "}
            </p>
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
            <p>
              {shippingInputs.firstNameInput.inputVal} {shippingInputs.lastNameInput.inputVal}{" "}
            </p>
            <p>{shippingInputs.addressInput.inputVal} </p>
            <p>
              {shippingInputs.cityInput.inputVal}, {shippingInputs.stateInput.inputVal}{" "}
              {shippingInputs.zipcodeInput.inputVal}{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="order-summary-box">
        <div className="order-summary-info">
          <h4>Order Summary</h4>

          <div className="order-summary-details">
            <p>Subtotal</p>
            <p className="right-align">${subtotal.toFixed(2)}</p>
            <p>Shipping ({shippingInputs.shippingInput.name})</p>
            <p className="right-align">${shippingInputs.shippingInput.price}</p>
            <p>Sales Tax</p>
            <p className="right-align">-</p>
            <p className="order-total">Total</p>
            <p className="order-total right-align">
              ${(subtotal + shippingInputs.shippingInput.price).toFixed(2)}
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
