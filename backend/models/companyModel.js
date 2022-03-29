const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: [true, "Please Enter Your Business Name"],
    trim:true
  },
  website: {
    type: String,
    required: [true, "Please Enter Your Website"],
  },
  size: {
    type: Number,
    required: [true, "Please Enter Your Size of Company"],
  },
  founded: {
    type: Number,
    required: [true, "Please Enter Year in which company founded"],
  },
  logo: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  coverImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  RegistrationDate: {
    type: Date,
    default: Date.now,
  },
  tagline: {
    type: String,
    required: [true, "Please Enter Tagline of your company"],
  },
  description: {
    type: String,
    required: [true, "Please Enter Description of your company"],
  },
  companyType: {
    type: String,
    required: [true, "Please Enter Company Type"],
  },
  Status: {
    type: String,
    enum: ["active", "inactive", "pending"],
    default: "pending",
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: true,
  },
  primaryCategory: {
    type: mongoose.Schema.ObjectId,
    ref: "PrimaryCategory",
    // required: true,
  },
  secondaryCategory: {
    type: mongoose.Schema.ObjectId,
    ref: "SecondaryCategory",
    // required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  claimed: {
    type: Boolean,
    default: true,
  },
  priceRange: {
    type: String,
    enum: ["Premium", "Cheap", "Medium", "Prefer to say"],
    default: "Prefer to say",
  },
  featured:{
    type:String, 
    enum:["true","false"],
    default:false
  }
});

module.exports = mongoose.model("Company", companySchema);
