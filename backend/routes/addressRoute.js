const express = require("express");
const {
  newAddress,
  addressById,
  updateAddress,
} = require("../controllers/employerController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// Employer







module.exports = router;
