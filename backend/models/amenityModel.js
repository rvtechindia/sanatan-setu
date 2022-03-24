const mongoose = require("mongoose");

const amenitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Amenity"],
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
  },
});

module.exports = mongoose.model("Amenity", amenitySchema);
