const mongoose = require("mongoose");
const User = require("../models/Usermodel");

const validateLoginCredentials = async (user) => {
  if (!user) throw new Error("Field missing");
  if (!user.username) throw new Error("Username missing");
  if (!user.password) throw new Error("Password is missing");

  try {
    const existingUser = await User.findOne({
      username: user.username,
      password: user.password,
    });
    return existingUser;
  } catch (e) {
    throw new Error(e?.message || "Something went wrong");
  }
};
module.exports = validateLoginCredentials;
