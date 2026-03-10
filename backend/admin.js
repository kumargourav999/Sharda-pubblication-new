const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./admin/models/loginModel");

mongoose.connect("mongodb://localhost:27017/shardaPublication")
.then(()=>console.log("MongoDB connected"));

async function createAdmin(){

 const password = await bcrypt.hash("admin123",10);

 const admin = new Admin({
   email:"admin@sharda.com",
   password
 });

 await admin.save();

 console.log("Admin created");

 process.exit();
}

createAdmin();