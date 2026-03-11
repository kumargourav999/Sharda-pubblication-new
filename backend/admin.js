const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./admin/models/loginModel");

mongoose.connect("mongodb+srv://kumar86gourav_db_user:9dN!Q0123@cluster0.5jcfhkj.mongodb.net/sharda?retryWrites=true&w=majority&appName=Cluster0")
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

module.exports =createAdmin;
