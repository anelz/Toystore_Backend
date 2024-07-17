const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  toyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Toy",
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const ReviewsModel = mongoose.model("Reviews", ReviewsSchema);

module.exports = ReviewsModel;
