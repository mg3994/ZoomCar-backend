const express = require('express');

const productController=require("./controllers/car.controllers");
const app = express();
app.use(express.json());
app.use(express.static("public"))

app.set('view engine', 'ejs')

app.use("/cars",productController);

module.exports =app; 