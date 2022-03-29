const express = require("express");
const {
  addCompany,
  getAllCompany,
  getCompanyDetails,
  uploadDocuments,
  getCompanyDocumentsById,
  verifyAadharCard,
  verifyPANCard,
  searchByKeyword,
  filterCompanyByLocation,
  newAddress,
  addToFav,
  getFav,
  companyByUser,
  addGallary,
} = require("../controllers/employerController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// Admin Route

router
  .route("/get/document")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getCompanyDocumentsById);

router
  .route("/document/aadhar")
  .put(isAuthenticatedUser, authorizeRoles("admin"), verifyAadharCard);

router
  .route("/document/pan")
  .put(isAuthenticatedUser, authorizeRoles("admin"), verifyPANCard);

// Employer Route

router
  .route("/add/company")
  .post(isAuthenticatedUser, authorizeRoles("employer"), addCompany);

router
  .route("/upload/document")
  .post(isAuthenticatedUser, authorizeRoles("employer"), uploadDocuments);

router
  .route("/reupload/document")
  .put(isAuthenticatedUser, authorizeRoles("employer"));

router
  .route("/new/address")
  .post(isAuthenticatedUser, authorizeRoles("employer"), newAddress);

router
  .route("/company/me")
  .get(isAuthenticatedUser, authorizeRoles("employer"), companyByUser);
// router
//   .route("/company/:id")
//   .put(isAuthenticatedUser, authorizeRoles("employer"));

// router
//   .route("/add/address")
//   .post(isAuthenticatedUser, authorizeRoles("employer"));

// router
//   .route("/add/gallary")
//   .post(isAuthenticatedUser, authorizeRoles("employer"));

// router
//   .route("/add/product")
//   .post(isAuthenticatedUser, authorizeRoles("employer"));

// router
//   .route("/add/service")
//   .post(isAuthenticatedUser, authorizeRoles("employer"));

// Authenticated Route

router.route("/get/company").get(getCompanyDetails);
router.route("/add/fav").post(isAuthenticatedUser, addToFav);
router.route("/get/fav").get(isAuthenticatedUser, getFav);

// Normal User Route

router.route("/get/all/company").get(getAllCompany);
router.route("/company/search").get(searchByKeyword);
router.route("/company/filter").get(filterCompanyByLocation);
// router
//   .route("/admin/category/:id")
//   .get(isAuthenticatedUser, authorizeRoles("admin"))
//   .put(isAuthenticatedUser, authorizeRoles("admin"))
//   .delete(isAuthenticatedUser, authorizeRoles("admin"));

// router
//   .route("/admin/primarycategory/:id")
//   .get(isAuthenticatedUser, authorizeRoles("admin"))
//   .put(isAuthenticatedUser, authorizeRoles("admin"))
//   .delete(isAuthenticatedUser, authorizeRoles("admin"));

// router
//   .route("/admin/secondarycategory/:id")
//   .get(isAuthenticatedUser, authorizeRoles("admin"))
//   .put(isAuthenticatedUser, authorizeRoles("admin"))
//   .delete(isAuthenticatedUser, authorizeRoles("admin"));

// router.route("/category/all").get();
// router.route("/primarycategory/:category").get();
// router.route("/secondarycategory/:primary").get();

//gallary
router
  .route("/new/gallary")
  .post(isAuthenticatedUser, authorizeRoles("employer"), addGallary);

module.exports = router;
