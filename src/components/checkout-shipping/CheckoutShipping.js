import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonItem from "../button-item/ButtonItem";
import CheckoutTabs from "../checkout-tabs/CheckoutTabs";
import FormField from "../form-field/FormField";
import "./CheckoutShipping.css";

function CheckoutShipping() {
  const [shippingOptions, setShippingOptions] = useState([
    {
      isSelected: true,
      name: "USPS Ground",
      price: 5.99,
      time: "5-7 Business Days",
    },
    {
      isSelected: false,
      name: "USPS Priority",
      price: 10.99,
      time: "1-3 Business Days",
    },
  ]);
  const [emailInput, setEmailInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [zipcodeInput, setZipcodeInput] = useState("");

  let navigate = useNavigate();
  const goToCheckoutPayment = (e) => {
    e.preventDefault();
    navigate(`/checkout-payment`, {
      state: {
        shippingInputs: {
          emailInput,
          firstNameInput,
          lastNameInput,
          addressInput,
          cityInput,
          stateInput,
          zipcodeInput,
          shippingInput,
        },
      },
    });
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
            value="option1"
            checked={props.shippingOption.isSelected}
            onChange={() => props.toggleOptions(props.index)}
          />
          {props.shippingOption.name} {props.shippingOption.time} - $
          {props.shippingOption.price}
        </label>
      </div>
    );
  };

  const toggleOptions = (index) => {
    const updatedShippingOptions = shippingOptions.map((shippingOption, i) => {
      if (i === index) {
        shippingOption.isSelected = !shippingOption.isSelected;
      } else {
        shippingOption.isSelected = false;
      }
      return shippingOption;
    });

    setShippingOptions(updatedShippingOptions);
  };

  const setEmailInputHelper = (e) => {
    setEmailInput(e.target.value);
  };

  const setFirstNameInputHelper = (e) => {
    setFirstNameInput(e.target.value);
  };

  const setLastNameInputHelper = (e) => {
    setLastNameInput(e.target.value);
  };

  const setAddressInputHelper = (e) => {
    setAddressInput(e.target.value);
  };

  const setCityInputHelper = (e) => {
    setCityInput(e.target.value);
  };

  const setStateInputHelper = (e) => {
    setStateInput(e.target.value);
  };

  const setZipcodeInputHelper = (e) => {
    setZipcodeInput(e.target.value);
  };

  let shippingInput = shippingOptions.find(
    (option) => option.isSelected === true
  );

  return (
    <div className="checkout-shipping">
      <CheckoutTabs page="Shipping" />

      <div className="shipping-form">
        <form id="shippingForm" onSubmit={goToCheckoutPayment}>
          <h3>Contact</h3>

          <FormField
            labelName="Email"
            width="323px"
            setInput={setEmailInputHelper}
            type="email"
          />

          <h3>Shipping Address</h3>

          <FormField
            labelName="First Name"
            width="323px"
            setInput={setFirstNameInputHelper}
          />
          <FormField
            labelName="Last Name"
            width="323px"
            setInput={setLastNameInputHelper}
          />
          <FormField
            labelName="Address"
            width="323px"
            setInput={setAddressInputHelper}
          />

          <div className="address-details">
            <FormField
              labelName="City"
              width="132px"
              setInput={setCityInputHelper}
            />
            <FormField
              labelName="State"
              width="47px"
              setInput={setStateInputHelper}
            />
            <FormField
              labelName="Zipcode"
              width="99px"
              setInput={setZipcodeInputHelper}
            />
          </div>

          <h3>Delivery</h3>

          <div className="delivery-options">
            {shippingOptions.map((shippingOption, i) => (
              <DeliveryOption
                shippingOption={shippingOption}
                index={i}
                toggleOptions={toggleOptions}
                key={i}
              />
            ))}
          </div>

          <div className="payment-btn">
            <ButtonItem text="proceed to payment" form="shippingForm" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutShipping;
