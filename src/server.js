const express = require("express");
const mongoose = require("mongoose");
const connect = require("./configs/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

const signupController = require("./controllers/signup.controller");
const email_loginController = require("./controllers/email_login.controller");
const phone_loginController = require("./controllers/phone_login.controller");
app.get('/display', function(req, res) {
  res.render('display');
  });
app.use("/signup", signupController);
app.use("/email_login", email_loginController);
app.use("/phone_login", phone_loginController);

app.listen(2345, async (req, res) => {
  await connect();
  console.log("Listening on port 2345....");
});
