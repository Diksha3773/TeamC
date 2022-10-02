const mongoose=require('mongoose');

const Activity=new mongoose.Schema({
    type:{
        type:String,
        default:"Activity"
    },
    feed:{
        type:String,
        required:true
    },
    link:{
        type:String
    }
},{timestamps:true});

module.exports=mongoose.model('Activity',Activity,'Activity');