import React, { Component } from "react";
import ButtonItem from "../button-item/ButtonItem";
import InputField from "../input-field/InputField";
import "./CheckoutShipping.css";

class CheckoutShipping extends Component {
  constructor() {
    super();
    this.state = {
      shippingOptions: [
        { isSelected: true, name: "USPS Ground 5-7 Business Days - $5.99" },
        { isSelected: false, name: "USPS Priority 1-3 Business Days - $10.99" },
      ],
    };
  }

  render() {
    const CheckoutTab = (props) => {
      return (
        <div className={`checkout-tab ${props.tabType ? props.tabType : ""}`}>
          <div className={`circle`}>{props.step}</div>
          <p>{props.tabName}</p>
        </div>
      );
    };

    const FormField = (props) => {
      return (
        <div className="shipping-form-field">
          <label>
            {props.labelName}
            <InputField width={props.width} paddingLeft="10px" />
          </label>
        </div>
      );
    };

    const DeliveryOption = (props) => {
      return (
        <div className="delivery-option">
          <label
            style={{
              border: props.shippingOption.isSelected
                ? "2px solid var(--secondary1)"
                : "",
            }}
          >
            <input
              type="radio"
              name="react-tips"
              value="option1"
              checked={props.shippingOption.isSelected}
              className="form-check-input"
              onChange={() => props.toggleOptions(props.index)}
            />
            {props.shippingOption.name}
          </label>
        </div>
      );
    };

    const toggleOptions = (index) => {
      const { shippingOptions } = this.state;

      const updatedShippingOptions = shippingOptions.map(
        (shippingOption, i) => {
          if (i === index) {
            shippingOption.isSelected = !shippingOption.isSelected;
          } else {
            shippingOption.isSelected = false;
          }
          return shippingOption;
        }
      );

      this.setState({ shippingOptions: updatedShippingOptions });
    };

    return (
      <div className="checkout-shipping">
        <div className="checkout-tabs">
          <CheckoutTab tabName="Shipping" step="1" />
          <div className="separator"></div>
          <CheckoutTab tabName="Payment" step="2" tabType="disabled"/>
          <div className="separator"></div>
          <CheckoutTab tabName="Review" step="3" tabType="disabled"/>
        </div>

        <hr />

        <div className="shipping-form">
          <h3>Contact</h3>

          <FormField labelName="Email" width="323px" />

          <h3>Shipping Address</h3>

          <FormField labelName="First Name" width="323px" />
          <FormField labelName="Last Name" width="323px" />
          <FormField labelName="Address" width="323px" />

          <div className="address-details">
            <FormField labelName="City" width="132px" />
            <FormField labelName="State" width="47px" />
            <FormField labelName="Zipcode" width="99px" />
          </div>

          <h3>Delivery</h3>

          <div className="delivery-options">
            {this.state.shippingOptions.map((shippingOption, i) => (
              <DeliveryOption
                shippingOption={shippingOption}
                index={i}
                toggleOptions={toggleOptions}
                key={i}
              />
            ))}
          </div>
        </div>

        <div className="payment-btn">
          <ButtonItem text="proceed to payment" />
        </div>
      </div>
    );
  }
}

export default CheckoutShipping;
