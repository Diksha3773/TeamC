const mongoose=require('mongoose');

const NewsHighlight=new mongoose.Schema({
    type:{
        type:String,
    },
    feed:{
        type:String,
        required:true
    },
    link:{
        type:String
    }
},{timestamps:true});

module.exports=mongoose.model('NewsHighlight',NewsHighlight,'NewsHighlight');