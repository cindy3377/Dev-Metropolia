const express = require("express");
const router = express.Router();

// Sample data store for posts (replace with your database)
let posts = [];

// Middleware to check if a post with a given ID exists
function validatePostId(req, res, next) {
  const { id } = req.params;
  const post = posts.find((p) => p.id == id);

  if (!post) {
    return res
      .status(404)
      .json({ message: "The post with the specified ID does not exist" });
  }

  req.post = post;
  next();
}

// Route 1: Get all posts
router.get("/", (req, res) => {
  res.status(200).json(posts);
});

// Route 2: Get a specific post by ID
router.get("/:id", validatePostId, (req, res) => {
  res.status(200).json(req.post);
});

// Route 3: Create a new post
router.post("/", (req, res) => {
  const { title, contents } = req.body;

  if (!title || !contents) {
    return res
      .status(400)
      .json({ message: "Please provide title and contents for the post" });
  }

  const newPost = {
    title,
    contents,
    created_at: new Date(),
    updated_at: new Date(),
  };
  posts.push(newPost);

  res.status(201).json(newPost);
});

// Route 4: Update a post by ID
router.put("/:id", validatePostId, (req, res) => {
  const { title, contents } = req.body;

  if (!title || !contents) {
    return res
      .status(400)
      .json({ message: "Please provide title and contents for the post" });
  }

  req.post.title = title;
  req.post.contents = contents;
  req.post.updated_at = new Date();

  res.status(200).json(req.post);
});

// Route 5: Delete a post by ID
router.delete("/:id", validatePostId, (req, res) => {
  const index = posts.findIndex((p) => p.id == req.post.id);
  posts.splice(index, 1);

  res.status(200).json(req.post);
});

// Route 6: Get comments for a post by ID
router.get("/:id/comments", validatePostId, (req, res) => {
  // Implement logic to retrieve comments for the post with the specified ID
  // Example:
  const comments = getCommentsByPostId(req.post.id);
  res.status(200).json(comments);
});

module.exports = router;
