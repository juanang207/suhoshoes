import React, { Component } from "react";
import "./SizeButton.css";

class SizeButton extends Component {


  render() {
    const { sizeObj, index, toggleSelected } = this.props;

    return (
      <div className="size-button" key={index}>
        <button
          className={sizeObj.selected ? "filled" : ""}
          onClick={() => toggleSelected(index)}
        >
          {sizeObj.size}
        </button>
      </div>
    );
  }
}

export default SizeButton;
