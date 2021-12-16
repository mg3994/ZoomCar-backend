const express = require("express");
const router = express.Router();

const Login = require("../models/signup.model");

router.get("", async (req, res) => {
  res.render("phone_login");
});

router.post("", async (req, res) => {
  const phone_num = req.body.phone_num;
  const password = req.body.password;
  const login = await Login.findOne({
    phone_num: phone_num,
    password: password,
  });
  if (login === null) {
    console.log("User doesn't exist");
    res.redirect("/signup");
  } else {
    // res.redirect("/home");
    console.log("login successfull");
  }
});
module.exports = router;
