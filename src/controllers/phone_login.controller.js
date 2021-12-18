const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require("../models/user.model");

router.get("", async (req, res) => {
  let message = '';
  let msg = []
  res.render("phone_login", { message, msg });
});

router.post("", body("phone_num").isLength({ min: 10, max: 10 }).withMessage("Phonenumber is required and has to a number"),
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
       
        return res.status(400).render("phone_login",{message:"",msg:a});
    }
    let user = await User.findOne({phone_num:req.body.phone_num}).lean().exec();
    console.log("user",user);

      if (!user) {
        res.render("signup", { message: "Register to Continue", msg: [] });
      }


      if(user.password !== req.body.password) {
        return res.render("phone_login", { message: "Please enter correct password", msg: [] })
      }
      
      // const match = await user.checkPassword(pwd);
      // console.log(match);


      //   if(!match){
      //       return res.render("phone_login", { message: "Please enter correct password", msg: [] });
      //   }
        console.log("login here");
        res.render("index", { user})
    // } else {
    //   res.render("home", user);
    //   console.log("login successfull");
    // }
    }
    catch (e) {
      res.render("phone_login", { message: "Login attempt failed", msg: [] })
    }
  });
module.exports = router;
