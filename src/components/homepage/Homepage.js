import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Input from "../input/Input";
import Category from "../category/Category";
import shoe1 from "../../images/shoe1.jpg";
import shoe2 from "../../images/shoe2.png";
import shoe3 from "../../images/shoe3.png";
import shoe4 from "../../images/shoe4.png";
import "./Homepage.css";

class Homepage extends Component {
  render() {
    const images = [
      {
        name: "shoe2",
        image: shoe2,
        id: 2,
      },
      {
        name: "shoe3",
        image: shoe3,
        id: 3,
      },
      {
        name: "shoe4",
        image: shoe4,
        id: 4,
      },
    ];
    return (
      <div>
        <Navbar />
        {/* Search bar */}
        <div className="search-bar">
          <Input
            width="263px"
            paddingLeft="36px"
            boxType="search"
            placeholderText="Search"
          />
        </div>
        {/* Categories */}
        <div className="categories-bar">
          <Category text="Men" link="/men-shoes"/>
          <Category text="Women" />
          <Category text="Kids" />
        </div>
        {/* Featured Banner */}
        <div className="banner">
          <img src={shoe1} alt="classic shoe" className="banner-img" />
          <h3>Classics for All</h3>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        {/* New Arrivals Section */}
        <div className="new-arrivals">
          <div className="new-arrivals-heading">
            <h3>New Arrivals</h3>
            <p>View All</p>
          </div>
          <div className="carousel">
          {images.map((image, i) => {
            return (
              <div className="slide">
              <img src={image.image} alt={image.name} className="section-img" />
              </div>
            );
          })}
          </div>
        </div>

        {/* <Input width="323px" paddingLeft="10px" boxType="credit-card" placeholderText="Card Number" /> */}
      </div>
    );
  }
}

export default Homepage;
