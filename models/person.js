const mongoose=require('mongoose');

const personschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true,
        enum:['chef','waiter','manager','cleaner','owner']
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
});
const person=mongoose.model('person',personschema);
module.exports=person;
