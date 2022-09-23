const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  address: String,
  city: String,
  state: String,
  zipcode: String,
  deliveryOption: String,
  payment: Schema.Types.Mixed,
  orderItems: []
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
