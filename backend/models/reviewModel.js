const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  qualityReview: {
    type: Number,
    required: true,
  },
  serviceReview: {
    type: Number,
    required: true,
  },
  priceReview: {
    type: Number,
    required: true,
  },
  locationReview: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    required: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
