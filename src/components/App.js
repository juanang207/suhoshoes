import React, { Component } from "react";
import Navbar from "./navbar/Navbar";
import Input from "./input/Input";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Input width="263px" paddingLeft="36px" type="search" placeholderText="Search" />
      </div>
    );
  }
}

export default App;
