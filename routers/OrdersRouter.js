const express = require("express");
const { validateOrder } = require("../utils/Order");

const Order = require("../models/Ordermodel");
const User = require("../models/Usermodel");

const router = express.Router();

router.post("/", async ({ body }, res) => {
  try {
    const { user, toyId, quantity } = body || {};
    //await validateOrder(body);
    const order = await Order.create({ user, toyId, quantity });
    res.send(order._id);
  } catch (e) {
    console.log(e);
    res.status(400).send("Order creation failed");
  }
});

router.get("/", async (req, res) => {
  try {
    const order = await Order.findOne();
    console.log(order);
    res.send(order);
  } catch (e) {
    console.log(e);
    res.status(400).send("Order creation failed");
  }
});

/*router.get("/", async (req, res) => {
  console.log("test");
  console.log(req);
  try {
    // Check if user is logged in (implementation depends on your framework)
    if (!req.user) {
      return res.status(401).send("Unauthorized: Please log in");
    }

    const userId = req.user._id; // Assuming user data is stored in req.user

    // Find orders where userId field matches currently logged-in user's ID
    const orders = await Order.find({ userId });

    console.log(orders);
    res.send(orders);
  } catch (e) {
    console.log(e);
    res.status(400).send("Error retrieving orders");
  }
});*/

module.exports = router;
