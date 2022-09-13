import React from "react";
import { Routes, Route } from "react-router-dom";
import Shopping from "../shopping/Shopping";
import ShoeItem from "../shoe-item/ShoeItem";

function NikeShoes() {
  return (
    <div>
      <Routes>
        <Route index element={<Shopping category="Nike Shoes" />} />
        <Route path=":shoeId" element={<ShoeItem />} />
      </Routes>
    </div>
  );
}

export default NikeShoes;
