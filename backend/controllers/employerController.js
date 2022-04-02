const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendResponse = require("../utils/sendResponse");
const cloudinary = require("cloudinary");

// Import Models
const Company = require("../models/companyModel");
const BusinessHour = require("../models/businessHourModel");
const Address = require("../models/addressModel");
const Document = require("../models/documentModel");
const Favorite = require("../models/favouriteModel");
const Gallary = require("../models/gallaryModel");
const Review = require("../models/reviewModel");

// features
const ApiFeatures = require("../utils/apifeatures");

//global function

const companyStructure = (results) => {
  var companies = [];

  let i = 0;
  // console.log(results.length);

  while (i < results.length) {
    companies = [
      ...companies,
      {
        businessName: results[i].businessName,
        category: results[i].category.businessCategory,
        image: results[i].coverImage,
        phone: "9560988343",
        location: "Ghaziabad , UP",
        Status: "Open",
        id: results[i]._id,
      },
    ];

    i++;
  }
  return companies;
};

const imageStructure = async (imageData) => {
  let images = [];

  if (imageData.length > 0) images = imageData;

  // images.push(imageData);
  console.log(imageData);

  const imagesLink = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "employer",
      quality: 50,
    });
    imagesLink.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  return imagesLink;
};

// Add Company (employer)

exports.addCompany = catchAsyncErrors(async (req, res, next) => {
  const { logo, coverImage } = req.body.registrationData;

  let images = [];

  images.push(logo);
  images.push(coverImage);

  const imagesLink = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "employer",
      quality: 50,
    });
    imagesLink.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.registrationData.logo = imagesLink[0];
  req.body.registrationData.coverImage = imagesLink[1];

  req.body.registrationData.user = req.user;

  const companyExits = await Company.findOne({
    businessName: req.body.registrationData.businessName,
  });

  let company;

  console.log(companyExits);

  if (companyExits != null) {
    return next(new ErrorHander("Business Name already Exits", 401));
  }

  company = await Company.create(req.body.registrationData);
  // address save

  req.body.address.company = company._id;
  const address = await Address.create(req.body.address);

  // gallary save
  req.body.gallary.user = req.user;
  req.body.gallary.company = company._id;
  const resultimage = await imageStructure(req.body.gallary.images);
  req.body.gallary.images = resultimage;
  const gallary = await Gallary.create(req.body.gallary);

  sendResponse(res, 200, { company, address, gallary });
});

// Add Company (admin)

exports.addCompanyAdmin = catchAsyncErrors(async (req, res, next) => {
  const company = await Company.create(req.body);

  sendResponse(res, 200, company);
});

// Get All Companies

exports.getAllCompany = catchAsyncErrors(async (req, res, next) => {
  const results = await Company.find().populate("category");

  // const schema = await BusinessHour.find({ user: req.user });

  const today = new Date();
  const day = today.getDay();

  console.log(day);

  // const status =
  //   Date.now() > time.to && Date.now() < to.from ? "open" : "closed";

  var companies = [];

  let i = 0;
  // console.log(results.length);

  while (i < results.length) {
    companies = [
      ...companies,
      {
        businessName: results[i].businessName,
        category: results[i].category.businessCategory,
        image: results[i].coverImage,
        location: "Ghaziabad , UP",
        Status: "Open",
        id: results[i]._id,
        RegistrationDate: results[i].RegistrationDate,
      },
    ];

    i++;
  }

  sendResponse(res, 200, companies);
});

// search company

exports.searchByKeyword = catchAsyncErrors(async (req, res, next) => {
  const apiFeature = new ApiFeatures(
    Company.find().populate("category"),
    req.query
  )
    .search()
    .filter();
  let searchData = await apiFeature.query;

  searchData = companyStructure(searchData);
  res.status(200).json({ searchData, success: true });
});

// Get Company Details

exports.getCompanyDetails = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.query;

  const result = await Company.findById(id).populate("category");
  sendResponse(res, 200, result);
});

exports.uploadDocuments = catchAsyncErrors(async (req, res, next) => {
  console.log("upload");
  const { aadharFront, panFront, aadharBack, panBack } = req.files;

  let images = [];

  images.push(aadharFront.tempFilePath);
  images.push(aadharBack.tempFilePath);
  images.push(panFront.tempFilePath);
  images.push(panBack.tempFilePath);

  const imagesLink = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "document",
      quality: 50,
    });
    imagesLink.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  console.log(imagesLink);

  const { aadhar, pan } = req.body;

  const documentData = {
    aadharCard: {
      aadharCardNo: aadhar,
      frontImage: imagesLink[0],
      backImage: imagesLink[1],
    },
    panCard: {
      panCardNo: pan,
      frontImage: imagesLink[2],
      backImage: imagesLink[3],
    },
    company: req.company._id,
  };

  const result = await Document.create(documentData);

  sendResponse(res, 200, result);
});

