const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const CommentsModel = mongoose.model("Comments", CommentsSchema);

module.exports = CommentsModel;
