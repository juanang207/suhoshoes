import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ReactComponent as Star } from "../../images/Star.svg";
import { ReactComponent as Arrow } from "../../images/Arrow.svg";
import { ReactComponent as Close } from "../../images/close.svg";
import SizeButton from "../size-button/SizeButton";
import ButtonItem from "../button-item/ButtonItem";
import "./ShoeItem.css";

function ShoeItem() {
  const { shoeId } = useParams();
  const [shoeData, setShoeData] = useState([]);
  const [infoSection, setInfoSection] = useState([
    {
      title: "Description",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames aliquet lacus netus faucibus lobortis. Egestas laoreet ultrices sed vitae morbi lectus. Viverra volutpat, fermentum, enim viverra quisque mauris, donec diam sapien.",
      open: false,
    },
    {
      title: "Product Details",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames aliquet lacus netus faucibus lobortis. Egestas laoreet ultrices sed vitae morbi lectus. Viverra volutpat, fermentum, enim viverra quisque mauris, donec diam sapien.",
      open: false,
    },
    {
      title: "Reviews (21)",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames aliquet lacus netus faucibus lobortis. Egestas laoreet ultrices sed vitae morbi lectus. Viverra volutpat, fermentum, enim viverra quisque mauris, donec diam sapien.",
      open: false,
    },
  ]);
  // clicked for add to bag
  const [clicked, setClicked] = useState(false);

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

  const InformationSection = (props) => {
    return (
      <div>
        <div
          className={props.infoSection.open ? "open" : ""}
          key={props.index}
          onClick={() => props.toggleInfo(props.index)}
        >
          <div className="information-section">
            <h4>{props.infoSection.title}</h4>
            <Arrow width={18} height={10} className="arrow" />
          </div>
          <div className="info-body">
            <p>{props.infoSection.info}</p>
          </div>
        </div>
        <hr />
      </div>
    );
  };

  const toggleInfo = (index) => {
    setInfoSection(
      infoSection.map((infoSection, i) => {
        if (i === index) {
          infoSection.open = !infoSection.open;
        } else {
          infoSection.open = false;
        }
        return infoSection;
      })
    );
  };

  // const AddToBag = (props) => {
  //   return (
  //     <div className={`add-to-bag-popup ${props.clicked ? "active" : ""}`}>
  //       <Close
  //         width={12}
  //         height={12}
  //         className="close-btn"
  //         onClick={() => setClicked(!clicked)}
  //       />
  //       <h3>Successfully added to bag!</h3>
  //       <div className="popup-product-info">
  //         <img
  //           src={require(`../../images/shoe2.png`)}
  //           alt={props.shoe.name}
  //           className="popup-img"
  //         />
  //         <div className="popup-product-info-text">
  //           <h4>{props.shoe.name}</h4>
  //           <p>Size: 7.5 (Men's)</p>
  //           <h5>{props.shoe.price}</h5>
  //         </div>
  //       </div>
  //       <div className="popup-btns">
  //       <div className="view-bag-btn">
  //       <ButtonItem text="view bag" />
  //       </div>
  //       <ButtonItem text="continue shopping" color="var(--accent1)" backgroundColor="var(--primary1)" />
  //       </div>
  //     </div>
  //   );
  // };

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

          <div className="item-name-section">
            <div>
              <h4>{shoeData[0].name}</h4>
              <h4 className="shoe-item-price">{shoeData[0].price}</h4>
            </div>
            <div className="reviews">
              <h5>
                (<span>4.9</span>
              </h5>
              <Star width={15} height={15} className="star" />
              <h5>{`)`}</h5>
            </div>
          </div>

          <div className="item-size">
            <h4>Size</h4>
            <a href="#">Size Chart</a>
          </div>

          <div className="size-selection">
            {shoeData[0].sizes &&
              shoeData[0].sizes.map((size, i) => {
                return <SizeButton size={size} key={i} />;
              })}
          </div>

          <div className="add-to-bag-btn">
            <ButtonItem
              text="add to bag"
              onClick={() => setClicked(!clicked)}
            />
          </div>

          <hr />

          <div className="whole-info-section">
            {infoSection.map((infoSection, i) => (
              <InformationSection
                infoSection={infoSection}
                index={i}
                toggleInfo={toggleInfo}
              />
            ))}
          </div>

          <div
            className={`background-overlay ${clicked ? "active" : ""}`}
            onClick={() => setClicked(!clicked)}
          ></div>

          {/* <AddToBag shoe={shoeData[0]} clicked={clicked} /> */}

          <div className={`add-to-bag-popup ${clicked ? "active" : ""}`}>
            <Close
              width={12}
              height={12}
              className="close-btn"
              onClick={() => setClicked(!clicked)}
            />
            <h3>Successfully added to bag!</h3>
            <div className="popup-product-info">
              <img
                src={require(`../../images/shoe2.png`)}
                alt={shoeData[0].name}
                className="popup-img"
              />
              <div className="popup-product-info-text">
                <h4>{shoeData[0].name}</h4>
                <p>Size: 7.5 (Men's)</p>
                <h5>{shoeData[0].price}</h5>
              </div>
            </div>
            <div className="popup-btns">
            <div className="view-bag-btn">
            <ButtonItem text="view bag" />
            </div>
            <ButtonItem text="continue shopping" color="var(--accent1)" backgroundColor="var(--primary1)" />
            </div>
          </div>


        </div>
      )}
    </div>
  );
}

export default ShoeItem;
