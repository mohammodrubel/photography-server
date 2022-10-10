const express = require('express')
const mongoose = require('mongoose')
const userSchema = require('../Schema/userSchema')
const User = new mongoose.model('User',userSchema)
const router = express.Router()

    router.get('/',async(req,res)=>{
        try{
            // const user = req.body;
            const result = await User.find({})
            res.status(200).json({"result":result})
        }
        catch(error){
            res.status(500).json({"result":error})
        }
    })

   // DELETE METHOD 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteUser= await User.findByIdAndDelete(req.params.id)
        res.status(200).json({"Delete Confirmed!":deleteUser});
    }
    catch(error){
        res.status(500).json({"result":error});
    };
})


    router.put('/:email',async(req,res)=>{
        try{
            const email = req.params.email;
            const user = req.body;
            const filter = {email:email};
            const options = {upsert:true};
            const updateDoc = {
                $set:user
            };
            const result = await User.updateOne(filter,updateDoc,options)
            res.status(200).json({"result":result})
            }
        catch(error){
            res.status(500).json({"result":error})
        }
    })

    router.put('/admin/:email',async(req,res)=>{
       try{
            const email = req.params.email;
            const filter = {email:email}
            const updateDocument = {$set:{role:"admin"}}
            const result = await User.updateOne(filter,updateDocument)
            res.status(200).json({result:result})
       }catch(error){
        res.status(500).json({"result":error})
       }
    })

    router.get('/:email',async(req,res)=>{
        try{
            const email = req.params.email;
            const query = {email:email}
            const user = await User.findOne(query)
            let isAdmin = false
                if(user?.role === 'admin'){
                    isAdmin = true
                }
                res.status(200).json({admin:isAdmin})  
            }
        catch(error){
            res.status(500).json({"result":error})
        }
    })
    
    





module.exports = router 