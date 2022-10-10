const express = require('express')
const mongoose = require('mongoose')
const contactUsSchema = require('../Schema/contactUsSchema')
const Contact = new mongoose.model('Contact',contactUsSchema)
const router = express.Router()

    
// POST METHOD 
router.post('/',async(req,res)=>{
    const newContact = Contact(req.body)
    try{
        const singleContact = await newContact.save()
        res.status(200).json({"result":singleContact})
    }
    catch(error){
        res.status(500).json({"result":error})
    }
})

// GET METHOD ALL DATA 
router.get('/',async(req,res)=>{
    try{
        const totalContact = await Contact.find({})
        res.status(200).json({"result":totalContact});
    }
    catch(error){
        res.status(500).json({"result":error})
    }
})

// SINGLE GET METHOD 
router.get('/:id',async(req,res)=>{
    try{
        const singleContact = await Contact.findById(req.params.id)
        res.status(200).json({"result":singleContact});
    }
    catch(error){
        res.status(500).json({"result":error});
    }
})

// DELETE METHOD 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteContact= await Contact.findByIdAndDelete(req.params.id)
        res.status(200).json({"Delete Confirmed!":deleteContact});
    }
    catch(error){
        res.status(500).json({"result":error});
    };
})





module.exports = router