import React, { Component } from "react";
import "./ShoeCard.css";

class ShoeCard extends Component {
  render() {

    const {name, price, image} = this.props;

    return (
      <div className="shoe-card">
        <img src={image} alt={name} />
        <div className="shoe-info">
          <h5>{name}</h5>
          <p>{price}</p>
        </div>
      </div>
    );
  }
}

export default ShoeCard;
