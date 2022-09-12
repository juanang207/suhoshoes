import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    return (
      <div className="input-box-parent">
        <input
          type="text"
          placeholder={this.props.placeholderText}
          className={`input-box ${this.props.boxType ? this.props.boxType : ""}`}
          style={{ width: this.props.width, paddingLeft: this.props.paddingLeft}}
        ></input>
      </div>
    );
  }
}

export default Input;
