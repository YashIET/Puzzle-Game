const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema  = new Schema({
     name: String , 
     email:String,
     message:String 
});
 
var message = mongoose.model("messages" , messageSchema );
module.exports = message;
