const express=require('express');
const router=express.Router();
const Pet=require('../Models/pet');

router.get('/',async(req,res)=>{
    const pets=await Pet.find();
    res.json(pets);
});

router.post('/',async(req,res)=>{
    const pet=new Pet(req.body);
    await pet.save();
    res.status(201).json(pet);
});

router.delete('/:id',async(req,res)=>{
    await Pet.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports=router;