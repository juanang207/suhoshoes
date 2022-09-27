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
  const [firstNameInput, setFirstNameInput] = useState({inputVal: "", error: false});
  const [lastNameInput, setLastNameInput] = useState({inputVal: "", error: false});
  const [addressInput, setAddressInput] = useState({inputVal: "", error: false});
  const [cityInput, setCityInput] = useState({inputVal: "", error: false});
  const [stateInput, setStateInput] = useState({inputVal: "", error: false});
  const [zipcodeInput, setZipcodeInput] = useState({inputVal: "", error: false});

  let navigate = useNavigate();
  const goToCheckoutPayment = (e) => {
    e.preventDefault();
    let valid = handleValidation();
    valid ? navigate(`/checkout-payment`, {
      state: {
        shippingInputs: {
          emailInput,
          firstNameInput,
          lastNameInput,
          addressInput,
          cityInput,
          stateInput,
          zipcodeInput,
          shippingInput
        },
      },
    }) : console.log("error");
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
    firstNameInput.inputVal = e.target.value;
    setFirstNameInput({...firstNameInput});
  };

  const setLastNameInputHelper = (e) => {
    lastNameInput.inputVal = e.target.value;
    setLastNameInput({...lastNameInput});
  };

  const setAddressInputHelper = (e) => {
    addressInput.inputVal = e.target.value;
    setAddressInput({...addressInput});
  };

  const setCityInputHelper = (e) => {
    cityInput.inputVal = e.target.value;
    setCityInput({...cityInput});
  };

  const setStateInputHelper = (e) => {
    stateInput.inputVal = e.target.value;
    setStateInput({...stateInput});
  };

  const setZipcodeInputHelper = (e) => {
    zipcodeInput.inputVal = e.target.value;
    setZipcodeInput({...zipcodeInput});
  };

  let shippingInput = shippingOptions.find(
    (option) => option.isSelected === true
  );

  const handleValidation = () => {

    let valid = true;
    if (!firstNameInput.inputVal.match(/^[a-z ,.'-]+$/i)) {
      console.log("does not match")
      firstNameInput.error = true;
      setFirstNameInput({...firstNameInput});
      valid = false;
    } 
    if (!lastNameInput.inputVal.match(/^[a-z ,.'-]+$/i)) {
      console.log("does not match")
      lastNameInput.error = true;
      setLastNameInput({...lastNameInput});
      valid = false;
    }
    if (addressInput.inputVal.match(/[!@$%^&*,?":{}|<>]/)) {
      console.log("does not match")
      addressInput.error = true;
      setAddressInput({...addressInput});
      valid = false;
    }
    if (!cityInput.inputVal.match(/^[a-z ,.'-]+$/i)) {
      console.log("does not match")
      cityInput.error = true;
      setCityInput({...cityInput});
      valid = false;
    }
    if (!stateInput.inputVal.match(/^[a-z]{2}$/i)) {
      console.log("does not match")
      stateInput.error = true;
      setStateInput({...stateInput});
      valid = false;
    }
    if (!zipcodeInput.inputVal.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)) {
      console.log("does not match")
      zipcodeInput.error = true;
      setZipcodeInput({...zipcodeInput});
      valid = false;
    }


    return valid;
    
  }

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
            error={firstNameInput.error}
          />
          <FormField
            labelName="Last Name"
            width="323px"
            setInput={setLastNameInputHelper}
            error={lastNameInput.error}
          />
          <FormField
            labelName="Address"
            width="323px"
            setInput={setAddressInputHelper}
            error={addressInput.error}
          />

          <div className="address-details">
            <FormField
              labelName="City"
              width="132px"
              setInput={setCityInputHelper}
              error={cityInput.error}
            />
            <FormField
              labelName="State"
              width="47px"
              setInput={setStateInputHelper}
              error={stateInput.error}
            />
            <FormField
              labelName="Zipcode"
              width="99px"
              setInput={setZipcodeInputHelper}
              error={zipcodeInput.error}
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
