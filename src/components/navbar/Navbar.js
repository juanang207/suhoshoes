import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

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
        {/* overlay under the sidebar when it is opened */}
        <div
          className={`background-overlay ${this.state.click ? "active" : ""}`}
          onClick={() => this.setState({ click: !this.state.click })}
        ></div>

        <div className="navbar flex-container">
          <div className="logo flex-child">
            <h4>
              <a href="/">Suho Shoes</a>
            </h4>
          </div>

          <div className="nav-icons flex-child">
            <div className="nav-icon-child">
              <Search width={23} height={23} />
            </div>
            <div className="nav-icon-child">
              <Link to="bag">
                <Cart width={22} height={24.91} />
              </Link>
            </div>
            <div className="nav-icon-child">
              <BurgerMenu
                width={23}
                height={17.52}
                onClick={() => this.setState({ click: !this.state.click })}
              />
            </div>
          </div>
        </div>
        {/* sidebar */}
        <div className={`side-nav ${this.state.click ? "active" : ""}`}>
          <h4>
            <a href="/">Suho Shoes</a>
          </h4>
          <Close
            width={12}
            height={12}
            className="close-btn"
            onClick={() => this.setState({ click: !this.state.click })}
          />
          <a href="/nike-shoes">Nike</a>
          <a href="/adidas-shoes">Adidas</a>
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
        <Outlet />
      </div>
    );
  }
}

export default Navbar;
