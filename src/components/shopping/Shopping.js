import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import { ReactComponent as Filter} from "../../images/filter.svg";
import "./Shopping.css";

class Shopping extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="shopping-heading">
          <h3>Men Shoes</h3>
          <Filter width={20} height={18.5} className="" />
        </div>
      </div>
    );
  }
}

export default Shopping;
