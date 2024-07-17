const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
    required: false,
    type: String,
    default: "user",
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
