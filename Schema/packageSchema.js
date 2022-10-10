const mongoose = require('mongoose')

const PackageSchema = mongoose.Schema({
    rank:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    extra:{
        type:String,
        required:true
    },
    information:{
        type:String,
        required:true
    }
    
})

module.exports = PackageSchema