import React, { Component } from "react";
import CheckoutTabs from "../checkout-tabs/CheckoutTabs";
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

          

        </div>
      </div>
    );
  }
}

export default CheckoutPayment;
