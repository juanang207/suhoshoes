import React, { Component } from "react";
import ButtonItem from "../button-item/ButtonItem";
import CheckoutTabs from "../checkout-tabs/CheckoutTabs";
import FormField from "../form-field/FormField";
import "./CheckoutPayment.css";

class CheckoutPayment extends Component {
  constructor() {
    super();
    this.state = {
      paymentOptions: [
        { isSelected: true, name: "Credit Card" },
        { isSelected: false, name: "Gift Card" },
      ],
    };
  }

  render() {
    const PaymentOption = (props) => {
      return (
        <div className="payment-option">
          <label>
            <input
              type="radio"
              value="option1"
              checked={props.paymentOption.isSelected}
              onChange={() => props.toggleOptions(props.index)}
            />
            {props.paymentOption.name}
            {props.paymentOption.name === "Credit Card" ? (
              <div className="creditcard-images">
                <img src={require(`../../images/visa.png`)} alt={`visa`} />
                <img
                  src={require(`../../images/mastercard.png`)}
                  alt={`mastercard`}
                />
              </div>
            ) : (
              ""
            )}
          </label>
        </div>
      );
    };

    const toggleOptions = (index) => {
      const { paymentOptions } = this.state;

      const updatedPaymentOptions = paymentOptions.map((paymentOption, i) => {
        if (i === index) {
          paymentOption.isSelected = !paymentOption.isSelected;
        } else {
          paymentOption.isSelected = false;
        }
        return paymentOption;
      });

      this.setState({ paymentOptions: updatedPaymentOptions });
    };

    return (
      <div className="checkout-payment">
        <CheckoutTabs page="Payment" completed={["Shipping"]} />

        <div className="payment-form">
          <h3>Payment Method</h3>

          <div className="payment-options">
            {this.state.paymentOptions.map((paymentOption, i) => (
              <PaymentOption
                paymentOption={paymentOption}
                index={i}
                toggleOptions={toggleOptions}
                key={i}
              />
            ))}
          </div>

          <div className="creditcard-form">
            <FormField labelName="Cardholder Full Name" width="323px" />
            <FormField
              labelName="Card Number"
              width="323px"
              boxType="credit-card"
            />
            <div className="creditcard-details">
              <FormField labelName="Expiration Date" width="150.5px" />
              <FormField
                labelName="Security Code"
                width="150.5px"
                boxType="credit-card"
              />
            </div>

            <div className="billing-address">
              <input type="checkbox" id="check-input" />

              <label for="check-input">
                My billing address is the same as my shipping address.
              </label>
            </div>
          </div>

          <div className="review-order-btn">
            <ButtonItem text="Review Order" />
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutPayment;
