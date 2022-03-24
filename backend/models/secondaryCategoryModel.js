const mongoose = require("mongoose");

const secondaryCategorySchema = new mongoose.Schema({
  childCategory: {
    type: String,
    required: [true, "Please Enter Your Category"],
  },
  primaryCategory: {
    type: mongoose.Schema.ObjectId,
    ref: "PrimaryCategory",
  },
});

module.exports = mongoose.model("SecondaryCategory", secondaryCategorySchema);
