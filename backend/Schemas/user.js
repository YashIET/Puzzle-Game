const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema  = new Schema({
     name: String , 
     email:String,
     password:String 
});

var user = mongoose.model("users" , userSchema );
module.exports = user;



