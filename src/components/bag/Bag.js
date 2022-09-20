import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Close } from "../../images/close.svg";
import InputField from "../input-field/InputField";
import ButtonItem from "../button-item/ButtonItem";
import "./Bag.css";

function Bag(props) {
  // const [quantitySelected, setQuantitySelected] = useState(1);

  let navigate = useNavigate();
  const goToCheckoutShipping = () => {
    let path = `/checkout-shipping`;
    navigate(path);
  };

  // let quantitySelected = 1;

  // get bag items from local storage
  let bagItems = JSON.parse(localStorage.getItem("bagItems") || "[]");

  // get number of items
  let numItem = 0;
  bagItems.forEach((shoe) => (numItem += shoe.qty));
  // total quantity
  const [numItems, setNumItems] = useState(numItem);

  // price of all items
  let itemPrice = 0;
  bagItems.forEach((shoe) => (itemPrice += shoe.qty * shoe.price));
  const [itemsPrice, setItemsPrice] = useState(itemPrice);
  localStorage.setItem("subtotal", JSON.stringify(itemsPrice));

  // gets the state from previous page (view bag btn from add to bag popup)
  // const location = useLocation();
  // console.log(location.state.shoe);

  const BagItem = (props) => {
    // create array of objects of label and value from 1 to 10 for dropdown quantity
    const options = [...new Array(10)].map((each, index) => ({
      label: index + 1,
      value: index + 1,
    }));

    const { shoe } = props;

    const changeSelection = (quantity) => {
      // update the qty in local storage
      let objIndex = bagItems.findIndex((obj) => obj.id === shoe.id);
      bagItems[objIndex].qty = quantity.value;

      localStorage.setItem("bagItems", JSON.stringify(bagItems));
      updateNumOfItems();
      updateItemsPrice();
    };

    const removeItemInCart = () => {
      let objIndex = bagItems.findIndex((obj) => (obj.id === shoe.id) && (obj.size === shoe.size));
      bagItems.splice(objIndex, 1);
      localStorage.setItem("bagItems", JSON.stringify(bagItems));
      updateNumOfItems();
      updateItemsPrice();
    };

    return (
      <div className="bag-item">
        <img src={shoe.image} alt={shoe.name} />

        <div className="item-details">
          <Link to={`${shoe.path}`}>
            <p className="shoe-name">{shoe.name}</p>
          </Link>
          <p className="shoe-size">Size: {shoe.size}</p>

          <div className="item-details-price-qty">
            <p>${shoe.price}</p>
            <div className="quantity">
              <p>Qty:</p>
              <div className="dropdown">
                <Select
                  options={options}
                  onChange={(quantity) => changeSelection(quantity)}
                  placeholder={shoe.qty}
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
          onClick={removeItemInCart}
        />
      </div>
    );
  };

  const updateNumOfItems = () => {
    let numItem = 0;
    bagItems.forEach((shoe) => (numItem += shoe.qty));
    setNumItems(numItem);
  };

  const updateItemsPrice = () => {
    let itemsPrice = 0;
    bagItems.forEach((shoe) => (itemsPrice += shoe.qty * shoe.price));
    setItemsPrice(itemsPrice);
    localStorage.setItem("subtotal", JSON.stringify(itemsPrice));
  };

  return (
    <div className="bag">
      <h3>Bag</h3>

      <div className="bag-items">
        {bagItems.length > 0 ? (
          bagItems.map((shoe, i) => {
            return <BagItem key={i} shoe={shoe} />;
          })
        ) : (
          <h4 className="empty-bag">Bag is currently empty</h4>
        )}
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
          <p>{numItems} Item(s)</p>
          <p className="right-align">{`$${itemsPrice.toFixed(2)}`}</p>
          <p>Shipping</p>
          <p className="right-align">$5.99</p>
          <p>Sales Tax</p>
          <p className="right-align">-</p>
          <p className="order-total">Total</p>
          <p className="order-total right-align">
            ${(itemsPrice + 5.99).toFixed(2)}
          </p>
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
