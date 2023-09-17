const express = require("express");
const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

// create a new blog
const createBlog = async (req, res) => {
  console.log("CREATE a blog");
  res.send("createBlog");
};

// get all blogz
const getBlogs = async (req, res) => {
  const blogs = await Blog.find({});
  console.log("GET all blogs");
  res.status(200).json({ success: true, data: blogs });
};
// get a single blog
const getBlog = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const blog = await Blog.findById(id);
  res.status(200).json({ success: true, data: blog });
  console.log("GET a single blog");
};

// delete a blog
const deleteBlog = async (req, res) => {
  // Your code here
};

// Update blog using PATCH
const patchBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update blog using PUT
const putBlog = async (req, res) => {
  // Your code here
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  putBlog,
  patchBlog,
};
