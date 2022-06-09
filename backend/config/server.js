const express = require("express");
const path = require("path");
const consign = require("consign");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./src/public"));
app.use(express.static(path.join(__dirname, "../src/views/home")));

consign(/* { cwd: path.join(__dirname, "../") } */)
  .include("./src/routes")
  .then("./src/controllers")
  .then("./src/utils")
  .into(app);

module.exports = app;
