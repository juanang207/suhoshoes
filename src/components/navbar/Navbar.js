import React, { Component } from "react";
import { ReactComponent as Search } from "../../images/search-btn.svg";
import { ReactComponent as Cart } from "../../images/cart.svg";
import { ReactComponent as BurgerMenu } from "../../images/burger-menu.svg";
import { ReactComponent as Close } from "../../images/close.svg";
import "./Navbar.css";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      click: false,
    };
  }

  render() {
    return (
      <div>
        <div
          className={`background-overlay ${this.state.click ? "active" : ""}`}
          onClick={() => this.setState({ click: !this.state.click })}
        ></div>

        <div className="navbar flex-container">
          <div className="logo flex-child">
            <h4><a href="/">Suho Shoes</a></h4>
          </div>

          <div className="nav-icons flex-child">
            <Search width={23} height={23} className="nav-icon-child" />
            <Cart width={22} height={24.91} className="nav-icon-child" />
            <BurgerMenu
              width={23}
              height={17.52}
              className="nav-icon-child"
              onClick={() => this.setState({ click: !this.state.click })}
            />
          </div>
        </div>
        <div className={`side-nav ${this.state.click ? "active" : ""}`}>
          <h4><a href="/">Suho Shoes</a></h4>
          <Close
            width={12}
            height={12}
            className="close-btn"
            onClick={() => this.setState({ click: !this.state.click })}
          />
          <a href="/men-shoes">Men</a>
          <a href="#section">Women</a>
          <a href="#section">Kids</a>
          <a href="#section">New Arrivals</a>
          <a href="#section">Sale</a>
          <hr />
          <a href="#section" className="section2">
            Account
          </a>
          <a href="#section" className="section2">
            Returns &amp; Exchanges
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
