const mongoose = require('mongoose')
const contactUsSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    messsage:{
        type:String,
        required:true
    }

})


module.exports = contactUsSchema