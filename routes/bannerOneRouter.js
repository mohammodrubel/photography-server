const express = require('express')
const mongoose = require('mongoose')
const bannerOneSchema = require('../Schema/bannerOneSchema')
const BannerOne = new mongoose.model("BannerOne",bannerOneSchema)
const router = express.Router()

// POST METHOD 
router.post('/',async(req,res)=>{
    const newBannerOne = BannerOne(req.body)
    try{
        const singleBannerOne = await newBannerOne.save()
        res.status(200).json({"result":singleBannerOne})
    }
    catch(error){
        res.status(500).json({"result":error})
    }
})

// GET METHOD ALL DATA 
router.get('/',async(req,res)=>{
    try{
        const totalBannerOne = await BannerOne.find({})
        res.status(200).json({"result":totalBannerOne});
    }
    catch(error){
        res.status(500).json({"result":error})
    }
})

// SINGLE GET METHOD 
router.get('/:id',async(req,res)=>{
    try{
        const singleBannerOne = await BannerOne.findById(req.params.id)
        res.status(200).json({"result":singleBannerOne});
    }
    catch(error){
        res.status(500).json({"result":error});
    }
})

// DELETE METHOD 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteBannerOne= await BannerOne.findByIdAndDelete(req.params.id)
        res.status(200).json({"Delete Confirmed!":deleteBannerOne});
    }
    catch(error){
        res.status(500).json({"result":error});
    };
})


module.exports = router



