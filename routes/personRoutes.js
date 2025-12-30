const express=require('express');
const router=express.Router();
const person=require('./../models/person');
router.post('/',async(req,res)=>{
    try{
        const newperson=req.body;
        const persondata=new person(newperson);
        const savedperson=await persondata.save();
        console.log("person data saved successfully");
        res.status(201).json(savedperson);
    }
    catch(err){
        console.log("error in saving person data:",err);
        res.status(500).json({error:'internal server error'});
    }
});
router.get('/',async(req,res)=>{
    try{
        const data=await person.find();
        res.status(201).json(data);
        console.log("data fetched succefully");
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server erros"});
    }
});
router.get('/:worktype',async(req,res)=>{
    try{
        const worktype=req.params.worktype;
        if(worktype=='chef' || worktype=='waiter'|| worktype=='manager'|| worktype=='owner'|| worktype=='cleaner')
        {
            const data=await person.find({work:worktype});
            res.status(200).json(data);
            console.log("data fetched successfully for worktype:",worktype);
        }
        else{
            res.status(400).json({error:"invalid work type"});
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
});
router.put('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const data=req.body;
        const updatedperson=await person.findByIdAndUpdate(id,data,{
            new:true,
            runValidators:true
        });
        if(!updatedperson){
            return res.status(404).json({error:"person not found"});
        }
        res.status(200).json(updatedperson);
        console.log("person data updated successfully for id:",id);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
});
router.delete('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const updatedperson=await person.findByIdAndDelete(id);
        if(!updatedperson){
            return res.status(404).json({error:"person not found"});
        }
        res.status(200).json(updatedperson);
        console.log("person data updated successfully for id:",id);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
});
router.patch('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const data=req.body;
        const updatedperson=await person.findByIdAndUpdate(id,data,{
            new:true,
            runValidators:true
        });
        res.status(200).json(updatedperson);
        console.log("person data updated successfully for id:",id);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
});
module.exports=router;