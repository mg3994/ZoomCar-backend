const express = require("express");
const router = express.Router();



const Signup = require("../models/signup.model");

router.get("", async (req, res) => {
  return res.render("signup");
});

router.post("", async (req, res) => {
  try {
    let user = await Signup.findOne({email:req.body.email}).lean().exec();

    if(user) return res.status(500).render("signup",{ message:"user exist"});

    user = await Signup.create(req.body);
    // const token = newToken(user);

    return res.render("signup")
} catch (e) {
    res.status(500).render("signup",{ message:"REGISTRATION FAILED"})
}

});

// router.post("", 
// body("phone_num").isLength({min: 10, max:10}).withMessage("phonenumber is required and has to be 10 digit"),
// body("email").isEmail().withMessage("email is required"),
// body("password").isLength({min:7}).withMessage("password is required and must be at least 7 characters"),
// body("name").isLength({min:1}).withMessage("name is required")
// ,async (req, res) => {
//   const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         let a=errors.array().map(({msg,param,location})=>{
//             return {
//                 msg,
//             }
//         })
//         return res.status(400).send({errors: a});
//     }
  
//     let find = await Signup.findOne({ email: req.body.email })
//     if (find) {
//       console.log("find");
//       return res.status(201).send({find});
//     } else {
//       const signup = await Signup.create(req.body);
//       console.log("posted");
//       return res.status(200).send({signup})
//       // res.redirect("/email_login");
//       // res.redirect("/phone_login");
//     }

module.exports = router;
