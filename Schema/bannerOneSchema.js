const mongoose = require('mongoose')
const bannerOneSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    banneroneimgurl:{
        type:String,
        required:true
    }
})


module.exports = bannerOneSchema