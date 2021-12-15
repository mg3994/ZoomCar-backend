const express = require("express");
const router = express.Router();

const Signup = require("../models/signup.model");

router.post("", async (req, res) => {
  const signup = await Signup.create(req.body);
  console.log('signup:', signup)
  res.render("login", {signup: signup});
});

router.get("", async (req, res) => {
  let user = await Signup.findById().exec()
  console.log('user:', user)

  res.render("login", user);
});


module.exports = router;
