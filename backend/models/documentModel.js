const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  aadharCard: {
    aadharCardNo: {
      type: Number,
      required: true,
    },
    frontImage: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    backImage: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    status: {
      type: String,
      enum: ["pending", "verified","rejected"],
      default: "pending",
    },
  },
  panCard: {
    panCardNo: {
      type: String,
      required: true,
    },
    frontImage: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    backImage: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    status: {
      type: String,
      enum: ["pending", "verified","rejected"],
      default: "pending",
    },
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    required: [true, "Please Enter Company"],
  },
});

module.exports = mongoose.model("Document", documentSchema);
