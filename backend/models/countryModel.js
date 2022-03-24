const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  countryName: {
    type: String,
    required: [true, "Please Enter Country"],
    unique:true
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

module.exports = mongoose.model("Country", countrySchema);
