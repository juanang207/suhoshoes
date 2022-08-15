import React, { Component } from "react";
import { ReactComponent as Search } from "../../images/search-btn.svg";
import { ReactComponent as Cart } from "../../images/cart.svg";
import { ReactComponent as BurgerMenu } from "../../images/burger-menu.svg";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar flex-container">
        <div className="logo flex-child">
          <h2>Suho Shoes</h2>
        </div>

        <div className="nav-icons flex-child">
          <Search width={23} height={23} className="nav-icon-child"/>
          <Cart width={22} height={24.91} className="nav-icon-child"/>
          <BurgerMenu width={23} height={17.52} className="nav-icon-child"/>
        </div>
      </div>
    );
  }
}

export default Navbar;
