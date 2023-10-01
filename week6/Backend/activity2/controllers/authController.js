// controllers/authController.js
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");
const config = require("../config");

// Function to handle user login
async function login(req, res) {
  const { username, password } = req.body;
  const user = UserModel.findByUsernameAndPassword(username, password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user.id }, config.secretKey, {
    expiresIn: "1h",
  });

  res.json({ token });
}

const protectedRoute = (req, res) => {
  // Handle requests to the protected route here
  res.json({ message: "This is a protected route!" });
};

module.exports = { login, protectedRoute };
