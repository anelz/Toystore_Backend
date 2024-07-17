const express = require("express");

const Toy = require("../models/Toymodel");

const router = express.Router();

router.post("/", async ({ body }, res) => {
  try {
    const { description, name, img, price } = body || {};
    const newToy = await Toy.create({ description, name, img, price });
    res.send(newToy);
  } catch (e) {
    console.log(e);
    res.status(400).send("Toy creation failed");
  }
});

router.get("/", async (req, res) => {
  const toys = await Toy.find();
  res.send(toys);
});

router.get("/:toyId", async ({ params }, res) => {
  try {
    const { toyId } = params || {};
    if (!toyId) return res.status(400).send("Toy id not found");
    const toy = await Toy.findById(toyId);
    res.send(toy);
  } catch (e) {
    res.status(400).send("toy not found...");
  }
});

router.delete("/:toyId", async ({ params }, res) => {
  try {
    const { toyId } = params || {};
    if (!toyId) return res.status(400).send("Toy id not found");
    const toy = await Toy.findByIdAndDelete(toyId);
    res.send(toy);
  } catch (e) {
    res.status(400).send("toy not found...");
  }
});

module.exports = router;
