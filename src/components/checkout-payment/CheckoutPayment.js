import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  let navigate = useNavigate();
  const goToCheckoutReview = () => {
    navigate(`/checkout-review`);
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

  return (
    <div className="checkout-payment">
      <CheckoutTabs page="Payment" completed={["Shipping"]} />

      <div className="payment-form">
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
                  <FormField labelName="Address" width="323px" />
                  <div className="address-details">
                    <FormField labelName="City" width="132px" />
                    <FormField labelName="State" width="47px" />
                    <FormField labelName="Zipcode" width="99px" />
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {checkPaymentOptionSelected("Gift Card") && (
          <div className="giftcard-form">
            <FormField labelName="Gift Card Number" width="323px" />
          </div>
        )}

        <div className="review-order-btn">
          <ButtonItem text="Review Order" onClick={goToCheckoutReview} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPayment;
