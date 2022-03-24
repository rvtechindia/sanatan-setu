const express = require("express");
const {
  addCategory,
  addPrimaryCategory,
  addSecondaryCategory,
  getAllCategory,
  newAmenites,
  getAmenityByCategory,
} = require("../controllers/categoryController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router
  .route("/admin/new/category")
  .post(isAuthenticatedUser, authorizeRoles("admin"), addCategory);
router
  .route("/admin/new/primarycategory")
  .post(isAuthenticatedUser, authorizeRoles("admin"), addPrimaryCategory);
router
  .route("/admin/new/secondarycategory")
  .post(isAuthenticatedUser, authorizeRoles("admin"), addSecondaryCategory);

router.route("/get/all/category").get(getAllCategory);

// Amenity

router
  .route("/admin/new/amenity")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newAmenites);

router
  .route("/get/amenity")
  .get(isAuthenticatedUser, authorizeRoles("employer"), getAmenityByCategory);

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

// Amenities

module.exports = router;
