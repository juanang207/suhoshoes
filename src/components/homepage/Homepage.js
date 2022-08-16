import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Input from "../input/Input";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Input
          width="263px"
          paddingLeft="36px"
          boxType="search"
          placeholderText="Search"
        />
        {/* <Input width="323px" paddingLeft="10px" boxType="credit-card" placeholderText="Card Number" /> */}
      </div>
    );
  }
}

export default Homepage;
