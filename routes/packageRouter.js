const express = require('express')
const mongoose = require('mongoose')
const PackageSchema = require('../Schema/packageSchema')
const Package = new mongoose.model("Package",PackageSchema)

const router = express.Router()

// POST METHOD 
    router.post('/',async(req,res)=>{
        const newPackage = Package(req.body)
        try{
            const singlePackage = await newPackage.save()
            res.status(200).json({"result":singlePackage})
        }
        catch(error){
            res.status(500).json({"result":error})
        }
    })

// GET METHOD ALL DATA 
    router.get('/',async(req,res)=>{
        try{
            const totalPackage = await Package.find({})
            res.status(200).json({"result":totalPackage});
        }
        catch(error){
            res.status(500).json({"result":error})
        }
    })
// SINGLE GET METHOD 
    router.get('/:id',async(req,res)=>{
        try{
            const singlePackage = await Package.findById(req.params.id)
            res.status(200).json({"result":singlePackage});
        }
        catch(error){
            res.status(500).json({"result":error});
        }
    })

// DELETE METHOD 
    router.delete('/:id',async(req,res)=>{
        try{
            const deletePackage= await Package.findByIdAndDelete(req.params.id)
            res.status(200).json({"Delete Confirmed!":deletePackage});
        }
        catch(error){
            res.status(500).json({"result":error});
        };
    })

module.exports = router





