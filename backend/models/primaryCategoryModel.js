const mongoose = require("mongoose");

const primaryCategorySchema = new mongoose.Schema({
  subCategory: {
    type: String,
    required: [true, "Please Enter Your Category"],
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: true,
  },
});

module.exports = mongoose.model("PrimaryCategory", primaryCategorySchema);
