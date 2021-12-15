const express = require("express");
const mongoose = require("mongoose");
const connect = require("./configs/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use(express.static("public"));

const signupController = require("./controllers/signup.controller");

app.use("/signup", signupController);

app.listen(2345, async (req, res) => {
  await connect();
  console.log("Listening on port 2345....");
});
