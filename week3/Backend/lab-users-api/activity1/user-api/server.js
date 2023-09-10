const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Add your routes here

const users = [];

// Endpoint to create a new user
app.post("/api/users", (req, res) => {
  const { name, bio } = req.body;

  if (!name || !bio) {
    return res
      .status(400)
      .json({ message: "Please provide name and bio for the user" });
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    bio,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// Endpoint to get all users
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

// Endpoint to get a user by ID
app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === req.params.id);

  if (!user) {
    return res
      .status(404)
      .json({ message: "The user with the specified ID does not exist" });
  }

  res.status(200).json(user);
});

// Endpoint to delete a user by ID
app.delete("/api/users/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === req.params.id);

  if (userIndex === -1) {
    return res
      .status(404)
      .json({ message: "The user with the specified ID does not exist" });
  }

  const deletedUser = users.splice(userIndex, 1)[0];
  res.status(200).json(deletedUser);
});

// Endpoint to update a user by ID
app.put("/api/users/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === req.params.id);

  if (userIndex === -1) {
    return res
      .status(404)
      .json({ message: "The user with the specified ID does not exist" });
  }

  const { name, bio } = req.body;

  if (!name || !bio) {
    return res
      .status(400)
      .json({ message: "Please provide name and bio for the user" });
  }

  users[userIndex] = {
    ...users[userIndex],
    name,
    bio,
  };

  res.status(200).json(users[userIndex]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
