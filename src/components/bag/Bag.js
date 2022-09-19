import React, { useState } from "react";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Close } from "../../images/close.svg";
import InputField from "../input-field/InputField";
import ButtonItem from "../button-item/ButtonItem";
import "./Bag.css";

function Bag(props) {
  const [quantitySelected, setQuantitySelected] = useState(1);

  let navigate = useNavigate();
  const goToCheckoutShipping = () => {
    let path = `/checkout-shipping`;
    navigate(path, { state: { id: 1, name: "sabaoon" } });
  };

  // const location = useLocation();
  // console.log(location.state.name);

  const changeSelection = (quantity) => {
    setQuantitySelected(quantity.value);
  };

  const BagItem = () => {
    // create array of objects of label and value from 1 to 10 for dropdown quantity
    const options = [...new Array(10)].map((each, index) => ({
      label: index + 1,
      value: index + 1,
    }));

    return (
      <div className="bag-item">
        <img
          src={require(`../../images/shoes-img-thumbnail.jpg`)}
          alt={`shoe`}
        />

        <div className="item-details">
          <p className="shoe-name">Continental 80</p>
          <p className="shoe-size">Size: 7.5 (Men's)</p>

          <div className="item-details-price-qty">
            <p>$100.00</p>
            <div className="quantity">
              <p>Qty:</p>
              <div className="dropdown">
                <Select
                  options={options}
                  onChange={(quantity) => changeSelection(quantity)}
                  placeholder={quantitySelected}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  isSearchable={false}
                  styles={{
                    placeholder: (base) => ({
                      ...base,
                      fontSize: "0.875rem",
                      color: "var(--accent2)",
                      fontWeight: "var(--semibold)",
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      color: "var(--accent2)",
                      backgroundColor: state.isSelected
                        ? "var(--secondary1)"
                        : "var(--grey100)",
                    }),
                    control: (base, state) => ({
                      ...base,
                      border: state.isFocused
                        ? "1px solid var(--accent2)"
                        : "none",
                      backgroundColor: "none",
                    }),
                    valueContainer: (provided, state) => ({
                      ...provided,
                      padding: 0,
                      margin: 0,
                    }),
                    indicatorsContainer: (provided, state) => ({
                      ...provided,
                    }),
                    container: (base) => ({
                      ...base,
                      backgroundColor: "none",
                      paddingLeft: 5,
                    }),
                    menu: (base) => ({
                      ...base,
                      backgroundColor: "var(--grey100)",
                    }),
                    dropdownIndicator: (base) => ({
                      ...base,
                      color: "var(--accent2)",
                    }),
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <Close
          width={12}
          height={12}
          className="close-btn"
          fill="var(--grey300)"
        />
      </div>
    );
  };

  return (
    <div className="bag">
      <h3>Bag</h3>

      <div className="bag-items">
        <BagItem />
      </div>

      <div className="promo-code">
        <InputField
          width="323px"
          paddingLeft="10px"
          placeholderText="Enter promo code"
        />
      </div>

      <div className="order-summary">
        <h4>Order Summary</h4>

        <div className="order-details">
          <p>{quantitySelected} Item(s)</p>
          <p className="right-align">{`$${(quantitySelected * 100).toFixed(
            2
          )}`}</p>
          <p>Shipping</p>
          <p className="right-align">$5.99</p>
          <p>Sales Tax</p>
          <p className="right-align">-</p>
          <p className="order-total">Total</p>
          <p className="order-total right-align">{`$105.99`}</p>
        </div>
      </div>

      <div className="checkout-btns">
        <button className="paypal-btn">
          <img
            src={require(`../../images/Paypal.png`)}
            alt={`paypal checkout`}
          />
        </button>
        <ButtonItem text="Checkout" onClick={goToCheckoutShipping} />
      </div>
    </div>
  );
}

export default Bag;
