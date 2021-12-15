const express = require("express");
const mongoose = require("mongoose");
const connect = require("./configs/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use(express.static("public"));

const signupController = require("./controllers/signup.controller");
app.use("/signup", signupController);

app.listen(2345, async (req, res) => {
  await connect();
  console.log("Listening on port 2345....");
});


/*login page is not opening if I use this at line 14 app.use("/login", signupController);
then that page is working but everytime we refresh the page an get request it happening 
why I don't no. Check it once

Btw I added login page but that css file is not working check url I think that url is correct
then why that not working I don't know

*/