import React from "react";
import {useParams} from 'react-router-dom';

function ShoeItem() {
  
  const { shoeId } = useParams();

    return (
      <div>
        <h1>Hello</h1>
        <h1>{shoeId}</h1>
      </div>
    );
}

export default ShoeItem;