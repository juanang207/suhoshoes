import React from "react";
import { Routes, Route } from "react-router-dom";
import Shopping from "../shopping/Shopping";
import ShoeItem from "../shoe-item/ShoeItem";

function MenShoes() {
  return (
    <div>
      <Routes>
        <Route index element={<Shopping category="Men Shoes" />} />
        <Route path=":shoeId" element={<ShoeItem />} />
      </Routes>
    </div>
  );
}

export default MenShoes;
