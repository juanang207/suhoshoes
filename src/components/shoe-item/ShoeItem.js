import React, { useEffect, useState} from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ReactComponent as Star } from "../../images/Star.svg";
import { ReactComponent as Arrow } from "../../images/Arrow.svg";
import { ReactComponent as Close } from "../../images/close.svg";
import SizeButton from "../size-button/SizeButton";
import ButtonItem from "../button-item/ButtonItem";
import "./ShoeItem.css";

function ShoeItem(props) {
  // the shoe id from the url
  const { shoeId } = useParams();

  // array of shoe that matches the shoeId
  const [shoeData, setShoeData] = useState([]);
  const [infoSection, setInfoSection] = useState([
    {
      title: "Description",
      info: shoeData.description,
      open: false,
    },
    {
      title: "Product Details",
      info: {},
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

  // copy of the shoe sizes from shoeData
  const [shoeSizes, setShoeSizes] = useState([]);

  // currently selected size
  const [selectedSize, setSelectedSize] = useState(-1);

  const location = useLocation();
  

  useEffect(() => {
    // get the shoes data and finds matching shoe with id
    const findShoeData = async (id) => {
      if (props.category === "Nike") {
        await axios
          .get(`http://localhost:4000/api/nike-shoes`)
          .then((response) => {
            let shoesArray = response.data;
            let shoe = shoesArray.filter((shoe) => shoe.id === id);
            setShoeData(shoe);
            return shoe;
          })
          .then((shoe) => {
            // create copy of the shoe sizes from shoeData
            setShoeSizes(shoe[0].sizes);
          })
          .catch((err) => {
            console.error(err);
          });
      } else if (props.category === "Puma") {
        await axios
          .get(`http://localhost:4000/api/puma-shoes`)
          .then((response) => {
            let shoesArray = response.data;
            let shoe = shoesArray.filter((shoe) => shoe.id === id);
            setShoeData(shoe);
            return shoe;
          })
          .then((shoe) => {
            // create copy of the shoe sizes from shoeData
            setShoeSizes(shoe[0].sizes);
          })
          .catch((err) => {
            console.error(err);
          });
      } else if (props.category === "Adidas") {
        await axios
          .get(`http://localhost:4000/api/adidas-shoes`)
          .then((response) => {
            let shoesArray = response.data;
            let shoe = shoesArray.filter((shoe) => shoe.id === id);
            setShoeData(shoe);
            return shoe;
          })
          .then((shoe) => {
            // create copy of the shoe sizes from shoeData
            setShoeSizes(shoe[0].sizes);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };

    findShoeData(shoeId);
    
  },[props.category, shoeId, selectedSize]);

  const updateSelectedSize = () => {
    var size = document.getElementById("shoe-sizes")
    if (size){
      // console.log(size.options[size.selectedIndex].text)
      var selectedShoeSize = size.options[size.selectedIndex].text
      setSelectedSize(selectedShoeSize)
    }
  }

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
            {props.infoSection.title === "Product Details" ? (
              <div>
                <p>Silhoutte: {props.infoSection.info.silhoutte}</p>
                <p>Colorway: {props.infoSection.info.colorway}</p>
                <p>Release Date: {props.infoSection.info.releaseDate}</p>
              </div>
            ) : (
              <p>{props.infoSection.info}</p>
            )}
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

    // generate product details
    setInfoSection(
      [...infoSection].map((object) => {
        if (object.title === "Product Details") {
          return {
            ...object,
            info: {
              colorway: shoeData[0].colorway,
              releaseDate: shoeData[0].releaseDate,
              silhoutte: shoeData[0].silhoutte,
            },
          };
        } else return object;
      })
    );
  };

  let navigate = useNavigate();
  const goToBag = () => {
    let path = `/bag`;
    navigate(path);
  };

  // Doesn't work with transitions
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

  // after clicking on ADD TO BAG btn, opens popup and add shoe to localstorage
  const addItemToBag = () => {
    setClicked(!clicked);
    let arrayBagItems = JSON.parse(localStorage.getItem("bagItems") || "[]");
    

    // check if shoe added is already in bag
    const found = arrayBagItems.some(el => (el.id === shoeData[0].id) && (el.size === selectedSize));

    if (found) {
      // increase qty if already added to bag
      let objIndex = arrayBagItems.findIndex((obj => obj.id === shoeData[0].id));
      arrayBagItems[objIndex].qty+=1;
    } 
    else {
      // add to bag
      arrayBagItems.push({...shoeData[0], "qty" : 1, "path" : location.pathname, "size" : selectedSize});
    }
    
    localStorage.setItem("bagItems", JSON.stringify(arrayBagItems));
  };

  const closeAddToBagPopup = () => {
    setClicked(!clicked);
    setSelectedSize(-1);
  }

  return (
    <div>
      {shoeData.length && (
        <div className="shoe-item">
          <img
            src={shoeData[0].image}
            alt={shoeData[0].name}
            className="product-img"
          />
          <h5>{props.category}</h5>

          <div className="item-name-section">
            <div>
              <h4>{shoeData[0].name}</h4>
              <h4 className="shoe-item-price">${shoeData[0].price}</h4>
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

          {/* Size Selection Buttons */}
          <div className="size-selection">
          <select id="shoe-sizes" multiple="multiple" onChange={updateSelectedSize}>
            {shoeSizes &&
              shoeSizes.map((size, i) => {
                return (
                  <SizeButton
                    sizeObj={size}
                    index = {i}
                    key={i}
                  />
                );
              })}
              </select>
          </div>

          <div className="add-to-bag-btn">
            <ButtonItem
              text="add to bag"
              onClick={() => addItemToBag()}
              disabled = {selectedSize < 0}
            />
          </div>

          <hr />

          {/* Information Section */}
          <div className="whole-info-section">
            {infoSection.map((infoSection, i) => (
              <InformationSection
                infoSection={infoSection}
                index={i}
                toggleInfo={toggleInfo}
                key={i}
              />
            ))}
          </div>

          {/* background overlay when add to bag popup is active */}
          <div
            className={`background-overlay ${clicked ? "active" : ""}`}
            onClick={closeAddToBagPopup}
          ></div>

          {/* AddToBag component does not work with css transitons */}
          {/* <AddToBag shoe={shoeData[0]} clicked={clicked} /> */}

          {/* Add to Bag popup */}
          <div className={`add-to-bag-popup ${clicked ? "active" : ""}`}>
            <Close
              width={12}
              height={12}
              className="close-btn"
              fill="var(--primary1)"
              onClick={closeAddToBagPopup}
            />
            <h3>Successfully added to bag!</h3>
            <div className="popup-product-info">
              <img
                src={shoeData[0].image}
                alt={shoeData[0].name}
                className="popup-img"
              />
              <div className="popup-product-info-text">
                <h4>{shoeData[0].name}</h4>
                <p>Size: {selectedSize}</p>
                <h5>${shoeData[0].price}</h5>
              </div>
            </div>
            <div className="popup-btns">
              <div className="view-bag-btn">
                <ButtonItem text="view bag" onClick={goToBag} />
              </div>
              <ButtonItem
                text="continue shopping"
                color="var(--accent1)"
                backgroundColor="var(--primary1)"
                onClick={closeAddToBagPopup}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoeItem;
