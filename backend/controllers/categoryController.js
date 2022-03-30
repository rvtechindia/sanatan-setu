const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Category = require("../models/categoryModel");
const PrimaryCategory = require("../models/primaryCategoryModel");
const SecondaryCategory = require("../models/secondaryCategoryModel");
const sendToken = require("../utils/jwtToken");
const sendResponse = require("../utils/sendResponse");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

// import Model

const Amenity = require("../models/amenityModel");

const BusinessAmenity = require("../models/businessAmenityModel");

const Company = require("../models/companyModel");

// Add Category (admin)

exports.addCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.create(req.body);
  sendResponse(res, 200, category);
});

// Add Primary Category

exports.addPrimaryCategory = catchAsyncErrors(async (req, res, next) => {
  const subCategory = await PrimaryCategory.create(req.body);
  sendResponse(res, 200, subCategory);
});

// Add Secondary Category

exports.addSecondaryCategory = catchAsyncErrors(async (req, res, next) => {
  const childCategory = await SecondaryCategory.create(req.body);
  sendResponse(res, 200, childCategory);
});

// Update Category

exports.updateCategory = catchAsyncErrors(async (req, res, next) => {
  const { newCategory } = req.body;
  const { id } = req.params.id;

  const category = await Category.findByIdAndUpdate(
    id,
    { businessCategory: newCategory },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  sendResponse(res, 200, category);
});

// Update Primary Category

exports.updatePrimaryCategory = catchAsyncErrors(async (req, res, next) => {
  const { newPrimaryCategory } = req.body;
  const { id } = req.params.id;
  const subCategory = await PrimaryCategory.findByIdAndUpdate(
    id,
    { subCategory: newPrimaryCategory },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  sendResponse(res, 200, subCategory);
});

// Update Secondary Category

exports.updateSecondaryCategory = catchAsyncErrors(async (req, res, next) => {
  const { newSecondaryCategory } = req.body;
  const { id } = req.params.id;
  const childCategory = await SecondaryCategory.findByIdAndUpdate(
    id,
    { childCategory: newSecondaryCategory },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  sendResponse(res, 200, childCategory);
});

// Get All Category

exports.getAllCategory = catchAsyncErrors(async (req, res, next) => {
  const categories = await Category.find();

  const results = await Company.distinct("category")

  

  const r = await Category.find({_id:results[0]})
  
  console.log(r)
  sendResponse(res, 200, categories);
});

exports.newAmenites = catchAsyncErrors(async (req, res, next) => {
  const result = await Amenity.create(req.body);

  sendResponse(res, 200, result);
});

exports.getAmenityByCategory = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.query;

  const amenities = await Amenity.find({ category: id });

  sendResponse(res, 200, amenities);
});

exports.addCompanyAmenity = catchAsyncErrors(async (req, res, next) => {
  req.body.company = req.company;
  const result = await BusinessAmenity.create(req.body);
  sendResponse(res, 200, result);
});

exports.getAmenityByCompany = catchAsyncErrors(async (req, res, next) => {
  const result = await BusinessAmenity.find({ company: req.company_id });

  sendResponse(res, 200, result);
});
