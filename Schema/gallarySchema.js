const mongoose = require('mongoose')
const gallarySchema = mongoose.Schema({
    catagory:{
        type:String,
        required:true
    },
    galaryurl:{
        type:String,
        required:true
    }
})


module.exports = gallarySchema