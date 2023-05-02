const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const levelSchema  = new Schema({
     name: String ,     
     email:String,
     findlevel:String
});
 
var level = mongoose.model("levels" , levelSchema );
module.exports = level;
