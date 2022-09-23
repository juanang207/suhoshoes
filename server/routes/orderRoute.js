const router = require("express").Router();
const OrderModel = require("../models/order");

router.post("/", async (req, res) => {
  const {
    email,
    firstName,
    lastName,
    address,
    city,
    state,
    zipcode,
    deliveryOption,
    payment,
    orderItems,
  } = req.body;

  const newOrder = new OrderModel({
    email,
    firstName,
    lastName,
    address,
    city,
    state,
    zipcode,
    deliveryOption,
    payment,
    orderItems,
  });

  //console.log(newOrder)

  newOrder.save(function (err) {
    if (err) {
      console.log(err);
      return;
    }

    res.json("Order added!");
  });
});

module.exports = router;
