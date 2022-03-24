const Country = require("../models/countryModel");
const City = require("../models/cityModel");
const State = require("../models/stateModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");

exports.addCountry = catchAsyncErrors(async (req, res, next) => {
  const country = await Country.create(req.body);
  res.status(200).json({
    success: true,
    country,
  });
});

exports.addState = catchAsyncErrors(async (req, res, next) => {
  const state = await State.create(req.body);
  res.status(200).json({
    success: true,
    state,
  });
});

exports.addCity = catchAsyncErrors(async (req, res, next) => {
  const city = await City.create(req.body);
  res.status(200).json({
    success: true,
    city,
  });
});

exports.getCountries = catchAsyncErrors(async (req, res, next) => {
  const countries = await Country.find();
  res.status(200).json({
    success: true,
    countries,
  });
});

exports.getState = catchAsyncErrors(async (req, res, next) => {
  const state = await State.find().populate("country");
  res.status(200).json({
    success: true,
    state,
  });
});

exports.getCity = catchAsyncErrors(async (req, res, next) => {
  const city = await City.find().populate("state");
  res.status(200).json({
    success: true,
    city,
  });
});

exports.getStateByCountry = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.query;
  console.log(id);
  const state = await State.find({ country: id });
  res.status(200).json({
    success: true,
    state,
  });
});

exports.getCityByState = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.query;
  console.log(id);
  const city = await City.find({ state: id });
  res.status(200).json({
    success: true,
    city,
  });
});
