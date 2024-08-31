const express = require("express");

const User = require("../models/Usermodel");
const validateLoginCredentials = require("../utils/User");

const router = express.Router();

router.post("/register", async ({ body }, res) => {
  try {
    const { name, surname, username, password, role } = body || {};
    const newUser = await User.create({
      name,
      surname,
      username,
      password,
      role,
    });
    res.send(newUser._id);
  } catch (e) {
    res.status(400).send("User creation failed");
  }
});

router.post("/login", async ({ body }, res) => {
  try {
    const user = await validateLoginCredentials(body);
    if (!user) return res.status(400).send("Username or password incorect");
    res.send(user._id);
  } catch (e) {
    res.status(400).send("Something went wrong");
  }
});

router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

module.exports = router;
