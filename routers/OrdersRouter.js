const express = require("express");
const { validateOrder } = require("../utils/Order");

const Order = require("../models/Ordermodel");
const User = require("../models/Usermodel");
const Toy = require("../models/Toymodel");

const router = express.Router();

router.post("/", async ({ body }, res) => {
  try {
    const { userId, toyId, price, quantity } = body || {};
    const order = await Order.create({ userId, toyId, price, quantity });
    res.send(order);
  } catch (e) {
    console.log(e);
    res.status(400).send("Order creation failed");
  }
});

router.get("/", async (req, res) => {
  try {
    const order = await Order.find();
    res.send(order);
  } catch (e) {
    console.error(e);
    res.status(400).send("Error retrieving orders");
  }
});

module.exports = router;
