const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
app.use(express.json());

const saltRounds = 10;

// In-memory storage for user data with hashed passwords
const users = [
  { username: "sami", passwordHash: "" },
  { username: "rami", passwordHash: "" },
];

// Function to hash a password
async function hashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

// Endpoint for user registration
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: "Username already taken" });
  }

  // Hash the password before storing it
  const passwordHash = await hashPassword(password);

  // Save the user data (with hashed password)
  users.push({ username, passwordHash });

  res.status(201).json({ message: "User registered successfully" });
});

app.get("/users", (req, res) => {
  // Return user information without password hashes
  const userInformation = users.map((user) => {
    return { username: user.username };
  });

  res.status(200).json(userInformation);
});

// Endpoint for user login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = users.find((user) => user.username === username);

  // If the user is not found, return an error
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  // Compare the provided password with the stored password hash
  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

  // If the passwords match, the login is successful
  if (isPasswordValid) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Incorrect password" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
