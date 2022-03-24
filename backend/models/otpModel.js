const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  OTP: {
    type: String,
    required: true,
  },
  expires: {
    type: Date,
    default: Date.now() + 1000,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("OTP", otpSchema);
