const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');

const User = require("../models/user.model");

router.get("", async (req, res) => {
  let message = '';
  let msg = []
  res.render("email_login",{message, msg});
});

router.post("", body("email").isEmail().withMessage("Email is required"),
  body("password").isLength({ min: 7 }).withMessage("password is required and must be at least 7 characters"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
    if(!errors.isEmpty()){
        let a=errors.array().map(({msg,param,location})=>{
            return {
                msg,
            }
        })
       
        return res.status(400).render("email_login",{message:"",msg:a});
    }
    let user = await User.findOne({email:req.body.email}).lean().exec();
    console.log("user");

      if (!user) {
        res.render("signup", { message: "Register to Continue", msg: [] });
      }

      if(user.password != req.body.password) {
        return res.render("email_login", { message: "Please enter correct password", msg: [] });
      }
      // const match = await user.comparePassword(req.body.password);

      //   if(!match){
      //       return res.render("email_login", { message: "Please enter correct password", msg: [] });
      //   }
        console.log("login here");
        res.render("index", { user})
    // } else {
    //   res.render("home", user);
    //   console.log("login successfull");
    // }
    }
    catch (e) {
      res.render("email_login", { message: "Login attempt failed", msg: [] })
    }
  });
module.exports = router;
