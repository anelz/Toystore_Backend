const express = require("express");
const Reviews = require("../models/Reviews");

const router = express.Router();

router.post("/", async ({ body }, res) => {
  try {
    const { user, toyId, comments, rating } = body || {};
    //await validateOrder(body);
    const reviews = await Reviews.create({ user, toyId, comments, rating });
    res.send(reviews._id);
  } catch (e) {
    console.log(e);
    res.status(400).send("Review creation failed");
  }
});

module.exports = router;
