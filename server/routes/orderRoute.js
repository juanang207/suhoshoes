const router = require("express").Router();
const OrderModel = require("../models/order");

router.post("/", async (req, res) => {
  const newOrder = new OrderModel({
    name: "hello",
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
