const express = require("express");

const app = express();

app.use("*", (req, res, next) => {
  res.send(`Web server is running brootha`);
});

app.listen(8080, () => {
  console.log("Running on PORT 8080");
});
