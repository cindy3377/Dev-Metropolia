const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/usersdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(bodyParser.json());

// POST /api/users - Create a user
app.post("/api/users", async (req, res) => {
  const { name, bio } = req.body;

  if (!name || !bio) {
    return res
      .status(400)
      .json({ message: "Please provide name and bio for the user" });
  }

  try {
    const user = await User.create({ name, bio });
    res.status(201).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "There was an error while saving the user" });
  }
});

// GET /api/users - Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "The users information could not be retrieved" });
  }
});

// GET /api/users/:id - Get a user by ID
app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res
        .status(404)
        .json({ message: "The user with the specified ID does not exist" });
    }

    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "The user information could not be retrieved" });
  }
});

// DELETE /api/users/:id - Delete a user by ID
app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndRemove(id);

    if (!user) {
      return res
        .status(404)
        .json({ message: "The user with the specified ID does not exist" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "The user could not be removed" });
  }
});

// PUT /api/users/:id - Update a user by ID
app.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, bio } = req.body;

  if (!name || !bio) {
    return res
      .status(400)
      .json({ message: "Please provide name and bio for the user" });
  }

  try {
    const user = await User.findByIdAndUpdate(id, { name, bio }, { new: true });

    if (!user) {
      return res
        .status(404)
        .json({ message: "The user with the specified ID does not exist" });
    }

    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "The user information could not be modified" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
