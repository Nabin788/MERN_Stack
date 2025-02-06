const express = require("express");
const userAuthController = require("../controllers/userAuthController.js");

const router = express.Router();

router.route("/register").post(userAuthController);

module.exports = router;