exports.getCompanyDocumentsById = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.query;
  const result = await Document.findOne({ company: id }).populate("company");
  sendResponse(res, 200, result);
});

exports.verifyAadharCard = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.query;

  const newData = await Document.findById(id);

  console.log(newData);

  newData.aadharCard.status = "verified";
  console.log(newData);

  const updateData = await Document.findByIdAndUpdate(id, newData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  sendResponse(res, 200, updateData.aadharCard.status);
});

exports.verifyPANCard = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.query;

  const newData = await Document.findById(id);

  console.log(newData);

  newData.panCard.status = "verified";
  console.log(newData);

  const updateData = await Document.findByIdAndUpdate(id, newData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  sendResponse(res, 200, updateData.aadharCard.status);
});

exports.newAddress = catchAsyncErrors(async (req, res, next) => {
  req.body.company = req.company;
  const result = await Address.create(req.body);
  sendResponse(res, 200, result);
});

exports.addressById = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.query;
  const data = await Address.findById(id);
  sendResponse(res, 200, data);
});

exports.updateAddress = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.query;

  const updatedData = await Address.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  sendResponse(res, 200, updatedData);
});

exports.deleteAddress = catchAsyncErrors(async (req, res, next) => {
  const address = await Address.findById(req.params.id);

  if (!address) {
    return next(
      new ErrorHander(`address does not exist with Id: ${req.params.id}`, 400)
    );
  }

  await address.remove();

  res.status(200).json({
    success: true,
    message: "Address Deleted Successfully",
  });
});

exports.filterCompanyByLocation = catchAsyncErrors(async (req, res, next) => {
  const apiFeature = new ApiFeatures(
    Address.find().populate("company"),
    req.query
  );
  let data = await apiFeature.query;

  let companiesData = [];

  for (let i = 0; i < data.length; i++) {
    companiesData.push(data[i].company);
  }

  res.status(200).json({ companiesData, success: true });
});

// favourite companies

exports.addToFav = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.query;

  req.body.company = id;
  req.body.user = req.user;
  console.log(req.user);

  const exits = await Favorite.findOne({ company: id });

  if (exits) {
    await exits.remove();
    return res.status(201).json({
      success: true,
      message: "Removed from Wishlist",
      toogle: "remove",
    });
  }

  const fav = await Favorite.create(req.body);

  res.status(200).json({
    success: true,
    fav,
    message: "Business is added in your Wishlist",
    toogle: "add",
  });
});

exports.getFav = catchAsyncErrors(async (req, res, next) => {
  const id = req.user._id;
  const results = await Favorite.find({ user: id }).populate("company");

  var companies = [];

  let i = 0;
  // console.log(results.length);

  while (i < results.length) {
    companies = [
      ...companies,
      {
        businessName: results[i].company.businessName,
        category: results[i].company.category.businessCategory,
        image: results[i].company.coverImage,
        phone: "9560988343",
        location: "Ghaziabad , UP",
        Status: "Open",
        id: results[i].company._id,
      },
    ];

    i++;
  }
  sendResponse(res, 200, companies);
});

exports.getWishlistByCompany = catchAsyncErrors(async (req, res, next) => {
  const id = req.query.id;
  const results = await Favorite.find({ company: id }).populate("company");

  var companies = [];

  let i = 0;
  // console.log(results.length);

  while (i < results.length) {
    companies = [
      ...companies,
      {
        businessName: results[i].company.businessName,
        category: results[i].company.category.businessCategory,
        image: results[i].company.coverImage,
        phone: "9560988343",
        location: "Ghaziabad , UP",
        Status: "Open",
        id: results[i].company._id,
      },
    ];

    i++;
  }
  sendResponse(res, 200, companies);
});

exports.companyByUser = catchAsyncErrors(async (req, res, next) => {
  const data = await Company.find({ user: req.user._id });

  const results = companyStructure(data);

  if (results.length > 0) {
    return sendResponse(res, 200, results);
  } else {
    return res
      .status(200)
      .json({ success: true, message: "Register Your Business !" });
  }
});

//gallary

exports.addGallary = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user;
  req.body.company = req.company;
  const resultimage = await imageStructure(req.body.images);
  req.body.images = resultimage;
  const result = await Gallary.create(req.body);

  sendResponse(res, 200, result);
});

//review
exports.newReview = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user;

  const review = await Review.findOne({ company: req.body.company });
  if (review) {
    return next(
      new ErrorHander(
        "You have already submitted rating ! After Approved by admin it will be visible",
        401
      )
    );
  }

  const results = await Review.create(req.body);

  sendResponse(res, 200, results);
});

exports.getMyReview = catchAsyncErrors(async (req, res, next) => {
  const results = await Review.find({ user: req.user._id });

  sendResponse(res, 200, results);
});

exports.newEnquiry = catchAsyncErrors(async (req, res, next) => {});
