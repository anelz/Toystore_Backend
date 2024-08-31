const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  toyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Toy",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, "quantity must be over 0"],
  },
});

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;
