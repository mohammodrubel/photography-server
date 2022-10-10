const express = require('express')
const mongoose = require('mongoose')
const reviewSchema = require('../Schema/reviewSchema')
const Review =new mongoose.model("Review",reviewSchema)
const router = express.Router()

// POST METHOD 
router.post('/',async(req,res)=>{
    const newRiview = Review(req.body)
    try{
        const singleReview = await newRiview.save()
        res.status(200).json({"result":singleReview})
    }
    catch(error){
        res.status(500).json({"result":error})
    }
})

// GET METHOD ALL DATA 
router.get('/',async(req,res)=>{
    try{
        const totalReview = await Review.find({})
        res.status(200).json({"result":totalReview});
    }
    catch(error){
        res.status(500).json({"result":error})
    }
})

// SINGLE GET METHOD 
router.get('/:id',async(req,res)=>{
    try{
        const singleReview = await Review.findById(req.params.id)
        res.status(200).json({"result":singleReview});
    }
    catch(error){
        res.status(500).json({"result":error});
    }
})

// DELETE METHOD 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteReview= await Review.findByIdAndDelete(req.params.id)
        res.status(200).json({"Delete Confirmed!":deleteReview});
    }
    catch(error){
        res.status(500).json({"result":error});
    };
})



module.exports = router