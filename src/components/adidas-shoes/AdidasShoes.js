import React from "react";
import { Routes, Route } from "react-router-dom";
import Shopping from "../shopping/Shopping";
import ShoeItem from "../shoe-item/ShoeItem";

function AdidasShoes() {
  return (
    <div>
      <Routes>
        <Route index element={<Shopping category="Adidas Shoes" />} />
        <Route path=":shoeId" element={<ShoeItem />} />
      </Routes>
    </div>
  );
}

export default AdidasShoes;
