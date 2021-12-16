const express = require("express");
const router = express.Router();

const Login = require("../models/signup.model");

router.get("", async (req, res) => {
  res.render("email_login");
});

router.post("", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const login = await Login.findOne({ email: email, password: password });
  if (login === null) {
    console.log("User doesn't exist");
    res.redirect("/signup");
  } else {
    // res.redirect("/home");
    console.log("user exists");
  }
});
module.exports = router;
