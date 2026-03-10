const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const adminRoutes=require(".//admin/controller/loginController");
const journalRoutes = require(".//admin/controller/journalController");


const app=express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/shardaPublication");
app.use("/api/admin",adminRoutes);
app.use("/api/journals", journalRoutes);
app.listen(5000,()=>{
    console.log("server is running on port 5000");
})