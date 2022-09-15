import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import NikeShoes from "./nike-shoes/NikeShoes";
import AdidasShoes from "./adidas-shoes/AdidasShoes";
import PumaShoes from "./puma-shoes/PumaShoes";
import Navbar from "./navbar/Navbar";
import Bag from "./bag/Bag";
import CheckoutShipping from "./checkout-shipping/CheckoutShipping";
import "./index.css";



class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="nike-shoes/*" element={<NikeShoes />} />
            <Route path="adidas-shoes/*" element={<AdidasShoes />} />
            <Route path="puma-shoes/*" element= {<PumaShoes />} />
            <Route path="bag" element={<Bag />} />
            <Route path="checkout-shipping" element={<CheckoutShipping />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
