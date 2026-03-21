const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({

name:String,
email:String,
phone:String,
journal:String,
subject:String,
message:String,
file:String,
public_id:String,
createdAt:{
 type:Date,
 default:Date.now
}

});

module.exports = mongoose.model("Article",articleSchema);