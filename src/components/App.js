import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Shopping from "./shopping/Shopping";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/men-shoes" element={<Shopping/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
