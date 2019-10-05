//this page is schema
const mongoose=require('mongoose');

const PostSchema=mongoose.Schema({
  title:{
    type:String,
    reuired:true
  },
  body:{
    type:String,
    reuired:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});

const Post=module.exports=mongoose.model('Post',PostSchema);
