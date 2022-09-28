import React, { Component } from "react";
import "./ButtonItem.css";

class ButtonItem extends Component {
  render() {
    return (
      <div className="button-item">
        <button
          onClick={this.props.onClick ? this.props.onClick : null}
          style={{
            color: this.props.color,
            backgroundColor: this.props.backgroundColor,
          }}
          disabled={this.props.disabled}
          form={this.props.form ? this.props.form : null}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default ButtonItem;
