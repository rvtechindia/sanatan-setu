const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  stateName: {
    type: String,
    required: [true, "Please Enter State"],
    unique: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  country: {
    type: mongoose.Schema.ObjectId,
    ref: "Country",
    required: true,
  },
});

module.exports = mongoose.model("State", stateSchema);
