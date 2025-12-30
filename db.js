const mongoose = require('mongoose');
const url='mongodb://localhost:27017/hotels';
mongoose.connect(url);
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("database is connected successfully");
});
db.on('error',(err)=>{
    console.log("error in database connection:",err);
});
db.on('disconnected',()=>{
    console.log("database is disconnected");
});
module.exports=db;