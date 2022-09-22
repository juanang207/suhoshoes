import React, { Component } from "react";
import "./InputField.css";

class InputField extends Component {
  render() {
    return (
      <div className="input-box-parent">
        <input
          type={this.props.type ? this.props.type: "text"}
          placeholder={this.props.placeholderText}
          className={`input-box ${this.props.boxType ? this.props.boxType : ""}`}
          style={{ width: this.props.width, paddingLeft: this.props.paddingLeft}}
          onChange={this.props.setOnChange}
          required
        ></input>
      </div>
    );
  }
}

export default InputField;
