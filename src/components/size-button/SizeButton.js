import React, { Component} from "react";
import "./SizeButton.css";

class SizeButton extends Component {

  render() {
    const { sizeObj,index} = this.props;
    return (
        <option id ={index} value = {sizeObj.size} key= {index} >
        <div>{sizeObj.size}</div>
        </option>
    );
  }
}

export default SizeButton;