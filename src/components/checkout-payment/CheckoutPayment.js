import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonItem from "../button-item/ButtonItem";
import CheckoutTabs from "../checkout-tabs/CheckoutTabs";
import FormField from "../form-field/FormField";
import "./CheckoutPayment.css";

function CheckoutPayment() {
  const [paymentOptions, setPaymentOptions] = useState([
    { isSelected: true, name: "Credit Card" },
    { isSelected: false, name: "Gift Card" },
  ]);

  const [billingCheck, setBillingCheck] = useState(false);
  const [cardNameInput, setCardNameInput] = useState({
    inputVal: "",
    error: false,
  });
  const [cardNumberInput, setCardNumberInput] = useState({
    inputVal: -1,
    error: false,
  });
  const [expDateInput, setExpDateInput] = useState({
    inputVal: "",
    error: false,
  });
  const [securityCodeInput, setSecurityCodeInput] = useState({
    inputVal: -1,
    error: false,
  });
  const [giftCardNumberInput, setGiftCardNumberInput] = useState({
    inputVal: -1,
    error: false,
  });

  const [addressInput, setAddressInput] = useState({
    inputVal: "",
    error: false,
  });
  const [cityInput, setCityInput] = useState({ inputVal: "", error: false });
  const [stateInput, setStateInput] = useState({ inputVal: "", error: false });
  const [zipcodeInput, setZipcodeInput] = useState({
    inputVal: "",
    error: false,
  });

  // get state from previous page (shipping)
  const location = useLocation();
  const shippingInputs = location.state.shippingInputs;

  let navigate = useNavigate();
  const goToCheckoutReview = (e) => {
    e.preventDefault();
    let valid = handleValidation();
    valid
      ? navigate(`/checkout-review`, {
          state: {
            shippingInputs,
            paymentInputs: {
              cardNameInput,
              cardNumberInput,
              expDateInput,
              securityCodeInput,
              paymentMethodInput: paymentMethodInput.name,
              giftCardNumberInput,
              addressInput,
              cityInput,
              stateInput,
              zipcodeInput
            },
          },
        })
      : console.log("error");
  };

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
    const updatedPaymentOptions = paymentOptions.map((paymentOption, i) => {
      if (i === index) {
        paymentOption.isSelected = !paymentOption.isSelected;
      } else {
        paymentOption.isSelected = false;
      }
      return paymentOption;
    });

    setPaymentOptions(updatedPaymentOptions);
  };

  const checkPaymentOptionSelected = (name) => {
    const result = paymentOptions.find((obj) => obj.name === name);
    return result.isSelected;
  };

  const handleBillingChange = (event) => {
    if (event.target.checked) {
      setBillingCheck(true);
    } else {
      setBillingCheck(false);
    }
  };

  const setCardNameInputHelper = (e) => {
    cardNameInput.inputVal = e.target.value;
    setCardNameInput({ ...cardNameInput });

    if (cardNameInput.error) {
      if (cardNameInput.inputVal.match(/^[a-z ,.'-]+$/i)) {
        cardNameInput.error = false;
        setCardNameInput({ ...cardNameInput });
      }
    }
  };

  const setCardNumberInputHelper = (e) => {
    cardNumberInput.inputVal = e.target.value;
    setCardNumberInput({ ...cardNumberInput });

    if (cardNumberInput.error) {
      if (cardNumberInput.inputVal.match(/^\d+$/)) {
        cardNumberInput.error = false;
        setCardNumberInput({ ...cardNumberInput });
      }
    }
  };

  const setExpDateInputHelper = (e) => {
    expDateInput.inputVal = e.target.value;
    setExpDateInput({ ...expDateInput });

    if (expDateInput.error) {
      if (expDateInput.inputVal.match(/^(0[1-9]|1[0-2])\/([1|2][0-9])\d{2}$/)) {
        expDateInput.error = false;
        setExpDateInput({ ...expDateInput });
      }
    }
  };

  const setSecurityCodeInputHelper = (e) => {
    securityCodeInput.inputVal = e.target.value;
    setSecurityCodeInput({ ...securityCodeInput });

    if (expDateInput.error) {
      if (securityCodeInput.inputVal.match(/^\d{3,4}$/)) {
        securityCodeInput.error = false;
        setSecurityCodeInput({ ...securityCodeInput });
      }
    }
  };

  const setGiftCardNumberInputHelper = (e) => {
    giftCardNumberInput.inputVal = e.target.value;
    setGiftCardNumberInput({ ...giftCardNumberInput });

    if (giftCardNumberInput.error) {
      if (giftCardNumberInput.inputVal.match(/^\d+$/)) {
        giftCardNumberInput.error = false;
        setGiftCardNumberInput({ ...giftCardNumberInput });
      }
    }
  };

  const setAddressInputHelper = (e) => {
    addressInput.inputVal = e.target.value;
    setAddressInput({ ...addressInput });

    if (addressInput.error) {
      if (!addressInput.inputVal.match(/[!@$%^&*,?":{}|<>]/)) {
        addressInput.error = false;
        setAddressInput({ ...addressInput });
      }
    }
  };

  const setCityInputHelper = (e) => {
    cityInput.inputVal = e.target.value;
    setCityInput({ ...cityInput });

    if (cityInput.error) {
      if (cityInput.inputVal.match(/^[a-z ,.'-]+$/i)) {
        cityInput.error = false;
        setCityInput({ ...cityInput });
      }
    }
  };

  const setStateInputHelper = (e) => {
    stateInput.inputVal = e.target.value;
    setStateInput({ ...stateInput });

    if (stateInput.error) {
      if (stateInput.inputVal.match(/^[a-z]{2}$/i)) {
        stateInput.error = false;
        setStateInput({ ...stateInput });
      }
    }
  };

  const setZipcodeInputHelper = (e) => {
    zipcodeInput.inputVal = e.target.value;
    setZipcodeInput({ ...zipcodeInput });

    if (zipcodeInput.error) {
      if (zipcodeInput.inputVal.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)) {
        zipcodeInput.error = false;
        setZipcodeInput({ ...zipcodeInput });
      }
    }
  };

  let paymentMethodInput = paymentOptions.find(
    (option) => option.isSelected === true
  );

  const handleValidation = () => {
    let valid = true;

    console.log(paymentMethodInput);

    if (paymentMethodInput.name === "Credit Card") {
      if (!cardNameInput.inputVal.match(/^[a-z ,.'-]+$/i)) {
        console.log("does not match");
        cardNameInput.error = true;
        setCardNameInput({ ...cardNameInput });
        valid = false;
      }

      if (!cardNumberInput.inputVal.match(/^\d+$/)) {
        console.log("does not match");
        cardNumberInput.error = true;
        setCardNumberInput({ ...cardNumberInput });
        valid = false;
      }

      if (
        !expDateInput.inputVal.match(/^(0[1-9]|1[0-2])\/([1|2][0-9])\d{2}$/)
      ) {
        console.log("does not match");
        expDateInput.error = true;
        setExpDateInput({ ...expDateInput });
        valid = false;
      }

      if (!securityCodeInput.inputVal.match(/^\d{3,4}$/)) {
        console.log("does not match");
        securityCodeInput.error = true;
        setSecurityCodeInput({ ...securityCodeInput });
        valid = false;
      }

      if (!billingCheck) {
        if (addressInput.inputVal.match(/[!@$%^&*,?":{}|<>]/)) {
          console.log("does not match");
          addressInput.error = true;
          setAddressInput({ ...addressInput });
          valid = false;
        }
        if (!cityInput.inputVal.match(/^[a-z ,.'-]+$/i)) {
          console.log("does not match");
          cityInput.error = true;
          setCityInput({ ...cityInput });
          valid = false;
        }
        if (!stateInput.inputVal.match(/^[a-z]{2}$/i)) {
          console.log("does not match");
          stateInput.error = true;
          setStateInput({ ...stateInput });
          valid = false;
        }
        if (!zipcodeInput.inputVal.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)) {
          console.log("does not match");
          zipcodeInput.error = true;
          setZipcodeInput({ ...zipcodeInput });
          valid = false;
        }
      }
    } else if (paymentMethodInput.name === "Gift Card") {
      if (!giftCardNumberInput.inputVal.match(/^\d+$/)) {
        console.log("does not match");
        giftCardNumberInput.error = true;
        setGiftCardNumberInput({ ...giftCardNumberInput });
        valid = false;
      }
    }

    return valid;
  };

  return (
    <div className="checkout-payment">
      <CheckoutTabs page="Payment" completed={["Shipping"]} />

      <div className="payment-form">
        <form id="paymentForm" onSubmit={goToCheckoutReview}>
          <h3>Payment Method</h3>

          <div className="payment-options">
            {paymentOptions.map((paymentOption, i) => (
              <PaymentOption
                paymentOption={paymentOption}
                index={i}
                toggleOptions={toggleOptions}
                key={i}
              />
            ))}
          </div>

          {checkPaymentOptionSelected("Credit Card") && (
            <div className="creditcard-form">
              <FormField
                labelName="Cardholder Full Name"
                width="323px"
                setInput={setCardNameInputHelper}
                error={cardNameInput.error}
              />
              <FormField
                labelName="Card Number"
                width="323px"
                boxType="credit-card"
                setInput={setCardNumberInputHelper}
                error={cardNumberInput.error}
              />
              <div className="creditcard-details">
                <FormField
                  labelName="Expiration Date"
                  width="150.5px"
                  setInput={setExpDateInputHelper}
                  error={expDateInput.error}
                />
                <FormField
                  labelName="Security Code"
                  width="150.5px"
                  boxType="credit-card"
                  setInput={setSecurityCodeInputHelper}
                  error={securityCodeInput.error}
                />
              </div>

              <div className="billing-address">
                <div className="billing-address-checkbox">
                  <input
                    type="checkbox"
                    id="check-input"
                    onChange={handleBillingChange}
                  />
                  <label htmlFor="check-input">
                    My billing address is the same as my shipping address.
                  </label>
                </div>

                {!billingCheck && (
                  <>
                    <h3>Billing Address</h3>
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
                        v
                      />
                      <FormField
                        labelName="Zipcode"
                        width="99px"
                        setInput={setZipcodeInputHelper}
                        error={zipcodeInput.error}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {checkPaymentOptionSelected("Gift Card") && (
            <div className="giftcard-form">
              <FormField
                labelName="Gift Card Number"
                width="323px"
                setInput={setGiftCardNumberInputHelper}
                error={giftCardNumberInput.error}
              />
            </div>
          )}

          <div className="review-order-btn">
            <ButtonItem text="Review Order" form="paymentForm" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPayment;
