const mongoose = require("mongoose");
const Admin = require("../models/Adminmodel");

const validateLoginCredentialsadmin = async (admin) => {
  if (!admin) throw new Error("Field missing");
  if (!admin.username) throw new Error("Username missing");
  if (!admin.password) throw new Error("Password is missing");

  try {
    const existingUser = await Admin.findOne({
      username: admin.username,
      password: admin.password,
    });
    return existingUser;
  } catch (e) {
    throw new Error(e?.message || "Something went wrong");
  }
};
module.exports = validateLoginCredentialsadmin;
