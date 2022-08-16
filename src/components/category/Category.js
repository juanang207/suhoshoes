import React, { Component } from "react";
import "./Category.css";

class Category extends Component {
  render() {
    return (
      <div className="category">
        <span><a href={this.props.link}>{this.props.text}</a></span>
      </div>
    );
  }
}

export default Category;
