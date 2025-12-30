const mongoose = require('mongoose');
require('dotenv').config();

//const url='process.env.mongoURLLocal';
//mongoose.connect(url);
const mongoURL=process.env.mongoURL;
mongoose.connect(mongoURL)

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