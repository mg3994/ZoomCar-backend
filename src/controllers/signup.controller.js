const express = require("express");
const router = express.Router();

const {body,validationResult}=require('express-validator');

const User = require("../models/user.model");

router.get("", async (req, res) => {
  let message =  '';
  let msg = []
  return res.render("signup", {message, msg});
});

router.post("", body("phone_num").isLength({min: 10, max:10}).withMessage("Phonenumber is required and has to a number"),
body("email").isEmail().withMessage("email is required"),
body("password").isLength({min:7}).withMessage("password is required and must be at least 7 characters"),
body("name").isLength({min:1}).withMessage("name is required")
,async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        let a=errors.array().map(({msg,param,location})=>{
            return {
                msg,
            }
        })
       
        return res.status(400).render("signup",{message:"",msg:a});
    }
    let user = await User.findOne({email:req.body.email}).lean().exec();

    if(user) return res.status(500).render("signup",{ message:"user exist. Try to login",msg:[]});
    console.log(req.body);
    console.log("here");
    
    const findph = await User.findOne({phone_num:+req.body.phone_num}).lean().exec();
    console.log('findph:', findph)
    console.log(+req.body.phone_num);
    if(findph) return res.status(500).render("signup",{ message:"Phone number registered. Try to login",msg:[]})

    let created = await User.create(req.body);
    console.log(created);
    res.redirect("/phone_login")
} catch (e) {
    res.status(500).render("signup",{ message:"REGISTRATION FAILED",msg:[]})
}

});


module.exports = router;
