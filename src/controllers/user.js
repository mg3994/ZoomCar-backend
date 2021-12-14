const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config()
const User = require('../models/user');

let newToken = (user)=>{
    return jwt.sign({user: user}, process.env_USER_TOKEN)
}

router.post('/', async (req, res) => {
    try{

        const user = await User.create(req.body).lean().exec()
        const token = newToken(user)
        return res.status(200).json({user, token});

    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" }) 
    }
})

router.get('/', async (req, res) => {
    try{

        const user = await User.find().lean().exec();
        const token = newToken(user)
        return res.status(200).json({user, token});

    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" }) 
    }
})