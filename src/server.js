const express = require("express");
const mongoose = require("mongoose");
const connect = require("./configs/db");
const User = require("./models/user.model");
const {body, validationResult}= require("express-validator");

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

app.post("", body("phone_num").isLength({ min: 10, max: 10 }).withMessage("Phonenumber is required and has to a number"),
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
    // console.log("user",user);

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


app.get('/login', function(req, res) {
  res.render('login');
  });
  
app.get("/",async (req,res)=>{
  const user= await User.findOne({}).lean().exec();
  res.render("index",{user});
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
