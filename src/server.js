const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));

routes(app);

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(`${process.env.BACKEND_ENDPOINT}`,)
  .then(() => {
    console.log("Connect Db success!" + `${process.env.BACKEND_ENDPOINT}`);
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log("Server is running in port: ", +port);
});
