const mongoose = require('mongoose')
const appointmentSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:Number,
        required:true
    },
    typeofshoot:{
        type:String,
        required:true
    },
    description:{
        type:String,
        // required:true
    },
    date:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }

})


module.exports = appointmentSchema