// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");

router.post("/login", AuthController.login);

router.get("/protected", AuthController.protectedRoute);

module.exports = router;
