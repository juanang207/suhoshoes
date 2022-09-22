import React, { Component } from "react";
import { withRouter } from "../../withRouter";
import ButtonItem from "../button-item/ButtonItem";
import CheckoutTabs from "../checkout-tabs/CheckoutTabs";
import FormField from "../form-field/FormField";
import "./CheckoutShipping.css";

class CheckoutShipping extends Component {
  constructor() {
    super();
    this.goToCheckoutPayment = this.goToCheckoutPayment.bind(this);
    this.state = {
      shippingOptions: [
        { isSelected: true, name: "USPS Ground 5-7 Business Days - $5.99" },
        { isSelected: false, name: "USPS Priority 1-3 Business Days - $10.99" },
      ],
      emailInput : ""
    };
  }

  goToCheckoutPayment = () => {
    this.props.navigate(`/checkout-payment`, {state:{id:1,name:'sabaoon'}});
  };

  render() {
  
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
              value="option1"
              checked={props.shippingOption.isSelected}
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

    const setEmailInput = (e) => {
      this.setState({emailInput : e.target.value});
    }

    return (
      <div className="checkout-shipping">
        <CheckoutTabs page="Shipping"/>

        <div className="shipping-form">
          <h3>Contact</h3>

          <FormField labelName="Email" width="323px" setInput={setEmailInput}/>

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
          <ButtonItem
            text="proceed to payment"
            onClick={this.goToCheckoutPayment}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(CheckoutShipping);
