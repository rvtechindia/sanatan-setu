const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  businessCategory: {
    type: String,
    required: [true, "Please Enter Your Category"],
  },
});

module.exports = mongoose.model("Category", categorySchema);
