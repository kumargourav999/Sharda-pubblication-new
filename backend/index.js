const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const adminRoutes=require(".//admin/controller/loginController");
const journalRoutes = require(".//admin/controller/journalController");


const app=express();
app.use(cors());
app.use(express.json());
//mongoose.connect("mongodb://localhost:27017/shardaPublication");
app.use(cors());
mongoose.connect("mongodb+srv://kumar86gourav_db_user:9dN!Q0123@cluster0.5jcfhkj.mongodb.net/sharda?retryWrites=true&w=majority&appName=Cluster0")

//mongodb+srv://kumargourav:kumar123@cluster0.dxvytbg.mongodb.net/shardaPublication?retryWrites=true&w=majority&appName=Cluster0
app.use("/api/admin",adminRoutes);
app.use("/api/journals", journalRoutes);
app.listen(5000,()=>{
    console.log("server is running on port 5000");
})
