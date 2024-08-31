const mongoose = require("mongoose");
const Order = require("../models/Ordermodel");
const User = require("../models/Usermodel");

const validateOrder = async () => {
  try {
    const existingUser = await Order.findById({
      userId: order.userId,
    });
    return existingUser;
  } catch (e) {
    throw new Error(e?.message || "Something went wrong");
  }
};
module.exports = validateOrder;
