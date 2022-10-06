import React, { Component} from "react";
import "./SizeButton.css";

class SizeButton extends Component {

  render() {
    const { sizeObj,index} = this.props;
    return (
        <option id ={index} value = {sizeObj.size} key= {index} >
        {sizeObj.size}
        </option>
    );
  }
}

export default SizeButton;