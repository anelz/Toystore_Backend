const express = require("express");

const Comments = require("../models/Commentsmodel");

const router = express.Router();

router.post("/", async ({ body }, res) => {
  try {
    const { name, email, text, number } = body || {};
    const newMessage = await Comments.create({
      name,
      email,
      text,
      number,
    });
    res.send(newMessage);
  } catch (e) {
    res.status(400).send("Something went wrong");
  }
});

module.exports = router;
