const mongoose = require('mongoose')
const teamSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    facebook:{
        type:String,
        required:true
    },
    instagram:{
        type:String,
        required:true
    }
})

module.exports = teamSchema