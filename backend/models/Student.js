const mongoose = require('mongoose');
const Student= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    insta:{
        type:String
    },
    linkedin:{
        type:String
    }
})

module.exports= mongoose.model('Student',Student,'Student');