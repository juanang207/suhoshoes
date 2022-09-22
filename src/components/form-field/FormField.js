import React, { Component } from "react";
import InputField from "../input-field/InputField";
import "./FormField.css";

class FormField extends Component {
  render(props) {
    return (
      <div className="form-field">
        <label>
          {this.props.labelName}
          <InputField
            width={this.props.width}
            paddingLeft="10px"
            boxType={this.props.boxType ? this.props.boxType : ""}
            setOnChange = {this.props.setInput}
          />
        </label>
      </div>
    );
  }
}

export default FormField;
