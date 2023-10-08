const dotenv = require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

//connect to database

const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false); // Add this line to suppress the warning
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Hello"));

const config = require("./config");

console.log("Database: ", config.MONGO_URI);
console.log("NODE_ENV: ", config.NODE_ENV);
console.log("PORT: ", config.PORT);

app.listen(port, () => console.log(`Server started on port ${port}`));
