import React, { Component } from "react";
import "./SizeButton.css";

class SizeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  boxClicked = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div className="size-button">
        <button className={this.state.clicked ? "filled" : ""} onClick={this.boxClicked}>{this.props.size}</button>
      </div>
    );
  }
}

export default SizeButton;
