const express = require('express')
const mongoose = require('mongoose')
const appointmentSchema = require('../Schema/appointmentSchema')
const Appointment = new mongoose.model("Appointment",appointmentSchema)
const router = express.Router()

        // POST METHOD 
    router.post('/',async(req,res)=>{
        const newAppointment = Appointment(req.body)
        try{
            const singleAppointment = await newAppointment.save()
            res.status(200).json({"result":singleAppointment})
        }
        catch(error){
            res.status(500).json({"result":error})
        }
    })

    // GET METHOD ALL DATA 
    router.get('/',async(req,res)=>{
        try{
            const totalAppointment = await Appointment.find({})
            res.status(200).json({"result":totalAppointment});
        }
        catch(error){
            res.status(500).json({"result":error})
        }
    })

    // SINGLE GET METHOD 
    router.get('/:id',async(req,res)=>{
        try{
            const singleAppointment = await Appointment.findById(req.params.id)
            res.status(200).json({"result":singleAppointment});
        }
        catch(error){
            res.status(500).json({"result":error});
        }
    })

    // DELETE METHOD 
    router.delete('/:id',async(req,res)=>{
        try{
            const deleteAppointment= await Appointment.findByIdAndDelete(req.params.id)
            res.status(200).json({"success":deleteAppointment});
            consol.log(deleteAppointment)
        }
        catch(error){
            res.status(500).json({"result":error});
        };
    })




module.exports = router