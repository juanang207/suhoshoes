import React, { Component } from "react";
import { ReactComponent as Close } from "../../images/close.svg";
import { ReactComponent as Arrow } from "../../images/Arrow.svg";
import "./Bag.css";

class Bag extends Component {
  render() {
    const BagItem = (props) => {
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
                <p>Qty: 1</p>
                <Arrow width={12} height={7} className="arrow" />
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
      </div>
    );
  }
}

export default Bag;
