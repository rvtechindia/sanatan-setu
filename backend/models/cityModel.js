const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  cityName: {
    type: String,
    required: [true, "Please Enter City"],
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  state: {
    type: mongoose.Schema.ObjectId,
    ref: "State",
  },
});

module.exports = mongoose.model("City", citySchema);
