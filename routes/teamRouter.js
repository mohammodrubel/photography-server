const express = require('express')
const mongoose = require('mongoose')
const teamScheme = require('../Schema/teamRouter')
const Team = new mongoose.model("Team",teamScheme)
const router = express.Router()

// POST METHOD 
router.post('/',async(req,res)=>{
    const newTeam = Team(req.body)
    try{
        const single = await newTeam.save()
        res.status(200).json({"result":single})
    }
    catch(error){
        res.status(500).json({"result":error})
    }
})

// GET METHOD ALL DATA 
router.get('/',async(req,res)=>{
    try{
        const totalTeamMember = await Team.find({})
        res.status(200).json({"result":totalTeamMember});
    }
    catch(error){
        res.status(500).json({"result":error})
    }
})

// SINGLE GET METHOD 
router.get('/:id',async(req,res)=>{
    try{
        const singleTeam = await Team.findById(req.params.id)
        res.status(200).json({"result":singleTeam});
    }
    catch(error){
        res.status(500).json({"result":error});
    }
})

// DELETE METHOD 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteTeamMember= await Team.findByIdAndDelete(req.params.id)
        res.status(200).json({"Delete Confirmed!":deleteTeamMember});
    }
    catch(error){
        res.status(500).json({"result":error});
    };
})





module.exports = router 