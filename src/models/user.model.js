const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema(
  {
    phone_num: { type: Number, required: true },
    email: { type: String, required: true, unique: true},
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


// userSchema.pre("save", function (next){
//   if(!this.isModified("password")) return next();
//       bcrypt.hash(this.password, 10, (err, hash)=> {
//           this.password=hash;
//           return next();
//       });
 
// });

// userSchema.methods.checkPassword = function(password){
//   console.log("password",password);
//   return new Promise((resolve,reject)=>{
//       bcrypt.compare(password,this.password, function(err, same) {
//           if(err) return reject(err);
//           return resolve(same);
//       });
//   })

// }

// userSchema.pre("save",function(next) {
//   if(!this.isModified("password"))return next();
//       bcrypt.hash(this.password, 8, (err, hash)=> {
//           this.password=hash;
//           return next();
//       });
  
// })

// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//   console.log("at password");
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//       if (err) return cb(err);
//       cb(null, isMatch);
//   });
// };

// userSchema.methods.checkPassword = async function (password) {
//   console.log("above password");
//   return new Promise((resolve, reject) => {
//     console.log("at password");
//       bcrypt.compare(password, this.password, function (err, same) {
//           if(err) return reject(err);

//           return resolve(same);
//       })
//   })
// }


module.exports = mongoose.model("user", userSchema );
