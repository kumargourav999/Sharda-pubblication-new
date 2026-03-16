// const express = require("express");
// const router = express.Router();
// const multer=require("multer");
const Article = require("../models/articleModel.js");

// /* file storage */

// const storage = multer.diskStorage({
//  destination:(req,file,cb)=>{
//   cb(null,"uploads/");
//  },
//  filename:(req,file,cb)=>{
//   cb(null,Date.now()+"-"+file.originalname);
//  }
// });

// const upload = multer({storage:storage});

// /* submit article */

// router.post("/submitArticle", upload.single("file"), async(req,res)=>{

//  try{

//   const article = new Article({

//    name:req.body.name,
//    email:req.body.email,
//    phone:req.body.phone,
//    journal:req.body.journal,
//    subject:req.body.subject,
//    message:req.body.message,
//    file: req.file ? req.file.filename : ""   // ✅ FIX

//   });

//   await article.save();

//   res.json({message:"Article submitted successfully"});

//  }catch(err){

//   console.log(err); // helps debugging
//   res.status(500).json({message:err.message});

//  }

// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const multer = require("multer");
//const Document = require("../models/document");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype === "application/pdf") {
            cb(null, true);
        } else {
            cb(new Error("Only PDF allowed"));
        }
    }
});

router.post("/submitArticle", upload.single("file"), async (req, res) => {

    try {
        console.log("fghjhg")
       if(!req.file){
        return res.status(400).json({message:"File not uploded"});
       }
         const article = new Article({

   name:req.body.name,
   email:req.body.email,
   phone:req.body.phone,
   journal:req.body.journal,
   subject:req.body.subject,
   message:req.body.message,
   file: req.file ? req.file.filename : ""   

  });

  await article.save();

//   res.json({message:"Article submitted successfully"});
        res.json({
            message: "Uploaded Successfully",
            fileUrl: "http://localhost:5000/uploads/" + req.file.filename
        });

    } catch (error) {
        res.status(500).json("hi");
    }

});
router.get("/ok",(req,res)=>{
    res.json("dfghjjhgfghj");
})

module.exports = router;
