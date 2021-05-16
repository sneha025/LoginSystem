const express = require("express");
const app = express();
const router = require("../Router/route");

// var cors = require('cors');
const bodyParser = require("body-parser");

const port = 3000;
app.use(bodyParser.json());
app.use("/router", router);
app.listen(port, () => {
  console.log(`Server started at ${port} `);
});
