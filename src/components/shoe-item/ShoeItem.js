import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ShoeItem.css";

function ShoeItem() {
  const { shoeId } = useParams();
  const [shoeData, setShoeData] = React.useState([]);

  useEffect(() => {
    // get the shoes data and finds matching shoe with id
    const findShoeData = async (id) => {
      await axios
        .get(`http://localhost:4000/api/men-shoes`)
        .then((response) => {
          let shoesArray = response.data;
          setShoeData(shoesArray.filter((shoe) => shoe.id === parseInt(id)));
        })
        .catch((err) => {
          console.error(err);
        });
    };

    findShoeData(shoeId);
  }, [shoeId]);

  console.log(shoeData);

  return (
    <div>
      {shoeData.length && (
        <div>
          <img
            src={shoeData[0].productImage ? require(`../../images/${shoeData[0].productImage}`) : ''}
            alt={shoeData[0].name}
            className="product-img"
          />
          <h2>{shoeData[0].name}</h2>
        </div>
      )}
    </div>
  );
}

export default ShoeItem;
