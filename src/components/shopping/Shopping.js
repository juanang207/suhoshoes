import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ShoeCard from "../shoe-card/ShoeCard";
import { ReactComponent as Filter } from "../../images/filter.svg";
import "./Shopping.css";

function Shopping(props) {

  const [menShoesData, setMenShoesData] = React.useState([]);
  
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/men-shoes`)
      .then((response) => {
        // console.log(response.data);
        setMenShoesData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {/* Shopping page heading */}
      <div className="shopping-heading">
        <h3>{props.category}</h3>
        <Filter width={20} height={18.5} className="" />
      </div>
      {/* Shopping contents */}
      <div className="shopping-contents">
        {menShoesData.map((shoe, i) => {
          return (
            <div key={i}>
              <Link to={`${shoe.id}`}>
                <ShoeCard
                  name={shoe.name}
                  price={shoe.price}
                  image={shoe.image}
                  key={`shoe ${shoe.id}`}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shopping;
