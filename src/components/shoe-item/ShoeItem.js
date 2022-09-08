import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ReactComponent as Star } from "../../images/Star.svg";
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

  // console.log(shoeData);

  return (
    <div>
      {shoeData.length && (
        <div className="shoe-item">
          <img
            src={
              shoeData[0].productImage
                ? require(`../../images/${shoeData[0].productImage}`)
                : ""
            }
            alt={shoeData[0].name}
            className="product-img"
          />
          <h5>Men's</h5>
          <h4>{shoeData[0].name}</h4>
          <h4 className="shoe-item-price">{shoeData[0].price}</h4>
          <div className="reviews">
            <h5>
              (<span>4.9</span>
            </h5>
            <Star width={15} height={15} className="star" />
            <h5>{`)`}</h5>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoeItem;
