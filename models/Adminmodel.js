const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },

  surname: {
    required: true,
    type: String,
  },

  username: {
    required: true,
    type: String,
    unique: true,
  },

  password: {
    required: true,
    type: String,
  },
  role: {
    default: "admin",
    type: String,
  },
});

const AdminModel = mongoose.model("Admin", AdminSchema);

module.exports = AdminModel;
