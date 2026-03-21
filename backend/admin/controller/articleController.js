// const express = require("express");
// const router = express.Router();
// const multer=require("multer");
const Article = require("../models/articleModel.js");
const fs =require("fs");
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
const path=require("path");
//const Document = require("../models/document");

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "uploads/");
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + "-" + file.originalname);
//     }
// });

// const upload = multer({
//     storage: storage,
//     fileFilter: function (req, file, cb) {
//         if (file.mimetype === "application/pdf") {
//             cb(null, true);
//         } else {
//             cb(new Error("Only PDF allowed"));
//         }
//     }
// });

// router.post("/submitArticle", upload.single("file"), async (req, res) => {

//     try {
//         console.log("fghjhg")
//        if(!req.file){
//         return res.status(400).json({message:"File not uploded"});
//        }
//          const article = new Article({

//    name:req.body.name,
//    email:req.body.email,
//    phone:req.body.phone,
//    journal:req.body.journal,
//    subject:req.body.subject,
//    message:req.body.message,
//    file: req.file ? req.file.filename : ""   

//   });

//   await article.save();

// //   res.json({message:"Article submitted successfully"});
//         res.json({
//             message: "Uploaded Successfully",
//             fileUrl: "http://localhost:5000/uploads/" + req.file.filename
//         });

//     } catch (error) {
//         res.status(500).json("hi");
//     }

// });



const upload = require("../middleware/upload.js")

const cloudinary = require("../config/cloudinary");

/* SUBMIT ARTICLE */
router.post("/submitArticle", upload.single("file"), async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({ message: "File not uploaded" });
    }

    const article = new Article({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      journal: req.body.journal,
      subject: req.body.subject,
      message: req.body.message,

      // ✅ Store URL instead of filename
      file: req.file.path,

      // ✅ Save public_id for delete
      public_id: req.file.filename,
    });

    await article.save();

    res.json({
      message: "Uploaded Successfully",
      fileUrl: req.file.path,
    });

  } catch (error) {
  console.log("ERROR:", error);   // ✅ full error
  res.status(500).json({ message: error.message || error });
}
});
router.get("/ok",(req,res)=>{
    res.json("dfghjjhgfghj");
})


router.get("/getArticles", async(req,res)=>{
 try{

  const articles = await Article.find().sort({createdAt:-1});

  res.json(articles);

 }catch(err){
  res.status(500).json(err.message);
 }
});


/* DELETE ARTICLE */

router.delete("/deleteArticle/:id", async(req,res)=>{
 try{

  const article = await Article.findById(req.params.id);

  const filePath = path.join(__dirname, "../../uploads/", article.file);

    // ✅ Check if file exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    } else {
      console.log("File not found, skipping delete");
    }


  await Article.findByIdAndDelete(req.params.id);

  res.json({message:"Article deleted"});

 }catch(err){
  res.status(500).json(err.message);
 }
});
module.exports = router;
