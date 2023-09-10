const express = require("express");
const bodyParser = require("body-parser");

const postsRouter = require("./api/posts/posts-router");

const app = express();

app.use(bodyParser.json());

app.use("/api/posts", postsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
