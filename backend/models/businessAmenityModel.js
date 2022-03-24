const mongoose = require("mongoose");

const businessAmenitySchema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    required: true,
  },
  amenity: [{ type: mongoose.Schema.ObjectId, ref: "Amenity", required: true }],
});

module.exports = mongoose.model("BusinessAmenity", businessAmenitySchema);
