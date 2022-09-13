import React from "react";
import { Routes, Route } from "react-router-dom";
import Shopping from "../shopping/Shopping";
import ShoeItem from "../shoe-item/ShoeItem";

function PumaShoes() {
  return (
    <div>
      <Routes>
        <Route index element={<Shopping category="Puma Shoes" />} />
        <Route path=":shoeId" element={<ShoeItem category="Puma"/>} />
      </Routes>
    </div>
  );
}

export default PumaShoes;
