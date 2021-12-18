const express = require("express");
const mongoose = require("mongoose");
const connect = require("./configs/db");

const fs = require('fs');
const productController=require("./controllers/car.controllers");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

const signupController = require("./controllers/signup.controller");
const email_loginController = require("./controllers/email_login.controller");
const phone_loginController = require("./controllers/phone_login.controller");
app.get('/login', function(req, res) {
  res.render('login');
  });
  
app.get("/",(req,res)=>{
  res.render("index",{user:{}});
})

app.use("/signup", signupController);
app.use("/email_login", email_loginController);
app.use("/phone_login", phone_loginController);
app.use("/",productController);

// config
app.listen(4500, async (req, res) => {
  await connect();
  console.log("Listening on port 4500....");
});
