const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    mobile_no : {type: String, required: true, unique: true},
    role : {type: String, required: true, default: 'user'}
})


userSchema.pre("save",function(next) {
    if(!this.isModified("password"))return next();
    
        bcrypt.hash(this.password, 8, (err, hash)=> {
            // Store hashed password in the db.
            this.password=hash;
            return next();
        });
})

userSchema.methods.checkPasswords = function(password){
    return new Promise((resolve, reject) => {
         bcrypt.compare(password, this.password,function(err,same) {
             if(err) return reject(err);
 
             return resolve(same);
         })
    })
 }

module.exports = mongoose.model('user', userSchema)