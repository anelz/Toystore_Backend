const express = require("express");

const Admin = require("../models/Adminmodel");
const validateLoginCredentialsadmin = require("../utils/Admin");

const router = express.Router();

router.post("/register", async ({ body }, res) => {
  try {
    const { name, surname, username, password, role } = body || {};
    if (role !== "admin") return res.status(400).send("Role incorrect");
    const newAdmin = await Admin.create({
      name,
      surname,
      username,
      password,
      role,
    });
    res.send(newAdmin._id);
  } catch (e) {
    res.status(400).send("Admin creation failed");
  }
});

router.post("/login", async ({ body }, res) => {
  try {
    const admin = await validateLoginCredentialsadmin(body);
    if (!admin) return res.status(400).send("Username or password incorect");
    res.send(admin.role);
  } catch (e) {
    res.status(400).send("Something went wrong");
  }
});

router.get("/", async (req, res) => {
  const admins = await Admin.find();
  res.send(admins);
});

module.exports = router;
