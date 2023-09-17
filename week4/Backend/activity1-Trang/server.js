const express = require("express");
const app = express();
const port = 4001;

app.use(express.json());

const connectDB = require("./config/db");
const express = require("express");
const blogRoutes = require("./routes/blogRouter");

server.get("/", (req, res) => {
  res.send("Hello World!");
});

// routes
app.use("/api/blogs", blogRoutes);

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
