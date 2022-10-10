const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min:0,
        max:5
    },
    description:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    }
})


module.exports = reviewSchema