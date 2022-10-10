const express = require('express')
const mongoose = require('mongoose')
const gallarySchema = require('../Schema/gallarySchema')
const { route } = require('./packageRouter')
const Gallary = new mongoose.model("Gallary",gallarySchema)
const router = express.Router()

// POST METHOD 
router.post('/',async(req,res)=>{
    const newPackage = Gallary(req.body)
    try{
        const singleGallary = await newPackage.save()
        res.status(200).json({"result":singleGallary})
    }
    catch(error){
        res.status(500).json({"result":error})
    }
})

// GET METHOD ALL DATA 
router.get('/',async(req,res)=>{
    try{
        const totalGallary = await Gallary.find({})
        res.status(200).json({"result":totalGallary});
    }
    catch(error){
        res.status(500).json({"result":error})
    }
})

// SINGLE GET METHOD 
router.get('/:id',async(req,res)=>{
    try{
        const singleGallary = await Gallary.findById(req.params.id)
        res.status(200).json({"result":singleGallary});
    }
    catch(error){
        res.status(500).json({"result":error});
    }
})

// DELETE METHOD 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteGallary= await Gallary.findByIdAndDelete(req.params.id)
        res.status(200).json({"Delete Confirmed!":deleteGallary});
    }
    catch(error){
        res.status(500).json({"result":error});
    };
})




module.exports = router
