//Express:
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Connecting To Database:
const connect = require('./configs/db');


//View Engine EJS & Setting Views & Static Files:
app.set("view engine", "ejs");
app.set("views", './src/views');
app.use("/public", express.static('./src/public'));


app.listen(5555, async ()=>{
    await connect();
    console.log("listening on port 5555");
})