const mongoose = require("mongoose");

const ToySchema = new mongoose.Schema({
  description: {
    required: true,
    type: String,
  },

  name: {
    required: true,
    type: String,
  },

  img: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: String,
  },
});

const ToyModel = mongoose.model("Toy", ToySchema);

module.exports = ToyModel;
