const mongoose = require("mongoose");
const Order = require("../models/Ordermodel");

const validateOrder = async () => {
  try {
    const existingUser = await Order.findById({
      username: user.username,
    });
    return existingUser;
  } catch (e) {
    throw new Error(e?.message || "Something went wrong");
  }
};
module.exports = validateOrder;
