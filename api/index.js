const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
app.listen(port, () => {
  console.log("Server is running on port 8000");
});

console.log('8888888888888888888888888888888888888888888888888888888888')
mongoose
  .connect("mongodb+srv://Ritesh:Ritesh@cluster0.oq6cgdb.mongodb.net/", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB************************************************************************");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDb################################################################", err);
  });






