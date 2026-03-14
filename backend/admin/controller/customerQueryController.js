const express = require("express");
const router = express.Router();
const CustomerQuery = require("../models/customerQueryModel"); // check path

/* Submit query */

router.post("/submitQuery", async (req,res)=>{

  try{

    const query = new CustomerQuery(req.body);

    await query.save();

    res.json({
      success:true,
      message:"Query submitted successfully"
    });

  }catch(err){

    res.status(500).json({message:err.message});

  }

});

/* Get all queries */

router.get("/getQueries", async (req,res)=>{

  try{

    const queries = await CustomerQuery.find().sort({createdAt:-1});

    res.json(queries);

  }catch(err){

    res.status(500).json({message:err.message});

  }

});

module.exports = router;