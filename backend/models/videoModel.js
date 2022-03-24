const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  company: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("Videourls", videoSchema);
