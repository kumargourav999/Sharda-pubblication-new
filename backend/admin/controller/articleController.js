const express = require("express");
const router = express.Router();
const multer = require("multer");
const Article = require("../models/articleModel.js");

/* file storage */

const storage = multer.diskStorage({

 destination:(req,file,cb)=>{
  cb(null,"uploads/");
 },

 filename:(req,file,cb)=>{
  cb(null,Date.now()+"-"+file.originalname);
 }

});

const upload = multer({storage:storage});


/* submit article */

router.post("/submitArticle",upload.single("file"),async(req,res)=>{

 try{

  const article = new Article({

   name:req.body.name,
   email:req.body.email,
   phone:req.body.phone,
   journal:req.body.journal,
   subject:req.body.subject,
   message:req.body.message,
   file:req.file.filename

  });

  await article.save();

  res.json({message:"Article submitted successfully"});

 }catch(err){

  res.status(500).json({message:err.message});

 }

});


module.exports = router;