const express = require('express');
const mongoose =require('mongoose');
const app = express();
const cors = require('cors');
const user  = require('./Schemas/user')
app.use(express.json());
const message = require('./Schemas/message')
const level = require('./Schemas/level')

app.use(cors());

const port = 5000;

 const dp = 'mongodb+srv://rishabh:rishabh@cluster0.nos1jff.mongodb.net/newone?retryWrites=true&w=majority'


app.get("/" , (res , resp)=>{
resp.send("app is working");
// console.log("rishabh"); 
}) ;

app.post("/register" , async(req , resp)=>{
    //  console.log(req.body)
     let user1= new user (req.body);
     let result =  await user1.save(); 
     resp.send(result);
})

app.post("/login" , async(req , resp)=>{
    // console.log(req.body);
    let user2 = await user.findOne(req.body);
    console.log(user2);
    // resp.send("found");
    if(user2){
    resp.send(user2);
    }
    else {
    resp.send({result:'no user found'})
    }
})

app.post("/message" , async(req , resp)=>{
    let message1= new message (req.body);
    let result =  await message1.save(); 
   resp.send(result);
})

app.post("/level" , async(req , resp)=>{
    let level1= new level (req.body);
    let result2 =  await level1.save(); 
    resp.send(result2);
     
})

mongoose.connect(dp).then(()=>{
console.log("connection successful");   
}).catch((err)=>{

    console.log(err); 

});
app.listen(5000); 