const express = require("express");
const router = express.Router();

const Journal = require("../models/journalModel");


// INSERT JOURNAL

router.post("/addJournal", async (req,res)=>{

 try{

   const journal = new Journal(req.body);

   await journal.save();

   res.json({
     message:"Journal Added Successfully"
   });

 }catch(err){

   res.status(500).json(err);

 }

});


// GET ALL JOURNALS

router.get("/getJournals", async (req,res)=>{

 try{

   const journals = await Journal.find();

   res.json(journals);

 }catch(err){

   res.status(500).json(err);

 }

});

router.delete("/deleteJournal/:id", async (req,res)=>{
 try{

   await Journal.findByIdAndDelete(req.params.id);

   res.json({message:"Journal Deleted"});

 }catch(err){
   res.status(500).json(err);
 }
});


// UPDATE JOURNAL
router.put("/updateJournal/:id", async (req,res)=>{
 try{

   await Journal.findByIdAndUpdate(req.params.id, req.body);

   res.json({message:"Journal Updated"});

 }catch(err){
   res.status(500).json(err);
 }
});

module.exports = router;