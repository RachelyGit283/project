const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
    title:{
    type:String,
    required:true,
    },
    body:{
        type:String,
        required:false,
    },
    active:{
    type:Boolean,
    default:false
    }
    },{
    timestamps:true
    })
    module.exports = mongoose.model('Article', articleSchema)