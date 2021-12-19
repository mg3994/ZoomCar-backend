const Car = require("../models/car.models");
const express = require("express");
const router = express.Router();
const path = require("path"); 
const User= require("../models/user.model");


router.post("/", async (req, res) => {
    try {

        const car = await Car.create(req.body);

        return res.status(201).json({ car });
    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
});


router.get("/cars", async (req, res) => {
    try {
        const page = +req.query.page || 2;
        const size = +req.query.size || 5;
        const offset = (page - 1) * size;
       
            const cars = await Car.find()
            .skip(offset)
            .limit(size)
            .lean()
            .exec();
            const user=await User.findOne({}).lean().exec();
            const totalPage = Math.ceil((await Car.find().countDocuments()) / size);
            return res.render(  "cars/carbooking",{
            cars,totalPage,user
            });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }

});

router.get("/cars/:id", async (req, res) => {
    try {
            const car = await Car.findById(req.params.id).lean().exec();
            return res.render( "cars/bookingSummary",{
            car,
            });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }

});

router.get("/cars/:id/checkout", async (req, res) => {
    try {
            const car = await Car.findById(req.params.id).lean().exec();
            return res.render( "cars/checkout",{
           car
            });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }

});

router.get("/cars/:id/checkout/paymentOption", async (req, res) => {
    try {
            const car = await Car.findById(req.params.id).lean().exec();
            return res.render( "cars/paymentOption",{
           car
            });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }

});



router.get("/cars/:id", async (req, res) => {
    try {
            const cars = await Car.findById({City:req.params.id})
            .lean()
            .exec();
            return res.render( "cars/carbooking",{
            cars,
            });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }

});

module.exports = router;