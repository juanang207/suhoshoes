import React from "react";
import {useParams} from 'react-router-dom';
import "./ShoeItem.css";

function ShoeItem() {
  
  const { shoeId } = useParams();

    return (
      <div>
        <img src={require("../../images/shoes-img.png")} alt={shoeId} className="product-img"/>
        <h1>Hello</h1>
        <h1>{shoeId}</h1>
      </div>
    );
}

export default ShoeItem;