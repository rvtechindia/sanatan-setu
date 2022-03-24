const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");


exports.getUserIP = catchAsyncErrors(async (req, res, next) => {
  const {remoteAddress} = req.socket

  console.log(remoteAddress,"__________",req.ip)

  next();
});

