const mongoose = require("mongoose");

const blocklistSchema = new mongoose.Schema({
  reason: {
    type: String,
    required: true,
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    required: true,
  },
});

module.exports = mongoose.model("Blocklist", blocklistSchema);
