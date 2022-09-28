import React, { Component } from "react";
import InputField from "../input-field/InputField";
import "./FormField.css";

class FormField extends Component {
  render(props) {
    return (
      <div className="form-field">
        <label style={ this.props.error ?  {color: "rgba(255, 0, 0, 0.5)" } : {} }>
          {this.props.labelName}
          <InputField
            width={this.props.width}
            paddingLeft="10px"
            boxType={this.props.boxType ? this.props.boxType : ""}
            setOnChange = {this.props.setInput}
            type = {this.props.type}
            error = {this.props.error}
          />
        </label>
      </div>
    );
  }
}

export default FormField;
