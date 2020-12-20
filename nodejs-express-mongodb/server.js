const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
