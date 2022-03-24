const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    required: true,
  },
});

module.exports = mongoose.model("Tags", tagsSchema);
