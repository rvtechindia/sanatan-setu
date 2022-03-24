const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  add: {
    type: String,
    required: [true, "Please Enter State"],
  },
  locality: {
    type: String,
  },
  country: {
    type: mongoose.Schema.ObjectId,
    ref: "Country",
    required: [true, "Please Enter Country"],
  },
  state: {
    type: mongoose.Schema.ObjectId,
    ref: "State",
    required: [true, "Please Enter State"],
  },
  city: {
    type: mongoose.Schema.ObjectId,
    ref: "City",
    required: [true, "Please Enter City"],
  },
  pincode: {
    type: Number,
    required: [true, "Please Enter Pin Code"],
  },
  landmark: {
    type: String,
  },
  officeType: {
    type: String,
    enum: ["HQ", "BR"],
    default:"HQ"
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    required: [true, "Please Enter Company"],
  },
});

module.exports = mongoose.model("Address", addressSchema);
