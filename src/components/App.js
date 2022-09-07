import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Shopping from "./shopping/Shopping";
import Navbar from "./navbar/Navbar";
import "./index.css";


class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route index element={<Homepage />} />
            <Route path="men-shoes" element={<Shopping />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
