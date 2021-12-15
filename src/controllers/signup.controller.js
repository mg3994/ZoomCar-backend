const express = require("express");
const router = express.Router();

const Signup = require("../models/signup.model");

router.get("", async (req, res) => {
  return res.render("signup");
});

router.post("", async (req, res) => {
  const signup = await Signup.create(req.body);
  return res.render("login", {user: user})
});

module.exports = router;
