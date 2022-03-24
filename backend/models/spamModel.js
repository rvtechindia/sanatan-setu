const mongoose = require("mongoose");

const spamSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    enum: ["remove", "high", "low"],
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Spam", spamSchema);
