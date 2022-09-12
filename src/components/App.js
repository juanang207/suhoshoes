import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import MenShoes from "./men-shoes/MenShoes";
import Navbar from "./navbar/Navbar";
import Bag from "./bag/Bag";
import "./index.css";


class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="men-shoes/*" element={<MenShoes />} />
            <Route path="bag" element={<Bag />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
