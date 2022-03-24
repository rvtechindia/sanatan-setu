const express = require("express");
const {
  getCountries,
  getState,
  getCity,
  getStateByCountry,
  addCountry,
  addState,
  addCity,
  getCityByState,
} = require("../controllers/locationController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router
  .route("/admin/new/country")
  .post(isAuthenticatedUser, authorizeRoles("admin"), addCountry);
router
  .route("/admin/new/state")
  .post(isAuthenticatedUser, authorizeRoles("admin"), addState);
router
  .route("/admin/new/city")
  .post(isAuthenticatedUser, authorizeRoles("admin"), addCity);

router.route("/get/all/country").get(isAuthenticatedUser, getCountries);
router.route("/get/all/state").get(isAuthenticatedUser, getState);
router.route("/get/all/city").get(isAuthenticatedUser, getCity);

router.route("/get/state").get(isAuthenticatedUser, getStateByCountry);
router.route("/get/city").get(isAuthenticatedUser, getCityByState);

module.exports = router;
