const express=require('express');
const router=express.Router();
const menu=require('./../models/menu');

router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newdish=new menu(data);
        const response=await newdish.save();
        console.log("data saved for menu");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
});
router.get('/',async(req,res)=>{
    try{
        const data=await menu.find();
        res.status(200).json(data);
        console.log("menu data fetched successfully");
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
});
router.get('/:tastetype',async(req,res)=>{
    try{
        const tastetype=req.params.tastetype;
        if(tastetype=='Sweet' ||tastetype=='Spicy' || tastetype=='Sour'){
            const data=await menu.find({taste:tastetype});
            console.log("data fetched successfully for taste:",tastetype);
            res.status(200).json(data);
        }
        else{
            res.status(400).json({error:"invalid taste type"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
})
module.exports=router;