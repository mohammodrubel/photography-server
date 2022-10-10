const mongoose = require('mongoose')
const sliderSchema = mongoose.Schema({
    sliderTitle:{
        type:String,
        // required:true
    },
    sliderDescription:{
        type:String,
        // required:true
    },
    sliderUrl:{
        type:String,
        required:true
    }
})


module.exports = sliderSchema