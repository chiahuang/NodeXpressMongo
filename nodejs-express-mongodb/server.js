const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to simple application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
