const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  toyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Toy",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;
