const express=require("express");
const router=express.Router();
const Admin=require("../models/loginModel");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const admin=await Admin.findOne({email});
        if(!admin){
            return res.status(400).json({message:"Invalid Email"});
        }
        const isMatch=await bcrypt.compare(password,admin.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid Password"});
        }
        const token=jwt.sign(
            {id:admin._id},
            "secretkey",
            {expiresIn:"1d"}
        );
        res.json({
      token,
      message:"Login successful"
    });
    }catch(err){
    res.status(500).json(err);
  }
}
)
module.exports=router;