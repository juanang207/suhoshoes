import React, { Component } from "react";
import "./ButtonItem.css";

class ButtonItem extends Component {
  
  render() {
    return (
      <div className="button-item">
        <button>
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default ButtonItem;