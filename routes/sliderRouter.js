const express = require('express')
const mongoose = require('mongoose')
const sliderSchema = require('../Schema/sliderSchema')
const Slider = new mongoose.model("Slider",sliderSchema)
const router = express.Router()

// POST METHOD 
router.post('/',async(req,res)=>{
    const newSlider = Slider(req.body)
    try{
        const singleSlider = await newSlider.save()
        res.status(200).json({"result":singleSlider})
    }
    catch(error){
        res.status(500).json({"result":error})
    }
})


// GET METHOD ALL DATA 
router.get('/',async(req,res)=>{
    try{
        const totalSlider = await Slider.find({})
        res.status(200).json({"result":totalSlider});
    }
    catch(error){
        res.status(500).json({"result":error})
    }
})

// SINGLE GET METHOD 
router.get('/:id',async(req,res)=>{
    try{
        const singleSlider = await Slider.findById(req.params.id)
        res.status(200).json({"result":singleSlider});
    }
    catch(error){
        res.status(500).json({"result":error});
    }
})

// DELETE METHOD 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteSlider= await Slider.findByIdAndDelete(req.params.id)
        res.status(200).json({"Delete Confirmed!":deleteSlider});
    }
    catch(error){
        res.status(500).json({"result":error});
    };
})


module.exports = router