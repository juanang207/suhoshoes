import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import ShoeCard from "../shoe-card/ShoeCard";
import { ReactComponent as Filter } from "../../images/filter.svg";
import "./Shopping.css";

import menShoe1 from "../../images/men-shoe1.jpg";
import menShoe2 from "../../images/men-shoe2.jpg";
import menShoe3 from "../../images/men-shoe3.jpg";
import menShoe4 from "../../images/men-shoe4.jpg";
import menShoe5 from "../../images/men-shoe5.jpg";
import menShoe6 from "../../images/men-shoe6.jpg";

class Shopping extends Component {
  render() {
    const menShoes = [
      {
        id: 1,
        name: "Continental 80",
        price: "$100.00",
        image: menShoe1,
      },
      {
        id: 2,
        name: "Puma Sneakers",
        price: "$80.00",
        image: menShoe2,
      },
      {
        id: 3,
        name: "Nike Air Max",
        price: "$120.00",
        image: menShoe3,
      },
      {
        id: 4,
        name: "Nike Sneakers",
        price: "$135.00",
        image: menShoe4,
      },
      {
        id: 5,
        name: "New Balance X90",
        price: "$175.00",
        image: menShoe5,
      },
      {
        id: 6,
        name: "Air Jordans",
        price: "$155.00",
        image: menShoe6,
      },
    ];

    return (
      <div>
        {/* Shopping page heading */}
        <div className="shopping-heading">
          <h3>Men Shoes</h3>
          <Filter width={20} height={18.5} className="" />
        </div>
        {/* Shopping contents */}
        <div className="shopping-contents">
          {menShoes.map((shoe, i) => {
            return (
              <ShoeCard
                name={shoe.name}
                price={shoe.price}
                image={shoe.image}
                key={`shoe ${shoe.id}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Shopping;
